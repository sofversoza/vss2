import styles from "./page.module.css"
import GoalSection from "@/components/GoalSection"
import HeroSection from "../components/HeroSection"
import FourBanners from "../components/FourBanners"
import TestimonialsSection from "@/components/TestimonialsSection"
import FAQQuickLinksSection from "@/components/FAQuickLinksSection"

export default function HomePage() {
	return (
		<div className={styles.page}>
			<HeroSection />
			<GoalSection />
			<FourBanners />
			<TestimonialsSection />
			<FAQQuickLinksSection />
		</div>
	)
}
