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
import ArchitectureTitleSlide from "@/components/presentation/slides/problem-analysis/architecture-title-slide"
import TargetArchitectureSlide from "@/components/presentation/slides/problem-analysis/target-architecture-slide"
import MethodologyTitleSlide from "@/components/presentation/slides/problem-analysis/methodology-title-slide"
import ScrumMethodologySlide from "@/components/presentation/slides/problem-analysis/scrum-methodology-slide"
import ScrumCyclePhotoSlide from "@/components/presentation/slides/problem-analysis/scrum-cycle-photo-slide"
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
      <ArchitectureTitleSlide key="architecture-title" />, // 10
      <TargetArchitectureSlide key="target-architecture" />, // 11
      <MethodologyTitleSlide key="methodology-title" />, // 12
      <ScrumMethodologySlide key="scrum-methodology" />, // 13
      <ScrumCyclePhotoSlide key="scrum-cycle-photo" />, // 14
      <ProjectObjectivesSlide key="objectives" />, // 15
      <ProjectScopeProgressSlide key="scope-progress" />, // 16
      <DevelopmentMethodologySlide key="methodology" />, // 17
      <MicroservicesArchitectureSlide key="architecture" />, // 18
      <TechStackOverviewSlide key="tech-stack" />, // 19
      <Sprint1Slide key="sprint1" />, // 20
      <Sprint2Slide key="sprint2" />, // 21
      <Sprint34Slide key="sprint3-4" />, // 22
      <Sprint5Slide key="sprint5" />, // 23
      <Sprint6Slide key="sprint6" />, // 24
      <SecurityImplementationSlide key="security" />, // 25
      <PerformanceBenchmarksSlide key="perf-metrics" />, // 26
      <MobileAppFeaturesSlide key="mobile-app" />, // 27
      <MonitoringObservabilitySlide key="monitoring" />, // 28
      <ChallengesResolvedSlide key="challenges-solutions" />, // 29
      <ProjectResultsSlide key="results-achievements" />, // 30
      <PlaceholderSlide
        key="roadmap" 
        title="Feuille de Route Future"
        content="Service mesh, chaos engineering, stratégie multi-cloud."
      />, // 31
      <PlaceholderSlide
        key="demo"
        title="Démonstration Live"
        content="Checklist de préparation, fonctionnalités clés."
      />, // 32
      <ConclusionSlide key="conclusion" />, // 33
      <PlaceholderSlide
        key="thanks"
        title="Merci!"
        content="Questions & Discussion"
      />, // 34
    ],
    [],
  )
  // Note: The slideTitles array should correspond to the actual titles you want in the navigation.
  // For brevity, I'm using generic titles for placeholders.
  const slideTitles = useMemo(
    () => [
      "Accueil", // 0
      "Plan de la Présentation", // 1
      "Introduction", // 2
      "Contexte du Projet", // 3
      "Qu'est-ce que le DevOps ?", // 4
      "Impact du DevOps", // 5
      "Présentation de l'entreprise", // 6
      "Maison du Web", // 7
      "Défis de l'Architecture Actuelle", // 8
      "Solution Microservices Proposée", // 9
      "Architecture Cible", // 10
      "Architecture Cible - Diagramme", // 11
      "Méthodologie", // 12
      "Scrum - Méthodologie Agile", // 13
      "Cycle Scrum", // 14
      "Objectifs du Projet", // 15
      "Périmètre & Progression", // 16
      "Méthodologie Agile", // 17
      "Architecture Microservices", // 18
      "Stack Technologique", // 19
      "Sprint 1: Conception", // 20
      "Sprint 2: CI/CD", // 21
      "Sprints 3-4: Développement", // 22
      "Sprint 5: Performance", // 23
      "Sprint 6: Validation", // 24
      "Sécurité", // 25
      "Métriques Performance", // 26
      "Application Mobile", // 27
      "Monitoring & Observabilité", // 28
      "Défis & Solutions", // 29
      "Résultats & Réalisations", // 30
      "Feuille de Route Future", // 31
      "Démonstration Live", // 32
      "Conclusion & Perspectives", // 33
      "Remerciements", // 34
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
