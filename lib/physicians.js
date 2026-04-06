import physicians from "@/data/physicians.json"

export function getAllPhysicians() {
	return physicians
}

export function getPhysicianBySlug(slug) {
	return physicians.find((physician) => physician.slug === slug) ?? null
}
