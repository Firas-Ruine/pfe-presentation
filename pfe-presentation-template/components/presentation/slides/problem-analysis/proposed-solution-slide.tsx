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
    Sparkles,
    ArrowRight
} from "lucide-react"

const microservicesBenefitsData = [
    { icon: Container, text: "Extraction des fonctionnalités critiques (alertes/notifications)", color: "text-green-600" },
    {
        icon: Network,
        text: "Communication asynchrone via RabbitMQ entre services",
        color: "text-green-600",
    },
    { icon: Shield, text: "Infrastructure cloud scalable et résiliente", color: "text-green-600" },
    {
        icon: Zap,
        text: "Pipelines CI/CD automatisés pour tests et déploiements",
        color: "text-green-600",
    },
    { icon: TrendingUp, text: "Performances optimisées en situation de charge élevée", color: "text-green-600" },
    { icon: Settings, text: "Architecture moderne et évolutive pour l'avantage concurrentiel", color: "text-green-600" },
]

const impactMetricsData = [
    {
        category: "Scalabilité & Performances",
        icon: TrendingUp,
        color: "blue",
        metrics: [
            { label: "Pics de charge", before: "Saturation fréquente", after: "Auto-scaling cloud", improvement: "Élastique" },
            { label: "Temps de réponse", before: "Dégradés en charge", after: "Optimisés constants", improvement: "Stable" },
        ]
    },
    {
        category: "Résilience & Isolation",
        icon: Shield,
        color: "green",
        metrics: [
            { label: "Composants critiques", before: "Couplage fort", after: "Services isolés", improvement: "Isolation" },
            { label: "Résilience système", before: "Point de défaillance unique", after: "Fault tolerance", improvement: "Robuste" },
        ]
    },
    {
        category: "Expérience Utilisateur",
        icon: Zap,
        color: "purple",
        metrics: [
            { label: "Expérience utilisateur", before: "Variable", after: "Prévisible", improvement: "Constante" },
            { label: "Gestion de charge", before: "Limitations", after: "Haute disponibilité", improvement: "Scalable" },
        ]
    },
    {
        category: "Agilité & DevOps",
        icon: Rocket,
        color: "green",
        metrics: [
            { label: "Déploiements", before: "Manuels lents", after: "CI/CD automatisés", improvement: "Accélérés" },
            { label: "Maintenance", before: "Complexe monolithique", after: "Modulaire évolutive", improvement: "Simplifiée" },
        ]
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
                                <h3 className="text-xl font-semibold text-slate-700 mb-5 flex items-center">
                                    <BarChart3 className="h-6 w-6 mr-2 text-green-500" />
                                    Impacts Attendus et Métriques Clés
                                </h3>
                                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                                    {impactMetricsData.map((categoryData) => (
                                        <div
                                            key={categoryData.category}
                                            className={`bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1 border-t-4 
                                                ${categoryData.color === "green" && "border-t-green-500"}
                                                ${categoryData.color === "blue" && "border-t-blue-500"}
                                                ${categoryData.color === "purple" && "border-t-purple-500"}
                                            `}
                                        >
                                            <div className="p-5">
                                                <div className="flex items-center mb-4">
                                                    <div
                                                        className={`p-2 rounded-lg mr-3
                                                            ${categoryData.color === "green" && "bg-green-100"}
                                                            ${categoryData.color === "blue" && "bg-blue-100"}
                                                            ${categoryData.color === "purple" && "bg-purple-100"}
                                                        `}
                                                    >
                                                        <categoryData.icon
                                                            className={`h-6 w-6 
                                                                ${categoryData.color === "green" && "text-green-600"}
                                                                ${categoryData.color === "blue" && "text-blue-600"}
                                                                ${categoryData.color === "purple" && "text-purple-600"}
                                                            `}
                                                        />
                                                    </div>
                                                    <h4 className="text-lg font-bold text-slate-800">{categoryData.category}</h4>
                                                </div>
                                                <div className="space-y-4">
                                                    {categoryData.metrics.map((metric) => (
                                                        <div key={metric.label}>
                                                            <div className="text-sm font-semibold text-slate-600 mb-2">{metric.label}</div>
                                                            <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg">
                                                                <div className="flex items-center space-x-2 text-sm">
                                                                    <span className="text-slate-500 font-medium">{metric.before}</span>
                                                                    <ArrowRight className="h-4 w-4 text-slate-400" />
                                                                    <span className="text-slate-800 font-bold">{metric.after}</span>
                                                                </div>
                                                                <Badge
                                                                    className={`text-xs font-bold
                                                                        ${categoryData.color === "green" && "bg-green-500 hover:bg-green-600"}
                                                                        ${categoryData.color === "blue" && "bg-blue-500 hover:bg-blue-600"}
                                                                        ${categoryData.color === "purple" && "bg-purple-500 hover:bg-purple-600"}
                                                                    `}
                                                                >
                                                                    {metric.improvement}
                                                                </Badge>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
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
