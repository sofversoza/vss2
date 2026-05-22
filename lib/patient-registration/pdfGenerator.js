import { PDFDocument, StandardFonts, rgb } from "pdf-lib"

/**
 * Generates a PDF document from the validated patient registration data.
 * Returns a Uint8Array (compatible with email attachment APIs).
 */
export async function generateRegistrationPDF(data) {
	const pdfDoc = await PDFDocument.create()
	const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
	const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

	pdfDoc.setTitle("Patient Registration")
	pdfDoc.setAuthor("Vascular Surgery Specialists")
	pdfDoc.setSubject("New Patient Registration Form")
	pdfDoc.setCreationDate(new Date())

	const writer = createPageWriter(pdfDoc, { helvetica, helveticaBold })

	// Header
	writer.heading("VASCULAR SURGERY SPECIALISTS", 16)
	writer.subheading("New Patient Registration", 12)
	writer.text(`Submitted: ${new Date().toLocaleString("en-US")}`, 9, {
		color: rgb(0.4, 0.45, 0.55),
	})
	writer.spacer(12)

	// General
	writer.sectionTitle("General Information")
	writer.kv("Name", buildFullName(data.general))
	writer.kv("Date of Birth", data.general.birthDate)
	writer.kv("Sex", capitalize(data.general.sex))
	writer.kv("Weight", data.general.weightLbs ? `${data.general.weightLbs} lbs` : "—")
	writer.kv(
		"Height",
		data.general.heightFeet || data.general.heightInches
			? `${data.general.heightFeet || 0}' ${data.general.heightInches || 0}"`
			: "—",
	)
	writer.kv("Referral Source", capitalize(data.general.referralSource) || "—")
	writer.kvLong(
		"Reason for Consultation",
		data.general.reasonForConsultation || "—",
	)
	writer.spacer(8)

	// Contact
	writer.sectionTitle("Address & Contact")
	writer.kv("Address", buildAddress(data.contact))
	writer.kv("Phone", data.contact.phone)
	writer.kv("Email", data.contact.email || "—")
	writer.kv("Preferred Contact", capitalize(data.contact.preferredContact))
	writer.kv("Preferred Language", capitalize(data.contact.preferredLanguage))
	writer.kv("Race / Ethnicity", capitalize(data.contact.raceEthnicity))
	writer.kv("Marital Status", capitalize(data.contact.maritalStatus) || "—")
	writer.spacer(8)

	// Primary Insurance
	writer.sectionTitle("Primary Insurance")
	writer.kv("Company", data.primaryInsurance.company)
	writer.kv("Policy Number", data.primaryInsurance.policyNumber)
	writer.kv("Group Number", data.primaryInsurance.groupNumber || "—")
	writer.kv("Insurance Phone", data.primaryInsurance.insurancePhone || "—")
	writer.kv(
		"Insurance Address",
		buildInsuranceAddress(data.primaryInsurance) || "—",
	)
	writer.kv("Policy Holder", data.primaryInsurance.policyHolderName || "—")
	writer.kv(
		"Policy Holder DOB",
		data.primaryInsurance.policyHolderBirthDate || "—",
	)
	writer.kv(
		"Relationship",
		capitalize(data.primaryInsurance.policyHolderRelation) || "—",
	)
	writer.spacer(8)

	// Secondary Insurance
	if (data.secondaryInsurance?.hasSecondary) {
		writer.sectionTitle("Secondary Insurance")
		writer.kv("Company", data.secondaryInsurance.company)
		writer.kv("Policy Number", data.secondaryInsurance.policyNumber)
		writer.kv("Group Number", data.secondaryInsurance.groupNumber || "—")
		writer.kv("Insurance Phone", data.secondaryInsurance.insurancePhone || "—")
		writer.kv(
			"Policy Holder",
			data.secondaryInsurance.policyHolderName || "—",
		)
		writer.spacer(8)
	}

	// Emergency Contact
	writer.sectionTitle("Emergency Contact")
	writer.kv("Name", data.emergencyContact.name)
	writer.kv("Relationship", data.emergencyContact.relationship)
	writer.kv("Phone", data.emergencyContact.phone)
	writer.spacer(8)

	// Medical Background
	writer.sectionTitle("Medical Background")
	writer.kv("Referring Physician", data.referral.referringPhysician || "—")
	writer.kv("Primary Care Provider", data.referral.primaryCareProvider || "—")
	writer.kvLong("Current Medications", data.referral.currentMedications || "—")
	writer.kvLong("Allergies", data.referral.allergies || "—")
	writer.kvLong("Prior Surgeries", data.referral.priorSurgeries || "—")
	writer.spacer(8)

	// Current Issues (grouped checkboxes)
	const issues = data.referral.currentIssues || {}
	const hasAnyIssues = Object.values(issues).some(
		(arr) => Array.isArray(arr) && arr.length > 0,
	)
	if (hasAnyIssues) {
		writer.sectionTitle("Current Medical Conditions")
		for (const [category, items] of Object.entries(issues)) {
			if (!Array.isArray(items) || items.length === 0) continue
			writer.kvLong(humanizeCategory(category), items.join(", "))
		}
		writer.spacer(8)
	}

	// Anesthesia History
	const anesthesia = data.referral.anesthesia || {}
	const hasAnyAnesthesia = Object.values(anesthesia).some(
		(arr) => Array.isArray(arr) && arr.length > 0,
	)
	if (hasAnyAnesthesia) {
		writer.sectionTitle("Anesthesia History")
		const anesthesiaLabels = {
			general: "General Anesthesia",
			ivSedation: "IV Sedation",
			epiduralSpinal: "Epidural & Spinal",
			regionalBlock: "Regional Block",
			local: "Local",
		}
		for (const [type, reactions] of Object.entries(anesthesia)) {
			if (!Array.isArray(reactions) || reactions.length === 0) continue
			writer.kvLong(anesthesiaLabels[type] || type, reactions.join(", "))
		}
		writer.spacer(8)
	}

	// Habits
	const habits = data.referral.habits || {}
	if (hasAnyHabits(habits)) {
		writer.sectionTitle("Habits")
		writer.kv("Smoking", formatSmoking(habits))
		if (habits.smoking === "former" && habits.dateQuitSmoking) {
			writer.kv("Date Quit Smoking", habits.dateQuitSmoking)
		}
		if (habits.smoking === "current" && habits.amountSmokedPerDay) {
			writer.kv("Amount Smoked Per Day", habits.amountSmokedPerDay)
		}
		writer.kv(
			"Other Tobacco",
			habits.tobacco === "use" ? "Use Other Tobacco" : "Don't Use Other Tobacco",
		)
		if (habits.tobacco === "use" && habits.tobaccoDetail) {
			writer.kv("Tobacco Detail", habits.tobaccoDetail)
		}
		writer.kv(
			"Alcohol",
			habits.alcohol === "use" ? "Use Alcohol" : "Don't Use Alcohol",
		)
		if (habits.alcohol === "use" && habits.alcoholPerDay) {
			writer.kv("Alcohol Per Day", habits.alcoholPerDay)
		}
		writer.kv(
			"Street Drugs",
			habits.drugs === "use" ? "Use Drugs" : "Don't Use Drugs",
		)
		if (habits.drugs === "use" && habits.drugsDetail) {
			writer.kv("Drug Detail", habits.drugsDetail)
		}
		writer.spacer(8)
	}

	// Family History
	const family = data.familyHistory || {}
	const hasFamilyGeneral = hasAnyFamily(family.generalConditions)
	const hasFamilyVascular = hasAnyFamily(family.vascular)
	const hasFamilyCancer =
		Array.isArray(family.cancer) && family.cancer.length > 0

	if (hasFamilyGeneral || hasFamilyVascular || hasFamilyCancer) {
		writer.sectionTitle("Family History")

		if (hasFamilyGeneral) {
			writer.text("General Conditions:", 10, { bold: true })
			writer.spacer(2)
			for (const [condId, members] of Object.entries(family.generalConditions)) {
				if (!Array.isArray(members) || members.length === 0) continue
				writer.kv(humanizeFamilyCondition(condId), members.join(", "))
			}
			writer.spacer(6)
		}

		if (hasFamilyVascular) {
			writer.text("Vascular:", 10, { bold: true })
			writer.spacer(2)
			for (const [condId, members] of Object.entries(family.vascular)) {
				if (!Array.isArray(members) || members.length === 0) continue
				writer.kv(humanizeVascularCondition(condId), members.join(", "))
			}
			writer.spacer(6)
		}

		if (hasFamilyCancer) {
			writer.text("Cancer:", 10, { bold: true })
			writer.spacer(2)
			for (const entry of family.cancer) {
				writer.kv(
					entry.relationship,
					`${entry.cancerType}${entry.age ? `, age ${entry.age}` : ""}`,
				)
			}
			writer.spacer(6)
		}
	}

	// Consent / Signature
	writer.sectionTitle("Consent & Signature")
	writer.kv("Signature", data.consent.signature)
	writer.kv("Date Signed", data.consent.signatureDate)
	writer.kv("Consent Acknowledged", data.consent.consent ? "Yes" : "No")

	return await pdfDoc.save()
}

