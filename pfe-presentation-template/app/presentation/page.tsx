"use client"

import { useState, useMemo } from "react"
import PresentationLayout from "@/components/presentation/presentation-layout"
import HeroSlide from "@/components/presentation/slides/core/hero-slide"
import NavigationSlide from "@/components/presentation/slides/core/navigation-slide"
import IntroductionTitleSlide from "@/components/presentation/slides/introduction/introduction-title-slide"
import ProjectContextSlide from "@/components/presentation/slides/introduction/project-context-slide"
import WhatIsDevOpsSlide from "@/components/presentation/slides/introduction/what-is-devops-slide"
import DevOpsGlobalImpactSlide from "@/components/presentation/slides/introduction/devops-global-impact-slide"
import CompanyPresentationTitleSlide from "@/components/presentation/slides/company-context/company-presentation-title-slide"
import CurrentArchitectureProblemsSlide from "@/components/presentation/slides/problem-analysis/current-architecture-problems-slide"
import ProposedSolutionSlide from "@/components/presentation/slides/problem-analysis/proposed-solution-slide"
import TargetArchitectureSlide from "@/components/presentation/slides/problem-analysis/target-architecture-slide"
import CompanyOverviewSlide from "@/components/presentation/slides/company-context/company-overview-slide"
import ProjectObjectivesSlide from "@/components/presentation/slides/project-management/project-objectives-slide"
import ProjectScopeProgressSlide from "@/components/presentation/slides/project-management/project-scope-progress-slide"
import DevelopmentMethodologySlide from "@/components/presentation/slides/project-management/development-methodology-slide"
import MicroservicesArchitectureSlide from "@/components/presentation/slides/technical-implementation/microservices-architecture-slide"
import TechStackOverviewSlide from "@/components/presentation/slides/technical-implementation/tech-stack-overview-slide"
import Sprint1Slide from "@/components/presentation/slides/development-sprints/sprint1-slide"
import Sprint2Slide from "@/components/presentation/slides/development-sprints/sprint2-slide"
import Sprint34Slide from "@/components/presentation/slides/development-sprints/sprint34-slide"
import Sprint5Slide from "@/components/presentation/slides/development-sprints/sprint5-slide"
import Sprint6Slide from "@/components/presentation/slides/development-sprints/sprint6-slide"
import SecurityImplementationSlide from "@/components/presentation/slides/system-features/security-implementation-slide"
import PerformanceBenchmarksSlide from "@/components/presentation/slides/system-features/performance-benchmarks-slide"
import MobileAppFeaturesSlide from "@/components/presentation/slides/system-features/mobile-app-features-slide"
import MonitoringObservabilitySlide from "@/components/presentation/slides/system-features/monitoring-observability-slide"
import ChallengesResolvedSlide from "@/components/presentation/slides/results-conclusion/challenges-resolved-slide"
import ProjectResultsSlide from "@/components/presentation/slides/results-conclusion/project-results-slide"
import ConclusionSlide from "@/components/presentation/slides/results-conclusion/conclusion-slide"
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
      <ProposedSolutionSlide key="proposed-solution" />, // 9
      <TargetArchitectureSlide key="target-architecture" />, // 10
      <ProjectObjectivesSlide key="objectives" />, // 11
      <ProjectScopeProgressSlide key="scope-progress" />, // 12
      <DevelopmentMethodologySlide key="methodology" />, // 13
      <MicroservicesArchitectureSlide key="architecture" />, // 14
      <TechStackOverviewSlide key="tech-stack" />, // 15
      <Sprint1Slide key="sprint1" />, // 16
      <Sprint2Slide key="sprint2" />, // 17
      <Sprint34Slide key="sprint3-4" />, // 18
      <Sprint5Slide key="sprint5" />, // 19
      <Sprint6Slide key="sprint6" />, // 20
      <SecurityImplementationSlide key="security" />, // 21
      <PerformanceBenchmarksSlide key="perf-metrics" />, // 22
      <MobileAppFeaturesSlide key="mobile-app" />, // 23
      <MonitoringObservabilitySlide key="monitoring" />, // 24
      <ChallengesResolvedSlide key="challenges-solutions" />, // 25
      <ProjectResultsSlide key="results-achievements" />, // 26
      <PlaceholderSlide
        key="roadmap" 
        title="Feuille de Route Future"
        content="Service mesh, chaos engineering, stratégie multi-cloud."
      />, // 27
      <PlaceholderSlide
        key="demo"
        title="Démonstration Live"
        content="Checklist de préparation, fonctionnalités clés."
      />, // 28
      <ConclusionSlide key="conclusion" />, // 29
      <PlaceholderSlide
        key="thanks"
        title="Merci!"
        content="Questions & Discussion"
      />, // 30
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
      "Contexte du Projet",
      "Qu'est-ce que le DevOps ?",
      "Impact du DevOps",
      "Présentation de l'entreprise",
      "Maison du Web",
      "Défis de l'Architecture Actuelle",
      "Solution Microservices Proposée",
      "Architecture Cible",
      "Objectifs du Projet",
      "Périmètre & Progression", 
      "Méthodologie Agile",
      "Architecture Microservices",
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
