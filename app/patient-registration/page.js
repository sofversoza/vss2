import PatientRegistrationForm from "@/components/patient-registration/PatientRegistrationForm"

export const metadata = {
	title: "New Patient Registration | Vascular Surgery Specialists",
	description:
		"Complete your new patient registration online. Information is transmitted securely to Vascular Surgery Specialists.",
	robots: {
		index: false, // Don't index PHI-collecting form pages
		follow: false,
	},
}

export default function PatientRegistrationPage() {
	return <PatientRegistrationForm />
}
