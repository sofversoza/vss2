"use client"

import { useState } from "react"
import styles from "./FAQSection.module.css"

const faqs = [
	{
		id: "faq-1",
		question: "Do I need a referral before scheduling an appointment?",
		answer:
			"Some insurance plans require a referral from your primary care physician. Please check with your insurance provider or call our office and we can help confirm what is needed.",
	},
	{
		id: "faq-2",
		question: "How do I make an appointment?",
		answer:
			"Call our office at (602) 277-7430 to schedule an appointment for testing or an office visit.",
	},
	{
		id: "faq-3",
		question: "What should I bring to my first visit?",
		answer:
			"Please bring your photo ID, insurance card, medication list, and any recent imaging or records related to your vascular condition. New patient paperwork can also be completed ahead of time.",
	},
	{
		id: "faq-4",
		question: "Are procedures performed in-office or at a hospital?",
		answer:
			"Many minimally invasive procedures can be performed in an outpatient setting, while others may be completed at a hospital or surgical center depending on your treatment plan.",
	},
	{
		id: "faq-5",
		question: "How do I access my patient portal?",
		answer:
			"You can access the patient portal through the portal link on our site. If you need help logging in, contact our office and we’ll assist you.",
	},
]

export default function FAQSection() {
	const [openIndex, setOpenIndex] = useState(0)

	const toggleFaq = (index) => {
		setOpenIndex((prev) => (prev === index ? -1 : index))
	}

	return (
		<section className={styles.section} aria-labelledby="faq-title">
			<div className={styles.wrapper}>
				<div className={styles.faqPanel}>
					<div className={styles.faqHeader}>
						<h3 id="faq-title" className={styles.faqTitle}>
							Frequently Asked Questions
						</h3>
						<p className={styles.faqSubtitle}>
							Answers to common questions about visits, referrals, and
							treatment.
						</p>
					</div>

					<div className={styles.faqList}>
						{faqs.map((item, index) => {
							const isOpen = openIndex === index
							const answerId = `${item.id}-answer`

							return (
								<div key={item.id} className={styles.faqItem}>
									<button
										type="button"
										className={styles.faqButton}
										aria-expanded={isOpen}
										aria-controls={answerId}
										onClick={() => toggleFaq(index)}
									>
										<span className={styles.faqQuestion}>{item.question}</span>
										<span
											className={`${styles.faqIndicator} ${
												isOpen ? styles.faqIndicatorOpen : ""
											}`}
											aria-hidden="true"
										>
											{isOpen ? "−" : "+"}
										</span>
									</button>

									<div
										id={answerId}
										className={`${styles.faqAnswerWrap} ${
											isOpen ? styles.faqAnswerWrapOpen : ""
										}`}
									>
										<div className={styles.faqAnswerInner}>
											<p className={styles.faqAnswer}>{item.answer}</p>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}
