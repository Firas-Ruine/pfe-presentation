"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Activity,
  Search,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowDown,
  Zap,
} from "lucide-react"

const diagnosticSteps = [
  { step: 1, title: "Query Prometheus", description: "Via Grafana MCP: rabbitmq_queue_messages_ready", status: "execute" },
  { step: 2, title: "Detect Empty Result", description: "Response: [] - Trigger diagnostic workflow", status: "warning" },
  { step: 3, title: "Check Metric Existence", description: "list_prometheus_metric_names (regex: 'rabbitmq.*queue')", status: "execute" },
  { step: 4, title: "Check Target Health", description: "up{job='rabbitmq'} = 0 → TARGET DOWN ❌", status: "error" },
  { step: 5, title: "Generate Diagnostic", description: "Root cause: 'RabbitMQ exporter at :15692 is DOWN'", status: "success" },
]

export default function MetricsDiagnosticsSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader
          badge="7 • Implementation"
          title="Self-Diagnosing Metrics Agent"
          subtitle="Automatic root cause analysis when metrics return empty"
        />

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left: Diagnostic Flow */}
          <Card className="shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-base">
                <Activity className="h-5 w-5 mr-2 text-primary" />
                Diagnostic Workflow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {diagnosticSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className={`p-3 rounded-lg border ${
                      step.status === 'error' ? 'border-red-500 bg-red-500/5' :
                      step.status === 'warning' ? 'border-yellow-500 bg-yellow-500/5' :
                      step.status === 'success' ? 'border-green-500 bg-green-500/5' :
                      'border-border bg-muted/30'
                    }`}>
                      <div className="flex items-center space-x-3">
                        <Badge variant="outline" className="text-xs font-mono">{step.step}</Badge>
                        <div className="flex-1">
                          <span className="text-sm font-medium">{step.title}</span>
                          <p className="text-xs text-muted-foreground">{step.description}</p>
                        </div>
                        {step.status === 'error' && <XCircle className="h-5 w-5 text-red-500" />}
                        {step.status === 'warning' && <AlertTriangle className="h-5 w-5 text-yellow-500" />}
                        {step.status === 'success' && <CheckCircle className="h-5 w-5 text-green-500" />}
                      </div>
                    </div>
                    {index < diagnosticSteps.length - 1 && (
                      <div className="flex justify-center my-1">
                        <ArrowDown className="h-4 w-4 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Right: Production Discovery */}
          <div className="space-y-4">
            <Card className="shadow-lg border-2 border-green-500/30 bg-green-500/5">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-base text-green-600">
                  <Zap className="h-5 w-5 mr-2" />
                  Production Discovery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 rounded bg-muted/50">
                    <h4 className="font-semibold text-sm">Problem Found</h4>
                    <p className="text-xs text-muted-foreground">
                      RabbitMQ Prometheus plugin was disabled, causing metrics collection to fail
                    </p>
                  </div>
                  <div className="p-3 rounded bg-muted/50">
                    <h4 className="font-semibold text-sm">Solution Applied</h4>
                    <code className="text-xs bg-slate-800 text-green-400 px-2 py-1 rounded">
                      rabbitmq-plugins enable rabbitmq_prometheus
                    </code>
                  </div>
                  <div className="p-3 rounded bg-green-500/20 border border-green-500/30">
                    <h4 className="font-semibold text-sm text-green-600">Discovery Result</h4>
                    <p className="text-xs text-muted-foreground">
                      Found <strong className="text-green-600">59,536 messages</strong> backed up in 
                      <code className="mx-1 text-xs bg-slate-800 text-green-400 px-1 rounded">cinder-scheduler_fanout</code>
                      queue!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-base">
                  <Search className="h-5 w-5 mr-2 text-primary" />
                  DiagnosticResult Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-xs bg-slate-900 text-green-400 p-3 rounded-lg">
{`{
  "root_cause": "target_down",
  "target_status": "DOWN",
  "recommendations": [
    "Check RabbitMQ exporter health",
    "Enable rabbitmq_prometheus plugin"
  ],
  "llm_summary": "RabbitMQ exporter 
    at :15692 is DOWN (up=0)"
}`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
