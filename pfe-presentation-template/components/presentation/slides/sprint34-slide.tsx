import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Bell, MessageCircle, Code2, FileText, CheckCircle2, Users, Smartphone, Server } from "lucide-react"
import SlideWrapper from "../slide-wrapper"

export default function Sprint34Slide() {
  const microservices = [
    {
      name: "Alert Service",
      description: "Gestion des alertes système",
      endpoints: 12,
      coverage: 95,
      status: "Production",
      features: ["Règles configurables", "Seuils adaptatifs", "Escalation automatique"]
    },
    {
      name: "Notification Service", 
      description: "Distribution multi-canal",
      endpoints: 8,
      coverage: 92,
      status: "Production",
      features: ["Email/SMS/Push", "Templates", "Préférences utilisateur"]
    },
    {
      name: "User Management",
      description: "Authentification & autorisation",
      endpoints: 15,
      coverage: 98,
      status: "Production", 
      features: ["JWT tokens", "RBAC", "OAuth2 intégration"]
    },
    {
      name: "Mobile Gateway",
      description: "API Gateway pour mobile",
      endpoints: 20,
      coverage: 94,
      status: "Production",
      features: ["Rate limiting", "Caching", "Response aggregation"]
    }
  ]

  const apiDocumentation = [
    {
      service: "Alert Service",
      spec: "OpenAPI 3.0",
      endpoints: "12 endpoints",
      interactive: "Swagger UI",
      postman: "Collection disponible"
    },
    {
      service: "Notification Service",
      spec: "OpenAPI 3.0", 
      endpoints: "8 endpoints",
      interactive: "Swagger UI",
      postman: "Collection disponible"
    },
    {
      service: "User Management",
      spec: "OpenAPI 3.0",
      endpoints: "15 endpoints", 
      interactive: "Swagger UI",
      postman: "Collection disponible"
    },
    {
      service: "Mobile Gateway",
      spec: "OpenAPI 3.0",
      endpoints: "20 endpoints",
      interactive: "Swagger UI", 
      postman: "Collection disponible"
    }
  ]

  const developmentMetrics = [
    { metric: "Services développés", value: "4", icon: Server },
    { metric: "Endpoints API", value: "55", icon: Code2 },
    { metric: "Test Coverage", value: "95%", icon: CheckCircle2 },
    { metric: "Documentation", value: "100%", icon: FileText }
  ]

  const sprintTimeline = [
    {
      week: "Semaine 1-2",
      focus: "Alert Service",
      tasks: ["Architecture microservice", "Règles d'alertes", "Tests unitaires"],
      completion: 100
    },
    {
      week: "Semaine 3-4", 
      focus: "Notification Service",
      tasks: ["Multi-canal delivery", "Templates système", "Intégration tests"],
      completion: 100
    },
    {
      week: "Semaine 5-6",
      focus: "User Management",
      tasks: ["Authentification JWT", "RBAC implementation", "OAuth2 setup"],
      completion: 100
    },
    {
      week: "Semaine 7-8",
      focus: "Mobile Gateway & Integration",
      tasks: ["API Gateway setup", "Rate limiting", "Tests d'intégration"],
      completion: 95
    }
  ]

  return (
    <SlideWrapper>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Sprints 3-4: Développement des Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Implémentation des microservices Alertes & Notifications avec documentation API complète
          </p>
        </div>

        {/* Development Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {developmentMetrics.map((metric, index) => {
            const IconComponent = metric.icon
            return (
              <Card key={index} className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-800/20 border-purple-200">
                <CardContent className="p-4 text-center">
                  <IconComponent className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-700">{metric.value}</div>
                  <div className="text-sm text-purple-600">{metric.metric}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Microservices Overview */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5" />
                Microservices Développés
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {microservices.map((service, index) => (
                <div key={index} className="p-4 border rounded-lg bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-sm flex items-center gap-2">
                        {service.name === "Alert Service" && <Bell className="h-4 w-4 text-red-500" />}
                        {service.name === "Notification Service" && <MessageCircle className="h-4 w-4 text-blue-500" />}
                        {service.name === "User Management" && <Users className="h-4 w-4 text-green-500" />}
                        {service.name === "Mobile Gateway" && <Smartphone className="h-4 w-4 text-purple-500" />}
                        {service.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">{service.description}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {service.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{service.endpoints}</div>
                      <div className="text-xs text-muted-foreground">Endpoints</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{service.coverage}%</div>
                      <div className="text-xs text-muted-foreground">Coverage</div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3 w-3 text-green-600" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* API Documentation */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Documentation API
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {apiDocumentation.map((doc, index) => (
                <div key={index} className="p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-sm">{doc.service}</h4>
                    <Badge variant="outline" className="text-xs">{doc.spec}</Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Endpoints:</span>
                      <span className="font-medium">{doc.endpoints}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Interface:</span>
                      <span className="font-medium text-blue-600">{doc.interactive}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Postman:</span>
                      <span className="font-medium text-green-600">{doc.postman}</span>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">Documentation Complète</span>
                </div>
                <ul className="text-xs text-green-600 space-y-1">
                  <li>• Spécifications OpenAPI 3.0</li>
                  <li>• Interfaces Swagger interactives</li>
                  <li>• Collections Postman prêtes</li>
                  <li>• Exemples de code intégrés</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sprint Timeline */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Timeline de Développement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {sprintTimeline.map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4">
                    <div className="text-sm font-medium text-muted-foreground mb-2">{phase.week}</div>
                    <h4 className="font-semibold text-sm mb-3">{phase.focus}</h4>
                    <Progress value={phase.completion} className="h-2 mb-2" />
                    <span className="text-xs text-muted-foreground">{phase.completion}%</span>
                  </div>
                  <div className="space-y-1">
                    {phase.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="text-xs text-muted-foreground flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3 text-green-600" />
                        {task}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </SlideWrapper>
  )
}
