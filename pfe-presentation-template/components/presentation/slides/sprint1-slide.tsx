import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Clock, Target, Lightbulb, CheckCircle2, Users, GitBranch } from "lucide-react"
import SlideWrapper from "../slide-wrapper"

export default function Sprint1Slide() {
  const architecturalDecisions = [
    {
      decision: "Architecture Microservices",
      reasoning: "Scalabilité indépendante, développement parallèle",
      impact: "High",
      status: "Adopté"
    },
    {
      decision: "Pattern API Gateway",
      reasoning: "Point d'entrée unique, gestion centralisée",
      impact: "High", 
      status: "Adopté"
    },
    {
      decision: "Event-Driven Architecture",
      reasoning: "Découplage des services, résilience",
      impact: "Medium",
      status: "Adopté"
    },
    {
      decision: "Container-First Approach",
      reasoning: "Portabilité, cohérence des environnements",
      impact: "High",
      status: "Adopté"
    }
  ]

  const designThinkingSteps = [
    {
      phase: "Empathize",
      description: "Interviews équipes DevOps",
      deliverable: "Personas techniques",
      duration: "3 jours"
    },
    {
      phase: "Define",
      description: "Analyse pain points",
      deliverable: "Problem statement",
      duration: "2 jours"
    },
    {
      phase: "Ideate",
      description: "Brainstorming solutions",
      deliverable: "Solution concepts",
      duration: "2 jours"
    },
    {
      phase: "Prototype",
      description: "POC architecture",
      deliverable: "Diagrammes techniques",
      duration: "5 jours"
    },
    {
      phase: "Test",
      description: "Validation concepts",
      deliverable: "Feedback intégré",
      duration: "3 jours"
    }
  ]

  const sprintMetrics = {
    duration: "15 jours",
    teamSize: "4 personnes",
    completion: 95,
    deliverables: 8
  }

  return (
    <SlideWrapper>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Sprint 1: Phase de Conception
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Design thinking, décisions architecturales et patterns fondamentaux
          </p>
        </div>

        {/* Sprint Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200">
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-700">{sprintMetrics.duration}</div>
              <div className="text-sm text-blue-600">Durée</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200">
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-700">{sprintMetrics.teamSize}</div>
              <div className="text-sm text-green-600">Équipe</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200">
            <CardContent className="p-4 text-center">
              <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-700">{sprintMetrics.deliverables}</div>
              <div className="text-sm text-purple-600">Livrables</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200">
            <CardContent className="p-4 text-center">
              <CheckCircle2 className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-700">{sprintMetrics.completion}%</div>
              <div className="text-sm text-orange-600">Completion</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Architectural Decisions */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="h-5 w-5" />
                Décisions Architecturales Clés
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {architecturalDecisions.map((decision, index) => (
                <div key={index} className="p-4 border rounded-lg bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-sm">{decision.decision}</h4>
                    <Badge 
                      variant={decision.impact === "High" ? "destructive" : "secondary"}
                      className="text-xs"
                    >
                      {decision.impact}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{decision.reasoning}</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span className="text-xs text-green-600 font-medium">{decision.status}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Design Thinking Process */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Processus Design Thinking
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {designThinkingSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-sm">{step.phase}</h4>
                        <Badge variant="outline" className="text-xs">{step.duration}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{step.description}</p>
                      <p className="text-xs text-blue-600 font-medium">📋 {step.deliverable}</p>
                    </div>
                  </div>
                  {index < designThinkingSteps.length - 1 && (
                    <div className="ml-4 mt-2 h-6 w-px bg-border"></div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Progress Bar */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Progression Sprint 1</h3>
              <span className="text-2xl font-bold text-green-600">{sprintMetrics.completion}%</span>
            </div>
            <Progress value={sprintMetrics.completion} className="h-3" />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>Architecture validée</span>
              <span>Patterns documentés</span>
              <span>Équipe formée</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </SlideWrapper>
  )
}
