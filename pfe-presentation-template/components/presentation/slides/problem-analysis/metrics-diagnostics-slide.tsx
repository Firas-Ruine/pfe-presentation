"use client"

import { useState, useEffect, useCallback } from "react"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import {
  ReactFlow,
  Node,
  Edge,
  Background,
  Controls,
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
import { Button } from "@/components/ui/button"
import {
  Activity,
  Search,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Database,
  Server,
  Clock,
  Wrench,
  FileText,
  Lightbulb,
  LucideIcon,
  Lock,
  Unlock,
  RotateCcw,
} from "lucide-react"

const STORAGE_KEY = "metrics-diagnostics-nodes"
const LOCK_KEY = "metrics-diagnostics-locked"

// Query Node
function QueryNode({ data }: NodeProps) {
  const [querying, setQuerying] = useState(false)
  const nodeData = data as { query: string }

  useEffect(() => {
    const interval = setInterval(() => {
      setQuerying(true)
      setTimeout(() => setQuerying(false), 1500)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <Handle type="target" position={Position.Left} className="w-3 h-3 !bg-blue-500" />
      <div
        className={`p-3 rounded-xl bg-gradient-to-br from-blue-900/80 to-indigo-900/80 border-2 border-blue-500/50 shadow-lg backdrop-blur-sm transition-all duration-300 ${
          querying ? "scale-105" : ""
        }`}
        style={{ boxShadow: querying ? "0 0 30px rgba(59,130,246,0.6)" : undefined }}
      >
        <div className="flex items-center gap-2 mb-1">
          <Search className={`h-5 w-5 text-blue-400 ${querying ? "animate-pulse" : ""}`} />
          <span className="font-bold text-sm text-white">Query Prometheus</span>
        </div>
        <code className="text-[9px] text-blue-300 bg-blue-950/50 px-2 py-0.5 rounded block mt-1">
          {nodeData.query}
        </code>
        {querying && <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-ping" />}
      </div>
      <Handle type="source" position={Position.Right} className="w-3 h-3 !bg-yellow-500" />
    </div>
  )
}

// Check Result Node
function CheckResultNode({ data }: NodeProps) {
  const [result, setResult] = useState<"empty" | "data" | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setResult("empty")
      setTimeout(() => setResult(null), 2000)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <Handle type="target" position={Position.Left} className="w-3 h-3 !bg-yellow-500" />
      <div
        className={`p-3 rounded-xl bg-gradient-to-br from-yellow-900/80 to-amber-900/80 border-2 border-yellow-500/50 shadow-lg backdrop-blur-sm transition-all duration-300`}
        style={{ boxShadow: result ? "0 0 25px rgba(234,179,8,0.5)" : undefined }}
      >
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className={`h-5 w-5 text-yellow-400 ${result ? "animate-pulse" : ""}`} />
          <span className="font-bold text-sm text-white">Check Result</span>
        </div>
        <div className="flex gap-2">
          <Badge className={`text-[9px] transition-all ${result === "empty" ? "bg-red-500 scale-110" : "bg-red-900/50 text-red-300"}`}>
            Result = []
          </Badge>
          <Badge className={`text-[9px] transition-all ${result === "data" ? "bg-green-500 scale-110" : "bg-green-900/50 text-green-300"}`}>
            Has Data
          </Badge>
        </div>
      </div>
      <Handle type="source" position={Position.Right} id="empty" className="w-3 h-3 !bg-orange-500 !top-[30%]" />
      <Handle type="source" position={Position.Right} id="data" className="w-3 h-3 !bg-green-500 !top-[70%]" />
    </div>
  )
}

// Diagnostic Step Node
function DiagnosticNode({ data }: NodeProps) {
  const [active, setActive] = useState(false)
  const nodeData = data as { label: string; description: string; icon: LucideIcon; status?: string }
  const Icon = nodeData.icon

  useEffect(() => {
    const delay = Math.random() * 2000 + 3000
    const interval = setInterval(() => {
      setActive(true)
      setTimeout(() => setActive(false), 1200)
    }, delay)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <Handle type="target" position={Position.Left} className="w-3 h-3 !bg-orange-500" />
      <Handle type="target" position={Position.Top} className="w-3 h-3 !bg-orange-500" />
      <div
        className={`p-2.5 rounded-lg bg-gradient-to-br from-orange-900/80 to-amber-900/80 border-2 border-orange-500/50 shadow-lg backdrop-blur-sm transition-all duration-300 ${
          active ? "scale-105" : ""
        }`}
        style={{ boxShadow: active ? "0 0 20px rgba(249,115,22,0.5)" : undefined }}
      >
        <div className="flex items-center gap-2">
          <Icon className={`h-4 w-4 text-orange-400 ${active ? "animate-pulse" : ""}`} />
          <span className="font-semibold text-xs text-white">{nodeData.label}</span>
        </div>
        <p className="text-[9px] text-orange-300 mt-0.5">{nodeData.description}</p>
        {nodeData.status && (
          <Badge className={`text-[8px] mt-1 ${
            nodeData.status === "UP" ? "bg-green-500" : "bg-red-500"
          }`}>
            {nodeData.status}
          </Badge>
        )}
      </div>
      <Handle type="source" position={Position.Right} className="w-3 h-3 !bg-cyan-500" />
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 !bg-orange-500" />
    </div>
  )
}

// Result Node
function ResultNode({ data }: NodeProps) {
  const [pulse, setPulse] = useState(false)
  const nodeData = data as { status: string; color: string; description: string }

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true)
      setTimeout(() => setPulse(false), 1000)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const bgColor = nodeData.color === "green" ? "from-green-900/80 to-emerald-900/80" :
                  nodeData.color === "red" ? "from-red-900/80 to-rose-900/80" :
                  "from-cyan-900/80 to-teal-900/80"
  const borderColor = nodeData.color === "green" ? "border-green-500/50" :
                      nodeData.color === "red" ? "border-red-500/50" :
                      "border-cyan-500/50"
  const glowColor = nodeData.color === "green" ? "rgba(34,197,94,0.5)" :
                    nodeData.color === "red" ? "rgba(239,68,68,0.5)" :
                    "rgba(6,182,212,0.5)"

  return (
    <div className="relative">
      <Handle type="target" position={Position.Left} className="w-3 h-3 !bg-cyan-500" />
      <div
        className={`p-3 rounded-xl bg-gradient-to-br ${bgColor} border-2 ${borderColor} shadow-lg backdrop-blur-sm transition-all duration-300 ${
          pulse ? "scale-105" : ""
        }`}
        style={{ boxShadow: pulse ? `0 0 25px ${glowColor}` : undefined }}
      >
        <div className="flex items-center gap-2 mb-1">
          <FileText className={`h-5 w-5 ${nodeData.color === "green" ? "text-green-400" : nodeData.color === "red" ? "text-red-400" : "text-cyan-400"}`} />
          <span className="font-bold text-sm text-white">{nodeData.status}</span>
        </div>
        <p className="text-[10px] text-gray-300">{nodeData.description}</p>
      </div>
    </div>
  )
}

// Success Node
function SuccessNode({ data }: NodeProps) {
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true)
      setTimeout(() => setPulse(false), 800)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <Handle type="target" position={Position.Left} className="w-3 h-3 !bg-green-500" />
      <div
        className={`p-3 rounded-xl bg-gradient-to-br from-green-900/80 to-emerald-900/80 border-2 border-green-500/50 shadow-lg backdrop-blur-sm transition-all duration-300 ${
          pulse ? "scale-105" : ""
        }`}
        style={{ boxShadow: pulse ? "0 0 25px rgba(34,197,94,0.5)" : undefined }}
      >
        <div className="flex items-center gap-2">
          <CheckCircle className={`h-5 w-5 text-green-400 ${pulse ? "animate-pulse" : ""}`} />
          <span className="font-bold text-sm text-white">DATA FOUND</span>
        </div>
        <p className="text-[10px] text-green-300 mt-1">Return to Reasoner</p>
      </div>
    </div>
  )
}

const nodeTypes = {
  query: QueryNode,
  checkResult: CheckResultNode,
  diagnostic: DiagnosticNode,
  result: ResultNode,
  success: SuccessNode,
}

const initialNodes: Node[] = [
  {
    id: "query",
    type: "query",
    position: { x: 0, y: 120 },
    data: { query: "rabbitmq_queue_messages{...}" },
  },
  {
    id: "check",
    type: "checkResult",
    position: { x: 200, y: 100 },
    data: {},
  },
  {
    id: "success",
    type: "success",
    position: { x: 420, y: 180 },
    data: {},
  },
  {
    id: "diag1",
    type: "diagnostic",
    position: { x: 420, y: 0 },
    data: { label: "Metric Exists?", description: "list_prometheus_metric_names", icon: Database },
  },
  {
    id: "diag2",
    type: "diagnostic",
    position: { x: 420, y: 80 },
    data: { label: "Target Health", description: "up{job=\"rabbitmq\"}", icon: Server, status: "DOWN" },
  },
  {
    id: "diag3",
    type: "diagnostic",
    position: { x: 620, y: 40 },
    data: { label: "Time Window", description: "Try now-1h, now-24h", icon: Clock },
  },
  {
    id: "result",
    type: "result",
    position: { x: 820, y: 60 },
    data: { status: "TARGET_DOWN", color: "red", description: "Exporter offline" },
  },
]

const initialEdges: Edge[] = [
  { id: "e1", source: "query", target: "check", animated: true, style: { stroke: "#eab308", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#eab308" } },
  { id: "e2", source: "check", sourceHandle: "data", target: "success", animated: true, style: { stroke: "#22c55e", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#22c55e" }, label: "Has Data", labelStyle: { fill: "#22c55e", fontSize: 9 }, labelBgStyle: { fill: "transparent" } },
  { id: "e3", source: "check", sourceHandle: "empty", target: "diag1", animated: true, style: { stroke: "#f97316", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#f97316" }, label: "Empty []", labelStyle: { fill: "#f97316", fontSize: 9 }, labelBgStyle: { fill: "transparent" } },
  { id: "e4", source: "diag1", target: "diag2", animated: true, style: { stroke: "#f97316", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#f97316" } },
  { id: "e5", source: "diag2", target: "diag3", animated: true, style: { stroke: "#f97316", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#f97316" } },
  { id: "e6", source: "diag3", target: "result", animated: true, style: { stroke: "#06b6d4", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#06b6d4" } },
]

export default function MetricsDiagnosticsSlide() {
  const [isLocked, setIsLocked] = useState(false)
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, , onEdgesChange] = useEdgesState(initialEdges)

  useEffect(() => {
    const savedPositions = localStorage.getItem(STORAGE_KEY)
    const savedLock = localStorage.getItem(LOCK_KEY)
    if (savedPositions) {
      try {
        const positions = JSON.parse(savedPositions) as Record<string, { x: number; y: number }>
        setNodes((nds) =>
          nds.map((node) => ({
            ...node,
            position: positions[node.id] || node.position,
          }))
        )
      } catch (e) {
        console.error(e)
      }
    }
    if (savedLock) setIsLocked(savedLock === "true")
  }, [setNodes])

  const handleNodesChange = useCallback((changes: any) => {
    if (!isLocked) {
      onNodesChange(changes)
      if (changes.some((c: any) => c.type === 'position' && c.dragging === false)) {
        setTimeout(() => {
          const positions: Record<string, { x: number; y: number }> = {}
          nodes.forEach((node) => {
            positions[node.id] = node.position
          })
          localStorage.setItem(STORAGE_KEY, JSON.stringify(positions))
        }, 50)
      }
    }
  }, [isLocked, onNodesChange, nodes])

  const toggleLock = useCallback(() => {
    const newState = !isLocked
    setIsLocked(newState)
    localStorage.setItem(LOCK_KEY, String(newState))
    if (newState) {
      const positions: Record<string, { x: number; y: number }> = {}
      nodes.forEach((node) => {
        positions[node.id] = node.position
      })
      localStorage.setItem(STORAGE_KEY, JSON.stringify(positions))
    }
  }, [isLocked, nodes])

  const resetPositions = useCallback(() => {
    setNodes(initialNodes)
    localStorage.removeItem(STORAGE_KEY)
  }, [setNodes])

  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader
          badge="6 • Architecture"
          title="Metrics Agent: Self-Diagnostics"
          subtitle="Watch the diagnostic loop — Automated troubleshooting when metrics return empty"
        />

        <div className="flex-1 grid grid-cols-4 gap-3">
          <div className="col-span-3 rounded-xl overflow-hidden border shadow-lg bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={handleNodesChange}
              onEdgesChange={onEdgesChange}
              nodeTypes={nodeTypes}
              nodesDraggable={!isLocked}
              nodesConnectable={false}
              fitView
              minZoom={0.5}
              maxZoom={1.5}
              defaultViewport={{ x: 50, y: 80, zoom: 0.8 }}
            >
              <Background color="#94a3b8" gap={30} size={1} />
              <Controls showInteractive={false} />
              <div className="absolute top-3 right-3 flex gap-2 z-50">
                <Button size="sm" onClick={toggleLock} className={`h-9 px-3 gap-1.5 text-xs font-medium shadow-md ${isLocked ? "bg-green-600 hover:bg-green-700 text-white" : "bg-white hover:bg-gray-100 text-gray-700 border border-gray-300"}`}>
                  {isLocked ? <Lock className="h-4 w-4" /> : <Unlock className="h-4 w-4" />}
                  {isLocked ? "Locked" : "Drag to arrange"}
                </Button>
                <Button size="sm" variant="outline" onClick={resetPositions} className="h-9 px-3 gap-1.5 text-xs font-medium shadow-md bg-white hover:bg-gray-100 border border-gray-300">
                  <RotateCcw className="h-4 w-4" />
                  Reset
                </Button>
              </div>
            </ReactFlow>
          </div>

          <div className="space-y-3">
            <Card className="shadow-lg">
              <CardContent className="p-3">
                <h3 className="font-bold text-sm mb-2 flex items-center gap-2">
                  <Activity className="h-4 w-4 text-primary" />
                  Diagnostic Statuses
                </h3>
                <div className="space-y-1.5 text-[10px]">
                  {[
                    { status: "DATA_FOUND", color: "green", desc: "Metrics returned" },
                    { status: "METRIC_NOT_FOUND", color: "red", desc: "Metric doesn't exist" },
                    { status: "TARGET_DOWN", color: "orange", desc: "Exporter offline" },
                    { status: "NO_RECENT_DATA", color: "yellow", desc: "No recent scrapes" },
                    { status: "LABEL_MISMATCH", color: "purple", desc: "Wrong selectors" },
                  ].map((s, i) => (
                    <div key={i} className={`px-2 py-1 rounded border-l-2 ${
                      s.color === "green" ? "border-green-500 bg-green-500/10" :
                      s.color === "red" ? "border-red-500 bg-red-500/10" :
                      s.color === "orange" ? "border-orange-500 bg-orange-500/10" :
                      s.color === "yellow" ? "border-yellow-500 bg-yellow-500/10" :
                      "border-purple-500 bg-purple-500/10"
                    }`}>
                      <code className="font-mono">{s.status}</code>
                      <p className="text-muted-foreground">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-orange-500/30">
              <CardContent className="p-3">
                <h4 className="font-semibold text-xs mb-2 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-orange-500" />
                  Real Discovery
                </h4>
                <div className="p-2 bg-muted/50 rounded text-[10px]">
                  <p className="text-orange-600 mb-1">RabbitMQ plugin disabled</p>
                  <p className="text-green-600">→ Enabled rabbitmq_prometheus</p>
                  <div className="mt-2 pt-2 border-t border-orange-500/20">
                    <span className="text-2xl font-bold text-orange-500">59,536</span>
                    <span className="text-muted-foreground ml-1">messages discovered</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-3">
                <h4 className="font-semibold text-xs mb-2">Grafana MCP Tools</h4>
                <div className="space-y-1 text-[10px]">
                  {["list_prometheus_metric_names", "query_prometheus", "list_prometheus_label_names"].map((tool, i) => (
                    <code key={i} className="block px-2 py-1 bg-muted/50 rounded text-primary">{tool}</code>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
