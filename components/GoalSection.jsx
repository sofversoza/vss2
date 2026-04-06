import Link from "next/link"
import Image from "next/image"
import styles from "./GoalSection.module.css"

export default function GoalSection() {
	return (
		<>
			<section className={styles.goalsSection} aria-labelledby="goal-title">
				<div className={styles.wrapper}>
					<div className={styles.content}>
						<h2 id="goal-title" className={styles.title}>
							Our Goal is to Provide Minimally Invasive
							<br />
							Vascular Treatment Whenever Possible
						</h2>

						<p className={styles.body}>
							Vascular Surgery Specialists was formed in 2005 to provide
							specialized surgical care for vascular patients. Our goal is to
							provide you with the most effective, least traumatic treatment for
							your vascular condition. Our surgeons have many years of
							experience in the field of vascular surgery and are
							fellowship-trained and board certified.
						</p>

						<p className={styles.body}>
							Vascular surgeons are the only physicians treating vascular
							disease today who can provide all the treatment options available
							for vascular conditions. We specialize in providing the most
							current medical care options, and are expert at determining when
							non-invasive, minimally invasive or surgical treatments are
							appropriate.
						</p>

						<Link href="/about" className={styles.cta}>
							About VSS
							<span className={styles.ctaArrow} aria-hidden="true">
								›
							</span>
						</Link>
					</div>

					<div className={styles.media}>
						<div className={styles.imageInner}>
							<Image
								src="/images/officeWaitingArea.jpg"
								alt="Vascular Surgery Specialist Waiting Area"
								fill
								className={styles.image}
								sizes="(max-width: 900px) 100vw, 42vw"
							/>
						</div>
					</div>
				</div>
			</section>

			<section
				className={styles.facilitiesSection}
				aria-labelledby="facilities-title"
			>
				<div className={styles.wrapper}>
					<div className={styles.facilitiesContent}>
						<h2 id="facilities-title" className={styles.facilitiesTitle}>
							State-of-the-Art Facilities and Technologies
						</h2>

						<p className={styles.facilitiesBody}>
							Surgeons at VSS are skilled in the newest techniques in{" "}
							<strong>sclerotherapy</strong> and{" "}
							<strong>radiofrequency ablations</strong> that offer quicker
							recovery, minimal pain or discomfort, and can be performed on an
							outpatient basis under local anesthetic. These procedures are
							specialized microsurgical techniques that yield excellent cosmetic
							results and minimal scarring.
						</p>

						<Link href="/about/vein-center" className={styles.ctaDark}>
							The Vein Center at VSS
							<span className={styles.ctaDarkArrow} aria-hidden="true">
								›
							</span>
						</Link>
					</div>

					<div className={styles.scleroCard}>
						<div className={styles.scleroGraphic}>
							<Image
								src="/images/sclerotherapy.jpeg"
								alt="Sclerotherapy treatment diagram"
								fill
								className={styles.scleroGraphicImage}
								sizes="(max-width: 900px) 100vw, 34vw"
							/>
						</div>

						<div className={styles.scleroPanel}>
							<p className={styles.scleroLead}>
								Sclerotherapy, or <em>&lsquo;injection therapy&rsquo;</em>, is
								the most common treatment for varicose veins.
							</p>

							<div className={styles.scleroLinks}>
								<Link href="/about/vein-center" className={styles.scleroLink}>
									Sclerotherapy continued
									<span className={styles.scleroArrow} aria-hidden="true">
										›
									</span>
								</Link>

								<Link
									href="/files/Sclerotherapy.pdf"
									className={styles.scleroLink}
								>
									Sclerotherapy Procedure Instructions
									<span className={styles.scleroArrow} aria-hidden="true">
										›
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
