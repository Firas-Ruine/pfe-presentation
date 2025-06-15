"use client"

import SlideWrapper from "../slide-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Cloud, 
  Server, 
  Database, 
  Shield, 
  Monitor, 
  Smartphone,
  Globe,
  GitBranch,
  Container,
  Network,
  Layers,
  ArrowRight,
  Users,
  Zap,
  Lock,
  Award
} from "lucide-react"

const architectureLayers = [
  {
    layer: "Couche Présentation",
    components: ["Application Mobile React Native", "Interface Web React", "API Gateway Kong"],
    color: "from-blue-500 to-cyan-500",
    icon: Smartphone,
    description: "Interface utilisateur et point d'entrée"
  },
  {
    layer: "Couche Services",
    components: ["Service Alertes", "Service Notifications", "Service Authentification"],
    color: "from-green-500 to-emerald-500",
    icon: Server,
    description: "Microservices métier indépendants"
  },
  {
    layer: "Couche Données",
    components: ["PostgreSQL", "Redis Cache", "MinIO Object Storage"],
    color: "from-purple-500 to-violet-500",
    icon: Database,
    description: "Persistance et stockage des données"
  },
  {
    layer: "Couche Infrastructure",
    components: ["Kubernetes", "Docker", "Cloud Provider"],
    color: "from-orange-500 to-red-500",
    icon: Cloud,
    description: "Orchestration et déploiement"
  }
]

const techComponents = [
  {
    category: "Frontend",
    technologies: [
      { name: "React Native", role: "Mobile App", color: "bg-blue-100 text-blue-800" },
      { name: "React", role: "Web Interface", color: "bg-cyan-100 text-cyan-800" },
      { name: "TypeScript", role: "Type Safety", color: "bg-blue-100 text-blue-800" }
    ],
    icon: Smartphone
  },
  {
    category: "Backend", 
    technologies: [
      { name: "Node.js", role: "Runtime", color: "bg-green-100 text-green-800" },
      { name: "Express", role: "API Framework", color: "bg-green-100 text-green-800" },
      { name: "Kong", role: "API Gateway", color: "bg-emerald-100 text-emerald-800" }
    ],
    icon: Server
  },
  {
    category: "Database",
    technologies: [
      { name: "PostgreSQL", role: "Primary DB", color: "bg-blue-100 text-blue-800" },
      { name: "Redis", role: "Cache Layer", color: "bg-red-100 text-red-800" },
      { name: "MinIO", role: "Object Storage", color: "bg-orange-100 text-orange-800" }
    ],
    icon: Database
  },
  {
    category: "DevOps",
    technologies: [
      { name: "Kubernetes", role: "Orchestration", color: "bg-blue-100 text-blue-800" },
      { name: "Argo CD", role: "GitOps", color: "bg-purple-100 text-purple-800" },
      { name: "Helm", role: "Package Manager", color: "bg-indigo-100 text-indigo-800" }
    ],
    icon: Container
  },
  {
    category: "Monitoring",
    technologies: [
      { name: "Prometheus", role: "Metrics", color: "bg-orange-100 text-orange-800" },
      { name: "Grafana", role: "Dashboards", color: "bg-orange-100 text-orange-800" },
      { name: "Loki", role: "Logs", color: "bg-green-100 text-green-800" }
    ],
    icon: Monitor
  },
  {
    category: "Security",
    technologies: [
      { name: "Trivy", role: "Vulnerability Scanner", color: "bg-red-100 text-red-800" },
      { name: "RBAC", role: "Access Control", color: "bg-yellow-100 text-yellow-800" },
      { name: "TLS/SSL", role: "Encryption", color: "bg-green-100 text-green-800" }
    ],
    icon: Shield
  }
]

const dataFlow = [
  {
    step: 1,
    component: "Mobile App",
    action: "Envoie requête",
    target: "API Gateway",
    icon: Smartphone
  },
  {
    step: 2,
    component: "API Gateway",
    action: "Route & authentifie",
    target: "Microservices",
    icon: Globe
  },
  {
    step: 3,
    component: "Microservices",
    action: "Traite logique métier",
    target: "Base de données",
    icon: Server
  },
  {
    step: 4,
    component: "Database",
    action: "Retourne données",
    target: "Cache Redis",
    icon: Database
  }
]

