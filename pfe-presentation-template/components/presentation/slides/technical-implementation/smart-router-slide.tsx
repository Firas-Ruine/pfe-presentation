"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GitBranch,
  Zap,
  Brain,
  ArrowRight,
  CheckCircle,
  Clock,
} from "lucide-react"

export default function SmartRouterSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader
          badge="7 • Implementation"
          title="Smart Router Logic"
          subtitle="Rule-based routing with no LLM overhead (< 10ms)"
        />

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left: Code */}
          <Card className="shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-base">
                <GitBranch className="h-5 w-5 mr-2 text-primary" />
                smart_router.py
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-xs bg-slate-900 text-green-400 p-3 rounded-lg overflow-x-auto">
{`def smart_router_node(state: AgentState):
    """Dynamic Orchestrator-Worker Pattern"""
    confidence = state.get("confidence", 0.0)
    
    # DECISION 1: Fast path for high confidence
    if confidence >= 0.95:
        return {
            "route": "fast_path",
            "agents_to_spawn": [],  # Skip investigation
            "routing_reason": f"High confidence"
        }
    
    # DECISION 2: Investigation path
    agents_to_spawn = []
    
    # Metrics Agent: Always for PREDICTIVE
    if alert_type == "PREDICTIVE":
        agents_to_spawn.append("metrics_agent")
    
    # Incident Agent: For recurring/critical
    if should_spawn_incident_agent():
        agents_to_spawn.append("incident_agent")
    
    # Runbook Agent: Always (pattern matching)
    agents_to_spawn.append("runbook_agent")
    
    return {
        "route": "investigation",
        "agents_to_spawn": agents_to_spawn
    }`}
              </pre>
            </CardContent>
          </Card>

          {/* Right: Explanation */}
          <div className="space-y-4">
            <Card className="shadow-md bg-gradient-to-br from-green-500/5 to-transparent border-l-4 border-l-green-500">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <Zap className="h-6 w-6 text-green-500" />
                  <h4 className="font-bold text-lg">Fast Path (≥95% confidence)</h4>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="p-2 rounded bg-muted/30">
                    <Clock className="h-4 w-4 text-green-500 mb-1" />
                    <div className="font-medium">~30 seconds</div>
                    <div className="text-xs text-muted-foreground">Total MTTR</div>
                  </div>
                  <div className="p-2 rounded bg-muted/30">
                    <CheckCircle className="h-4 w-4 text-green-500 mb-1" />
                    <div className="font-medium">0 Agents</div>
                    <div className="text-xs text-muted-foreground">Skip investigation</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md bg-gradient-to-br from-blue-500/5 to-transparent border-l-4 border-l-blue-500">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <Brain className="h-6 w-6 text-blue-500" />
                  <h4 className="font-bold text-lg">Investigation Path</h4>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="p-2 rounded bg-muted/30">
                    <Clock className="h-4 w-4 text-blue-500 mb-1" />
                    <div className="font-medium">~2 minutes</div>
                    <div className="text-xs text-muted-foreground">Total MTTR</div>
                  </div>
                  <div className="p-2 rounded bg-muted/30">
                    <CheckCircle className="h-4 w-4 text-blue-500 mb-1" />
                    <div className="font-medium">1-3 Agents</div>
                    <div className="text-xs text-muted-foreground">Dynamic spawning</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Key Design Decisions</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span><strong>No LLM for routing</strong> - Rule-based = fast & deterministic</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span><strong>Dynamic agent spawn</strong> - Only needed agents</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span><strong>Predictive priority</strong> - Always investigate predictions</span>
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
