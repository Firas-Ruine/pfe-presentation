"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  Clock,
  Shield,
  Users,
  Zap,
  BarChart,
  Globe,
  CheckCircle
} from "lucide-react"

const impactMetrics = [
  {
    title: "Accélération des Livraisons",
    description: "Réduction de 90% du temps de déploiement",
    icon: Clock,
    stat: "90%",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Amélioration de la Qualité",
    description: "Diminution des bugs en production de 80%",
    icon: Shield,
    stat: "80%",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Collaboration Renforcée",
    description: "Unification des équipes Dev et Ops",
    icon: Users,
    stat: "100%",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Réactivité Opérationnelle",
    description: "Temps de résolution des incidents divisé par 5",
    icon: Zap,
    stat: "5x",
    color: "from-orange-500 to-red-500"
  }
]

const globalBenefits = [
  "Cycles de développement plus courts et prévisibles",
  "Déploiements automatisés et sans interruption",
  "Monitoring et observabilité en temps réel",
  "Scalabilité automatique selon la demande",
  "Sécurité intégrée dans le pipeline (DevSecOps)",
  "Culture d'amélioration continue et d'innovation"
]

export default function DevOpsGlobalImpactSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        {/* En-tête */}
        <SlideHeader 
          badge="1 • Introduction"
          title="Impact du DevOps"
          subtitle="Transformation digitale et révolution des pratiques de développement"
        />

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
          {/* Métriques d'impact */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-3">
              <BarChart className="h-8 w-8 text-primary" />
              Métriques d'Impact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {impactMetrics.map((metric, index) => (
                <Card key={index} className={`shadow-lg bg-gradient-to-br ${metric.color} p-1`}>
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-6 h-full">
                    <CardHeader className="pb-4 text-center">
                      <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${metric.color} flex items-center justify-center shadow-lg mb-3`}>
                        <metric.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">{metric.stat}</div>
                      <CardTitle className="text-lg font-semibold">{metric.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground">{metric.description}</p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Bénéfices globaux */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-3">
              <Globe className="h-8 w-8 text-primary" />
              Bénéfices Globaux
            </h2>
            <Card className="shadow-xl bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 p-5">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {globalBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-primary/10">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-lg leading-relaxed font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
