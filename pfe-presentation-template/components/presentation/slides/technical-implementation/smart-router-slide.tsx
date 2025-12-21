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
              <CardTitle className="flex items-center text-xl">
                <GitBranch className="h-7 w-7 mr-2 text-primary" />
                smart_router.py
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-sm bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto">
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
              <CardContent className="p-5">
                <div className="flex items-center space-x-3 mb-3">
                  <Zap className="h-8 w-8 text-green-500" />
                  <h4 className="font-bold text-xl">Fast Path (≥95% confidence)</h4>
                </div>
                <div className="grid grid-cols-2 gap-4 text-lg">
                  <div className="p-3 rounded bg-muted/30">
                    <Clock className="h-6 w-6 text-green-500 mb-2" />
                    <div className="font-medium text-xl">~30 seconds</div>
                    <div className="text-lg text-muted-foreground">Total MTTR</div>
                  </div>
                  <div className="p-3 rounded bg-muted/30">
                    <CheckCircle className="h-6 w-6 text-green-500 mb-2" />
                    <div className="font-medium text-xl">0 Agents</div>
                    <div className="text-lg text-muted-foreground">Skip investigation</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md bg-gradient-to-br from-blue-500/5 to-transparent border-l-4 border-l-blue-500">
              <CardContent className="p-5">
                <div className="flex items-center space-x-3 mb-3">
                  <Brain className="h-8 w-8 text-blue-500" />
                  <h4 className="font-bold text-xl">Investigation Path</h4>
                </div>
                <div className="grid grid-cols-2 gap-4 text-lg">
                  <div className="p-3 rounded bg-muted/30">
                    <Clock className="h-6 w-6 text-blue-500 mb-2" />
                    <div className="font-medium text-xl">~2 minutes</div>
                    <div className="text-lg text-muted-foreground">Total MTTR</div>
                  </div>
                  <div className="p-3 rounded bg-muted/30">
                    <CheckCircle className="h-6 w-6 text-blue-500 mb-2" />
                    <div className="font-medium text-xl">1-3 Agents</div>
                    <div className="text-lg text-muted-foreground">Dynamic spawning</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="p-5">
                <h4 className="font-semibold text-xl mb-3">Key Design Decisions</h4>
                <div className="space-y-3 text-lg">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <span><strong>No LLM for routing</strong> - Rule-based = fast & deterministic</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <span><strong>Dynamic agent spawn</strong> - Only needed agents</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
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
