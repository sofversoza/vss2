"use client"

import { useFieldArray, useFormContext } from "react-hook-form"
import { useState } from "react"
import { useLanguage } from "./LanguageContext"
import {
	FAMILY_MEMBERS_FULL,
	CANCER_TYPES,
} from "@/lib/patient-registration/familyHistory"
import styles from "./PatientRegistrationForm.module.css"

export default function CancerEntries({ name = "familyHistory.cancer" }) {
	const { t, lang } = useLanguage()
	const { control } = useFormContext()
	const { fields, append, remove } = useFieldArray({ control, name })

	const [draft, setDraft] = useState({
		relationship: "",
		cancerType: "",
		age: "",
	})

	const canAdd = draft.relationship && draft.cancerType

	const handleAdd = () => {
		if (!canAdd) return
		append({ ...draft })
		setDraft({ relationship: "", cancerType: "", age: "" })
	}

	const resolveRelationship = (val) => {
		const opt = FAMILY_MEMBERS_FULL.find((m) => m.value === val)
		return opt ? t(opt.labelKey) : val
	}

	const resolveCancer = (val) => {
		const opt = CANCER_TYPES.find((c) => c.value === val)
		return opt ? opt[lang] ?? opt.en : val
	}

	return (
		<div className={styles.cancerWrap}>
			<div className={styles.cancerRow}>
				<div className={styles.cancerField}>
					<label
						htmlFor="cancer-relationship"
						className={styles.cancerFieldLabel}
					>
						{t("familyMemberRelationship")}
					</label>
					<select
						id="cancer-relationship"
						className={styles.cancerSelect}
						value={draft.relationship}
						onChange={(e) =>
							setDraft((d) => ({ ...d, relationship: e.target.value }))
						}
					>
						<option value="">—</option>
						{FAMILY_MEMBERS_FULL.map((m) => (
							<option key={m.value} value={m.value}>
								{t(m.labelKey)}
							</option>
						))}
					</select>
				</div>

				<div className={styles.cancerField}>
					<label htmlFor="cancer-type" className={styles.cancerFieldLabel}>
						{t("familyMemberCancerType")}
					</label>
					<select
						id="cancer-type"
						className={styles.cancerSelect}
						value={draft.cancerType}
						onChange={(e) =>
							setDraft((d) => ({ ...d, cancerType: e.target.value }))
						}
					>
						<option value="">—</option>
						{CANCER_TYPES.map((c) => (
							<option key={c.value} value={c.value}>
								{c[lang] ?? c.en}
							</option>
						))}
					</select>
				</div>

				<div className={styles.cancerField}>
					<label htmlFor="cancer-age" className={styles.cancerFieldLabel}>
						{t("familyMemberAge")}
					</label>
					<input
						id="cancer-age"
						type="text"
						inputMode="numeric"
						maxLength={3}
						className={styles.cancerInput}
						value={draft.age}
						onChange={(e) =>
							setDraft((d) => ({
								...d,
								age: e.target.value.replace(/\D/g, "").slice(0, 3),
							}))
						}
					/>
				</div>

				<button
					type="button"
					onClick={handleAdd}
					disabled={!canAdd}
					className={styles.cancerAddButton}
				>
					+ {t("familyMemberAdd")}
				</button>
			</div>

			{fields.length === 0 ? (
				<p className={styles.cancerEmpty}>{t("familyMemberEntryEmpty")}</p>
			) : (
				<ul className={styles.cancerList}>
					{fields.map((entry, index) => (
						<li key={entry.id} className={styles.cancerEntry}>
							<span className={styles.cancerEntryText}>
								<strong>{resolveRelationship(entry.relationship)}:</strong>{" "}
								{resolveCancer(entry.cancerType)}
								{entry.age ? `, ${entry.age}` : ""}
							</span>
							<button
								type="button"
								onClick={() => remove(index)}
								className={styles.cancerEntryRemove}
								aria-label={`${t("familyMemberRemove")} ${resolveRelationship(entry.relationship)} — ${resolveCancer(entry.cancerType)}`}
							>
								×
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
