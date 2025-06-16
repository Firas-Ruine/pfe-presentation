import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    CheckCircle,
    TrendingUp,
    Container,
    Network,
    Users,
    Settings,
    Zap,
    Shield,
    Database,
    Server,
    GitBranch,
    MonitorSpeaker,
    BarChart3,
    Target,
    ShieldCheck,
    Rocket,
    Sparkles
} from "lucide-react"

const microservicesBenefitsData = [
    { icon: Container, text: "Services isolés et indépendants pour un développement agile", color: "text-green-600" },
    {
        icon: Network,
        text: "Résilience accrue et haute disponibilité grâce à la décentralisation",
        color: "text-green-600",
    },
    { icon: Users, text: "Équipes autonomes et spécialisées par service", color: "text-green-600" },
    {
        icon: Settings,
        text: "Flexibilité technologique pour choisir les meilleurs outils par service",
        color: "text-green-600",
    },
    { icon: ShieldCheck, text: "Sécurité améliorée par l'isolation des composants", color: "text-green-600" },
    { icon: Rocket, text: "Scalabilité granulaire et optimisée par service", color: "text-green-600" },
]

const impactMetricsData = [
    {
        category: "Performance & Scalabilité",
        icon: TrendingUp,
        metrics: [
            { label: "Utilisateurs concurrents", before: "500", after: "3000+", improvement: "+500%" },
            { label: "Temps de réponse moyen", before: "2.5s", after: "<500ms", improvement: "-80%" },
            { label: "Disponibilité du service", before: "95%", after: "99.98%", improvement: "+5.2%" },
        ],
    },
    {
        category: "Agilité & Déploiement",
        icon: Zap,
        metrics: [
            { label: "Fréquence de release", before: "1/mois", after: "Plusieurs/jour", improvement: "Continue" },
            { label: "Temps de déploiement", before: "4h", after: "<15min", improvement: "-93.75%" },
            { label: "Temps de rollback", before: "2h", after: "<5min", improvement: "-95.8%" },
        ],
    },
    {
        category: "Efficacité de Développement",
        icon: Target, // Using Target as per original data, could be Users or Settings too
        metrics: [
            {
                label: "Time to market (nouvelles fonctionnalités)",
                before: "6 mois",
                after: "2 semaines",
                improvement: "-91.6%",
            },
            { label: "Couverture de tests automatisés", before: "45%", after: ">90%", improvement: "+100%" },
            { label: "Détection précoce des bugs", before: "Production", after: "CI/CD (Pré-prod)", improvement: "Proactif" },
        ],
    },
]

export default function ProposedSolutionSlide() {
    return (
        <SlideWrapper>
            <div className="h-full flex flex-col">

                <SlideHeader
                    badge="2 • Contexte Général"
                    title="Solution Proposée"
                    subtitle="Solution moderne et évolutive pour répondre aux défis identifiés"
                />

                {/* Layout Principal - 2 Colonnes Optimisées */}
                <div className="flex-1 grid grid-cols-1 gap-4 min-h-0">

                    <Card className="w-full bg-white border border-slate-200 shadow-xl rounded-xl overflow-hidden">
                        <CardHeader className="bg-green-50 p-6 border-b border-green-200">
                            <div className="flex items-center mb-2">
                                <Sparkles className="h-8 w-8 text-green-600 mr-3" />
                                <CardTitle className="text-2xl md:text-3xl font-bold text-green-800">
                                    Vers une Architecture Microservices Performante
                                </CardTitle>
                            </div>
                            <p className="text-green-700 text-sm md:text-base">
                                La transition vers une architecture microservices débloquera l'agilité, la scalabilité et l'innovation
                                nécessaires à la croissance future.
                            </p>
                        </CardHeader>

                        <CardContent className="p-6 md:p-8 space-y-8">
                            {/* Section: Bénéfices Clés */}
                            <div>
                                <h3 className="text-xl font-semibold text-slate-700 mb-4 flex items-center">
                                    <CheckCircle className="h-6 w-6 mr-2 text-green-500" />
                                    Bénéfices Clés de l'Architecture Microservices
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {microservicesBenefitsData.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start p-3 bg-green-50/70 rounded-lg border border-green-200/80 hover:border-green-300 transition-colors"
                                        >
                                            <benefit.icon className={`h-5 w-5 mr-3 mt-1 flex-shrink-0 ${benefit.color}`} />
                                            <span className="text-sm font-medium text-slate-700">{benefit.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Section: Impacts Attendus et Métriques Clés */}
                            <div>
                                <h3 className="text-xl font-semibold text-slate-700 mb-5 flex  items-center">
                                    <BarChart3 className="h-6 w-6 mr-2 text-green-500" />
                                    Impacts Attendus et Métriques Clés
                                </h3>
                                <div className=" grid grid-cols-3 gap-3">
                                    {impactMetricsData.map((categoryData) => (
                                        <div key={categoryData.category} className="bg-white border border-slate-200 rounded-lg p-4 shadow-md">
                                            <div className="flex items-center mb-3">
                                                <div className="p-1.5 bg-green-100 rounded-md mr-3">
                                                    <categoryData.icon className="h-5 w-5 text-green-600" />
                                                </div>
                                                <h4 className="text-lg font-semibold text-slate-800">{categoryData.category}</h4>
                                            </div>
                                            <ul className="space-y-2 text-sm">
                                                {categoryData.metrics.map((metric) => (
                                                    <li key={metric.label} className="grid grid-cols-3 gap-2 items-center">
                                                        <span className="text-slate-600 font-medium col-span-1">{metric.label}:</span>
                                                        <div className="col-span-2 flex items-center justify-between">
                                                            <div className="flex items-center">
                                                                <Badge variant="secondary" className="mr-2 text-xs">
                                                                    Avant: {metric.before}
                                                                </Badge>
                                                                <Badge variant="default" className="bg-green-500 hover:bg-green-600 text-white text-xs">
                                                                    Après: {metric.after}
                                                                </Badge>
                                                            </div>
                                                            <span className="text-green-600 font-bold text-xs sm:text-sm">({metric.improvement})</span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </SlideWrapper>
    )
}
