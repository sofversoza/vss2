import styles from "./ui.module.css"

export default function PageIntro({ title, subtitle, titleId }) {
	return (
		<div className={styles.pageIntro}>
			<h1 id={titleId} className={styles.pageIntroTitle}>
				{title}
			</h1>

			{subtitle && <p className={styles.pageIntroSubtitle}>{subtitle}</p>}
		</div>
	)
}
