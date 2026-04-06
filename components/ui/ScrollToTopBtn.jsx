"use client"

import { useEffect, useState } from "react"
import Icon from "./Icon"
import styles from "./ui.module.css"

export default function ScrollToTopButton() {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY
			const scrollableHeight =
				document.documentElement.scrollHeight - window.innerHeight

			if (scrollableHeight <= 0) {
				setIsVisible(false)
				return
			}

			const progress = scrollTop / scrollableHeight
			setIsVisible(progress >= 0.5)
		}

		handleScroll()
		window.addEventListener("scroll", handleScroll, { passive: true })

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}

	return (
		<button
			type="button"
			className={`${styles.scrollTopButton} ${isVisible ? styles.scrollTopButtonVisible : ""}`}
			onClick={scrollToTop}
			aria-label="Scroll back to top"
		>
			<Icon name="keyboard_arrow_up" filled size={24} />
		</button>
	)
}
