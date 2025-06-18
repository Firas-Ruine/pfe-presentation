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
import ClassDiagramAlertsSlide from "@/components/presentation/slides/project-management/class-diagram-alerts-slide"
import HmvcDiagramAlertsSlide from "@/components/presentation/slides/project-management/hmvc-diagram-alerts-slide"
import DevelopmentMethodologySlide from "@/components/presentation/slides/project-management/development-methodology-slide"
import ConceptionImplementationTitleSlide from "@/components/presentation/slides/technical-implementation/conception-implementation-title-slide"
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
      <ConceptionImplementationTitleSlide key="conception-implementation-title" />, // 15
      <ClassDiagramAlertsSlide key="class-diagram-alerts" />, // 16
      <HmvcDiagramAlertsSlide key="hmvc-diagram-alerts" />, // 17
      <DevelopmentMethodologySlide key="methodology" />, // 18
      <MicroservicesArchitectureSlide key="architecture" />, // 19
      <TechStackOverviewSlide key="tech-stack" />, // 20
      <Sprint1Slide key="sprint1" />, // 21
      <Sprint2Slide key="sprint2" />, // 22
      <Sprint34Slide key="sprint3-4" />, // 23
      <Sprint5Slide key="sprint5" />, // 24
      <Sprint6Slide key="sprint6" />, // 25
      <SecurityImplementationSlide key="security" />, // 26
      <PerformanceBenchmarksSlide key="perf-metrics" />, // 27
      <MobileAppFeaturesSlide key="mobile-app" />, // 28
      <MonitoringObservabilitySlide key="monitoring" />, // 29
      <ChallengesResolvedSlide key="challenges-solutions" />, // 30
      <ProjectResultsSlide key="results-achievements" />, // 31
      <PlaceholderSlide
        key="roadmap" 
        title="Feuille de Route Future"
        content="Service mesh, chaos engineering, stratégie multi-cloud."
      />, // 32
      <PlaceholderSlide
        key="demo"
        title="Démonstration Live"
        content="Checklist de préparation, fonctionnalités clés."
      />, // 33
      <ConclusionSlide key="conclusion" />, // 34
      <PlaceholderSlide
        key="thanks"
        title="Merci!"
        content="Questions & Discussion"
      />, // 35
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
      "Conception & Implémentation", // 15
      "Diagramme de Classe - Alertes", // 16
      "Architecture HMVC - Alertes", // 17
      "Méthodologie Agile", // 18
      "Architecture Microservices", // 19
      "Stack Technologique", // 20
      "Sprint 1: Conception", // 21
      "Sprint 2: CI/CD", // 22
      "Sprints 3-4: Développement", // 23
      "Sprint 5: Performance", // 24
      "Sprint 6: Validation", // 25
      "Sécurité", // 26
      "Métriques Performance", // 27
      "Application Mobile", // 28
      "Monitoring & Observabilité", // 29
      "Défis & Solutions", // 30
      "Résultats & Réalisations", // 31
      "Feuille de Route Future", // 32
      "Démonstration Live", // 33
      "Conclusion & Perspectives", // 34
      "Remerciements", // 35
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
