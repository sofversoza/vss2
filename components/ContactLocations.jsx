import Image from "next/image"
import styles from "./ContactLocations.module.css"

const locations = [
	{
		id: "phoenix",
		officeName: "Phoenix Office",
		doctors: "Dr. Brink & Dr. Zomaya",
		phone: "(602) 277-7430",
		fax: "(602) 279-5333",
		addressLines: ["6040 N. 7th St.", "Suite 105", "Phoenix, AZ 85014"],
		mapQuery: "6040 N 7th St Suite 105, Phoenix, AZ 85014",
	},
	{
		id: "mesa",
		officeName: "Mesa Office",
		doctors: "Dr. Siegrist & Dr. Harrison",
		phone: "(480) 210-8620",
		fax: "(480) 210-8622",
		addressLines: ["2945 S. Dobson Road", "Mesa, AZ 85202"],
		mapQuery: "2945 S Dobson Road, Mesa, AZ 85202",
	},
	{
		id: "flagstaff",
		officeName: "Flagstaff Office",
		doctors: "Dr. Brink & Dr. Zomaya",
		phone: "(928) 773-2332",
		fax: "(928) 773-2300",
		addressLines: ["1215 N. Beaver St.", "Suite 203", "Flagstaff, AZ 86001"],
		mapQuery: "1215 N Beaver St Suite 203, Flagstaff, AZ 86001",
	},
]

function buildMapSrc(query) {
	return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
}

export default function ContactLocations() {
	return (
		<section className={styles.section} aria-labelledby="contact-title">
			<div className={styles.heroImageWrap}>
				<Image
					src="/images/FrontDesk.jpg"
					alt="Vascular Surgery Specialists office building or patient care setting"
					fill
					className={styles.heroImage}
					priority
					sizes="100vw"
				/>
			</div>

			<div className={styles.shell}>
				<header className={styles.header}>
					<h1 id="contact-title" className={styles.title}>
						Contact Us
					</h1>
					<p className={styles.subtitle}>
						We’d like to hear from you! If you have questions or would like to
						schedule an appointment, please give us a call.
					</p>
				</header>

				<div className={styles.cards}>
					{locations.map((location) => (
						<article key={location.id} className={styles.card}>
							<div className={styles.infoCol}>
								<h2 className={styles.officeTitle}>{location.officeName}</h2>

								<p className={styles.doctors}>{location.doctors}</p>

								<div className={styles.contactRows}>
									<p>
										<span className={styles.label}>Phone:</span>{" "}
										<a href={`tel:${location.phone.replace(/[^\d]/g, "")}`}>
											{location.phone}
										</a>
									</p>
									<p>
										<span className={styles.label}>Fax:</span> {location.fax}
									</p>
								</div>

								<address className={styles.address}>
									{location.addressLines.map((line) => (
										<span key={line}>{line}</span>
									))}
								</address>

								<a
									className={styles.mapLink}
									href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
										location.mapQuery,
									)}`}
									target="_blank"
									rel="noreferrer"
								>
									Open in Google Maps <span aria-hidden="true">›</span>
								</a>
							</div>

							<div className={styles.mapCol}>
								<div className={styles.mapFrame}>
									<iframe
										title={`${location.officeName} map`}
										src={buildMapSrc(location.mapQuery)}
										className={styles.map}
										loading="lazy"
										allowFullScreen
										referrerPolicy="no-referrer-when-downgrade"
									/>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
