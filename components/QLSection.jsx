import Link from "next/link"
import styles from "./QLSection.module.css"

export default function QLSection() {
	const links = [
		{ label: "New Patient Paperwork", href: "/files/VSSNewPatient.pdf" },
		{ label: "Insurance Information", href: "/resources/insurance-info" },
		{ label: "Privacy Statement", href: "/resources/privacy-statement" },
		{ label: "The Vein Center at VSS", href: "about/vein-center" },
		{ label: "VSS Office-Based Lab", href: "about/office-based-lab" },
		{ label: "Vascular Conditions", href: "about/vascular-conditions" },
		{ label: "Contact Our Office", href: "/contact" },
	]

	return (
		<section className={styles.section} aria-labelledby="quick-links-title">
			<div className={styles.wrapper}>
				<div className={styles.panel}>
					<div className={styles.header}>
						<h3 id="quick-links-title" className={styles.title}>
							Quick Links
						</h3>
						<p className={styles.subtitle}>
							Helpful pages and resources patients often need.
						</p>
					</div>

					<div className={styles.linksList}>
						{links.map((item) => (
							<Link key={item.label} href={item.href} className={styles.link}>
								{item.label}
								<span className={styles.arrow} aria-hidden="true">
									›
								</span>
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
