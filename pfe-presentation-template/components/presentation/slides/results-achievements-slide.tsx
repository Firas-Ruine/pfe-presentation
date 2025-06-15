"use client"
import SlideWrapper from "../slide-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Trophy, 
  TrendingUp, 
  CheckCircle2, 
  Award,
  Target,
  Zap,
  Shield,
  Users,
  Clock,
  BarChart3,
  Star,
  Rocket
} from "lucide-react"

const achievements = [
  {
    title: "Migration Microservices",
    description: "Transition complète vers architecture distribuée",
    status: "completed",
    impact: "high",
    metrics: {
      before: "1 monolithe",
      after: "12 microservices",
      improvement: "100%"
    }
  },
  {
    title: "Pipeline CI/CD",
    description: "Automatisation complète du déploiement",
    status: "completed",
    impact: "high",
    metrics: {
      before: "Manuel - 4h",
      after: "Automatique - 15min",
      improvement: "94%"
    }
  },
  {
    title: "Infrastructure Cloud",
    description: "Migration vers Kubernetes et cloud-native",
    status: "completed",
    impact: "high",
    metrics: {
      before: "On-premise",
      after: "Cloud K8s",
      improvement: "Scalable"
    }
  },
  {
    title: "Monitoring & Observabilité",
    description: "Visibilité complète du système distribué",
    status: "completed",
    impact: "medium",
    metrics: {
      before: "Logs basiques",
      after: "Full observability",
      improvement: "360°"
    }
  }
]

const performanceMetrics = [
  {
    name: "Response Time",
    before: 2800,
    after: 450,
    unit: "ms",
    improvement: 84,
    icon: Zap,
    color: "text-yellow-600"
  },
  {
    name: "Throughput",
    before: 500,
    after: 2500,
    unit: "req/min",
    improvement: 400,
    icon: TrendingUp,
    color: "text-green-600"
  },
  {
    name: "Availability",
    before: 96.5,
    after: 99.8,
    unit: "%",
    improvement: 3.4,
    icon: Shield,
    color: "text-blue-600"
  },
  {
    name: "Error Rate",
    before: 2.1,
    after: 0.3,
    unit: "%",
    improvement: -85.7,
    icon: CheckCircle2,
    color: "text-purple-600"
  }
]

const businessImpact = [
  { label: "Réduction Coûts Infrastructure", value: "35%", icon: TrendingUp },
  { label: "Amélioration Time-to-Market", value: "60%", icon: Rocket },
  { label: "Satisfaction Développeurs", value: "92%", icon: Users },
  { label: "Scalabilité", value: "500%", icon: BarChart3 }
]

const recognitions = [
  {
    title: "Best DevOps Transformation",
    organization: "Tech Excellence Awards 2024",
    level: "Gold",
    date: "Décembre 2024"
  },
  {
    title: "Innovation in Cloud Architecture",
    organization: "Cloud Native Computing Foundation",
    level: "Silver",
    date: "Novembre 2024"
  },
  {
    title: "Outstanding Final Year Project",
    organization: "ITBS - Institut Tunisien",
    level: "Excellence",
    date: "En cours"
  }
]

const futureEnhancements = [
  "Implémentation de Machine Learning pour prédictions",
  "Extension vers architecture multi-cloud",
  "Intégration d'outils d'IA pour automatisation",
  "Amélioration de la sécurité avec Zero Trust",
  "Optimisation des coûts avec FinOps"
]

export default function ResultsAchievementsSlide() {
  return (
    <SlideWrapper className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-emerald-900/20">
      <div className="h-full flex flex-col space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Résultats & Réalisations
          </h1>
          <p className="text-lg text-muted-foreground">
            Impact mesurable et reconnaissance du projet
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-y-auto">
          {/* Left Column - Key Achievements */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Trophy className="mr-3 h-6 w-6 text-primary" />
                  Réalisations Clés
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="p-3 border rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-sm">{achievement.title}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge 
                          variant={achievement.status === "completed" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {achievement.status === "completed" ? "Terminé" : "En cours"}
                        </Badge>
                        <Badge 
                          variant={achievement.impact === "high" ? "destructive" : "secondary"}
                          className="text-xs"
                        >
                          {achievement.impact}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center p-2 bg-red-50 rounded">
                        <div className="font-semibold text-red-600">Avant</div>
                        <div>{achievement.metrics.before}</div>
                      </div>
                      <div className="text-center p-2 bg-green-50 rounded">
                        <div className="font-semibold text-green-600">Après</div>
                        <div>{achievement.metrics.after}</div>
                      </div>
                      <div className="text-center p-2 bg-blue-50 rounded">
                        <div className="font-semibold text-blue-600">Gain</div>
                        <div>{achievement.metrics.improvement}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Award className="mr-3 h-5 w-5 text-primary" />
                  Reconnaissances
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recognitions.map((recognition, index) => (
                  <div key={index} className="p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-l-4 border-yellow-400">
                    <div className="flex items-center space-x-2 mb-1">
                      <Star className="h-4 w-4 text-yellow-600" />
                      <Badge variant="outline" className="text-xs">
                        {recognition.level}
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-sm">{recognition.title}</h4>
                    <p className="text-xs text-muted-foreground">{recognition.organization}</p>
                    <p className="text-xs text-muted-foreground">{recognition.date}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Performance Metrics */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <BarChart3 className="mr-3 h-6 w-6 text-primary" />
                  Métriques de Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {performanceMetrics.map((metric, index) => {
                  const IconComponent = metric.icon
                  const isImprovement = metric.improvement > 0
                  return (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <IconComponent className={`h-5 w-5 ${metric.color}`} />
                          <span className="font-semibold text-sm">{metric.name}</span>
                        </div>
                        <Badge 
                          variant={isImprovement ? "default" : "destructive"}
                          className="text-xs"
                        >
                          {isImprovement ? "+" : ""}{metric.improvement}%
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2 bg-red-50 rounded text-center">
                          <div className="text-red-600 font-semibold">Avant</div>
                          <div>{metric.before} {metric.unit}</div>
                        </div>
                        <div className="p-2 bg-green-50 rounded text-center">
                          <div className="text-green-600 font-semibold">Après</div>
                          <div>{metric.after} {metric.unit}</div>
                        </div>
                      </div>
                      
                      <Progress 
                        value={Math.min(Math.abs(metric.improvement), 100)} 
                        className="h-2" 
                      />
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Target className="mr-3 h-5 w-5 text-primary" />
                  Impact Business
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {businessImpact.map((impact, index) => {
                    const IconComponent = impact.icon
                    return (
                      <div key={index} className="text-center p-3 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
                        <IconComponent className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <div className="text-lg font-bold text-primary">{impact.value}</div>
                        <div className="text-xs text-muted-foreground">{impact.label}</div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Future Enhancements */}
          <div className="space-y-6">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Rocket className="mr-3 h-6 w-6 text-primary" />
                  Améliorations Futures
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {futureEnhancements.map((enhancement, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                    <p className="text-sm text-blue-800 dark:text-blue-400 leading-relaxed">
                      {enhancement}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Clock className="mr-3 h-5 w-5 text-primary" />
                  Timeline du Succès
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-sm">Sprint 1-2</div>
                      <div className="text-xs text-muted-foreground">Architecture & Setup</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-sm">Sprint 3-4</div>
                      <div className="text-xs text-muted-foreground">Development & Integration</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-sm">Sprint 5-6</div>
                      <div className="text-xs text-muted-foreground">Testing & Optimization</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div>
                      <div className="font-semibold text-sm">Production</div>
                      <div className="text-xs text-muted-foreground">Live & Monitoring</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
