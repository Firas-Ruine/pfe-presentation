"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Zap,
    Code,
    BarChart3,
    Users,
    Activity,
    Target,
    Clock,
    FileCode,
    Globe,
    Gauge,
    LineChart
} from "lucide-react"
import React from "react"

const k6Definition = {
    title: "Grafana K6",
    subtitle: "Modern Load Testing Tool",
    description: "Un outil de test de charge moderne et open-source développé par Grafana Labs, conçu pour les développeurs et les équipes DevOps. K6 permet d'écrire des tests de performance en JavaScript et de les exécuter à grande échelle pour valider la fiabilité et les performances des applications."
}

const k6Features = [
    {
        title: "JavaScript ES6+",
        description: "Scripts de test en JavaScript moderne",
        icon: Code,
        color: "from-yellow-500 to-amber-500",
        details: "Syntaxe familière pour les développeurs web"
    },
    {
        title: "CLI & Cloud",
        description: "Exécution locale et dans le cloud",
        icon: Globe,
        color: "from-blue-500 to-cyan-500",
        details: "Flexibilité d'exécution selon les besoins"
    },
    {
        title: "Métriques Avancées",
        description: "Collecte détaillée de données",
        icon: BarChart3,
        color: "from-green-500 to-emerald-500",
        details: "Temps de réponse, throughput, erreurs"
    },
    {
        title: "Intégration DevOps",
        description: "Compatible CI/CD et monitoring",
        icon: Target,
        color: "from-purple-500 to-pink-500",
        details: "Grafana, Prometheus, Jenkins, GitHub Actions"
    }
]

const keyCapabilities = [
    {
        title: "Load Testing",
        value: "10K+ VUs",
        icon: Users,
        description: "Simulation de milliers d'utilisateurs virtuels"
    },
    {
        title: "Performance",
        value: "< 1ms",
        icon: Clock,
        description: "Overhead minimal sur les mesures"
    },
    {
        title: "Protocoles",
        value: "HTTP/gRPC/WS",
        icon: Globe,
        description: "Support multi-protocoles moderne"
    },
    {
        title: "Métriques",
        value: "Real-time",
        icon: Activity,
        description: "Monitoring en temps réel"
    }
]

const useCases = [
    {
        title: "API Testing",
        description: "Test de charge des APIs REST et GraphQL",
        icon: FileCode
    },
    {
        title: "Website Performance",
        description: "Validation des performances des sites web",
        icon: Globe
    },
    {
        title: "Microservices",
        description: "Test de résilience des architectures distribuées",
        icon: Target
    }
]

export default function WhatIsGrafanaK6Slide() {
    return (
        <SlideWrapper className="bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/20">
            <div className="h-full flex flex-col space-y-8">
                <SlideHeader
                    badge="8 • Tests de Performance"
                    title="Qu'est-ce que Grafana K6 ?"
                    subtitle="Outil moderne de test de charge"
                />

                <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-5 space-y-6">
                        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                            <CardHeader className="text-center pb-4">
                                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                    <Zap className="h-8 w-8" style={{ color: '#7d64ff' }} />
                                </div>
                                <CardTitle className="text-2xl font-bold" style={{ color: '#7d64ff' }}>
                                    {k6Definition.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600 text-center leading-relaxed">
                                    {k6Definition.description}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg text-slate-800">
                                    <Gauge className="h-5 w-5" style={{ color: '#7d64ff' }} />
                                    Capacités Clés
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {keyCapabilities.map((capability, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200"
                                    >
                                        <div className="flex items-center gap-3">
                                            <capability.icon className="h-5 w-5 flex-shrink-0" style={{ color: '#7d64ff' }} />
                                            <div>
                                                <div className="font-semibold text-sm text-slate-700">
                                                    {capability.title}
                                                </div>
                                                <div className="text-xs text-slate-500">
                                                    {capability.description}
                                                </div>
                                            </div>
                                        </div>
                                        <Badge className="bg-purple-100 font-semibold text-xs px-2.5 py-1" style={{ color: '#7d64ff' }}>
                                            {capability.value}
                                        </Badge>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>


                    </div>

                    <div className="lg:col-span-7 space-y-6">
                        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg text-slate-800">
                                    <LineChart className="h-6 w-6" style={{ color: '#7d64ff' }} />
                                    Fonctionnalités Principales
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {k6Features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="group p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow duration-300"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            <div className="flex items-start gap-3 mb-2">
                                                <div className="p-2 rounded-lg bg-purple-100">
                                                    <feature.icon className="h-5 w-5" style={{ color: '#7d64ff' }} />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-sm text-slate-700 group-hover:text-purple-600 transition-colors">
                                                        {feature.title}
                                                    </h3>
                                                    <p className="text-xs text-slate-500 mt-0.5">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="text-xs text-slate-500 bg-slate-100 rounded-md p-2">
                                                {feature.details}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg text-slate-800">
                                    <Target className="h-5 w-5" style={{ color: '#7d64ff' }} />
                                    Cas d'Usage
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {useCases.map((useCase, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200 hover:shadow-sm transition-shadow duration-300"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            <div className="p-2 bg-purple-100 rounded-lg">
                                                <useCase.icon className="h-4 w-4" style={{ color: '#7d64ff' }} />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-sm text-slate-700">
                                                    {useCase.title}
                                                </h4>
                                                <p className="text-xs text-slate-500 mt-0.5">
                                                    {useCase.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>


                    </div>
                </div>
            </div>
        </SlideWrapper>
    )
}
