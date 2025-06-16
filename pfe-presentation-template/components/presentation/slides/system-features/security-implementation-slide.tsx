import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Shield, Lock, Eye, FileSearch, CheckCircle2, AlertTriangle, ShieldCheck, Zap } from "lucide-react"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"

export default function SecurityImplementationSlide() {
  const securityLayers = [
    {
      layer: "Application Security",
      description: "OWASP Top 10 protection",
      measures: ["Input validation", "SQL injection prevention", "XSS protection", "CSRF tokens"],
      status: "Implemented",
      coverage: 100
    },
    {
      layer: "Container Security", 
      description: "Sécurité des images Docker",
      measures: ["Base images minimales", "Multi-stage builds", "Non-root users", "Distroless images"],
      status: "Implemented",
      coverage: 100
    },
    {
      layer: "Infrastructure Security",
      description: "Sécurité K8s et réseau",
      measures: ["Network policies", "RBAC", "Pod security standards", "Service mesh"],
      status: "Implemented", 
      coverage: 95
    },
    {
      layer: "Data Security",
      description: "Protection des données",
      measures: ["Encryption at rest", "TLS 1.3", "Secrets management", "Data masking"],
      status: "Implemented",
      coverage: 98
    }
  ]

  const trivyResults = [
    {
      image: "alert-service:v1.2.0",
      high: 0,
      medium: 0,
      low: 2,
      negligible: 3,
      status: "passed",
      lastScan: "2024-12-10"
    },
    {
      image: "notification-service:v1.1.5",
      high: 0,
      medium: 0, 
      low: 1,
      negligible: 2,
      status: "passed",
      lastScan: "2024-12-10"
    },
    {
      image: "user-management:v2.0.1",
      high: 0,
      medium: 0,
      low: 0,
      negligible: 1,
      status: "passed",
      lastScan: "2024-12-10"
    },
    {
      image: "mobile-gateway:v1.3.2",
      high: 0,
      medium: 0,
      low: 1,
      negligible: 4,
      status: "passed",
      lastScan: "2024-12-10"
    }
  ]

  const complianceStandards = [
    {
      standard: "OWASP Top 10",
      compliance: 100,
      description: "Web application security",
      validated: "2024-12-08"
    },
    {
      standard: "CIS Kubernetes",
      compliance: 94,
      description: "Container orchestration security",
      validated: "2024-12-09"
    },
    {
      standard: "NIST Cybersecurity",
      compliance: 92,
      description: "Framework de cybersécurité",
      validated: "2024-12-07"
    },
    {
      standard: "ISO 27001",
      compliance: 88,
      description: "Management de la sécurité",
      validated: "2024-12-06"
    }
  ]

  const securityTools = [
    {
      tool: "Trivy",
      purpose: "Vulnerability scanning",
      coverage: "Container images",
      frequency: "Every build",
      integration: "CI/CD Pipeline"
    },
    {
      tool: "OWASP ZAP",
      purpose: "Application scanning", 
      coverage: "Web applications",
      frequency: "Daily",
      integration: "Security pipeline"
    },
    {
      tool: "Falco",
      purpose: "Runtime security",
      coverage: "Kubernetes runtime",
      frequency: "Real-time",
      integration: "Monitoring stack"
    },
    {
      tool: "Vault",
      purpose: "Secrets management",
      coverage: "API keys & certificates",
      frequency: "On-demand",
      integration: "All services"
    }
  ]

  const securityMetrics = [
    { metric: "Zero Critical Vulnerabilities", value: "✓", color: "green" },
    { metric: "OWASP Compliance", value: "100%", color: "green" },
    { metric: "Container Scan Rate", value: "100%", color: "green" },
    { metric: "Secrets Rotation", value: "30 days", color: "blue" }
  ]

  return (
    <SlideWrapper>
      <div className="space-y-8">
        {/* En-tête */}
        <SlideHeader 
          badge="Chapitre 7 • Sécurité"
          title="Implémentation de la Sécurité"
          subtitle="Sécurité multi-couches avec badge zéro vulnérabilités critiques"
        />

        {/* Security Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {securityMetrics.map((metric, index) => (
            <Card key={index} className={`bg-gradient-to-br border-2 ${
              metric.color === 'green' 
                ? 'from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-800/20 border-green-200' 
                : 'from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-800/20 border-blue-200'
            }`}>
              <CardContent className="p-4 text-center">
                <ShieldCheck className={`h-6 w-6 mx-auto mb-2 ${metric.color === 'green' ? 'text-green-600' : 'text-blue-600'}`} />
                <div className={`text-lg font-bold mb-1 ${metric.color === 'green' ? 'text-green-700' : 'text-blue-700'}`}>
                  {metric.value}
                </div>
                <div className={`text-xs ${metric.color === 'green' ? 'text-green-600' : 'text-blue-600'}`}>
                  {metric.metric}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Security Layers */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Couches de Sécurité
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {securityLayers.map((layer, index) => (
                <div key={index} className="p-4 border rounded-lg bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-sm">{layer.layer}</h4>
                      <p className="text-xs text-muted-foreground">{layer.description}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="text-xs mb-1">{layer.status}</Badge>
                      <div className="text-xs font-bold text-green-600">{layer.coverage}%</div>
                    </div>
                  </div>
                  
                  <Progress value={layer.coverage} className="h-2 mb-3" />
                  
                  <div className="space-y-1">
                    {layer.measures.map((measure, measureIndex) => (
                      <div key={measureIndex} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3 w-3 text-green-600" />
                        <span className="text-xs text-muted-foreground">{measure}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Trivy Scan Results */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileSearch className="h-5 w-5" />
                Résultats Scans Trivy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {trivyResults.map((result, index) => (
                <div key={index} className="p-4 border rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-sm font-mono">{result.image}</h4>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                        {result.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{result.lastScan}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="text-center">
                      <div className="text-lg font-bold text-red-600">{result.high}</div>
                      <div className="text-muted-foreground">High</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-600">{result.medium}</div>
                      <div className="text-muted-foreground">Medium</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-yellow-600">{result.low}</div>
                      <div className="text-muted-foreground">Low</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-600">{result.negligible}</div>
                      <div className="text-muted-foreground">Negligible</div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border-2 border-green-300">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-bold text-green-700">ZERO VULNERABILITIES BADGE</span>
                </div>
                <div className="text-xs text-green-600">
                  <div>• Aucune vulnérabilité critique ou haute</div>
                  <div>• Scans automatisés à chaque build</div>
                  <div>• Conformité aux standards sécurité</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Security Tools */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Outils de Sécurité
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {securityTools.map((tool, index) => (
                <div key={index} className="p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-sm">{tool.tool}</h4>
                    <Badge variant="outline" className="text-xs">{tool.frequency}</Badge>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-3">{tool.purpose}</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Coverage:</span>
                      <span className="font-medium">{tool.coverage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Integration:</span>
                      <span className="font-medium">{tool.integration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Compliance Standards */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Standards de Conformité
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-sm">{standard.standard}</h4>
                      <p className="text-xs text-muted-foreground">{standard.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{standard.compliance}%</div>
                      <div className="text-xs text-muted-foreground">{standard.validated}</div>
                    </div>
                  </div>
                  <Progress value={standard.compliance} className="h-2" />
                </div>
              ))}
              
              <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-700">Audit Continu</span>
                </div>
                <div className="text-xs text-purple-600">
                  <div>• Évaluations mensuelles</div>
                  <div>• Remédiation automatisée</div>
                  <div>• Rapports de conformité</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security Summary */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-300">
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <ShieldCheck className="h-12 w-12 text-green-600" />
                <h3 className="text-2xl font-bold text-green-700">SÉCURITÉ VALIDÉE</h3>
              </div>
              <p className="text-green-600">Système certifié sécurisé avec zéro vulnérabilités critiques</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">0</div>
                <div className="text-sm text-green-600">Vulnérabilités critiques</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">100%</div>
                <div className="text-sm text-green-600">OWASP compliance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">4</div>
                <div className="text-sm text-green-600">Couches de sécurité</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SlideWrapper>
  )
}
