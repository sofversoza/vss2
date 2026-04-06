// for importing all about-related data files for each route

import aboutPage from "./about"
import vascularConditionsPage from "./vascular-conditions"
import ultrasoundStudiesPage from "./ultrasound-studies"
import veinCenterPage from "./vein-center"
import officeBasedLabPage from "./office-based-lab"
import carotidConditionsPage from "./carotid-conditions"
import aorticAneurysmsPage from "./aortic-aneurysms"
import visceralArteriesPage from "./visceral-arteries"
import arterialInsufficiencyPage from "./arterial-insufficiency"
import dialysisAccessPage from "./dialysis-access"
import thromboembolismPage from "./thromboembolism"
import varicoseVeinsPage from "./varicose-veins"

export const aboutPages = [
	aboutPage,
	veinCenterPage,
	vascularConditionsPage,
	ultrasoundStudiesPage,
	officeBasedLabPage,
	carotidConditionsPage,
	aorticAneurysmsPage,
	visceralArteriesPage,
	arterialInsufficiencyPage,
	dialysisAccessPage,
	thromboembolismPage,
	varicoseVeinsPage,
]

export function getAllAboutPages() {
	return aboutPages
}

export function getAboutPageBySlug(slug = []) {
	return (
		aboutPages.find((page) => {
			if (page.slug.length !== slug.length) return false
			return page.slug.every((segment, index) => segment === slug[index])
		}) ?? null
	)
}
