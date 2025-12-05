"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Terminal, GitBranch, Database, Brain, Server, TestTube, Eye, Folder } from "lucide-react"

const developmentTools = [
  { icon: Code, name: "Python 3.11+", description: "Core development language" },
  { icon: GitBranch, name: "Git + GitHub", description: "Version control" },
  { icon: Terminal, name: "VSCode", description: "IDE with extensions" },
  { icon: TestTube, name: "Pytest", description: "Testing framework (125 tests)" },
]

const frameworks = [
  { name: "LangGraph", version: "0.2.x", description: "Workflow orchestration" },
  { name: "LangChain", version: "0.2.x", description: "LLM integration" },
  { name: "FastAPI", version: "0.100+", description: "API endpoints" },
  { name: "Pydantic", version: "2.x", description: "Data validation" },
]

const projectStructure = [
  { folder: "healer/", description: "Core LangGraph nodes and workflow" },
  { folder: "config/", description: "YAML policies and settings" },
  { folder: "mcp-server/", description: "MCP connector implementations" },
  { folder: "tests/", description: "Unit, integration, E2E tests" },
  { folder: "docs/", description: "Documentation and runbooks" },
]

const observability = [
  { name: "LangSmith", description: "LLM tracing and debugging" },
  { name: "Prometheus", description: "Application metrics" },
  { name: "Structured Logs", description: "JSON logging format" },
]

export default function EnvironmentToolsSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader badge="7 • Implementation" title="Development Environment" subtitle="Tools, frameworks, and project structure" />
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="space-y-3">
            <Card className="shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center"><Terminal className="h-4 w-4 mr-2 text-primary" />Development Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {developmentTools.map((tool, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 bg-muted/30 rounded-lg">
                    <tool.icon className="h-4 w-4 text-primary" />
                    <div>
                      <span className="font-semibold text-xs">{tool.name}</span>
                      <p className="text-xs text-muted-foreground">{tool.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center"><Eye className="h-4 w-4 mr-2 text-primary" />Observability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {observability.map((item, index) => (
                  <div key={index} className="p-2 bg-muted/30 rounded-lg">
                    <span className="font-semibold text-xs">{item.name}</span>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div className="space-y-3">
            <Card className="shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center"><Brain className="h-4 w-4 mr-2 text-primary" />Core Frameworks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {frameworks.map((fw, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-muted/30 rounded-lg">
                    <div>
                      <span className="font-semibold text-xs">{fw.name}</span>
                      <p className="text-xs text-muted-foreground">{fw.description}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">{fw.version}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div className="space-y-3">
            <Card className="shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center"><Folder className="h-4 w-4 mr-2 text-primary" />Project Structure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {projectStructure.map((item, index) => (
                  <div key={index} className="p-2 bg-muted/30 rounded-lg">
                    <code className="font-mono text-xs text-primary">{item.folder}</code>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
