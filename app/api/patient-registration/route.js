import { NextResponse } from "next/server"
import { Resend } from "resend"
import { fullRegistrationSchema } from "@/lib/patient-registration/schema"
import { generateRegistrationPDF } from "@/lib/patient-registration/pdfGenerator"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const resend = new Resend(process.env.RESEND_API_KEY)

function isAllowedOrigin(request) {
	const origin = request.headers.get("origin")
	const host = request.headers.get("host")
	if (!origin) return true
	try {
		return new URL(origin).host === host
	} catch {
		return false
	}
}

export async function POST(request) {
	try {
		if (!isAllowedOrigin(request)) {
			return NextResponse.json({ error: "Forbidden" }, { status: 403 })
		}

		const body = await request.json()

		const parsed = fullRegistrationSchema.safeParse(body)
		if (!parsed.success) {
			return NextResponse.json(
				{
					error: "Validation failed",
					fields: parsed.error.issues.map((i) => i.path.join(".")),
				},
				{ status: 400 },
			)
		}

		const data = parsed.data
		const pdfBytes = await generateRegistrationPDF(data)

		const recipients = [
			process.env.REGISTRATION_RECIPIENT_1,
			process.env.REGISTRATION_RECIPIENT_2,
		].filter(Boolean)

		if (recipients.length === 0) {
			return NextResponse.json(
				{ error: "Server configuration error" },
				{ status: 500 },
			)
		}

		const patientName = `${data.general.firstName} ${data.general.lastName}`
		const filenameSafeName = patientName
			.replace(/[^a-zA-Z0-9]+/g, "_")
			.toLowerCase()

		const { error } = await resend.emails.send({
			from: process.env.EMAIL_FROM_ADDRESS,
			to: recipients,
			subject: `New Patient Registration — ${patientName}`,
			html:
				`<p>A new patient registration was submitted.</p>` +
				`<p><strong>Patient:</strong> ${escapeHtml(patientName)}<br>` +
				`<strong>DOB:</strong> ${escapeHtml(data.general.birthDate)}<br>` +
				`<strong>Submitted:</strong> ${new Date().toLocaleString("en-US")}</p>` +
				`<p>Full details are attached as a PDF.</p>`,
			attachments: [
				{
					filename: `${filenameSafeName}_registration.pdf`,
					content: Buffer.from(pdfBytes),
				},
			],
		})

		if (error) {
			console.error("[patient-registration] resend error:", error)
			return NextResponse.json(
				{ error: "Submission failed. Please try again." },
				{ status: 500 },
			)
		}

		return NextResponse.json({ ok: true })
	} catch (err) {
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
