"use client"

import { Controller, useFormContext } from "react-hook-form"
import { useLanguage } from "../LanguageContext"
import MultiSelectChips from "../fields/MultiSelectChips"
import CancerEntries from "../CancerEntries"
import {
	FAMILY_GENERAL_CONDITIONS,
	FAMILY_VASCULAR_CONDITIONS,
	FAMILY_MEMBERS_FULL,
	FAMILY_MEMBERS_IMMEDIATE,
} from "@/lib/patient-registration/familyHistory"
import styles from "../PatientRegistrationForm.module.css"

export default function FamilyHistoryStep() {
	const { t } = useLanguage()

	return (
		<section aria-labelledby="step-heading">
			<h2 id="step-heading" className={styles.stepHeading}>
				{t("headingFamilyHistory")}
			</h2>

			{/* GENERAL CONDITIONS */}
			<p className={styles.sectionHelpStrong}>
				{t("familyHistoryGeneralHeading")}
			</p>
			<p className={styles.sectionHelp}>{t("familyHistoryGeneralHelp")}</p>

			<div className={styles.familyList}>
				{FAMILY_GENERAL_CONDITIONS.map((cond) => (
					<div key={cond.id} className={styles.familyConditionRow}>
						<div className={styles.familyConditionLabel}>{t(cond.labelKey)}</div>
						<MultiSelectChips
							name={`familyHistory.generalConditions.${cond.id}`}
							options={FAMILY_MEMBERS_FULL}
						/>
					</div>
				))}
			</div>

			{/* VASCULAR */}
			<h3 className={styles.subheading}>{t("familyHistoryVascularHeading")}</h3>
			<p className={styles.sectionHelp}>{t("familyHistoryVascularHelp")}</p>

			<div className={styles.familyList}>
				{FAMILY_VASCULAR_CONDITIONS.map((cond) => (
					<VascularRow key={cond.id} condition={cond} />
				))}
			</div>

			{/* CANCER */}
			<h3 className={styles.subheading}>{t("familyHistoryCancerHeading")}</h3>
			<p className={styles.sectionHelp}>{t("familyHistoryCancerHelp")}</p>

			<CancerEntries />
		</section>
	)
}

/**
 * One vascular row — condition label + 4 family-member checkboxes.
 * Stores selected members as an array of strings under
 * familyHistory.vascular.<conditionId>.
 */
function VascularRow({ condition }) {
	const { t } = useLanguage()
	const { control } = useFormContext()
	const fieldName = `familyHistory.vascular.${condition.id}`

	return (
		<div className={styles.vascularRow}>
			<div className={styles.familyConditionLabel}>{t(condition.labelKey)}</div>
			<Controller
				control={control}
				name={fieldName}
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
						<fieldset className={styles.vascularCheckboxes}>
							<legend className={styles.srOnly}>{t(condition.labelKey)}</legend>
							{FAMILY_MEMBERS_IMMEDIATE.map((member) => (
								<label
									key={member.value}
									className={styles.vascularCheckLabel}
								>
									<input
										type="checkbox"
										checked={selected.includes(member.value)}
										onChange={() => toggle(member.value)}
									/>
									{t(member.labelKey)}
								</label>
							))}
						</fieldset>
					)
				}}
			/>
		</div>
	)
}