function hasAnyFamily(obj) {
	if (!obj || typeof obj !== "object") return false
	return Object.values(obj).some(
		(arr) => Array.isArray(arr) && arr.length > 0,
	)
}

function humanizeFamilyCondition(id) {
	const map = {
		highBP: "High Blood Pressure",
		cad: "Coronary Artery Disease",
		otherHeart: "Other Heart Problems",
		stroke: "Stroke",
		anemia: "Anemia",
		bleeding: "Bleeding Disorders",
		asthma: "Asthma",
		anesthesia: "Problems with Anesthesia",
		crohns: "Crohn's Disease",
		ulcerative: "Ulcerative Colitis",
		gallbladder: "Gallbladder Disease",
		diabetes: "Diabetes",
	}
	return map[id] || id
}

function humanizeVascularCondition(id) {
	const map = {
		dvt: "Deep Vein Thrombosis (DVT)",
		clotting: "Clotting Disorder",
		aneurysms: "Aneurysms",
		pad: "Peripheral Arterial Disease",
		stroke: "Stroke",
		tia: "Transient Ischemic Attack",
		varicose: "Varicose Veins",
		heartDisease: "Heart Disease",
	}
	return map[id] || id
}

// ---------------- helpers ----------------

function buildFullName(g) {
	return [g.firstName, g.middleInitial, g.lastName].filter(Boolean).join(" ")
}

