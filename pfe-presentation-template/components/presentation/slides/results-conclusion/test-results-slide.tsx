"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  CheckCircle, TestTube, Code, GitBranch, Layers, Shield, 
  Activity, Zap, Database, Brain
} from "lucide-react"

const testCategories = [
  { category: "Unit Tests", count: 92, icon: Code, color: "blue" },
  { category: "Integration Tests", count: 18, icon: GitBranch, color: "purple" },
  { category: "End-to-End Tests", count: 15, icon: Layers, color: "green" },
]

const criticalPathCoverage = [
  { path: "Alert Ingestion", coverage: 100, color: "green" },
  { path: "Deduplication", coverage: 100, color: "green" },
  { path: "Smart Router", coverage: 100, color: "green" },
  { path: "Policy Engine", coverage: 100, color: "green" },
  { path: "Circuit Breaker", coverage: 100, color: "green" },
  { path: "MCP Integration", coverage: 85, color: "yellow" },
]

const productionScenarios = [
  { scenario: "RabbitMQ Exporter Down", type: "Reactive", route: "Investigation", agents: 3, result: "MTTR: 45s", status: "pass" },
  { scenario: "Nova CPU High (False Pos)", type: "Reactive", route: "Investigation", agents: 3, result: "Detected FP", status: "pass" },
  { scenario: "Predictive Memory Alert", type: "Predictive", route: "Investigation", agents: 3, result: "15 min early", status: "pass" },
  { scenario: "Known Pattern Match", type: "Reactive", route: "Fast Path", agents: 0, result: "MTTR: 30s", status: "pass" },
  { scenario: "Duplicate Alert", type: "Reactive", route: "Skip", agents: 0, result: "Blocked", status: "pass" },
]

export default function TestResultsSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader 
          badge="7 • Implementation" 
          title="Test Coverage & Validation" 
          subtitle="125/125 tests passing | ~85% code coverage" 
        />
        
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-5" style={{ minHeight: 0 }}>
          {/* Test Summary */}
          <div className="flex flex-col space-y-4">
            <Card className="shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
              <CardContent className="p-4 text-center">
                <TestTube className="h-14 w-14 text-green-500 mx-auto mb-3" />
                <div className="text-5xl font-bold text-green-600">125/125</div>
                <div className="text-base text-muted-foreground mt-1">Tests Passing</div>
                <Badge className="bg-green-500 text-white mt-3 text-sm px-3 py-1">~85% Coverage</Badge>
              </CardContent>
            </Card>

            <Card className="shadow-lg flex-1">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center">
                  <Code className="h-6 w-6 mr-3 text-primary" />
                  Test Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {testCategories.map((cat) => (
                  <div key={cat.category} className={`p-3 rounded-lg flex items-center justify-between ${
                    cat.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/20' :
                    cat.color === 'purple' ? 'bg-purple-50 dark:bg-purple-900/20' :
                    'bg-green-50 dark:bg-green-900/20'
                  }`}>
                    <div className="flex items-center gap-3">
                      <cat.icon className={`h-5 w-5 ${
                        cat.color === 'blue' ? 'text-blue-500' :
                        cat.color === 'purple' ? 'text-purple-500' :
                        'text-green-500'
                      }`} />
                      <span className="text-base">{cat.category}</span>
                    </div>
                    <Badge variant="secondary" className="text-sm px-3 py-1">{cat.count}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Critical Path Coverage */}
            <Card className="shadow-lg flex-1">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center">
                  <Shield className="h-6 w-6 mr-3 text-primary" />
                  Critical Path Coverage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {criticalPathCoverage.map((path) => (
                  <div key={path.path} className="flex items-center justify-between text-sm">
                    <span>{path.path}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            path.coverage === 100 ? 'bg-green-500' : 'bg-yellow-500'
                          }`}
                          style={{ width: `${path.coverage}%` }}
                        />
                      </div>
                      <span className={`font-semibold ${path.coverage === 100 ? 'text-green-600' : 'text-yellow-600'}`}>
                        {path.coverage}%
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Production Validation Scenarios */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <Card className="shadow-lg flex-1">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center">
                  <Activity className="h-6 w-6 mr-3 text-primary" />
                  Production Validation Scenarios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold">Scenario</th>
                        <th className="text-left p-3 font-semibold">Type</th>
                        <th className="text-left p-3 font-semibold">Route</th>
                        <th className="text-center p-3 font-semibold">Agents</th>
                        <th className="text-left p-3 font-semibold">Result</th>
                        <th className="text-center p-3 font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productionScenarios.map((scenario, index) => (
                        <tr key={index} className="border-b hover:bg-muted/30">
                          <td className="p-3 font-medium">{scenario.scenario}</td>
                          <td className="p-3">
                            <Badge variant="outline" className="text-xs px-2 py-1">
                              {scenario.type}
                            </Badge>
                          </td>
                          <td className="p-3">
                            <Badge className={`text-xs px-2 py-1 ${
                              scenario.route === 'Fast Path' ? 'bg-green-500' :
                              scenario.route === 'Skip' ? 'bg-gray-500' : 'bg-orange-500'
                            }`}>
                              {scenario.route}
                            </Badge>
                          </td>
                          <td className="p-3 text-center font-medium">{scenario.agents}</td>
                          <td className="p-3 font-semibold text-green-600">{scenario.result}</td>
                          <td className="p-3 flex justify-center">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Testing Tools */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="shadow-md">
                <CardContent className="p-4 text-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg" className="h-10 w-10 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Pytest</div>
                  <div className="text-xs text-muted-foreground">Test Framework</div>
                </CardContent>
              </Card>
              <Card className="shadow-md">
                <CardContent className="p-4 text-center">
                  <Brain className="h-10 w-10 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-semibold">LangSmith</div>
                  <div className="text-xs text-muted-foreground">LLM Tracing</div>
                </CardContent>
              </Card>
              <Card className="shadow-md">
                <CardContent className="p-4 text-center">
                  <Database className="h-10 w-10 mx-auto mb-2 text-green-500" />
                  <div className="text-sm font-semibold">Test Fixtures</div>
                  <div className="text-xs text-muted-foreground">Mock MCPs</div>
                </CardContent>
              </Card>
            </div>

            {/* Key Testing Insights */}
            <Card className="shadow-lg border-2 border-primary/20">
              <CardContent className="p-4">
                <h4 className="font-semibold text-base mb-3 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-yellow-500" />
                  Testing Best Practices Applied
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Isolated unit tests per node",
                    "MCP mocking with fixtures",
                    "State machine path testing",
                    "Circuit breaker edge cases",
                    "Parallel execution testing",
                    "Policy decision validation"
                  ].map((practice, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{practice}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
