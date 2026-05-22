"use client"

import { useFormContext, Controller } from "react-hook-form"
import { useId } from "react"
import { useLanguage } from "../LanguageContext"
import styles from "./fields.module.css"

// Auto-formats user input into MM/DD/YYYY as they type
function formatDateInput(raw) {
	const digits = raw.replace(/\D/g, "").slice(0, 8)
	const parts = []
	if (digits.length > 0) parts.push(digits.slice(0, 2))
	if (digits.length >= 3) parts[1] = digits.slice(2, 4)
	if (digits.length >= 5) parts[2] = digits.slice(4, 8)
	return parts.filter(Boolean).join("/")
}

export default function DateField({
	name,
	labelKey,
	required = false,
	autoComplete = "bday",
}) {
	const { control, formState } = useFormContext()
	const { t } = useLanguage()
	const reactId = useId()
	const inputId = `${name.replace(/\./g, "-")}-${reactId}`
	const errorId = `${inputId}-error`
	const helpId = `${inputId}-help`

	const error = name
		.split(".")
		.reduce((obj, key) => obj?.[key], formState.errors)
	const errorMessage = error?.message ? t(error.message) : null

	return (
		<div className={styles.field}>
			<label htmlFor={inputId} className={styles.label}>
				{t(labelKey)}
				{required && (
					<span className={styles.requiredMark} aria-hidden="true">
						{" *"}
					</span>
				)}
				<span id={helpId} className={styles.labelInlineHelp}>
					{t("birthDateHelp")}
				</span>
			</label>

			<Controller
				control={control}
				name={name}
				render={({ field }) => (
					<input
						id={inputId}
						type="text"
						inputMode="numeric"
						placeholder="MM/DD/YYYY"
						autoComplete={autoComplete}
						aria-invalid={error ? "true" : undefined}
						aria-describedby={`${errorId} ${helpId}`}
						aria-required={required || undefined}
						className={`${styles.input} ${error ? styles.inputError : ""}`}
						value={field.value || ""}
						onChange={(e) => field.onChange(formatDateInput(e.target.value))}
						onBlur={field.onBlur}
						maxLength={10}
					/>
				)}
			/>

			<p
				id={errorId}
				className={styles.error}
				role="alert"
				aria-live="polite"
			>
				{errorMessage}
			</p>
		</div>
	)
}