function buildAddress(c) {
	const parts = [c.address]
	if (c.addressLine2) parts.push(c.addressLine2)
	parts.push(`${c.city}, ${c.state} ${c.zip}`)
	return parts.join(", ")
}

function buildInsuranceAddress(ins) {
	if (!ins.insuranceAddress) return ""
	const parts = [ins.insuranceAddress]
	const cityState = [ins.city, ins.state].filter(Boolean).join(", ")
	if (cityState || ins.zip) {
		parts.push([cityState, ins.zip].filter(Boolean).join(" ").trim())
	}
	return parts.join(", ")
}

function capitalize(s) {
	if (!s) return ""
	return s.charAt(0).toUpperCase() + s.slice(1)
}

function humanizeCategory(id) {
	const map = {
		general: "General",
		skinExtremities: "Skin / Extremities",
		heent: "Head & Neck (HEENT)",
		respiratory: "Respiratory",
		cardiovascular: "Cardiovascular",
		gastrointestinal: "Gastrointestinal",
		genitourinary: "Genitourinary",
		musculoskeletal: "Musculoskeletal",
		neurological: "Neurological",
		psychiatric: "Psychiatric",
		endocrine: "Endocrine",
		hematology: "Hematology",
	}
	return map[id] || id
}

function hasAnyHabits(habits) {
	if (!habits) return false
	return Boolean(
		habits.smoking || habits.tobacco || habits.alcohol || habits.drugs,
	)
}

function formatSmoking(habits) {
	if (!habits.smoking) return "—"
	if (habits.smoking === "never") return "Never Smoked"
	if (habits.smoking === "former") return "Former Smoker"
	if (habits.smoking === "current") return "Currently Smoke"
	return habits.smoking
}

