"use client"

import { useFormContext, Controller } from "react-hook-form"
import { useId } from "react"
import { useLanguage } from "../LanguageContext"
import styles from "./fields.module.css"

/**
 * Multi-select checkbox group. Stores the selected items as an array of value strings.
 *
 * Props:
 *  - name: form field name (must be a string-array field)
 *  - items: [{ value, en, es }]
 *  - titleKey: i18n key for the category title (rendered as legend)
 */
export default function CheckboxGroup({ name, items, titleKey }) {
	const { control } = useFormContext()
	const { t, lang } = useLanguage()
	const groupId = useId()

	const resolveLabel = (item) => item[lang] ?? item.en ?? item.value

	return (
		<Controller
			control={control}
			name={name}
			defaultValue={[]}
			render={({ field }) => {
				const selected = Array.isArray(field.value) ? field.value : []

				const toggle = (val) => {
					if (selected.includes(val)) {
						field.onChange(selected.filter((v) => v !== val))
					} else {
						field.onChange([...selected, val])
					}
				}

				return (
					<fieldset className={styles.checkGroup}>
						<legend className={styles.checkGroupLegend}>{t(titleKey)}</legend>
						<div className={styles.checkGroupItems}>
							{items.map((item) => {
								const optId = `${groupId}-${item.value}`
								const isChecked = selected.includes(item.value)
								return (
									<label
										key={item.value}
										htmlFor={optId}
										className={styles.checkGroupItem}
									>
										<input
											id={optId}
											type="checkbox"
											className={styles.checkboxInput}
											checked={isChecked}
											onChange={() => toggle(item.value)}
										/>
										<span>{resolveLabel(item)}</span>
									</label>
								)
							})}
						</div>
					</fieldset>
				)
			}}
		/>
	)
}
