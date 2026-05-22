"use client"

import { useState, useRef, useEffect } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LanguageProvider, useLanguage } from "./LanguageContext"
import LanguageToggle from "./LanguageToggle"
import FormStepper from "./FormStepper"
import StepNavigation from "./StepNavigation"
import SuccessScreen from "./SuccessScreen"
import GeneralStep from "./steps/GeneralStep"
import ContactStep from "./steps/ContactStep"
import PrimaryInsuranceStep from "./steps/PrimaryInsuranceStep"
import SecondaryInsuranceStep from "./steps/SecondaryInsuranceStep"
import EmergencyContactStep from "./steps/EmergencyContactStep"
import ReferralStep from "./steps/ReferralStep"
import FamilyHistoryStep from "./steps/FamilyHistoryStep"
import ReviewStep from "./steps/ReviewStep"
import {
	fullRegistrationSchema,
	defaultValues,
	STEPS,
} from "@/lib/patient-registration/schema"
import styles from "./PatientRegistrationForm.module.css"

const STEP_COMPONENTS = [
	GeneralStep,
	ContactStep,
	PrimaryInsuranceStep,
	SecondaryInsuranceStep,
	EmergencyContactStep,
	ReferralStep,
	FamilyHistoryStep,
	ReviewStep,
]

function FormInner() {
	const { t, lang } = useLanguage()
	const [currentStep, setCurrentStep] = useState(0)
	const [submitState, setSubmitState] = useState({
		status: "idle", // idle | submitting | success | error
		errorMessage: null,
	})
	const stepHeadingRef = useRef(null)

	const methods = useForm({
		resolver: zodResolver(fullRegistrationSchema),
		defaultValues,
		mode: "onTouched",
		shouldFocusError: true,
	})

	const { handleSubmit, trigger } = methods

	// On step change, focus the step heading for screen-reader announcement + scroll
	useEffect(() => {
		if (stepHeadingRef.current) {
			stepHeadingRef.current.focus()
			stepHeadingRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
		}
	}, [currentStep])

	const goToStep = (index) => {
		if (index < 0 || index >= STEPS.length) return
		setCurrentStep(index)
	}

	const handleNext = async () => {
		const fieldsToValidate = STEPS[currentStep].fields
		const isValid = await trigger(fieldsToValidate)
		if (isValid && currentStep < STEPS.length - 1) {
			setCurrentStep((s) => s + 1)
		}
	}

	const handlePrevious = () => {
		if (currentStep > 0) setCurrentStep((s) => s - 1)
	}

	const onSubmit = async (data) => {
		setSubmitState({ status: "submitting", errorMessage: null })
		try {
			const res = await fetch("/api/patient-registration", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ ...data, _meta: { language: lang } }),
			})
			if (!res.ok) {
				const body = await res.json().catch(() => ({}))
				throw new Error(body.error || "Submission failed")
			}
			setSubmitState({ status: "success", errorMessage: null })
		} catch (err) {
			setSubmitState({
				status: "error",
				errorMessage: err.message || "Submission failed",
			})
		}
	}

	if (submitState.status === "success") {
		return <SuccessScreen />
	}

	const CurrentStepComponent = STEP_COMPONENTS[currentStep]
	const isFirstStep = currentStep === 0
	const isLastStep = currentStep === STEPS.length - 1

	return (
		<FormProvider {...methods}>
			<div className={styles.formShell}>
				<div className={styles.header}>
					<div>
						<h1 className={styles.title} tabIndex={-1}>
							{t("pageTitle")}
						</h1>
						<p className={styles.subtitle}>{t("pageSubtitle")}</p>
					</div>
					<LanguageToggle />
				</div>

				<FormStepper
					steps={STEPS}
					currentStep={currentStep}
					onStepClick={goToStep}
				/>

				<form
					onSubmit={handleSubmit(onSubmit)}
					noValidate
					className={styles.form}
					aria-label={t("pageTitle")}
				>
					{/* Skip-link target / focusable step heading for SR announce */}
					<div
						ref={stepHeadingRef}
						tabIndex={-1}
						className={styles.stepFocusAnchor}
						aria-hidden="false"
					/>

					{submitState.status === "error" && (
						<div className={styles.submitError} role="alert">
							<strong>{t("submitErrorTitle")}</strong>
							<p>{submitState.errorMessage || t("submitErrorBody")}</p>
						</div>
					)}

					<CurrentStepComponent onEditStep={goToStep} />

					<StepNavigation
						isFirstStep={isFirstStep}
						isLastStep={isLastStep}
						onPrevious={handlePrevious}
						onNext={handleNext}
						isSubmitting={submitState.status === "submitting"}
					/>
				</form>
			</div>
		</FormProvider>
	)
}

export default function PatientRegistrationForm() {
	return (
		<LanguageProvider>
			<FormInner />
		</LanguageProvider>
	)
}
