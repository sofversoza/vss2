import Link from "next/link"
import { notFound } from "next/navigation"
import {
	getAllResourcePages,
	getResourcePageBySlug,
} from "@/app/resources/_data"
import resourcesSidebarItems from "@/app/resources/_data/resourcesSidebarItems"
import AboutPageHeader from "@/components/about/AboutPageHeader"
import AboutContentSection from "@/components/about/AboutContentSection"
import AboutMediaEmbed from "@/components/about/AboutMediaEmbed"
import SidebarNav from "@/components/ui/SidebarNav"
import styles from "@/components/content-pages/contentPageLayout.module.css"

export function generateStaticParams() {
	return getAllResourcePages().map((page) => ({
		slug: page.slug,
	}))
}

export async function generateMetadata({ params }) {
	const resolvedParams = await params
	const slug = resolvedParams.slug ?? []
	const page = getResourcePageBySlug(slug)

	if (!page) {
		return {
			title: "Page Not Found | Vascular Surgery Specialists",
		}
	}

	return {
		title: `${page.pageHeading} | Vascular Surgery Specialists`,
	}
}

export default async function ResourcesPage({ params }) {
	const resolvedParams = await params
	const slug = resolvedParams.slug ?? []
	const page = getResourcePageBySlug(slug)

	if (!page) notFound()

	const currentHref = slug.length
		? `/resources/${slug.join("/")}`
		: "/resources"
	const mediaPosition = page.mediaPosition ?? "top"

	return (
		<section className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.layout}>
					<SidebarNav
						className={styles.sidebar}
						title="Patient Resources"
						ariaLabel="Resources navigation"
						items={resourcesSidebarItems}
						activeHref={currentHref}
					/>

					<div className={styles.content}>
						<div className={styles.contentSurface}>
							<AboutPageHeader title={page.pageHeading} />

							<div className={styles.contentBody}>
								<div className={styles.contentStack}>
									{mediaPosition !== "bottom" && page.media && (
										<AboutMediaEmbed media={page.media} />
									)}

									{page.contentSections?.map((section, index) => (
										<AboutContentSection
											key={`${page.pageHeading}-section-${index}`}
											heading={section.heading}
											subheading={section.subheading}
											text={section.text}
											address={section.address}
											listItems={section.listItems}
											inlineMedia={section.inlineMedia}
											links={section.links}
											listIcon={section.listIcon}
										/>
									))}

									{page.attribution && (
										<p className={styles.attribution}>
											{page.attribution.text}{" "}
											<a
												href={page.attribution.link}
												target="_blank"
												rel="noreferrer"
												className={styles.attributionLink}
											>
												{page.attribution.link}
											</a>
										</p>
									)}

									{mediaPosition === "bottom" && page.media && (
										<AboutMediaEmbed media={page.media} />
									)}

									{page.cta && (
										<div className={styles.ctaWrap}>
											<Link href={page.cta.href} className={styles.cta}>
												<span className={styles.ctaText}>{page.cta.label}</span>
												<span className={styles.ctaIcon} aria-hidden="true">
													›
												</span>
											</Link>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
