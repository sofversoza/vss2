"use client"

import { usePathname } from "next/navigation"
import SidebarNav from "@/components/ui/SidebarNav"
import { aboutSidebarItems } from "@/app/about/_data/aboutSidebarItems"
import styles from "./AboutPageLayout.module.css"

export default function AboutPageLayout({ children }) {
	const pathname = usePathname()

	return (
		<section className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.layout}>
					<SidebarNav
						className={styles.sidebar}
						title="About & Services"
						ariaLabel="About page navigation"
						items={aboutSidebarItems}
						activeHref={pathname}
					/>

					<div className={styles.content}>{children}</div>
				</div>
			</div>
		</section>
	)
}
