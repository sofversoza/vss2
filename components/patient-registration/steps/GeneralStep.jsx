"use client"

import TextField from "../fields/TextField"
import SelectField from "../fields/SelectField"
import RadioGroup from "../fields/RadioGroup"
import DateField from "../fields/DateField"
import { useLanguage } from "../LanguageContext"
import { REFERRAL_SOURCES } from "@/lib/patient-registration/options"
import styles from "../PatientRegistrationForm.module.css"

export default function GeneralStep() {
	const { t } = useLanguage()

	return (
		<section aria-labelledby="step-heading">
			<h2 id="step-heading" className={styles.stepHeading}>
				{t("headingGeneral")}
			</h2>
			<p className={styles.requiredNote}>{t("requiredNote")}</p>

			<div className={styles.row2}>
				<TextField
					name="general.firstName"
					labelKey="firstName"
					required
					autoComplete="given-name"
				/>
				<TextField
					name="general.lastName"
					labelKey="lastName"
					required
					autoComplete="family-name"
				/>
			</div>

			<div className={styles.row2}>
				<TextField
					name="general.middleInitial"
					labelKey="middleInitial"
					maxLength={2}
					autoComplete="additional-name"
				/>
				<DateField
					name="general.birthDate"
					labelKey="birthDate"
					required
					autoComplete="bday"
				/>
			</div>

			<RadioGroup
				name="general.sex"
				labelKey="sex"
				required
				options={[
					{ value: "male", labelKey: "sexMale" },
					{ value: "female", labelKey: "sexFemale" },
				]}
			/>

			{/* Physical Data subsection */}
			<h3 className={styles.subheading}>{t("headingPhysicalData")}</h3>

			<div className={styles.row3}>
				<TextField
					name="general.weightLbs"
					labelKey="weightLbs"
					required
					inputMode="numeric"
					maxLength={3}
				/>
				<TextField
					name="general.heightFeet"
					labelKey="heightFeet"
					required
					inputMode="numeric"
					maxLength={1}
				/>
				<TextField
					name="general.heightInches"
					labelKey="heightInches"
					required
					inputMode="numeric"
					maxLength={2}
				/>
			</div>

			{/* Referral Information subsection */}
			<h3 className={styles.subheading}>{t("headingReferralInfo")}</h3>

			<SelectField
				name="general.referralSource"
				labelKey="howDidYouHear"
				options={REFERRAL_SOURCES}
			/>

			<TextField
				name="general.reasonForConsultation"
				labelKey="reasonForConsultation"
				multiline
				rows={3}
			/>
		</section>
	)
}
