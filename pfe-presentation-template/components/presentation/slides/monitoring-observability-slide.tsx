"use client"
import SlideWrapper from "../slide-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Monitor, 
  Activity, 
  AlertTriangle, 
  BarChart3,
  Eye,
  Server,
  Database,
  Clock,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle2
} from "lucide-react"

const monitoringTools = [
  {
    name: "Prometheus",
    description: "Collecte de métriques système et applicatives",
    icon: BarChart3,
    status: "active",
    coverage: 95,
    alerts: 0
  },
  {
    name: "Grafana",
    description: "Visualisation et dashboards en temps réel",
    icon: Monitor,
    status: "active",
    coverage: 100,
    alerts: 0
  },
  {
    name: "Loki",
    description: "Agrégation et analyse des logs",
    icon: Eye,
    status: "active",
    coverage: 88,
    alerts: 1
  },
  {
    name: "Jaeger",
    description: "Tracing distribué des microservices",
    icon: Activity,
    status: "active",
    coverage: 92,
    alerts: 0
  }
]

const systemMetrics = [
  { name: "CPU Usage", value: 45, unit: "%", status: "good", threshold: 80 },
  { name: "Memory Usage", value: 62, unit: "%", status: "warning", threshold: 85 },
  { name: "Disk I/O", value: 28, unit: "%", status: "good", threshold: 90 },
  { name: "Network", value: 35, unit: "%", status: "good", threshold: 75 }
]

const alertRules = [
  {
    name: "High CPU Usage",
    condition: "cpu_usage > 80%",
    severity: "warning",
    status: "active"
  },
  {
    name: "Memory Exhaustion",
    condition: "memory_usage > 90%",
    severity: "critical",
    status: "active"
  },
  {
    name: "Database Connection Pool",
    condition: "db_connections > 95%",
    severity: "warning",
    status: "active"
  },
  {
    name: "API Response Time",
    condition: "response_time > 2s",
    severity: "warning",
    status: "active"
  }
]

const keyMetrics = [
  { label: "Uptime", value: "99.8%", icon: CheckCircle2, color: "text-green-600" },
  { label: "Avg Response Time", value: "245ms", icon: Clock, color: "text-blue-600" },
  { label: "Alerts/Day", value: "2.3", icon: AlertTriangle, color: "text-orange-600" },
  { label: "Services Monitored", value: "12", icon: Server, color: "text-purple-600" }
]

export default function MonitoringObservabilitySlide() {
  return (
    <SlideWrapper className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-900 dark:to-orange-900/20">
      <div className="h-full flex flex-col space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Monitoring & Observabilité
          </h1>
          <p className="text-lg text-muted-foreground">
            Surveillance continue et alertes en temps réel
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Monitoring Tools */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Monitor className="mr-3 h-6 w-6 text-primary" />
                  Outils de Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {monitoringTools.map((tool, index) => {
                  const IconComponent = tool.icon
                  return (
                    <div key={index} className="p-3 border rounded-lg space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <IconComponent className="h-5 w-5 text-primary" />
                          <div>
                            <h3 className="font-semibold text-sm">{tool.name}</h3>
                            <p className="text-xs text-muted-foreground">{tool.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant={tool.status === "active" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {tool.status}
                          </Badge>
                          {tool.alerts > 0 && (
                            <Badge variant="destructive" className="text-xs">
                              {tool.alerts}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Coverage</span>
                          <span>{tool.coverage}%</span>
                        </div>
                        <Progress value={tool.coverage} className="h-2" />
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <TrendingUp className="mr-3 h-5 w-5 text-primary" />
                  Métriques Clés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {keyMetrics.map((metric, index) => {
                    const IconComponent = metric.icon
                    return (
                      <div key={index} className="text-center p-3 bg-secondary/20 rounded-lg">
                        <IconComponent className={`h-6 w-6 mx-auto mb-2 ${metric.color}`} />
                        <div className="text-lg font-bold text-primary">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - System Metrics */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Activity className="mr-3 h-6 w-6 text-primary" />
                  Métriques Système
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {systemMetrics.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm">{metric.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">{metric.value}{metric.unit}</span>
                        <Badge 
                          variant={
                            metric.status === "good" ? "default" : 
                            metric.status === "warning" ? "secondary" : "destructive"
                          }
                          className="text-xs"
                        >
                          {metric.status}
                        </Badge>
                      </div>
                    </div>
                    <Progress 
                      value={metric.value} 
                      className={`h-3 ${
                        metric.value > metric.threshold ? "text-red-500" :
                        metric.value > metric.threshold * 0.8 ? "text-orange-500" : 
                        "text-green-500"
                      }`}
                    />
                    <div className="text-xs text-muted-foreground">
                      Seuil d'alerte: {metric.threshold}%
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Database className="mr-3 h-5 w-5 text-primary" />
                  Performance Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">99.8%</div>
                      <div className="text-sm text-muted-foreground">Availability</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 bg-secondary/20 rounded text-center">
                      <div className="font-bold text-blue-600">245ms</div>
                      <div className="text-xs text-muted-foreground">Avg Response</div>
                    </div>
                    <div className="p-3 bg-secondary/20 rounded text-center">
                      <div className="font-bold text-purple-600">1.2K</div>
                      <div className="text-xs text-muted-foreground">Req/min</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Badge variant="outline" className="text-xs">
                      Last updated: 2 minutes ago
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Alert Rules */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <AlertTriangle className="mr-3 h-6 w-6 text-primary" />
                  Règles d'Alerte
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {alertRules.map((rule, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-sm">{rule.name}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge 
                          variant={rule.severity === "critical" ? "destructive" : "secondary"}
                          className="text-xs"
                        >
                          {rule.severity}
                        </Badge>
                        <Badge 
                          variant={rule.status === "active" ? "default" : "outline"}
                          className="text-xs"
                        >
                          {rule.status}
                        </Badge>
                      </div>
                    </div>
                    <code className="text-xs bg-secondary/20 p-1 rounded">
                      {rule.condition}
                    </code>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Shield className="mr-3 h-5 w-5 text-primary" />
                  Alertes Récentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-2 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <div>
                      <div className="font-semibold text-xs">Memory Warning</div>
                      <div className="text-xs text-muted-foreground">5 minutes ago</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-2 bg-green-50 border-l-4 border-green-400 rounded">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <div>
                      <div className="font-semibold text-xs">API Response Resolved</div>
                      <div className="text-xs text-muted-foreground">12 minutes ago</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-2 bg-blue-50 border-l-4 border-blue-400 rounded">
                    <Zap className="h-4 w-4 text-blue-600" />
                    <div>
                      <div className="font-semibold text-xs">Deploy Completed</div>
                      <div className="text-xs text-muted-foreground">1 hour ago</div>
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
