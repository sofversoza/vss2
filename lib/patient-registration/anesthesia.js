// Per-anesthesia reaction options (value strings stable in English for PDF/storage)

export const ANESTHESIA_TYPES = [
	{
		id: "general",
		titleKey: "anesthesiaTypeGeneral",
		reactions: [
			{ value: "No Problems", en: "No problems", es: "Sin problemas" },
			{ value: "Nausea", en: "Nausea", es: "Náusea" },
			{ value: "Vomiting", en: "Vomiting", es: "Vómitos" },
			{ value: "Slow Awakening", en: "Slow awakening", es: "Despertar lento" },
			{
				value: "Difficult Intubation",
				en: "Difficult intubation",
				es: "Intubación difícil",
			},
			{ value: "Other", en: "Other", es: "Otro" },
		],
	},
	{
		id: "ivSedation",
		titleKey: "anesthesiaTypeIV",
		reactions: [
			{ value: "No Problems", en: "No problems", es: "Sin problemas" },
			{ value: "Nausea", en: "Nausea", es: "Náusea" },
			{ value: "Vomiting", en: "Vomiting", es: "Vómitos" },
			{ value: "Slow Awakening", en: "Slow awakening", es: "Despertar lento" },
			{ value: "Other", en: "Other", es: "Otro" },
		],
	},
	{
		id: "epiduralSpinal",
		titleKey: "anesthesiaTypeEpidural",
		reactions: [
			{ value: "No Problems", en: "No problems", es: "Sin problemas" },
			{ value: "Nausea", en: "Nausea", es: "Náusea" },
			{ value: "Vomiting", en: "Vomiting", es: "Vómitos" },
			{ value: "Bleeding", en: "Bleeding", es: "Sangrado" },
			{ value: "Headache", en: "Headache", es: "Dolor de cabeza" },
			{ value: "Other", en: "Other", es: "Otro" },
		],
	},
	{
		id: "regionalBlock",
		titleKey: "anesthesiaTypeRegional",
		reactions: [
			{ value: "No Problems", en: "No problems", es: "Sin problemas" },
			{ value: "Insufficient", en: "Insufficient", es: "Insuficiente" },
			{ value: "Prolonged", en: "Prolonged", es: "Prolongado" },
			{
				value: "Systemic Reaction",
				en: "Systemic reaction",
				es: "Reacción sistémica",
			},
			{ value: "Other", en: "Other", es: "Otro" },
		],
	},
	{
		id: "local",
		titleKey: "anesthesiaTypeLocal",
		reactions: [
			{ value: "No Problems", en: "No problems", es: "Sin problemas" },
			{
				value: "Insufficient Block",
				en: "Insufficient block",
				es: "Bloqueo insuficiente",
			},
			{
				value: "Heart Palpitations",
				en: "Heart palpitations",
				es: "Palpitaciones",
			},
			{
				value: "Systemic Reaction",
				en: "Systemic reaction",
				es: "Reacción sistémica",
			},
			{ value: "Other", en: "Other", es: "Otro" },
		],
	},
]
