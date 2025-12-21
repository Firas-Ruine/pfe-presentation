"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Inbox, ListTodo, Play, Eye, CheckCircle2, AlertOctagon,
  Brain, Server, Plug, FlaskConical, Shield, Activity
} from "lucide-react"

// ============================================
// AUTOSPHERE KANBAN - ULTRA COMPACT VIEW
// ============================================

const columns = [
  { id: "backlog", title: "Backlog", icon: Inbox, count: 8, color: "bg-slate-100 text-slate-700 border-slate-300" },
  { id: "todo", title: "To Do", icon: ListTodo, count: 5, color: "bg-blue-100 text-blue-700 border-blue-300" },
  { id: "progress", title: "In Progress", icon: Play, count: 3, color: "bg-yellow-100 text-yellow-700 border-yellow-400 ring-2 ring-yellow-400" },
  { id: "review", title: "Review", icon: Eye, count: 3, color: "bg-purple-100 text-purple-700 border-purple-300" },
  { id: "done", title: "Done", icon: CheckCircle2, count: 31, color: "bg-green-100 text-green-700 border-green-400" },
]

const completedHighlights = [
  { icon: Brain, label: "LangGraph Core", epic: "Core" },
  { icon: Plug, label: "Grafana MCP", epic: "MCP" },
  { icon: Plug, label: "AWX MCP", epic: "MCP" },
  { icon: Plug, label: "Redmine MCP", epic: "MCP" },
  { icon: FlaskConical, label: "Random Forest ML", epic: "ML" },
  { icon: Activity, label: "Jaeger Tracing", epic: "Obs" },
  { icon: Activity, label: "Mimir Storage", epic: "Obs" },
  { icon: Activity, label: "OpenSearch Logs", epic: "Obs" },
  { icon: Shield, label: "Wazuh SIEM", epic: "Security" },
  { icon: Server, label: "K8s Deployment", epic: "Infra" },
]

export default function GanttChartSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader 
          badge="5 • Project Planning" 
          title="AutoSphere 6-Month Kanban" 
          subtitle="M1-M2 Complete • M3 Active • M4-M6 Planned" 
        />
        
        <div className="flex-1 flex flex-col gap-6">
          {/* Kanban Columns - Just Headers */}
          <div className="grid grid-cols-5 gap-4">
            {columns.map((column) => (
              <div 
                key={column.id} 
                className={`rounded-2xl p-5 border-2 ${column.color} flex items-center justify-between`}
              >
                <div className="flex items-center gap-3">
                  <column.icon className="h-8 w-8" />
                  <span className="font-bold text-2xl">{column.title}</span>
                </div>
                <span className="text-4xl font-bold">{column.count}</span>
              </div>
            ))}
          </div>
          
          {/* Completed Highlights */}
          <Card className="flex-1">
            <CardContent className="p-6 h-full">
              <h3 className="text-2xl font-bold mb-4 text-green-700">✓ Key Deliverables Completed (M1-M2)</h3>
              <div className="grid grid-cols-5 gap-4">
                {completedHighlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-green-50 rounded-xl p-4 border border-green-200">
                    <item.icon className="h-7 w-7 text-green-600 flex-shrink-0" />
                    <span className="font-semibold text-lg">{item.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Bottom Stats */}
          <Card>
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-10">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600">31</div>
                    <div className="text-xl text-muted-foreground">Done</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-600">6</div>
                    <div className="text-xl text-muted-foreground">Active</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600">13</div>
                    <div className="text-xl text-muted-foreground">Planned</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-5xl font-bold text-green-600">61%</div>
                    <div className="text-xl text-muted-foreground">Complete</div>
                  </div>
                  <div className="w-56 h-8 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" style={{ width: '61%' }} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SlideWrapper>
  )
}
