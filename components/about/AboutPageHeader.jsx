import styles from "./about.module.css"

export default function AboutPageHeader({ title }) {
	return (
		<header className={styles.pageHeader}>
			<h1 className={styles.pageHeaderTitle}>{title}</h1>
		</header>
	)
}
