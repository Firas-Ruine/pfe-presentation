"use client"

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
    <div className="p-8 h-full bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg">
            <Code className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Stack Technologique
            </h1>
            <p className="text-lg text-slate-600 mt-1">
              Technologies sélectionnées avec justifications et métriques
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[calc(100%-140px)]">
        {/* Left Column - Technology Categories */}
        <div className="col-span-8 space-y-4 overflow-y-auto">
          <div className="grid grid-cols-2 gap-4">
            {technologyCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                      <category.icon className="h-4 w-4 text-white" />
                    </div>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {category.technologies.map((tech, i) => (
                    <div key={i} className="space-y-2 p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-sm">{tech.name}</p>
                          <p className="text-xs text-slate-600">{tech.purpose}</p>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant="secondary" 
                            className={`text-xs ${tech.adoption === 'High' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}
                          >
                            v{tech.version}
                          </Badge>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                            <span className="text-xs font-medium">{tech.rating}%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        {tech.pros.map((pro, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <CheckCircle2 className="h-3 w-3 text-green-500 flex-shrink-0" />
                            <span className="text-xs text-slate-600">{pro}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center mt-2">
                        <Progress value={tech.rating} className="flex-1 mr-2 h-2" />
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${tech.adoption === 'High' ? 'border-green-300 text-green-700' : 'border-yellow-300 text-yellow-700'}`}
                        >
                          {tech.adoption}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Column - Comparison Matrix & Stats */}
        <div className="col-span-4 space-y-4">
          {/* Adoption Statistics */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Award className="h-5 w-5" />
                Statistiques
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <div className="text-2xl font-bold">{adoptionStats.totalTechnologies}</div>
                  <div className="text-xs opacity-90">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{adoptionStats.averageRating}%</div>
                  <div className="text-xs opacity-90">Note Moyenne</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{adoptionStats.highAdoption}</div>
                  <div className="text-xs opacity-90">High Adoption</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{adoptionStats.cloudNativeCompliance}%</div>
                  <div className="text-xs opacity-90">Cloud Native</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comparison Matrix */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Matrice de Comparaison
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {comparisonMatrix.map((criteria, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{criteria.criteria}</p>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-xs">
                        {Math.round((criteria.frontend + criteria.backend + criteria.database + criteria.devops + criteria.monitoring) / 5)}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-blue-600">Frontend</span>
                      <span>{criteria.frontend}%</span>
                    </div>
                    <Progress value={criteria.frontend} className="h-1" />
                    
                    <div className="flex justify-between text-xs">
                      <span className="text-green-600">Backend</span>
                      <span>{criteria.backend}%</span>
                    </div>
                    <Progress value={criteria.backend} className="h-1" />
                    
                    <div className="flex justify-between text-xs">
                      <span className="text-purple-600">Database</span>
                      <span>{criteria.database}%</span>
                    </div>
                    <Progress value={criteria.database} className="h-1" />
                    
                    <div className="flex justify-between text-xs">
                      <span className="text-orange-600">DevOps</span>
                      <span>{criteria.devops}%</span>
                    </div>
                    <Progress value={criteria.devops} className="h-1" />
                    
                    <div className="flex justify-between text-xs">
                      <span className="text-yellow-600">Monitoring</span>
                      <span>{criteria.monitoring}%</span>
                    </div>
                    <Progress value={criteria.monitoring} className="h-1" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Key Benefits */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Zap className="h-5 w-5 text-yellow-600" />
                Avantages Clés
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Stack moderne & maintenable</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Cloud-native par design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Écosystème riche & supporté</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Performance & scalabilité</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Sécurité & observabilité</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
