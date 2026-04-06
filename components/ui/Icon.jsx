import styles from "./Icon.module.css"

export default function Icon({
	name,
	filled = false,
	size = 24,
	weight = 400,
	grade = 0,
	opticalSize = 24,
	className = "",
	label,
}) {
	const style = {
		fontSize: `${size}px`,
		fontVariationSettings: `
      'FILL' ${filled ? 1 : 0},
      'wght' ${weight},
      'GRAD' ${grade},
      'opsz' ${opticalSize}
    `,
	}

	const isDecorative = !label // no screen reader (next to a text)

	return (
		<span
			className={`material-symbols-outlined ${styles.icon} ${className}`}
			style={style}
			aria-hidden={isDecorative}
			aria-label={label}
			role={isDecorative ? undefined : "img"}
		>
			{name}
		</span>
	)
}
