"use client"

import { useState, useMemo } from "react"
import PresentationLayout from "@/components/presentation/presentation-layout"
import HeroSlide from "@/components/presentation/slides/hero-slide"
import NavigationSlide from "@/components/presentation/slides/navigation-slide"
import IntroductionTitleSlide from "@/components/presentation/slides/introduction-title-slide"
import ProjectContextSlide from "@/components/presentation/slides/project-context-slide"
import WhatIsDevOpsSlide from "@/components/presentation/slides/what-is-devops-slide"
import DevOpsGlobalImpactSlide from "@/components/presentation/slides/devops-global-impact-slide"
import CompanyPresentationTitleSlide from "@/components/presentation/slides/company-presentation-title-slide"
import CurrentArchitectureProblemsSlide from "@/components/presentation/slides/current-architecture-problems-slide"
import CompanyOverviewSlide from "@/components/presentation/slides/company-overview-slide"
import ProjectObjectivesSlide from "@/components/presentation/slides/project-objectives-slide"
import ProjectScopeProgressSlide from "@/components/presentation/slides/project-scope-progress-slide"
import DevelopmentMethodologySlide from "@/components/presentation/slides/development-methodology-slide"
import MicroservicesArchitectureSlide from "@/components/presentation/slides/microservices-architecture-slide"
import TechStackOverviewSlide from "@/components/presentation/slides/tech-stack-overview-slide"
import Sprint1Slide from "@/components/presentation/slides/sprint1-slide"
import Sprint2Slide from "@/components/presentation/slides/sprint2-slide"
import Sprint34Slide from "@/components/presentation/slides/sprint34-slide"
import Sprint5Slide from "@/components/presentation/slides/sprint5-slide"
import Sprint6Slide from "@/components/presentation/slides/sprint6-slide"
import SecurityImplementationSlide from "@/components/presentation/slides/security-implementation-slide"
import PerformanceBenchmarksSlide from "@/components/presentation/slides/performance-benchmarks-slide"
import MobileAppFeaturesSlide from "@/components/presentation/slides/mobile-app-features-slide"
import MonitoringObservabilitySlide from "@/components/presentation/slides/monitoring-observability-slide"
import ChallengesResolvedSlide from "@/components/presentation/slides/challenges-resolved-slide"
import ProjectResultsSlide from "@/components/presentation/slides/project-results-slide"
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
      <ProjectContextSlide key="intro-content" />, // 3
      <WhatIsDevOpsSlide key="devops-definition" />, // 4
      <DevOpsGlobalImpactSlide key="devops-impact" />, // 5
      <CompanyPresentationTitleSlide key="company-presentation-title" />, // 6
      <CompanyOverviewSlide key="company-context" />, // 7
      <CurrentArchitectureProblemsSlide key="problem" />, // 8
      <ProjectObjectivesSlide key="objectives" />, // 9
      <ProjectScopeProgressSlide key="scope-progress" />, // 10
      <DevelopmentMethodologySlide key="methodology" />, // 11
      <MicroservicesArchitectureSlide key="architecture" />, // 12
      <TechStackOverviewSlide key="tech-stack" />, // 13
      <Sprint1Slide key="sprint1" />, // 14
      <Sprint2Slide key="sprint2" />, // 15
      <Sprint34Slide key="sprint3-4" />, // 16
      <Sprint5Slide key="sprint5" />, // 17
      <Sprint6Slide key="sprint6" />, // 18
      <SecurityImplementationSlide key="security" />, // 19
      <PerformanceBenchmarksSlide key="perf-metrics" />, // 20
      <MobileAppFeaturesSlide key="mobile-app" />, // 21
      <MonitoringObservabilitySlide key="monitoring" />, // 22
      <ChallengesResolvedSlide key="challenges-solutions" />, // 23
      <ProjectResultsSlide key="results-achievements" />, // 24
      <PlaceholderSlide
        key="roadmap" 
        title="Feuille de Route Future"
        content="Service mesh, chaos engineering, stratégie multi-cloud."
      />, // 25
      <PlaceholderSlide
        key="demo"
        title="Démonstration Live"
        content="Checklist de préparation, fonctionnalités clés."
      />, // 26
      <ConclusionSlide key="conclusion" />, // 27
      <PlaceholderSlide
        key="thanks"
        title="Merci!"
        content="Questions & Discussion"
      />, // 28
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
