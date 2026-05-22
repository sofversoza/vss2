"use client"

import Link from "next/link"
import { useLanguage } from "./LanguageContext"
import styles from "./PatientRegistrationForm.module.css"

export default function SuccessScreen() {
	const { t } = useLanguage()

	return (
		<div className={styles.successPanel} role="status">
			<div className={styles.successIcon} aria-hidden="true">
				✓
			</div>
			<h2 className={styles.successTitle}>{t("submitSuccessTitle")}</h2>
			<p className={styles.successBody}>{t("submitSuccessBody")}</p>
			<Link href="/resources" className={styles.successLink}>
				{t("submitSuccessReturn")}
			</Link>
		</div>
	)
}
