"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Terminal, GitBranch, Brain, TestTube, Eye, Folder } from "lucide-react"

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
        <SlideHeader badge="8 • Implementation" title="Development Environment" subtitle="Tools, frameworks, and project structure" />
        <div className="flex-1 grid grid-cols-2 gap-6" style={{ minHeight: 0 }}>
          {/* Left Column */}
          <div className="flex flex-col space-y-5">
            <Card className="shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center">
                  <Terminal className="h-7 w-7 mr-3 text-primary" />
                  Development Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {developmentTools.map((tool, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-muted/30 rounded-xl">
                    <tool.icon className="h-7 w-7 text-primary flex-shrink-0" />
                    <div>
                      <span className="font-bold text-base block">{tool.name}</span>
                      <p className="text-base text-muted-foreground">{tool.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center">
                  <Brain className="h-7 w-7 mr-3 text-primary" />
                  Core Frameworks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {frameworks.map((fw, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                    <div className="flex-1">
                      <span className="font-bold text-base block">{fw.name}</span>
                      <p className="text-base text-muted-foreground">{fw.description}</p>
                    </div>
                    <Badge variant="outline" className="text-base px-3 py-1.5 ml-3 flex-shrink-0">{fw.version}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col space-y-5">
            <Card className="shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center">
                  <Folder className="h-7 w-7 mr-3 text-primary" />
                  Project Structure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {projectStructure.map((item, index) => (
                  <div key={index} className="p-4 bg-muted/30 rounded-xl">
                    <code className="font-mono text-base text-primary block">{item.folder}</code>
                    <p className="text-base text-muted-foreground mt-1">{item.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center">
                  <Eye className="h-7 w-7 mr-3 text-primary" />
                  Observability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {observability.map((item, index) => (
                  <div key={index} className="p-4 bg-muted/30 rounded-xl">
                    <span className="font-bold text-base block">{item.name}</span>
                    <p className="text-base text-muted-foreground">{item.description}</p>
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
