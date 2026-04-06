"use client"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import styles from "./PhysiciansCard.module.css"

export default function PhysiciansCard({ person }) {
	const router = useRouter()
	const profileHref = `/physicians/${person.slug}`

	const handleCardClick = (event) => {
		const clickedInteractive = event.target.closest("a, button")
		if (clickedInteractive) return

		router.push(profileHref)
	}

	const handleCardKeyDown = (event) => {
		const isEnter = event.key === "Enter"
		const isSpace = event.key === " "

		if (!isEnter && !isSpace) return

		const focusedInteractive = event.target.closest("a, button")
		if (focusedInteractive) return

		event.preventDefault()
		router.push(profileHref)
	}

	return (
		<article
			className={styles.card}
			onClick={handleCardClick}
			onKeyDown={handleCardKeyDown}
			tabIndex={0}
			role="link"
			aria-label={`View profile for ${person.name}`}
		>
			<div className={styles.imageWrap}>
				<Image
					src={person.image}
					alt={person.imageAlt || person.name}
					fill
					className={styles.image}
					sizes="(max-width: 900px) 100vw, 33vw"
				/>
			</div>

			<div className={styles.cardBody}>
				<h3 className={styles.name}>{person.name}</h3>

				{person.titleAbbreviations?.length > 0 && (
					<div className={styles.titleAbbreviations}>
						{person.titleAbbreviations.map((abbr, index) => (
							<span
								key={`${person.id}-abbr-${index}`}
								className={styles.titleAbbreviation}
							>
								{abbr}
							</span>
						))}
					</div>
				)}

				{person.title && <p className={styles.role}>{person.title}</p>}

				{person.summary && <p className={styles.summary}>{person.summary}</p>}

				<Link
					href={profileHref}
					className={styles.cta}
					aria-label={`Read profile for ${person.name}`}
				>
					<span>Read Profile</span>
					<span className={styles.arrow} aria-hidden="true">
						›
					</span>
				</Link>
			</div>
		</article>
	)
}
