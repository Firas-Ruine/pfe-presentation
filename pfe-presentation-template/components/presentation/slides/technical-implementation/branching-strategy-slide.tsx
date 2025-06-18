"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    GitBranch,
    GitMerge,
    CheckCircle,
    Lock,
    Zap,

} from "lucide-react"
import React from "react"


const branches = [
    {
        name: "master",
        title: "Branche Master",
        description: "Version stable en production",
        icon: Lock,
        accentColor: "text-red-500",
        borderColor: "border-red-500/20",
        badgeBg: "bg-red-500/10",
        pipeline: [
            "Build complet",
            "Tests automatisés",
            "Analyse statique (SonarQube)",
            "Scan de sécurité (Trivy)",
            "Mise à jour Argo CD (arvea-prod)",
            "Validation manuelle requise",
        ],
    },
    {
        name: "develop",
        title: "Branche Develop",
        description: "Branche d'intégration principale",
        icon: GitMerge,
        accentColor: "text-blue-500",
        borderColor: "border-blue-500/20",
        badgeBg: "bg-blue-500/10",
        pipeline: [
            "Build automatique",
            "Tests automatisés complets",
            "Analyse statique",
            "Scan de vulnérabilités",
            "Déploiement Argo CD (arvea-staging)",
            "Tests de charge avec K6",
        ],
    },
    {
        name: "feature/fix",
        title: "Branches Feature/Fix",
        description: "Développements unitaires",
        icon: GitBranch,
        accentColor: "text-green-500",
        borderColor: "border-green-500/20",
        badgeBg: "bg-green-500/10",
        pipeline: [
            "Vérifications de style (Captain Hook)",
            "Tests unitaires",
            "Analyse de base",
            "Pipeline complet sur Pull Request",
        ],
    },
]

export default function BranchingStrategySlide() {
    return (
        <SlideWrapper>
                <div className="space-y-12 p-8 md:p-12">
                    <SlideHeader
                        badge="6 • CI/CD"
                        title="Stratégie de Branching"
                        subtitle="Gestion du cycle de vie du code et déclenchement des pipelines"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 ">
            {branches.map((branch) => (
              <Card
                key={branch.name}
                className={`flex flex-col bg-card border ${branch.borderColor} rounded-xl shadow-sm overflow-hidden h-full`}
              >
                {/* Branch Info Section */}
                <div className={`p-6 border-b ${branch.borderColor} ${branch.badgeBg} flex-shrink-0`}>
                  <div className="flex items-center gap-3 mb-3">
                    <branch.icon className={`h-7 w-7 ${branch.accentColor}`} />
                    <h3 className={`text-xl font-bold ${branch.accentColor}`}>{branch.title}</h3>
                  </div>
                  <Badge
                    variant="outline"
                    className={`font-mono text-xs border-transparent ${branch.badgeBg} ${branch.accentColor} px-2 py-0.5`}
                  >
                    {branch.name}
                  </Badge>
                  <p className={`mt-3 text-sm ${branch.accentColor}/80 leading-relaxed`}>{branch.description}</p>
                </div>

                {/* Pipeline Section */}
                <div className="p-6 flex-grow">
                  <h4 className="text-md font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    Pipeline Déclenché
                  </h4>
                  <ul className="space-y-2.5">
                    {branch.pipeline.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

                </div>

        </SlideWrapper>
    )
}
