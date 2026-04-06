const aorticAneurysmsPage = {
	slug: ["vascular-conditions", "aortic-aneurysms"],
	pageHeading: "Abdominal & Descending Thoracic Aortic Aneurysms",
	media: {
		type: "video",
		src: "https://www.youtube.com/embed/4RlKMBIBRQE?si=tI_urgb3trJEGmod",
		title: "A Discussion On Abdominal Aortic Aneurysms",
	},
	mediaPosition: "bottom",
	contentSections: [
		{
			inlineMedia: {
				type: "image",
				position: "right",
				wrap: true,
				width: "180px",
				layout: "row",
				images: [
					{
						src: "/images/vascular/AN_AbdominalAneurysm.jpg",
						alt: "Illustration of an abdominal aortic aneurysm",
					},
					{
						src: "/images/vascular/AN_ThoracicAorta.jpg",
						alt: "Illustration of an abdominal aortic aneurysm",
					},
				],
			},
			text: [
				"An aneurysm is an enlarged portion of a weak area of an artery. Over time, blood flow can cause the weak area to bulge like a balloon. The two types of aortic aneurysm are abdominal aortic aneurysm and thoracic aortic aneurysm. Some people have both types.",
				"An abdominal aortic aneurysm occurs in the abdominal section of the aorta, the main blood vessel that carries blood away from the heart. Thoracic aortic aneurysms occur in the chest portion of the aorta.",
			],
		},
		{
			heading: "Symptoms",
			subheading:
				"Many people with abdominal aortic aneurysms do not feel any symptoms; others may experience one or more of the following:",
			listIcon: "arrow_right",
			listItems: [
				"A throbbing feeling in the abdomen",
				"Deep pain in your back or the side of your abdomen",
				"Steady, gnawing pain in your abdomen that lasts for hours or days",
			],
		},
		{
			subheading:
				"A Thoracic Aortic Aneurysm (TAA) may not cause symptoms until it dissects or grows large. If you have symptoms, they may include:",
			listIcon: "arrow_right",
			listItems: [
				"Pain in your jaw, neck, back, or chest",
				"Coughing and/or hoarseness",
				"Shortness of breath and/or trouble breathing or swallowing",
			],
		},
		{
			text: [
				"A ruptured aneurysm is life threatening and requires immediate medical attention.",
			],
		},
		{
			heading: "Diagnosis",
			subheading: "Abdominal",
			text: [
				"Most often, doctors find aneurysms during tests done for other reasons, such as chest or abdominal pain. To diagnose and study an aneurysm, your doctor may recommend one or more of the following tests.",
			],
			listIcon: "arrow_right",
			listItems: [
				"Ultrasound: Simple, painless tests that use sound waves to create pictures of the structures inside your body.",
				"CT scans: Painless test that uses x rays to take clear, detailed pictures of your organs.",
				"Magnetic resonance imaging (MRI): Uses magnets and radio waves to create pictures of the organs and structures in your body.",
				"Angiogram: Test in which a thin tube (catheter) is inserted into a blood vessel and a contrast dye is injected to make the blood vessels visible on the X-ray.",
			],
		},
		{
			subheading: "Thoracic",
			text: [
				"In addition to the tests above, if a thoracic aortic aneurysm is suspected, your physician may order the following tests:",
			],
			listIcon: "arrow_right",
			listItems: [
				"Chest x-ray",
				"Echocardiography (an ultrasound of the heart)",
			],
		},
		{
			heading: "Treatment Options",
			text: [
				"Treatment for an aneurysm depends on its size, location and your overall health. Aneurysms that are smaller than two inches in diameter and do not cause symptoms may be monitored regularly (approximately every six months) using an ultrasound or CT scan, a practice called 'watchful waiting.' People with small aneurysms and high blood pressure may be given medication to lower their blood pressure, which may reduce the risk of the aneurysm growing or rupturing.",
			],
		},
		{
			subheading: "Open Aneurysm Repair",
			text: [
				"Surgical repair may be recommended for patients whose aneurysms cause symptoms or are larger than two inches. The operation involves open surgery under general anesthesia to replace the weakened area of the aorta with a plastic or fabric graft. This procedure may require a hospital stay of five to 8 days.",
			],
		},
		{
			subheading: "Endovascular Repair",
			inlineMedia: {
				type: "image",
				position: "right",
				wrap: true,
				width: "180px",
				layout: "row",
				images: [
					{
						src: "/images/vascular/AN_AbdominalStent.jpg",
						alt: "Illustration of an abdominal stent",
					},
					{
						src: "/images/vascular/AN_EndovascularStent.jpg",
						alt: "Illustration of an endovascular stent",
					},
				],
			},
			text: [
				"A minimally invasive procedure, during endovascular repair, the surgeon inserts a graft into the aorta to strengthen it. The stent graft is threaded into the aorta using a catheter inserted through a small incision in the groin.",
				"The stent graft reinforces the weakened section of the aorta and allows blood to flow through without putting pressure on the damaged wall of the aneurysm.",
			],
		},
	],
	cta: null,
	attribution: {
		text: "Public domain image(s) provided courtesy of The National Heart, Lung, and Blood Institute (NHLBI), part of the National Institutes of Health and the U.S. Department of Health and Human Services.",
		link: "http://www.nhlbi.nih.gov/health/",
	},
}

export default aorticAneurysmsPage
