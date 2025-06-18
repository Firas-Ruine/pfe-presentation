"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { 
    RefreshCw, 
    Target, 
    Users, 
    Calendar,
    CheckCircle,
    ArrowRight
} from "lucide-react"

const scrumEvents = [
    {
        name: "Sprint Planning",
        duration: "2-4h",
        description: "Planification des objectifs du sprint",
        icon: Target,
        color: "text-blue-500"
    },
    {
        name: "Daily Scrum",
        duration: "15min",
        description: "Synchronisation quotidienne de l'équipe",
        icon: Users,
        color: "text-green-500"
    },
    {
        name: "Sprint Review",
        duration: "1-2h",
        description: "Démonstration du travail accompli",
        icon: CheckCircle,
        color: "text-purple-500"
    },
    {
        name: "Sprint Retrospective",
        duration: "1h",
        description: "Réflexion sur l'amélioration continue",
        icon: RefreshCw,
        color: "text-orange-500"
    }
]

export default function ScrumCycleSlide() {
    return (
        <SlideWrapper>
            <div className="h-full flex flex-col">
                <SlideHeader 
                    badge="4 • Méthodologie"
                    title="Cycle Scrum"
                    subtitle="Le processus itératif et les événements Scrum"
                    className="mb-6"
                />

                <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
                    {/* Partie gauche - Image du cycle Scrum */}
                    <div className="lg:col-span-2 flex flex-col justify-center">
                        <Card className="bg-white/95 backdrop-blur border-0 shadow-2xl rounded-2xl overflow-hidden">
                            <CardContent className="p-8">
                                <div className="text-center space-y-6">
                                    <div className="flex items-center justify-center gap-3 mb-6">
                                        <RefreshCw className="h-8 w-8 text-primary animate-spin [animation-duration:3s]" />
                                        <h2 className="text-2xl font-bold text-slate-800">Processus Scrum</h2>
                                    </div>
                                    
                                    {/* Placeholder for Scrum cycle image */}
                                    <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center">
                                        <div className="text-center space-y-4">
                                            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                                <RefreshCw className="h-12 w-12 text-white" />
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-xl font-semibold text-slate-700">Cycle Scrum</h3>
                                                <p className="text-sm text-slate-500 max-w-md">
                                                    Ajoutez ici votre image du cycle Scrum
                                                    <br />
                                                    (sprint planning → daily scrum → sprint review → retrospective)
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Alternative: Text-based cycle representation */}
                                    <div className="grid grid-cols-2 gap-4 mt-6">
                                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold text-sm">1</span>
                                            </div>
                                            <span className="text-sm font-medium text-blue-700">Sprint Planning</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold text-sm">2</span>
                                            </div>
                                            <span className="text-sm font-medium text-green-700">Daily Scrum</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                                            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold text-sm">3</span>
                                            </div>
                                            <span className="text-sm font-medium text-purple-700">Sprint Review</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                                            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold text-sm">4</span>
                                            </div>
                                            <span className="text-sm font-medium text-orange-700">Retrospective</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Partie droite - Événements Scrum */}
                    <div className="flex flex-col justify-center">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-3">
                                <Calendar className="h-8 w-8 text-primary" />
                                Événements Scrum
                            </h2>
                            
                            <div className="space-y-4">
                                {scrumEvents.map((event, index) => (
                                    <Card key={index} className="bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                        <CardContent className="p-4">
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0">
                                                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                        <event.icon className={`h-6 w-6 ${event.color}`} />
                                                    </div>
                                                </div>
                                                <div className="flex-1 space-y-1">
                                                    <div className="flex items-center justify-between">
                                                        <h3 className="font-semibold text-slate-800">{event.name}</h3>
                                                        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                                                            {event.duration}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-slate-600 leading-relaxed">
                                                        {event.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Sprint duration info */}
                            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                                <CardContent className="p-4 text-center">
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <RefreshCw className="h-5 w-5 text-primary" />
                                        <span className="font-semibold text-primary">Sprint Duration</span>
                                    </div>
                                    <p className="text-sm text-slate-600">
                                        Généralement <strong>2-4 semaines</strong> pour notre projet
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </SlideWrapper>
    )
}
