"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, TrendingUp, Lightbulb, ArrowRight, Target, Brain, Rocket, Award } from "lucide-react"

const achievements = [
  { icon: TrendingUp, title: "93% MTTR Reduction", description: "From 30 minutes to ~30 seconds (fast path)" },
  { icon: CheckCircle, title: "85% Less Manual Work", description: "Auto-approval for low-risk, high-confidence actions" },
  { icon: Target, title: "70% Alert Reduction", description: "Deduplication and correlation eliminate noise" },
  { icon: Brain, title: "20 min Earlier Detection", description: "Predictive ML alerts before problems occur" },
]

const futureWork = [
  { term: "Short-term (3 months)", items: ["Multi-node commands", "Command validation", "AWX auto-selection"] },
  { term: "Long-term (6-12 months)", items: ["Multi-cloud support", "Advanced anomaly detection", "Self-improving prompts"] },
]

const keyLearnings = [
  "LangGraph excels at complex multi-agent orchestration",
  "Rule-based routing is faster than LLM classification",
  "Self-diagnosing agents are essential for production",
  "YAML-driven policies enable flexible governance",
]

export default function ConclusionContentSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader badge="Conclusion" title="Summary & Perspectives" subtitle="Key achievements, learnings, and future roadmap" />
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-3">
            <Card className="shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center text-green-700 dark:text-green-400">
                  <Award className="h-4 w-4 mr-2" />Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {achievements.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 bg-background/50 rounded-lg">
                    <item.icon className="h-5 w-5 text-green-500" />
                    <div>
                      <span className="font-semibold text-sm">{item.title}</span>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center"><Lightbulb className="h-4 w-4 mr-2 text-primary" />Key Learnings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                {keyLearnings.map((learning, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                    <span className="text-xs">{learning}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div className="space-y-3">
            <Card className="shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center"><Rocket className="h-4 w-4 mr-2 text-primary" />Future Work</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {futureWork.map((period, index) => (
                  <div key={index}>
                    <Badge variant="secondary" className="mb-2">{period.term}</Badge>
                    <ul className="space-y-1">
                      {period.items.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs">
                          <ArrowRight className="h-3 w-3 text-muted-foreground" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="shadow-lg border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="p-4 text-center">
                <h4 className="font-bold text-lg text-primary mb-2">Production-Ready System</h4>
                <div className="flex justify-center space-x-3">
                  <Badge className="bg-green-500">125/125 Tests</Badge>
                  <Badge className="bg-blue-500">20+ Nodes</Badge>
                  <Badge className="bg-purple-500">3 MCP Servers</Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  AutoSphere demonstrates that Agentic AI can transform SRE operations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
