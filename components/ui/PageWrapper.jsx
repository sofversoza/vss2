import styles from "./ui.module.css"

// as - allows to reuse this comp a different semantic elements as needed
// i.e. <PageWrapper as="section"> if not a div
export default function PageWrapper({ children, as: Component = "div" }) {
	return <Component className={styles.pageWrapper}>{children}</Component>
}
