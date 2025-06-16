"use client"
import SlideWrapper from "../../slide-wrapper"
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
  Building,
  AlertTriangle,
  Rocket,
  Wrench,
  TestTube,
  Award,
  GraduationCap,
} from "lucide-react"

interface NavigationSlideProps {
  onNavigate: (slideIndex: number) => void
}

const sections = [
  { title: "Introduction", icon: BookOpen, time: "5 min", targetSlide: 2 },
  { title: "Contexte général", icon: Building, time: "8 min", targetSlide: 7 },
  { title: "Problématique et Besoins Métier", icon: AlertTriangle, time: "10 min", targetSlide: 8 },
  { title: "Solution proposée et Architecture Cible", icon: Rocket, time: "12 min", targetSlide: 11 },
  { title: "Méthodologie & Approche d'Ingénierie", icon: Settings, time: "10 min", targetSlide: 10 },
  { title: "Conception & Implémentation des Microservices", icon: Code, time: "15 min", targetSlide: 12 },
  { title: "CI/CD, Monitoring, Tests & Sécurité", icon: TestTube, time: "15 min", targetSlide: 18 },
  { title: "Validation, Résultats et Retours", icon: Award, time: "12 min", targetSlide: 22 },
  { title: "Conclusion et Perspectives", icon: GraduationCap, time: "8 min", targetSlide: 26 },
]

export default function NavigationSlide({ onNavigate }: NavigationSlideProps) {
  return (
    <SlideWrapper className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20">
      <div className="h-full flex flex-col justify-center space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-7xl font-bold mb-4 text-primary">Plan </h1>
          
        </div>
        
        <div className="flex-1 grid grid-cols-3 gap-4 max-w-6xl mx-auto w-full">
          {sections.map((section, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer group bg-card/80 backdrop-blur-sm border border-border/50 h-full"
              onClick={() => onNavigate(section.targetSlide)}
            >
              <CardHeader className="flex flex-col items-center text-center pb-3 space-y-2">
                <div className="flex items-center justify-between w-full">
                  <Badge variant="secondary" className="text-md px-3 py-1 text-white bg-secondary/80 font-800" >
                    {index + 1}
                  </Badge>
                </div>
                <section.icon className="h-12 w-12 text-secondary group-hover:text-primary transition-colors" />
                <CardTitle className="text-lg font-bold text-primary group-hover:text-secondary transition-colors leading-tight">
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-center">
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity w-full text-xs">
                  Accéder <ChevronRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </SlideWrapper>
  )
}

NavigationSlide.defaultProps = {
  onNavigate: (slideIndex: number) => console.log(`Navigate to slide ${slideIndex}`),
}
