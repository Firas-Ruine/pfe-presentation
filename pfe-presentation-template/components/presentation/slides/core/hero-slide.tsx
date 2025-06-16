"use client"
import SlideWrapper from "../../slide-wrapper"
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
    <SlideWrapper className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 dark:from-primary/20 dark:via-slate-900 dark:to-secondary/20 animate-gradient-fade bg-200% relative">
      {/* Top Left Logo */}
      <div className="absolute top-4 left-10 z-10">
        <Image
          src="/logonoir.png"
          alt="ITBS Logo"
          width={200}
          height={50}
          onError={(e) => {
            // Fallback to placeholder if logo doesn't exist
            e.currentTarget.src = "/placeholder-logo.png"
          }}
        />
      </div>
      
      {/* Top Right Logo */}
      <div className="absolute top-4 right-10 z-10">
        <Image
          src="/logo-mdw.png"
          alt="Maison du Web Logo"
          width={100}
          height={50}
          onError={(e) => {
            // Fallback to placeholder if logo doesn't exist
            e.currentTarget.src = "/placeholder-logo.png"
          }}
        />
      </div>

      <div className="h-full flex flex-col justify-center items-center text-center space-y-6 md:space-y-8">
        <Badge variant="secondary" className="px-4 py-1.5 text-sm text-white">
          <CalendarDays className="mr-2 h-4 w-4" />
          Année Universitaire: 2024-2025
        </Badge>

        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-gradient bg-gradient-to-r from-primary to-secondary max-w-6xl">
        Transformation DevOps et Déploiement Cloud d'une Architecture Microservices pour une Application Mobile
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl font-medium text-foreground">
          Présenté par: <span className="font-bold text-primary">Firas Ruine</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 max-w-6xl w-full mx-auto">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-base md:text-lg">
                <UserCircle className="mr-2 h-5 w-5 md:h-6 md:w-6 text-primary" />
                Encadrant Académique
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">M. Firas Khlil</p>
              <p className="font-semibold">ITBS</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-base md:text-lg">
                <Briefcase className="mr-2 h-5 w-5 md:h-6 md:w-6 text-primary" />
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
