"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    GitBranch,
    Database,
    Shield,
    Boxes,
    Monitor,
    CheckCircle,
    ArrowRight,
    Play,
    Clock,
    Server,
    Activity,
    Target,
    Workflow,
    Settings
} from "lucide-react"
import React from "react"

const deploymentSteps = [
    {
        step: 1,
        title: "Infrastructure de données",
        description: "PostgreSQL, Redis et RabbitMQ sont déployés en premier",
        icon: Database,
        color: "from-blue-500 to-cyan-500",
        details: "Validation de leur disponibilité avant de poursuivre",
        duration: "3-5 min"
    },
    {
        step: 2,
        title: "Services de base",
        description: "Déploiement des services fondamentaux",
        icon: Shield,
        color: "from-green-500 to-emerald-500",
        details: "Authentification, configuration, nécessaires aux autres microservices",
        duration: "2-3 min"
    },
    {
        step: 3,
        title: "Microservices métier",
        description: "Déploiement parallèle des services d'alertes et notifications",
        icon: Boxes,
        color: "from-purple-500 to-pink-500",
        details: "Après vérification des dépendances critiques",
        duration: "4-6 min"
    },
    {
        step: 4,
        title: "Stack de monitoring",
        description: "Mise en place de l'observabilité",
        icon: Monitor,
        color: "from-orange-500 to-red-500",
        details: "Prometheus, Grafana, etc. pour le suivi temps réel",
        duration: "2-4 min"
    },
    {
        step: 5,
        title: "Validation finale",
        description: "Exécution de tests automatiques",
        icon: CheckCircle,
        color: "from-emerald-500 to-green-500",
        details: "Tests de connectivité inter-services et santé globale",
        duration: "3-5 min"
    }
]

const workflowFeatures = [
    {
        title: "Déclenchement Automatique",
        description: "Pipeline principal pilote le processus de bout en bout",
        icon: Play,
        color: "text-indigo-600"
    },
    {
        title: "Coordination",
        description: "Bon ordre d'exécution et satisfaction des dépendances",
        icon: Workflow,
        color: "text-blue-600"
    },
    {
        title: "Traçabilité",
        description: "Cohérence et fiabilité à chaque étape",
        icon: Activity,
        color: "text-green-600"
    },
    {
        title: "Validation Continue",
        description: "Vérification automatique des prérequis",
        icon: Target,
        color: "text-purple-600"
    }
]

export default function AutomatedDeploymentWorkflowSlide() {
    return (
        <SlideWrapper className="bg-gradient-to-br from-gray-50 via-white to-indigo-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/20">
            <div className="h-full flex flex-col space-y-8">
                {/* En-tête */}
                <SlideHeader 
                    badge="9 • Déploiement et Validation"
                    title="Workflow de Déploiement"
                    //subtitle="Orchestration CI/CD pour cohérence, traçabilité et fiabilité"
                />

                {/* Main Content */}
                <div className="flex-1">
                    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl text-slate-800">
                                <Server className="h-6 w-6 text-indigo-600" />
                                Ordonnancement des Déploiements
                            </CardTitle>
                            {/* <p className="text-sm text-slate-600 mt-2">
                                Pipeline principal coordonnant l'ordre d'exécution et les dépendances techniques
                            </p> */}
                        </CardHeader>
                        <CardContent>
                            {/* Deployment Steps Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                                {deploymentSteps.map((step, index) => (
                                    <div 
                                        key={index}
                                        className="group relative"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        {/* Connection Arrow */}
                                        {index < deploymentSteps.length - 1 && (
                                            <div className="hidden lg:block absolute -right-2 top-1/2 transform -translate-y-1/2 z-10">
                                                <ArrowRight className="h-4 w-4 text-slate-400" />
                                            </div>
                                        )}
                                        
                                        <div className="relative h-full flex flex-col p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                                            {/* Step Number & Icon */}
                                            <div className="flex flex-col items-center gap-2 mb-3">
                                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white font-bold text-sm flex items-center justify-center shadow-lg">
                                                    {step.step}
                                                </div>
                                                {/* <div className={`p-2 rounded-lg bg-gradient-to-br ${step.color} shadow-md`}>
                                                    <step.icon className="h-4 w-4 text-white" />
                                                </div> */}
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 text-center">
                                                <h3 className="font-semibold text-sm text-slate-800 group-hover:text-indigo-600 transition-colors mb-2">
                                                    {step.title}
                                                </h3>
                                                <p className="text-slate-600 text-xs mb-2 leading-relaxed">
                                                    {step.description}
                                                </p>
                                                <div className="text-xs text-slate-500 bg-slate-50 rounded-lg p-2 border border-slate-100 mb-2">
                                                    {step.details}
                                                </div>
                                                <Badge className="bg-slate-100 text-slate-600 font-medium text-xs">
                                                    {step.duration}
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Additional Information Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                                {/* Workflow Features */}
                                <Card className="shadow-sm border border-slate-200">
                                    <CardHeader className="pb-3">
                                        <CardTitle className="flex items-center gap-2 text-lg text-slate-800">
                                            <Settings className="h-5 w-5 text-indigo-600" />
                                            Caractéristiques Clés
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        {workflowFeatures.map((feature, index) => (
                                            <div 
                                                key={index}
                                                className="flex items-start gap-3 p-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                                                style={{ animationDelay: `${index * 100}ms` }}
                                            >
                                                <div className="p-1.5 bg-white rounded-lg shadow-sm">
                                                    <feature.icon className={`h-3 w-3 ${feature.color}`} />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-xs text-slate-700">
                                                        {feature.title}
                                                    </h4>
                                                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>

                                {/* Deployment Metrics */}
                                <Card className="shadow-sm border border-slate-200">
                                    <CardHeader className="pb-3">
                                        <CardTitle className="flex items-center gap-2 text-lg text-slate-800">
                                            <Activity className="h-5 w-5 text-green-600" />
                                            Métriques de Performance
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-green-700">99.5%</div>
                                                <div className="text-xs text-green-600">Taux de réussite</div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="p-2 bg-blue-50 rounded text-center">
                                                <div className="font-bold text-blue-700 text-sm">14-23</div>
                                                <div className="text-xs text-blue-600">Minutes</div>
                                            </div>
                                            <div className="p-2 bg-purple-50 rounded text-center">
                                                <div className="font-bold text-purple-700 text-sm">0</div>
                                                <div className="text-xs text-purple-600">Downtime</div>
                                            </div>
                                        </div>
                                        <div className="p-2 bg-orange-50 rounded-lg text-center">
                                            <div className="font-semibold text-orange-700 text-sm">Auto-rollback</div>
                                            <div className="text-xs text-orange-600">En cas d'échec</div>
                                        </div>
                                    </CardContent>
                                </Card>

            
                            </div>
                            
                        </CardContent>
                    </Card>
                </div>
            </div>
        </SlideWrapper>
    )
}