function createPageWriter(pdfDoc, fonts) {
	const PAGE_W = 612 // US letter
	const PAGE_H = 792
	const MARGIN_X = 50
	const MARGIN_TOP = 50
	const MARGIN_BOTTOM = 50

	const navy = rgb(0.02, 0.16, 0.3) // #05294D
	const labelColor = rgb(0.39, 0.45, 0.55) // blue-gray
	const valueColor = rgb(0.16, 0.18, 0.16)
	const gold = rgb(0.91, 0.73, 0.53)

	let page = pdfDoc.addPage([PAGE_W, PAGE_H])
	let y = PAGE_H - MARGIN_TOP

	function ensureRoom(neededHeight) {
		if (y - neededHeight < MARGIN_BOTTOM) {
			page = pdfDoc.addPage([PAGE_W, PAGE_H])
			y = PAGE_H - MARGIN_TOP
		}
	}

	return {
		heading(text, size = 16) {
			ensureRoom(size + 8)
			page.drawText(text, {
				x: MARGIN_X,
				y,
				size,
				font: fonts.helveticaBold,
				color: navy,
			})
			y -= size + 4
		},
		subheading(text, size = 12) {
			ensureRoom(size + 6)
			page.drawText(text, {
				x: MARGIN_X,
				y,
				size,
				font: fonts.helvetica,
				color: navy,
			})
			y -= size + 4
		},
		sectionTitle(text) {
			ensureRoom(28)
			y -= 6
			page.drawRectangle({
				x: MARGIN_X,
				y: y - 2,
				width: PAGE_W - MARGIN_X * 2,
				height: 18,
				color: rgb(0.97, 0.96, 0.98),
			})
			page.drawRectangle({
				x: MARGIN_X,
				y: y - 2,
				width: 3,
				height: 18,
				color: gold,
			})
			page.drawText(text.toUpperCase(), {
				x: MARGIN_X + 10,
				y: y + 3,
				size: 10,
				font: fonts.helveticaBold,
				color: navy,
			})
			y -= 22
		},
		text(text, size = 10, opts = {}) {
			ensureRoom(size + 4)
			page.drawText(String(text), {
				x: MARGIN_X,
				y,
				size,
				font: opts.bold ? fonts.helveticaBold : fonts.helvetica,
				color: opts.color || valueColor,
			})
			y -= size + 3
		},
		kv(label, value) {
			ensureRoom(16)
			page.drawText(`${label}:`, {
				x: MARGIN_X,
				y,
				size: 9,
				font: fonts.helveticaBold,
				color: labelColor,
			})
			page.drawText(String(value ?? "—"), {
				x: MARGIN_X + 150,
				y,
				size: 10,
				font: fonts.helvetica,
				color: valueColor,
				maxWidth: PAGE_W - MARGIN_X * 2 - 150,
			})
			y -= 16
		},
		kvLong(label, value) {
			ensureRoom(28)
			page.drawText(`${label}:`, {
				x: MARGIN_X,
				y,
				size: 9,
				font: fonts.helveticaBold,
				color: labelColor,
			})
			y -= 12

			const lines = wrapText(
				String(value ?? "—"),
				fonts.helvetica,
				10,
				PAGE_W - MARGIN_X * 2 - 12,
			)
			for (const line of lines) {
				ensureRoom(14)
				page.drawText(line, {
					x: MARGIN_X + 12,
					y,
					size: 10,
					font: fonts.helvetica,
					color: valueColor,
				})
				y -= 13
			}
			y -= 4
		},
		spacer(h = 8) {
			y -= h
		},
	}
}

function wrapText(text, font, size, maxWidth) {
	if (!text) return [""]
	const paragraphs = text.split(/\n/)
	const lines = []

	for (const paragraph of paragraphs) {
		const words = paragraph.split(/\s+/)
		let current = ""

		for (const word of words) {
			const candidate = current ? `${current} ${word}` : word
			const width = font.widthOfTextAtSize(candidate, size)
			if (width <= maxWidth) {
				current = candidate
			} else {
				if (current) lines.push(current)
				current = word
			}
		}
		if (current) lines.push(current)
	}

	return lines.length ? lines : [""]
}
