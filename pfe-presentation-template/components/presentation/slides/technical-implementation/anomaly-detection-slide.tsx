"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    AlertTriangle,
    Clock,
    TrendingUp,
    Activity,
    Cpu,
    RotateCcw,
    Shield,
    Eye,
    Zap,
    Target,
    Timer,
    Gauge
} from "lucide-react"
import React from "react"

const rollbackCriteria = [
    {
        title: "Taux d'erreur HTTP",
        threshold: "> 5%",
        duration: "3 minutes",
        description: "Erreurs HTTP supérieures au seuil acceptable",
        icon: AlertTriangle,
        color: "from-red-500 to-rose-500",
        severity: "critical",
        metric: "HTTP 5xx/4xx"
    },
    {
        title: "Latence P95",
        threshold: "2x baseline",
        duration: "5 minutes",
        description: "Dépassement significatif de la latence normale",
        icon: Clock,
        color: "from-orange-500 to-amber-500",
        severity: "high",
        metric: "Response time"
    },
    {
        title: "Indisponibilité du service",
        threshold: "Health check fail",
        duration: "2 minutes",
        description: "Échec continu des vérifications de santé",
        icon: Shield,
        color: "from-purple-500 to-violet-500",
        severity: "critical",
        metric: "Health status"
    },
    {
        title: "Crash loops",
        threshold: "> 3 redémarrages",
        duration: "10 minutes",
        description: "Redémarrages répétés des pods",
        icon: RotateCcw,
        color: "from-blue-500 to-cyan-500",
        severity: "high",
        metric: "Pod restarts"
    },
    {
        title: "Saturation des ressources",
        threshold: "CPU > 95% | RAM > 90%",
        duration: "5 minutes",
        description: "Surcharge des ressources système",
        icon: Cpu,
        color: "from-green-500 to-emerald-500",
        severity: "high",
        metric: "Resource usage"
    }
]

const detectionLayers = [
    {
        title: "Surveillance Infrastructure",
        description: "Monitoring des métriques système et réseau",
        icon: Gauge,
        color: "text-blue-600",
        tools: ["Prometheus", "Node Exporter", "cAdvisor"]
    },
    {
        title: "Surveillance Application",
        description: "Métriques métier et performance applicative",
        icon: Activity,
        color: "text-green-600",
        tools: ["APM", "Custom metrics", "Business KPIs"]
    },
    {
        title: "Surveillance Logs",
        description: "Analyse des logs et détection de patterns",
        icon: Eye,
        color: "text-purple-600",
        tools: ["ELK Stack", "Log aggregation", "Pattern matching"]
    },
    {
        title: "Tests Synthétiques",
        description: "Validation continue des fonctionnalités",
        icon: Target,
        color: "text-orange-600",
        tools: ["Health checks", "E2E tests", "API monitoring"]
    }
]

const rollbackStats = [
    {
        label: "Temps de détection",
        value: "< 30s",
        description: "Délai moyen d'identification",
        color: "text-blue-700"
    },
    {
        label: "Temps de rollback",
        value: "< 2min",
        description: "Retour à la version stable",
        color: "text-green-700"
    },
    {
        label: "Taux de faux positifs",
        value: "< 2%",
        description: "Déclenchements non justifiés",
        color: "text-purple-700"
    },
    {
        label: "Disponibilité préservée",
        value: "99.9%",
        description: "Uptime maintenu",
        color: "text-emerald-700"
    }
]

export default function AnomalyDetectionSlide() {
    return (
        <SlideWrapper className="bg-gradient-to-br from-gray-50 via-white to-red-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-red-950/20">
            <div className="h-full flex flex-col space-y-8">
                {/* En-tête */}
                <SlideHeader 
                    badge="9 • Déploiement et Validation"
                    title="Mécanismes de Détection d'Anomalies"
                    //subtitle="Système de surveillance multicouche avec rollback automatique"
                />

                {/* Main Content */}
                <div className="flex-1">
                    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl text-slate-800">
                                <AlertTriangle className="h-6 w-6 text-red-600" />
                                Critères de Déclenchement du Rollback
                            </CardTitle>
                            <p className="text-sm text-slate-600 mt-2">
                                Seuils automatiques déclenchant un retour à la version stable précédente
                            </p>
                        </CardHeader>
                        <CardContent>
                            {/* Rollback Criteria Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                                {rollbackCriteria.map((criteria, index) => (
                                    <div 
                                        key={index}
                                        className="group relative"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="relative h-full flex flex-col p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                                            {/* Icon & Severity */}
                                            <div className="flex flex-col items-center gap-2 mb-3">
                                                <div className={`p-3 rounded-xl bg-gradient-to-br ${criteria.color} shadow-lg`}>
                                                    <criteria.icon className="h-5 w-5 text-white" />
                                                </div>
                                                <Badge 
                                                    className={`text-xs font-medium ${
                                                        criteria.severity === 'critical' 
                                                            ? 'bg-red-100 text-red-700' 
                                                            : 'bg-orange-100 text-orange-700'
                                                    }`}
                                                >
                                                    {criteria.severity}
                                                </Badge>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 text-center">
                                                <h3 className="font-semibold text-sm text-slate-800 group-hover:text-red-600 transition-colors mb-2">
                                                    {criteria.title}
                                                </h3>
                                                <p className="text-slate-600 text-xs mb-3">
                                                    {criteria.description}
                                                </p>
                                                
                                                <div className="space-y-2">
                                                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                                                        <div className="text-xs text-slate-500 mb-1">Seuil</div>
                                                        <div className="font-bold text-xs text-slate-800">{criteria.threshold}</div>
                                                    </div>
                                                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                                                        <div className="text-xs text-slate-500 mb-1">Durée</div>
                                                        <div className="font-bold text-xs text-slate-800">{criteria.duration}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Action Flow */}
                            <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200">
                                <div className="flex items-center justify-center gap-3">
                                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                        <RotateCcw className="h-5 w-5 text-red-600" />
                                    </div>
                                    <div className="text-center">
                                        <h4 className="font-semibold text-red-800">Rollback Automatique Déclenché</h4>
                                        <p className="text-xs text-red-600">
                                            Retour immédiat à la version stable précédente avec notification des équipes
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </SlideWrapper>
    )
}
