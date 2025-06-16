"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Building, 
  Users, 
  Award, 
  Target,
  MapPin,
  Smartphone,
  Code,
  Cloud,
  Calendar,
  CheckCircle2,
  TrendingUp,
  Zap
} from "lucide-react"

const services = [
  { name: "Développement Web", icon: Code, description: "Sites sur mesure, e-commerce, plateformes" },
  { name: "Applications Mobiles", icon: Smartphone, description: "Solutions natives Android & iOS" },
  { name: "Design Graphique", icon: Award, description: "Identité visuelle et supports" },
  { name: "Hébergement & Infogérance", icon: Cloud, description: "Solutions serveurs et maintenance" }
]

const timeline = [
  { year: "2012", event: "Fondation par Riadh Rezig", description: "Création à Nabeul, spécialisation web" },
  { year: "2015", event: "Expansion Services", description: "Développement mobile et design" },
  { year: "2018", event: "Méthodes Agiles", description: "Adoption Scrum et technologies modernes" },
  { year: "2020", event: "Innovation Digitale", description: "Hébergement et audit sécurité" },
  { year: "2024", event: "Architecture Microservices", description: "Migration et modernisation" }
]

export default function CompanyOverviewSlide() {
  return (
    <SlideWrapper>
            <div className="h-full flex flex-col">
        
        {/* Header - Maximized for Impact */}
        <SlideHeader 
          badge="2 • Contexte Général"
          title="Maison du Web"
          subtitle="Agence tunisienne de transformation digitale depuis 2012"
          className="mb-6"
        />

        {/* Main Content - Enhanced 3-Column Layout */}
        <div className="flex-1 grid grid-cols-3 gap-8">
          
          {/* Left Column - Company DNA with Timeline */}
          <div className="space-y-6">
            {/* Company Info - Premium Card */}
            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/15 dark:from-blue-900/30 dark:to-purple-900/30 backdrop-blur-2xl border border-blue-200/50 dark:border-blue-800/50 shadow-3xl pb-2">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-2xl font-black text-primary">
                  <Building className="mr-4 h-8 w-8" />
                  Notre ADN
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4 p-5 bg-white/80 dark:bg-slate-800/80 rounded-2xl backdrop-blur-sm shadow-lg">
                  <MapPin className="h-6 w-6 text-blue-500 mt-2" />
                  <div>
                    <p className="font-bold text-lg">🏢 Nabeul, Tunisie</p>
                    <p className="text-base text-muted-foreground">Fondée par Riadh Rezig en 2012</p>
                  </div>
                </div>
              

                {/* Timeline Integration */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Évolution Clé
                  </h3>
                  {timeline.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-1">
                        <div className="p-3 bg-white/70 dark:bg-slate-700/70 rounded-lg shadow-md">
                          <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">{item.event}</h4>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="text-base px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 font-bold">Innovation</Badge>
                  <Badge variant="secondary" className="text-base px-4 py-2 bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 font-bold">Créativité</Badge>
                  <Badge variant="secondary" className="text-base px-4 py-2 bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300 font-bold">Excellence</Badge>
                  <Badge variant="secondary" className="text-base px-4 py-2 bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300 font-bold">Éthique</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Center Column - Services Excellence */}
          <div className="space-y-6">
            <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-2xl border-0 shadow-3xl pb-20">
              <CardHeader className="pb-8">
                <CardTitle className="flex items-center text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  <Award className="mr-4 h-8 w-8 text-purple-500" />
                  Expertise Technique
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {services.map((service, index) => {
                    const IconComponent = service.icon
                    return (
                      <div key={index} className="group p-5 bg-gradient-to-br from-white to-purple-50/80 dark:from-slate-700 dark:to-slate-600 rounded-2xl shadow-xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-3 cursor-pointer border border-purple-200/40">
                        <IconComponent className="h-10 w-10 text-purple-500 mb-4 group-hover:scale-125 transition-transform duration-700" />
                        <h3 className="font-black text-base mb-3 text-slate-800 dark:text-slate-200">{service.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed font-medium">{service.description}</p>
                      </div>
                    )
                  })}
                </div>

               
              </CardContent>
            </Card>
          </div>


          {/* Right Column - Mission, Vision & Future */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-purple-500/15 via-pink-500/10 to-blue-500/15 dark:from-purple-900/40 dark:via-pink-900/30 dark:to-blue-900/40 backdrop-blur-2xl border border-purple-200/50 dark:border-purple-800/50 shadow-3xl pb-10">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-2xl font-black text-primary">
                  <Target className="mr-4 h-8 w-8 text-pink-500" />
                  Vision & Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                
                <div className="p-6 bg-white/90 dark:bg-slate-800/90 rounded-2xl backdrop-blur-sm shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <h4 className="font-black text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mission</h4>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed font-medium">
                    🎯 Fournir des solutions numériques innovantes pour accompagner les entreprises tunisiennes dans leur transformation digitale
                  </p>
                </div>

                <div className="p-6 bg-white/90 dark:bg-slate-800/90 rounded-2xl backdrop-blur-sm shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <h4 className="font-black text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Vision</h4>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed font-medium">
                    🌟 Placer le client au centre et lui fournir toutes les ressources pour réussir
                  </p>
                </div>

                
                {/* Technologies Badge */}
                <div className="p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl border border-green-200/50">
                  <div className="text-center">
                    <p className="text-base font-bold text-muted-foreground">
                      💡 React Native • Next.js • Laravel • Scrum • DevOps
                    </p>
                  </div>
                </div>

              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </SlideWrapper>
  )
}
