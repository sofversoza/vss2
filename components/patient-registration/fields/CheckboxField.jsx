"use client"

import { useFormContext } from "react-hook-form"
import { useId } from "react"
import { useLanguage } from "../LanguageContext"
import styles from "./fields.module.css"

export default function CheckboxField({
	name,
	labelKey,
	required = false,
}) {
	const { register, formState } = useFormContext()
	const { t } = useLanguage()
	const reactId = useId()
	const inputId = `${name.replace(/\./g, "-")}-${reactId}`
	const errorId = `${inputId}-error`

	const error = name
		.split(".")
		.reduce((obj, key) => obj?.[key], formState.errors)
	const errorMessage = error?.message ? t(error.message) : null

	return (
		<div className={styles.field}>
			<label htmlFor={inputId} className={styles.checkboxLabel}>
				<input
					id={inputId}
					type="checkbox"
					className={styles.checkboxInput}
					aria-invalid={error ? "true" : undefined}
					aria-describedby={errorId}
					aria-required={required || undefined}
					{...register(name)}
				/>
				<span>
					{t(labelKey)}
					{required && (
						<span className={styles.requiredMark} aria-hidden="true">
							{" *"}
						</span>
					)}
				</span>
			</label>

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
