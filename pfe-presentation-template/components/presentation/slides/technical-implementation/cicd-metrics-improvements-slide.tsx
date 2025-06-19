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
  Trophy,
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

        <div className="flex-1 space-y-6">
          {/* Main Metrics Section */}
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h2 className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                <BarChart3 className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                Comparaison des Métriques Clés
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Analyse comparative avant et après l'implémentation du CI/CD
              </p>
            </div>

            {/* Horizontal Metrics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-4 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 hover:-translate-y-1"
                >
                  {/* Header with icon and improvement */}
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg ${metric.iconContainerClass} ring-1 ring-white/20`}>
                      <metric.icon className={`h-4 w-4 ${metric.iconClass}`} />
                    </div>
                    <div className="flex items-center gap-1 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-full">
                      {metric.trend === "up" ? (
                        <ArrowUp className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <ArrowDown className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                      )}
                      <span className="text-emerald-700 dark:text-emerald-300 font-bold text-xs">
                        {metric.improvement}
                      </span>
                    </div>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-2 leading-tight">
                    {metric.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                    {metric.description}
                  </p>

                  {/* Before/After comparison */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-rose-50 dark:bg-rose-900/20 rounded border border-rose-100 dark:border-rose-800/30">
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Avant</span>
                      <span className="font-bold text-xs text-rose-700 dark:text-rose-400">{metric.before}</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-emerald-50 dark:bg-emerald-900/20 rounded border border-emerald-100 dark:border-emerald-800/30">
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Après</span>
                      <span className="font-bold text-xs text-emerald-700 dark:text-emerald-400">{metric.after}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div className="space-y-4">
            <div className="text-center mb-4">
              <h3 className="flex items-center justify-center gap-3 text-xl font-bold text-emerald-800 dark:text-emerald-200 mb-2">
                <Trophy className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                Impact Global de l'Implémentation
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Indicateurs clés de performance et de satisfaction
              </p>
            </div>

            {/* Summary Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {summaryStats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-4 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 hover:-translate-y-1 text-center"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-3">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700">
                      <stat.icon className={`h-4 w-4 ${stat.iconClass}`} />
                    </div>
                  </div>

                  {/* Value */}
                  <div className={`text-xl font-bold ${stat.iconClass} mb-1`}>{stat.value}</div>
                  
                  {/* Label */}
                  <div className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">{stat.label}</div>
                  
                  {/* Description */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>

    
        </div>
      </div>
    </SlideWrapper>
  )
}
