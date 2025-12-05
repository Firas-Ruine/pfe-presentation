"use client"

import { useState, useMemo } from "react"
import PresentationLayout from "@/components/presentation/presentation-layout"

// Core slides
import HeroSlide from "@/components/presentation/slides/core/hero-slide"
import NavigationSlide from "@/components/presentation/slides/core/navigation-slide"

// Introduction slides
import IntroductionTitleSlide from "@/components/presentation/slides/introduction/introduction-title-slide"
import ProjectContextSlide from "@/components/presentation/slides/introduction/project-context-slide"

// Company context slides
import CompanyPresentationTitleSlide from "@/components/presentation/slides/company-context/company-presentation-title-slide"
import CompanyOverviewSlide from "@/components/presentation/slides/company-context/company-overview-slide"

// Problem analysis slides
import CurrentArchitectureProblemsSlide from "@/components/presentation/slides/problem-analysis/current-architecture-problems-slide"
import ProposedSolutionSlide from "@/components/presentation/slides/problem-analysis/proposed-solution-slide"
import ActorsRequirementsSlide from "@/components/presentation/slides/problem-analysis/actors-requirements-slide"
import TechnologiesUsedSlide from "@/components/presentation/slides/problem-analysis/technologies-used-slide"

// Architecture slides
import ArchitectureTitleSlide from "@/components/presentation/slides/problem-analysis/architecture-title-slide"
import InteractivePipelineSlide from "@/components/presentation/slides/problem-analysis/interactive-pipeline-slide"
import LangGraphWorkflowSlide from "@/components/presentation/slides/problem-analysis/langgraph-workflow-slide"
import SmartRouterSlide from "@/components/presentation/slides/problem-analysis/smart-router-slide"
import LogicalArchitectureSlide from "@/components/presentation/slides/problem-analysis/logical-architecture-slide"
import PhysicalArchitectureSlide from "@/components/presentation/slides/problem-analysis/physical-architecture-slide"
import KubernetesArchitectureSlide from "@/components/presentation/slides/problem-analysis/kubernetes-architecture-slide"
import MetricsDiagnosticsSlide from "@/components/presentation/slides/problem-analysis/metrics-diagnostics-slide"
import IncidentAgentSlide from "@/components/presentation/slides/problem-analysis/incident-agent-slide"
import RunbookAgentSlide from "@/components/presentation/slides/problem-analysis/runbook-agent-slide"
import PolicyEngineSlide from "@/components/presentation/slides/problem-analysis/policy-engine-slide"
import ExecutionPipelineSlide from "@/components/presentation/slides/problem-analysis/execution-pipeline-slide"
import McpConnectorsSlide from "@/components/presentation/slides/problem-analysis/mcp-connectors-slide"

// Project management slides
import ProjectPlanningTitleSlide from "@/components/presentation/slides/project-management/project-planning-title-slide"
import GanttChartSlide from "@/components/presentation/slides/project-management/gantt-chart-slide"

