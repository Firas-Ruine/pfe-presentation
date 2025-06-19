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
import TestCoverageReportSlide from "@/components/presentation/slides/project-management/test-coverage-report-slide"
import ClassDiagramNotificationsSlide from "@/components/presentation/slides/project-management/class-diagram-notifications-slide"
import ContractArchitectureSlide from "@/components/presentation/slides/project-management/contract-architecture-slide"
import RabbitMQmsInteractionsSlide from "@/components/presentation/slides/project-management/rabbitmq-ms-interactions-slide"
import ConceptionImplementationTitleSlide from "@/components/presentation/slides/technical-implementation/conception-implementation-title-slide"
import CicdTitleSlide from "@/components/presentation/slides/technical-implementation/cicd-title-slide"
import WhatIsCicdSlide from "@/components/presentation/slides/technical-implementation/what-is-cicd-slide"
import BranchingStrategySlide from "@/components/presentation/slides/technical-implementation/branching-strategy-slide"
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
      <TestCoverageReportSlide key="test-coverage-report" />, // 18
      <ClassDiagramNotificationsSlide key="class-diagram-notifications" />, // 19
      <ContractArchitectureSlide key="contract-architecture" />, // 20
      <RabbitMQmsInteractionsSlide key="rabbitmq-ms-interactions" />, // 21
      <CicdTitleSlide key="cicd-title" />, // 22
      <WhatIsCicdSlide key="what-is-cicd" />, // 23
      <BranchingStrategySlide key="branching-strategy" />, // 24
      <GlobalCicdArchitectureSlide key="global-cicd-architecture" />, // 25
      <MonitoringTitleSlide key="monitoring-title" />, // 26
      <WhatIsMonitoringSlide key="what-is-monitoring" />, // 27
      <MonitoringComponentsSlide key="monitoring-components" />, // 28
      <GlobalMonitoringArchitectureSlide key="global-monitoring-architecture" />, // 29
      <GrafanaDashboardsSlide key="grafana-dashboards" />, // 30
      <PerformanceTestTitleSlide key="performance-test-title" />, // 31
      <WhatIsPerformanceTestingSlide key="what-is-performance-testing" />, // 32
      <WhatIsGrafanaK6Slide key="what-is-grafana-k6" />, // 33
      <DeploymentTitleSlide key="deployment-title" />, // 34
      <AutomatedDeploymentWorkflowSlide key="automated-deployment-workflow" />, // 35
      <AnomalyDetectionSlide key="anomaly-detection" />, // 36
      <CicdMetricsImprovementsSlide key="cicd-metrics-improvements" />, // 37
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
      "Rapport de Couverture de Tests", // 18
      "Diagramme de Classe - Notifications", // 19
      "Architecture Orientée Contrat", // 20
      "Interactions RabbitMQ Microservices", // 21
      "CI/CD", // 22
      "Qu'est-ce que le CI/CD ?", // 23
      "Stratégie de Branchement", // 24
      "Architecture Globale CI/CD", // 25
      "Monitoring", // 26
      "Qu'est-ce que le Monitoring ?", // 27
      "Piliers de l'Observabilité", // 28
      "Architecture Globale du Monitoring", // 29
      "Dashboards Grafana", // 30
      "Tests de Performance", // 31
      "Qu'est-ce que les Tests de Performance ?", // 32
      "Qu'est-ce que Grafana K6 ?", // 33
      "Déploiement", // 34
      "Workflow de Déploiement Automatisé", // 35
      "Mécanismes de Détection d'Anomalies", // 36
      "Métriques d'Amélioration CI/CD", // 37
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
