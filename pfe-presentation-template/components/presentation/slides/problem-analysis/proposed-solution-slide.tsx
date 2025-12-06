"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, ArrowRight, TrendingUp, Workflow, Search, Bot, Cog, Lightbulb } from "lucide-react"
import Image from "next/image"

const solutionPillars = [
  { icon: Search, title: "Smart Detection", description: "Reactive + predictive alerts with deduplication", features: ["Redis Dedup 5min", "ML Prediction", "Cross-correlation"], color: "blue" },
  { icon: Bot, title: "Multi-Agent Investigation", description: "Specialized parallel agents for analysis", features: ["Metrics Agent", "Incident Agent", "Runbook Agent"], color: "purple" },
  { icon: Brain, title: "LLM Reasoning", description: "Contextual analysis and action planning", features: ["Evidence Synthesis", "Action Plan", "Validation"], color: "green" },
  { icon: Cog, title: "Safe Execution", description: "Auto-remediation with policies & rollback", features: ["Policy Engine", "Circuit Breaker", "Post-validation"], color: "orange" },
]

const kpiImprovements = [
  { metric: "MTTD", before: "~5 min", after: "-15 min", improvement: "↓ 20 min" },
  { metric: "MTTR", before: "~30 min", after: "~30 sec", improvement: "↓ 93%" },
  { metric: "Volume", before: "1000/day", after: "300/day", improvement: "↓ 70%" },
  { metric: "Manual", before: "100%", after: "15%", improvement: "↓ 85%" },
]

export default function ProposedSolutionSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        {/* Header with AutoSphere Logo - BIGGER */}
        <div className="flex items-center gap-6 mb-6">
          <div className="relative w-28 h-28 flex-shrink-0">
            <Image
              src="/Logo-autoshpere.png"
              alt="AutoSphere Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <SlideHeader badge="3 • Proposed Solution" title="AutoSphere" subtitle="Intelligent Self-Healing System based on Agentic AI" />
          </div>
        </div>
        
        {/* Main Content - Full Page */}
        <div className="flex-1 flex flex-col gap-3">
          {/* Solution Pillars Section */}
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex items-center space-x-3 mb-3">
              <Workflow className="h-7 w-7 text-primary" />
              <h3 className="text-xl font-bold">Solution Pillars</h3>
            </div>
            <div className="grid grid-cols-2 gap-2.5 flex-1">
              {solutionPillars.map((pillar, index) => (
                <Card key={index} className={`shadow-lg hover:shadow-xl transition-shadow border-t-4 h-full ${pillar.color === 'blue' ? 'border-t-blue-500' : pillar.color === 'purple' ? 'border-t-purple-500' : pillar.color === 'green' ? 'border-t-green-500' : 'border-t-orange-500'}`}>
                  <CardContent className="p-4 h-full flex items-center">
                    <div className="flex items-center space-x-3 w-full">
                      <div className={`p-3 rounded-xl flex-shrink-0 ${pillar.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' : pillar.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' : pillar.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-orange-100 dark:bg-orange-900/30'}`}>
                        <pillar.icon className={`h-10 w-10 ${pillar.color === 'blue' ? 'text-blue-600' : pillar.color === 'purple' ? 'text-purple-600' : pillar.color === 'green' ? 'text-green-600' : 'text-orange-600'}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-base mb-1.5">{pillar.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{pillar.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {pillar.features.map((feature, idx) => (<Badge key={idx} variant="outline" className="text-xs px-2 py-0.5">{feature}</Badge>))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Bottom Section - Workflow and Innovation */}
          <div className="grid grid-cols-3 gap-2.5">
            {/* Workflow */}
            <div className="col-span-2">
              <Card className="shadow-lg bg-muted/30 h-full">
                <CardContent className="p-4 flex items-center justify-center h-full">
                  <div className="flex items-center justify-center space-x-3">
                    <Badge className="bg-blue-500 px-4 py-2 text-sm font-medium">Alert</Badge>
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    <Badge className="bg-purple-500 px-4 py-2 text-sm font-medium">Investigation</Badge>
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    <Badge className="bg-green-500 px-4 py-2 text-sm font-medium">Reasoning</Badge>
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    <Badge className="bg-orange-500 px-4 py-2 text-sm font-medium">Action</Badge>
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    <Badge className="bg-emerald-500 px-4 py-2 text-sm font-medium">Validation</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key Innovation */}
            <Card className="shadow-lg border-2 border-primary/20">
              <CardContent className="p-4 flex flex-col justify-center h-full">
                <h4 className="font-bold text-primary mb-2 flex items-center text-base">
                  <Lightbulb className="h-6 w-6 mr-2" />
                  Key Innovation
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Using <span className="font-semibold text-primary">LangGraph</span> to orchestrate specialized AI agents with a dynamic <span className="font-semibold">Orchestrator-Worker</span> pattern.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
