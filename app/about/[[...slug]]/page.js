import Link from "next/link"
import { notFound } from "next/navigation"
import { getAboutPageBySlug, getAllAboutPages } from "@/app/about/_data"
import AboutPageHeader from "@/components/about/AboutPageHeader"
import AboutContentSection from "@/components/about/AboutContentSection"
import AboutMediaEmbed from "@/components/about/AboutMediaEmbed"
import styles from "@/components/about/about.module.css"

export function generateStaticParams() {
	return getAllAboutPages().map((page) => ({
		slug: page.slug,
	}))
}

export async function generateMetadata({ params }) {
	const resolvedParams = await params
	const slug = resolvedParams.slug ?? []
	const page = getAboutPageBySlug(slug)

	if (!page) {
		return {
			title: "Page Not Found | Vascular Surgery Specialists",
		}
	}

	return {
		title: `${page.pageHeading} | Vascular Surgery Specialists`,
	}
}

export default async function AboutPage({ params }) {
	const resolvedParams = await params
	const slug = resolvedParams.slug ?? []
	const page = getAboutPageBySlug(slug)

	if (!page) notFound()

	const mediaPosition = page.mediaPosition ?? "top"

	return (
		<div className={styles.aboutPage}>
			<div className={styles.aboutPageSurface}>
				<AboutPageHeader title={page.pageHeading} />

				<div className={styles.aboutPageBody}>
					<div className={styles.aboutPageContentStack}>
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
							<p className={styles.aboutPageAttribution}>
								{page.attribution.text}{" "}
								<a
									href={page.attribution.link}
									target="_blank"
									rel="noreferrer"
									className={styles.aboutPageAttributionLink}
								>
									{page.attribution.link}
								</a>
							</p>
						)}

						{mediaPosition === "bottom" && page.media && (
							<AboutMediaEmbed media={page.media} />
						)}

						{page.cta && (
							<div className={styles.aboutPageCtaWrap}>
								<Link href={page.cta.href} className={styles.aboutPageCta}>
									<span className={styles.aboutPageCtaText}>
										{page.cta.label}
									</span>
									<span className={styles.aboutPageCtaIcon} aria-hidden="true">
										›
									</span>
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
