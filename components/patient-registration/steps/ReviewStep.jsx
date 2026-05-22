"use client"

import { useFormContext } from "react-hook-form"
import TextField from "../fields/TextField"
import CheckboxField from "../fields/CheckboxField"
import DateField from "../fields/DateField"
import { useLanguage } from "../LanguageContext"
import styles from "../PatientRegistrationForm.module.css"

function Row({ label, value }) {
	return (
		<div className={styles.reviewRow}>
			<dt className={styles.reviewLabel}>{label}</dt>
			<dd className={styles.reviewValue}>{value || "—"}</dd>
		</div>
	)
}

export default function ReviewStep({ onEditStep }) {
	const { t } = useLanguage()
	const { getValues } = useFormContext()
	const data = getValues()

	return (
		<section aria-labelledby="step-heading">
			<h2 id="step-heading" className={styles.stepHeading}>
				{t("headingReview")}
			</h2>

			<div className={styles.reviewGrid}>
				<ReviewSection
					title={t("reviewSectionGeneral")}
					onEdit={() => onEditStep(0)}
					editLabel={t("reviewEditStep")}
				>
					<Row
						label={t("firstName") + " / " + t("lastName")}
						value={`${data.general.firstName} ${data.general.middleInitial ? data.general.middleInitial + " " : ""}${data.general.lastName}`}
					/>
					<Row label={t("sex")} value={data.general.sex} />
					<Row label={t("birthDate")} value={data.general.birthDate} />
					<Row
						label={t("weightLbs")}
						value={data.general.weightLbs ? `${data.general.weightLbs} lbs` : ""}
					/>
					<Row
						label={`${t("heightFeet")} / ${t("heightInches")}`}
						value={
							data.general.heightFeet || data.general.heightInches
								? `${data.general.heightFeet || 0}' ${data.general.heightInches || 0}"`
								: ""
						}
					/>
					<Row
						label={t("reasonForConsultation")}
						value={data.general.reasonForConsultation}
					/>
				</ReviewSection>

				<ReviewSection
					title={t("reviewSectionContact")}
					onEdit={() => onEditStep(1)}
					editLabel={t("reviewEditStep")}
				>
					<Row
						label={t("address")}
						value={`${data.contact.address}${data.contact.addressLine2 ? ", " + data.contact.addressLine2 : ""}, ${data.contact.city}, ${data.contact.state} ${data.contact.zip}`}
					/>
					<Row label={t("phone")} value={data.contact.phone} />
					<Row label={t("email")} value={data.contact.email} />
					<Row
						label={t("preferredLanguage")}
						value={data.contact.preferredLanguage}
					/>
					<Row label={t("raceEthnicity")} value={data.contact.raceEthnicity} />
				</ReviewSection>

				<ReviewSection
					title={t("reviewSectionPrimaryInsurance")}
					onEdit={() => onEditStep(2)}
					editLabel={t("reviewEditStep")}
				>
					<Row
						label={t("insuranceCompany")}
						value={data.primaryInsurance.company}
					/>
					<Row
						label={t("policyNumber")}
						value={data.primaryInsurance.policyNumber}
					/>
					<Row
						label={t("groupNumber")}
						value={data.primaryInsurance.groupNumber}
					/>
					<Row
						label={t("policyHolderName")}
						value={data.primaryInsurance.policyHolderName}
					/>
				</ReviewSection>

				{data.secondaryInsurance.hasSecondary && (
					<ReviewSection
						title={t("reviewSectionSecondaryInsurance")}
						onEdit={() => onEditStep(3)}
						editLabel={t("reviewEditStep")}
					>
						<Row
							label={t("insuranceCompany")}
							value={data.secondaryInsurance.company}
						/>
						<Row
							label={t("policyNumber")}
							value={data.secondaryInsurance.policyNumber}
						/>
					</ReviewSection>
				)}

				<ReviewSection
					title={t("reviewSectionEmergency")}
					onEdit={() => onEditStep(4)}
					editLabel={t("reviewEditStep")}
				>
					<Row label={t("emergencyName")} value={data.emergencyContact.name} />
					<Row
						label={t("emergencyRelationship")}
						value={data.emergencyContact.relationship}
					/>
					<Row label={t("emergencyPhone")} value={data.emergencyContact.phone} />
				</ReviewSection>

				<ReviewSection
					title={t("reviewSectionReferral")}
					onEdit={() => onEditStep(5)}
					editLabel={t("reviewEditStep")}
				>
					<Row label={t("allergies")} value={data.referral.allergies} />
					<Row
						label={t("currentConditions")}
						value={summarizeCurrentIssues(data.referral.currentIssues)}
					/>
					<Row
						label={t("habitSmoking")}
						value={summarizeHabits(data.referral.habits, t)}
					/>
				</ReviewSection>

				<ReviewSection
					title={t("headingFamilyHistory")}
					onEdit={() => onEditStep(6)}
					editLabel={t("reviewEditStep")}
				>
					<Row
						label={t("familyHistoryGeneralHeading")}
						value={summarizeFamilyConditions(
							data.familyHistory?.generalConditions,
						)}
					/>
					<Row
						label={t("familyHistoryVascularHeading")}
						value={summarizeFamilyConditions(data.familyHistory?.vascular)}
					/>
					<Row
						label={t("familyHistoryCancerHeading")}
						value={summarizeCancer(data.familyHistory?.cancer)}
					/>
				</ReviewSection>
			</div>

			<h3 className={styles.subheading}>{t("headingConsent")}</h3>
			<p className={styles.consentText}>{t("consentText")}</p>

			<CheckboxField
				name="consent.consent"
				labelKey="consentCheckbox"
				required
			/>

			<div className={styles.row2}>
				<TextField
					name="consent.signature"
					labelKey="signatureLabel"
					required
				/>
				<DateField
					name="consent.signatureDate"
					labelKey="signatureDate"
					required
					autoComplete="off"
				/>
			</div>
		</section>
	)
}

