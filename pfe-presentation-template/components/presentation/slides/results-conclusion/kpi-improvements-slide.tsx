"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, TrendingDown, Clock, AlertTriangle, Users, Activity, 
  ArrowRight, CheckCircle, Zap, Brain, Database
} from "lucide-react"

const kpiMetrics = [
  { 
    kpi: "MTTD", 
    fullName: "Mean Time To Detect",
    before: "~5 min", 
    after: "-15 min", 
    improvement: "↓ 20 min EARLIER",
    mechanism: "Predictive ML (RCF)",
    icon: Clock,
    color: "blue"
  },
  { 
    kpi: "MTTA", 
    fullName: "Mean Time To Acknowledge",
    before: "~10 min", 
    after: "<1 sec", 
    improvement: "↓ 99.8%",
    mechanism: "Auto-triage",
    icon: Zap,
    color: "purple"
  },
  { 
    kpi: "MTTR", 
    fullName: "Mean Time To Repair",
    before: "~30 min", 
    after: "~30 sec (fast) / ~2 min (full)", 
    improvement: "↓ 93%",
    mechanism: "Fast path + parallel agents",
    icon: Activity,
    color: "green"
  },
  { 
    kpi: "Volume", 
    fullName: "Daily Alert Volume",
    before: "~1,000/day", 
    after: "~300/day", 
    improvement: "↓ 70%",
    mechanism: "Redis dedup + correlation",
    icon: AlertTriangle,
    color: "orange"
  },
  { 
    kpi: "False Pos.", 
    fullName: "False Positive Rate",
    before: "~40%", 
    after: "~10%", 
    improvement: "↓ 75%",
    mechanism: "Disposition classification",
    icon: Brain,
    color: "cyan"
  },
  { 
    kpi: "Human Work", 
    fullName: "Manual Intervention",
    before: "100%", 
    after: "15%", 
    improvement: "↓ 85%",
    mechanism: "Auto-approval (low-risk + high-conf)",
    icon: Users,
    color: "red"
  },
]

const featureImpact = [
  { feature: "Predictive Alerts (RCF)", impact: "MTTD ↓ 20 min", desc: "Detect 15 min BEFORE failure" },
  { feature: "Deduplication (Redis)", impact: "Volume ↓ 70%", desc: "5-min TTL fingerprinting" },
  { feature: "Parallel Investigation", impact: "MTTR ↓ 66%", desc: "3x faster than sequential" },
  { feature: "Fast Path Routing", impact: "MTTR ↓ 93%", desc: "Skip investigation for known patterns" },
  { feature: "Disposition Classification", impact: "False Pos ↓ 75%", desc: "Identify rule misconfiguration" },
  { feature: "Auto-Approval (Policy)", impact: "Human ↓ 85%", desc: "Low-risk + high-confidence" },
]

export default function KpiImprovementsSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader 
          badge="Results" 
          title="KPI Improvements Matrix" 
          subtitle="Quantified operational impact of AutoSphere" 
        />
        
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-5" style={{ minHeight: 0 }}>
          {/* KPI Metrics Grid */}
          <div className="flex flex-col">
            <h3 className="text-base font-semibold flex items-center mb-3">
              <TrendingUp className="h-6 w-6 mr-3 text-green-500" />
              Before vs After Comparison
            </h3>
            <div className="grid grid-cols-2 gap-3 flex-1">
              {kpiMetrics.map((metric) => (
                <Card key={metric.kpi} className={`shadow-md border-l-4 ${
                  metric.color === 'blue' ? 'border-l-blue-500' :
                  metric.color === 'purple' ? 'border-l-purple-500' :
                  metric.color === 'green' ? 'border-l-green-500' :
                  metric.color === 'orange' ? 'border-l-orange-500' :
                  metric.color === 'cyan' ? 'border-l-cyan-500' :
                  'border-l-red-500'
                }`}>
                  <CardContent className="p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <metric.icon className={`h-5 w-5 ${
                          metric.color === 'blue' ? 'text-blue-500' :
                          metric.color === 'purple' ? 'text-purple-500' :
                          metric.color === 'green' ? 'text-green-500' :
                          metric.color === 'orange' ? 'text-orange-500' :
                          metric.color === 'cyan' ? 'text-cyan-500' :
                          'text-red-500'
                        }`} />
                        <span className="font-bold text-base">{metric.kpi}</span>
                      </div>
                      <Badge className="bg-green-500 text-white text-xs px-2 py-1">{metric.improvement}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{metric.fullName}</p>
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <span className="text-red-500 line-through">{metric.before}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      <span className="text-green-600 font-semibold">{metric.after}</span>
                    </div>
                    <div>
                      <Badge variant="outline" className="text-xs px-2 py-1">{metric.mechanism}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Feature Impact Breakdown */}
          <div className="flex flex-col space-y-3">
            <Card className="shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-yellow-500" />
                  Feature Impact Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {featureImpact.map((item, index) => (
                  <div key={index} className="p-2 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-semibold text-sm">{item.feature}</span>
                      <Badge className="bg-green-500 text-white text-xs px-2 py-0.5">{item.impact}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Summary Stats */}
            <Card className="shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
              <CardContent className="p-3 flex flex-col items-center justify-center">
                <h4 className="font-semibold text-center text-green-700 dark:text-green-400 mb-3 text-sm">
                  Total Operational Impact
                </h4>
                <div className="grid grid-cols-3 gap-3 w-full text-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-3xl font-bold text-green-600">93%</div>
                    <div className="text-xs text-muted-foreground mt-1">MTTR Reduction</div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-3xl font-bold text-green-600">85%</div>
                    <div className="text-xs text-muted-foreground mt-1">Less Manual Work</div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-3xl font-bold text-green-600">70%</div>
                    <div className="text-xs text-muted-foreground mt-1">Fewer Alerts</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Insight */}
            <Card className="shadow-lg border-2 border-primary/20">
              <CardContent className="p-3">
                <div className="flex items-start gap-2">
                  <Brain className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Key Insight</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      The combination of <strong>predictive detection</strong> and <strong>fast-path routing</strong> 
                      enables AutoSphere to resolve 85% of incidents without human intervention, 
                      while maintaining safety through policy-driven governance.
                    </p>
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
