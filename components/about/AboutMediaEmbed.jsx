import Image from "next/image"
import styles from "./about.module.css"

export default function AboutMediaEmbed({ media }) {
	if (!media) return null

	const frameClass =
		media.size === "large"
			? styles.mediaFrameLarge
			: media.size === "tall"
				? styles.mediaFrameTall
				: styles.mediaFrameStandard

	return (
		<section className={styles.mediaSection}>
			{/* {media.title && (
				<h2 className={styles.mediaSectionHeading}>{media.title}</h2>
			)} */}

			<div className={`${styles.mediaFrame} ${frameClass}`}>
				{media.type === "image" && (
					<Image
						src={media.src}
						alt={media.alt || media.title || "About page image"}
						fill
						className={styles.mediaImage}
						sizes="(max-width: 900px) 100vw, 800px"
					/>
				)}

				{media.type === "video" && (
					<iframe
						className={styles.mediaIframe}
						src={media.src}
						title={media.title || "Embedded video"}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					/>
				)}
			</div>
		</section>
	)
}
