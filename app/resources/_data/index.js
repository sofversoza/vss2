import newPatientResourcesPage from "./new-patient-resources"
import insuranceInfoPage from "./insurance-info"
import faqPage from "./faq"
import hospitalMembersPage from "./hospital-members"
import privacyStatementPage from "./privacy-statement"

const resourcePages = [
	newPatientResourcesPage,
	insuranceInfoPage,
	faqPage,
	hospitalMembersPage,
	privacyStatementPage,
]

export function getAllResourcePages() {
	return resourcePages
}

export function getResourcePageBySlug(slug = []) {
	return (
		resourcePages.find((page) => {
			if (page.slug.length !== slug.length) return false

			return page.slug.every((segment, index) => segment === slug[index])
		}) ?? null
	)
}
