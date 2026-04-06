"use client"

import { useEffect, useRef, useState } from "react"
import Icon from "../ui/Icon"
import styles from "./PhysicianCredentials.module.css"

export default function PhysicianCredentials({ items = [], physicianId }) {
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
			{
				threshold: 0.2,
			},
		)

		observer.observe(sectionRef.current)

		return () => observer.disconnect()
	}, [isVisible])

	if (!items?.length) return null

	return (
		<div
			ref={sectionRef}
			className={`${styles.credsWrapper} ${isVisible ? styles.visible : ""}`}
		>
			<ul className={styles.creds}>
				{items.map((item, index) => (
					<li
						key={`${physicianId}-cred-${index}`}
						className={styles.credsItem}
						style={{ "--cred-delay": `${240 + index * 140}ms` }}
					>
						<Icon
							name="check_circle"
							filled
							size={18}
							className={styles.credsIcon}
						/>
						<span>{item}</span>
					</li>
				))}
			</ul>
		</div>
	)
}
