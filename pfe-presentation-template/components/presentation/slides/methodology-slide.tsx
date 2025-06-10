"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Users, 
  Target, 
  Zap, 
  RotateCcw, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  GitBranch,
  Layers
} from "lucide-react"

const scrumRoles = [
  {
    role: "Product Owner",
    name: "M. Directeur Technique",
    responsibilities: ["Vision produit", "Priorisation backlog", "Validation sprints"],
    icon: Target,
    color: "bg-blue-500"
  },
  {
    role: "Scrum Master",
    name: "Chef de Projet",
    responsibilities: ["Facilitation", "Résolution blocages", "Coaching équipe"],
    icon: Users,
    color: "bg-green-500"
  },
  {
    role: "Development Team",
    name: "Équipe DevOps",
    responsibilities: ["Développement", "Tests", "Déploiement"],
    icon: Zap,
    color: "bg-purple-500"
  }
]

const scrumEvents = [
  {
    event: "Sprint Planning",
    duration: "2h",
    description: "Planification des tâches du sprint",
    frequency: "Début de sprint"
  },
  {
    event: "Daily Standup",
    duration: "15min",
    description: "Point quotidien d'avancement",
    frequency: "Quotidien"
  },
  {
    event: "Sprint Review",
    duration: "1h",
    description: "Démonstration des fonctionnalités",
    frequency: "Fin de sprint"
  },
  {
    event: "Sprint Retrospective",
    duration: "1h",
    description: "Amélioration continue du processus",
    frequency: "Fin de sprint"
  }
]

const sprintOverview = [
  {
    sprint: "Sprint 1",
    duration: "2 semaines",
    focus: "Conception & Architecture",
    deliverables: ["Diagrammes architecture", "Choix technologiques", "Setup environnement"],
    status: "completed",
    progress: 100
  },
  {
    sprint: "Sprint 2",
    duration: "2 semaines", 
    focus: "Pipeline CI/CD",
    deliverables: ["GitOps workflow", "Argo CD", "Automated testing"],
    status: "completed",
    progress: 100
  },
  {
    sprint: "Sprint 3-4",
    duration: "4 semaines",
    focus: "Développement Services",
    deliverables: ["Services Alertes", "API Gateway", "Documentation"],
    status: "completed",
    progress: 100
  },
  {
    sprint: "Sprint 5",
    duration: "2 semaines",
    focus: "Observabilité",
    deliverables: ["Stack PLG", "Monitoring", "Alerting"],
    status: "completed",
    progress: 100
  },
  {
    sprint: "Sprint 6",
    duration: "2 semaines",
    focus: "Validation & Tests",
    deliverables: ["Tests performance", "Sécurité", "Documentation"],
    status: "completed",
    progress: 100
  }
]

const methodologyPrinciples = [
  {
    principle: "Itératif & Incrémental",
    description: "Développement par cycles courts avec livraisons fréquentes",
    icon: RotateCcw,
    benefit: "Feedback rapide et adaptation continue"
  },
  {
    principle: "Collaboration Client",
    description: "Implication continue du Product Owner dans les décisions",
    icon: Users,
    benefit: "Alignement avec les besoins métier"
  },
  {
    principle: "Réponse au Changement",
    description: "Adaptation agile aux nouvelles exigences et contraintes",
    icon: GitBranch,
    benefit: "Flexibilité et réactivité"
  },
  {
    principle: "Logiciel Fonctionnel",
    description: "Priorité aux fonctionnalités qui apportent de la valeur",
    icon: CheckCircle2,
    benefit: "ROI maximisé à chaque sprint"
  }
]

export default function MethodologySlide() {
  return (
    <div className="p-8 h-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
            <RotateCcw className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Méthodologie Agile
            </h1>
            <p className="text-lg text-slate-600 mt-1">
              Approche Scrum pour la transformation DevOps
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[calc(100%-120px)]">
        {/* Left Column - Scrum Framework */}
        <div className="col-span-4 space-y-6">
          {/* Scrum Roles */}
          <Card className="h-fit border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="h-5 w-5 text-blue-600" />
                Rôles Scrum
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {scrumRoles.map((role, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 ${role.color} rounded-lg`}>
                      <role.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{role.role}</p>
                      <p className="text-xs text-slate-600">{role.name}</p>
                    </div>
                  </div>
                  <div className="ml-11 space-y-1">
                    {role.responsibilities.map((resp, i) => (
                      <Badge key={i} variant="secondary" className="mr-1 text-xs">
                        {resp}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Scrum Events */}
          <Card className="h-fit border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calendar className="h-5 w-5 text-green-600" />
                Événements Scrum
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {scrumEvents.map((event, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{event.event}</p>
                    <p className="text-xs text-slate-600">{event.description}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-xs">
                      {event.duration}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Center Column - Sprint Overview */}
        <div className="col-span-5 space-y-6">
          <Card className="h-full border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Layers className="h-5 w-5 text-purple-600" />
                Vue d'Ensemble des Sprints
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {sprintOverview.map((sprint, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{sprint.sprint}</p>
                        <p className="text-xs text-slate-600">{sprint.focus}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="text-xs">
                        {sprint.duration}
                      </Badge>
                      <div className="flex items-center gap-1 mt-1">
                        <CheckCircle2 className="h-3 w-3 text-green-500" />
                        <span className="text-xs text-green-600">Terminé</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="ml-11 space-y-2">
                    <Progress value={sprint.progress} className="h-2" />
                    <div className="space-y-1">
                      {sprint.deliverables.map((deliverable, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3 w-3 text-green-500 flex-shrink-0" />
                          <span className="text-xs text-slate-600">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {index < sprintOverview.length - 1 && (
                    <div className="flex justify-center">
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Agile Principles */}
        <div className="col-span-3 space-y-6">
          <Card className="h-full border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Target className="h-5 w-5 text-orange-600" />
                Principes Agiles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {methodologyPrinciples.map((principle, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <principle.icon className="h-4 w-4 text-blue-600" />
                    <p className="font-medium text-sm">{principle.principle}</p>
                  </div>
                  <p className="text-xs text-slate-600 pl-6">{principle.description}</p>
                  <div className="pl-6">
                    <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                      {principle.benefit}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Project Metrics */}
          <Card className="h-fit border-0 shadow-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Clock className="h-5 w-5" />
                Métriques Projet
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <p className="text-2xl font-bold">6</p>
                  <p className="text-xs opacity-90">Sprints</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-xs opacity-90">Semaines</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-xs opacity-90">Objectifs</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">15+</p>
                  <p className="text-xs opacity-90">Livrables</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
