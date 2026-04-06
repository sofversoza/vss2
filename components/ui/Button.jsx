import Link from "next/link"
import styles from "./ui.module.css"

export default function Button({
	text,
	href,
	color = "var(--primary-light)",
	ariaLabel,
	target,
	rel,
}) {
	const isExternal =
		href?.startsWith("http") ||
		href?.startsWith("mailto:") ||
		href?.startsWith("tel:")

	const sharedProps = {
		className: styles.button,
		style: { "--button-bg": color },
		"aria-label": ariaLabel || text,
	}

	if (isExternal) {
		return (
			<a
				href={href}
				target={target}
				rel={rel || (target === "_blank" ? "noreferrer" : undefined)}
				{...sharedProps}
			>
				{text}
			</a>
		)
	}

	return (
		<Link href={href} {...sharedProps}>
			{text}
		</Link>
	)
}
