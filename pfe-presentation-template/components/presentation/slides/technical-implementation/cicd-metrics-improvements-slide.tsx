"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  Clock,
  Zap,
  Target,
  AlertTriangle,
  CheckCircle,
  Calendar,
  Timer,
  Activity,
  BarChart3,
  ArrowUp,
  ArrowDown,
  Rocket,
  Gauge,
  ShieldCheck,
  Users,
} from "lucide-react"

const metrics = [
  {
    title: "Temps moyen de déploiement",
    before: "4 heures",
    after: "25 minutes",
    improvement: "90%",
    icon: Clock,
    iconContainerClass: "bg-sky-100 dark:bg-sky-800/50",
    iconClass: "text-sky-600 dark:text-sky-400",
    trend: "down",
    description: "Réduction drastique du temps de déploiement",
  },
  {
    title: "Fréquence des déploiements",
    before: "1 par semaine",
    after: "5-6 par semaine",
    improvement: "500%",
    icon: Calendar,
    iconContainerClass: "bg-emerald-100 dark:bg-emerald-800/50",
    iconClass: "text-emerald-600 dark:text-emerald-400",
    trend: "up",
    description: "Accélération significative des livraisons",
  },
  {
    title: "Temps de détection des bugs",
    before: "2-3 jours",
    after: "15-30 minutes",
    improvement: "99%",
    icon: Target,
    iconContainerClass: "bg-violet-100 dark:bg-violet-800/50",
    iconClass: "text-violet-600 dark:text-violet-400",
    trend: "down",
    description: "Détection quasi-instantanée des problèmes",
  },
  {
    title: "Temps moyen de correction",
    before: "1 jour",
    after: "2 heures",
    improvement: "75%",
    icon: Timer,
    iconContainerClass: "bg-amber-100 dark:bg-amber-800/50",
    iconClass: "text-amber-600 dark:text-amber-400",
    trend: "down",
    description: "Résolution rapide des incidents",
  },
  {
    title: "Taux d'échec des déploiements",
    before: "25%",
    after: "3%",
    improvement: "88%",
    icon: AlertTriangle,
    iconContainerClass: "bg-rose-100 dark:bg-rose-800/50",
    iconClass: "text-rose-600 dark:text-rose-400",
    trend: "down",
    description: "Stabilité considérablement améliorée",
  },
  {
    title: "Temps consacré aux tâches manuelles",
    before: "15 h/semaine",
    after: "2 h/semaine",
    improvement: "87%",
    icon: Activity,
    iconContainerClass: "bg-indigo-100 dark:bg-indigo-800/50",
    iconClass: "text-indigo-600 dark:text-indigo-400",
    trend: "down",
    description: "Automatisation des processus répétitifs",
  },
]

const summaryStats = [
  {
    label: "Gains de productivité",
    value: "85%",
    description: "Amélioration moyenne",
    icon: Gauge,
    iconClass: "text-emerald-600 dark:text-emerald-400",
  },
  {
    label: "ROI de l'automatisation",
    value: "400%",
    description: "Retour sur investissement",
    icon: TrendingUp,
    iconClass: "text-sky-600 dark:text-sky-400",
  },
  {
    label: "Réduction des erreurs",
    value: "88%",
    description: "Moins d'incidents",
    icon: ShieldCheck,
    iconClass: "text-violet-600 dark:text-violet-400",
  },
  {
    label: "Satisfaction équipe",
    value: "95%",
    description: "Amélioration du moral",
    icon: Users,
    iconClass: "text-amber-600 dark:text-amber-400",
  },
]

export default function CicdMetricsImprovementsSlide() {
  return (
    <SlideWrapper className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <div className="h-full flex flex-col p-4 md:p-8 space-y-8">
        <SlideHeader
          badge="9 • Déploiement et Validation"
          title="Métriques d'Amélioration Après Implémentation"
          subtitle="Résultats quantifiables de l'automatisation des processus DevOps"
        />

        <div className="flex-1 space-y-8">
          <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-100">
                <BarChart3 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                Comparaison des Métriques Clés
              </CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                Analyse comparative avant et après l'implémentation du CI/CD.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="group relative flex flex-col rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30 p-5 transition-all duration-300 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg ${metric.iconContainerClass}`}>
                        <metric.icon className={`h-6 w-6 ${metric.iconClass}`} />
                      </div>
                      <div className="flex items-center gap-1">
                        {metric.trend === "up" ? (
                          <ArrowUp className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                        ) : (
                          <ArrowDown className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                        )}
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold text-base">
                          {metric.improvement}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-md font-semibold text-slate-800 dark:text-slate-100 mb-1">{metric.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 flex-grow">{metric.description}</p>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500 dark:text-slate-400">Avant:</span>
                        <span className="font-medium text-rose-600 dark:text-rose-400">{metric.before}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500 dark:text-slate-400">Après:</span>
                        <span className="font-medium text-emerald-600 dark:text-emerald-400">{metric.after}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-100">
                <TrendingUp className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                Impact Global de l'Automatisation
              </CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                Indicateurs clés de performance et de satisfaction.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {summaryStats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30"
                  >
                    <div className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 mb-3">
                      <stat.icon className={`h-7 w-7 ${stat.iconClass}`} />
                    </div>
                    <div className={`text-3xl font-bold ${stat.iconClass} mb-1`}>{stat.value}</div>
                    <div className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">{stat.label}</div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{stat.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 p-6 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-10 w-10 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-emerald-800 dark:text-emerald-200 mb-2">
                  Mission Accomplie : Transformation DevOps Réussie
                </h4>
                <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-4">
                  Ces chiffres démontrent l'efficacité de l'automatisation pour réduire les délais, augmenter la
                  fréquence des livraisons et améliorer la stabilité globale du système.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-emerald-300 text-emerald-700 dark:border-emerald-700 dark:text-emerald-300 bg-white dark:bg-emerald-900/50"
                  >
                    <Rocket className="mr-1.5 h-3.5 w-3.5" /> Innovation
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-sky-300 text-sky-700 dark:border-sky-700 dark:text-sky-300 bg-white dark:bg-sky-900/50"
                  >
                    <Zap className="mr-1.5 h-3.5 w-3.5" /> Performance
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-violet-300 text-violet-700 dark:border-violet-700 dark:text-violet-300 bg-white dark:bg-violet-900/50"
                  >
                    <Activity className="mr-1.5 h-3.5 w-3.5" /> Processus Automatisés
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-amber-300 text-amber-700 dark:border-amber-700 dark:text-amber-300 bg-white dark:bg-amber-900/50"
                  >
                    <BarChart3 className="mr-1.5 h-3.5 w-3.5" /> Résultats Mesurables
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
