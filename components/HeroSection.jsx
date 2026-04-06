"use client" // for animation (useRef)

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import styles from "./HeroSection.module.css"
import Button from "@/components/ui/Button"

const highlights = [
	"Board Certified Vascular Specialists",
	"State-of-the-Art Facilities and Technologies",
	"From Minimally Invasive Procedures to Surgical Repair",
]

export default function HeroSection() {
	const sectionRef = useRef(null)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		if (!sectionRef.current || isVisible) return

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
					observer.disconnect()
				}
			},
			{ threshold: 0.2 },
		)

		observer.observe(sectionRef.current)

		return () => observer.disconnect()
	}, [isVisible])

	return (
		<section
			ref={sectionRef}
			className={styles.hero}
			aria-labelledby="hero-title"
		>
			<div className={styles.videoWrap}>
				<video
					className={styles.video}
					autoPlay
					muted
					loop
					playsInline
					preload="metadata"
				>
					<source src="/videos/heroVideo.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				{/* adds a darker filter over the video */}
				<div className={styles.overlay} />

				<div className={styles.content}>
					<div
						className={`${styles.textGroup} ${isVisible ? styles.visible : ""}`}
					>
						<h2
							id="hero-title"
							className={styles.title}
							aria-label="Hero Title"
						>
							<span>Specialized Surgical Care</span>
							<span>for Vascular Patients</span>
						</h2>

						<ul className={styles.highlights} aria-label="Practice highlights">
							{highlights.map((item, index) => (
								<li
									key={item}
									className={styles.highlightItem}
									style={{ "--highlight-delay": `${220 + index * 110}ms` }}
								>
									{item}
								</li>
							))}
						</ul>

						<div
							className={styles.buttonWrap}
							style={{ "--button-delay": `${220 + highlights.length * 110}ms` }}
						>
							<Button
								text="Meet Our Physicians"
								href="/physicians"
								color="var(--secondary)"
							/>

							<Link
								href="/contact"
								className={`slide-right-link ${styles.secondaryCta}`}
							>
								Book An Appointment
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
