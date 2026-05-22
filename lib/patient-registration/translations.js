export const translations = {
	en: {
		// Page-level
		pageTitle: "New Patient Registration",
		pageSubtitle:
			"Please complete the form below. Your information is transmitted securely and will not be shared outside our organization.",
		languageToggleLabel: "Language",
		languageEnglish: "English",
		languageSpanish: "Español",
		requiredNote: "* Required fields",
		stepProgressLabel: "Step {current} of {total}",

		// Step names (used in stepper and headings)
		stepGeneralName: "General",
		stepContactName: "Contact",
		stepPrimaryInsuranceName: "Primary Insurance",
		stepSecondaryInsuranceName: "Secondary Insurance",
		stepEmergencyContactName: "Emergency Contact",
		stepReferralName: "Medical Background",
		stepFamilyHistoryName: "Family History",
		stepReviewName: "Review & Submit",

		// Navigation
		navPrevious: "Previous",
		navNext: "Next",
		navSubmit: "Submit Registration",
		navSubmitting: "Submitting…",

		// Section headings
		headingGeneral: "General Information",
		headingContact: "Address & Contact",
		headingDemographics: "Demographics",
		headingPrimaryInsurance: "Primary Insurance",
		headingSecondaryInsurance: "Secondary Insurance (Optional)",
		headingEmergencyContact: "Emergency Contact",
		headingEmployer: "Employer Information (Optional)",
		headingReferral: "Medical Background",
		headingReview: "Review Your Information",
		headingConsent: "Consent & Signature",

		// General fields
		lastName: "Last Name",
		firstName: "First Name",
		middleInitial: "Middle Initial",
		sex: "Sex",
		sexMale: "Male",
		sexFemale: "Female",
		birthDate: "Date of Birth",
		birthDateHelp: "MM/DD/YYYY",

		// Physical Data
		headingPhysicalData: "Physical Data",
		weightLbs: "Weight (lbs)",
		heightFeet: "Height — Feet",
		heightInches: "Height — Inches",

		// Referral Information (within General step)
		headingReferralInfo: "Referral Information",
		howDidYouHear: "How did you hear about us?",
		reasonForConsultation: "Reason for Consultation",

		// Contact fields
		address: "Street Address",
		addressLine2: "Apt / Suite (optional)",
		city: "City",
		state: "State",
		zip: "ZIP Code",
		phone: "Phone Number",
		phoneHelp: "e.g. 602-555-1234",
		email: "Email Address",
		preferredContact: "Preferred Contact Method",
		preferredContactPhone: "Phone",
		preferredContactEmail: "Email",
		preferredLanguage: "Preferred Language",
		raceEthnicity: "Race / Ethnicity",
		maritalStatus: "Marital Status",
		maritalSingle: "Single",
		maritalMarried: "Married",
		maritalDivorced: "Divorced",
		maritalWidowed: "Widowed",
		maritalPartnered: "Partnered",
		maritalPreferNot: "Prefer not to say",

		// Insurance fields
		insuranceCompany: "Insurance Company",
		policyNumber: "Policy Number",
		groupNumber: "Group Number",
		insuranceAddress: "Insurance Address",
		insurancePhone: "Insurance Phone",
		policyHolderName: "Policy Holder Name",
		policyHolderBirthDate: "Policy Holder Date of Birth",
		policyHolderRelation: "Relationship to Policy Holder",
		relationSelf: "Self",
		relationSpouse: "Spouse",
		relationChild: "Child",
		relationOther: "Other",
		sameAsPatient: "Policy holder is the patient",
		hasSecondaryInsurance: "I have secondary insurance",

		// Emergency contact
		emergencyName: "Contact Name",
		emergencyRelationship: "Relationship",
		emergencyPhone: "Contact Phone",

		// Employer
		employerName: "Employer Name",
		occupation: "Occupation",
		employerPhone: "Employer Phone",

		// Referral / Medical background
		referralSourcePhysician: "Referring Physician",
		primaryCareProvider: "Primary Care Provider",
		primaryCareProviderHelp:
			"Please list your current physicians and their specialties.",
		currentMedications: "Current Medications",
		currentMedicationsHelp:
			"Including over-the-counter medicines, supplements, and herbal medications (i.e. allergy pill, 20mg, twice a day).",
		allergies: "Medical Allergies",
		allergiesHelp:
			"Please list any medications you are allergic to and the reaction each one causes (i.e. penicillin — rash, hives).",
		priorSurgeries: "Prior Surgeries",
		priorSurgeriesHelp:
			"Surgery procedure, surgery date (i.e. heart surgery, 03/2026).",
		currentConditions: "Current Medical Conditions",
		currentIssuesHeading: "Do you currently have any of the following?",
		currentIssuesHelp: "Check all that apply.",

		// Current Issues category titles
		issuesCatGeneral: "General",
		issuesCatSkin: "Skin or Extremities",
		issuesCatHEENT: "Head & Neck (HEENT)",
		issuesCatRespiratory: "Respiratory",
		issuesCatCardio: "Cardiovascular",
		issuesCatGI: "Gastrointestinal",
		issuesCatGU: "Genitourinary",
		issuesCatMusculo: "Musculoskeletal",
		issuesCatNeuro: "Neurological",
		issuesCatPsych: "Psychiatric",
		issuesCatEndo: "Endocrine",
		issuesCatHeme: "Hematology",

		// Anesthesia History
		headingAnesthesia: "Anesthesia History",
		anesthesiaIntro:
			"Have you ever had any problems with anesthesia (being numbed or put to sleep)? If yes, please indicate which type of anesthesia and check reaction(s) below.",
		anesthesiaTypeGeneral: "General Anesthesia",
		anesthesiaTypeIV: "IV Sedation",
		anesthesiaTypeEpidural: "Epidural & Spinal",
		anesthesiaTypeRegional: "Regional Block",
		anesthesiaTypeLocal: "Local",

		// Family History
		headingFamilyHistory: "Family History",
		familyHistoryGeneralHeading: "Has any immediate blood relative had the following?",
		familyHistoryGeneralHelp:
			"For each condition, select all family members who have had it.",
		familyHistoryAddRelative: "Add family member",
		familyHistoryVascularHeading: "Vascular",
		familyHistoryVascularHelp:
			"Has any immediate blood relative had the following? Check all that apply.",
		familyHistoryCancerHeading: "Cancer",
		familyHistoryCancerHelp:
			"Add an entry for each family member with a cancer diagnosis.",
		familyMemberRelationship: "Relationship",
		familyMemberCancerType: "Cancer Type",
		familyMemberAge: "Age at Diagnosis",
		familyMemberAdd: "Add Entry",
		familyMemberRemove: "Remove",
		familyMemberEntryEmpty: "No entries added yet.",

		// Family member labels
		familyMother: "Mother",
		familyFather: "Father",
		familyGrandmother: "Grandmother",
		familyGrandfather: "Grandfather",
		familySister: "Sister",
		familyBrother: "Brother",
		familySon: "Son",
		familyDaughter: "Daughter",
		familyOther: "Other",

		// Family condition labels (general)
		famcondHighBP: "High Blood Pressure",
		famcondCAD: "Coronary Artery Disease",
		famcondOtherHeart: "Other Heart Problems",
		famcondStroke: "Stroke",
		famcondAnemia: "Anemia",
		famcondBleeding: "Bleeding Disorders",
		famcondAsthma: "Asthma",
		famcondAnesthesia: "Problems with Anesthesia",
		famcondCrohns: "Crohn's Disease",
		famcondUlcerative: "Ulcerative Colitis",
		famcondGallbladder: "Gallbladder Disease",
		famcondDiabetes: "Diabetes",

		// Vascular family condition labels
		vascDVT: "Deep Vein Thrombosis (DVT)",
		vascClotting: "Clotting Disorder",
		vascAneurysms: "Aneurysms",
		vascPAD: "Peripheral Arterial Disease",
		vascStroke: "Stroke",
		vascTIA: "Transient Ischemic Attack",
		vascVaricose: "Varicose Veins",
		vascHeartDisease: "Heart Disease",

		// Habits
		headingHabits: "Habits",
		habitsIntro: "Please fill out all that apply.",
		habitSmoking: "Smoking",
		habitSmokingNever: "Never Smoked",
		habitSmokingFormer: "Former Smoker",
		habitSmokingCurrent: "Currently Smoke",
		habitDateQuit: "Date Quit Smoking",
		habitAmountPerDay: "Amount Smoked Per Day",
		habitTobacco: "Other Tobacco",
		habitTobaccoNone: "Don't Use Other Tobacco",
		habitTobaccoUse: "Use Other Tobacco",
		habitTobaccoDetail: "Type and Amount of Tobacco",
		habitAlcohol: "Alcohol",
		habitAlcoholNone: "Don't Use Alcohol",
		habitAlcoholUse: "Use Alcohol",
		habitAlcoholDetail: "Amount of Alcohol Per Day",
		habitDrugs: "Street Drugs",
		habitDrugsNone: "Don't Use Drugs",
		habitDrugsUse: "Use Drugs",
		habitDrugsDetail: "Type and Amount of Drugs Used",

		// Consent
		consentText:
			"I certify that the information provided above is true and complete to the best of my knowledge. I authorize Vascular Surgery Specialists to use this information for treatment, payment, and healthcare operations as described in the Notice of Privacy Practices.",
		consentCheckbox: "I have read and agree to the statement above",
		signatureLabel: "Type your full legal name as signature",
		signatureDate: "Date",

		// Validation messages
		errorRequired: "This field is required",
		errorEmail: "Please enter a valid email address",
		errorPhone: "Please enter a valid phone number",
		errorDate: "Please enter a valid date (MM/DD/YYYY)",
		errorZip: "Please enter a valid ZIP code",
		errorDateFuture: "Date cannot be in the future",
		errorSignatureMatch: "Signature must match the first and last name you provided",

		// Submit feedback
		submitErrorTitle: "We couldn't submit your form",
		submitErrorBody:
			"Please review the highlighted fields and try again. If the problem persists, call us at (602) 277-7430.",
		submitSuccessTitle: "Thank you — your registration was received",
		submitSuccessBody:
			"A copy of your registration has been sent securely to our office. Our team will reach out to confirm your appointment. If you need to update anything, call us at (602) 277-7430.",
		submitSuccessReturn: "Return to Resources",

		// Review labels
		reviewEditStep: "Edit",
		reviewSectionGeneral: "General",
		reviewSectionContact: "Contact",
		reviewSectionPrimaryInsurance: "Primary Insurance",
		reviewSectionSecondaryInsurance: "Secondary Insurance",
		reviewSectionEmergency: "Emergency Contact",
		reviewSectionEmployer: "Employer",
		reviewSectionReferral: "Medical Background",
		reviewNotProvided: "Not provided",

		// Accessibility
		ariaErrorSummary: "Form contains errors. Please review the fields below.",
		ariaStepNavigation: "Form step navigation",
		ariaProgress: "Form progress",
	},
	es: {
		pageTitle: "Registro de Nuevo Paciente",
		pageSubtitle:
			"Por favor complete el siguiente formulario. Su información se transmite de manera segura y no se compartirá fuera de nuestra organización.",
		languageToggleLabel: "Idioma",
		languageEnglish: "English",
		languageSpanish: "Español",
		requiredNote: "* Campos obligatorios",
		stepProgressLabel: "Paso {current} de {total}",

		stepGeneralName: "General",
		stepContactName: "Contacto",
		stepPrimaryInsuranceName: "Seguro Primario",
		stepSecondaryInsuranceName: "Seguro Secundario",
		stepEmergencyContactName: "Contacto de Emergencia",
		stepReferralName: "Historial Médico",
		stepFamilyHistoryName: "Historial Familiar",
		stepReviewName: "Revisar y Enviar",

		navPrevious: "Anterior",
		navNext: "Siguiente",
		navSubmit: "Enviar Registro",
		navSubmitting: "Enviando…",

		headingGeneral: "Información General",
		headingContact: "Dirección y Contacto",
		headingDemographics: "Datos Demográficos",
		headingPrimaryInsurance: "Seguro Primario",
		headingSecondaryInsurance: "Seguro Secundario (Opcional)",
		headingEmergencyContact: "Contacto de Emergencia",
		headingEmployer: "Información del Empleador (Opcional)",
		headingReferral: "Historial Médico",
		headingReview: "Revise su Información",
		headingConsent: "Consentimiento y Firma",

		lastName: "Apellido",
		firstName: "Nombre",
		middleInitial: "Inicial del Segundo Nombre",
		sex: "Sexo",
		sexMale: "Masculino",
		sexFemale: "Femenino",
		birthDate: "Fecha de Nacimiento",
		birthDateHelp: "MM/DD/AAAA",

		// Physical Data
		headingPhysicalData: "Datos Físicos",
		weightLbs: "Peso (lbs)",
		heightFeet: "Altura — Pies",
		heightInches: "Altura — Pulgadas",

		// Referral Information
		headingReferralInfo: "Información de Referencia",
		howDidYouHear: "¿Cómo se enteró de nosotros?",
		reasonForConsultation: "Motivo de la Consulta",

		address: "Dirección",
		addressLine2: "Apto / Suite (opcional)",
		city: "Ciudad",
		state: "Estado",
		zip: "Código Postal",
		phone: "Número de Teléfono",
		phoneHelp: "ej. 602-555-1234",
		email: "Correo Electrónico",
		preferredContact: "Método de Contacto Preferido",
		preferredContactPhone: "Teléfono",
		preferredContactEmail: "Correo Electrónico",
		preferredLanguage: "Idioma Preferido",
		raceEthnicity: "Raza / Etnia",
		maritalStatus: "Estado Civil",
		maritalSingle: "Soltero/a",
		maritalMarried: "Casado/a",
		maritalDivorced: "Divorciado/a",
		maritalWidowed: "Viudo/a",
		maritalPartnered: "En pareja",
		maritalPreferNot: "Prefiero no decirlo",

		insuranceCompany: "Compañía de Seguros",
		policyNumber: "Número de Póliza",
		groupNumber: "Número de Grupo",
		insuranceAddress: "Dirección del Seguro",
		insurancePhone: "Teléfono del Seguro",
		policyHolderName: "Nombre del Titular de la Póliza",
		policyHolderBirthDate: "Fecha de Nacimiento del Titular",
		policyHolderRelation: "Relación con el Titular",
		relationSelf: "Yo mismo/a",
		relationSpouse: "Esposo/a",
		relationChild: "Hijo/a",
		relationOther: "Otro",
		sameAsPatient: "El titular de la póliza es el paciente",
		hasSecondaryInsurance: "Tengo seguro secundario",

		emergencyName: "Nombre del Contacto",
		emergencyRelationship: "Relación",
		emergencyPhone: "Teléfono del Contacto",

		employerName: "Nombre del Empleador",
		occupation: "Ocupación",
		employerPhone: "Teléfono del Empleador",

		referralSourcePhysician: "Médico que Refiere",
		primaryCareProvider: "Médico de Atención Primaria",
		primaryCareProviderHelp:
			"Por favor liste sus médicos actuales y sus especialidades.",
		currentMedications: "Medicamentos Actuales",
		currentMedicationsHelp:
			"Incluyendo medicamentos sin receta, suplementos y medicamentos herbales (ej. pastilla para la alergia, 20mg, dos veces al día).",
		allergies: "Alergias Médicas",
		allergiesHelp:
			"Por favor liste los medicamentos a los que es alérgico y la reacción que cada uno le causa (ej. penicilina — sarpullido, urticaria).",
		priorSurgeries: "Cirugías Previas",
		priorSurgeriesHelp:
			"Procedimiento quirúrgico, fecha de la cirugía (ej. cirugía de corazón, 03/2026).",
		currentConditions: "Condiciones Médicas Actuales",
		currentIssuesHeading: "¿Tiene actualmente alguno de los siguientes?",
		currentIssuesHelp: "Marque todo lo que aplique.",

		// Current Issues category titles
		issuesCatGeneral: "General",
		issuesCatSkin: "Piel o Extremidades",
		issuesCatHEENT: "Cabeza y Cuello (HEENT)",
		issuesCatRespiratory: "Respiratorio",
		issuesCatCardio: "Cardiovascular",
		issuesCatGI: "Gastrointestinal",
		issuesCatGU: "Genitourinario",
		issuesCatMusculo: "Musculoesquelético",
		issuesCatNeuro: "Neurológico",
		issuesCatPsych: "Psiquiátrico",
		issuesCatEndo: "Endocrino",
		issuesCatHeme: "Hematología",

		// Anesthesia History
		headingAnesthesia: "Historia de Anestesia",
		anesthesiaIntro:
			"¿Alguna vez ha tenido problemas con la anestesia (al ser anestesiado o dormido)? Si es así, indique qué tipo de anestesia y marque la(s) reacción(es) a continuación.",
		anesthesiaTypeGeneral: "Anestesia General",
		anesthesiaTypeIV: "Sedación Intravenosa",
		anesthesiaTypeEpidural: "Epidural y Espinal",
		anesthesiaTypeRegional: "Bloqueo Regional",
		anesthesiaTypeLocal: "Local",

		// Family History
		headingFamilyHistory: "Historial Familiar",
		familyHistoryGeneralHeading:
			"¿Algún familiar consanguíneo inmediato ha tenido lo siguiente?",
		familyHistoryGeneralHelp:
			"Para cada condición, seleccione todos los familiares que la hayan tenido.",
		familyHistoryAddRelative: "Agregar familiar",
		familyHistoryVascularHeading: "Vascular",
		familyHistoryVascularHelp:
			"¿Algún familiar consanguíneo inmediato ha tenido lo siguiente? Marque todo lo que aplique.",
		familyHistoryCancerHeading: "Cáncer",
		familyHistoryCancerHelp:
			"Agregue una entrada por cada familiar con un diagnóstico de cáncer.",
		familyMemberRelationship: "Parentesco",
		familyMemberCancerType: "Tipo de Cáncer",
		familyMemberAge: "Edad al Diagnóstico",
		familyMemberAdd: "Agregar Entrada",
		familyMemberRemove: "Eliminar",
		familyMemberEntryEmpty: "Aún no se han agregado entradas.",

		// Family member labels
		familyMother: "Madre",
		familyFather: "Padre",
		familyGrandmother: "Abuela",
		familyGrandfather: "Abuelo",
		familySister: "Hermana",
		familyBrother: "Hermano",
		familySon: "Hijo",
		familyDaughter: "Hija",
		familyOther: "Otro",

		// Family condition labels
		famcondHighBP: "Presión Arterial Alta",
		famcondCAD: "Enfermedad de las Arterias Coronarias",
		famcondOtherHeart: "Otros Problemas Cardíacos",
		famcondStroke: "Accidente Cerebrovascular",
		famcondAnemia: "Anemia",
		famcondBleeding: "Trastornos de Sangrado",
		famcondAsthma: "Asma",
		famcondAnesthesia: "Problemas con la Anestesia",
		famcondCrohns: "Enfermedad de Crohn",
		famcondUlcerative: "Colitis Ulcerosa",
		famcondGallbladder: "Enfermedad de la Vesícula Biliar",
		famcondDiabetes: "Diabetes",

		// Vascular family condition labels
		vascDVT: "Trombosis Venosa Profunda (TVP)",
		vascClotting: "Trastorno de Coagulación",
		vascAneurysms: "Aneurismas",
		vascPAD: "Enfermedad Arterial Periférica",
		vascStroke: "Accidente Cerebrovascular",
		vascTIA: "Ataque Isquémico Transitorio",
		vascVaricose: "Venas Varicosas",
		vascHeartDisease: "Enfermedad Cardíaca",

		// Habits
		headingHabits: "Hábitos",
		habitsIntro: "Por favor complete todo lo que aplique.",
		habitSmoking: "Tabaquismo",
		habitSmokingNever: "Nunca Fumé",
		habitSmokingFormer: "Exfumador",
		habitSmokingCurrent: "Fumo Actualmente",
		habitDateQuit: "Fecha que Dejó de Fumar",
		habitAmountPerDay: "Cantidad Fumada por Día",
		habitTobacco: "Otro Tabaco",
		habitTobaccoNone: "No Uso Otro Tabaco",
		habitTobaccoUse: "Uso Otro Tabaco",
		habitTobaccoDetail: "Tipo y Cantidad de Tabaco",
		habitAlcohol: "Alcohol",
		habitAlcoholNone: "No Uso Alcohol",
		habitAlcoholUse: "Uso Alcohol",
		habitAlcoholDetail: "Cantidad de Alcohol por Día",
		habitDrugs: "Drogas Ilícitas",
		habitDrugsNone: "No Uso Drogas",
		habitDrugsUse: "Uso Drogas",
		habitDrugsDetail: "Tipo y Cantidad de Drogas Usadas",

		consentText:
			"Certifico que la información proporcionada anteriormente es verdadera y completa según mi mejor conocimiento. Autorizo a Vascular Surgery Specialists a usar esta información para tratamiento, pago y operaciones de atención médica, según se describe en el Aviso de Prácticas de Privacidad.",
		consentCheckbox: "He leído y acepto la declaración anterior",
		signatureLabel: "Escriba su nombre legal completo como firma",
		signatureDate: "Fecha",

		errorRequired: "Este campo es obligatorio",
		errorEmail: "Por favor ingrese un correo electrónico válido",
		errorPhone: "Por favor ingrese un número de teléfono válido",
		errorDate: "Por favor ingrese una fecha válida (MM/DD/AAAA)",
		errorZip: "Por favor ingrese un código postal válido",
		errorDateFuture: "La fecha no puede ser en el futuro",
		errorSignatureMatch:
			"La firma debe coincidir con el nombre y apellido que proporcionó",

		submitErrorTitle: "No pudimos enviar su formulario",
		submitErrorBody:
			"Por favor revise los campos resaltados e intente nuevamente. Si el problema persiste, llámenos al (602) 277-7430.",
		submitSuccessTitle: "Gracias — su registro fue recibido",
		submitSuccessBody:
			"Se ha enviado una copia de su registro de forma segura a nuestra oficina. Nuestro equipo se comunicará para confirmar su cita. Si necesita actualizar algo, llámenos al (602) 277-7430.",
		submitSuccessReturn: "Volver a Recursos",

		reviewEditStep: "Editar",
		reviewSectionGeneral: "General",
		reviewSectionContact: "Contacto",
		reviewSectionPrimaryInsurance: "Seguro Primario",
		reviewSectionSecondaryInsurance: "Seguro Secundario",
		reviewSectionEmergency: "Contacto de Emergencia",
		reviewSectionEmployer: "Empleador",
		reviewSectionReferral: "Historial Médico",
		reviewNotProvided: "No proporcionado",

		ariaErrorSummary:
			"El formulario contiene errores. Por favor revise los campos a continuación.",
		ariaStepNavigation: "Navegación de pasos del formulario",
		ariaProgress: "Progreso del formulario",
	},
}

export function getTranslator(lang) {
	const dict = translations[lang] || translations.en
	return function t(key, vars) {
		let str = dict[key] ?? key
		if (vars) {
			for (const [k, v] of Object.entries(vars)) {
				str = str.replace(new RegExp(`\\{${k}\\}`, "g"), String(v))
			}
		}
		return str
	}
}
