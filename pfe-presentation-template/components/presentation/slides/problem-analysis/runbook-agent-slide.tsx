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
  BookOpen,
  Search,
  Play,
  CheckCircle,
  Cog,
  Server,
  AlertTriangle,
  Terminal,
  FileCode,
  LucideIcon,
  Lock,
  Unlock,
  RotateCcw,
} from "lucide-react"

const STORAGE_KEY = "runbook-agent-nodes"
const LOCK_KEY = "runbook-agent-locked"

// Alert Input Node
function AlertInputNode({ data }: NodeProps) {
  const [pulse, setPulse] = useState(false)
  const nodeData = data as { alert: string; service: string }

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true)
      setTimeout(() => setPulse(false), 1000)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div
        className={`p-3 rounded-xl bg-gradient-to-br from-red-900/80 to-rose-900/80 border-2 border-red-500/50 shadow-lg backdrop-blur-sm transition-all duration-300 ${
          pulse ? "scale-105" : ""
        }`}
        style={{ boxShadow: pulse ? "0 0 25px rgba(239,68,68,0.5)" : undefined }}
      >
        <div className="flex items-center gap-2 mb-1">
          <AlertTriangle className={`h-5 w-5 text-red-400 ${pulse ? "animate-pulse" : ""}`} />
          <span className="font-bold text-sm text-white">Alert</span>
        </div>
        <p className="text-[10px] text-red-300">{nodeData.alert}</p>
        <Badge className="bg-red-500/30 text-red-200 text-[9px] mt-1">{nodeData.service}</Badge>
      </div>
      <Handle type="source" position={Position.Right} className="w-3 h-3 !bg-blue-500" />
    </div>
  )
}

