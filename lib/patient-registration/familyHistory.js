// Family history data — conditions and family members, bilingual

export const FAMILY_MEMBERS_FULL = [
	{ value: "Mother", labelKey: "familyMother" },
	{ value: "Father", labelKey: "familyFather" },
	{ value: "Grandmother", labelKey: "familyGrandmother" },
	{ value: "Grandfather", labelKey: "familyGrandfather" },
	{ value: "Sister", labelKey: "familySister" },
	{ value: "Brother", labelKey: "familyBrother" },
	{ value: "Son", labelKey: "familySon" },
	{ value: "Daughter", labelKey: "familyDaughter" },
	{ value: "Other", labelKey: "familyOther" },
]

// Subset used for vascular conditions
export const FAMILY_MEMBERS_IMMEDIATE = [
	{ value: "Mother", labelKey: "familyMother" },
	{ value: "Father", labelKey: "familyFather" },
	{ value: "Sister", labelKey: "familySister" },
	{ value: "Brother", labelKey: "familyBrother" },
]

export const FAMILY_GENERAL_CONDITIONS = [
	{ id: "highBP", labelKey: "famcondHighBP" },
	{ id: "cad", labelKey: "famcondCAD" },
	{ id: "otherHeart", labelKey: "famcondOtherHeart" },
	{ id: "stroke", labelKey: "famcondStroke" },
	{ id: "anemia", labelKey: "famcondAnemia" },
	{ id: "bleeding", labelKey: "famcondBleeding" },
	{ id: "asthma", labelKey: "famcondAsthma" },
	{ id: "anesthesia", labelKey: "famcondAnesthesia" },
	{ id: "crohns", labelKey: "famcondCrohns" },
	{ id: "ulcerative", labelKey: "famcondUlcerative" },
	{ id: "gallbladder", labelKey: "famcondGallbladder" },
	{ id: "diabetes", labelKey: "famcondDiabetes" },
]

export const FAMILY_VASCULAR_CONDITIONS = [
	{ id: "dvt", labelKey: "vascDVT" },
	{ id: "clotting", labelKey: "vascClotting" },
	{ id: "aneurysms", labelKey: "vascAneurysms" },
	{ id: "pad", labelKey: "vascPAD" },
	{ id: "stroke", labelKey: "vascStroke" },
	{ id: "tia", labelKey: "vascTIA" },
	{ id: "varicose", labelKey: "vascVaricose" },
	{ id: "heartDisease", labelKey: "vascHeartDisease" },
]

// Common cancer types. Patient can also pick "Other" and fill freely (handled in component).
export const CANCER_TYPES = [
	{ value: "Bladder", en: "Bladder", es: "Vejiga" },
	{ value: "Brain", en: "Brain", es: "Cerebro" },
	{ value: "Breast", en: "Breast", es: "Mama" },
	{ value: "Cervical", en: "Cervical", es: "Cervical" },
	{ value: "Colon", en: "Colon", es: "Colon" },
	{ value: "Esophageal", en: "Esophageal", es: "Esófago" },
	{ value: "Kidney", en: "Kidney", es: "Riñón" },
	{ value: "Leukemia", en: "Leukemia", es: "Leucemia" },
	{ value: "Liver", en: "Liver", es: "Hígado" },
	{ value: "Lung", en: "Lung", es: "Pulmón" },
	{ value: "Lymphoma", en: "Lymphoma", es: "Linfoma" },
	{ value: "Melanoma / Skin", en: "Melanoma / Skin", es: "Melanoma / Piel" },
	{ value: "Ovarian", en: "Ovarian", es: "Ovario" },
	{ value: "Pancreatic", en: "Pancreatic", es: "Páncreas" },
	{ value: "Prostate", en: "Prostate", es: "Próstata" },
	{ value: "Stomach", en: "Stomach", es: "Estómago" },
	{ value: "Testicular", en: "Testicular", es: "Testicular" },
	{ value: "Thyroid", en: "Thyroid", es: "Tiroides" },
	{ value: "Uterine", en: "Uterine", es: "Útero" },
	{ value: "Other", en: "Other", es: "Otro" },
]
