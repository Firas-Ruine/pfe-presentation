"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Rocket, Calendar, Target, Cloud, Brain, Zap, Shield, 
  ArrowRight, CheckCircle, Clock, Server, Activity
} from "lucide-react"

const shortTermGoals = [
  { 
    title: "Multi-Node Command Generation", 
    desc: "Generate commands for distributed deployments",
    example: "Run on all controller nodes...",
    status: "planned"
  },
  { 
    title: "Command Validation", 
    desc: "Dry-run check before presenting to operator",
    example: "Syntax validation for shell commands",
    status: "planned"
  },
  { 
    title: "AWX Template Auto-Selection", 
    desc: "Map diagnostic status → AWX job template",
    example: "Pre-fill parameters from evidence",
    status: "in_progress"
  },
]

const longTermGoals = [
  { 
    title: "Multi-Cloud Support", 
    desc: "AWS, Azure, GCP integration",
    icon: Cloud,
    features: ["Cloud-agnostic patterns", "Provider adapters", "Unified alerting"]
  },
  { 
    title: "Advanced Anomaly Detection", 
    desc: "Enhanced ML models for prediction",
    icon: Brain,
    features: ["Prophet forecasting", "LSTM models", "Multi-variate correlation"]
  },
  { 
    title: "Self-Improving Prompts", 
    desc: "Continuous prompt optimization",
    icon: Zap,
    features: ["A/B test variants", "Track success rates", "Auto-refinement"]
  },
]

const productionReadiness = [
  { item: "125/125 Tests Passing", icon: CheckCircle, status: "complete" },
  { item: "20+ Specialized Nodes", icon: Activity, status: "complete" },
  { item: "3 MCP Servers", icon: Server, status: "complete" },
  { item: "YAML Policy Engine", icon: Shield, status: "complete" },
  { item: "Circuit Breaker Pattern", icon: Zap, status: "complete" },
  { item: "LangSmith Observability", icon: Brain, status: "complete" },
]

export default function FutureRoadmapSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader 
          badge="Conclusion" 
          title="Future Roadmap" 
          subtitle="Short-term improvements and long-term vision" 
        />
        
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Short-term Goals */}
          <div className="space-y-3">
            <Card className="shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                  Short-term (3 months)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {shortTermGoals.map((goal, index) => (
                  <div key={index} className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-xs">{goal.title}</span>
                      <Badge variant="outline" className={`text-xs ${
                        goal.status === 'in_progress' ? 'text-yellow-600 border-yellow-500' : 'text-blue-600'
                      }`}>
                        {goal.status === 'in_progress' ? 'In Progress' : 'Planned'}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{goal.desc}</p>
                    <code className="text-xs text-blue-600 mt-1 block">"{goal.example}"</code>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Production Readiness */}
            <Card className="shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center text-green-700 dark:text-green-400">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Production Ready ✓
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                {productionReadiness.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs">
                    <item.icon className="h-3 w-3 text-green-500" />
                    <span>{item.item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Long-term Goals */}
          <div className="lg:col-span-2 space-y-3">
            <Card className="shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center">
                  <Rocket className="h-4 w-4 mr-2 text-purple-500" />
                  Long-term Vision (6-12 months)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {longTermGoals.map((goal, index) => (
                    <Card key={index} className="shadow-md border-t-4 border-t-purple-500">
                      <CardContent className="p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <goal.icon className="h-5 w-5 text-purple-500" />
                          <span className="font-semibold text-sm">{goal.title}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{goal.desc}</p>
                        <div className="space-y-1">
                          {goal.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-1 text-xs">
                              <ArrowRight className="h-3 w-3 text-purple-400" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Impact Summary */}
            <Card className="shadow-lg border-2 border-primary/20">
              <CardContent className="p-4">
                <h4 className="font-bold text-center text-lg text-primary mb-4">
                  AutoSphere: Transforming SRE Operations
                </h4>
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-600">93%</div>
                    <div className="text-xs text-muted-foreground">MTTR Reduction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">85%</div>
                    <div className="text-xs text-muted-foreground">Automation Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">70%</div>
                    <div className="text-xs text-muted-foreground">Alert Reduction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">-15min</div>
                    <div className="text-xs text-muted-foreground">Predictive Detection</div>
                  </div>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  <span className="font-semibold text-primary">Agentic AI</span> enables autonomous, 
                  intelligent infrastructure operations with human-in-the-loop for complex decisions.
                </p>
              </CardContent>
            </Card>

            {/* Technology Stack Summary */}
            <div className="flex justify-center gap-3 flex-wrap">
              {[
                { name: "LangGraph", logo: "https://avatars.githubusercontent.com/u/126733545?s=40" },
                { name: "Prometheus", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
                { name: "Grafana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
                { name: "AWX", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
                { name: "Qdrant", logo: "https://qdrant.tech/img/logo_with_text.png" },
                { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
                { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
              ].map((tech, i) => (
                <div key={i} className="flex items-center gap-1 px-2 py-1 bg-muted/50 rounded-lg">
                  <img src={tech.logo} alt={tech.name} className="h-4 w-4 object-contain" />
                  <span className="text-xs">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
