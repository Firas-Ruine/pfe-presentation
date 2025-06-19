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

export default function MonitoringComponentsSlide() {
    return (
        <SlideWrapper>
      <div className="space-y-8">
                    <SlideHeader
                        badge="7 • Monitoring"
                        title="Piliers de l'Observabilité"
                        subtitle="Composants et avantages du monitoring"
                    />

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                        {/* Piliers de l'Observabilité */}
                        <div className="space-y-8">
                            <div className="text-center mb-8">
                                <h3 className="text-3xl font-bold text-slate-800 mb-2">Les 4 Piliers</h3>
                                <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full" />
                            </div>
                            
                            <div className="space-y-6">
                                {monitoringComponents.map((component, index) => (
                                    <Card
                                        key={component.title}
                                        className="group relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl rounded-2xl transition-all duration-500 transform hover:-translate-y-2"
                                        style={{
                                            animationDelay: `${index * 200}ms`
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <CardContent className="relative p-8">
                                            <div className="flex items-start gap-6">
                                                <div className="relative">
                                                    <div className="p-4 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-500">
                                                        <component.icon className="h-8 w-8 text-orange-600" />
                                                    </div>
                                                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500" />
                                                </div>
                                                <div className="flex-1 space-y-3">
                                                    <h4 className="text-xl font-bold text-slate-800 group-hover:text-orange-700 transition-colors duration-300">
                                                        {component.title}
                                                    </h4>
                                                    <p className="text-slate-600 leading-relaxed">
                                                        {component.description}
                                                    </p>
                                                    <p className="text-sm text-orange-600/80 font-medium">
                                                        {/* {component.details} */}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Avantages et Stack */}
                        <div className="space-y-8">
                            {/* Avantages */}
                            <div className="space-y-6">
                                <div className="text-center mb-8">
                                    <h3 className="text-3xl font-bold text-slate-800 mb-2">Avantages Clés</h3>
                                    <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full" />
                                </div>

                                <div className="space-y-6">
                                {monitoringBenefits.map((benefit, index) => (
                                    <Card
                                        key={benefit.title}
                                        className="group relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl rounded-2xl transition-all duration-500 transform hover:-translate-y-2"
                                        style={{
                                            animationDelay: `${index * 200}ms`
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <CardContent className="relative p-8">
                                            <div className="flex items-start gap-6">
                                                <div className="relative">
                                                    <div className="p-4 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-500">
                                                        <benefit.icon className="h-8 w-8 text-orange-600" />
                                                    </div>
                                                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500" />
                                                </div>
                                                <div className="flex-1 space-y-3">
                                                    <h4 className="text-xl font-bold text-slate-800 group-hover:text-orange-700 transition-colors duration-300">
                                                        {benefit.title}
                                                    </h4>
                                                    <p className="text-slate-600 leading-relaxed">
                                                        {benefit.description}
                                                    </p>
                                                    <p className="text-sm text-orange-600/80 font-medium">
                                                        {/* {benefit.details} */}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                                
                            
                            </div>
                        </div>
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

                .shadow-3xl {
                    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
                }

                .hover\\:shadow-3xl:hover {
                    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
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
