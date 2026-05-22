"use client"

import { useFormContext } from "react-hook-form"
import { useId } from "react"
import { useLanguage } from "../LanguageContext"
import styles from "./fields.module.css"

export default function TextField({
	name,
	labelKey,
	type = "text",
	required = false,
	autoComplete,
	placeholder,
	helpKey,
	inlineHelp = false,
	inputMode,
	maxLength,
	multiline = false,
	rows = 4,
}) {
	const { register, formState } = useFormContext()
	const { t } = useLanguage()
	const reactId = useId()
	const inputId = `${name.replace(/\./g, "-")}-${reactId}`
	const errorId = `${inputId}-error`
	const helpId = helpKey ? `${inputId}-help` : undefined

	// Resolve nested error (e.g., "general.firstName")
	const error = name
		.split(".")
		.reduce((obj, key) => obj?.[key], formState.errors)

	const errorMessage = error?.message ? t(error.message) : null
	const describedBy = [errorId, helpId].filter(Boolean).join(" ") || undefined

	const sharedProps = {
		id: inputId,
		"aria-invalid": error ? "true" : undefined,
		"aria-describedby": describedBy,
		"aria-required": required || undefined,
		autoComplete,
		placeholder,
		inputMode,
		maxLength,
		className: `${styles.input} ${error ? styles.inputError : ""}`,
		...register(name),
	}

	return (
		<div className={styles.field}>
			<label htmlFor={inputId} className={styles.label}>
				{t(labelKey)}
				{required && (
					<span className={styles.requiredMark} aria-hidden="true">
						{" *"}
					</span>
				)}
				{helpKey && inlineHelp && (
					<span id={helpId} className={styles.labelInlineHelp}>
						{t(helpKey)}
					</span>
				)}
			</label>

			{helpKey && !inlineHelp && (
				<p id={helpId} className={styles.helpAboveInput}>
					{t(helpKey)}
				</p>
			)}

			{multiline ? (
				<textarea {...sharedProps} rows={rows} />
			) : (
				<input type={type} {...sharedProps} />
			)}

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
