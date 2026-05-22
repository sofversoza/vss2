import { NextResponse } from "next/server"
import { fullRegistrationSchema } from "@/lib/patient-registration/schema"
import { generateRegistrationPDF } from "@/lib/patient-registration/pdfGenerator"
import { sendEmail } from "@/lib/email"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// Very lightweight in-memory rate limit. For production, swap for Redis/Upstash —
// in-memory state does not survive restarts and does not work across instances.
const rateLimitStore = new Map()
const RATE_LIMIT_MAX = 5 // submissions
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000 // per hour

function getClientIP(request) {
	const forwardedFor = request.headers.get("x-forwarded-for")
	if (forwardedFor) return forwardedFor.split(",")[0].trim()
	const realIP = request.headers.get("x-real-ip")
	if (realIP) return realIP
	return "unknown"
}

function isRateLimited(ip) {
	const now = Date.now()
	const entry = rateLimitStore.get(ip)
	if (!entry || now - entry.startedAt > RATE_LIMIT_WINDOW_MS) {
		rateLimitStore.set(ip, { count: 1, startedAt: now })
		return false
	}
	entry.count += 1
	return entry.count > RATE_LIMIT_MAX
}

function isAllowedOrigin(request) {
	const origin = request.headers.get("origin")
	const host = request.headers.get("host")
	if (!origin) return true // direct same-origin server-to-server (no browser origin)
	try {
		const originHost = new URL(origin).host
		return originHost === host
	} catch {
		return false
	}
}

export async function POST(request) {
	try {
		if (!isAllowedOrigin(request)) {
			return NextResponse.json({ error: "Forbidden" }, { status: 403 })
		}

		const ip = getClientIP(request)
		if (isRateLimited(ip)) {
			return NextResponse.json(
				{ error: "Too many submissions. Please try again later." },
				{ status: 429 },
			)
		}

		const body = await request.json()

		// Server-side schema validation — never trust the client
		const parsed = fullRegistrationSchema.safeParse(body)
		if (!parsed.success) {
			return NextResponse.json(
				{
					error: "Validation failed",
					// Surface field paths but not values, to avoid leaking PHI in logs
					fields: parsed.error.issues.map((i) => i.path.join(".")),
				},
				{ status: 400 },
			)
		}

		const data = parsed.data

		// Generate PDF (Uint8Array)
		const pdfBytes = await generateRegistrationPDF(data)

		// Build recipient list from env vars (placeholder-friendly).
		const recipients = [
			process.env.REGISTRATION_RECIPIENT_1,
			process.env.REGISTRATION_RECIPIENT_2,
		].filter(Boolean)

		if (recipients.length === 0) {
			// Fail closed in prod, but allow dev to proceed against the console provider
			if (process.env.NODE_ENV === "production") {
				return NextResponse.json(
					{ error: "Server configuration error" },
					{ status: 500 },
				)
			}
		}

		const patientName = `${data.general.firstName} ${data.general.lastName}`
		const filenameSafeName = patientName
			.replace(/[^a-zA-Z0-9]+/g, "_")
			.toLowerCase()

		await sendEmail({
			to: recipients.length ? recipients : ["dev@placeholder.local"],
			subject: `New Patient Registration — ${patientName}`,
			text:
				`A new patient registration was submitted.\n\n` +
				`Patient: ${patientName}\n` +
				`DOB: ${data.general.birthDate}\n` +
				`Submitted: ${new Date().toLocaleString("en-US")}\n\n` +
				`Full details are attached as a PDF. This message may contain PHI; treat accordingly.`,
			html:
				`<p>A new patient registration was submitted.</p>` +
				`<p><strong>Patient:</strong> ${escapeHtml(patientName)}<br>` +
				`<strong>DOB:</strong> ${escapeHtml(data.general.birthDate)}<br>` +
				`<strong>Submitted:</strong> ${new Date().toLocaleString("en-US")}</p>` +
				`<p>Full details are attached as a PDF. This message may contain PHI; treat accordingly.</p>`,
			attachments: [
				{
					filename: `${filenameSafeName}_registration.pdf`,
					content: Buffer.from(pdfBytes),
					contentType: "application/pdf",
				},
			],
		})

		return NextResponse.json({ ok: true })
	} catch (err) {
		// Log error class only — NEVER log request body or PHI
		// eslint-disable-next-line no-console
		console.error("[patient-registration] failure:", err?.name, err?.message)
		return NextResponse.json(
			{ error: "Submission failed. Please try again." },
			{ status: 500 },
		)
	}
}

function escapeHtml(str) {
	return String(str)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;")
}
