import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Activity, Clock, Users, Zap, TrendingUp, Server, Database, Globe } from "lucide-react"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"

export default function PerformanceBenchmarksSlide() {
  const keyMetrics = [
    {
      metric: "Utilisateurs Concurrents",
      current: "1,000",
      target: "500",
      unit: "users",
      achievement: "200%",
      icon: Users,
      color: "green"
    },
    {
      metric: "Latence P95",
      current: "340ms",
      target: "500ms",
      unit: "",
      achievement: "132%",
      icon: Clock,
      color: "blue"
    },
    {
      metric: "Disponibilité",
      current: "99.8%",
      target: "99.5%",
      unit: "",
      achievement: "100.3%",
      icon: Server,
      color: "purple"
    },
    {
      metric: "Throughput",
      current: "1,800",
      target: "1,000",
      unit: "req/s",
      achievement: "180%",
      icon: Zap,
      color: "orange"
    }
  ]

  const performanceTimeline = [
    {
      period: "Baseline (Avant)",
      users: 50,
      latency: "2.5s",
      availability: "95.2%",
      throughput: "120 req/s"
    },
    {
      period: "Après Sprint 1-2",
      users: 200,
      latency: "1.2s", 
      availability: "97.8%",
      throughput: "450 req/s"
    },
    {
      period: "Après Sprint 3-4",
      users: 500,
      latency: "680ms",
      availability: "99.1%",
      throughput: "850 req/s"
    },
    {
      period: "Après Sprint 5-6",
      users: 1000,
      latency: "340ms",
      availability: "99.8%",
      throughput: "1800 req/s"
    }
  ]

  const resourceUtilization = [
    {
      resource: "CPU",
      average: 32,
      peak: 78,
      target: 80,
      status: "optimal"
    },
    {
      resource: "Memory",
      average: 45,
      peak: 82,
      target: 85,
      status: "optimal"
    },
    {
      resource: "Network I/O",
      average: 28,
      peak: 65,
      target: 70,
      status: "optimal"
    },
    {
      resource: "Disk I/O", 
      average: 15,
      peak: 45,
      target: 60,
      status: "optimal"
    }
  ]

  const responseTimeBreakdown = [
    { component: "API Gateway", time: "15ms", percentage: 4.4 },
    { component: "Service Processing", time: "180ms", percentage: 52.9 },
    { component: "Database Query", time: "85ms", percentage: 25.0 },
    { component: "External API", time: "45ms", percentage: 13.2 },
    { component: "Network Overhead", time: "15ms", percentage: 4.4 }
  ]

  const loadTestScenarios = [
    {
      scenario: "Normal Load",
      users: "100-200",
      duration: "1 hour",
      avgResponse: "125ms",
      errorRate: "0.02%",
      status: "Passed"
    },
    {
      scenario: "Peak Load",
      users: "500-800",
      duration: "30 min",
      avgResponse: "285ms",
      errorRate: "0.15%",
      status: "Passed"
    },
    {
      scenario: "Stress Test",
      users: "1000-1500",
      duration: "15 min",
      avgResponse: "580ms",
      errorRate: "0.89%",
      status: "Passed"
    },
    {
      scenario: "Spike Test",
      users: "0-1000 (5s)",
      duration: "10 min",
      avgResponse: "450ms",
      errorRate: "0.45%",
      status: "Passed"
    }
  ]

  return (
    <SlideWrapper>
      <div className="space-y-8">
        {/* En-tête */}
        <SlideHeader 
          badge="Chapitre 13 • Performance"
          title="Métriques de Performance"
          subtitle="Résultats de performance dépassant tous les objectifs fixés"
        />

        {/* Key Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {keyMetrics.map((metric, index) => {
            const IconComponent = metric.icon
            return (
              <Card key={index} className={`bg-gradient-to-br border-2 ${
                metric.color === 'green' ? 'from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-800/20 border-green-200' :
                metric.color === 'blue' ? 'from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-800/20 border-blue-200' :
                metric.color === 'purple' ? 'from-purple-50 to-violet-100 dark:from-purple-900/20 dark:to-violet-800/20 border-purple-200' :
                'from-orange-50 to-amber-100 dark:from-orange-900/20 dark:to-amber-800/20 border-orange-200'
              }`}>
                <CardContent className="p-4 text-center">
                  <IconComponent className={`h-6 w-6 mx-auto mb-2 ${
                    metric.color === 'green' ? 'text-green-600' :
                    metric.color === 'blue' ? 'text-blue-600' :
                    metric.color === 'purple' ? 'text-purple-600' :
                    'text-orange-600'
                  }`} />
                  <div className={`text-lg font-bold mb-1 ${
                    metric.color === 'green' ? 'text-green-700' :
                    metric.color === 'blue' ? 'text-blue-700' :
                    metric.color === 'purple' ? 'text-purple-700' :
                    'text-orange-700'
                  }`}>
                    {metric.current} {metric.unit}
                  </div>
                  <div className={`text-xs mb-2 ${
                    metric.color === 'green' ? 'text-green-600' :
                    metric.color === 'blue' ? 'text-blue-600' :
                    metric.color === 'purple' ? 'text-purple-600' :
                    'text-orange-600'
                  }`}>
                    {metric.metric}
                  </div>
                  <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                    {metric.achievement} vs target
                  </Badge>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Performance Timeline */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Évolution des Performances
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {performanceTimeline.map((period, index) => (
                <div key={index} className="p-4 border rounded-lg bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700">
                  <h4 className="font-semibold text-sm mb-3">{period.period}</h4>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Users:</span>
                      <span className="font-medium">{period.users}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Latency:</span>
                      <span className="font-medium">{period.latency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Uptime:</span>
                      <span className="font-medium">{period.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Throughput:</span>
                      <span className="font-medium">{period.throughput}</span>
                    </div>
                  </div>
                  
                  {index < performanceTimeline.length - 1 && (
                    <div className="mt-3 flex justify-center">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Resource Utilization */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Utilisation des Ressources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {resourceUtilization.map((resource, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-sm">{resource.resource}</h4>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                        {resource.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        Target: {resource.target}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Average: {resource.average}%</span>
                      <span className="text-muted-foreground">Peak: {resource.peak}%</span>
                    </div>
                    <Progress value={resource.average} className="h-2" />
                    <Progress value={resource.peak} className="h-1 opacity-50" />
                  </div>
                </div>
              ))}
              
              <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <Server className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">Optimisation Réussie</span>
                </div>
                <div className="text-xs text-green-600">
                  <div>• Toutes les ressources sous les seuils</div>
                  <div>• Auto-scaling configuré</div>
                  <div>• Monitoring 24/7 actif</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Response Time Breakdown */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Décomposition Temps de Réponse
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {responseTimeBreakdown.map((component, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{component.component}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-blue-600">{component.time}</span>
                      <span className="text-xs text-muted-foreground">({component.percentage}%)</span>
                    </div>
                  </div>
                  <Progress value={component.percentage * 2.94} className="h-2" />
                </div>
              ))}
              
              <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">Temps Total Moyen: 340ms</span>
                </div>
                <div className="text-xs text-blue-600">
                  <div>• 68% plus rapide que la baseline</div>
                  <div>• P95 sous la cible de 500ms</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Load Test Results */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Résultats Tests de Charge
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {loadTestScenarios.map((test, index) => (
                <div key={index} className="p-4 border rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-sm">{test.scenario}</h4>
                    <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                      {test.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Users:</span>
                      <span className="font-medium">{test.users}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{test.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Avg Response:</span>
                      <span className="font-medium">{test.avgResponse}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Error Rate:</span>
                      <span className="font-medium text-green-600">{test.errorRate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Performance Summary */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-300">
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Objectifs de Performance Dépassés</h3>
              <p className="text-green-600">Toutes les métriques clés surpassent les targets initiaux</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">200%</div>
                <div className="text-sm text-green-600">Utilisateurs concurrents</div>
                <div className="text-xs text-muted-foreground">vs objectif initial</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700 mb-2">68%</div>
                <div className="text-sm text-blue-600">Réduction latence</div>
                <div className="text-xs text-muted-foreground">vs baseline</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-700 mb-2">99.8%</div>
                <div className="text-sm text-purple-600">Disponibilité</div>
                <div className="text-xs text-muted-foreground">SLA respecté</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-700 mb-2">1800</div>
                <div className="text-sm text-orange-600">req/s throughput</div>
                <div className="text-xs text-muted-foreground">pic de performance</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SlideWrapper>
  )
}
