"use client"

import { useFormContext } from "react-hook-form"
import { useId } from "react"
import { useLanguage } from "../LanguageContext"
import styles from "./fields.module.css"

export default function RadioGroup({
	name,
	labelKey,
	options, // [{ value, labelKey }]
	required = false,
}) {
	const { register, formState } = useFormContext()
	const { t } = useLanguage()
	const groupId = useId()
	const errorId = `${groupId}-error`

	const error = name
		.split(".")
		.reduce((obj, key) => obj?.[key], formState.errors)
	const errorMessage = error?.message ? t(error.message) : null

	return (
		<fieldset
			className={styles.field}
			aria-invalid={error ? "true" : undefined}
			aria-describedby={errorId}
			aria-required={required || undefined}
		>
			<legend className={styles.label}>
				{t(labelKey)}
				{required && (
					<span className={styles.requiredMark} aria-hidden="true">
						{" *"}
					</span>
				)}
			</legend>

			<div className={styles.radioRow}>
				{options.map((opt) => {
					const optId = `${groupId}-${opt.value}`
					return (
						<label key={opt.value} htmlFor={optId} className={styles.radioLabel}>
							<input
								id={optId}
								type="radio"
								value={opt.value}
								className={styles.radioInput}
								{...register(name)}
							/>
							<span>{t(opt.labelKey)}</span>
						</label>
					)
				})}
			</div>

			<p
				id={errorId}
				className={styles.error}
				role="alert"
				aria-live="polite"
			>
				{errorMessage}
			</p>
		</fieldset>
	)
}
