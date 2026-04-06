import PageIntro from "@/components/ui/PageIntro"
import PageWrapper from "@/components/ui/PageWrapper"
import PhysiciansCard from "./PhysiciansCard"
import styles from "./PhysiciansDirectory.module.css"

export default function PhysiciansDirectory({ physicians }) {
	const physicianGroup = physicians.filter(
		(person) => person.group === "physician",
	)

	const nursePractitionerGroup = physicians.filter(
		(person) => person.group === "nurse-practitioner",
	)

	function renderCards(items) {
		return (
			<div className={styles.grid}>
				{items.map((person) => (
					<PhysiciansCard key={person.id} person={person} />
				))}
			</div>
		)
	}

	return (
		<section className={styles.section} aria-labelledby="physicians-title">
			<PageWrapper>
				<PageIntro
					title="Meet Our Team of Providers"
					subtitle="Board-certified vascular specialists focused on minimally invasive care and long-term patient outcomes."
					titleId="physicians-title"
				/>

				{physicianGroup.length > 0 && (
					<div className={styles.groupSection}>
						<h2 className={styles.groupTitle}>Our Physicians</h2>
						{renderCards(physicianGroup)}
					</div>
				)}

				{nursePractitionerGroup.length > 0 && (
					<div className={styles.groupSection}>
						<h2 className={styles.groupTitle}>Our Nurse Practitioners</h2>
						{renderCards(nursePractitionerGroup)}
					</div>
				)}
			</PageWrapper>
		</section>
	)
}
