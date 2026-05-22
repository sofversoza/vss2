import { promises as fs } from "node:fs"
import path from "node:path"

/**
 * Dev-only provider — logs metadata to stdout and (in non-production) writes
 * attachments to ./tmp/registrations/ so you can preview the generated PDF.
 *
 * Never use in production with real PHI: writing PDFs to local disk is not
 * acceptable under HIPAA.
 */
export async function consoleProvider({ to, subject, attachments = [] }) {
	const recipients = Array.isArray(to) ? to : [to]

	const savedPaths = []
	if (process.env.NODE_ENV !== "production" && attachments.length > 0) {
		const outDir = path.join(process.cwd(), "tmp", "registrations")
		await fs.mkdir(outDir, { recursive: true })

		const timestamp = new Date().toISOString().replace(/[:.]/g, "-")
		for (const att of attachments) {
			const safeName = (att.filename || "attachment.bin").replace(
				/[^a-zA-Z0-9._-]/g,
				"_",
			)
			const outPath = path.join(outDir, `${timestamp}_${safeName}`)
			await fs.writeFile(outPath, att.content)
			savedPaths.push(outPath)
		}
	}

	// eslint-disable-next-line no-console
	console.log("[email:console] would send", {
		to: recipients.map((r) => maskEmail(r)),
		subject,
		attachmentCount: attachments.length,
		attachmentSizes: attachments.map((a) => a.content?.length ?? 0),
		savedTo: savedPaths,
		timestamp: new Date().toISOString(),
	})

	return { provider: "console", id: `console-${Date.now()}`, savedPaths }
}

function maskEmail(email) {
	if (!email || typeof email !== "string") return "[invalid]"
	const [local, domain] = email.split("@")
	if (!domain) return "[invalid]"
	const maskedLocal =
		local.length <= 2 ? "**" : `${local[0]}***${local[local.length - 1]}`
	return `${maskedLocal}@${domain}`
}
