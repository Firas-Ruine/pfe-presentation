"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  TrendingUp,
  Users,
  Shield,
  Zap,
  Target,
  Award,
  Rocket,
  Brain,
  Globe,
} from "lucide-react"

export default function ConclusionContentSlide() {
  const achievements = [
    { label: "3000 utilisateurs simultanés", icon: Users, color: "text-blue-600" },
    { label: "Temps de réponse P95: 380ms", icon: Zap, color: "text-green-600" },
    { label: "Disponibilité: 99.98%", icon: Target, color: "text-emerald-600" },
    { label: "MTTR: 4.2 minutes", icon: CheckCircle, color: "text-orange-600" },
    { label: "90% réduction temps déploiement", icon: TrendingUp, color: "text-purple-600" },
    { label: "Zéro vulnérabilité critique", icon: Shield, color: "text-red-600" },
  ]

  const transformationPillars = [
    {
      title: "Architecture Microservices",
      description: "Scalabilité granulaire et résilience accrue",
      icon: Globe,
    },
    {
      title: "Chaîne CI/CD Complète", 
      description: "Automatisation avec Trivy, SonarQube et Argo CD",
      icon: Rocket,
    },
    {
      title: "Observabilité PLG",
      description: "Visibilité temps réel du système distribué",
      icon: Brain,
    },
  ]

  return (
    <SlideWrapper className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <div className="h-full flex flex-col p-4 md:p-6 space-y-6">
        <SlideHeader
          badge="12 • Conclusion et Perspectives"
          title="Conclusion et Perspectives"
          //subtitle="Bilan et perspectives de la transformation DevOps"
        />

        <div className="flex-1 space-y-6">
          {/* Summary Section */}
          <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-emerald-600" />
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                  Transformation Réussie d'ARVEA Business
                </h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Migration réussie d'une architecture monolithique Laravel vers un écosystème de 
                <strong> microservices cloud-native moderne</strong>. À travers <strong>six sprints méthodiquement orchestrés</strong>, 
                cette approche DevOps rigoureuse a produit des <strong>résultats exceptionnels</strong> 
                dans un contexte de modernisation technologique complexe.
              </p>
            </CardContent>
          </Card>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {transformationPillars.map((pillar, index) => (
              <Card key={index} className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                <CardContent className="p-4 text-center">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
                      <pillar.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>
                  <Badge variant="outline" className="mb-2">{index + 1}</Badge>
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">


            {/* Operational Benefits */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-4 text-center">
                  💡 Bénéfices Opérationnels
                </h3>
                <div className="space-y-3 text-sm text-blue-700 dark:text-blue-300">
                  <div className="p-2 bg-white/80 dark:bg-slate-800/80 rounded-lg">
                    <p><strong>Productivité :</strong> +45-60h/mois</p>
                  </div>
                  <div className="p-2 bg-white/80 dark:bg-slate-800/80 rounded-lg">
                    <p><strong>Déploiements :</strong> x5 plus fréquents</p>
                  </div>
                  <div className="p-2 bg-white/80 dark:bg-slate-800/80 rounded-lg">
                    <p><strong>Culture :</strong> DevOps mature</p>
                  </div>
                  <div className="p-2 bg-white/80 dark:bg-slate-800/80 rounded-lg">
                    <p><strong>Sécurité :</strong> "Security by design"</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Future Perspectives */}
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/30 border-purple-200 dark:border-purple-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-4 text-center">
                  🚀 Perspectives d'Avenir
                </h3>
                <div className="space-y-3 text-sm text-purple-700 dark:text-purple-300">
                  <div className="p-2 bg-white/80 dark:bg-slate-800/80 rounded-lg">
                    <p><strong>Service Mesh</strong> pour communication sécurisée</p>
                  </div>
                  <div className="p-2 bg-white/80 dark:bg-slate-800/80 rounded-lg">
                    <p><strong>Chaos Engineering</strong> pour la résilience</p>
                  </div>
                  <div className="p-2 bg-white/80 dark:bg-slate-800/80 rounded-lg">
                    <p><strong>Multi-Cloud</strong> architecture</p>
                  </div>
                  <div className="p-2 bg-white/80 dark:bg-slate-800/80 rounded-lg">
                    <p><strong>IA Prédictive</strong> pour l'observabilité</p>
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
