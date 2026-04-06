import PhysiciansDirectory from "@/components/physicians/PhysiciansDirectory"
import { getAllPhysicians } from "@/lib/physicians"

export const metadata = {
	title: "Our Physicians | Vascular Surgery Specialists",
	description:
		"Meet the vascular surgery specialists and nurse practitioner at Vascular Surgery Specialists.",
}

export default function PhysiciansPage() {
	const physicians = getAllPhysicians()

	return <PhysiciansDirectory physicians={physicians} />
}
