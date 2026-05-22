"use client"

import { useLanguage } from "./LanguageContext"
import styles from "./PatientRegistrationForm.module.css"

export default function LanguageToggle() {
	const { lang, setLang, t } = useLanguage()

	return (
		<div
			className={styles.languageToggle}
			role="group"
			aria-label={t("languageToggleLabel")}
		>
			<button
				type="button"
				className={`${styles.languageButton} ${lang === "en" ? styles.languageButtonActive : ""}`}
				aria-pressed={lang === "en"}
				onClick={() => setLang("en")}
			>
				ENGLISH
			</button>
			<button
				type="button"
				className={`${styles.languageButton} ${lang === "es" ? styles.languageButtonActive : ""}`}
				aria-pressed={lang === "es"}
				onClick={() => setLang("es")}
			>
				ESPAÑOL
			</button>
		</div>
	)
}
