"use client"
import SlideWrapper from "../../slide-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Building, Lightbulb, ClipboardList, Calendar, Network, Code, Brain } from "lucide-react"

interface NavigationSlideProps {
  onNavigate: (slideIndex: number) => void
}

const sections = [
  { title: "Introduction", icon: BookOpen, time: "5 min", targetSlide: 2, description: "Context & company", slides: "2-4" },
  { title: "General Context", icon: Building, time: "5 min", targetSlide: 5, description: "Problématique", slides: "5-6" },
  { title: "Proposed Solution", icon: Lightbulb, time: "5 min", targetSlide: 7, description: "AutoSphere overview", slides: "7" },
  { title: "Specifications", icon: ClipboardList, time: "8 min", targetSlide: 8, description: "Requirements & tech", slides: "8-9" },
  { title: "Project Planning", icon: Calendar, time: "5 min", targetSlide: 10, description: "Gantt & milestones", slides: "10-11" },
  { title: "Architecture", icon: Network, time: "25 min", targetSlide: 12, description: "LangGraph, MCP, Policy", slides: "12-23" },
  { title: "Implementation", icon: Code, time: "20 min", targetSlide: 24, description: "Results & testing", slides: "24-31" },
]

export default function NavigationSlide({ onNavigate }: NavigationSlideProps) {
  return (
    <SlideWrapper className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20">
      <div className="h-full flex flex-col justify-center space-y-6">
        <div className="text-center space-y-3">
          <Brain className="h-10 w-10 text-primary mx-auto" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Presentation Outline</h1>
          <p className="text-lg text-muted-foreground">AutoSphere: Intelligent Self-Healing System</p>
          <div className="flex justify-center gap-2">
            <Badge variant="secondary" className="text-sm">Total: ~30 minutes</Badge>
            <Badge variant="secondary" className="text-sm">29 slides</Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl mx-auto w-full">
          {sections.map((section, index) => (
            <Card 
              key={index} 
              className="shadow-lg hover:shadow-xl transition-all cursor-pointer group hover:scale-105" 
              onClick={() => onNavigate(section.targetSlide)}
            >
              <CardHeader className="flex flex-col items-center text-center pb-2 space-y-2">
                <div className="flex items-center justify-between w-full">
                  <Badge variant="secondary" className="text-sm px-3 py-1">{index + 1}</Badge>
                  <Badge variant="outline" className="text-xs">{section.time}</Badge>
                </div>
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <section.icon className="h-6 w-6 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <CardTitle className="text-sm font-bold text-primary">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-center">
                <p className="text-xs text-muted-foreground">{section.description}</p>
                <Badge variant="outline" className="text-xs mt-2">Slides {section.slides}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center text-xs text-muted-foreground">
          Click any section to navigate • Use ← → arrows or Space to move between slides
        </div>
      </div>
    </SlideWrapper>
  )
}

NavigationSlide.defaultProps = {
  onNavigate: (slideIndex: number) => console.log(`Navigate to slide ${slideIndex}`),
}
