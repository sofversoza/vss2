"use client"

import { useFormContext } from "react-hook-form"
import TextField from "../fields/TextField"
import CheckboxField from "../fields/CheckboxField"
import { useLanguage } from "../LanguageContext"
import styles from "../PatientRegistrationForm.module.css"

export default function SecondaryInsuranceStep() {
	const { t } = useLanguage()
	const { watch } = useFormContext()
	const hasSecondary = watch("secondaryInsurance.hasSecondary")

	return (
		<section aria-labelledby="step-heading">
			<h2 id="step-heading" className={styles.stepHeading}>
				{t("headingSecondaryInsurance")}
			</h2>

			<CheckboxField
				name="secondaryInsurance.hasSecondary"
				labelKey="hasSecondaryInsurance"
			/>

			{hasSecondary && (
				<>
					<div className={styles.row2}>
						<TextField
							name="secondaryInsurance.company"
							labelKey="insuranceCompany"
							required
						/>
						<TextField
							name="secondaryInsurance.policyNumber"
							labelKey="policyNumber"
							required
						/>
					</div>

					<div className={styles.row2}>
						<TextField
							name="secondaryInsurance.groupNumber"
							labelKey="groupNumber"
						/>
						<TextField
							name="secondaryInsurance.insurancePhone"
							labelKey="insurancePhone"
							type="tel"
							helpKey="phoneHelp"
							inlineHelp
						/>
					</div>

					<TextField
						name="secondaryInsurance.policyHolderName"
						labelKey="policyHolderName"
					/>
				</>
			)}
		</section>
	)
}
