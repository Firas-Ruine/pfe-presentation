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
  Search,
  Database,
  Sparkles,
  Target,
  Layers,
  Brain,
  AlertTriangle,
  Lock,
  Unlock,
  RotateCcw,
} from "lucide-react"

const STORAGE_KEY = "incident-agent-nodes"
const LOCK_KEY = "incident-agent-locked"

// Alert Input Node
function AlertInputNode({ data }: NodeProps) {
  const [pulse, setPulse] = useState(false)
  const nodeData = data as { alert: string }

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true)
      setTimeout(() => setPulse(false), 1000)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div
        className={`p-4 rounded-xl bg-gradient-to-br from-red-900/80 to-rose-900/80 border-2 border-red-500/50 shadow-lg backdrop-blur-sm transition-all duration-300 ${
          pulse ? "scale-105" : ""
        }`}
        style={{ boxShadow: pulse ? "0 0 25px rgba(239,68,68,0.5)" : undefined }}
      >
        <div className="flex items-center gap-2 mb-1">
          <AlertTriangle className={`h-6 w-6 text-red-400 ${pulse ? "animate-pulse" : ""}`} />
          <span className="font-bold text-base text-white">Alert</span>
        </div>
        <p className="text-sm text-red-300">{nodeData.alert}</p>
      </div>
      <Handle type="source" position={Position.Right} className="w-3 h-3 !bg-blue-500" />
    </div>
  )
}

// Embedding Node
function EmbeddingNode({ data }: NodeProps) {
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProcessing(true)
      setTimeout(() => setProcessing(false), 1500)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <Handle type="target" position={Position.Left} className="w-3 h-3 !bg-blue-500" />
      <div
        className={`p-4 rounded-xl bg-gradient-to-br from-blue-900/80 to-indigo-900/80 border-2 border-blue-500/50 shadow-lg backdrop-blur-sm transition-all duration-300 ${
          processing ? "scale-105" : ""
        }`}
        style={{ boxShadow: processing ? "0 0 30px rgba(59,130,246,0.6)" : undefined }}
      >
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className={`h-6 w-6 text-blue-400 ${processing ? "animate-pulse" : ""}`} />
          <span className="font-bold text-base text-white">Embedding</span>
        </div>
        <p className="text-sm text-blue-300">text-embedding-ada-002</p>
        <Badge className="bg-blue-500/30 text-blue-200 text-sm mt-1">1536 dims</Badge>
      </div>
      <Handle type="source" position={Position.Right} className="w-3 h-3 !bg-purple-500" />
    </div>
  )
}

