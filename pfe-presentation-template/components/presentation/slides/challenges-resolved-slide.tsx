"use client"
import SlideWrapper from "../slide-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  Lightbulb,
  Target,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Settings,
  Clock,
  Database
} from "lucide-react"

const challenges = [
  {
    id: 1,
    title: "Migration Legacy vers Microservices",
    description: "Transition d'une architecture monolithique complexe",
    severity: "high",
    category: "Architecture",
    icon: Database,
    solutions: [
      "Décomposition progressive par domaines métier",
      "Pattern Strangler Fig pour migration en douceur",
      "API Gateway pour orchestrer les communications"
    ],
    outcome: "Migration réussie avec 0% de downtime",
    timeline: "6 semaines"
  },
  {
    id: 2,
    title: "Gestion des Données Distribuées",
    description: "Cohérence et synchronisation entre microservices",
    severity: "high",
    category: "Data",
    icon: Shield,
    solutions: [
      "Pattern Saga pour transactions distribuées",
      "Event Sourcing pour traçabilité",
      "CQRS pour séparation lecture/écriture"
    ],
    outcome: "Consistance eventual garantie",
    timeline: "4 semaines"
  },
  {
    id: 3,
    title: "Performance et Latence",
    description: "Optimisation des temps de réponse inter-services",
    severity: "medium",
    category: "Performance",
    icon: Zap,
    solutions: [
      "Cache distribué avec Redis",
      "Connection pooling et réutilisation",
      "Compression des payloads API"
    ],
    outcome: "Réduction de 60% de la latence",
    timeline: "3 semaines"
  },
  {
    id: 4,
    title: "Sécurité Multi-Services",
    description: "Authentification et autorisation distribuée",
    severity: "high",
    category: "Security",
    icon: Users,
    solutions: [
      "JWT avec refresh tokens",
      "OAuth 2.0 et OpenID Connect",
      "Service mesh pour mTLS"
    ],
    outcome: "Sécurité renforcée end-to-end",
    timeline: "5 semaines"
  },
  {
    id: 5,
    title: "Déploiement et Orchestration",
    description: "Coordination des déploiements multi-services",
    severity: "medium",
    category: "DevOps",
    icon: Settings,
    solutions: [
      "GitOps avec ArgoCD",
      "Blue-Green deployment strategy",
      "Health checks et circuit breakers"
    ],
    outcome: "Déploiements automatisés fiables",
    timeline: "4 semaines"
  },
  {
    id: 6,
    title: "Monitoring Distribué",
    description: "Observabilité across multiple services",
    severity: "medium",
    category: "Monitoring",
    icon: TrendingUp,
    solutions: [
      "Distributed tracing avec Jaeger",
      "Centralized logging avec ELK",
      "Métriques custom avec Prometheus"
    ],
    outcome: "Visibilité complète du système",
    timeline: "3 semaines"
  }
]

const impactMetrics = [
  { label: "Réduction Downtime", value: "95%", icon: CheckCircle2, color: "text-green-600" },
  { label: "Amélioration Performance", value: "60%", icon: Zap, color: "text-blue-600" },
  { label: "Time to Market", value: "-40%", icon: Clock, color: "text-purple-600" },
  { label: "Developer Satisfaction", value: "92%", icon: Users, color: "text-orange-600" }
]

const lessonsLearned = [
  "La migration progressive est plus sûre que le Big Bang",
  "L'observabilité doit être intégrée dès le design",
  "Les tests automatisés sont cruciaux pour les microservices",
  "La documentation et la communication sont essentielles",
  "Les patterns de résilience doivent être implémentés early"
]

export default function ChallengesResolvedSlide() {
  return (
    <SlideWrapper className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-slate-900 dark:to-red-900/20">
      <div className="h-full flex flex-col space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Défis & Solutions
          </h1>
          <p className="text-lg text-muted-foreground">
            Problèmes rencontrés et approches de résolution
          </p>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-6 overflow-y-auto">
          {/* Impact Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Target className="mr-3 h-6 w-6 text-primary" />
                Impact des Solutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {impactMetrics.map((metric, index) => {
                  const IconComponent = metric.icon
                  return (
                    <div key={index} className="text-center p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
                      <IconComponent className={`h-8 w-8 mx-auto mb-2 ${metric.color}`} />
                      <div className="text-2xl font-bold text-primary">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Challenges Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {challenges.map((challenge) => {
              const IconComponent = challenge.icon
              return (
                <Card key={challenge.id} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center text-lg">
                        <IconComponent className="mr-3 h-5 w-5 text-primary" />
                        {challenge.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge 
                          variant={challenge.severity === "high" ? "destructive" : "secondary"}
                          className="text-xs"
                        >
                          {challenge.severity}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {challenge.category}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{challenge.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Solutions */}
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center">
                        <Lightbulb className="mr-2 h-4 w-4 text-yellow-500" />
                        Solutions Appliquées
                      </h4>
                      <ul className="space-y-1">
                        {challenge.solutions.map((solution, index) => (
                          <li key={index} className="text-xs text-muted-foreground flex items-start">
                            <ArrowRight className="h-3 w-3 mr-2 mt-0.5 text-primary flex-shrink-0" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcome */}
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-400">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <div>
                          <div className="font-semibold text-xs text-green-800 dark:text-green-400">
                            {challenge.outcome}
                          </div>
                          <div className="text-xs text-green-600 dark:text-green-500">
                            Résolu en {challenge.timeline}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Lessons Learned */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <AlertCircle className="mr-3 h-6 w-6 text-primary" />
                Leçons Apprises
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {lessonsLearned.map((lesson, index) => (
                  <div key={index} className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start space-x-3">
                      <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5" />
                      <p className="text-sm text-blue-800 dark:text-blue-400 leading-relaxed">
                        {lesson}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SlideWrapper>
  )
}
