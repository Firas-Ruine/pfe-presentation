"use client"

import { useState, useMemo } from "react"
import PresentationLayout from "@/components/presentation/presentation-layout"
import HeroSlide from "@/components/presentation/slides/hero-slide"
import NavigationSlide from "@/components/presentation/slides/navigation-slide"
import IntroductionTitleSlide from "@/components/presentation/slides/introduction-title-slide"
import IntroductionContentSlide from "@/components/presentation/slides/introduction-content-slide"
import ProblemStatementSlide from "@/components/presentation/slides/problem-statement-slide"
import CompanyContextSlide from "@/components/presentation/slides/company-context-slide"
import ObjectivesScopeSlide from "@/components/presentation/slides/objectives-scope-slide"
import ScopeProgressSlide from "@/components/presentation/slides/scope-progress-slide"
import MethodologySlide from "@/components/presentation/slides/methodology-slide"
import ArchitectureSlide from "@/components/presentation/slides/architecture-slide"
import TechnologyStackSlide from "@/components/presentation/slides/technology-stack-slide"
import Sprint1Slide from "@/components/presentation/slides/sprint1-slide"
import Sprint2Slide from "@/components/presentation/slides/sprint2-slide"
import Sprint34Slide from "@/components/presentation/slides/sprint34-slide"
import Sprint5Slide from "@/components/presentation/slides/sprint5-slide"
import Sprint6Slide from "@/components/presentation/slides/sprint6-slide"
import SecuritySlide from "@/components/presentation/slides/security-slide"
import PerformanceMetricsSlide from "@/components/presentation/slides/performance-metrics-slide"
import MobileAppSlide from "@/components/presentation/slides/mobile-app-slide"
import MonitoringSlide from "@/components/presentation/slides/monitoring-slide"
import ChallengesSolutionsSlide from "@/components/presentation/slides/challenges-solutions-slide"
import ResultsAchievementsSlide from "@/components/presentation/slides/results-achievements-slide"
import ConclusionSlide from "@/components/presentation/slides/conclusion-slide"
// Import other slides here as they are created

// Placeholder for a generic slide content
const PlaceholderSlide = ({ title, content }: { title: string; content: string }) => (
  <div className="p-8 h-full flex flex-col items-center justify-center">
    <h1 className="text-3xl font-bold mb-4">{title}</h1>
    <p className="text-lg">{content}</p>
    <p className="mt-4 text-sm text-muted-foreground">(Contenu de la diapositive à implémenter)</p>
  </div>
)

PlaceholderSlide.defaultProps = {
  title: "Diapositive en Construction",
  content: "Cette diapositive est en cours de développement.",
}

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleStartPresentation = () => {
    setCurrentSlide(1) // Move to Navigation Slide (or first content slide)
  }

  const handleNavigateToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }

  // Define all your slides here. For now, many are placeholders.
  // The indices here must match the targetSlide in NavigationSlide and totalSlides.
  const slides = useMemo(
    () => [
      <HeroSlide key="hero" onStartPresentation={handleStartPresentation} />, // 0
      <NavigationSlide key="nav" onNavigate={handleNavigateToSlide} />, // 1
      <IntroductionTitleSlide key="intro-title" />, // 2
      <IntroductionContentSlide key="intro-content" />, // 3
      <CompanyContextSlide key="company-context" />, // 4
      <ProblemStatementSlide key="problem" />, // 5
      <ObjectivesScopeSlide key="objectives" />, // 6
      <ScopeProgressSlide key="scope-progress" />, // 7
      <MethodologySlide key="methodology" />, // 8
      <ArchitectureSlide key="architecture" />, // 9
      <TechnologyStackSlide key="tech-stack" />, // 10
      <Sprint1Slide key="sprint1" />, // 11
      <Sprint2Slide key="sprint2" />, // 12
      <Sprint34Slide key="sprint3-4" />, // 13
      <Sprint5Slide key="sprint5" />, // 14
      <Sprint6Slide key="sprint6" />, // 15
      <SecuritySlide key="security" />, // 16
      <PerformanceMetricsSlide key="perf-metrics" />, // 17
      <MobileAppSlide key="mobile-app" />, // 18
      <MonitoringSlide key="monitoring" />, // 19
      <ChallengesSolutionsSlide key="challenges-solutions" />, // 20
      <ResultsAchievementsSlide key="results-achievements" />, // 21
      <PlaceholderSlide
        key="roadmap" 
        title="Feuille de Route Future"
        content="Service mesh, chaos engineering, stratégie multi-cloud."
      />, // 22
      <PlaceholderSlide
        key="demo"
        title="Démonstration Live"
        content="Checklist de préparation, fonctionnalités clés."
      />, // 23
      <ConclusionSlide key="conclusion" />, // 24
      <PlaceholderSlide
        key="thanks"
        title="Merci!"
        content="Questions & Discussion"
      />, // 24
    ],
    [],
  )
  // Note: The slideTitles array should correspond to the actual titles you want in the navigation.
  // For brevity, I'm using generic titles for placeholders.
  const slideTitles = useMemo(
    () => [
      "Introduction",
      "Plan de la Présentation",
      "Introduction",
      "Contexte Entreprise",
      "Problématique",
      "Objectifs & Périmètre",
      "Périmètre & Progression", 
      "Méthodologie",
      "Architecture",
      "Stack Technologique",
      "Sprint 1: Conception",
      "Sprint 2: CI/CD",
      "Sprints 3-4: Développement",
      "Sprint 5: Performance",
      "Sprint 6: Validation",
      "Sécurité",
      "Métriques Performance",
      "Application Mobile",
      "Monitoring & Observabilité",
      "Défis & Solutions",
      "Résultats & Réalisations",
      "Feuille de Route Future",
      "Démonstration Live",
      "Conclusion & Perspectives",
      "Remerciements",
    ],
    [],
  )

  return (
    <PresentationLayout
      slides={slides}
      currentSlide={currentSlide}
      setCurrentSlide={setCurrentSlide}
      totalSlides={slides.length}
      slideTitles={slideTitles}
    />
  )
}
