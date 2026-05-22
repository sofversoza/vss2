"use client"

import { useLanguage } from "./LanguageContext"
import styles from "./PatientRegistrationForm.module.css"

export default function FormStepper({ steps, currentStep, onStepClick }) {
	const { t } = useLanguage()
	const total = steps.length
	const current = currentStep + 1
	const percent = Math.round(((currentStep + 1) / total) * 100)

	return (
		<nav
			className={styles.stepper}
			aria-label={t("ariaProgress")}
		>
			<div className={styles.stepperHeader}>
				<p className={styles.stepperLabel}>
					{t("stepProgressLabel", { current, total })}
				</p>
				<p className={styles.stepperPercent} aria-hidden="true">
					{percent}%
				</p>
			</div>

			<div
				className={styles.progressBar}
				role="progressbar"
				aria-valuenow={percent}
				aria-valuemin={0}
				aria-valuemax={100}
				aria-label={t("ariaProgress")}
			>
				<div
					className={styles.progressFill}
					style={{ width: `${percent}%` }}
				/>
			</div>

			<ol className={styles.stepList}>
				{steps.map((step, index) => {
					const isComplete = index < currentStep
					const isActive = index === currentStep
					const canJump = isComplete || isActive
					return (
						<li key={step.id} className={styles.stepItem}>
							<button
								type="button"
								className={`${styles.stepDot} ${
									isActive ? styles.stepDotActive : ""
								} ${isComplete ? styles.stepDotComplete : ""}`}
								onClick={() => canJump && onStepClick(index)}
								disabled={!canJump}
								aria-current={isActive ? "step" : undefined}
							>
								<span className={styles.stepDotNumber} aria-hidden="true">
									{isComplete ? "✓" : index + 1}
								</span>
								<span className={styles.stepDotLabel}>{t(step.labelKey)}</span>
							</button>
						</li>
					)
				})}
			</ol>
		</nav>
	)
}
