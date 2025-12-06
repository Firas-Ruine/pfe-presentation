"use client"
import SlideWrapper from "../../slide-wrapper"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UserCircle, Briefcase, CalendarDays, PlayCircle } from "lucide-react"
import Image from "next/image"

interface HeroSlideProps {
  onStartPresentation: () => void
}

export default function HeroSlide({ onStartPresentation }: HeroSlideProps) {
  return (
    <SlideWrapper className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 dark:from-primary/20 dark:via-slate-900 dark:to-secondary/20">
      <div className="h-full flex flex-col justify-center items-center text-center space-y-6">
        <Badge variant="secondary" className="px-4 py-1.5 text-sm">
          <CalendarDays className="mr-2 h-4 w-4" />
          Academic Year: 2024-2025
        </Badge>

        {/* AutoSphere Logo */}
        <div className="relative w-32 h-32 mb-2">
          <Image
            src="/Logo-autoshpere.png"
            alt="AutoSphere Logo"
            fill
            className="object-contain"
          />
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent max-w-5xl leading-tight">
          AutoSphere: Intelligent Self-Healing System for Cloud Infrastructure
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
          AI-Driven Agentic Automation for Incident Detection, Investigation, and Remediation
        </p>

        <p className="text-lg md:text-xl font-medium">
          Presented by: <span className="font-bold text-primary">BenKhalifa Mohamed Naceur</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-base">
                <UserCircle className="mr-2 h-5 w-5 text-primary" />
                Academic Supervisor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Mm Guesmi Latifa</p>
              <p className="font-semibold">Esprit</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-base">
                <Briefcase className="mr-2 h-5 w-5 text-primary" />
                Professional Supervisor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Mr. Riadh Rezig</p>
              <p className="font-semibold">Maison du Web</p>
            </CardContent>
          </Card>
        </div>

        <Button onClick={onStartPresentation} size="lg" className="mt-4 text-lg px-8 py-6">
          <PlayCircle className="mr-2 h-6 w-6" />
          Start Presentation
        </Button>
      </div>
    </SlideWrapper>
  )
}

HeroSlide.defaultProps = {
  onStartPresentation: () => console.log("Start presentation clicked"),
}