// Results and conclusion slides
import RealisationTitleSlide from "@/components/presentation/slides/results-conclusion/realisation-title-slide"
import EnvironmentToolsSlide from "@/components/presentation/slides/results-conclusion/environment-tools-slide"
import KpiImprovementsSlide from "@/components/presentation/slides/results-conclusion/kpi-improvements-slide"
import TestResultsSlide from "@/components/presentation/slides/results-conclusion/test-results-slide"
import ChallengesSolutionsSlide from "@/components/presentation/slides/results-conclusion/challenges-solutions-slide"
import ConclusionContentSlide from "@/components/presentation/slides/results-conclusion/conclusion-content-slide"
import FutureRoadmapSlide from "@/components/presentation/slides/results-conclusion/future-roadmap-slide"
import ThankYouSlide from "@/components/presentation/slides/results-conclusion/thank-you-slide"

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleStartPresentation = () => {
    setCurrentSlide(1)
  }

  const handleNavigateToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }

  const slides = useMemo(
    () => [
      // 0 - Hero
      <HeroSlide key="hero" onStartPresentation={handleStartPresentation} />,
      // 1 - Navigation
      <NavigationSlide key="nav" onNavigate={handleNavigateToSlide} />,

      // SECTION 1: Introduction (slides 2-5) - includes company presentation
      <IntroductionTitleSlide key="intro-title" />,
      <ProjectContextSlide key="project-context" />,
      <CompanyOverviewSlide key="company-overview" />,

      // SECTION 2: General Context / Problématique (slides 6-7)
      <CompanyPresentationTitleSlide key="company-title" />,
      <CurrentArchitectureProblemsSlide key="problems" />,

      // SECTION 3: Proposed Solution (slides 8)
      <ProposedSolutionSlide key="solution" />,

      // SECTION 4: Specifications (slides 9-10)
      <ActorsRequirementsSlide key="actors-requirements" />,
      <TechnologiesUsedSlide key="technologies" />,

      // SECTION 5: Planning (slides 11-12)
      <ProjectPlanningTitleSlide key="planning-title" />,
      <GanttChartSlide key="gantt-chart" />,

      // SECTION 6: Architecture (slides 13-25)
      <ArchitectureTitleSlide key="arch-title" />,
      <InteractivePipelineSlide key="interactive-pipeline" />,
      <LangGraphWorkflowSlide key="langgraph-workflow" />,
      <SmartRouterSlide key="smart-router" />,
      <LogicalArchitectureSlide key="logical-arch" />,
      <PhysicalArchitectureSlide key="physical-arch" />,
      <KubernetesArchitectureSlide key="k8s-arch" />,
      <MetricsDiagnosticsSlide key="metrics-diagnostics" />,
      <IncidentAgentSlide key="incident-agent" />,
      <RunbookAgentSlide key="runbook-agent" />,
      <PolicyEngineSlide key="policy-engine" />,
      <ExecutionPipelineSlide key="execution-pipeline" />,
      <McpConnectorsSlide key="mcp-connectors" />,

      // SECTION 7: Implementation (slides 26-30)
      <RealisationTitleSlide key="realisation-title" />,
      <EnvironmentToolsSlide key="environment-tools" />,
      <KpiImprovementsSlide key="kpi-improvements" />,
      <TestResultsSlide key="test-results" />,
      <ChallengesSolutionsSlide key="challenges-solutions" />,

      // SECTION 8: Conclusion (slides 31-33)
      <ConclusionContentSlide key="conclusion" />,
      <FutureRoadmapSlide key="future-roadmap" />,
      <ThankYouSlide key="thank-you" />,
    ],
    []
  )

  const slideTitles = useMemo(
    () => [
      "Home", // 0
      "Presentation Outline", // 1
      "Introduction", // 2
      "Project Context", // 3
      "Maison du Web", // 4
      "General Context", // 5
      "System Critique", // 6
      "Proposed Solution - AutoSphere", // 7
      "Actors & Requirements", // 8
      "Technologies Used", // 9
      "Project Planning", // 10
      "Gantt Chart & Milestones", // 11
      "System Architecture", // 12
      "Interactive Pipeline", // 13
      "LangGraph Workflow", // 14
      "Smart Router", // 15
      "Logical Architecture", // 16
      "Physical Architecture", // 17
      "Kubernetes Architecture", // 18 - NEW!
      "Metrics Agent", // 19
      "Incident Agent (RAG)", // 20
      "Runbook Agent (AWX)", // 21
      "Policy Engine", // 22
      "Execution Pipeline", // 23
      "MCP Connectors", // 24
      "Implementation", // 25
      "Development Environment", // 26
      "KPI Improvements", // 27
      "Test Results", // 28
      "Challenges & Solutions", // 29
      "Summary & Perspectives", // 30
      "Future Roadmap", // 31
      "Thank You", // 32
    ],
    []
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
