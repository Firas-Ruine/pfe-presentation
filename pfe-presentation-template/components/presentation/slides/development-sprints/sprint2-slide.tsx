import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { GitBranch, Workflow, Shield, Zap, CheckCircle2, Clock, ArrowRight } from "lucide-react"
import SlideWrapper from "../../slide-wrapper"

export default function Sprint2Slide() {
  const gitOpsWorkflow = [
    {
      step: "Code Commit",
      description: "Push vers repository Git",
      tools: ["GitHub", "GitLab"],
      duration: "&lt; 1 min",
      status: "automated"
    },
    {
      step: "CI Pipeline",
      description: "Build, test, scan sécurité",
      tools: ["GitHub Actions", "Jest", "Trivy"],
      duration: "3-5 min",
      status: "automated"
    },
    {
      step: "Container Build",
      description: "Docker build & push",
      tools: ["Docker", "Harbor Registry"],
      duration: "2-3 min",
      status: "automated"
    },
    {
      step: "ArgoCD Sync",
      description: "Déploiement automatique",
      tools: ["ArgoCD", "Helm"],
      duration: "1-2 min",
      status: "automated"
    }
  ]

  const pipelineStages = [
    {
      name: "Source",
      description: "Code checkout & dependency install",
      metrics: { duration: "45s", success: "99.2%" },
      tools: ["Node.js", "pnpm"]
    },
    {
      name: "Build",
      description: "Compilation & bundling",
      metrics: { duration: "2m 30s", success: "98.8%" },
      tools: ["TypeScript", "Webpack"]
    },
    {
      name: "Test",
      description: "Unit & integration tests",
      metrics: { duration: "1m 45s", success: "97.5%" },
      tools: ["Jest", "Cypress"]
    },
    {
      name: "Security",
      description: "Vulnerability scanning",
      metrics: { duration: "1m 20s", success: "100%" },
      tools: ["Trivy", "SAST"]
    },
    {
      name: "Package",
      description: "Container image creation",
      metrics: { duration: "1m 10s", success: "99.5%" },
      tools: ["Docker", "Multi-stage"]
    },
    {
      name: "Deploy",
      description: "ArgoCD synchronization",
      metrics: { duration: "45s", success: "99.8%" },
      tools: ["ArgoCD", "Kubernetes"]
    }
  ]

  const sprintAchievements = [
    { metric: "Pipeline Success Rate", value: "98.9%", trend: "+2.3%" },
    { metric: "Deployment Frequency", value: "15/jour", trend: "+300%" },
    { metric: "Lead Time", value: "&lt; 10 min", trend: "-75%" },
    { metric: "Recovery Time", value: "&lt; 5 min", trend: "-80%" }
  ]

  return (
    <SlideWrapper>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Sprint 2: Pipeline CI/CD & GitOps
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Automatisation complète du workflow de développement avec ArgoCD
          </p>
        </div>

        {/* Achievement Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {sprintAchievements.map((achievement, index) => (
            <Card key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-800/20 border-blue-200">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-700 mb-1">{achievement.value}</div>
                <div className="text-sm text-blue-600 mb-2">{achievement.metric}</div>
                <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                  {achievement.trend}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* GitOps Workflow */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Workflow className="h-5 w-5" />
                Workflow GitOps
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {gitOpsWorkflow.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-sm">{step.step}</h4>
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{step.duration}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {step.tools.map((tool, toolIndex) => (
                          <Badge key={toolIndex} variant="outline" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  {index < gitOpsWorkflow.length - 1 && (
                    <div className="ml-5 mt-3 mb-1">
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Pipeline Stages */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="h-5 w-5" />
                Étapes du Pipeline
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {pipelineStages.map((stage, index) => (
                <div key={index} className="p-3 border rounded-lg bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      {stage.name}
                    </h4>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">{stage.metrics.duration}</div>
                      <div className="text-xs font-medium text-green-600">{stage.metrics.success}</div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{stage.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {stage.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* ArgoCD Integration Highlight */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="text-center">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-green-700">GitOps Security</h3>
                <p className="text-sm text-green-600">Déploiements déclaratifs</p>
              </div>
              <div className="text-center">
                <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-semibold text-yellow-700">Auto-Sync</h3>
                <p className="text-sm text-yellow-600">Synchronisation continue</p>
              </div>
              <div className="text-center">
                <CheckCircle2 className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-blue-700">Zero Downtime</h3>
                <p className="text-sm text-blue-600">Rolling deployments</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Progress value={100} className="h-2 mb-2" />
              <p className="text-sm text-muted-foreground">Pipeline CI/CD opérationnel à 100%</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </SlideWrapper>
  )
}
