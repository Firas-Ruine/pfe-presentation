"use client"
import SlideWrapper from "../slide-wrapper"
import SlideHeader from "../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Globe,
  Settings,
  Code,
  MonitorSpeaker,
  Shield,
  BarChart3,
  CheckCircle2,
  Target
} from "lucide-react"

const scopeDefinition = [
  {
    area: "Infrastructure & DevOps",
    description: "Pipeline CI/CD, conteneurisation, orchestration",
    progress: 85,
    tasks: ["Docker", "Kubernetes", "ArgoCD", "Prometheus"],
    icon: Settings
  },
  {
    area: "Architecture & Développement",
    description: "Microservices, APIs, base de données",
    progress: 70,
    tasks: ["API Gateway", "Services", "BDD", "Auth"],
    icon: Code
  },
  {
    area: "Monitoring & Observabilité",
    description: "Logs, métriques, alertes, dashboards",
    progress: 60,
    tasks: ["Grafana", "Loki", "Alerting", "SLI/SLO"],
    icon: MonitorSpeaker
  },
  {
    area: "Sécurité",
    description: "Scans vulnérabilités, authentification, autorisation",
    progress: 45,
    tasks: ["Trivy", "RBAC", "TLS", "Secrets"],
    icon: Shield
  }
]

export default function ProjectScopeProgressSlide() {
  return (
    <SlideWrapper>
      <div className="space-y-8">
        {/* En-tête */}
        <SlideHeader 
          badge="Chapitre 3 • Périmètre"
          title="Périmètre & Progression"
          subtitle="Définition du scope et avancement des travaux"
        />

        {/* Définition du Périmètre */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Globe className="mr-3 h-6 w-6 text-primary" />
            Périmètre Détaillé
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {scopeDefinition.map((scope, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <scope.icon className="h-8 w-8 text-primary" />
                    <div className="flex-1">
                      <CardTitle className="text-lg">{scope.area}</CardTitle>
                      <p className="text-sm text-muted-foreground">{scope.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Progression</span>
                      <span className="font-bold text-primary">{scope.progress}%</span>
                    </div>
                    <Progress value={scope.progress} className="h-3" />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Technologies & Outils:</p>
                    <div className="flex flex-wrap gap-2">
                      {scope.tasks.map((task, taskIndex) => (
                        <Badge key={taskIndex} variant="secondary" className="text-xs">
                          {task}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Livrables par domaine */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Target className="mr-3 h-6 w-6 text-primary" />
            Livrables Clés
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="shadow-md bg-green-50/50 dark:bg-green-950/20 border-green-200/50">
              <CardContent className="p-4 text-center">
                <CheckCircle2 className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-lg font-bold">Pipeline CI/CD</div>
                <div className="text-sm text-muted-foreground">Automatisation complète</div>
                <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800">Terminé</Badge>
              </CardContent>
            </Card>
            
            <Card className="shadow-md bg-green-50/50 dark:bg-green-950/20 border-green-200/50">
              <CardContent className="p-4 text-center">
                <CheckCircle2 className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-lg font-bold">Microservices</div>
                <div className="text-sm text-muted-foreground">Services Alertes/Notifications</div>
                <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800">Terminé</Badge>
              </CardContent>
            </Card>

            <Card className="shadow-md bg-green-50/50 dark:bg-green-950/20 border-green-200/50">
              <CardContent className="p-4 text-center">
                <CheckCircle2 className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-lg font-bold">Monitoring</div>
                <div className="text-sm text-muted-foreground">Stack PLG (Prometheus/Loki/Grafana)</div>
                <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800">Terminé</Badge>
              </CardContent>
            </Card>

            <Card className="shadow-md bg-green-50/50 dark:bg-green-950/20 border-green-200/50">
              <CardContent className="p-4 text-center">
                <CheckCircle2 className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-lg font-bold">App Mobile</div>
                <div className="text-sm text-muted-foreground">React Native + Expo</div>
                <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800">Terminé</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
