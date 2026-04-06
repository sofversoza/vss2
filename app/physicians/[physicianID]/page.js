import Image from "next/image"
import { notFound } from "next/navigation"
import { getAllPhysicians, getPhysicianBySlug } from "@/lib/physicians"
import ProfileTestimonials from "@/components/Testimonials"
import PhysicianCredentials from "@/components/physicians/PhysicianCredentials"
import SidebarNav from "@/components/ui/SidebarNav"
import styles from "./page.module.css"

export function generateStaticParams() {
	return getAllPhysicians().map((physician) => ({
		physicianID: physician.slug,
	}))
}

export async function generateMetadata({ params }) {
	const { physicianID } = await params
	const physician = getPhysicianBySlug(physicianID)

	if (!physician) return { title: "Physician Not Found" }

	return {
		title: `${physician.name} | Vascular Surgery Specialists`,
		description: physician.summary || physician.title,
	}
}

export default async function PhysicianProfilePage({ params }) {
	const { physicianID } = await params

	const physicians = getAllPhysicians()
	const physician = getPhysicianBySlug(physicianID)

	if (!physician) notFound()

	const sidebarItems = physicians.map((item) => ({
		id: item.slug,
		label: item.titleAbbreviations?.[0]
			? `${item.name}, ${item.titleAbbreviations[0]}`
			: item.name,
		href: `/physicians/${item.slug}`,
	}))

	return (
		<section className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.layout}>
					<SidebarNav
						className={styles.sidebar}
						title="Our Providers"
						ariaLabel="Physician navigation"
						items={sidebarItems}
						activeHref={`/physicians/${physicianID}`}
					/>

					<article className={styles.card}>
						<h1 className={styles.name}>
							{physician.name}
							{physician.titleAbbreviations?.length > 0 && (
								<>
									{", "}
									<span className={styles.titleAbbrList}>
										{physician.titleAbbreviations.map((abbr, index) => (
											<span
												key={`${physician.id}-abbr-${index}`}
												className={styles.titleAbbr}
											>
												{abbr}
												{index < physician.titleAbbreviations.length - 1 &&
													", "}
											</span>
										))}
									</span>
								</>
							)}
						</h1>

						<p className={styles.title}>{physician.title}</p>

						<div className={styles.flowContent}>
							<div className={styles.topContent}>
								<div className={styles.imageWrap}>
									<Image
										src={physician.image}
										alt={physician.imageAlt || physician.name}
										fill
										className={styles.image}
										sizes="(max-width: 700px) 180px, 260px"
									/>
								</div>

								<div className={styles.textContent}>
									{physician.summary && (
										<p className={styles.summary}>{physician.summary}</p>
									)}

									{physician.bio?.length > 0 && (
										<div className={styles.bioGroup}>
											{physician.bio.map((paragraph, index) => (
												<p
													key={`${physician.id}-bio-${index}`}
													className={styles.bio}
												>
													{paragraph}
												</p>
											))}
										</div>
									)}
								</div>
							</div>

							{physician.credentials?.length > 0 && (
								<PhysicianCredentials
									items={physician.credentials}
									physicianId={physician.id}
								/>
							)}

							{physician.awards?.length > 0 && (
								<div className={styles.awardsList}>
									{physician.awards.map((award) => (
										<div key={award.id} className={styles.awardRow}>
											{award.image && (
												<div className={styles.awardImageWrap}>
													<Image
														src={award.image}
														alt={award.title}
														fill
														className={styles.awardImage}
														sizes="120px"
													/>
												</div>
											)}

											<div className={styles.awardContent}>
												<p className={styles.awardName}>
													{award.issuer} {award.title}
												</p>
												<p className={styles.awardMeta}>
													Voted a Top Doc in Phoenix Magazine by peers
												</p>
											</div>
										</div>
									))}
								</div>
							)}
						</div>

						{physician.testimonials?.length > 0 && (
							<ProfileTestimonials
								testimonials={physician.testimonials}
								sources={physician.testimonialSources}
							/>
						)}
					</article>
				</div>
			</div>
		</section>
	)
}
