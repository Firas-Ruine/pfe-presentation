"use client"

import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
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
  Layers,
  Award
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

export default function DevelopmentMethodologySlide() {
  return (
    <SlideWrapper>
      <div className="space-y-8">
        {/* En-tête */}
        <SlideHeader 
          badge="Chapitre 4 • Méthodologie"
          title="Méthodologie Agile"
          subtitle="Approche Scrum pour la transformation DevOps"
        />

        {/* Scrum Framework Overview */}
        <Card className="shadow-xl bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 mb-8">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-2xl">
              <RotateCcw className="mr-3 h-8 w-8 text-primary" />
              Framework Scrum
              <Badge variant="secondary" className="ml-4">
                <Award className="mr-1 h-4 w-4" />
                6 Sprints Complétés
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Scrum Roles */}
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <Users className="mr-2 h-5 w-5 text-primary" />
                  Rôles Scrum
                </h4>
                <div className="space-y-3">
                  {scrumRoles.map((role, index) => (
                    <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-200">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-2 ${role.color} rounded-lg`}>
                            <role.icon className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-sm">{role.role}</p>
                            <p className="text-xs text-muted-foreground">{role.name}</p>
                          </div>
                        </div>
                        <div className="space-y-1">
                          {role.responsibilities.map((resp, i) => (
                            <Badge key={i} variant="outline" className="mr-1 text-xs">
                              {resp}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Scrum Events */}
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-primary" />
                  Événements Scrum
                </h4>
                <div className="space-y-3">
                  {scrumEvents.map((event, index) => (
                    <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-200">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <p className="font-semibold text-sm">{event.event}</p>
                            <p className="text-xs text-muted-foreground">{event.description}</p>
                          </div>
                          <Badge variant="secondary" className="text-xs ml-2">
                            {event.duration}
                          </Badge>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {event.frequency}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Agile Principles */}
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <Target className="mr-2 h-5 w-5 text-primary" />
                  Principes Agiles
                </h4>
                <div className="space-y-3">
                  {methodologyPrinciples.map((principle, index) => (
                    <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-200">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-2 mb-2">
                          <principle.icon className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm">{principle.principle}</p>
                            <p className="text-xs text-muted-foreground mb-2">{principle.description}</p>
                            <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                              {principle.benefit}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sprint Overview */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Layers className="mr-3 h-6 w-6 text-primary" />
            Vue d'Ensemble des Sprints
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sprintOverview.map((sprint, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 bg-green-50/50 dark:bg-green-950/20 border-green-200/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{sprint.sprint}</CardTitle>
                        <p className="text-sm text-muted-foreground">{sprint.focus}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {sprint.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium text-green-600">Terminé</span>
                    <Progress value={sprint.progress} className="flex-1 ml-2 h-2" />
                  </div>
                  <div className="space-y-1">
                    {sprint.deliverables.map((deliverable, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3 w-3 text-green-500 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Metrics */}
        <Card className="shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Clock className="h-6 w-6" />
              Métriques Projet
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold">6</div>
                <div className="text-sm opacity-90">Sprints</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">12</div>
                <div className="text-sm opacity-90">Semaines</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-90">Objectifs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm opacity-90">Livrables</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SlideWrapper>
  )
}
