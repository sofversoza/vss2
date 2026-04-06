const carotidConditionsPage = {
	slug: ["vascular-conditions", "carotid-conditions"],
	pageHeading: "Carotid Conditions",
	media: {
		type: "video",
		src: "https://www.youtube.com/embed/H-eQ3lZctpQ?si=ftVoYpAHsPv8znV6",
		title: "A Discussion On Corotid Disease",
	},
	mediaPosition: "bottom",
	contentSections: [
		{
			inlineMedia: {
				type: "image",
				src: "/images/vascular/Carotid1.jpg",
				alt: "Illustration of the carotid arteries",
				position: "right",
				wrap: true,
				width: "180px",
			},
			text: [
				"You have two carotid arteries. The internal carotid arteries supply blood to the large front portion of the brain responsible for thinking, speech, personality, and sensory and motor function. The external carotid arteries supply blood to the face, scalp, and neck.",
				"Carotid artery disease is the narrowing or blockage of the carotid arteries, usually caused by plaque built up on the inside of the carotid arteries. The condition is a major cause of stroke. When a patient is found to have significant carotid artery disease before stroke occurs, the stroke can usually be prevented by appropriate treatment. Lifestyle changes, medicines, and medical procedures can help prevent or treat carotid artery disease and may reduce the risk of stroke.",
			],
		},
		{
			heading: "Symptoms",
			text: [
				"In early stages, many people with carotid artery disease experience no symptoms. Symptoms of carotid artery disease may not appear until it's serious enough to deprive your brain of blood, causing a stroke or TIA (transient ischemic attack “mini stroke”). Unfortunately, a stroke or TIA is often the first symptom of carotid arteriosclerosis.",
			],
		},
		{
			subheading:
				"The symptoms of a TIA, which are temporary and may last a few minutes or a few hours, may include:",
			listItems: [
				"Sudden weakness or numbness in the face or limbs, often on one side of the body",
				"Inability to move one or more limbs",
				"Trouble speaking or understanding speech",
				"Sudden trouble seeing in one or both eyes",
			],
			listIcon: "arrow_right",
			inlineMedia: {
				type: "image",
				src: "/images/vascular/Carotid3.jpg",
				alt: "Illustration of the carotid arteries",
				position: "left",
				wrap: true,
				width: "180px",
			},
		},
		{
			heading: "Diagnosis",
			text: [
				"Your doctor will diagnose carotid artery disease based on your medical history, a physical exam, and test results. To check your carotid arteries, your doctor will listen to them with a stethoscope on both sides of the neck to detect a 'bruit' or abnormal sound caused by turbulent blood flow in a narrowed carotid artery. The physician may then order diagnostic tests.",
			],
		},
		{
			subheading:
				"The following tests are common for diagnosing carotid artery disease.",
			listItems: [
				"Carotid Ultrasound: Uses high-frequency sound waves to view the carotid arteries.",
				"Carotid Angiography: Uses a catheter and contrast dye to create X-ray images of the carotid arteries.",
				"Magnetic Resonance Angiography (MRA): Uses MRI technology to produce images of the carotid arteries.",
				"CT / CTA Scans: Uses X-ray imaging to create detailed views of the carotid arteries and identify poor blood flow.",
			],
			listIcon: "arrow_right",
		},
		{
			heading: "Treatment Options",
			text: [
				"How carotid artery disease is treated depends on the patient's symptoms and the degree of narrowing in the carotid artery. Not all cases of carotid artery disease require either a surgical or interventional procedure to treat them. For mild to moderate blockage of the arteries, your physician may recommend lifestyle changes and/or medication to manage the condition.",
				"If the patient has been referred to a vascular specialist, chances are there is extensive narrowing, or blockage, of the carotid arteries. When you have severe blockage, you may need a medical procedure to treat carotid artery disease. Doctors use one of two methods to open narrowed or blocked carotid arteries: carotid endarterectomy, and carotid artery angioplasty and stenting.",
			],
		},
		{
			subheading: "Carotid Endarterectomy",
			inlineMedia: {
				type: "image",
				src: "/images/vascular/Carotid4.jpg",
				alt: "Illustration of plaque being removed from a carotid artery",
				position: "right",
				wrap: true,
				width: "180px",
			},
			text: [
				"During surgery, your vascular surgeon removes the plaque that is blocking your carotid artery. The procedure is called carotid endarterectomy and can be performed using a local or general anesthetic. Sometimes a small tube (shunt) is inserted into the normal segment of carotid artery below and above the narrowed segment. The surgeon then removes the plaque contained in the inner lining of your carotid artery. Afterward, the artery is stitched shut, and the shunt (bypass) tube, if used, is removed. This procedure removes the plaque and leaves a smooth, wide-open artery.",
			],
		},
		{
			subheading: "Angioplasty and Stenting",
			inlineMedia: {
				type: "image",
				position: "right",
				wrap: true,
				width: "180px",
				layout: "row",
				images: [
					{
						src: "/images/vascular/Carotid5.jpg",
						alt: "Illustration of carotid artery stenting",
					},
					{
						src: "/images/vascular/Carotid6.jpg",
						alt: "Illustration of carotid artery stenting",
					},
				],
			},
			text: [
				"Angioplasty and stenting are minimally invasive techniques usually performed using a local anesthetic. During angioplasty, your surgeon threads a balloon-tipped catheter through an artery in the groin and into the narrowed area of the carotid artery, flattening the plaque against the walls of the artery. Inflating the balloon expands the artery, effectively opening it. Next, the surgeon places a stent, a tiny metal mesh tube that holds the artery open. After several weeks, the artery heals around the stent.",
				"Recovery from both the carotid endarterectomy and carotid angioplasty and stenting procedures generally requires a one-night hospital stay. Patients often return to regular activities within one to two weeks after these procedures.",
			],
		},
	],
	cta: null,
	attribution: {
		text: "Public domain image(s) provided courtesy of The National Heart, Lung, and Blood Institute (NHLBI), part of the National Institutes of Health and the U.S. Department of Health and Human Services.",
		link: "http://www.nhlbi.nih.gov/health/",
	},
}

export default carotidConditionsPage
