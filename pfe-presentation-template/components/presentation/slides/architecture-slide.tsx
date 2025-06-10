"use client"

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
  Lock
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
    <div className="p-8 h-full bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
            <Layers className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Vue d'Ensemble de l'Architecture
            </h1>
            <p className="text-lg text-slate-600 mt-1">
              Architecture microservices cloud-native avec DevOps
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[calc(100%-140px)]">
        {/* Left Column - Architecture Layers */}
        <div className="col-span-4 space-y-4">
          <Card className="h-full border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Layers className="h-5 w-5 text-blue-600" />
                Couches Architecture
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {architectureLayers.map((layer, index) => (
                <div key={index} className="space-y-3">
                  <div className={`p-4 rounded-lg bg-gradient-to-r ${layer.color} text-white`}>
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
                  {index < architectureLayers.length - 1 && (
                    <div className="flex justify-center">
                      <ArrowRight className="h-4 w-4 text-slate-400 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Center Column - Technology Stack */}
        <div className="col-span-5 space-y-4">
          <Card className="h-full border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Container className="h-5 w-5 text-purple-600" />
                Stack Technologique
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 overflow-y-auto">
              {techComponents.map((category, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <category.icon className="h-4 w-4 text-blue-600" />
                    <h3 className="font-semibold text-sm">{category.category}</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-2 ml-6">
                    {category.technologies.map((tech, i) => (
                      <div key={i} className="p-3 bg-slate-50 rounded-lg text-center">
                        <Badge className={`text-xs ${tech.color} mb-1`}>
                          {tech.name}
                        </Badge>
                        <p className="text-xs text-slate-600">{tech.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Benefits & Data Flow */}
        <div className="col-span-3 space-y-4">
          {/* Architecture Benefits */}
          <Card className="h-1/2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Zap className="h-5 w-5 text-green-600" />
                Bénéfices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 overflow-y-auto">
              {architectureBenefits.map((benefit, index) => (
                <div key={index} className="p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <benefit.icon className="h-4 w-4 text-blue-600" />
                    <p className="font-medium text-xs">{benefit.benefit}</p>
                  </div>
                  <p className="text-xs text-slate-600 mb-2">{benefit.description}</p>
                  <Badge variant="outline" className="text-xs bg-green-50 text-green-700">
                    {benefit.metric}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Data Flow */}
          <Card className="h-1/2 border-0 shadow-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Network className="h-5 w-5" />
                Flux de Données
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {dataFlow.map((flow, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-full text-xs font-bold">
                      {flow.step}
                    </div>
                    <flow.icon className="h-4 w-4" />
                    <div className="flex-1">
                      <p className="text-xs font-medium">{flow.component}</p>
                      <p className="text-xs opacity-75">{flow.action}</p>
                    </div>
                  </div>
                  {index < dataFlow.length - 1 && (
                    <div className="ml-3 flex justify-center">
                      <ArrowRight className="h-3 w-3 opacity-60 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="mt-4 grid grid-cols-4 gap-4">
        <Card className="p-4 border-0 shadow-md bg-white/60 backdrop-blur-sm text-center">
          <div className="text-2xl font-bold text-blue-600">6</div>
          <div className="text-xs text-slate-600">Microservices</div>
        </Card>
        <Card className="p-4 border-0 shadow-md bg-white/60 backdrop-blur-sm text-center">
          <div className="text-2xl font-bold text-green-600">15+</div>
          <div className="text-xs text-slate-600">Technologies</div>
        </Card>
        <Card className="p-4 border-0 shadow-md bg-white/60 backdrop-blur-sm text-center">
          <div className="text-2xl font-bold text-purple-600">3</div>
          <div className="text-xs text-slate-600">Environnements</div>
        </Card>
        <Card className="p-4 border-0 shadow-md bg-white/60 backdrop-blur-sm text-center">
          <div className="text-2xl font-bold text-orange-600">24/7</div>
          <div className="text-xs text-slate-600">Monitoring</div>
        </Card>
      </div>
    </div>
  )
}
