"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./FourBanners.module.css"
import Icon from "./ui/Icon"
import Button from "./ui/Button"

const banners = [
	{
		title: "New Patients Welcome",
		body: "VSS is now accepting new patients. We look forward to meeting you and want to make your first visit as comfortable as we can.",
		href: "/resources",
		linkLabel: "Patient Resources",
		icon: "diversity_3",
	},
	{
		title: "Services & Procedures",
		body: "Explore treatment options and procedures for vascular conditions, from minimally invasive care to surgery.",
		href: "/about/office-based-lab",
		linkLabel: "Our Services",
		icon: "heart_plus",
	},
	{
		title: "Meet Our Providers",
		body: "Get to know our vascular specialists and learn more about their backgrounds and care approach.",
		href: "/physicians",
		linkLabel: "Our Providers",
		icon: "health_cross",
	},
	{
		title: "Patient Portal",
		body: "Access your portal to review information, stay connected with your care, and manage appointments.",
		href: "https://mycw146.ecwcloud.com/portal20504/jsp/100mp/login_otp.jsp",
		linkLabel: "Patient Portal",
		icon: "login",
	},
]

export default function FourBanners() {
	const sectionRef = useRef(null)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		if (!sectionRef.current) return

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting)
			},
			{
				threshold: 0.2,
			},
		)

		observer.observe(sectionRef.current)

		return () => observer.disconnect()
	}, [])

	return (
		<section
			ref={sectionRef}
			className={styles.section}
			aria-labelledby="four-banners-title"
		>
			<div className={styles.shell}>
				<div className={styles.row}>
					{banners.map((item) => (
						<article
							key={item.title}
							className={`${styles.card} ${isVisible ? styles.cardVisible : ""}`}
						>
							<div className={styles.iconWrap} aria-hidden="true">
								<Icon name={item.icon} filled size={36} />
							</div>

							<h3 className={styles.cardTitle}>{item.title}</h3>
							<p className={styles.cardBody}>{item.body}</p>

							<div className={styles.buttonWrap}>
								<Button
									text={item.linkLabel}
									href={item.href}
									color="var(--secondary)"
								/>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
