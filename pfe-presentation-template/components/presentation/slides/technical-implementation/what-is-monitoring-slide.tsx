"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Monitor,
    Eye,
    AlertTriangle,
    BarChart3,
    Activity,
    Bell,
    TrendingUp,
    Shield,
    Clock,
    Gauge,
    ArrowRight,
    Database,
    Server,
    Zap,
    Target
} from "lucide-react"
import React from "react"

const monitoringDefinition = {
    title: "Monitoring",
    subtitle: "Surveillance et Observabilité",
    description: "Une pratique essentielle du DevOps qui consiste à surveiller en temps réel les performances, la disponibilité et la santé des applications et infrastructures pour détecter rapidement les problèmes et garantir une expérience utilisateur optimale."
}

const monitoringComponents = [
    {
        title: "Métriques",
        description: "Collecte de données quantitatives sur les performances",
        icon: BarChart3,
        color: "from-blue-500 to-cyan-500",
        details: "CPU, mémoire, réseau, latence, throughput, erreurs"
    },
    {
        title: "Logs",
        description: "Enregistrement détaillé des événements système",
        icon: Database,
        color: "from-green-500 to-emerald-500",
        details: "Logs applicatifs, système, sécurité, audit trail"
    },
    {
        title: "Traces",
        description: "Suivi des requêtes à travers les microservices",
        icon: Activity,
        color: "from-purple-500 to-pink-500",
        details: "Tracing distribué, latence end-to-end, goulots d'étranglement"
    },
    {
        title: "Alertes",
        description: "Notifications automatiques en cas d'anomalies",
        icon: Bell,
        color: "from-orange-500 to-red-500",
        details: "Seuils configurables, escalade, notifications multi-canaux"
    }
]

const monitoringBenefits = [
    {
        title: "Détection proactive",
        description: "Identification des problèmes avant impact",
        icon: Eye
    },
    {
        title: "Performance optimisée",
        description: "Amélioration continue des performances",
        icon: TrendingUp
    },
    {
        title: "Disponibilité élevée",
        description: "Réduction du temps d'arrêt",
        icon: Shield
    },
    {
        title: "Prise de décision",
        description: "Données pour l'optimisation",
        icon: Target
    }
]

const monitoringStack = [
    { icon: Server, label: "Infra", color: "text-slate-600" },
    { icon: Monitor, label: "Apps", color: "text-blue-500" },
    { icon: BarChart3, label: "Metrics", color: "text-green-500" },
    { icon: Database, label: "Logs", color: "text-purple-500" },
    { icon: Bell, label: "Alerts", color: "text-orange-500" },
    { icon: Eye, label: "Dashboards", color: "text-cyan-500" }
]

export default function WhatIsMonitoringSlide() {
    return (
        <SlideWrapper>
            <div className="space-y-8">
                <SlideHeader
                    badge="7 • Monitoring"
                    title="Qu'est-ce que le Monitoring ?"
                //subtitle="Comprendre la surveillance et l'observabilité"
                />

                {/* Hero Section - Définition Centrée */}
                <div className="flex items-center justify-center min-h-[60vh]">
                    <Card className="group relative overflow-hidden bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-3xl hover:shadow-3xl transition-all duration-700 max-w-5xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <CardContent className="relative p-6 text-center space-y-12">
                            {/* Icône et Titre Principal */}
                            <div className="flex flex-col items-center gap-8">
                                <div className="p-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl shadow-2xl group-hover:scale-110 transition-transform duration-500">
                                    <Monitor className="h-12 w-12 text-white" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                        {monitoringDefinition.title}
                                    </h3>
                                    <Badge className="px-6 py-3 text-lg bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 border-orange-200 font-semibold rounded-full">
                                        {monitoringDefinition.subtitle}
                                    </Badge>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="max-w-4xl mx-auto">
                                <p className="text-2xl text-slate-700 leading-relaxed font-medium">
                                    {monitoringDefinition.description}
                                </p>
                            </div>

                            {/* Points clés visuels */}
                            <div className="grid md:grid-cols-3 gap-8 mt-16">
                                <div className="flex flex-col items-center gap-4 p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100">
                                    <Eye className="h-12 w-12 text-orange-600" />
                                    <div className="text-center">
                                        <h4 className="text-xl font-bold text-slate-800">Surveillance</h4>
                                        <p className="text-slate-600 text-sm">Temps réel</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-4 p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100">
                                    <BarChart3 className="h-12 w-12 text-orange-600" />
                                    <div className="text-center">
                                        <h4 className="text-xl font-bold text-slate-800">Performance</h4>
                                        <p className="text-slate-600 text-sm">Optimisation</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-4 p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100">
                                    <Shield className="h-12 w-12 text-orange-600" />
                                    <div className="text-center">
                                        <h4 className="text-xl font-bold text-slate-800">Fiabilité</h4>
                                        <p className="text-slate-600 text-sm">Disponibilité</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <style jsx global>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes shimmer {
                    0% {
                        background-position: -1000px 0;
                    }
                    100% {
                        background-position: 1000px 0;
                    }
                }

                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out;
                }

                .animate-slide-in-left {
                    animation: slideInLeft 0.8s ease-out;
                }

                .animate-slide-in-right {
                    animation: slideInRight 0.8s ease-out;
                }

                .animate-scale-in {
                    animation: scaleIn 0.6s ease-out;
                }

                .glass-effect {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .shadow-3xl {
                    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
                }

                .hover\\:shadow-3xl:hover {
                    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
                }

                /* Custom gradient text */
                .gradient-text {
                    background: linear-gradient(135deg, #ea580c, #dc2626);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                /* Smooth transitions */
                * {
                    transition-property: all;
                    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                }

                /* Staggered animation for cards */
                .monitoring-card {
                    animation: fadeInUp 0.8s ease-out both;
                }

                .monitoring-card:nth-child(1) { animation-delay: 0.1s; }
                .monitoring-card:nth-child(2) { animation-delay: 0.2s; }
                .monitoring-card:nth-child(3) { animation-delay: 0.3s; }
                .monitoring-card:nth-child(4) { animation-delay: 0.4s; }
                .monitoring-card:nth-child(5) { animation-delay: 0.5s; }
                .monitoring-card:nth-child(6) { animation-delay: 0.6s; }
            `}</style>
        </SlideWrapper>
    )
}
