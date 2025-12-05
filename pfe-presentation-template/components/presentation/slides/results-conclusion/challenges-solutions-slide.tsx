"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  AlertTriangle, CheckCircle, Lightbulb, Code, Wrench, Brain,
  ArrowRight, Zap, Database, Activity
} from "lucide-react"

const challenges = [
  {
    id: 1,
    challenge: "Blocking I/O in Async Context",
    problem: "LLM .invoke() blocked the event loop, causing timeouts",
    solution: "asyncio.to_thread() wrapper for sync calls",
    code: "response = await asyncio.to_thread(llm.invoke, prompt)",
    category: "async"
  },
  {
    id: 2,
    challenge: "MCP Stdio Transport",
    problem: "Grafana/Redmine MCP over stdio caused blocking reads",
    solution: "Thread-based execution with timeout handling",
    code: "with ThreadPoolExecutor() as executor: ...",
    category: "mcp"
  },
  {
    id: 3,
    challenge: "Empty Metrics Investigation",
    problem: "Prometheus queries returning [] with no explanation",
    solution: "Implemented self-diagnosing metrics agent with 4-phase diagnostic workflow",
    code: "DiagnosticResult(status, root_cause, recommendations)",
    category: "diagnostics"
  },
  {
    id: 4,
    challenge: "LLM Generating Placeholders",
    problem: "LLM output contained <container>, <host> placeholders",
    solution: "Explicit prompt requirements + evidence grounding",
    code: "ALWAYS use concrete values from investigation_results",
    category: "prompts"
  },
  {
    id: 5,
    challenge: "Parallel Agent State Conflicts",
    problem: "Parallel agents overwriting each other's results",
    solution: "Custom reducers with merge_dicts for TypedDict state",
    code: "investigation_results: Annotated[dict, merge_dicts]",
    category: "state"
  },
]

const keyLearnings = [
  { learning: "LangGraph excels at complex multi-agent orchestration", icon: Brain },
  { learning: "Rule-based routing is faster than LLM classification", icon: Zap },
  { learning: "Self-diagnosing agents are essential for production", icon: Activity },
  { learning: "YAML-driven policies enable flexible governance", icon: Database },
  { learning: "Custom reducers prevent data loss in parallel execution", icon: Code },
]

export default function ChallengesSolutionsSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader 
          badge="7 • Implementation" 
          title="Technical Challenges & Solutions" 
          subtitle="Key obstacles overcome during development" 
        />
        
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Challenges List */}
          <div className="lg:col-span-2 space-y-2">
            {challenges.map((item) => (
              <Card key={item.id} className="shadow-md">
                <CardContent className="p-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
                      <AlertTriangle className="h-4 w-4 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-sm">{item.challenge}</h4>
                        <Badge variant="outline" className="text-xs">{item.category}</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded">
                          <span className="font-semibold text-red-600">Problem:</span>
                          <p className="text-muted-foreground">{item.problem}</p>
                        </div>
                        <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded">
                          <span className="font-semibold text-green-600">Solution:</span>
                          <p className="text-muted-foreground">{item.solution}</p>
                        </div>
                      </div>
                      <div className="mt-2 p-1.5 bg-slate-900 rounded text-xs">
                        <code className="text-green-400">{item.code}</code>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Learnings */}
          <div className="space-y-3">
            <Card className="shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center">
                  <Lightbulb className="h-4 w-4 mr-2 text-yellow-500" />
                  Key Learnings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {keyLearnings.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 p-2 bg-muted/30 rounded-lg">
                    <item.icon className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-xs">{item.learning}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* RabbitMQ Discovery */}
            <Card className="shadow-lg border-2 border-green-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Real-World Discovery
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-xs">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  <span className="font-semibold">Issue Found:</span>
                  <p className="text-muted-foreground">RabbitMQ Prometheus plugin was disabled</p>
                </div>
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <span className="font-semibold">Resolution:</span>
                  <code className="block mt-1 text-green-700">
                    rabbitmq-plugins enable rabbitmq_prometheus
                  </code>
                </div>
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <span className="font-semibold">Discovery:</span>
                  <p className="text-muted-foreground">
                    <span className="font-bold text-blue-600">59,536 messages</span> backed up in cinder-scheduler_fanout queue
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Development Approach */}
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-3">
                <h4 className="font-semibold text-sm mb-2 flex items-center">
                  <Wrench className="h-4 w-4 mr-2 text-primary" />
                  Development Approach
                </h4>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">1</Badge>
                    <span>Iterative node development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">2</Badge>
                    <span>Test-driven for critical paths</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">3</Badge>
                    <span>LangSmith for debugging</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">4</Badge>
                    <span>Production validation</span>
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
