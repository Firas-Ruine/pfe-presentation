"use client"

import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import {
  ReactFlow,
  Node,
  Edge,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
  Handle,
  Position,
  NodeProps,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  AlertTriangle,
  Activity,
  Search,
  BookOpen,
  Brain,
  Zap,
} from "lucide-react"

// Simple Alert Node
function AlertNode() {
  return (
    <div className="relative">
      <div className="p-5 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 border-2 border-red-400 shadow-lg min-w-[150px]">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="h-7 w-7 text-white" />
          <span className="font-bold text-lg text-white">Alert Input</span>
        </div>
        <p className="text-base text-red-100">Incoming incident</p>
      </div>
      <Handle type="source" position={Position.Right} className="w-3 h-3 !bg-white" />
    </div>
  )
}

// Agent Node (reusable for all 3 agents)
function AgentNode({ data }: NodeProps) {
  const nodeData = data as { 
    name: string
    subtitle: string
    tool: string
    icon: "metrics" | "incident" | "runbook"
    color: string
    stat: string
    statLabel: string
  }
  
  const icons = {
    metrics: Activity,
    incident: Search,
    runbook: BookOpen
  }
  const Icon = icons[nodeData.icon]

  return (
    <div className="relative">
      <Handle type="target" position={Position.Left} className="w-3 h-3 !bg-white" />
      <div 
        className={`p-5 rounded-xl bg-gradient-to-br ${nodeData.color} border-2 border-white/30 shadow-lg min-w-[200px]`}
      >
        <div className="flex items-center gap-2 mb-2">
          <Icon className="h-7 w-7 text-white" />
          <div>
            <span className="font-bold text-lg text-white block">{nodeData.name}</span>
            <span className="text-base text-white/80">{nodeData.subtitle}</span>
          </div>
        </div>
        <Badge className="bg-white/20 text-white text-base mb-2">
          {nodeData.tool}
        </Badge>
        <div className="mt-2 pt-2 border-t border-white/20 flex justify-between items-center">
          <span className="text-base text-white/70">{nodeData.statLabel}</span>
          <span className="font-bold text-lg text-white">{nodeData.stat}</span>
        </div>
      </div>
      <Handle type="source" position={Position.Right} className="w-3 h-3 !bg-white" />
    </div>
  )
}

// Reasoner Node
function ReasonerNode() {
  return (
    <div className="relative">
      <Handle type="target" position={Position.Left} className="w-3 h-3 !bg-white" />
      <div className="p-5 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 border-2 border-green-400 shadow-lg min-w-[150px]">
        <div className="flex items-center gap-2 mb-2">
          <Brain className="h-7 w-7 text-white" />
          <span className="font-bold text-lg text-white">Reasoner</span>
        </div>
        <p className="text-base text-green-100">Evidence synthesis</p>
        <Badge className="bg-white/20 text-white text-base mt-2">
          LLM Analysis
        </Badge>
      </div>
    </div>
  )
}

const nodeTypes = {
  alert: AlertNode,
  agent: AgentNode,
  reasoner: ReasonerNode,
}

// Increased spacing between nodes
const initialNodes: Node[] = [
  {
    id: "alert",
    type: "alert",
    position: { x: 0, y: 220 },
    data: {},
  },
  {
    id: "metrics",
    type: "agent",
    position: { x: 350, y: 0 },
    data: {
      name: "Metrics Agent",
      subtitle: "Self-Diagnostics",
      tool: "Prometheus",
      icon: "metrics",
      color: "from-blue-500 to-cyan-600",
      stat: "5 states",
      statLabel: "Diagnostics"
    },
  },
  {
    id: "incident",
    type: "agent",
    position: { x: 350, y: 200 },
    data: {
      name: "Incident Agent",
      subtitle: "RAG Pipeline",
      tool: "Qdrant",
      icon: "incident",
      color: "from-purple-500 to-violet-600",
      stat: "1,247",
      statLabel: "Indexed"
    },
  },
  {
    id: "runbook",
    type: "agent",
    position: { x: 350, y: 400 },
    data: {
      name: "Runbook Agent",
      subtitle: "AWX Automation",
      tool: "Ansible",
      icon: "runbook",
      color: "from-orange-500 to-amber-600",
      stat: "47",
      statLabel: "Templates"
    },
  },
  {
    id: "reasoner",
    type: "reasoner",
    position: { x: 700, y: 210 },
    data: {},
  },
]

