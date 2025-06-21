"use client"

import { useState, useMemo } from "react"
import PresentationLayout from "@/components/presentation/presentation-layout"
import HeroSlide from "@/components/presentation/slides/core/hero-slide"
import NavigationSlide from "@/components/presentation/slides/core/navigation-slide"
import IntroductionTitleSlide from "@/components/presentation/slides/introduction/introduction-title-slide"
import ProjectContextSlide from "@/components/presentation/slides/introduction/project-context-slide"

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
import TestCoverageReportSlide from "@/components/presentation/slides/project-management/test-coverage-report-slide"
import ClassDiagramNotificationsSlide from "@/components/presentation/slides/project-management/class-diagram-notifications-slide"
import ContractArchitectureSlide from "@/components/presentation/slides/project-management/contract-architecture-slide"
import RabbitMQmsInteractionsSlide from "@/components/presentation/slides/project-management/rabbitmq-ms-interactions-slide"
import ConceptionImplementationTitleSlide from "@/components/presentation/slides/technical-implementation/conception-implementation-title-slide"
import CicdTitleSlide from "@/components/presentation/slides/technical-implementation/cicd-title-slide"
import WhatIsCicdSlide from "@/components/presentation/slides/technical-implementation/what-is-cicd-slide"
import GlobalCicdArchitectureSlide from "@/components/presentation/slides/technical-implementation/global-cicd-architecture-slide"
import CicdMetricsImprovementsSlide from "@/components/presentation/slides/technical-implementation/cicd-metrics-improvements-slide"
import MonitoringTitleSlide from "@/components/presentation/slides/technical-implementation/monitoring-title-slide"
import WhatIsMonitoringSlide from "@/components/presentation/slides/technical-implementation/what-is-monitoring-slide"
import MonitoringComponentsSlide from "@/components/presentation/slides/technical-implementation/monitoring-components-slide"
import GlobalMonitoringArchitectureSlide from "@/components/presentation/slides/technical-implementation/global-monitoring-architecture-slide"
import GrafanaDashboardsSlide from "@/components/presentation/slides/technical-implementation/grafana-dashboards-slide"
import PerformanceTestTitleSlide from "@/components/presentation/slides/technical-implementation/performance-test-title-slide"
import WhatIsPerformanceTestingSlide from "@/components/presentation/slides/technical-implementation/what-is-performance-testing-slide"
import WhatIsGrafanaK6Slide from "@/components/presentation/slides/technical-implementation/what-is-grafana-k6-slide"
import DeploymentTitleSlide from "@/components/presentation/slides/technical-implementation/deployment-title-slide"
import AutomatedDeploymentWorkflowSlide from "@/components/presentation/slides/technical-implementation/automated-deployment-workflow-slide"
import AnomalyDetectionSlide from "@/components/presentation/slides/technical-implementation/anomaly-detection-slide"
import RealisationTitleSlide from "@/components/presentation/slides/results-conclusion/realisation-title-slide"
import EnvironmentToolsSlide from "@/components/presentation/slides/results-conclusion/environment-tools-slide"
import VideoExampleSlide from "@/components/presentation/slides/results-conclusion/video-example-slide"
import ConclusionPerspectivesTitleSlide from "@/components/presentation/slides/results-conclusion/conclusion-perspectives-title-slide"
import ConclusionContentSlide from "@/components/presentation/slides/results-conclusion/conclusion-content-slide"
import ThankYouSlide from "@/components/presentation/slides/results-conclusion/thank-you-slide"
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
      <CompanyPresentationTitleSlide key="company-presentation-title" />, // 4
      <CompanyOverviewSlide key="company-context" />, // 5
      <CurrentArchitectureProblemsSlide key="problem" />, // 6
      <ProposedSolutionSlide key="proposed-solution" />, // 7
      <ArchitectureTitleSlide key="architecture-title" />, // 8
      <TargetArchitectureSlide key="target-architecture" />, // 9
      <MethodologyTitleSlide key="methodology-title" />, // 10
      <ScrumMethodologySlide key="scrum-methodology" />, // 11
      <ScrumCyclePhotoSlide key="scrum-cycle-photo" />, // 12
      <ConceptionImplementationTitleSlide key="conception-implementation-title" />, // 13
      <ClassDiagramAlertsSlide key="class-diagram-alerts" />, // 14
      <HmvcDiagramAlertsSlide key="hmvc-diagram-alerts" />, // 15
      <TestCoverageReportSlide key="test-coverage-report" />, // 16
      <ClassDiagramNotificationsSlide key="class-diagram-notifications" />, // 17
      <ContractArchitectureSlide key="contract-architecture" />, // 18
      <RabbitMQmsInteractionsSlide key="rabbitmq-ms-interactions" />, // 19
      <CicdTitleSlide key="cicd-title" />, // 20
      <WhatIsCicdSlide key="what-is-cicd" />, // 21
      <GlobalCicdArchitectureSlide key="global-cicd-architecture" />, // 22
      <MonitoringTitleSlide key="monitoring-title" />, // 23
      <WhatIsMonitoringSlide key="what-is-monitoring" />, // 24
      <MonitoringComponentsSlide key="monitoring-components" />, // 25
      <GlobalMonitoringArchitectureSlide key="global-monitoring-architecture" />, // 26
      <GrafanaDashboardsSlide key="grafana-dashboards" />, // 27
      <PerformanceTestTitleSlide key="performance-test-title" />, // 28
      <WhatIsPerformanceTestingSlide key="what-is-performance-testing" />, // 29
      <WhatIsGrafanaK6Slide key="what-is-grafana-k6" />, // 30
      <DeploymentTitleSlide key="deployment-title" />, // 31
      <AutomatedDeploymentWorkflowSlide key="automated-deployment-workflow" />, // 32
      <AnomalyDetectionSlide key="anomaly-detection" />, // 33
      <CicdMetricsImprovementsSlide key="cicd-metrics-improvements" />, // 34
      <RealisationTitleSlide key="realisation-title" />, // 35
      <EnvironmentToolsSlide key="environment-tools" />, // 36
      <VideoExampleSlide key="video-example" />, // 37
      <ConclusionPerspectivesTitleSlide key="conclusion-perspectives-title" />, // 38
      <ConclusionContentSlide key="conclusion-content" />, // 39
      <ThankYouSlide key="thank-you" />, // 40
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
      "Présentation de l'entreprise", // 4
      "Maison du Web", // 5
      "Défis de l'Architecture Actuelle", // 6
      "Solution Microservices Proposée", // 7
      "Architecture Cible", // 8
      "Architecture Cible - Diagramme", // 9
      "Méthodologie", // 10
      "Scrum - Méthodologie Agile", // 11
      "Cycle Scrum", // 12
      "Conception & Implémentation", // 13
      "Diagramme de Classe - Alertes", // 14
      "Architecture HMVC - Alertes", // 15
      "Rapport de Couverture de Tests", // 16
      "Diagramme de Classe - Notifications", // 17
      "Architecture Orientée Contrat", // 18
      "Interactions RabbitMQ Microservices", // 19
      "CI/CD", // 20
      "Qu'est-ce que le CI/CD ?", // 21
      "Architecture Globale CI/CD", // 22
      "Monitoring", // 23
      "Qu'est-ce que le Monitoring ?", // 24
      "Piliers de l'Observabilité", // 25
      "Architecture Globale du Monitoring", // 26
      "Dashboards Grafana", // 27
      "Tests de Performance", // 28
      "Qu'est-ce que les Tests de Performance ?", // 29
      "Qu'est-ce que Grafana K6 ?", // 30
      "Déploiement", // 31
      "Workflow de Déploiement Automatisé", // 32
      "Mécanismes de Détection d'Anomalies", // 33
      "Métriques d'Amélioration CI/CD", // 34
      "Réalisation", // 35
      "Environnement et Outils Utilisés", // 36
      "Démonstration Vidéo", // 37
      "Conclusion et perspectives", // 38
      "Conclusion Générale", // 39
      "Merci pour votre attention", // 40
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
