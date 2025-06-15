"use client"
import SlideWrapper from "../slide-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Smartphone, 
  Users, 
  Download, 
  Star,
  Shield,
  Zap,
  Globe,
  Heart,
  TrendingUp,
  CheckCircle2,
  Clock,
  Target
} from "lucide-react"

const appFeatures = [
  {
    name: "Interface Intuitive",
    description: "Design moderne et ergonomique",
    icon: Smartphone,
    status: "completed",
    progress: 100
  },
  {
    name: "Performance Optimisée",
    description: "Temps de chargement réduits",
    icon: Zap,
    status: "completed",
    progress: 95
  },
  {
    name: "Sécurité Renforcée",
    description: "Authentification multi-facteurs",
    icon: Shield,
    status: "completed",
    progress: 100
  },
  {
    name: "Offline Support",
    description: "Fonctionnalités hors ligne",
    icon: Globe,
    status: "in-progress",
    progress: 80
  }
]

const appMetrics = [
  { label: "Utilisateurs Actifs", value: "12.5K+", icon: Users, change: "+25%" },
  { label: "Téléchargements", value: "50K+", icon: Download, change: "+40%" },
  { label: "Note Moyenne", value: "4.8/5", icon: Star, change: "+0.3" },
  { label: "Satisfaction", value: "96%", icon: Heart, change: "+8%" }
]

const technicalSpecs = [
  { name: "React Native", version: "0.72", usage: "Frontend mobile" },
  { name: "TypeScript", version: "5.1", usage: "Type safety" },
  { name: "Redux Toolkit", version: "1.9", usage: "State management" },
  { name: "React Navigation", version: "6.x", usage: "Navigation" },
  { name: "Expo", version: "49", usage: "Development platform" },
  { name: "Firebase", version: "10.x", usage: "Backend services" }
]

export default function MobileAppSlide() {
  return (
    <SlideWrapper className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-900 dark:to-green-900/20">
      <div className="h-full flex flex-col space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Application Mobile
          </h1>
          <p className="text-lg text-muted-foreground">
            Interface utilisateur moderne et performante
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - App Features */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Smartphone className="mr-3 h-6 w-6 text-primary" />
                  Fonctionnalités Clés
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {appFeatures.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <IconComponent className="h-5 w-5 text-primary" />
                          <div>
                            <h3 className="font-semibold text-sm">{feature.name}</h3>
                            <p className="text-xs text-muted-foreground">{feature.description}</p>
                          </div>
                        </div>
                        <Badge 
                          variant={feature.status === "completed" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {feature.status === "completed" ? "Terminé" : "En cours"}
                        </Badge>
                      </div>
                      <Progress value={feature.progress} className="h-2" />
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Target className="mr-3 h-5 w-5 text-primary" />
                  Stack Technique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {technicalSpecs.map((tech, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-secondary/20 rounded">
                      <div>
                        <div className="font-semibold text-sm">{tech.name}</div>
                        <div className="text-xs text-muted-foreground">{tech.usage}</div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {tech.version}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - App Metrics */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <TrendingUp className="mr-3 h-6 w-6 text-primary" />
                  Métriques de Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {appMetrics.map((metric, index) => {
                    const IconComponent = metric.icon
                    return (
                      <div key={index} className="text-center p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
                        <IconComponent className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <div className="text-2xl font-bold text-primary">{metric.value}</div>
                        <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
                        <Badge variant="secondary" className="text-xs">
                          {metric.change}
                        </Badge>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Clock className="mr-3 h-5 w-5 text-primary" />
                  Timeline de Développement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <div>
                      <div className="font-semibold text-sm">Phase 1: Conception UI/UX</div>
                      <div className="text-xs text-muted-foreground">Semaines 1-2</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <div>
                      <div className="font-semibold text-sm">Phase 2: Développement Core</div>
                      <div className="text-xs text-muted-foreground">Semaines 3-6</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <div>
                      <div className="font-semibold text-sm">Phase 3: Intégration API</div>
                      <div className="text-xs text-muted-foreground">Semaines 7-8</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <div>
                      <div className="font-semibold text-sm">Phase 4: Tests & Optimisation</div>
                      <div className="text-xs text-muted-foreground">Semaines 9-10</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Screenshots/Demo */}
          <div className="space-y-6">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Smartphone className="mr-3 h-6 w-6 text-primary" />
                  Aperçu de l'Application
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-6">
                {/* Mock Phone Frame */}
                <div className="relative">
                  <div className="w-48 h-96 bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-2 shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex flex-col items-center justify-center space-y-4 p-4">
                      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                        <Smartphone className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-center space-y-2">
                        <h3 className="font-bold text-lg text-gray-800">PFE App</h3>
                        <p className="text-sm text-gray-600">Mobile Application</p>
                      </div>
                      <div className="space-y-2 w-full">
                        <div className="h-8 bg-white/50 rounded-lg"></div>
                        <div className="h-8 bg-white/50 rounded-lg"></div>
                        <div className="h-8 bg-white/50 rounded-lg"></div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-12 h-12 bg-green-500 rounded-xl"></div>
                        <div className="w-12 h-12 bg-blue-500 rounded-xl"></div>
                        <div className="w-12 h-12 bg-purple-500 rounded-xl"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="space-y-3 w-full">
                  <h4 className="font-semibold text-center">Avantages Clés</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>Interface moderne et intuitive</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>Performance optimisée</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>Sécurité renforcée</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>Compatible multi-plateformes</span>
                    </div>
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
