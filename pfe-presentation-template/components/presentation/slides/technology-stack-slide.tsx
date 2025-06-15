"use client"

import SlideWrapper from "../slide-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Code, 
  Server, 
  Database, 
  Cloud, 
  Monitor, 
  Shield,
  Smartphone,
  GitBranch,
  Container,
  Network,
  CheckCircle2,
  Star,
  TrendingUp,
  Award,
  Zap
} from "lucide-react"

const technologyCategories = [
  {
    category: "Frontend & Mobile",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
    technologies: [
      {
        name: "React Native",
        version: "0.73",
        purpose: "Application mobile cross-platform",
        pros: ["Code unique iOS/Android", "Performance native", "Large communauté"],
        rating: 95,
        adoption: "High"
      },
      {
        name: "React + TypeScript",
        version: "18.x + 5.x",
        purpose: "Interface web et dashboards",
        pros: ["Type safety", "Developer experience", "Écosystème riche"],
        rating: 90,
        adoption: "High"
      },
      {
        name: "Expo",
        version: "50.x",
        purpose: "Toolchain et build pipeline mobile",
        pros: ["EAS Build", "OTA Updates", "CI/CD intégré"],
        rating: 85,
        adoption: "Medium"
      }
    ]
  },
  {
    category: "Backend & APIs",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    technologies: [
      {
        name: "Node.js",
        version: "20 LTS",
        purpose: "Runtime JavaScript server-side",
        pros: ["Performance V8", "NPM ecosystem", "Async/await natif"],
        rating: 92,
        adoption: "High"
      },
      {
        name: "Express.js",
        version: "4.18",
        purpose: "Framework web minimaliste",
        pros: ["Simplicité", "Middleware flexibles", "Large adoption"],
        rating: 88,
        adoption: "High"
      },
      {
        name: "Kong Gateway",
        version: "3.4",
        purpose: "API Gateway et reverse proxy",
        pros: ["Rate limiting", "Auth plugins", "Observabilité"],
        rating: 87,
        adoption: "Medium"
      }
    ]
  },
  {
    category: "Base de Données",
    icon: Database,
    color: "from-purple-500 to-violet-500",
    technologies: [
      {
        name: "PostgreSQL",
        version: "15",
        purpose: "Base de données relationnelle principale",
        pros: ["ACID compliance", "JSON support", "Performance"],
        rating: 94,
        adoption: "High"
      },
      {
        name: "Redis",
        version: "7.2",
        purpose: "Cache en mémoire et sessions",
        pros: ["Sub-ms latency", "Pub/Sub", "Clustering"],
        rating: 91,
        adoption: "High"
      },
      {
        name: "MinIO",
        version: "Latest",
        purpose: "Object storage S3-compatible",
        pros: ["S3 API", "Multi-cloud", "High performance"],
        rating: 82,
        adoption: "Medium"
      }
    ]
  },
  {
    category: "DevOps & Infrastructure",
    icon: Container,
    color: "from-orange-500 to-red-500",
    technologies: [
      {
        name: "Kubernetes",
        version: "1.28",
        purpose: "Orchestration de conteneurs",
        pros: ["Auto-scaling", "Service discovery", "Rolling updates"],
        rating: 96,
        adoption: "High"
      },
      {
        name: "Argo CD",
        version: "2.8",
        purpose: "GitOps continuous deployment",
        pros: ["Declarative", "Git-based", "Multi-cluster"],
        rating: 89,
        adoption: "Medium"
      },
      {
        name: "Helm",
        version: "3.12",
        purpose: "Package manager Kubernetes",
        pros: ["Templating", "Versioning", "Dependencies"],
        rating: 86,
        adoption: "High"
      }
    ]
  },
  {
    category: "Monitoring & Observabilité",
    icon: Monitor,
    color: "from-yellow-500 to-orange-500",
    technologies: [
      {
        name: "Prometheus",
        version: "2.47",
        purpose: "Collecte et stockage de métriques",
        pros: ["Pull model", "PromQL", "Alertmanager"],
        rating: 93,
        adoption: "High"
      },
      {
        name: "Grafana",
        version: "10.1",
        purpose: "Visualisation et dashboards",
        pros: ["Multi-datasource", "Alerting", "Plugins"],
        rating: 91,
        adoption: "High"
      },
      {
        name: "Loki",
        version: "2.9",
        purpose: "Agrégation et indexation des logs",
        pros: ["Label-based", "LogQL", "Grafana integration"],
        rating: 84,
        adoption: "Medium"
      }
    ]
  },
  {
    category: "Sécurité & Qualité",
    icon: Shield,
    color: "from-red-500 to-pink-500",
    technologies: [
      {
        name: "Trivy",
        version: "0.45",
        purpose: "Scanner de vulnérabilités",
        pros: ["Multi-target", "CI/CD integration", "Policy engine"],
        rating: 88,
        adoption: "Medium"
      },
      {
        name: "SonarQube",
        version: "10.1",
        purpose: "Analyse de qualité de code",
        pros: ["Code coverage", "Security hotspots", "Tech debt"],
        rating: 85,
        adoption: "High"
      },
      {
        name: "OWASP ZAP",
        version: "2.14",
        purpose: "Tests de sécurité applicative",
        pros: ["DAST scanning", "API testing", "Automation"],
        rating: 82,
        adoption: "Medium"
      }
    ]
  }
]

const comparisonMatrix = [
  {
    criteria: "Performance",
    frontend: 92,
    backend: 89,
    database: 94,
    devops: 91,
    monitoring: 88
  },
  {
    criteria: "Scalabilité",
    frontend: 88,
    backend: 93,
    database: 91,
    devops: 96,
    monitoring: 89
  },
  {
    criteria: "Maintenabilité",
    frontend: 90,
    backend: 87,
    database: 93,
    devops: 85,
    monitoring: 86
  },
  {
    criteria: "Communauté",
    frontend: 94,
    backend: 95,
    database: 96,
    devops: 92,
    monitoring: 91
  }
]

const adoptionStats = {
  totalTechnologies: 18,
  highAdoption: 12,
  mediumAdoption: 6,
  averageRating: 89,
  cloudNativeCompliance: 100
}

export default function TechnologyStackSlide() {
  return (
    <SlideWrapper className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-900 dark:to-purple-900/20">
      <div className="h-full flex flex-col space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Stack Technologique
          </h1>
          <p className="text-lg text-muted-foreground">
            Technologies et outils utilisés dans le projet
          </p>
        </div>

        {/* Technology Categories - Full Width Grid */}
        <div className="flex-1 space-y-6 overflow-y-auto">
          {technologyCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl">
                  <category.icon className="mr-3 h-6 w-6 text-primary" />
                  {category.category}
                  <Badge variant="outline" className="ml-auto">
                    {category.technologies.length} technologies
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <Card key={techIndex} className="border-2 hover:border-primary/50 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-base">{tech.name}</h3>
                            <Badge variant="secondary" className="text-xs mt-1">
                              v{tech.version}
                            </Badge>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-primary">{tech.rating}%</div>
                            <div className="text-xs text-muted-foreground">{tech.adoption}</div>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                          {tech.purpose}
                        </p>
                        
                        <div className="space-y-2">
                          <div className="text-xs font-medium text-primary">Avantages:</div>
                          <div className="flex flex-wrap gap-1">
                            {tech.pros.map((pro, proIndex) => (
                              <Badge key={proIndex} variant="outline" className="text-xs">
                                {pro}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        {/* Rating bar */}
                        <div className="mt-3">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Satisfaction</span>
                            <span>{tech.rating}%</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-500"
                              style={{ width: `${tech.rating}%` }}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}
