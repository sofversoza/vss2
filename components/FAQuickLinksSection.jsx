import FAQSection from "./FAQSection"
import QLSection from "./QLSection"
import styles from "./FAQuickLinksSection.module.css"

export default function FAQQuickLinksSection() {
	return (
		<section
			className={styles.section}
			aria-labelledby="faq-quicklinks-section-title"
		>
			<h2 id="faq-quicklinks-section-title" className={styles.srOnly}>
				Frequently Asked Questions and Quick Links
			</h2>

			<div className={styles.wrapper}>
				<div className={styles.faqColumn}>
					<FAQSection />
				</div>

				<div className={styles.quickLinksColumn}>
					<QLSection />
				</div>
			</div>
		</section>
	)
}