function ReviewSection({ title, children, onEdit, editLabel }) {
	return (
		<div className={styles.reviewSection}>
			<div className={styles.reviewSectionHeader}>
				<h3 className={styles.reviewSectionTitle}>{title}</h3>
				<button
					type="button"
					onClick={onEdit}
					className={styles.reviewEditButton}
				>
					{editLabel}
				</button>
			</div>
			<dl>{children}</dl>
		</div>
	)
}

function summarizeCurrentIssues(currentIssues) {
	if (!currentIssues || typeof currentIssues !== "object") return ""
	const all = Object.values(currentIssues).flat().filter(Boolean)
	if (all.length === 0) return ""
	if (all.length <= 5) return all.join(", ")
	return `${all.slice(0, 5).join(", ")} (+${all.length - 5} more)`
}

function summarizeHabits(habits, t) {
	if (!habits) return ""
	const parts = []
	if (habits.smoking) {
		const map = {
			never: t("habitSmokingNever"),
			former: t("habitSmokingFormer"),
			current: t("habitSmokingCurrent"),
		}
		parts.push(`${t("habitSmoking")}: ${map[habits.smoking]}`)
	}
	if (habits.alcohol === "use") parts.push(t("habitAlcoholUse"))
	if (habits.drugs === "use") parts.push(t("habitDrugsUse"))
	if (habits.tobacco === "use") parts.push(t("habitTobaccoUse"))
	return parts.join(" · ")
}

function summarizeFamilyConditions(conditions) {
	if (!conditions || typeof conditions !== "object") return ""
	const tagged = Object.entries(conditions)
		.filter(([, members]) => Array.isArray(members) && members.length > 0)
		.map(([cond, members]) => `${cond} (${members.length})`)
	if (tagged.length === 0) return ""
	if (tagged.length <= 3) return tagged.join(", ")
	return `${tagged.slice(0, 3).join(", ")} (+${tagged.length - 3} more)`
}

function summarizeCancer(entries) {
	if (!Array.isArray(entries) || entries.length === 0) return ""
	return entries
		.map(
			(e) =>
				`${e.relationship}: ${e.cancerType}${e.age ? `, ${e.age}` : ""}`,
		)
		.join("; ")
}
