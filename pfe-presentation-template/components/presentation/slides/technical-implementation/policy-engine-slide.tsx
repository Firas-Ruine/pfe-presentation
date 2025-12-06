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
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Lock,
  Unlock,
  Users,
  Zap,
  Eye,
  RotateCcw,
} from "lucide-react"

const STORAGE_KEY = "tech-policy-engine-nodes"
const LOCK_KEY = "tech-policy-engine-locked"

// Action Input Node - Light Theme
function ActionInputNode({ data }: NodeProps) {
  const [isActive, setIsActive] = useState(false)
  const nodeData = data as { action: string; risk: string }

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive(true)
      setTimeout(() => setIsActive(false), 1200)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative transition-all duration-300 ${isActive ? "scale-105" : "scale-100"}`}>
      <div
        className={`p-3 rounded-xl bg-blue-500/10 border-2 border-blue-500/50 shadow-lg transition-all duration-300 ${
          isActive ? "ring-4 ring-offset-2 ring-blue-500/30" : ""
        }`}
      >
        <div className="flex items-center gap-2 mb-1">
          <Zap className="h-5 w-5 text-blue-500" />
          <span className="font-bold text-sm">Action</span>
        </div>
        <p className="text-[10px] text-muted-foreground">{nodeData.action}</p>
        <Badge
          variant="outline"
          className={`text-[9px] mt-1 ${
            nodeData.risk === "low" ? "border-green-500 text-green-600" :
            nodeData.risk === "medium" ? "border-yellow-500 text-yellow-600" :
            "border-red-500 text-red-600"
          }`}
        >
          {nodeData.risk} risk
        </Badge>
      </div>
      <Handle type="source" position={Position.Right} className="w-3 h-3 !bg-yellow-500" />
    </div>
  )
}

// Policy Check Node - Light Theme
function PolicyCheckNode({ data }: NodeProps) {
  const [checking, setChecking] = useState(false)
  const [checkIndex, setCheckIndex] = useState(0)
  const nodeData = data as { checks: string[] }

  useEffect(() => {
    const interval = setInterval(() => {
      setChecking(true)
      setCheckIndex(0)
      const checkInterval = setInterval(() => {
        setCheckIndex((prev) => {
          if (prev >= nodeData.checks.length - 1) {
            clearInterval(checkInterval)
            setTimeout(() => setChecking(false), 500)
            return prev
          }
          return prev + 1
        })
      }, 400)
    }, 4000)
    return () => clearInterval(interval)
  }, [nodeData.checks.length])

  return (
    <div className="relative">
      <Handle type="target" position={Position.Left} className="w-3 h-3 !bg-yellow-500" />
      <div
        className={`p-3 rounded-xl bg-yellow-500/10 border-2 border-yellow-500/50 shadow-lg min-w-[170px] transition-all duration-300 ${
          checking ? "ring-4 ring-offset-2 ring-yellow-500/30" : ""
        }`}
      >
        <div className="flex items-center gap-2 mb-2">
          <Shield className={`h-5 w-5 text-yellow-600 ${checking ? "animate-pulse" : ""}`} />
          <span className="font-bold text-sm">Policy Gate</span>
        </div>
        <div className="space-y-1">
          {nodeData.checks.map((check, i) => (
            <div
              key={i}
              className={`flex items-center gap-1.5 text-[10px] px-2 py-1 rounded transition-all duration-300 ${
                checking && i <= checkIndex
                  ? "bg-green-500/20 text-green-700"
                  : "bg-background/50 text-muted-foreground"
              }`}
            >
              {checking && i <= checkIndex ? (
                <CheckCircle className="h-3 w-3" />
              ) : (
                <Eye className="h-3 w-3 opacity-50" />
              )}
              {check}
            </div>
          ))}
        </div>
      </div>
      <Handle type="source" position={Position.Right} className="w-3 h-3 !bg-orange-500" />
    </div>
  )
}

// Circuit Breaker Node - Light Theme
function CircuitBreakerNode(_props: NodeProps) {
  const [status, setStatus] = useState<"closed" | "open" | "half-open">("closed")
  const [failures, setFailures] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFailures((prev) => {
        const next = (prev + 1) % 5
        if (next >= 3) setStatus("open")
        else if (next >= 2) setStatus("half-open")
        else setStatus("closed")
        return next
      })
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  const statusColors = {
    closed: { bg: "bg-green-500/10", border: "border-green-500/50", text: "text-green-600", badge: "bg-green-500" },
    "half-open": { bg: "bg-yellow-500/10", border: "border-yellow-500/50", text: "text-yellow-600", badge: "bg-yellow-500" },
    open: { bg: "bg-red-500/10", border: "border-red-500/50", text: "text-red-600", badge: "bg-red-500" },
  }

  const colors = statusColors[status]

  return (
    <div className="relative">
      <Handle type="target" position={Position.Left} className="w-3 h-3 !bg-orange-500" />
      <div
        className={`p-3 rounded-xl ${colors.bg} border-2 ${colors.border} shadow-lg transition-all duration-300`}
      >
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className={`h-5 w-5 ${colors.text}`} />
          <span className="font-bold text-sm">Circuit Breaker</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] text-muted-foreground">Status:</span>
          <Badge className={`text-[9px] ${colors.badge} text-white`}>
            {status.toUpperCase()}
          </Badge>
        </div>
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                i < failures ? "bg-red-500" : "bg-muted"
              }`}
            />
          ))}
        </div>
        <p className="text-[9px] text-muted-foreground mt-1">3 failures / 30min</p>
      </div>
      <Handle type="source" position={Position.Right} className="w-3 h-3 !bg-purple-500" />
    </div>
  )
}

