"use client"

import { createContext, useContext, useMemo, useState, useCallback } from "react"
import { getTranslator } from "@/lib/patient-registration/translations"

const LanguageContext = createContext(null)

export function LanguageProvider({ children, initialLang = "en" }) {
	const [lang, setLang] = useState(initialLang)

	const t = useMemo(() => getTranslator(lang), [lang])

	const toggleLang = useCallback(() => {
		setLang((prev) => (prev === "en" ? "es" : "en"))
	}, [])

	const value = useMemo(
		() => ({ lang, t, setLang, toggleLang }),
		[lang, t, toggleLang],
	)

	return (
		<LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
	)
}

export function useLanguage() {
	const ctx = useContext(LanguageContext)
	if (!ctx) {
		throw new Error("useLanguage must be used within a LanguageProvider")
	}
	return ctx
}
