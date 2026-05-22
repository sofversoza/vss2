"use client"

import { useFormContext } from "react-hook-form"
import TextField from "../fields/TextField"
import RadioGroup from "../fields/RadioGroup"
import DateField from "../fields/DateField"
import CheckboxGroup from "../fields/CheckboxGroup"
import { useLanguage } from "../LanguageContext"
import { CURRENT_ISSUES } from "@/lib/patient-registration/conditions"
import { ANESTHESIA_TYPES } from "@/lib/patient-registration/anesthesia"
import styles from "../PatientRegistrationForm.module.css"

export default function ReferralStep() {
	const { t } = useLanguage()
	const { watch } = useFormContext()
	const sex = watch("general.sex")
	const smoking = watch("referral.habits.smoking")
	const tobacco = watch("referral.habits.tobacco")
	const alcohol = watch("referral.habits.alcohol")
	const drugs = watch("referral.habits.drugs")

	return (
		<section aria-labelledby="step-heading">
			<h2 id="step-heading" className={styles.stepHeading}>
				{t("headingReferral")}
			</h2>

			<TextField
				name="referral.referringPhysician"
				labelKey="referralSourcePhysician"
			/>

			<TextField
				name="referral.primaryCareProvider"
				labelKey="primaryCareProvider"
				helpKey="primaryCareProviderHelp"
			/>

			<TextField
				name="referral.currentMedications"
				labelKey="currentMedications"
				helpKey="currentMedicationsHelp"
				multiline
				rows={3}
			/>

			<TextField
				name="referral.allergies"
				labelKey="allergies"
				helpKey="allergiesHelp"
				multiline
				rows={2}
			/>

			<TextField
				name="referral.priorSurgeries"
				labelKey="priorSurgeries"
				helpKey="priorSurgeriesHelp"
				multiline
				rows={3}
			/>

			{/* Current Medical Conditions — checkbox grid */}
			<h3 className={styles.subheading}>{t("currentConditions")}</h3>
			<p className={styles.sectionHelpStrong}>
				{t("currentIssuesHeading")}{" "}
				<span className={styles.sectionHelpItalic}>
					({t("currentIssuesHelp")})
				</span>
			</p>

			<div className={styles.checkGroupGrid}>
				{CURRENT_ISSUES.map((category) => {
					const items = category.items.filter(
						(item) => !item.maleOnly || sex === "male",
					)
					return (
						<CheckboxGroup
							key={category.id}
							name={`referral.currentIssues.${category.id}`}
							titleKey={category.titleKey}
							items={items}
						/>
					)
				})}
			</div>

			{/* Anesthesia History */}
			<h3 className={styles.subheading}>{t("headingAnesthesia")}</h3>
			<p className={styles.sectionHelp}>{t("anesthesiaIntro")}</p>

			<div className={styles.anesthesiaList}>
				{ANESTHESIA_TYPES.map((type) => (
					<CheckboxGroup
						key={type.id}
						name={`referral.anesthesia.${type.id}`}
						titleKey={type.titleKey}
						items={type.reactions}
					/>
				))}
			</div>

			{/* Habits */}
			<h3 className={styles.subheading}>{t("headingHabits")}</h3>
			<p className={styles.sectionHelp}>{t("habitsIntro")}</p>

			<RadioGroup
				name="referral.habits.smoking"
				labelKey="habitSmoking"
				options={[
					{ value: "never", labelKey: "habitSmokingNever" },
					{ value: "former", labelKey: "habitSmokingFormer" },
					{ value: "current", labelKey: "habitSmokingCurrent" },
				]}
			/>

			{smoking === "former" && (
				<DateField
					name="referral.habits.dateQuitSmoking"
					labelKey="habitDateQuit"
					autoComplete="off"
				/>
			)}

			{smoking === "current" && (
				<TextField
					name="referral.habits.amountSmokedPerDay"
					labelKey="habitAmountPerDay"
				/>
			)}

			<RadioGroup
				name="referral.habits.tobacco"
				labelKey="habitTobacco"
				options={[
					{ value: "none", labelKey: "habitTobaccoNone" },
					{ value: "use", labelKey: "habitTobaccoUse" },
				]}
			/>

			{tobacco === "use" && (
				<TextField
					name="referral.habits.tobaccoDetail"
					labelKey="habitTobaccoDetail"
				/>
			)}

			<RadioGroup
				name="referral.habits.alcohol"
				labelKey="habitAlcohol"
				options={[
					{ value: "none", labelKey: "habitAlcoholNone" },
					{ value: "use", labelKey: "habitAlcoholUse" },
				]}
			/>

			{alcohol === "use" && (
				<TextField
					name="referral.habits.alcoholPerDay"
					labelKey="habitAlcoholDetail"
				/>
			)}

			<RadioGroup
				name="referral.habits.drugs"
				labelKey="habitDrugs"
				options={[
					{ value: "none", labelKey: "habitDrugsNone" },
					{ value: "use", labelKey: "habitDrugsUse" },
				]}
			/>

			{drugs === "use" && (
				<TextField
					name="referral.habits.drugsDetail"
					labelKey="habitDrugsDetail"
				/>
			)}
		</section>
	)
}
