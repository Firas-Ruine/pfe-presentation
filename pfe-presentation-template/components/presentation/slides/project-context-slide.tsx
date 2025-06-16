"use client"
import SlideWrapper from "../slide-wrapper"
import SlideHeader from "../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    BookOpen,
} from "lucide-react"

const introductionSections = [
    {
        title: "Contexte du Projet",
        description: "L'évolution rapide des applications mobiles et des technologies cloud a conduit au besoin d'architectures évolutives, modulaires et résilientes. Les systèmes monolithiques traditionnels atteignent souvent leurs limites face à la complexité croissante et aux contraintes opérationnelles.",
        icon: BookOpen,
        color: "from-blue-500 to-cyan-500"
    }
]

export default function ProjectContextSlide() {
    return (
        <SlideWrapper>
            <div className="h-full flex flex-col">
                {/* En-tête */}
                <SlideHeader 
                    badge="Chapitre 1 • Introduction"
                    title="Contexte du Projet"
                    subtitle="Présentation du contexte et des enjeux du projet"
                />

                {/* Contenu principal - parfaitement centré */}
                <div className="flex-1 flex items-center justify-center px-8">
                    <Card className={`w-full max-w-5xl shadow-2xl bg-gradient-to-br ${introductionSections[0].color} p-1`}>
                        <div className="bg-white dark:bg-slate-900 rounded-lg p-16">
                            <CardHeader className="pb-8 text-center">
                                <div className="flex flex-col items-center space-y-6">
                                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${introductionSections[0].color} flex items-center justify-center shadow-lg`}>
                                        <BookOpen className="h-10 w-10 text-white" />
                                    </div>
                                    
                                </div>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-2xl text-foreground leading-relaxed font-medium max-w-4xl mx-auto">
                                    {introductionSections[0].description}
                                </p>
                            </CardContent>
                        </div>
                    </Card>
                </div>

            </div>
        </SlideWrapper>
    )
}