// Vector Search Node
function VectorSearchNode({ data }: NodeProps) {
  const [searching, setSearching] = useState(false)
  const [matchCount, setMatchCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSearching(true)
      setMatchCount(0)
      const countInterval = setInterval(() => {
        setMatchCount((prev) => Math.min(prev + 1, 5))
      }, 200)
      setTimeout(() => {
        setSearching(false)
        clearInterval(countInterval)
      }, 1500)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <Handle type="target" position={Position.Left} className="w-3 h-3 !bg-purple-500" />
      <div
        className={`p-4 rounded-xl bg-gradient-to-br from-purple-900/80 to-violet-900/80 border-2 border-purple-500/50 shadow-lg backdrop-blur-sm min-w-[180px] transition-all duration-300`}
        style={{ boxShadow: searching ? "0 0 35px rgba(168,85,247,0.6)" : "0 0 15px rgba(168,85,247,0.3)" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Search className={`h-6 w-6 text-purple-400 ${searching ? "animate-pulse" : ""}`} />
          <span className="font-bold text-base text-white">Qdrant Search</span>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm">
            <Database className="h-4 w-4 text-purple-400" />
            <span className="text-purple-300">1,247 incidents indexed</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Target className="h-4 w-4 text-purple-400" />
            <span className="text-purple-300">cosine similarity, top-k=5</span>
          </div>
        </div>
        {searching && (
          <div className="mt-2 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-6 h-1.5 rounded transition-all duration-200 ${
                  i < matchCount ? "bg-purple-400" : "bg-purple-900"
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <Handle type="source" position={Position.Right} className="w-3 h-3 !bg-cyan-500" />
    </div>
  )
}

// Match Results Node
function MatchResultsNode({ data }: NodeProps) {
  const [activeMatch, setActiveMatch] = useState(0)
  const matches = [
    { score: 94, title: "Nova hypervisor memory", age: "2d" },
    { score: 87, title: "KVM connection timeout", age: "1w" },
    { score: 81, title: "Instance stuck BUILDING", age: "2w" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMatch((prev) => (prev + 1) % matches.length)
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <Handle type="target" position={Position.Left} className="w-3 h-3 !bg-cyan-500" />
      <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-900/80 to-teal-900/80 border-2 border-cyan-500/50 shadow-lg backdrop-blur-sm min-w-[200px]">
        <div className="flex items-center gap-2 mb-2">
          <Layers className="h-6 w-6 text-cyan-400" />
          <span className="font-bold text-base text-white">Matches</span>
        </div>
        <div className="space-y-2">
          {matches.map((match, i) => (
            <div
              key={i}
              className={`px-3 py-2 rounded text-sm transition-all duration-300 ${
                i === activeMatch ? "bg-cyan-500 text-white scale-[1.02]" : "bg-cyan-900/50 text-cyan-300"
              }`}
              style={{ boxShadow: i === activeMatch ? "0 0 15px rgba(6,182,212,0.5)" : undefined }}
            >
              <div className="flex justify-between items-center">
                <Badge className={`text-xs ${
                  match.score >= 90 ? "bg-green-500" : match.score >= 85 ? "bg-yellow-500" : "bg-orange-500"
                }`}>
                  {match.score}%
                </Badge>
                <span className="text-xs opacity-70">{match.age}</span>
              </div>
              <p className="mt-0.5 truncate">{match.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Handle type="source" position={Position.Right} className="w-3 h-3 !bg-green-500" />
    </div>
  )
}

// Evidence Output Node
function EvidenceNode({ data }: NodeProps) {
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true)
      setTimeout(() => setPulse(false), 1000)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <Handle type="target" position={Position.Left} className="w-3 h-3 !bg-green-500" />
      <div
        className={`p-4 rounded-xl bg-gradient-to-br from-green-900/80 to-emerald-900/80 border-2 border-green-500/50 shadow-lg backdrop-blur-sm transition-all duration-300 ${
          pulse ? "scale-105" : ""
        }`}
        style={{ boxShadow: pulse ? "0 0 25px rgba(34,197,94,0.5)" : undefined }}
      >
        <div className="flex items-center gap-2 mb-1">
          <Brain className={`h-6 w-6 text-green-400 ${pulse ? "animate-pulse" : ""}`} />
          <span className="font-bold text-base text-white">Evidence</span>
        </div>
        <p className="text-sm text-green-300">→ Reasoner Pipeline</p>
        <Badge className="bg-green-500/30 text-green-200 text-sm mt-1">confidence: 0.87</Badge>
      </div>
    </div>
  )
}

const nodeTypes = {
  alertInput: AlertInputNode,
  embedding: EmbeddingNode,
  vectorSearch: VectorSearchNode,
  matchResults: MatchResultsNode,
  evidence: EvidenceNode,
}

const initialNodes: Node[] = [
  { id: "alert", type: "alertInput", position: { x: 0, y: 100 }, data: { alert: "Nova Instance Boot Failure" } },
  { id: "embed", type: "embedding", position: { x: 200, y: 90 }, data: {} },
  { id: "search", type: "vectorSearch", position: { x: 420, y: 70 }, data: {} },
  { id: "matches", type: "matchResults", position: { x: 660, y: 60 }, data: {} },
  { id: "evidence", type: "evidence", position: { x: 900, y: 100 }, data: {} },
]

const initialEdges: Edge[] = [
  { id: "e1", source: "alert", target: "embed", animated: true, style: { stroke: "#3b82f6", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#3b82f6" } },
  { id: "e2", source: "embed", target: "search", animated: true, style: { stroke: "#8b5cf6", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#8b5cf6" }, label: "vector", labelStyle: { fill: "#8b5cf6", fontSize: 11 }, labelBgStyle: { fill: "transparent" } },
  { id: "e3", source: "search", target: "matches", animated: true, style: { stroke: "#06b6d4", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#06b6d4" }, label: "top-5", labelStyle: { fill: "#06b6d4", fontSize: 11 }, labelBgStyle: { fill: "transparent" } },
  { id: "e4", source: "matches", target: "evidence", animated: true, style: { stroke: "#22c55e", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#22c55e" } },
]

export default function IncidentAgentSlide() {
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
          title="Incident Agent: RAG Pipeline"
          subtitle="Watch vector search — Historical incident matching via Qdrant"
        />

        <div className="flex-1 grid grid-cols-4 gap-4">
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
              minZoom={0.4}
              maxZoom={1.5}
              defaultViewport={{ x: 40, y: 80, zoom: 0.7 }}
            >
              <Background color="#94a3b8" gap={30} size={1} />
              <Controls showInteractive={false} />
              <div className="absolute top-3 right-3 flex gap-2 z-50">
                <Button size="sm" onClick={toggleLock} className={`h-9 px-3 gap-1.5 text-sm font-medium shadow-md ${isLocked ? "bg-green-600 hover:bg-green-700 text-white" : "bg-white hover:bg-gray-100 text-gray-700 border border-gray-300"}`}>
                  {isLocked ? <Lock className="h-4 w-4" /> : <Unlock className="h-4 w-4" />}
                  {isLocked ? "Locked" : "Drag to arrange"}
                </Button>
                <Button size="sm" variant="outline" onClick={resetPositions} className="h-9 px-3 gap-1.5 text-sm font-medium shadow-md bg-white hover:bg-gray-100 border border-gray-300">
                  <RotateCcw className="h-4 w-4" />
                  Reset
                </Button>
              </div>
            </ReactFlow>
          </div>

          <div className="space-y-4">
            <Card className="shadow-lg">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Database className="h-5 w-5 text-purple-500" />
                  Qdrant Vector Store
                </h3>
                <div className="space-y-2 text-base">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Collection</span>
                    <code className="text-purple-500">incidents</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dimensions</span>
                    <span className="text-purple-500">1536</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Indexed</span>
                    <span className="text-purple-500">1,247</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-2 border-purple-500/30">
              <CardContent className="p-4">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5 text-orange-500" />
                  Hybrid Scoring
                </h4>
                <div className="p-3 bg-muted/50 rounded font-mono text-base">
                  <span className="text-purple-500">score</span>
                  <span className="text-muted-foreground"> = 0.7 × </span>
                  <span className="text-cyan-500">similarity</span>
                  <span className="text-muted-foreground"> + 0.3 × </span>
                  <span className="text-blue-500">recency</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div>
                    <div className="text-3xl font-bold text-purple-500">1,247</div>
                    <div className="text-base text-muted-foreground">Indexed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-500">&lt;50ms</div>
                    <div className="text-base text-muted-foreground">Latency</div>
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
