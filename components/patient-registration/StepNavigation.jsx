"use client"

import { useLanguage } from "./LanguageContext"
import styles from "./PatientRegistrationForm.module.css"

export default function StepNavigation({
	isFirstStep,
	isLastStep,
	onPrevious,
	onNext,
	isSubmitting,
}) {
	const { t } = useLanguage()

	return (
		<div className={styles.navigation}>
			<button
				type="button"
				className={`${styles.navButton} ${styles.navButtonSecondary}`}
				onClick={onPrevious}
				disabled={isFirstStep || isSubmitting}
				aria-label={t("navPrevious")}
			>
				{t("navPrevious")}
			</button>

			{isLastStep ? (
				<button
					type="submit"
					className={`${styles.navButton} ${styles.navButtonPrimary}`}
					disabled={isSubmitting}
					aria-label={t("navSubmit")}
				>
					{isSubmitting ? t("navSubmitting") : t("navSubmit")}
				</button>
			) : (
				<button
					type="button"
					className={`${styles.navButton} ${styles.navButtonPrimary}`}
					onClick={onNext}
					disabled={isSubmitting}
					aria-label={t("navNext")}
				>
					{t("navNext")}
				</button>
			)}
		</div>
	)
}
