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
        
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4" style={{ minHeight: 0 }}>
          {mcpServers.map((mcp, index) => (
            <Card key={index} className={`shadow-lg border-t-4 flex flex-col ${
              mcp.color === 'orange' ? 'border-t-orange-500' :
              mcp.color === 'red' ? 'border-t-red-500' :
              'border-t-green-500'
            }`}>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center justify-between">
                  <div className="flex items-center">
                    <mcp.icon className={`h-7 w-7 mr-3 ${
                      mcp.color === 'orange' ? 'text-orange-500' :
                      mcp.color === 'red' ? 'text-red-500' :
                      'text-green-500'
                    }`} />
                    {mcp.name}
                  </div>
                  <Badge variant="outline" className="text-sm px-3 py-1.5">{mcp.language}</Badge>
                </CardTitle>
                <p className="text-base text-muted-foreground mt-2">{mcp.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-base font-semibold mb-3 flex items-center">
                    <Wrench className="h-5 w-5 mr-2" />Tools
                  </h4>
                  <div className="space-y-2.5">
                    {mcp.tools.map((tool, idx) => (
                      <div key={idx} className="p-2.5 bg-muted/30 rounded">
                        <code className="text-primary font-mono text-sm">{tool.name}</code>
                        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{tool.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-3 flex items-center">
                    <Zap className="h-5 w-5 mr-2" />Use Cases
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {mcp.useCases.map((useCase, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm px-3 py-1.5">{useCase}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-4 shadow-md bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="p-4">
            <div className="flex items-center justify-center space-x-4 flex-wrap gap-3">
              <div className="flex items-center space-x-2">
                <Brain className="h-6 w-6 text-purple-500" />
                <span className="text-base font-medium">LLM Agent</span>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground" />
              <div className="flex items-center space-x-2">
                <Network className="h-6 w-6 text-blue-500" />
                <span className="text-base font-medium">MCP Protocol</span>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground" />
              <div className="flex items-center space-x-2">
                <Badge className="bg-orange-500 text-sm px-3 py-1.5">Grafana</Badge>
                <Badge className="bg-red-500 text-sm px-3 py-1.5">AWX</Badge>
                <Badge className="bg-green-500 text-sm px-3 py-1.5">Redmine</Badge>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground" />
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-base font-medium">Auto-Remediation</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SlideWrapper>
  )
}