const initialEdges: Edge[] = [
  {
    id: "e-alert-metrics",
    source: "alert",
    target: "metrics",
    animated: true,
    style: { stroke: "#3b82f6", strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#3b82f6" },
  },
  {
    id: "e-alert-incident",
    source: "alert",
    target: "incident",
    animated: true,
    style: { stroke: "#8b5cf6", strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#8b5cf6" },
  },
  {
    id: "e-alert-runbook",
    source: "alert",
    target: "runbook",
    animated: true,
    style: { stroke: "#f97316", strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#f97316" },
  },
  {
    id: "e-metrics-reasoner",
    source: "metrics",
    target: "reasoner",
    animated: true,
    style: { stroke: "#22c55e", strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#22c55e" },
  },
  {
    id: "e-incident-reasoner",
    source: "incident",
    target: "reasoner",
    animated: true,
    style: { stroke: "#22c55e", strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#22c55e" },
  },
  {
    id: "e-runbook-reasoner",
    source: "runbook",
    target: "reasoner",
    animated: true,
    style: { stroke: "#22c55e", strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#22c55e" },
  },
]

export default function AiAgentsOverviewSlide() {
  const [nodes] = useNodesState(initialNodes)
  const [edges] = useEdgesState(initialEdges)

  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader
          badge="6 • Architecture"
          title="AI Investigation Agents"
          subtitle="Parallel specialized agents for comprehensive incident analysis"
        />

        <div className="flex-1 grid grid-cols-4 gap-4">
          {/* ReactFlow Diagram - Takes 3/4 */}
          <div className="col-span-3 rounded-xl overflow-hidden border shadow-lg bg-gradient-to-br from-slate-900 to-slate-800">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable={false}
              fitView
              fitViewOptions={{ padding: 0.2 }}
              minZoom={0.5}
              maxZoom={1.2}
            >
              <Background color="#475569" gap={20} size={1} />
            </ReactFlow>
          </div>

          {/* Side Panel - Stats & Info */}
          <div className="space-y-4">
            <Card className="shadow-lg border-2 border-primary/20">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="h-6 w-6 text-yellow-500" />
                  <h3 className="font-bold text-lg">Parallel Execution</h3>
                </div>
                <p className="text-base text-muted-foreground">
                  All 3 agents run simultaneously via LangGraph <code className="text-primary">Send()</code> API
                </p>
                <Badge className="mt-3 bg-green-500/20 text-green-600 text-base">
                  3x faster than sequential
                </Badge>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-5">
                <h4 className="font-bold text-lg mb-3">Agent Capabilities</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-blue-500" />
                    <span className="text-base">Diagnoses empty metrics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Search className="h-5 w-5 text-purple-500" />
                    <span className="text-base">Searches incident history</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-orange-500" />
                    <span className="text-base">Matches remediation playbooks</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-5">
                <h4 className="font-bold text-lg mb-3">Combined Stats</h4>
                <div className="grid grid-cols-1 gap-3 text-center">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">
                    <div className="text-2xl font-bold text-purple-500">1,247</div>
                    <div className="text-sm text-muted-foreground">Incidents Indexed</div>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">
                    <div className="text-2xl font-bold text-orange-500">47</div>
                    <div className="text-sm text-muted-foreground">AWX Templates</div>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">
                    <div className="text-2xl font-bold text-green-500">&lt;50ms</div>
                    <div className="text-sm text-muted-foreground">Search Latency</div>
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
