"use client"
import SlideWrapper from "../slide-wrapper"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { UserCircle, Briefcase, Building, CalendarDays, PlayCircle } from "lucide-react"

interface HeroSlideProps {
  onStartPresentation: () => void
}

export default function HeroSlide({ onStartPresentation }: HeroSlideProps) {
  return (
    <SlideWrapper className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 dark:from-primary/20 dark:via-slate-900 dark:to-secondary/20 animate-gradient-fade bg-200%">
      <div className="text-center space-y-8">
        <Badge variant="secondary" className="px-4 py-1.5 text-sm">
          <CalendarDays className="mr-2 h-4 w-4" />
          Année Universitaire: 2024-2025
        </Badge>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gradient bg-gradient-to-r from-primary to-secondary">
        Transformation DevOps et Déploiement Cloud d’une Architecture Microservices pour une Application Mobile
        </h1>

        <p className="text-xl md:text-2xl font-medium text-foreground">
          Présenté par: <span className="font-bold text-primary">Firas Ruine</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <UserCircle className="mr-2 h-6 w-6 text-primary" />
                Encadrant Académique
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">M. Firas Khlil</p>
              <p className="font-semibold">ITBS</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Briefcase className="mr-2 h-6 w-6 text-primary" />
                Encadrant Professionnel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">M. Riadh Rezig</p>
              <p className="font-semibold">Maison du Web</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </SlideWrapper>
  )
}

// Default props for Next.js
HeroSlide.defaultProps = {
  onStartPresentation: () => console.log("Start presentation clicked"),
}