// Pattern Extraction Node
function PatternNode({ data }: NodeProps) {
  const [extracting, setExtracting] = useState(false)
  const patterns = ["queue_backlog", "rabbitmq", "cinder-scheduler"]

  useEffect(() => {
    const interval = setInterval(() => {
      setExtracting(true)
      setTimeout(() => setExtracting(false), 1500)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <Handle type="target" position={Position.Left} className="w-3 h-3 !bg-blue-500" />
      <div
        className={`p-3 rounded-xl bg-gradient-to-br from-blue-900/80 to-indigo-900/80 border-2 border-blue-500/50 shadow-lg backdrop-blur-sm transition-all duration-300 ${
          extracting ? "scale-105" : ""
        }`}
        style={{ boxShadow: extracting ? "0 0 30px rgba(59,130,246,0.6)" : undefined }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Search className={`h-5 w-5 text-blue-400 ${extracting ? "animate-pulse" : ""}`} />
          <span className="font-bold text-sm text-white">Pattern Extract</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {patterns.map((p, i) => (
            <Badge
              key={i}
              className={`text-[9px] transition-all ${
                extracting ? "bg-blue-500 text-white" : "bg-blue-900/50 text-blue-300"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {p}
            </Badge>
          ))}
        </div>
      </div>
      <Handle type="source" position={Position.Right} className="w-3 h-3 !bg-purple-500" />
    </div>
  )
}

// Catalog Search Node
function CatalogNode({ data }: NodeProps) {
  const [searching, setSearching] = useState(false)
  const [matchedTemplate, setMatchedTemplate] = useState<number | null>(null)
  const templates = [
    { id: 42, name: "restart_openstack_service" },
    { id: 78, name: "clear_rabbitmq_queue" },
    { id: 103, name: "restart_libvirtd" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setSearching(true)
      setTimeout(() => {
        setMatchedTemplate(78)
        setTimeout(() => {
          setSearching(false)
          setMatchedTemplate(null)
        }, 2000)
      }, 1000)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <Handle type="target" position={Position.Left} className="w-3 h-3 !bg-purple-500" />
      <div
        className={`p-3 rounded-xl bg-gradient-to-br from-purple-900/80 to-violet-900/80 border-2 border-purple-500/50 shadow-lg backdrop-blur-sm min-w-[180px] transition-all duration-300`}
        style={{ boxShadow: searching ? "0 0 35px rgba(168,85,247,0.6)" : "0 0 15px rgba(168,85,247,0.3)" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className={`h-5 w-5 text-purple-400 ${searching ? "animate-pulse" : ""}`} />
          <span className="font-bold text-sm text-white">AWX Catalog</span>
        </div>
        <div className="space-y-1">
          {templates.map((t) => (
            <div
              key={t.id}
              className={`px-2 py-1 rounded text-[10px] font-mono transition-all duration-300 ${
                matchedTemplate === t.id
                  ? "bg-green-500 text-white scale-[1.02]"
                  : "bg-purple-900/50 text-purple-300"
              }`}
              style={{ boxShadow: matchedTemplate === t.id ? "0 0 15px rgba(34,197,94,0.5)" : undefined }}
            >
              #{t.id} {t.name}
            </div>
          ))}
        </div>
        <Badge className="bg-purple-500/30 text-purple-200 text-[9px] mt-2">47 templates</Badge>
      </div>
      <Handle type="source" position={Position.Right} className="w-3 h-3 !bg-orange-500" />
    </div>
  )
}

// Parameter Node
function ParamNode({ data }: NodeProps) {
  const [active, setActive] = useState(false)
  const params = [
    { key: "queue_name", value: "cinder-scheduler_fanout" },
    { key: "vhost", value: "openstack" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(true)
      setTimeout(() => setActive(false), 1500)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <Handle type="target" position={Position.Left} className="w-3 h-3 !bg-orange-500" />
      <div
        className={`p-3 rounded-xl bg-gradient-to-br from-orange-900/80 to-amber-900/80 border-2 border-orange-500/50 shadow-lg backdrop-blur-sm transition-all duration-300 ${
          active ? "scale-105" : ""
        }`}
        style={{ boxShadow: active ? "0 0 25px rgba(249,115,22,0.5)" : undefined }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Cog className={`h-5 w-5 text-orange-400 ${active ? "animate-spin" : ""}`} />
          <span className="font-bold text-sm text-white">Parameters</span>
        </div>
        <div className="space-y-1">
          {params.map((p, i) => (
            <div key={i} className="text-[10px] font-mono">
              <span className="text-orange-300">{p.key}</span>
              <span className="text-gray-500"> = </span>
              <span className="text-yellow-400">"{p.value}"</span>
            </div>
          ))}
        </div>
      </div>
      <Handle type="source" position={Position.Right} className="w-3 h-3 !bg-green-500" />
    </div>
  )
}

// Command Output Node
function CommandNode({ data }: NodeProps) {
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true)
      setTimeout(() => setPulse(false), 1200)
    }, 5500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <Handle type="target" position={Position.Left} className="w-3 h-3 !bg-green-500" />
      <div
        className={`p-3 rounded-xl bg-gradient-to-br from-green-900/80 to-emerald-900/80 border-2 border-green-500/50 shadow-lg backdrop-blur-sm transition-all duration-300 ${
          pulse ? "scale-105" : ""
        }`}
        style={{ boxShadow: pulse ? "0 0 30px rgba(34,197,94,0.6)" : undefined }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Terminal className={`h-5 w-5 text-green-400 ${pulse ? "animate-pulse" : ""}`} />
          <span className="font-bold text-sm text-white">Generated</span>
        </div>
        <div className="p-2 bg-slate-900/80 rounded text-[9px] font-mono text-green-300">
          awx job_template launch 78
        </div>
        <Badge className="bg-green-500/30 text-green-200 text-[9px] mt-2 flex items-center gap-1">
          <CheckCircle className="h-3 w-3" />
          92% confidence
        </Badge>
      </div>
    </div>
  )
}

const nodeTypes = {
  alertInput: AlertInputNode,
  pattern: PatternNode,
  catalog: CatalogNode,
  param: ParamNode,
  command: CommandNode,
}

const initialNodes: Node[] = [
  { id: "alert", type: "alertInput", position: { x: 0, y: 100 }, data: { alert: "RabbitMQ Queue Backlog", service: "cinder-scheduler" } },
  { id: "pattern", type: "pattern", position: { x: 180, y: 90 }, data: {} },
  { id: "catalog", type: "catalog", position: { x: 380, y: 60 }, data: {} },
  { id: "param", type: "param", position: { x: 620, y: 80 }, data: {} },
  { id: "command", type: "command", position: { x: 820, y: 90 }, data: {} },
]

const initialEdges: Edge[] = [
  { id: "e1", source: "alert", target: "pattern", animated: true, style: { stroke: "#3b82f6", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#3b82f6" } },
  { id: "e2", source: "pattern", target: "catalog", animated: true, style: { stroke: "#8b5cf6", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#8b5cf6" }, label: "BM25", labelStyle: { fill: "#8b5cf6", fontSize: 9 }, labelBgStyle: { fill: "transparent" } },
  { id: "e3", source: "catalog", target: "param", animated: true, style: { stroke: "#f97316", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#f97316" }, label: "#78", labelStyle: { fill: "#f97316", fontSize: 9 }, labelBgStyle: { fill: "transparent" } },
  { id: "e4", source: "param", target: "command", animated: true, style: { stroke: "#22c55e", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#22c55e" } },
]

export default function RunbookAgentSlide() {
  const [isLocked, setIsLocked] = useState(false)
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, , onEdgesChange] = useEdgesState(initialEdges)

  useEffect(() => {
    const savedPositions = localStorage.getItem(STORAGE_KEY)
    const savedLock = localStorage.getItem(LOCK_KEY)
    if (savedPositions) {
      try {
        const positions = JSON.parse(savedPositions) as Record<string, { x: number; y: number }>
        setNodes((nds) => nds.map((node) => ({ ...node, position: positions[node.id] || node.position })))
      } catch (e) { console.error(e) }
    }
    if (savedLock) setIsLocked(savedLock === "true")
  }, [setNodes])

  const handleNodesChange = useCallback((changes: any) => {
    if (!isLocked) {
      onNodesChange(changes)
      if (changes.some((c: any) => c.type === 'position' && c.dragging === false)) {
        setTimeout(() => {
          const positions: Record<string, { x: number; y: number }> = {}
          nodes.forEach((node) => { positions[node.id] = node.position })
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
      nodes.forEach((node) => { positions[node.id] = node.position })
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
          title="Runbook Agent: AWX Automation"
          subtitle="Watch template matching — Pattern to executable remediation playbook"
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
              defaultViewport={{ x: 40, y: 80, zoom: 0.75 }}
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
                  <Server className="h-4 w-4 text-green-500" />
                  AWX Templates
                </h3>
                <div className="space-y-1.5 text-[10px]">
                  {[
                    { id: 42, name: "restart_service", runs: 156 },
                    { id: 78, name: "clear_queue", runs: 89 },
                    { id: 103, name: "restart_libvirtd", runs: 234 },
                  ].map((t) => (
                    <div key={t.id} className="flex justify-between items-center px-2 py-1 bg-muted/50 rounded">
                      <code className="text-green-500">#{t.id}</code>
                      <span>{t.name}</span>
                      <Badge variant="secondary" className="text-[8px]">{t.runs}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-2 border-green-500/30">
              <CardContent className="p-3">
                <h4 className="font-semibold text-xs mb-2 flex items-center gap-2">
                  <FileCode className="h-4 w-4 text-green-500" />
                  Ansible Integration
                </h4>
                <p className="text-[10px] text-muted-foreground">
                  Version-controlled playbooks in GitLab with AWX providing execution, scheduling, and RBAC.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-3">
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div>
                    <div className="text-2xl font-bold text-orange-500">47</div>
                    <div className="text-[10px] text-muted-foreground">Templates</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-500">89%</div>
                    <div className="text-[10px] text-muted-foreground">Match Rate</div>
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
