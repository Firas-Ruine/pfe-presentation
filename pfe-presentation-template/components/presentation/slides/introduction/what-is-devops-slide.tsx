"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    GitBranch,
    Settings,
    Users,
    Rocket,
    Code,
    Server,
    RefreshCw,
    Shield,
    Lightbulb,
    ArrowRight,
    Book
} from "lucide-react"

const devopsDefinition = {
    title: "DevOps",
    subtitle: "Development + Operations",
    description: "Une approche culturelle, organisationnelle et technique qui vise à unifier le développement logiciel (Dev) et l'administration des infrastructures informatiques (Ops) pour raccourcir le cycle de développement et fournir en continu des logiciels de haute qualité."
}

const coreComponents = [
    {
        title: "Culture",
        description: "Collaboration et communication entre équipes",
        icon: Users,
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Automatisation",
        description: "Processus automatisés de build, test et déploiement",
        icon: Settings,
        color: "from-green-500 to-emerald-500"
    },
    {
        title: "Mesure",
        description: "Monitoring et métriques pour l'amélioration continue",
        icon: RefreshCw,
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Partage",
        description: "Partage des responsabilités et des connaissances",
        icon: GitBranch,
        color: "from-orange-500 to-red-500"
    }
]

const traditionalVsDevOps = [
    {
        traditional: "Silos organisationnels",
        devops: "Équipes collaboratives",
        icon: Users
    },
    {
        traditional: "Déploiements manuels",
        devops: "Déploiement automatisé",
        icon: Rocket
    },
    {
        traditional: "Cycles longs",
        devops: "Livraison continue",
        icon: RefreshCw
    },
    {
        traditional: "Réaction aux problèmes",
        devops: "Prévention proactive",
        icon: Shield
    }
]

export default function WhatIsDevOpsSlide() {
    return (
        <SlideWrapper>
            <div className="h-full flex flex-col">
                {/* En-tête - réduit */}
                <SlideHeader 
                    badge="1 • Introduction"
                    title="Qu'est-ce que le DevOps ?"
                    subtitle="Comprendre la philosophie du DevOps"
                    className="mb-4"
                />

                <div className="flex-1 overflow-hidden">
                    {/* Layout horizontal - Definition à gauche, Piliers à droite */}
                    <div className="h-full grid grid-cols-2 gap-8 px-4">

                        {/* Partie gauche - Définition DevOps */}
                        <div className="flex flex-col justify-center">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-3">
                                    <Book className="h-8 w-8 text-primary" />
                                    Définition du DevOps
                                </h2>
                                <Card className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-0 shadow-xl rounded-2xl">
                                    <CardContent className="p-8">
                                        <div className="text-center space-y-6">

                                            <div className="flex items-center justify-center gap-4">
                                                <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
                                                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 shadow-lg">
                                                        <Code className="h-14 w-14 text-white" />
                                                    </div>
                                                    <div className="text-center mt-3">
                                                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Dev</span>
                                                    </div>
                                                </div>

                                                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                                                    <span className="text-xl font-bold text-white">+</span>
                                                </div>

                                                <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
                                                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 shadow-lg">
                                                        <Server className="h-14 w-14 text-white" />
                                                    </div>
                                                    <div className="text-center mt-3">
                                                        <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">Ops</span>
                                                    </div>
                                                </div>

                                                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                                                    <span className="text-xl font-bold text-white">=</span>
                                                </div>

                                                <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
                                                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 shadow-lg">
                                                        <Lightbulb className="h-14 w-14 text-white" />
                                                    </div>
                                                    <div className="text-center mt-3">
                                                        <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">DevOps</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-primary/10 rounded-full">
                                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                                                <span className="text-sm font-medium text-primary uppercase tracking-wider">Définition</span>
                                            </div>

                                            <p className="text-lg leading-relaxed font-medium text-foreground">
                                                {devopsDefinition.description}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                        {/* Partie droite - Piliers fondamentaux en 2x2 */}
                        <div className="flex flex-col justify-center">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-3">
                                    <Settings className="h-8 w-8 text-primary" />
                                    Piliers Fondamentaux
                                </h2>
                                <div className="grid grid-cols-2 gap-4">
                                    {coreComponents.map((component, index) => (
                                        <Card key={index} className="shadow-xl hover:shadow-2xl transition-all duration-300 group">
                                            <div className="p-6 text-center space-y-3">
                                                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${component.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                    <component.icon className="h-8 w-8 text-white" />
                                                </div>
                                                <div className="space-y-2">
                                                    <h3 className="text-lg font-bold text-foreground">{component.title}</h3>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">{component.description}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SlideWrapper>
    )
}
