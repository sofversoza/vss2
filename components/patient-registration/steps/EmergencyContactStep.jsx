"use client"

import TextField from "../fields/TextField"
import { useLanguage } from "../LanguageContext"
import styles from "../PatientRegistrationForm.module.css"

export default function EmergencyContactStep() {
	const { t } = useLanguage()

	return (
		<section aria-labelledby="step-heading">
			<h2 id="step-heading" className={styles.stepHeading}>
				{t("headingEmergencyContact")}
			</h2>
			<p className={styles.requiredNote}>{t("requiredNote")}</p>

			<div className={styles.row2}>
				<TextField name="emergencyContact.name" labelKey="emergencyName" required />
				<TextField
					name="emergencyContact.relationship"
					labelKey="emergencyRelationship"
					required
				/>
			</div>

			<TextField
				name="emergencyContact.phone"
				labelKey="emergencyPhone"
				required
				type="tel"
				helpKey="phoneHelp"
			/>
		</section>
	)
}
