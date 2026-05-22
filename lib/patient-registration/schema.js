import { z } from "zod"

// Error codes returned by validators — field components translate these at render time
// so we don't need to rebuild schemas when the language toggles.
const ERR = {
	required: "errorRequired",
	email: "errorEmail",
	phone: "errorPhone",
	date: "errorDate",
	zip: "errorZip",
	dateFuture: "errorDateFuture",
	signatureMatch: "errorSignatureMatch",
}

const requiredString = (min = 1) =>
	z.string({ required_error: ERR.required }).trim().min(min, ERR.required)

const optionalString = () =>
	z
		.string()
		.trim()
		.optional()
		.transform((v) => (v === "" ? undefined : v))

// Accept (xxx) xxx-xxxx, xxx-xxx-xxxx, xxx.xxx.xxxx, xxxxxxxxxx — 10 digits total.
const phoneRegex = /^[\d\s().+-]{10,20}$/
const phoneField = (required = true) => {
	const base = z
		.string()
		.trim()
		.refine((v) => !v || phoneRegex.test(v), ERR.phone)
		.refine((v) => !v || v.replace(/\D/g, "").length >= 10, ERR.phone)
	return required
		? base.refine((v) => v && v.length > 0, ERR.required)
		: base.optional().transform((v) => (v === "" ? undefined : v))
}

// MM/DD/YYYY
const dateField = (required = true) => {
	const base = z
		.string()
		.trim()
		.refine((v) => {
			if (!v) return !required
			if (!/^\d{2}\/\d{2}\/\d{4}$/.test(v)) return false
			const [m, d, y] = v.split("/").map(Number)
			if (m < 1 || m > 12 || d < 1 || d > 31 || y < 1900 || y > 2100) return false
			const dt = new Date(y, m - 1, d)
			return dt.getMonth() === m - 1 && dt.getDate() === d
		}, ERR.date)
		.refine((v) => {
			if (!v) return true
			const [m, d, y] = v.split("/").map(Number)
			const dt = new Date(y, m - 1, d)
			return dt.getTime() <= Date.now()
		}, ERR.dateFuture)
	return required
		? base.refine((v) => v && v.length > 0, ERR.required)
		: base.optional().transform((v) => (v === "" ? undefined : v))
}

const zipField = z
	.string()
	.trim()
	.regex(/^\d{5}(-\d{4})?$/, ERR.zip)

const emailField = (required = true) => {
	const base = z.string().trim().email(ERR.email)
	return required ? base : base.optional().or(z.literal(""))
}

// ---- Step schemas ------------------------------------------------------------

// Positive integer string within range
const numericRange = (min, max) =>
	z
		.string()
		.trim()
		.refine((v) => v && /^\d+$/.test(v) && Number(v) >= min && Number(v) <= max, {
			message: ERR.required,
		})

export const generalSchema = z.object({
	lastName: requiredString(),
	firstName: requiredString(),
	middleInitial: optionalString(),
	sex: z.enum(["male", "female"], { required_error: ERR.required }),
	birthDate: dateField(true),
	weightLbs: numericRange(1, 999),
	heightFeet: numericRange(0, 8),
	heightInches: numericRange(0, 11),
	referralSource: optionalString(),
	reasonForConsultation: optionalString(),
})

export const contactSchema = z.object({
	address: requiredString(),
	addressLine2: optionalString(),
	city: requiredString(),
	state: requiredString(),
	zip: zipField,
	phone: phoneField(true),
	email: emailField(false),
	preferredContact: z.enum(["phone", "email"]).optional(),
	preferredLanguage: requiredString(),
	raceEthnicity: requiredString(),
	maritalStatus: optionalString(),
})

export const primaryInsuranceSchema = z
	.object({
		company: requiredString(),
		policyNumber: requiredString(),
		groupNumber: optionalString(),
		insuranceAddress: optionalString(),
		city: optionalString(),
		state: optionalString(),
		zip: optionalString(),
		insurancePhone: phoneField(false),
		sameAsPatient: z.boolean().optional().default(false),
		policyHolderName: optionalString(),
		policyHolderBirthDate: optionalString(),
		policyHolderRelation: optionalString(),
	})
	.refine(
		(data) => {
			if (data.sameAsPatient) return true
			return !!data.policyHolderName
		},
		{ message: ERR.required, path: ["policyHolderName"] },
	)

export const secondaryInsuranceSchema = z
	.object({
		hasSecondary: z.boolean().optional().default(false),
		company: optionalString(),
		policyNumber: optionalString(),
		groupNumber: optionalString(),
		insurancePhone: phoneField(false),
		policyHolderName: optionalString(),
	})
	.refine(
		(data) => {
			if (!data.hasSecondary) return true
			return !!data.company
		},
		{ message: ERR.required, path: ["company"] },
	)
	.refine(
		(data) => {
			if (!data.hasSecondary) return true
			return !!data.policyNumber
		},
		{ message: ERR.required, path: ["policyNumber"] },
	)

export const emergencyContactSchema = z.object({
	name: requiredString(),
	relationship: requiredString(),
	phone: phoneField(true),
})

