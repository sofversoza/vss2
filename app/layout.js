import "./globals.css"
import { Lato, Montserrat } from "next/font/google"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ScrollToTopButton from "@/components/ui/ScrollToTopBtn"

const lato = Lato({
	subsets: ["latin"],
	weight: ["300", "400", "700"],
	style: ["normal", "italic"],
	display: "swap",
	variable: "--font-lato",
})

const montserrat = Montserrat({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-montserrat",
})

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${lato.variable} ${montserrat.variable}`}>
			<head>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
				/>
			</head>
			<body>
				<Navbar />
				<main>{children}</main>
				<ScrollToTopButton />
				<Footer />
			</body>
		</html>
	)
}
