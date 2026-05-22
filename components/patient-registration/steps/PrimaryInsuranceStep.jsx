"use client"

import { useFormContext } from "react-hook-form"
import { useEffect } from "react"
import TextField from "../fields/TextField"
import SelectField from "../fields/SelectField"
import CheckboxField from "../fields/CheckboxField"
import DateField from "../fields/DateField"
import { useLanguage } from "../LanguageContext"
import { US_STATES } from "@/lib/patient-registration/options"
import styles from "../PatientRegistrationForm.module.css"

export default function PrimaryInsuranceStep() {
	const { t } = useLanguage()
	const { watch, setValue, getValues } = useFormContext()
	const sameAsPatient = watch("primaryInsurance.sameAsPatient")

	// When "Same as Patient" is toggled on, auto-fill from general step
	useEffect(() => {
		if (sameAsPatient) {
			const general = getValues("general")
			const fullName = [general.firstName, general.middleInitial, general.lastName]
				.filter(Boolean)
				.join(" ")
			setValue("primaryInsurance.policyHolderName", fullName, {
				shouldValidate: true,
			})
			setValue("primaryInsurance.policyHolderBirthDate", general.birthDate || "", {
				shouldValidate: true,
			})
			setValue("primaryInsurance.policyHolderRelation", "self", {
				shouldValidate: true,
			})
		}
	}, [sameAsPatient, getValues, setValue])

	return (
		<section aria-labelledby="step-heading">
			<h2 id="step-heading" className={styles.stepHeading}>
				{t("headingPrimaryInsurance")}
			</h2>
			<p className={styles.requiredNote}>{t("requiredNote")}</p>

			<div className={styles.row2}>
				<TextField
					name="primaryInsurance.company"
					labelKey="insuranceCompany"
					required
				/>
				<TextField
					name="primaryInsurance.policyNumber"
					labelKey="policyNumber"
					required
				/>
			</div>

			<div className={styles.row2}>
				<TextField name="primaryInsurance.groupNumber" labelKey="groupNumber" />
				<TextField
					name="primaryInsurance.insurancePhone"
					labelKey="insurancePhone"
					type="tel"
					helpKey="phoneHelp"
					inlineHelp
				/>
			</div>

			<TextField
				name="primaryInsurance.insuranceAddress"
				labelKey="insuranceAddress"
			/>

			<div className={styles.row3}>
				<TextField name="primaryInsurance.city" labelKey="city" />
				<SelectField
					name="primaryInsurance.state"
					labelKey="state"
					options={US_STATES}
				/>
				<TextField
					name="primaryInsurance.zip"
					labelKey="zip"
					inputMode="numeric"
					maxLength={10}
				/>
			</div>

			<h3 className={styles.subheading}>{t("policyHolderName")}</h3>

			<CheckboxField
				name="primaryInsurance.sameAsPatient"
				labelKey="sameAsPatient"
			/>

			<div className={styles.row2}>
				<TextField
					name="primaryInsurance.policyHolderName"
					labelKey="policyHolderName"
					required={!sameAsPatient}
				/>
				<DateField
					name="primaryInsurance.policyHolderBirthDate"
					labelKey="policyHolderBirthDate"
					required={!sameAsPatient}
				/>
			</div>

			<SelectField
				name="primaryInsurance.policyHolderRelation"
				labelKey="policyHolderRelation"
				options={[
					{ value: "self", en: t("relationSelf"), es: t("relationSelf") },
					{ value: "spouse", en: t("relationSpouse"), es: t("relationSpouse") },
					{ value: "child", en: t("relationChild"), es: t("relationChild") },
					{ value: "other", en: t("relationOther"), es: t("relationOther") },
				]}
			/>
		</section>
	)
}
