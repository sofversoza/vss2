"use client"

import { useEffect, useMemo, useState } from "react"
import Icon from "./ui/Icon"
import styles from "./Testimonials.module.css"

export default function Testimonials({
	testimonials = [],
	sources = [],
	title = "Patient Testimonials",
	titleId = "profile-testimonials-title",
	variant = "default",
}) {
	const safeTestimonials = useMemo(
		() => testimonials.filter((item) => item?.quote),
		[testimonials],
	)

	const [activeIndex, setActiveIndex] = useState(0)

	useEffect(() => {
		if (safeTestimonials.length <= 1) return

		const interval = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % safeTestimonials.length)
		}, 10000)

		return () => clearInterval(interval)
	}, [safeTestimonials.length])

	useEffect(() => {
		if (activeIndex > safeTestimonials.length - 1) {
			setActiveIndex(0)
		}
	}, [safeTestimonials.length, activeIndex])

	if (!safeTestimonials.length) return null

	const current = safeTestimonials[activeIndex]
	const rating = Math.max(0, Math.min(5, Number(current.rating) || 0))

	const goNext = () => {
		setActiveIndex((prev) => (prev + 1) % safeTestimonials.length)
	}

	const goPrev = () => {
		setActiveIndex((prev) =>
			prev === 0 ? safeTestimonials.length - 1 : prev - 1,
		)
	}

	return (
		<section
			className={`${styles.section} ${
				variant === "landing" ? styles.landing : ""
			}`}
			aria-labelledby={titleId}
		>
			<div className={styles.header}>
				<h2 id={titleId} className={styles.title}>
					{title}
				</h2>
			</div>

			<div className={styles.slider}>
				<button
					type="button"
					className={`${styles.arrow} ${styles.arrowLeft}`}
					onClick={goPrev}
					aria-label="Previous testimonial"
				>
					‹
				</button>

				<div className={styles.quoteWrap}>
					<div key={current.id || activeIndex} className={styles.quoteInner}>
						<p className={styles.quote}>“{current.quote}”</p>

						<div className={styles.meta}>
							{rating > 0 && (
								<div
									className={styles.rating}
									aria-label={`${rating} out of 5 stars`}
								>
									{Array.from({ length: rating }).map((_, index) => (
										<Icon
											key={`${current.id || activeIndex}-star-${index}`}
											name="star"
											filled
											size={16}
											className={styles.ratingIcon}
										/>
									))}
								</div>
							)}

							<p className={styles.reviewer}>{current.reviewer}</p>

							{current.location && (
								<p className={styles.location}>{current.location}</p>
							)}

							{current.source && (
								<p className={styles.sourceTag}>{current.source}</p>
							)}
						</div>
					</div>
				</div>

				<button
					type="button"
					className={`${styles.arrow} ${styles.arrowRight}`}
					onClick={goNext}
					aria-label="Next testimonial"
				>
					›
				</button>
			</div>

			{safeTestimonials.length > 1 && (
				<div
					className={styles.dots}
					role="tablist"
					aria-label="Testimonial slides"
				>
					{safeTestimonials.map((item, index) => {
						const isActive = index === activeIndex

						return (
							<button
								key={item.id || index}
								type="button"
								role="tab"
								aria-selected={isActive}
								aria-label={`Go to testimonial ${index + 1}`}
								className={`${styles.dot} ${isActive ? styles.dotActive : ""}`}
								onClick={() => setActiveIndex(index)}
							/>
						)
					})}
				</div>
			)}

			{sources?.length > 0 && (
				<div className={styles.sources}>
					<span className={styles.sourcesLabel}>Sources:</span>

					{sources.map((src, index) => (
						<span key={`${src.label}-${src.url}`} className={styles.sourceItem}>
							<a
								href={src.url}
								target="_blank"
								rel="noreferrer"
								className={styles.sourceLink}
							>
								{src.label}
							</a>

							{index < sources.length - 1 && (
								<span className={styles.sourceDivider} aria-hidden="true">
									|
								</span>
							)}
						</span>
					))}
				</div>
			)}
		</section>
	)
}
