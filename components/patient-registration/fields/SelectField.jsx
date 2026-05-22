"use client"

import { useFormContext } from "react-hook-form"
import { useId } from "react"
import { useLanguage } from "../LanguageContext"
import styles from "./fields.module.css"

/**
 * options:
 *  - simple: [{ value, label }]
 *  - bilingual: [{ value, en, es }] — resolved using current language
 */
export default function SelectField({
	name,
	labelKey,
	options,
	required = false,
	autoComplete,
	placeholderKey,
}) {
	const { register, formState } = useFormContext()
	const { t, lang } = useLanguage()
	const reactId = useId()
	const inputId = `${name.replace(/\./g, "-")}-${reactId}`
	const errorId = `${inputId}-error`

	const error = name
		.split(".")
		.reduce((obj, key) => obj?.[key], formState.errors)
	const errorMessage = error?.message ? t(error.message) : null

	const resolveLabel = (opt) => opt.label ?? opt[lang] ?? opt.en ?? opt.value

	return (
		<div className={styles.field}>
			<label htmlFor={inputId} className={styles.label}>
				{t(labelKey)}
				{required && (
					<span className={styles.requiredMark} aria-hidden="true">
						{" *"}
					</span>
				)}
			</label>

			<select
				id={inputId}
				aria-invalid={error ? "true" : undefined}
				aria-describedby={errorId}
				aria-required={required || undefined}
				autoComplete={autoComplete}
				className={`${styles.input} ${styles.select} ${
					error ? styles.inputError : ""
				}`}
				{...register(name)}
			>
				<option value="">
					{placeholderKey ? t(placeholderKey) : "—"}
				</option>
				{options.map((opt) => (
					<option key={opt.value} value={opt.value}>
						{resolveLabel(opt)}
					</option>
				))}
			</select>

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
