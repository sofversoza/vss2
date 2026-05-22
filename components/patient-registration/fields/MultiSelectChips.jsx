"use client"

import { useFormContext, Controller } from "react-hook-form"
import { useId, useState } from "react"
import { useLanguage } from "../LanguageContext"
import styles from "./fields.module.css"

/**
 * MultiSelectChips
 *
 * A compact multi-select. User picks an option from the dropdown; it appears
 * as a removable chip below. Used for cases like "which family members have
 * high blood pressure".
 *
 * Props:
 *  - name:        form field name (must be array-valued)
 *  - options:     [{ value, labelKey }]
 *  - placeholderKey: i18n key for the empty dropdown option
 *  - labelKey:    optional inline label
 */
export default function MultiSelectChips({
	name,
	options,
	placeholderKey = "familyHistoryAddRelative",
	labelKey,
}) {
	const { control } = useFormContext()
	const { t } = useLanguage()
	const reactId = useId()
	const selectId = `${name.replace(/\./g, "-")}-${reactId}`

	// Pre-resolve labels for the current language
	const resolvedOptions = options.map((o) => ({
		value: o.value,
		label: o.labelKey ? t(o.labelKey) : (o.label ?? o.value),
	}))

	return (
		<Controller
			control={control}
			name={name}
			defaultValue={[]}
			render={({ field }) => {
				const selected = Array.isArray(field.value) ? field.value : []

				const add = (val) => {
					if (!val || selected.includes(val)) return
					field.onChange([...selected, val])
				}
				const remove = (val) => {
					field.onChange(selected.filter((v) => v !== val))
				}

				const available = resolvedOptions.filter(
					(o) => !selected.includes(o.value),
				)

				return (
					<div className={styles.multiSelectBlock}>
						{labelKey && (
							<label
								htmlFor={selectId}
								className={`${styles.label} ${styles.multiSelectLabel}`}
							>
								{t(labelKey)}
							</label>
						)}

						<div className={styles.multiSelectControls}>
							<MultiSelectDropdown
								id={selectId}
								available={available}
								placeholder={t(placeholderKey)}
								onAdd={add}
							/>

							{selected.length > 0 && (
								<ul className={styles.chipList}>
									{selected.map((val) => {
										const opt = resolvedOptions.find((o) => o.value === val)
										const label = opt ? opt.label : val
										return (
											<li key={val} className={styles.chip}>
												<span>{label}</span>
												<button
													type="button"
													aria-label={`${t("familyMemberRemove")} ${label}`}
													className={styles.chipRemove}
													onClick={() => remove(val)}
												>
													×
												</button>
											</li>
										)
									})}
								</ul>
							)}
						</div>
					</div>
				)
			}}
		/>
	)
}

function MultiSelectDropdown({ id, available, placeholder, onAdd }) {
	const [value, setValue] = useState("")

	if (available.length === 0) return null

	const handleChange = (e) => {
		const v = e.target.value
		if (v) {
			onAdd(v)
			setValue("")
		}
	}

	return (
		<select
			id={id}
			value={value}
			onChange={handleChange}
			className={`${styles.input} ${styles.select} ${styles.multiSelectDropdown}`}
		>
			<option value="">{placeholder}</option>
			{available.map((o) => (
				<option key={o.value} value={o.value}>
					{o.label}
				</option>
			))}
		</select>
	)
}
