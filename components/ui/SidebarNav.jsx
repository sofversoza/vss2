"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Icon from "@/components/ui/Icon"
import styles from "./SidebarNav.module.css"

export default function SidebarNav({
	title,
	items = [],
	activeHref,
	ariaLabel = "Sidebar navigation",
	className = "",
	topOffset = "var(--main-navbar-height, 0px)",
}) {
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		setIsOpen(false)
	}, [activeHref])

	const closeMenu = () => setIsOpen(false)
	const toggleMenu = () => setIsOpen((prev) => !prev)

	const renderLink = (item, isNested = false) => {
		const isActive = item.href === activeHref

		return (
			<Link
				key={item.id ?? item.href}
				href={item.href}
				className={`${isNested ? styles.sidebarNavSubLink : styles.sidebarNavLink} ${
					isActive ? styles.sidebarNavLinkActive : ""
				}`}
				aria-current={isActive ? "page" : undefined}
				onClick={closeMenu}
			>
				{item.label}
			</Link>
		)
	}

	const renderItems = (itemsToRender) => {
		return itemsToRender.map((item) => {
			const hasActiveChild = item.children?.some((group) =>
				group.items?.some((subItem) => subItem.href === activeHref),
			)

			if (item.children?.length) {
				return (
					<div key={item.id} className={styles.sidebarNavSection}>
						{item.href ? (
							<Link
								href={item.href}
								className={`${styles.sidebarNavLink} ${
									item.href === activeHref || hasActiveChild
										? styles.sidebarNavLinkActive
										: ""
								}`}
								aria-current={item.href === activeHref ? "page" : undefined}
								onClick={closeMenu}
							>
								{item.label}
							</Link>
						) : (
							<p
								className={`${styles.sidebarNavSectionLabel} ${
									hasActiveChild ? styles.sidebarNavSectionLabelActive : ""
								}`}
							>
								{item.label}
							</p>
						)}

						<div className={styles.sidebarNavGroups}>
							{item.children.map((group) => (
								<div key={group.id} className={styles.sidebarNavGroup}>
									{group.groupLabel && (
										<p className={styles.sidebarNavGroupLabel}>
											{group.groupLabel}
										</p>
									)}

									<div className={styles.sidebarNavSubLinks}>
										{group.items?.map((subItem) => renderLink(subItem, true))}
									</div>
								</div>
							))}
						</div>
					</div>
				)
			}

			return renderLink(item)
		})
	}

	return (
		<aside
			className={`${styles.sidebarNav} ${className}`.trim()}
			aria-label={ariaLabel}
			style={{ "--sidebar-top-offset": topOffset }}
		>
			<button
				type="button"
				className={styles.sidebarNavToggle}
				onClick={toggleMenu}
				aria-expanded={isOpen}
				aria-controls="sidebar-nav-panel"
			>
				<span className={styles.sidebarNavToggleText}>
					{title || "Section Navigation"}
				</span>

				<Icon
					name={isOpen ? "close" : "menu"}
					filled
					size={22}
					className={styles.sidebarNavToggleIcon}
				/>
			</button>

			<div
				id="sidebar-nav-panel"
				className={`${styles.sidebarNavPanel} ${
					isOpen ? styles.sidebarNavPanelOpen : ""
				}`}
			>
				{title && <h2 className={styles.sidebarNavTitle}>{title}</h2>}

				<nav className={styles.sidebarNavLinks}>{renderItems(items)}</nav>
			</div>
		</aside>
	)
}
