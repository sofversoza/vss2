/**
 * Resend provider — implements the same interface as consoleProvider.
 *
 * Required env vars (set in .env.local, never commit):
 *   RESEND_API_KEY        — your Resend API key (sign BAA on HIPAA-eligible plan)
 *   EMAIL_FROM_ADDRESS    — verified sender, e.g. "noreply@vascularsurgerydocs.com"
 *
 * NOTE: This is a thin fetch-based implementation. To use, set
 *   EMAIL_PROVIDER=resend
 * in the environment. No additional npm dependency required.
 */
export async function resendProvider({ to, subject, html, text, attachments = [] }) {
	const apiKey = process.env.RESEND_API_KEY
	const from = process.env.EMAIL_FROM_ADDRESS

	if (!apiKey || !from) {
		throw new Error(
			"resendProvider requires RESEND_API_KEY and EMAIL_FROM_ADDRESS env vars",
		)
	}

	const recipients = Array.isArray(to) ? to : [to]

	const body = {
		from,
		to: recipients,
		subject,
		html,
		text,
		attachments: attachments.map((a) => ({
			filename: a.filename,
			content: Buffer.isBuffer(a.content)
				? a.content.toString("base64")
				: Buffer.from(a.content).toString("base64"),
		})),
	}

	const res = await fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${apiKey}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	})

	if (!res.ok) {
		const errorBody = await res.text()
		throw new Error(`Resend API error (${res.status}): ${errorBody}`)
	}

	const data = await res.json()
	return { provider: "resend", id: data.id }
}
