import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart3, Eye, Database, Activity, Zap, CheckCircle2, TrendingUp, AlertTriangle } from "lucide-react"
import SlideWrapper from "../../slide-wrapper"

export default function Sprint5Slide() {
  const plgStack = [
    {
      tool: "Prometheus",
      purpose: "Collecte de métriques",
      metrics: ["CPU/Memory usage", "Request rate", "Error rate", "Custom business metrics"],
      retention: "30 jours",
      status: "Production"
    },
    {
      tool: "Loki",
      purpose: "Agrégation des logs",
      metrics: ["Application logs", "System logs", "Audit logs", "Error tracking"],
      retention: "15 jours", 
      status: "Production"
    },
    {
      tool: "Grafana",
      purpose: "Visualisation",
      metrics: ["Dashboards temps réel", "Alertes", "Rapports", "Métriques business"],
      retention: "Illimité",
      status: "Production"
    }
  ]

  const prometheusMetrics = [
    { name: "http_requests_total", type: "Counter", description: "Total des requêtes HTTP" },
    { name: "http_request_duration", type: "Histogram", description: "Durée des requêtes" },
    { name: "memory_usage_bytes", type: "Gauge", description: "Utilisation mémoire" },
    { name: "cpu_usage_percent", type: "Gauge", description: "Utilisation CPU" },
    { name: "database_connections", type: "Gauge", description: "Connexions DB actives" },
    { name: "notification_sent_total", type: "Counter", description: "Notifications envoyées" }
  ]

  const grafanaDashboards = [
    {
      name: "Infrastructure Overview",
      panels: 12,
      alerts: 8,
      description: "Vue d'ensemble système",
      updateFrequency: "5s"
    },
    {
      name: "Application Performance",
      panels: 15,
      alerts: 12,
      description: "Métriques applicatives",
      updateFrequency: "10s"
    },
    {
      name: "Business Metrics",
      panels: 8,
      alerts: 5,
      description: "KPIs métier",
      updateFrequency: "1m"
    },
    {
      name: "Security Dashboard",
      panels: 10,
      alerts: 15,
      description: "Surveillance sécurité",
      updateFrequency: "30s"
    }
  ]

  const performanceImprovements = [
    { metric: "MTTR (Mean Time To Recovery)", before: "45 min", after: "&lt; 5 min", improvement: "89%" },
    { metric: "Incident Detection Time", before: "15 min", after: "&lt; 30 sec", improvement: "97%" },
    { metric: "System Visibility", before: "25%", after: "95%", improvement: "280%" },
    { metric: "Alert Precision", before: "60%", after: "92%", improvement: "53%" }
  ]

  const lokiLogSources = [
    { source: "Application Logs", volume: "2.3 GB/jour", retention: "15 jours" },
    { source: "Kubernetes Logs", volume: "1.8 GB/jour", retention: "15 jours" },
    { source: "Nginx Access Logs", volume: "850 MB/jour", retention: "15 jours" },
    { source: "Security Audit Logs", volume: "420 MB/jour", retention: "30 jours" }
  ]

  return (
    <SlideWrapper>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Sprint 5: Stack PLG & Performance
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Implémentation complète Prometheus, Loki, Grafana pour l'observabilité
          </p>
        </div>

        {/* Performance Improvements */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {performanceImprovements.map((improvement, index) => (
            <Card key={index} className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-800/20 border-green-200">
              <CardContent className="p-4 text-center">
                <TrendingUp className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-green-700 mb-1">{improvement.improvement}</div>
                <div className="text-xs text-green-600 mb-2">{improvement.metric}</div>
                <div className="text-xs text-muted-foreground">
                  {improvement.before} → {improvement.after}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* PLG Stack Overview */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Stack PLG (Prometheus, Loki, Grafana)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {plgStack.map((component, index) => (
                <div key={index} className="p-4 border rounded-lg bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      {component.tool === "Prometheus" && <BarChart3 className="h-4 w-4 text-orange-500" />}
                      {component.tool === "Loki" && <Database className="h-4 w-4 text-blue-500" />}
                      {component.tool === "Grafana" && <Eye className="h-4 w-4 text-green-500" />}
                      {component.tool}
                    </h4>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">{component.status}</Badge>
                      <Badge variant="outline" className="text-xs">{component.retention}</Badge>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">{component.purpose}</p>
                  
                  <div className="space-y-1">
                    {component.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3 w-3 text-green-600" />
                        <span className="text-xs text-muted-foreground">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Prometheus Metrics */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-orange-500" />
                Métriques Prometheus
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {prometheusMetrics.map((metric, index) => (
                <div key={index} className="p-3 border rounded-lg bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-mono text-sm font-semibold">{metric.name}</h4>
                    <Badge variant="outline" className="text-xs">{metric.type}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                </div>
              ))}
              
              <div className="mt-4 p-3 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg border border-orange-200">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-4 w-4 text-orange-600" />
                  <span className="text-sm font-medium text-orange-700">Collecte Active</span>
                </div>
                <div className="text-xs text-orange-600">
                  <div>• Scraping interval: 15 secondes</div>
                  <div>• Retention: 30 jours</div>
                  <div>• ~2.5M metrics/jour collectées</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Grafana Dashboards */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-green-500" />
                Dashboards Grafana
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {grafanaDashboards.map((dashboard, index) => (
                <div key={index} className="p-4 border rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-sm">{dashboard.name}</h4>
                    <Badge variant="secondary" className="text-xs">{dashboard.updateFrequency}</Badge>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-3">{dashboard.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{dashboard.panels}</div>
                      <div className="text-xs text-muted-foreground">Panels</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-red-600">{dashboard.alerts}</div>
                      <div className="text-xs text-muted-foreground">Alertes</div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Loki Log Sources */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-blue-500" />
                Sources de Logs Loki
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {lokiLogSources.map((source, index) => (
                <div key={index} className="p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-sm">{source.source}</h4>
                    <Badge variant="outline" className="text-xs">{source.retention}</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Volume quotidien:</span>
                    <span className="text-sm font-bold text-blue-600">{source.volume}</span>
                  </div>
                </div>
              ))}
              
              <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">Agrégation Centralisée</span>
                </div>
                <div className="text-xs text-blue-600">
                  <div>• Total: ~5.4 GB/jour de logs</div>
                  <div>• Compression: 85% ratio</div>
                  <div>• Query performance: &lt; 2s</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Overall Progress */}
        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">Sprint 5 - Objectifs Atteints</h3>
              <p className="text-purple-600">Stack PLG complètement opérationnelle avec monitoring 24/7</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-700 mb-2">100%</div>
                <div className="text-sm text-purple-600">Métriques collectées</div>
                <Progress value={100} className="h-2 mt-2" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-700 mb-2">95%</div>
                <div className="text-sm text-purple-600">Visibilité système</div>
                <Progress value={95} className="h-2 mt-2" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-700 mb-2">24/7</div>
                <div className="text-sm text-purple-600">Monitoring actif</div>
                <Progress value={100} className="h-2 mt-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SlideWrapper>
  )
}
