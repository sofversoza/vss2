"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import styles from "./Navbar.module.css"
import Icon from "@/components/ui/Icon"

export default function Navbar() {
	const pathname = usePathname()
	const headerRef = useRef(null)
	const [mobileOpen, setMobileOpen] = useState(false)

	useEffect(() => {
		if (!headerRef.current) return

		const updateNavbarHeight = () => {
			const height = headerRef.current?.offsetHeight ?? 0
			document.documentElement.style.setProperty(
				"--main-navbar-height",
				`${height}px`,
			)
		}

		updateNavbarHeight()

		const observer = new ResizeObserver(() => {
			updateNavbarHeight()
		})

		observer.observe(headerRef.current)
		window.addEventListener("resize", updateNavbarHeight)

		return () => {
			observer.disconnect()
			window.removeEventListener("resize", updateNavbarHeight)
		}
	}, [])

	const closeMenus = () => {
		setMobileOpen(false)
	}

	return (
		<header ref={headerRef} className={styles.header}>
			<div className={styles.inner}>
				<div className={styles.top}>
					<div className={styles.mobileActions}>
						<Link
							href="/"
							className={styles.mobileHomeButton}
							aria-label="Go to homepage"
							onClick={closeMenus}
						>
							<Icon
								name="home"
								filled
								size={22}
								className={styles.mobileIcon}
							/>
						</Link>

						<button
							type="button"
							className={styles.mobileToggle}
							aria-expanded={mobileOpen}
							aria-controls="main-navigation"
							aria-label={mobileOpen ? "Close menu" : "Open menu"}
							onClick={() => {
								setMobileOpen((prev) => !prev)
							}}
						>
							<Icon
								name={mobileOpen ? "close" : "menu"}
								filled
								size={22}
								className={styles.mobileIcon}
							/>
						</button>
					</div>

					<Link href="/" className={styles.logo} aria-label="Go to homepage">
						<Image
							src="/images/logo.jpg"
							alt="Vascular Surgery Specialists"
							width={130}
							height={85}
							priority
						/>
					</Link>

					<p className={styles.siteTitle}>Vascular Surgery Specialists</p>

					<div className={styles.contactBlock}>
						<a href="tel:16022777430" className={styles.contactItem}>
							<Icon name="call" filled size={18} />
							<span>(602) 277-7430</span>
						</a>

						<a href="fax:16022795333" className={styles.contactItem}>
							<Icon name="fax" filled size={18} />
							<span>(602) 279-5333</span>
						</a>
					</div>
				</div>
			</div>

			<div className={styles.bottom}>
				<div className={styles.bottomInner}>
					<nav
						id="main-navigation"
						className={`${styles.nav} ${mobileOpen ? styles.navOpen : ""}`}
						aria-label="Main navigation"
					>
						<Link
							href="/"
							className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
							onClick={closeMenus}
						>
							Home
						</Link>

						<Link
							href="/about"
							className={`${styles.link} ${pathname.startsWith("/about") ? styles.active : ""}`}
							onClick={closeMenus}
						>
							About & Services
						</Link>

						<Link
							href="/physicians"
							className={`${styles.link} ${pathname.startsWith("/physicians") ? styles.active : ""}`}
							onClick={closeMenus}
						>
							Physicians
						</Link>

						<Link
							href="/resources"
							className={`${styles.link} ${pathname.startsWith("/resources") ? styles.active : ""}`}
							onClick={closeMenus}
						>
							Resources
						</Link>

						<Link
							href="/contact"
							className={`${styles.link} ${pathname === "/contact" ? styles.active : ""}`}
							onClick={closeMenus}
						>
							Contact Us
						</Link>

						<a
							href="https://mycw146.ecwcloud.com/portal20504/jsp/100mp/login_otp.jsp"
							target="_blank"
							rel="noreferrer"
							className={styles.link}
							onClick={closeMenus}
						>
							Patient Portal
						</a>
					</nav>
				</div>
			</div>
		</header>
	)
}
