import { consoleProvider } from "./providers/console"
import { resendProvider } from "./providers/resend"

/**
 * Pluggable EmailService.
 *
 * Provider is selected via the EMAIL_PROVIDER env var:
 *   - "console" (default in dev) — logs to stdout, no actual send
 *   - "resend"                   — uses RESEND_API_KEY
 *   - extend by adding files under ./providers and wiring them below
 *
 * IMPORTANT: This codebase is NOT HIPAA-compliant out of the box. Before using
 * this in production with real PHI, sign a BAA with your provider, enable
 * audit logging, and verify in-transit/at-rest encryption.
 */
export async function sendEmail(payload) {
	const providerName = process.env.EMAIL_PROVIDER || "console"
	const provider = providers[providerName]
	if (!provider) {
		throw new Error(`Unknown EMAIL_PROVIDER "${providerName}"`)
	}
	return provider(payload)
}

const providers = {
	console: consoleProvider,
	resend: resendProvider,
}