export const habitsSchema = z
	.object({
		smoking: z.enum(["never", "former", "current", ""]).optional().default(""),
		dateQuitSmoking: optionalString(),
		amountSmokedPerDay: optionalString(),
		tobacco: z.enum(["none", "use", ""]).optional().default(""),
		tobaccoDetail: optionalString(),
		alcohol: z.enum(["none", "use", ""]).optional().default(""),
		alcoholPerDay: optionalString(),
		drugs: z.enum(["none", "use", ""]).optional().default(""),
		drugsDetail: optionalString(),
	})
	.refine(
		(d) => {
			if (d.smoking !== "former") return true
			return !!d.dateQuitSmoking && /^\d{2}\/\d{2}\/\d{4}$/.test(d.dateQuitSmoking)
		},
		{ message: ERR.date, path: ["dateQuitSmoking"] },
	)

export const anesthesiaSchema = z
	.object({
		general: z.array(z.string()).optional().default([]),
		ivSedation: z.array(z.string()).optional().default([]),
		epiduralSpinal: z.array(z.string()).optional().default([]),
		regionalBlock: z.array(z.string()).optional().default([]),
		local: z.array(z.string()).optional().default([]),
	})
	.optional()
	.default({})

export const referralSchema = z.object({
	referringPhysician: optionalString(),
	primaryCareProvider: optionalString(),
	currentMedications: optionalString(),
	allergies: optionalString(),
	priorSurgeries: optionalString(),
	currentIssues: z.record(z.string(), z.array(z.string())).optional().default({}),
	anesthesia: anesthesiaSchema,
	habits: habitsSchema,
})

export const familyHistorySchema = z.object({
	generalConditions: z
		.record(z.string(), z.array(z.string()))
		.optional()
		.default({}),
	vascular: z.record(z.string(), z.array(z.string())).optional().default({}),
	cancer: z
		.array(
			z.object({
				relationship: z.string(),
				cancerType: z.string(),
				age: z.string(),
			}),
		)
		.optional()
		.default([]),
})

export const consentSchema = z.object({
	consent: z.literal(true, {
		errorMap: () => ({ message: ERR.required }),
	}),
	signature: requiredString(2),
	signatureDate: dateField(true),
})

// ---- Composed full schema ----------------------------------------------------

export const fullRegistrationSchema = z.object({
	general: generalSchema,
	contact: contactSchema,
	primaryInsurance: primaryInsuranceSchema,
	secondaryInsurance: secondaryInsuranceSchema,
	emergencyContact: emergencyContactSchema,
	referral: referralSchema,
	familyHistory: familyHistorySchema,
	consent: consentSchema,
})

// Default values for the entire form
export const defaultValues = {
	general: {
		lastName: "",
		firstName: "",
		middleInitial: "",
		sex: "",
		birthDate: "",
		weightLbs: "",
		heightFeet: "",
		heightInches: "",
		referralSource: "",
		reasonForConsultation: "",
	},
	contact: {
		address: "",
		addressLine2: "",
		city: "",
		state: "",
		zip: "",
		phone: "",
		email: "",
		preferredContact: "phone",
		preferredLanguage: "english",
		raceEthnicity: "",
		maritalStatus: "",
	},
	primaryInsurance: {
		company: "",
		policyNumber: "",
		groupNumber: "",
		insuranceAddress: "",
		city: "",
		state: "",
		zip: "",
		insurancePhone: "",
		sameAsPatient: true,
		policyHolderName: "",
		policyHolderBirthDate: "",
		policyHolderRelation: "self",
	},
	secondaryInsurance: {
		hasSecondary: false,
		company: "",
		policyNumber: "",
		groupNumber: "",
		insurancePhone: "",
		policyHolderName: "",
	},
	emergencyContact: {
		name: "",
		relationship: "",
		phone: "",
	},
	referral: {
		referringPhysician: "",
		primaryCareProvider: "",
		currentMedications: "",
		allergies: "",
		priorSurgeries: "",
		currentIssues: {},
		anesthesia: {
			general: [],
			ivSedation: [],
			epiduralSpinal: [],
			regionalBlock: [],
			local: [],
		},
		habits: {
			smoking: "",
			dateQuitSmoking: "",
			amountSmokedPerDay: "",
			tobacco: "",
			tobaccoDetail: "",
			alcohol: "",
			alcoholPerDay: "",
			drugs: "",
			drugsDetail: "",
		},
	},
	familyHistory: {
		generalConditions: {},
		vascular: {},
		cancer: [],
	},
	consent: {
		consent: false,
		signature: "",
		signatureDate: "",
	},
}

// Step definition — drives the stepper, navigation, and per-step validation
export const STEPS = [
	{ id: "general", labelKey: "stepGeneralName", fields: ["general"] },
	{ id: "contact", labelKey: "stepContactName", fields: ["contact"] },
	{
		id: "primaryInsurance",
		labelKey: "stepPrimaryInsuranceName",
		fields: ["primaryInsurance"],
	},
	{
		id: "secondaryInsurance",
		labelKey: "stepSecondaryInsuranceName",
		fields: ["secondaryInsurance"],
	},
	{
		id: "emergencyContact",
		labelKey: "stepEmergencyContactName",
		fields: ["emergencyContact"],
	},
	{ id: "referral", labelKey: "stepReferralName", fields: ["referral"] },
	{
		id: "familyHistory",
		labelKey: "stepFamilyHistoryName",
		fields: ["familyHistory"],
	},
	{ id: "review", labelKey: "stepReviewName", fields: ["consent"] },
]