// RBAC Check Node - Light Theme
function RbacNode(_props: NodeProps) {
  const [activeRole, setActiveRole] = useState(0)
  const roles = ["operator", "sre", "admin"]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRole((prev) => (prev + 1) % roles.length)
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <Handle type="target" position={Position.Left} className="w-3 h-3 !bg-purple-500" />
      <div
        className="p-3 rounded-xl bg-purple-500/10 border-2 border-purple-500/50 shadow-lg transition-all duration-300"
      >
        <div className="flex items-center gap-2 mb-2">
          <Users className="h-5 w-5 text-purple-500" />
          <span className="font-bold text-sm">RBAC</span>
        </div>
        <div className="space-y-1">
          {roles.map((role, i) => (
            <div
              key={i}
              className={`flex items-center justify-between text-[10px] px-2 py-1 rounded transition-all duration-300 ${
                i === activeRole
                  ? "bg-purple-500 text-white scale-[1.02]"
                  : "bg-background/50 text-muted-foreground"
              }`}
            >
              <span>{role}</span>
              <Lock className="h-3 w-3" />
            </div>
          ))}
        </div>
      </div>
      <Handle type="source" position={Position.Right} className="w-3 h-3 !bg-green-500" />
    </div>
  )
}

// Decision Output Node - Light Theme
function DecisionNode(_props: NodeProps) {
  const [decision, setDecision] = useState<"approve" | "require_human" | "block">("approve")

  useEffect(() => {
    const decisions: Array<"approve" | "require_human" | "block"> = ["approve", "require_human", "block"]
    let index = 0
    const interval = setInterval(() => {
      index = (index + 1) % decisions.length
      setDecision(decisions[index])
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const decisionConfig = {
    approve: { icon: <CheckCircle className="h-5 w-5" />, bg: "bg-green-500/10", border: "border-green-500/50", text: "text-green-600", ring: "ring-green-500/30" },
    require_human: { icon: <Users className="h-5 w-5" />, bg: "bg-yellow-500/10", border: "border-yellow-500/50", text: "text-yellow-600", ring: "ring-yellow-500/30" },
    block: { icon: <XCircle className="h-5 w-5" />, bg: "bg-red-500/10", border: "border-red-500/50", text: "text-red-600", ring: "ring-red-500/30" },
  }

  const config = decisionConfig[decision]

  return (
    <div className="relative">
      <Handle type="target" position={Position.Left} className="w-3 h-3 !bg-green-500" />
      <div
        className={`p-3 rounded-xl ${config.bg} border-2 ${config.border} shadow-lg transition-all duration-500 ring-4 ring-offset-2 ${config.ring}`}
      >
        <div className="flex items-center gap-2 mb-1">
          <div className={config.text}>{config.icon}</div>
          <span className="font-bold text-sm">Decision</span>
        </div>
        <Badge variant="outline" className={`text-[10px] ${config.text}`}>
          {decision.replace("_", " ").toUpperCase()}
        </Badge>
      </div>
    </div>
  )
}

const nodeTypes = {
  actionInput: ActionInputNode,
  policyCheck: PolicyCheckNode,
  circuitBreaker: CircuitBreakerNode,
  rbac: RbacNode,
  decision: DecisionNode,
}

const initialNodes: Node[] = [
  { id: "action", type: "actionInput", position: { x: 0, y: 80 }, data: { action: "restart_mariadb_galera", risk: "high" } },
  { id: "policy", type: "policyCheck", position: { x: 180, y: 50 }, data: { checks: ["Disposition", "Blast Radius", "Auto-Approve"] } },
  { id: "circuit", type: "circuitBreaker", position: { x: 400, y: 60 }, data: {} },
  { id: "rbac", type: "rbac", position: { x: 600, y: 70 }, data: {} },
  { id: "decision", type: "decision", position: { x: 800, y: 90 }, data: {} },
]

const initialEdges: Edge[] = [
  { id: "e1", source: "action", target: "policy", animated: true, style: { stroke: "#eab308", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#eab308" } },
  { id: "e2", source: "policy", target: "circuit", animated: true, style: { stroke: "#f97316", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#f97316" }, label: "pass", labelStyle: { fill: "#f97316", fontSize: 9 }, labelBgStyle: { fill: "transparent" } },
  { id: "e3", source: "circuit", target: "rbac", animated: true, style: { stroke: "#8b5cf6", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#8b5cf6" }, label: "closed", labelStyle: { fill: "#8b5cf6", fontSize: 9 }, labelBgStyle: { fill: "transparent" } },
  { id: "e4", source: "rbac", target: "decision", animated: true, style: { stroke: "#22c55e", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#22c55e" } },
]

export default function PolicyEngineSlide() {
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
      } catch (e) {
        console.error("Failed to parse saved positions:", e)
      }
    }
    if (savedLock) {
      setIsLocked(savedLock === "true")
    }
  }, [setNodes])

  const handleNodesChange = useCallback(
    (changes: any) => {
      if (!isLocked) {
        onNodesChange(changes)
        if (changes.some((c: any) => c.type === "position" && c.dragging === false)) {
          setTimeout(() => {
            const positions: Record<string, { x: number; y: number }> = {}
            nodes.forEach((node) => { positions[node.id] = node.position })
            localStorage.setItem(STORAGE_KEY, JSON.stringify(positions))
          }, 50)
        }
      }
    },
    [isLocked, onNodesChange, nodes]
  )

  const toggleLock = useCallback(() => {
    const newLockState = !isLocked
    setIsLocked(newLockState)
    localStorage.setItem(LOCK_KEY, String(newLockState))
    if (newLockState) {
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
          badge="7 • Implementation"
          title="Policy Engine"
          subtitle="YAML-driven RBAC + Circuit Breaker protection"
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
              defaultViewport={{ x: 40, y: 60, zoom: 0.75 }}
            >
              <Background color="#94a3b8" gap={30} size={1} />
              <Controls showInteractive={false} />
              <div className="absolute top-2 right-2 z-10 flex gap-2">
                <Button
                  size="sm"
                  variant={isLocked ? "default" : "outline"}
                  onClick={toggleLock}
                  className="h-8 px-3"
                >
                  {isLocked ? <Lock className="h-4 w-4 mr-1" /> : <Unlock className="h-4 w-4 mr-1" />}
                  {isLocked ? "Locked" : "Unlocked"}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={resetPositions}
                  className="h-8 px-3"
                >
                  <RotateCcw className="h-4 w-4 mr-1" />
                  Reset
                </Button>
              </div>
            </ReactFlow>
          </div>

          <div className="space-y-3">
            <Card className="shadow-lg">
              <CardContent className="p-3">
                <h3 className="font-bold text-sm mb-2 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  Risk Levels
                </h3>
                <div className="space-y-1.5">
                  {[
                    { level: "Low", action: "auto-approve", color: "bg-green-500" },
                    { level: "Medium", action: "SRE approval", color: "bg-yellow-500" },
                    { level: "High", action: "Admin required", color: "bg-red-500" },
                  ].map((risk, i) => (
                    <div key={i} className="flex items-center justify-between text-[10px] px-2 py-1.5 bg-muted/50 rounded">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${risk.color}`} />
                        <span>{risk.level}</span>
                      </div>
                      <span className="text-muted-foreground">{risk.action}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-2 border-orange-500/30">
              <CardContent className="p-3">
                <h4 className="font-semibold text-xs mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-orange-500" />
                  Circuit Breaker
                </h4>
                <div className="grid grid-cols-3 gap-1 text-center text-[10px]">
                  <div className="p-1.5 bg-muted/50 rounded">
                    <div className="font-bold text-orange-500">3</div>
                    <div className="text-muted-foreground">Failures</div>
                  </div>
                  <div className="p-1.5 bg-muted/50 rounded">
                    <div className="font-bold text-orange-500">30</div>
                    <div className="text-muted-foreground">Window</div>
                  </div>
                  <div className="p-1.5 bg-muted/50 rounded">
                    <div className="font-bold text-orange-500">60</div>
                    <div className="text-muted-foreground">Cooldown</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-3">
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">YAML</div>
                    <div className="text-[10px] text-muted-foreground">Config Driven</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-500">100%</div>
                    <div className="text-[10px] text-muted-foreground">Coverage</div>
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
