import styles from "./Footer.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.inner}>
				<div className={styles.brandCol}>
					<div className={styles.brand}>
						<Image
							src="/images/logo.jpg"
							alt="Vascular Surgery Specialists"
							width={120}
							height={80}
							priority
							className={styles.brandImage}
							style={{ height: "auto" }}
						/>
						<p className={styles.brandText}>
							Vascular <br /> Surgery <br /> Specialist
						</p>
					</div>

					<div className={styles.brandMeta}>
						<hr className={styles.rule} />
						<span className={styles.tagline}>
							Specialized Surgery Care for Vascular Patients
						</span>
					</div>
				</div>

				<div className={`${styles.locationCol} ${styles.phoenixCol}`}>
					<h6>Phoenix Office</h6>
					<p className={styles.address}>
						6040 n 75th St <br /> Suite 105 <br /> Phoenix, AZ 85014
					</p>
					<p>
						Phone: <span>(602) 277-7430</span>
					</p>
					<p>
						Fax: <span>(602) 279-5333</span>
					</p>
				</div>

				<div className={`${styles.locationCol} ${styles.mesaCol}`}>
					<h6>Mesa Office</h6>
					<p className={styles.address}>
						2945 S Dobson Rd <br /> Mesa, AZ 85202
					</p>
					<p>
						Phone: <span>(480) 210-8620</span>
					</p>
					<p>
						Fax: <span>(480) 210-8622</span>
					</p>
				</div>

				<div className={styles.aasCol}>
					<Link
						href="https://www.arizonaadvancedsurgery.com/"
						className={styles.logoLink}
						aria-label="Go to Arizona Advanced Surgery"
					>
						<Image
							src="/images/aas-logo.png"
							alt="Arizona Advanced Surgery"
							width={250}
							height={80}
							priority
							className={styles.aasImage}
							style={{ height: "auto" }}
						/>
					</Link>

					<p className={styles.aasText}>
						Vascular Surgery Specialist is proud to be a <br />
						division of Arizona Advanced Surgery
					</p>
				</div>
			</div>

			<div className={styles.bottom}>
				<p>
					© {new Date().getFullYear()} Vascular Surgery Specialists. All rights
					reserved.
				</p>
			</div>
		</footer>
	)
}
