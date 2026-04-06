import styles from "./TestimonialsSection.module.css"
import Testimonials from "./Testimonials"
import Image from "next/image"
import testimonials from "@/data/testimonials.json"

const membersLogos = [
	{
		id: 1,
		src: "/images/HonorHealth.png",
		alt: "Honor Health Logo",
	},
	{
		id: 2,
		src: "/images/DignityHealth.webp",
		alt: "Dignity Health Logo",
	},
	{
		id: 3,
		src: "/images/BannerHealth.svg",
		alt: "Banner Health Logo",
	},
]

const testimonialSource = [
	{
		label: "Google Reviews",
		url: "https://www.google.com/search?q=Vascular+Surgery+Specialists&rlz=1C5CHFA_enUS978US978&oq=vascular+surgery&gs_lcrp=EgZjaHJvbWUqDggCEEUYJxg7GIAEGIoFMg8IABBFGDkYsQMYyQMYgAQyCAgBEEUYJxg7Mg4IAhBFGCcYOxiABBiKBTINCAMQABiRAhiABBiKBTINCAQQABiRAhiABBiKBTIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPdIBCDUyMzVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8&lqi=ChxWYXNjdWxhciBTdXJnZXJ5IFNwZWNpYWxpc3RzSKDu_rfogICACFo0EAAQARACGAAYARgCIhx2YXNjdWxhciBzdXJnZXJ5IHNwZWNpYWxpc3RzKggIAhAAEAEQApIBD3N1cmdpY2FsX2NlbnRlcpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSMk5HOXVNMDluRUFF4AEA-gEFCOMDEDE#lkt=LocalPoiReviews&rlimm=15722829766478026673",
	},
]

export default function TestimonialsSection() {
	return (
		<>
			<section className={styles.section}>
				<div className={styles.shell}>
					<Testimonials
						title="What Our Patients Are Saying"
						titleId="testimonials-title"
						testimonials={testimonials}
						sources={testimonialSource}
						variant="landing"
					/>
				</div>
			</section>

			<section
				className={styles.memberSection}
				aria-labelledby="member-banner-title"
			>
				<div className={styles.memberShell}>
					<p id="member-banner-title" className={styles.memberLabel}>
						We are a proud member of
					</p>

					<div className={styles.memberLogos}>
						{membersLogos.map((logo) => (
							<div key={logo.id} className={styles.memberLogoItem}>
								<Image
									src={logo.src}
									alt={logo.alt}
									fill
									className={styles.memberLogoImage}
									sizes="(max-width: 700px) 40vw, 180px"
								/>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
