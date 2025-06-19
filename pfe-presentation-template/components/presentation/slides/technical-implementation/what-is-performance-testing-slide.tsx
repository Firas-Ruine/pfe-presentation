"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Zap,
    Clock,
    Users,
    TrendingUp,
    Activity,
    Target,
    AlertTriangle,
    BarChart3,
    Server,
    Gauge,
    ArrowRight,
    CheckCircle,
    Database,
    Timer
} from "lucide-react"
import React from "react"

const performanceTestingDefinition = {
    title: "Tests de Performance",
    subtitle: "Stress Testing & Load Testing",
    description: "Une pratique de test essentielle qui consiste à évaluer la capacité d'un système à fonctionner sous différentes charges de travail, identifier les goulots d'étranglement et garantir des performances optimales dans des conditions réelles d'utilisation."
}

const testingTypes = [
    {
        title: "Load Testing",
        description: "Test avec charge normale attendue",
        icon: Users,
        color: "from-blue-500 to-cyan-500",
        details: "Simulation du nombre d'utilisateurs typique"
    },
    {
        title: "Stress Testing", 
        description: "Test au-delà des limites normales",
        icon: Zap,
        color: "from-orange-500 to-red-500",
        details: "Identification du point de rupture du système"
    },
    {
        title: "Volume Testing",
        description: "Test avec de gros volumes de données",
        icon: Database,
        color: "from-green-500 to-emerald-500",
        details: "Performance avec grandes bases de données"
    },
    {
        title: "Endurance Testing",
        description: "Test de performance sur la durée",
        icon: Timer,
        color: "from-purple-500 to-pink-500",
        details: "Détection des fuites mémoire et dégradations"
    }
]

const keyMetrics = [
    {
        title: "Temps de Réponse",
        value: "< 200ms",
        icon: Clock,
        description: "Latence moyenne des requêtes API"
    },
    {
        title: "Débit",
        value: "1000 req/s",
        icon: TrendingUp,
        description: "Nombre de requêtes traitées par seconde"
    },
    {
        title: "Taux d'Erreur",
        value: "< 0.1%",
        icon: AlertTriangle,
        description: "Pourcentage d'erreurs acceptables"
    },
    {
        title: "Utilisation CPU",
        value: "< 80%",
        icon: Server,
        description: "Utilisation processeur sous charge"
    }
]

const testingBenefits = [
    {
        title: "Identification Précoce",
        description: "Détection des goulots d'étranglement avant la production",
        icon: Target
    },
    {
        title: "Optimisation",
        description: "Amélioration des performances et de la scalabilité",
        icon: Gauge
    },
    {
        title: "Fiabilité",
        description: "Assurance de la stabilité sous charge",
        icon: CheckCircle
    },
    {
        title: "Planification",
        description: "Dimensionnement optimal de l'infrastructure",
        icon: BarChart3
    }
]

export default function WhatIsPerformanceTestingSlide() {
    return (
        <SlideWrapper className="bg-gradient-to-br from-gray-50 via-white to-green-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-green-950/20">
            <div className="h-full flex flex-col space-y-8">
                {/* En-tête */}
                <SlideHeader 
                    badge="8 • Tests de Performance"
                    title="Qu'est-ce que les Tests de Performance ?"
                    subtitle="Stress Testing et optimisation des performances"
                />

                  <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Definition */}
          <div className="lg:col-span-5 space-y-6">
            {/* Hero Definition Card */}
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-teal-700">{performanceTestingDefinition.title}</CardTitle>
                {/* <Badge variant="outline" className="mt-1 text-sm px-3 py-1 border-slate-300 text-slate-600">
                  {performanceTestingDefinition.subtitle}
                </Badge> */}
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center leading-relaxed">{performanceTestingDefinition.description}</p>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-slate-800">
                  <Activity className="h-5 w-5 text-teal-600" />
                  Métriques Clés
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {keyMetrics.map((metric, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200"
                  >
                    <div className="flex items-center gap-3">
                      <metric.icon className="h-5 w-5 text-teal-600 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-sm text-slate-700">{metric.title}</div>
                        <div className="text-xs text-slate-500">{metric.description}</div>
                      </div>
                    </div>
                    <Badge className="bg-teal-100 text-teal-700 font-semibold text-xs px-2.5 py-1">
                      {metric.value}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Types & Benefits */}
          <div className="lg:col-span-7 space-y-6">
            {/* Testing Types */}
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-slate-800">
                  <Target className="h-6 w-6 text-teal-600" />
                  Types de Tests de Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {testingTypes.map((type, index) => (
                    <div
                      key={index}
                      className="group p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <div className={`p-2 rounded-lg bg-teal-100`}>
                          <type.icon className="h-5 w-5 text-teal-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm text-slate-700 group-hover:text-teal-600 transition-colors">
                            {type.title}
                          </h3>
                          <p className="text-xs text-slate-500 mt-0.5">{type.description}</p>
                        </div>
                      </div>
                      <div className="text-xs text-slate-500 bg-slate-100 rounded-md p-2">{type.details}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-slate-800">
                  <CheckCircle className="h-6 w-6 text-teal-600" />
                  Avantages des Tests de Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {testingBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="group flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200 hover:shadow-sm transition-shadow duration-300"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="p-2 bg-teal-100 rounded-lg group-hover:bg-teal-200/70 transition-colors">
                        <benefit.icon className="h-4 w-4 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-700">{benefit.title}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">{benefit.description}</p>
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
