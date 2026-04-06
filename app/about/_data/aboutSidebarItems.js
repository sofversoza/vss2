export const aboutSidebarItems = [
	{
		id: "about-overview",
		label: "About VSS",
		href: "/about",
	},
	{
		id: "vein-center",
		label: "The Vein Center",
		href: "/about/vein-center",
	},
	{
		id: "office-based-lab",
		label: "Office-Based Lab",
		href: "/about/office-based-lab",
	},
	{
		id: "vascular-conditions",
		label: "Vascular Conditions",
		href: "/about/vascular-conditions",
		children: [
			{
				id: "arterial",
				groupLabel: "Arterial",
				items: [
					{
						id: "carotid-conditions",
						label: "Carotid Conditions",
						href: "/about/vascular-conditions/carotid-conditions",
					},
					{
						id: "aortic-aneurysms",
						label: "Abdominal & Descending Thoracic Aortic Aneurysms",
						href: "/about/vascular-conditions/aortic-aneurysms",
					},
					{
						id: "visceral-arteries",
						label: "Visceral Arteries",
						href: "/about/vascular-conditions/visceral-arteries",
					},
					{
						id: "extremity-arterial-insufficiency",
						label: "Upper & Lower Extremity Arterial Insufficiency",
						href: "/about/vascular-conditions/extremity-arterial-insufficiency",
					},
				],
			},
			{
				id: "venous",
				groupLabel: "Venous",
				items: [
					{
						id: "dialysis-access",
						label: "Dialysis Access",
						href: "/about/vascular-conditions/dialysis-access",
					},
					{
						id: "thromboembolism",
						label: "Thromboembolism",
						href: "/about/vascular-conditions/thromboembolism",
					},
					{
						id: "varicose-veins",
						label: "Varicose Veins",
						href: "/about/vascular-conditions/varicose-veins",
					},
				],
			},
		],
	},
	{
		id: "ultrasound-studies",
		label: "Ultrasound Studies",
		href: "/about/ultrasound-studies",
	},
]
