import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TestTube, Shield, Zap, CheckCircle2, Target, TrendingUp, Users, Clock } from "lucide-react"
import SlideWrapper from "../../slide-wrapper"

export default function Sprint6Slide() {
  const testCoverage = [
    { category: "Unit Tests", coverage: 95, tests: 247, color: "green" },
    { category: "Integration Tests", coverage: 88, tests: 89, color: "blue" },
    { category: "End-to-End Tests", coverage: 78, tests: 34, color: "purple" },
    { category: "Security Tests", coverage: 100, tests: 15, color: "red" }
  ]

  const performanceTestResults = [
    {
      scenario: "Charge normale",
      users: "100 concurrent",
      responseTime: "125ms",
      throughput: "850 req/s",
      errorRate: "0.02%",
      status: "passed"
    },
    {
      scenario: "Pic de charge",
      users: "500 concurrent", 
      responseTime: "340ms",
      throughput: "1200 req/s",
      errorRate: "0.15%",
      status: "passed"
    },
    {
      scenario: "Stress test",
      users: "1000 concurrent",
      responseTime: "580ms", 
      throughput: "1800 req/s",
      errorRate: "0.89%",
      status: "passed"
    },
    {
      scenario: "Charge soutenue",
      users: "200 concurrent",
      responseTime: "180ms",
      throughput: "950 req/s", 
      errorRate: "0.05%",
      status: "passed"
    }
  ]

  const securityTestResults = [
    {
      test: "OWASP Top 10",
      tool: "ZAP Proxy",
      vulnerabilities: 0,
      severity: "None",
      status: "passed"
    },
    {
      test: "Container Scan",
      tool: "Trivy",
      vulnerabilities: 0,
      severity: "None", 
      status: "passed"
    },
    {
      test: "Dependency Check",
      tool: "npm audit",
      vulnerabilities: 0,
      severity: "None",
      status: "passed"
    },
    {
      test: "Infrastructure Scan",
      tool: "Checkov",
      vulnerabilities: 2,
      severity: "Low",
      status: "acceptable"
    }
  ]

  const qualityMetrics = [
    { metric: "Code Quality", value: "A+", tool: "SonarQube" },
    { metric: "Technical Debt", value: "2.5h", tool: "SonarQube" },
    { metric: "Duplication", value: "1.2%", tool: "SonarQube" },
    { metric: "Maintainability", value: "A", tool: "SonarQube" }
  ]

  const validationAchievements = [
    { metric: "Test Success Rate", value: "99.2%", trend: "+1.8%" },
    { metric: "Performance SLA", value: "100%", trend: "stable" },
    { metric: "Security Score", value: "A+", trend: "+2 grades" },
    { metric: "Quality Gate", value: "Passed", trend: "maintained" }
  ]

  return (
    <SlideWrapper>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Sprint 6: Tests & Validation
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Validation complète des performances, sécurité et qualité du système
          </p>
        </div>

        {/* Validation Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {validationAchievements.map((achievement, index) => (
            <Card key={index} className="bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-900/20 dark:to-green-800/20 border-emerald-200">
              <CardContent className="p-4 text-center">
                <CheckCircle2 className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-emerald-700 mb-1">{achievement.value}</div>
                <div className="text-xs text-emerald-600 mb-2">{achievement.metric}</div>
                <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                  {achievement.trend}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Test Coverage */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TestTube className="h-5 w-5" />
                Couverture des Tests
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {testCoverage.map((test, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-sm">{test.category}</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-muted-foreground">{test.tests} tests</span>
                      <Badge variant="secondary" className="text-xs">{test.coverage}%</Badge>
                    </div>
                  </div>
                  <Progress 
                    value={test.coverage} 
                    className={`h-3 ${
                      test.color === 'green' ? 'bg-green-100 [&>div]:bg-green-500' :
                      test.color === 'blue' ? 'bg-blue-100 [&>div]:bg-blue-500' :
                      test.color === 'purple' ? 'bg-purple-100 [&>div]:bg-purple-500' :
                      'bg-red-100 [&>div]:bg-red-500'
                    }`}
                  />
                </div>
              ))}
              
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">Objectif Atteint</span>
                </div>
                <div className="text-xs text-green-600">
                  <div>• Couverture moyenne: 90.25%</div>
                  <div>• Total: 385 tests automatisés</div>
                  <div>• Temps d'exécution: &lt; 3 minutes</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Test Results */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Tests de Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {performanceTestResults.map((result, index) => (
                <div key={index} className="p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-sm">{result.scenario}</h4>
                    <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                      {result.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Users:</span>
                      <span className="font-medium">{result.users}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Response:</span>
                      <span className="font-medium">{result.responseTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Throughput:</span>
                      <span className="font-medium">{result.throughput}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Error Rate:</span>
                      <span className="font-medium text-green-600">{result.errorRate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Security Test Results */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Tests de Sécurité
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {securityTestResults.map((result, index) => (
                <div key={index} className="p-4 border rounded-lg bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-sm">{result.test}</h4>
                    <Badge 
                      variant={result.status === "passed" ? "secondary" : "outline"}
                      className={`text-xs ${
                        result.status === "passed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {result.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tool:</span>
                      <span className="font-medium">{result.tool}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Vulnerabilities:</span>
                      <span className={`font-medium ${result.vulnerabilities === 0 ? 'text-green-600' : 'text-yellow-600'}`}>
                        {result.vulnerabilities}
                      </span>
                    </div>
                    <div className="flex justify-between col-span-2">
                      <span className="text-muted-foreground">Severity:</span>
                      <span className={`font-medium ${result.severity === 'None' ? 'text-green-600' : 'text-yellow-600'}`}>
                        {result.severity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quality Metrics */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Métriques Qualité
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {qualityMetrics.map((metric, index) => (
                <div key={index} className="p-4 border rounded-lg bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-sm">{metric.metric}</h4>
                    <Badge variant="outline" className="text-xs">{metric.tool}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-purple-600">{metric.value}</span>
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </div>
                </div>
              ))}
              
              <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-700">SonarQube Quality Gate</span>
                </div>
                <div className="text-xs text-purple-600">
                  <div>• Code smells: 8 (acceptable)</div>
                  <div>• Security hotspots: 0</div>
                  <div>• Bugs: 0</div>
                  <div>• Reliability: A rating</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sprint Summary */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Sprint 6 - Validation Réussie</h3>
              <p className="text-green-600">Système validé et prêt pour la production</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <TestTube className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-700 mb-1">385</div>
                <div className="text-sm text-green-600">Tests automatisés</div>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-700 mb-1">1800</div>
                <div className="text-sm text-blue-600">req/s max throughput</div>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-red-700 mb-1">0</div>
                <div className="text-sm text-red-600">vulnérabilités critiques</div>
              </div>
              <div className="text-center">
                <CheckCircle2 className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-emerald-700 mb-1">A+</div>
                <div className="text-sm text-emerald-600">note qualité globale</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SlideWrapper>
  )
}
