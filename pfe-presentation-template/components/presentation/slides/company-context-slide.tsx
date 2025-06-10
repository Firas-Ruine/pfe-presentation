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
    <SlideWrapper>
      <div className="space-y-8">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Contexte de l'Entreprise
          </h2>
          <p className="text-lg text-muted-foreground">
            Maison du Web
          </p>
        </div>

        {/* Présentation de l'entreprise */}
        <Card className="shadow-xl bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-2xl">
              <Building className="mr-3 h-8 w-8 text-primary" />
              Maison du Web
              <Badge variant="secondary" className="ml-4">
                <Award className="mr-1 h-4 w-4" />
                Leader Technologique
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-primary" />
                  À Propos
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Entreprise innovante spécialisée dans le développement de solutions 
                  digitales sur mesure. Elle accompagne les entreprises dans leur transformation
                  numérique depuis plus de 12 ans, en mettant l'accent sur la qualité et la performance 
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <Target className="mr-2 h-5 w-5 text-primary" />
                  Mission
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Transformer les idées en solutions technologiques performantes 
                  et évolutives, en utilisant les dernières innovations pour 
                  créer de la valeur durable.
                </p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Domaines d'Expertise</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {services.map((service, index) => (
                  <Card key={index} className="bg-card/50 hover:bg-card/80 transition-colors border-border/50">
                    <CardContent className="p-3 text-center">
                      <service.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                      <p className="font-medium text-sm">{service.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SlideWrapper>
  )
}
