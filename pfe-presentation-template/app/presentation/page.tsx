"use client"

import { useState, useMemo } from "react"
import PresentationLayout from "@/components/presentation/presentation-layout"
import HeroSlide from "@/components/presentation/slides/hero-slide"
import NavigationSlide from "@/components/presentation/slides/navigation-slide"
import ProblemStatementSlide from "@/components/presentation/slides/problem-statement-slide"
import CompanyContextSlide from "@/components/presentation/slides/company-context-slide"
import ObjectivesScopeSlide from "@/components/presentation/slides/objectives-scope-slide"
import ScopeProgressSlide from "@/components/presentation/slides/scope-progress-slide"
import MethodologySlide from "@/components/presentation/slides/methodology-slide"
import ArchitectureSlide from "@/components/presentation/slides/architecture-slide"
import TechnologyStackSlide from "@/components/presentation/slides/technology-stack-slide"
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
      <CompanyContextSlide key="company-context" />, // 2
      <ProblemStatementSlide key="problem" />, // 3
      <ObjectivesScopeSlide key="objectives" />, // 4
      <ScopeProgressSlide key="scope-progress" />, // 5
      <MethodologySlide key="methodology" />, // 6
      <ArchitectureSlide key="architecture" />, // 7
      <TechnologyStackSlide key="tech-stack" />, // 8
      <PlaceholderSlide
        key="sprint1"
        title="Sprint 1: Conception (Diapo 10)"
        content="Décisions clés, patterns d'architecture, design thinking."
      />, // 9
      <PlaceholderSlide
        key="sprint2"
        title="Sprint 2: CI/CD (Diapo 11)"
        content="Workflow GitOps, intégration Argo CD, étapes du pipeline."
      />, // 9
      <PlaceholderSlide
        key="sprint3-4"
        title="Sprint 3-4: Développement (Diapo 11)"
        content="Services Alertes & Notifications, documentation API."
      />, // 10
      <PlaceholderSlide
        key="sprint5"
        title="Sprint 5: Performance (Diapo 12)"
        content="Stack PLG, métriques Prometheus, logs Loki, dashboards Grafana."
      />, // 11
      <PlaceholderSlide
        key="sprint6"
        title="Sprint 6: Validation (Diapo 13)"
        content="Couverture des tests, résultats des tests de performance et sécurité."
      />, // 12
      <PlaceholderSlide
        key="security"
        title="Implémentation de la Sécurité (Diapo 14)"
        content="Résultats scans Trivy, badge zéro vulnérabilités."
      />, // 13
      <PlaceholderSlide
        key="perf-metrics"
        title="Métriques de Performance (Diapo 15)"
        content="Utilisateurs concurrents, latence P95, disponibilité."
      />, // 14
      <PlaceholderSlide
        key="mobile-app"
        title="Application Mobile (Diapo 16)"
        content="Captures React Native, pipeline Expo EAS."
      />, // 15
      <PlaceholderSlide
        key="monitoring"
        title="Tableau de Bord de Monitoring (Diapo 17)"
        content="Captures Grafana live, configuration des alertes."
      />, // 16
      <PlaceholderSlide
        key="achievements"
        title="Réalisations Clés (Diapo 18)"
        content="Améliorations avant/après, ROI."
      />, // 17
      <PlaceholderSlide
        key="lessons"
        title="Leçons Apprises (Diapo 19)"
        content="Perspectives techniques, apprentissages organisationnels."
      />, // 18
      <PlaceholderSlide
        key="roadmap"
        title="Feuille de Route Future (Diapo 20)"
        content="Service mesh, chaos engineering, stratégie multi-cloud."
      />, // 19
      <PlaceholderSlide
        key="demo"
        title="Démonstration Live (Diapo 21)"
        content="Checklist de préparation, fonctionnalités clés."
      />, // 20
      <PlaceholderSlide
        key="qa"
        title="Session Q&A (Diapo 22)"
        content="Catégories de questions, informations de contact."
      />, // 21
      <PlaceholderSlide
        key="thanks"
        title="Remerciements (Diapo 23)"
        content="Remerciements, contacts, profils LinkedIn/GitHub."
      />, // 22
    ],
    [],
  )
  // Note: The slideTitles array should correspond to the actual titles you want in the navigation.
  // For brevity, I'm using generic titles for placeholders.
  const slideTitles = useMemo(
    () => [
      "Introduction (Héros)",
      "Plan de la Présentation",
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
      "Monitoring",
      "Réalisations Clés",
      "Leçons Apprises",
      "Feuille de Route",
      "Démo Live",
      "Q&A",
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