const architectureBenefits = [
  {
    benefit: "Scalabilité Horizontale",
    description: "Chaque service peut être mis à l'échelle indépendamment",
    icon: Layers,
    metric: "Auto-scaling K8s"
  },
  {
    benefit: "Haute Disponibilité",
    description: "Résilience avec réplication et load balancing",
    icon: Shield,
    metric: "99.9% uptime"
  },
  {
    benefit: "Déploiement Continu",
    description: "GitOps avec Argo CD pour déploiements automatisés",
    icon: GitBranch,
    metric: "0-downtime"
  },
  {
    benefit: "Observabilité Complète",
    description: "Monitoring, logs et tracing distribué",
    icon: Monitor,
    metric: "Real-time"
  }
]

export default function ArchitectureSlide() {
  return (
    <SlideWrapper>
      <div className="space-y-8">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Vue d'Ensemble de l'Architecture
          </h2>
          <p className="text-lg text-muted-foreground">
            Architecture microservices cloud-native avec DevOps
          </p>
        </div>

        {/* Architecture Overview */}
        <Card className="shadow-xl bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 mb-8">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-2xl">
              <Layers className="mr-3 h-8 w-8 text-primary" />
              Architecture Microservices
              <Badge variant="secondary" className="ml-4">
                <Award className="mr-1 h-4 w-4" />
                Cloud-Native
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <Layers className="mr-2 h-5 w-5 text-primary" />
                  Couches Architecture
                </h4>
                <div className="space-y-4">
                  {architectureLayers.map((layer, index) => (
                    <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-200">
                      <CardContent className="p-4">
                        <div className={`p-4 rounded-lg bg-gradient-to-r ${layer.color} text-white mb-3`}>
                          <div className="flex items-center gap-3 mb-2">
                            <layer.icon className="h-5 w-5" />
                            <h3 className="font-semibold text-sm">{layer.layer}</h3>
                          </div>
                          <p className="text-xs opacity-90 mb-3">{layer.description}</p>
                          <div className="space-y-1">
                            {layer.components.map((component, i) => (
                              <Badge key={i} variant="secondary" className="mr-1 text-xs bg-white/20 text-white border-white/30">
                                {component}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <Container className="mr-2 h-5 w-5 text-primary" />
                  Composants Techniques
                </h4>
                <div className="space-y-4">
                  {techComponents.slice(0, 4).map((category, index) => (
                    <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-200">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <category.icon className="h-5 w-5 text-primary" />
                          <h3 className="font-semibold text-sm">{category.category}</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {category.technologies.map((tech, i) => (
                            <div key={i} className="p-2 bg-slate-50 rounded-lg text-center">
                              <Badge className={`text-xs ${tech.color} mb-1`}>
                                {tech.name}
                              </Badge>
                              <p className="text-xs text-muted-foreground">{tech.role}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits & Data Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Architecture Benefits */}
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-xl">
                <Zap className="mr-3 h-6 w-6 text-primary" />
                Bénéfices Architecture
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {architectureBenefits.map((benefit, index) => (
                <Card key={index} className="shadow-md bg-slate-50/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <benefit.icon className="h-5 w-5 text-primary" />
                      <p className="font-semibold text-sm">{benefit.benefit}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{benefit.description}</p>
                    <Badge variant="outline" className="text-xs bg-green-50 text-green-700">
                      {benefit.metric}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>

          {/* Data Flow */}
          <Card className="shadow-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-xl">
                <Network className="mr-3 h-6 w-6" />
                Flux de Données
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {dataFlow.map((flow, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                    <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full text-sm font-bold">
                      {flow.step}
                    </div>
                    <flow.icon className="h-5 w-5" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold">{flow.component}</p>
                      <p className="text-xs opacity-75">{flow.action}</p>
                      <p className="text-xs opacity-60">→ {flow.target}</p>
                    </div>
                  </div>
                  {index < dataFlow.length - 1 && (
                    <div className="flex justify-center">
                      <ArrowRight className="h-4 w-4 opacity-60 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="shadow-md bg-blue-50/50 dark:bg-blue-950/20 border-blue-200/50 text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-blue-600">6</div>
              <div className="text-sm text-muted-foreground">Microservices</div>
            </CardContent>
          </Card>
          <Card className="shadow-md bg-green-50/50 dark:bg-green-950/20 border-green-200/50 text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-green-600">15+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </CardContent>
          </Card>
          <Card className="shadow-md bg-purple-50/50 dark:bg-purple-950/20 border-purple-200/50 text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-purple-600">3</div>
              <div className="text-sm text-muted-foreground">Environnements</div>
            </CardContent>
          </Card>
          <Card className="shadow-md bg-orange-50/50 dark:bg-orange-950/20 border-orange-200/50 text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-orange-600">24/7</div>
              <div className="text-sm text-muted-foreground">Monitoring</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SlideWrapper>
  )
}
