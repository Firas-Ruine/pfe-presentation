"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Network, ArrowRight, Brain, Server, Activity, FileText, Wrench, CheckCircle, Zap } from "lucide-react"

const mcpServers = [
  {
    name: "Grafana MCP",
    icon: Activity,
    language: "Go",
    color: "orange",
    description: "Query Prometheus metrics and explore dashboards",
    tools: [
      { name: "list_prometheus_metric_names", description: "Discover available metrics with regex" },
      { name: "query_prometheus", description: "Execute PromQL queries (instant/range)" },
      { name: "list_dashboards", description: "Browse Grafana dashboards" },
      { name: "get_dashboard", description: "Retrieve dashboard JSON" },
    ],
    useCases: ["Metrics investigation", "Anomaly correlation", "Dashboard insights"]
  },
  {
    name: "AWX MCP",
    icon: Wrench,
    language: "Python",
    color: "red",
    description: "Execute Ansible playbooks via AWX/Tower",
    tools: [
      { name: "list_job_templates", description: "Browse available playbooks" },
      { name: "launch_job", description: "Execute remediation playbook" },
      { name: "get_job_status", description: "Poll job completion" },
      { name: "get_job_output", description: "Retrieve execution logs" },
    ],
    useCases: ["Auto-remediation", "Service restart", "Config rollback"]
  },
  {
    name: "Redmine MCP",
    icon: FileText,
    language: "Python",
    color: "green",
    description: "Create and manage incident tickets",
    tools: [
      { name: "create_issue", description: "Open new incident ticket" },
      { name: "update_issue", description: "Add notes and status" },
      { name: "search_issues", description: "Find related incidents" },
      { name: "get_issue", description: "Retrieve ticket details" },
    ],
    useCases: ["Incident tracking", "Audit trail", "Escalation"]
  },
]

export default function McpConnectorsSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader badge="6 • Architecture" title="MCP Connectors" subtitle="Model Context Protocol - Bridging LLM and External Tools" />
        
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {mcpServers.map((mcp, index) => (
            <Card key={index} className={`shadow-lg border-t-4 ${
              mcp.color === 'orange' ? 'border-t-orange-500' :
              mcp.color === 'red' ? 'border-t-red-500' :
              'border-t-green-500'
            }`}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center justify-between">
                  <div className="flex items-center">
                    <mcp.icon className={`h-5 w-5 mr-2 ${
                      mcp.color === 'orange' ? 'text-orange-500' :
                      mcp.color === 'red' ? 'text-red-500' :
                      'text-green-500'
                    }`} />
                    {mcp.name}
                  </div>
                  <Badge variant="outline" className="text-xs">{mcp.language}</Badge>
                </CardTitle>
                <p className="text-xs text-muted-foreground">{mcp.description}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="text-xs font-semibold mb-1 flex items-center">
                    <Wrench className="h-3 w-3 mr-1" />Tools
                  </h4>
                  <div className="space-y-1">
                    {mcp.tools.map((tool, idx) => (
                      <div key={idx} className="p-1.5 bg-muted/30 rounded text-xs">
                        <code className="text-primary font-mono text-xs">{tool.name}</code>
                        <p className="text-muted-foreground text-xs">{tool.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold mb-1 flex items-center">
                    <Zap className="h-3 w-3 mr-1" />Use Cases
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {mcp.useCases.map((useCase, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs py-0">{useCase}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-3 shadow-md bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="p-3">
            <div className="flex items-center justify-center space-x-3">
              <div className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-purple-500" />
                <span className="text-sm font-medium">LLM Agent</span>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <div className="flex items-center space-x-2">
                <Network className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">MCP Protocol</span>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <div className="flex items-center space-x-1">
                <Badge className="bg-orange-500">Grafana</Badge>
                <Badge className="bg-red-500">AWX</Badge>
                <Badge className="bg-green-500">Redmine</Badge>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">Auto-Remediation</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SlideWrapper>
  )
}
