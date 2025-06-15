"use client"
import SlideWrapper from "../slide-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Building, 
  Users, 
  Globe, 
  TrendingUp, 
  Award, 
  Target,
  CheckCircle2,
  Calendar,
  MapPin,
  Smartphone,
  Code,
  Database,
  Cloud,
  Zap
} from "lucide-react"

const companyStats = [
  { label: "Années d'expérience", value: "15+", icon: Calendar, color: "text-blue-600" },
  { label: "Clients satisfaits", value: "200+", icon: Users, color: "text-green-600" },
  { label: "Projets réalisés", value: "500+", icon: CheckCircle2, color: "text-purple-600" },
  { label: "Pays desservis", value: "25+", icon: Globe, color: "text-orange-600" }
]

const services = [
  { name: "Développement Web", icon: Code, description: "Applications web modernes" },
  { name: "Applications Mobiles", icon: Smartphone, description: "Solutions iOS et Android natives" },
  { name: "Solutions Cloud", icon: Cloud, description: "Infrastructure et migration cloud" },
  { name: "Base de Données", icon: Database, description: "Conception et optimisation BDD" }
]

const timeline = [
  { year: "2009", event: "Création de Maison du Web", description: "Début avec le développement web" },
  { year: "2014", event: "Expansion Mobile", description: "Lancement des services mobile" },
  { year: "2018", event: "Transformation Cloud", description: "Adoption des technologies cloud" },
  { year: "2022", event: "DevOps Excellence", description: "Centre d'expertise DevOps" },
  { year: "2024", event: "Innovation Continue", description: "IA et automatisation avancée" }
]

const projectMotivation = {
  problem: {
    title: "Défis Actuels",
    points: [
      "Architecture monolithique limitant la scalabilité",
      "Déploiements manuels et chronophages",
      "Difficultés de maintenance et d'évolution",
      "Manque de visibilité sur les performances"
    ]
  },
  solution: {
    title: "Solution Proposée",
    points: [
      "Migration vers une architecture microservices",
      "Mise en place d'un pipeline CI/CD automatisé",
      "Déploiement sur infrastructure cloud native",
      "Monitoring et observabilité complets"
    ]
  }
}

export default function CompanyContextSlide() {
  return (
    <SlideWrapper className="bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="h-full flex flex-col space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Contexte de l'Entreprise
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Maison du Web - Agence leader en transformation digitale
          </p>
        </div>

        {/* Main Content - Full Height Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Company Overview */}
          <div className="space-y-6">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Building className="mr-3 h-6 w-6 text-primary" />
                  À propos de Maison du Web
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
                  <div>
                    <p className="font-semibold">Siège Social</p>
                    <p className="text-sm text-muted-foreground">Tunis, Tunisie</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Spécialisée dans le développement d'applications web et mobile, 
                  l'intégration de solutions cloud et la transformation digitale des entreprises.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Innovation</Badge>
                  <Badge variant="secondary">Qualité</Badge>
                  <Badge variant="secondary">Performance</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Company Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <TrendingUp className="mr-3 h-6 w-6 text-primary" />
                  Chiffres Clés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {companyStats.map((stat, index) => {
                    const IconComponent = stat.icon
                    return (
                      <div key={index} className="text-center p-3 bg-secondary/20 rounded-lg">
                        <IconComponent className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Services & Expertise */}
          <div className="space-y-6">
            <Card className="flex-1">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Award className="mr-3 h-6 w-6 text-primary" />
                  Services & Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service, index) => {
                    const IconComponent = service.icon
                    return (
                      <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                        <IconComponent className="h-8 w-8 text-primary mb-3" />
                        <h3 className="font-semibold text-sm mb-1">{service.name}</h3>
                        <p className="text-xs text-muted-foreground">{service.description}</p>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Mission & Vision */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Target className="mr-3 h-6 w-6 text-primary" />
                  Mission & Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Mission</h4>
                  <p className="text-sm text-muted-foreground">
                    Accompagner les entreprises dans leur transformation digitale 
                    avec des solutions innovantes et performantes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Vision</h4>
                  <p className="text-sm text-muted-foreground">
                    Être le partenaire de référence pour l'innovation 
                    technologique en Afrique du Nord.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
