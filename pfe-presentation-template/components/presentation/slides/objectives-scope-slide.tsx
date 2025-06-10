"use client"
import SlideWrapper from "../slide-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Target,
  CheckCircle2,
  Zap,
  Shield,
  BarChart3,
  Users,
  Globe,
  Rocket,
  Calendar,
  Clock,
  TrendingUp,
  Database,
  Cloud,
  Smartphone,
  GitBranch,
  Monitor,
  AlertCircle,
  Package,
  FileText,
  Presentation
} from "lucide-react"

const primaryObjectives = [
  {
    title: "Transformation DevOps",
    description: "Migrer vers une approche DevOps avec CI/CD automatisé",
    icon: Zap,
    benefits: ["Déploiements automatisés", "Réduction des erreurs", "Time-to-market accéléré"]
  },
  {
    title: "Architecture Microservices",
    description: "Décomposer le monolithe en services indépendants",
    icon: Package,
    benefits: ["Scalabilité par service", "Équipes autonomes", "Résilience améliorée"]
  },
  {
    title: "Déploiement Cloud",
    description: "Migration vers une infrastructure cloud native",
    icon: Cloud,
    benefits: ["Élasticité", "Haute disponibilité", "Coûts optimisés"]
  },
  {
    title: "Application Mobile",
    description: "Développer une application mobile React Native",
    icon: Smartphone,
    benefits: ["Accessibilité mobile", "Expérience utilisateur", "Portée élargie"]
  }
]

const scopeDefinition = [
  {
    area: "Infrastructure & DevOps",
    description: "Pipeline CI/CD, conteneurisation, orchestration",
    progress: 85,
    tasks: ["Docker", "Kubernetes", "ArgoCD", "Prometheus"]
  },
  {
    area: "Architecture & Développement",
    description: "Microservices, APIs, base de données",
    progress: 70,
    tasks: ["API Gateway", "Services", "BDD", "Auth"]
  },
  {
    area: "Monitoring & Observabilité",
    description: "Logs, métriques, alertes, dashboards",
    progress: 60,
    tasks: ["Grafana", "Loki", "Alerting", "SLI/SLO"]
  },
  {
    area: "Sécurité",
    description: "Scans vulnérabilités, authentification, autorisation",
    progress: 45,
    tasks: ["Trivy", "RBAC", "TLS", "Secrets"]
  }
]

const successCriteria = [
  {
    category: "Performance",
    icon: BarChart3,
    criteria: [
      { metric: "Utilisateurs concurrents", target: "3000+", current: "500" },
      { metric: "Temps de réponse P95", target: "< 500ms", current: "2.5s" },
      { metric: "Disponibilité", target: "99.9%", current: "95%" }
    ]
  },
  {
    category: "Opérationnel",
    icon: Rocket,
    criteria: [
      { metric: "Temps de déploiement", target: "< 15min", current: "4h" },
      { metric: "Fréquence de release", target: "Daily", current: "Monthly" },
      { metric: "MTTR (Mean Time to Recovery)", target: "< 30min", current: "2h" }
    ]
  },
  {
    category: "Qualité",
    icon: Shield,
    criteria: [
      { metric: "Couverture de tests", target: "> 95%", current: "45%" },
      { metric: "Vulnérabilités critiques", target: "0", current: "12" },
      { metric: "Code quality score", target: "> 8/10", current: "5.2/10" }
    ]
  }
]

const deliverablesTimeline = [
  {
    phase: "Sprint 1-2",
    period: "Semaines 1-4",
    deliverables: [
      { item: "Architecture microservices", status: "completed" },
      { item: "Setup infrastructure DevOps", status: "completed" },
      { item: "Pipeline CI/CD initial", status: "completed" }
    ]
  },
  {
    phase: "Sprint 3-4",
    period: "Semaines 5-8",
    deliverables: [
      { item: "Services Alertes & Notifications", status: "completed" },
      { item: "API Gateway configuration", status: "completed" },
      { item: "Tests automatisés", status: "in-progress" }
    ]
  },
  {
    phase: "Sprint 5-6",
    period: "Semaines 9-12",
    deliverables: [
      { item: "Monitoring & Observabilité", status: "in-progress" },
      { item: "Application mobile", status: "in-progress" },
      { item: "Optimisations performance", status: "planned" }
    ]
  },
  {
    phase: "Finalisation",
    period: "Semaines 13-16",
    deliverables: [
      { item: "Tests de charge", status: "planned" },
      { item: "Documentation complète", status: "planned" },
      { item: "Formation équipes", status: "planned" }
    ]
  }
]

export default function ObjectivesScopeSlide() {
  return (
    <SlideWrapper>
      <div className="space-y-8">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Objectifs du Projet
          </h2>
          <p className="text-lg text-muted-foreground">
            Transformation DevOps et modernisation de l'architecture
          </p>
        </div>

        {/* Objectifs Primaires */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Target className="mr-3 h-6 w-6 text-primary" />
            Objectifs Primaires
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {primaryObjectives.map((objective, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <objective.icon className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle className="text-lg">{objective.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{objective.description}</p>
                      </div>
                    </div>
                
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Bénéfices attendus:</p>
                    {objective.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision du Projet */}
        <Card className="shadow-xl bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Presentation className="mr-3 h-6 w-6 text-primary" />
              Vision du Projet
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">Modernisation</div>
                <div className="text-sm text-muted-foreground">Architecture moderne et scalable</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">Automatisation</div>
                <div className="text-sm text-muted-foreground">CI/CD et DevOps</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">Performance</div>
                <div className="text-sm text-muted-foreground">Haute disponibilité et résilience</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SlideWrapper>
  )
}
