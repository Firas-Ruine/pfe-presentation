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
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-5" style={{ minHeight: 0 }}>
          <div className="lg:col-span-2 flex flex-col">
            <Card className="shadow-lg flex-1 flex flex-col">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center"><Calendar className="h-6 w-6 mr-3 text-primary" />Development Phases</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1">
                {phases.map((phase, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge className={`text-sm px-3 py-1 ${
                          phase.color === 'blue' ? 'bg-blue-500' :
                          phase.color === 'purple' ? 'bg-purple-500' :
                          phase.color === 'green' ? 'bg-green-500' :
                          phase.color === 'orange' ? 'bg-orange-500' :
                          'bg-cyan-500'
                        }`}>{phase.name}</Badge>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">{phase.duration}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${
                          phase.color === 'blue' ? 'bg-blue-500' :
                          phase.color === 'purple' ? 'bg-purple-500' :
                          phase.color === 'green' ? 'bg-green-500' :
                          phase.color === 'orange' ? 'bg-orange-500' :
                          'bg-cyan-500'
                        }`}
                        style={{ width: `${phase.progress}%` }}
                      />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {phase.tasks.map((task, idx) => (
                        <span key={idx} className="text-sm text-muted-foreground">• {task}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col space-y-4">
            <Card className="shadow-lg flex-1">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center"><Target className="h-6 w-6 mr-3 text-primary" />Key Milestones</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${
                    milestone.status === 'current' ? 'bg-primary/10 border-2 border-primary' : 'bg-muted/30'
                  }`}>
                    <div className="flex items-center space-x-2.5">
                      <CheckCircle className={`h-5 w-5 flex-shrink-0 ${
                        milestone.status === 'completed' ? 'text-green-500' : 'text-primary'
                      }`} />
                      <span className="text-sm font-medium">{milestone.name}</span>
                    </div>
                    <Badge variant="outline" className="text-xs px-2 py-1 flex-shrink-0">{milestone.date}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
              <CardContent className="p-4">
                <h4 className="font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center text-base">
                  <Clock className="h-5 w-5 mr-2" />Project Status
                </h4>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">95%</div>
                  <p className="text-sm text-muted-foreground">Overall Progress</p>
                </div>
                <div className="w-full bg-background/50 rounded-full h-3 mt-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{ width: '95%' }} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
