"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    GitBranch,
    Settings,
    TestTube,
    Rocket,
    Code,
    Server,
    RefreshCw,
    Shield,
    Lightbulb,
    ArrowRight,
    Book,
    Package,
    CheckCircle,
    Play,
    Monitor
} from "lucide-react"
import React from "react"

const cicdDefinition = {
    title: "CI/CD",
    subtitle: "Continuous Integration / Continuous Deployment",
    description: "Une méthodologie de développement logiciel qui consiste à intégrer régulièrement les modifications de code dans un référentiel partagé et à automatiser le processus de déploiement pour livrer des applications de manière rapide, fiable et sécurisée."
}

const cicdComponents = [
    {
        title: "Continuous Integration",
        description: "Intégration continue du code avec tests automatisés",
        icon: GitBranch,
        color: "from-blue-500 to-cyan-500",
        details: "Fusion fréquente des modifications, builds automatiques, tests unitaires"
    },
    {
        title: "Continuous Deployment",
        description: "Déploiement automatisé en production",
        icon: Rocket,
        color: "from-green-500 to-emerald-500",
        details: "Pipeline automatisé, déploiement sans intervention manuelle"
    },
    {
        title: "Quality Gates",
        description: "Contrôles qualité automatisés",
        icon: Shield,
        color: "from-purple-500 to-pink-500",
        details: "Tests de sécurité, analyse de code, validation des performances"
    },
    {
        title: "Monitoring",
        description: "Surveillance continue des applications",
        icon: Monitor,
        color: "from-orange-500 to-red-500",
        details: "Métriques en temps réel, alertes, observabilité complète"
    }
]

const cicdBenefits = [
    {
        title: "Vitesse de livraison",
        description: "Réduction du time-to-market",
        icon: RefreshCw
    },
    {
        title: "Qualité du code",
        description: "Détection précoce des bugs",
        icon: CheckCircle
    },
    {
        title: "Fiabilité",
        description: "Déploiements cohérents et reproductibles",
        icon: Shield
    },
    {
        title: "Collaboration",
        description: "Meilleure communication entre équipes",
        icon: Settings
    }
]

export default function WhatIsCicdSlide() {
    return (
        <SlideWrapper>
      <div className="space-y-8">
        <SlideHeader
          badge="6 • CI/CD"
          title="Qu'est-ce que le CI/CD ?"
          subtitle="Comprendre l'intégration et le déploiement continus"
          className="mb-8 px-8 pt-10 md:px-12 md:pt-12"
        />

        <div className="flex-1 overflow-y-auto px-8 md:px-12 pb-12">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
            {/* Partie gauche - Définition CI/CD */}
            <div className="flex flex-col space-y-8">

              <Card className="w-full bg-card border border-border/70 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="text-center space-y-3">
                    <h3 className="text-4xl font-bold text-primary">{cicdDefinition.title}</h3>
                    <Badge
                      variant="outline"
                      className="text-sm font-medium border-primary/30 text-primary bg-primary/5 px-3 py-1"
                    >
                      {cicdDefinition.subtitle}
                    </Badge>
                  </div>
                  <p className="text-md text-muted-foreground leading-relaxed text-center">
                    {cicdDefinition.description}
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-6 pt-6">
                <h3 className="text-xl font-semibold text-center">Avantages clés</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  {cicdBenefits.map((benefit) => (
                    <Card
                      key={benefit.title}
                      className="bg-card border border-border/50 rounded-lg shadow-xs hover:border-border transition-colors duration-300"
                    >
                      <CardContent className="p-5">
                        <div className="flex items-center gap-4">
                          <div className="p-2.5 bg-muted rounded-lg text-primary">
                            <benefit.icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <p className="text-base font-medium">{benefit.title}</p>
                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Partie droite - Composants CI/CD */}
            <div className="flex flex-col space-y-5">

              <div className="space-y-2">
                {cicdComponents.map((component) => (
                  <Card
                    key={component.title}
                    className="bg-card border border-border/50 rounded-lg shadow-xs hover:border-border transition-colors duration-300"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-muted rounded-lg text-primary">
                          <component.icon className="h-7 w-7" />
                        </div>
                        <div className="flex-1 space-y-1.5">
                          <h3 className="font-semibold text-lg">{component.title}</h3>
                          <p className="text-sm text-muted-foreground">{component.description}</p>
                          <p className="text-xs text-muted-foreground/80 pt-1">
                            <em>{component.details}</em>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-muted/50 border border-dashed border-border/70 rounded-lg mt-2">
                <CardHeader className="pb-3 pt-5">
                  <CardTitle className="text-lg font-semibold text-center">Pipeline CI/CD</CardTitle>
                </CardHeader>
                <CardContent className="p-5">
                  <div className="flex items-center justify-around text-sm text-muted-foreground flex-wrap gap-x-4 gap-y-3">
                    {[
                      { icon: Code, label: "Code" },
                      { icon: TestTube, label: "Test" },
                      { icon: Package, label: "Build" },
                      { icon: Play, label: "Deploy" },
                      { icon: Monitor, label: "Monitor" },
                    ].map((item, idx, arr) => (
                      <React.Fragment key={item.label}>
                        <div className="flex flex-col items-center text-center gap-1.5">
                          <item.icon className="h-6 w-6 text-primary" />
                          <span className="text-xs font-medium text-foreground">{item.label}</span>
                        </div>
                        {idx < arr.length - 1 && (
                          <ArrowRight className="h-4 w-4 text-muted-foreground/70 hidden sm:inline-block" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
    )
}
