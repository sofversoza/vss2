/**
 * Current medical conditions grouped by category, with bilingual labels.
 * Value strings are stable English identifiers (used for storage + PDF).
 *
 * Note: maleOnly items are hidden when sex !== "male".
 */
export const CURRENT_ISSUES = [
	{
		id: "general",
		titleKey: "issuesCatGeneral",
		items: [
			{ value: "Fevers", en: "Fevers", es: "Fiebres" },
			{ value: "Migraines", en: "Migraines", es: "Migrañas" },
			{
				value: "Recent Weight Changes",
				en: "Recent Weight Changes",
				es: "Cambios Recientes de Peso",
			},
			{ value: "Night Sweats", en: "Night Sweats", es: "Sudores Nocturnos" },
			{ value: "Fatigue", en: "Fatigue", es: "Fatiga" },
		],
	},
	{
		id: "skinExtremities",
		titleKey: "issuesCatSkin",
		items: [
			{ value: "Itching", en: "Itching", es: "Picazón" },
			{ value: "Bruising", en: "Bruising", es: "Moretones" },
			{ value: "Rash", en: "Rash", es: "Erupción Cutánea" },
			{
				value: "Loss of Hair on Legs/Arms",
				en: "Loss of Hair on Legs/Arms",
				es: "Pérdida de Cabello en Piernas/Brazos",
			},
			{
				value: "Discoloration of Legs",
				en: "Discoloration of Legs",
				es: "Decoloración de las Piernas",
			},
			{
				value: "Discoloration of Toes",
				en: "Discoloration of Toes",
				es: "Decoloración de los Dedos del Pie",
			},
			{
				value: "Toenail Changes",
				en: "Toenail Changes",
				es: "Cambios en las Uñas del Pie",
			},
			{ value: "Ulcers of Legs", en: "Ulcers of Legs", es: "Úlceras en las Piernas" },
			{ value: "Varicose Veins", en: "Varicose Veins", es: "Venas Varicosas" },
			{ value: "Cold Skin", en: "Cold Skin", es: "Piel Fría" },
			{ value: "Burning", en: "Burning", es: "Ardor" },
		],
	},
	{
		id: "heent",
		titleKey: "issuesCatHEENT",
		items: [
			{ value: "Hoarseness", en: "Hoarseness", es: "Ronquera" },
			{ value: "Sinus Problems", en: "Sinus Problems", es: "Problemas de Sinusitis" },
			{ value: "Neck Mass", en: "Neck Mass", es: "Bulto en el Cuello" },
			{ value: "Blurred Vision", en: "Blurred Vision", es: "Visión Borrosa" },
		],
	},
	{
		id: "respiratory",
		titleKey: "issuesCatRespiratory",
		items: [
			{ value: "Asthma", en: "Asthma", es: "Asma" },
			{ value: "Chronic Cough", en: "Chronic Cough", es: "Tos Crónica" },
			{
				value: "Difficulty Climbing 1 Flight of Stairs",
				en: "Difficulty Climbing 1 Flight of Stairs",
				es: "Dificultad para Subir un Tramo de Escaleras",
			},
			{
				value: "Nighttime Breathing Difficulty",
				en: "Nighttime Breathing Difficulty",
				es: "Dificultad para Respirar de Noche",
			},
		],
	},
	{
		id: "cardiovascular",
		titleKey: "issuesCatCardio",
		items: [
			{ value: "Chest Pain", en: "Chest Pain", es: "Dolor de Pecho" },
			{ value: "Heart Disease", en: "Heart Disease", es: "Enfermedad Cardíaca" },
			{
				value: "Irregular Heartbeat",
				en: "Irregular Heartbeat",
				es: "Latido Irregular",
			},
			{
				value: "Shortness of Breath",
				en: "Shortness of Breath",
				es: "Falta de Aire",
			},
			{ value: "Heart Stent", en: "Heart Stent", es: "Stent Cardíaco" },
			{
				value: "Previous Heart Attack",
				en: "Previous Heart Attack",
				es: "Ataque Cardíaco Previo",
			},
			{ value: "Blood Clots", en: "Blood Clots", es: "Coágulos de Sangre" },
			{ value: "Pace Maker", en: "Pace Maker", es: "Marcapasos" },
			{ value: "Palpitations", en: "Palpitations", es: "Palpitaciones" },
			{
				value: "Leg Pain While Exercising",
				en: "Leg Pain While Exercising",
				es: "Dolor de Piernas al Hacer Ejercicio",
			},
			{
				value: "Swelling of Extremities",
				en: "Swelling of Extremities",
				es: "Hinchazón de Extremidades",
			},
			{
				value: "Elevated Blood Pressure",
				en: "Elevated Blood Pressure",
				es: "Presión Arterial Elevada",
			},
		],
	},
	{
		id: "gastrointestinal",
		titleKey: "issuesCatGI",
		items: [
			{ value: "Abdominal Pain", en: "Abdominal Pain", es: "Dolor Abdominal" },
			{ value: "Bloating", en: "Bloating", es: "Hinchazón" },
			{ value: "Constipation", en: "Constipation", es: "Estreñimiento" },
			{ value: "Diarrhea", en: "Diarrhea", es: "Diarrea" },
			{ value: "Excessive Gas", en: "Excessive Gas", es: "Gases Excesivos" },
			{
				value: "Food Intolerance",
				en: "Food Intolerance",
				es: "Intolerancia Alimentaria",
			},
			{ value: "Heartburn", en: "Heartburn", es: "Acidez Estomacal" },
			{ value: "Nausea", en: "Nausea", es: "Náusea" },
			{ value: "Vomiting", en: "Vomiting", es: "Vómitos" },
			{ value: "Abdominal Mass", en: "Abdominal Mass", es: "Bulto Abdominal" },
		],
	},
	{
		id: "genitourinary",
		titleKey: "issuesCatGU",
		items: [
			{
				value: "Difficulty Emptying Bladder",
				en: "Difficulty Emptying Bladder",
				es: "Dificultad para Vaciar la Vejiga",
			},
			{ value: "Kidney Problems", en: "Kidney Problems", es: "Problemas Renales" },
			{ value: "Kidney Stones", en: "Kidney Stones", es: "Cálculos Renales" },
			{
				value: "Recent Kidney/Bladder Infection",
				en: "Recent Kidney/Bladder Infection",
				es: "Infección Renal/Vesical Reciente",
			},
			{
				value: "Excessive Urination at Night",
				en: "Excessive Urination at Night",
				es: "Micción Excesiva por la Noche",
			},
			{
				value: "Impotence",
				en: "Impotence",
				es: "Impotencia",
				maleOnly: true,
			},
		],
	},
	{
		id: "musculoskeletal",
		titleKey: "issuesCatMusculo",
		items: [
			{ value: "Arthritis", en: "Arthritis", es: "Artritis" },
			{ value: "Back Pain", en: "Back Pain", es: "Dolor de Espalda" },
			{ value: "Muscle Weakness", en: "Muscle Weakness", es: "Debilidad Muscular" },
			{
				value: "Pain in Extremities",
				en: "Pain in Extremities",
				es: "Dolor en Extremidades",
			},
			{ value: "Muscle Cramps", en: "Muscle Cramps", es: "Calambres Musculares" },
			{
				value: "Difficulty in Walking",
				en: "Difficulty in Walking",
				es: "Dificultad para Caminar",
			},
		],
	},
	{
		id: "neurological",
		titleKey: "issuesCatNeuro",
		items: [
			{
				value: "Decreased Memory",
				en: "Decreased Memory",
				es: "Disminución de la Memoria",
			},
			{ value: "Head Injury", en: "Head Injury", es: "Lesión en la Cabeza" },
			{ value: "Seizures", en: "Seizures", es: "Convulsiones" },
			{ value: "Dizziness", en: "Dizziness", es: "Mareos" },
			{
				value: "Previous Stroke",
				en: "Previous Stroke",
				es: "Accidente Cerebrovascular Previo",
			},
			{
				value: "Sensation Loss",
				en: "Sensation Loss",
				es: "Pérdida de Sensación",
			},
			{ value: "Headaches", en: "Headaches", es: "Dolores de Cabeza" },
			{ value: "Tremor", en: "Tremor", es: "Temblor" },
			{ value: "Numbness", en: "Numbness", es: "Entumecimiento" },
			{ value: "Tingling", en: "Tingling", es: "Hormigueo" },
		],
	},
	{
		id: "psychiatric",
		titleKey: "issuesCatPsych",
		items: [
			{ value: "Anxiety", en: "Anxiety", es: "Ansiedad" },
			{ value: "Depression", en: "Depression", es: "Depresión" },
			{
				value: "Difficulty Sleeping",
				en: "Difficulty Sleeping",
				es: "Dificultad para Dormir",
			},
		],
	},
	{
		id: "endocrine",
		titleKey: "issuesCatEndo",
		items: [
			{ value: "Diabetes", en: "Diabetes", es: "Diabetes" },
			{
				value: "Hormone Problems",
				en: "Hormone Problems",
				es: "Problemas Hormonales",
			},
			{
				value: "Thyroid Problems",
				en: "Thyroid Problems",
				es: "Problemas de Tiroides",
			},
			{
				value: "Appetite Changes",
				en: "Appetite Changes",
				es: "Cambios en el Apetito",
			},
		],
	},
	{
		id: "hematology",
		titleKey: "issuesCatHeme",
		items: [
			{ value: "Anemia", en: "Anemia", es: "Anemia" },
			{
				value: "Bleeding Problems",
				en: "Bleeding Problems",
				es: "Problemas de Sangrado",
			},
			{
				value: "History of Blood Transfusion",
				en: "History of Blood Transfusion",
				es: "Historial de Transfusión de Sangre",
			},
			{
				value: "Prolonged Bleeding",
				en: "Prolonged Bleeding",
				es: "Sangrado Prolongado",
			},
		],
	},
]
