"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, CheckCircle, Clock, Target } from "lucide-react"

const phases = [
  { 
    name: "Phase 1: Research & Design", 
    duration: "4 weeks",
    tasks: ["Literature review", "Architecture design", "Technology selection"],
    color: "blue",
    progress: 100
  },
  { 
    name: "Phase 2: Core Development", 
    duration: "6 weeks",
    tasks: ["LangGraph workflow", "Agent implementation", "MCP connectors"],
    color: "purple",
    progress: 100
  },
  { 
    name: "Phase 3: Integration", 
    duration: "4 weeks",
    tasks: ["AWX integration", "Grafana MCP", "Policy engine"],
    color: "green",
    progress: 100
  },
  { 
    name: "Phase 4: Testing & Validation", 
    duration: "3 weeks",
    tasks: ["Unit tests", "Integration tests", "E2E validation"],
    color: "orange",
    progress: 100
  },
  { 
    name: "Phase 5: Documentation", 
    duration: "2 weeks",
    tasks: ["Technical docs", "User guide", "Presentation"],
    color: "cyan",
    progress: 90
  },
]

const milestones = [
  { name: "Architecture Approved", date: "Week 4", status: "completed" },
  { name: "Core Workflow Complete", date: "Week 10", status: "completed" },
  { name: "All Integrations Done", date: "Week 14", status: "completed" },
  { name: "125 Tests Passing", date: "Week 17", status: "completed" },
  { name: "Final Presentation", date: "Week 19", status: "current" },
]

export default function GanttChartSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader badge="5 • Planning" title="Project Timeline" subtitle="Gantt chart and key milestones" />
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-2">
            <Card className="shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center"><Calendar className="h-4 w-4 mr-2 text-primary" />Development Phases</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {phases.map((phase, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge className={`text-xs ${
                          phase.color === 'blue' ? 'bg-blue-500' :
                          phase.color === 'purple' ? 'bg-purple-500' :
                          phase.color === 'green' ? 'bg-green-500' :
                          phase.color === 'orange' ? 'bg-orange-500' :
                          'bg-cyan-500'
                        }`}>{phase.name}</Badge>
                      </div>
                      <span className="text-xs text-muted-foreground">{phase.duration}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          phase.color === 'blue' ? 'bg-blue-500' :
                          phase.color === 'purple' ? 'bg-purple-500' :
                          phase.color === 'green' ? 'bg-green-500' :
                          phase.color === 'orange' ? 'bg-orange-500' :
                          'bg-cyan-500'
                        }`}
                        style={{ width: `${phase.progress}%` }}
                      />
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {phase.tasks.map((task, idx) => (
                        <span key={idx} className="text-xs text-muted-foreground">• {task}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div className="space-y-3">
            <Card className="shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center"><Target className="h-4 w-4 mr-2 text-primary" />Key Milestones</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center justify-between p-2 rounded-lg ${
                    milestone.status === 'current' ? 'bg-primary/10 border border-primary' : 'bg-muted/30'
                  }`}>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className={`h-4 w-4 ${
                        milestone.status === 'completed' ? 'text-green-500' : 'text-primary'
                      }`} />
                      <span className="text-xs font-medium">{milestone.name}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">{milestone.date}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
              <CardContent className="p-3">
                <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2 flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2" />Project Status
                </h4>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">95%</div>
                  <p className="text-xs text-muted-foreground">Overall Progress</p>
                </div>
                <div className="w-full bg-background/50 rounded-full h-2 mt-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
