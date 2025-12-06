"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Play,
  CheckCircle,
  RotateCcw,
  ArrowDown,
  Database,
  Activity,
  AlertTriangle,
  Zap,
} from "lucide-react"

const pipelineSteps = [
  {
    step: 1,
    name: "BACKUP STATE",
    icon: Database,
    color: "blue",
    description: "Capture current configuration",
    details: ["Store rollback artifacts", "Record backup_status"],
  },
  {
    step: 2,
    name: "EXECUTOR (AWX)",
    icon: Play,
    color: "purple",
    description: "Safe remediation via MCP",
    details: ["Phase 1: SIMULATE (dry-run)", "Phase 2: CANARY (single node)", "Phase 3: EXPAND (full rollout)"],
  },
  {
    step: 3,
    name: "VALIDATOR",
    icon: Activity,
    color: "green",
    description: "Verify via Grafana MCP",
    details: ["Query post-execution metrics", "Compare success indicators"],
  },
  {
    step: 4,
    name: "ROLLBACK / LEARN",
    icon: RotateCcw,
    color: "orange",
    description: "React to validation result",
    details: ["PASS → Update KB, promote pattern", "FAIL → Restore backup, update circuit breaker"],
  },
]

export default function ExecutionPipelineSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader
          badge="7 • Implementation"
          title="Execution Pipeline"
          subtitle="Safe remediation with backup, validation, and rollback"
        />

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left: Pipeline Flow */}
          <div className="space-y-2">
            {pipelineSteps.map((step, index) => (
              <div key={index}>
                <Card className={`shadow-md border-l-4 ${
                  step.color === 'blue' ? 'border-l-blue-500' :
                  step.color === 'purple' ? 'border-l-purple-500' :
                  step.color === 'green' ? 'border-l-green-500' :
                  'border-l-orange-500'
                }`}>
                  <CardContent className="p-3">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${
                        step.color === 'blue' ? 'bg-blue-500' :
                        step.color === 'purple' ? 'bg-purple-500' :
                        step.color === 'green' ? 'bg-green-500' :
                        'bg-orange-500'
                      }`}>
                        <step.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs font-mono">{step.step}</Badge>
                          <span className="font-bold text-sm">{step.name}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {step.details.map((detail, i) => (
                            <Badge key={i} variant="secondary" className="text-xs py-0">{detail}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {index < pipelineSteps.length - 1 && (
                  <div className="flex justify-center my-1">
                    <ArrowDown className="h-4 w-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Safety Gates & Details */}
          <div className="space-y-4">
            <Card className="shadow-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-base text-green-600">
                  <Shield className="h-5 w-5 mr-2" />
                  Safety Gates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 p-2 bg-background/50 rounded">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm"><strong>Dry-run first</strong> - Test without changes</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-background/50 rounded">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm"><strong>Canary deployment</strong> - Single node test</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-background/50 rounded">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm"><strong>Post-validation</strong> - Metrics verification</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-background/50 rounded">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm"><strong>Auto-rollback</strong> - On validation failure</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-base">
                  <Zap className="h-5 w-5 mr-2 text-primary" />
                  Validation Decision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-1" />
                    <div className="font-semibold text-sm text-green-600">PASS</div>
                    <div className="text-xs text-muted-foreground">Update KB confidence</div>
                    <div className="text-xs text-muted-foreground">Promote pattern</div>
                  </div>
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-center">
                    <AlertTriangle className="h-6 w-6 text-red-500 mx-auto mb-1" />
                    <div className="font-semibold text-sm text-red-600">FAIL</div>
                    <div className="text-xs text-muted-foreground">Execute rollback</div>
                    <div className="text-xs text-muted-foreground">Update circuit breaker</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md border-2 border-primary/20">
              <CardContent className="p-3">
                <h4 className="font-semibold text-sm mb-2">MCP Integration</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded bg-muted/30">
                    <span className="font-medium text-primary">AWX MCP</span>
                    <p className="text-muted-foreground">Job execution & polling</p>
                  </div>
                  <div className="p-2 rounded bg-muted/30">
                    <span className="font-medium text-primary">Grafana MCP</span>
                    <p className="text-muted-foreground">Post-execution validation</p>
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
