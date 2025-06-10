"use client"
import SlideWrapper from "../slide-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Target,
  Settings,
  Code,
  BarChart2,
  CheckCircle,
  Clock,
  Users,
  Presentation,
  HelpCircle,
  ThumbsUp,
  ChevronRight,
} from "lucide-react"

interface NavigationSlideProps {
  onNavigate: (slideIndex: number) => void
}

const sections = [
  { title: "Introduction & Contexte", icon: BookOpen, time: "10 min", targetSlide: 2 }, // Company Context is slide 3 (index 2)
  { title: "Problématique & Objectifs", icon: Target, time: "15 min", targetSlide: 3 }, // Problem Statement is slide 4 (index 3)
  { title: "Méthodologie & Architecture", icon: Settings, time: "20 min", targetSlide: 5 }, // Methodology is slide 6 (index 5)
  { title: "Développement & Implémentation", icon: Code, time: "25 min", targetSlide: 8 }, // Sprint 1 is slide 9 (index 8)
  { title: "Résultats & Performances", icon: BarChart2, time: "15 min", targetSlide: 12 }, // Sprint 6 is slide 13 (index 12)
  { title: "Conclusion & Perspectives", icon: CheckCircle, time: "10 min", targetSlide: 17 }, // Key Achievements is slide 18 (index 17)
]

export default function NavigationSlide({ onNavigate }: NavigationSlideProps) {
  return (
    <SlideWrapper>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Plan de la Présentation</h2>
        <p className="text-lg text-muted-foreground">Naviguez à travers les sections clés de notre projet.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <Card
            key={index}
            className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer group bg-card/80 backdrop-blur-sm border border-border/50"
            onClick={() => onNavigate(section.targetSlide)}
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xl font-semibold text-primary group-hover:text-secondary transition-colors">
                {section.title}
              </CardTitle>
              <section.icon className="h-8 w-8 text-secondary group-hover:text-primary transition-colors" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <Badge variant="outline" className="group-hover:bg-accent transition-colors">
                  <Clock className="mr-1.5 h-4 w-4" /> {section.time}
                </Badge>
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  Aller à la section <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SlideWrapper>
  )
}

NavigationSlide.defaultProps = {
  onNavigate: (slideIndex: number) => console.log(`Navigate to slide ${slideIndex}`),
}
