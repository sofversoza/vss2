import Icon from "@/components/ui/Icon"
import styles from "./about.module.css"

export default function AboutContentSection({
	heading,
	subheading,
	text,
	address = [],
	listItems = [],
	inlineMedia,
	links = [],
	listIcon = "check_circle",
}) {
	const paragraphs = Array.isArray(text) ? text : text ? [text] : []
	const addressLines = Array.isArray(address)
		? address
		: address
			? [address]
			: []
	const shouldWrap = Boolean(inlineMedia?.wrap && inlineMedia?.type === "image")
	const hasImageGroup = Boolean(
		Array.isArray(inlineMedia?.images) && inlineMedia.images.length > 0,
	)

	const mediaPositionClass =
		inlineMedia?.position === "left"
			? styles.contentSectionInlineLayoutLeft
			: styles.contentSectionInlineLayoutRight

	const floatMediaPositionClass =
		inlineMedia?.position === "left"
			? styles.contentSectionFloatMediaLeft
			: styles.contentSectionFloatMediaRight

	const inlineSingleImageStyle =
		inlineMedia && !hasImageGroup
			? {
					width: inlineMedia.width || "280px",
					height: "auto",
				}
			: undefined

	const inlineGroupStyle =
		inlineMedia && hasImageGroup
			? {
					"--about-group-image-width": inlineMedia.width || "180px",
				}
			: undefined

	const normalizeListItem = (item) => {
		if (typeof item === "string") {
			return {
				type: "text",
				value: item,
			}
		}

		if (typeof item !== "object" || item === null || Array.isArray(item)) {
			return null
		}

		if (Array.isArray(item.items)) {
			return {
				type: "nested",
				label: item.label || "",
				items: item.items,
				icon: item.icon,
			}
		}

		const entries = Object.entries(item).filter(([key]) => key !== "icon")

		if (entries.length === 1) {
			const [label, value] = entries[0]

			return {
				type: "labeledText",
				label,
				text: value,
				icon: item.icon,
			}
		}

		return null
	}

	const renderListItemText = (
		item,
		labelClass = styles.contentSectionListLabel,
		textClass = styles.contentSectionListText,
	) => {
		const normalized = normalizeListItem(item)

		if (!normalized) return null

		if (normalized.type === "text") {
			const value = normalized.value
			const colonIndex = typeof value === "string" ? value.indexOf(":") : -1

			if (colonIndex > -1) {
				const label = value.slice(0, colonIndex)
				const description = value.slice(colonIndex + 1).trim()

				return (
					<span className={textClass}>
						<span className={labelClass}>{label}:</span>{" "}
						<span className={styles.contentSectionListDescription}>
							{description}
						</span>
					</span>
				)
			}

			return <span className={textClass}>{value}</span>
		}

		if (normalized.type === "labeledText") {
			return (
				<span className={textClass}>
					<span className={labelClass}>{normalized.label}:</span>{" "}
					<span className={styles.contentSectionListDescription}>
						{normalized.text}
					</span>
				</span>
			)
		}

		if (normalized.type === "nested") {
			return <span className={labelClass}>{normalized.label}</span>
		}

		return null
	}

	const renderList = () => {
		if (listItems.length === 0) return null

		return (
			<ul className={styles.contentSectionList}>
				{listItems.map((item, index) => {
					const normalized = normalizeListItem(item)

					if (!normalized) return null

					if (normalized.type === "nested") {
						return (
							<li
								key={`${heading || "content"}-list-item-${index}`}
								className={styles.contentSectionListItem}
							>
								<Icon
									name={normalized.icon || listIcon}
									filled
									size={18}
									className={styles.contentSectionListIcon}
								/>

								<div>
									{renderListItemText(
										item,
										styles.contentSectionNestedLabel,
										styles.contentSectionListText,
									)}

									{normalized.items?.length > 0 && (
										<ul className={styles.contentSectionNestedList}>
											{normalized.items.map((subItem, subIndex) => (
												<li
													key={`${heading || "content"}-nested-item-${index}-${subIndex}`}
													className={styles.contentSectionNestedItem}
												>
													{renderListItemText(
														subItem,
														styles.contentSectionNestedLabel,
														styles.contentSectionNestedItemText,
													)}
												</li>
											))}
										</ul>
									)}
								</div>
							</li>
						)
					}

					return (
						<li
							key={`${heading || "content"}-list-item-${index}`}
							className={styles.contentSectionListItem}
						>
							<Icon
								name={normalized.icon || listIcon}
								filled
								size={18}
								className={styles.contentSectionListIcon}
							/>
							{renderListItemText(item)}
						</li>
					)
				})}
			</ul>
		)
	}

	const renderLinks = () => {
		if (links.length === 0) return null

		return (
			<div className={styles.contentSectionLinks}>
				{links.map((link) => (
					<a
						key={link.href}
						href={link.href}
						target="_blank"
						rel="noreferrer"
						className={styles.contentSectionLink}
					>
						{link.label}
						<span className={styles.contentSectionLinkArrow} aria-hidden="true">
							›
						</span>
					</a>
				))}
			</div>
		)
	}

	const renderAddress = () => {
		if (addressLines.length === 0) return null

		return (
			<div className={styles.contentSectionAddressGroup}>
				{addressLines.map((line, index) => (
					<p
						key={`${heading || "content"}-address-${index}`}
						className={styles.contentSectionAddress}
					>
						{line}
					</p>
				))}
			</div>
		)
	}

	const renderTextContent = () => (
		<>
			{paragraphs.map((paragraph, index) => (
				<p
					key={`${heading || "content"}-paragraph-${index}`}
					className={styles.contentSectionParagraph}
				>
					{paragraph}
				</p>
			))}
			{renderAddress()}
			{renderList()}
			{renderLinks()}
		</>
	)

	const renderInlineImage = () => {
		if (!inlineMedia || inlineMedia.type !== "image") return null

		if (hasImageGroup) {
			return (
				<div
					className={`${styles.contentSectionInlineImageGroup} ${
						inlineMedia.layout === "row"
							? styles.contentSectionInlineImageGroupRow
							: styles.contentSectionInlineImageGroupColumn
					}`}
					style={inlineGroupStyle}
				>
					{inlineMedia.images.map((image, index) => (
						<img
							key={`${image.src}-${index}`}
							src={image.src}
							alt={
								image.alt ||
								inlineMedia.alt ||
								subheading ||
								heading ||
								"Section image"
							}
							className={`${styles.contentSectionInlineImage} ${styles.contentSectionInlineImageGroupImage}`}
							loading="lazy"
						/>
					))}
				</div>
			)
		}

		return (
			<img
				src={inlineMedia.src}
				alt={inlineMedia.alt || subheading || heading || "Section image"}
				className={styles.contentSectionInlineImage}
				style={inlineSingleImageStyle}
				loading="lazy"
			/>
		)
	}

	return (
		<section className={styles.contentSection}>
			{heading && <h2 className={styles.contentSectionHeading}>{heading}</h2>}
			{subheading && (
				<h3 className={styles.contentSectionSubheading}>{subheading}</h3>
			)}

			<div className={styles.contentSectionBody}>
				{shouldWrap ? (
					<>
						<div
							className={`${styles.contentSectionFloatMedia} ${floatMediaPositionClass}`}
						>
							{renderInlineImage()}
						</div>

						{renderTextContent()}
					</>
				) : inlineMedia ? (
					<div
						className={`${styles.contentSectionInlineLayout} ${mediaPositionClass}`}
					>
						<div className={styles.contentSectionInlineText}>
							{renderTextContent()}
						</div>

						<div className={styles.contentSectionInlineMedia}>
							{renderInlineImage()}
						</div>
					</div>
				) : (
					renderTextContent()
				)}
			</div>
		</section>
	)
}
