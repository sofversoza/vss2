"use client"

import TextField from "../fields/TextField"
import SelectField from "../fields/SelectField"
import RadioGroup from "../fields/RadioGroup"
import { useLanguage } from "../LanguageContext"
import {
	US_STATES,
	LANGUAGE_OPTIONS,
	RACE_ETHNICITY_OPTIONS,
} from "@/lib/patient-registration/options"
import styles from "../PatientRegistrationForm.module.css"

export default function ContactStep() {
	const { t } = useLanguage()

	return (
		<section aria-labelledby="step-heading">
			<h2 id="step-heading" className={styles.stepHeading}>
				{t("headingContact")}
			</h2>
			<p className={styles.requiredNote}>{t("requiredNote")}</p>

			<TextField
				name="contact.address"
				labelKey="address"
				required
				autoComplete="address-line1"
			/>

			<TextField
				name="contact.addressLine2"
				labelKey="addressLine2"
				autoComplete="address-line2"
			/>

			<div className={styles.row3}>
				<TextField
					name="contact.city"
					labelKey="city"
					required
					autoComplete="address-level2"
				/>
				<SelectField
					name="contact.state"
					labelKey="state"
					required
					options={US_STATES}
					autoComplete="address-level1"
				/>
				<TextField
					name="contact.zip"
					labelKey="zip"
					required
					autoComplete="postal-code"
					inputMode="numeric"
					maxLength={10}
				/>
			</div>

			<div className={styles.row2}>
				<TextField
					name="contact.phone"
					labelKey="phone"
					required
					type="tel"
					autoComplete="tel"
					helpKey="phoneHelp"
					inlineHelp
				/>
				<TextField
					name="contact.email"
					labelKey="email"
					type="email"
					autoComplete="email"
				/>
			</div>

			<RadioGroup
				name="contact.preferredContact"
				labelKey="preferredContact"
				options={[
					{ value: "phone", labelKey: "preferredContactPhone" },
					{ value: "email", labelKey: "preferredContactEmail" },
				]}
			/>

			<h3 className={styles.subheading}>{t("headingDemographics")}</h3>

			<div className={styles.row2}>
				<SelectField
					name="contact.preferredLanguage"
					labelKey="preferredLanguage"
					required
					options={LANGUAGE_OPTIONS}
				/>
				<SelectField
					name="contact.raceEthnicity"
					labelKey="raceEthnicity"
					required
					options={RACE_ETHNICITY_OPTIONS}
				/>
			</div>

			<SelectField
				name="contact.maritalStatus"
				labelKey="maritalStatus"
				options={[
					{ value: "single", en: t("maritalSingle"), es: t("maritalSingle") },
					{ value: "married", en: t("maritalMarried"), es: t("maritalMarried") },
					{ value: "divorced", en: t("maritalDivorced"), es: t("maritalDivorced") },
					{ value: "widowed", en: t("maritalWidowed"), es: t("maritalWidowed") },
					{
						value: "partnered",
						en: t("maritalPartnered"),
						es: t("maritalPartnered"),
					},
					{
						value: "prefer-not",
						en: t("maritalPreferNot"),
						es: t("maritalPreferNot"),
					},
				]}
			/>
		</section>
	)
}
