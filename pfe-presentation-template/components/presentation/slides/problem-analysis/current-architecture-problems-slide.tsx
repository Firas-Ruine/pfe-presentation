"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent } from "@/components/ui/card"
import { XCircle, Unlink, Clock, TrendingDown, Building2, Users, UserCheck, AlertTriangle, ArrowDown } from "lucide-react"

const problems = [
  {
    icon: Unlink,
    title: "No Correlation",
    desc: "Logs, metrics, traces exist in isolation — no unified correlation",
    color: "from-red-500 to-red-600",
    bg: "bg-red-50",
    num: "01"
  },
  {
    icon: Clock,
    title: "Manual Response",
    desc: "Every incident requires human investigation & manual execution",
    color: "from-orange-500 to-orange-600",
    bg: "bg-orange-50",
    num: "02"
  },
  {
    icon: TrendingDown,
    title: "Reactive Operations",
    desc: "Constant firefighting — no learning, no prediction, no optimization",
    color: "from-amber-500 to-amber-600",
    bg: "bg-amber-50",
    num: "03"
  },
]

const impacts = [
  { icon: Building2, label: "Enterprise", color: "bg-red-500", items: ["Operational costs ↑", "Downtime risk", "Tech debt"] },
  { icon: Users, label: "SRE Team", color: "bg-orange-500", items: ["Alert fatigue", "No innovation time", "Manual work"] },
  { icon: UserCheck, label: "Clients", color: "bg-amber-500", items: ["Service disruptions", "SLA breaches", "Poor UX"] },
]

export default function CurrentArchitectureProblemsSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader badge="2 • General Context" title="Problematic" subtitle="Current challenges impacting enterprise, team, and clients" />

        <div className="flex-1 flex flex-col gap-4">
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-500">
              <XCircle className="h-7 w-7 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-red-600">Core Problems</h3>
              <p className="text-base text-muted-foreground">Identified gaps in current infrastructure</p>
            </div>
          </div>

          {/* Problems Grid */}
          <div className="grid grid-cols-3 gap-4">
            {problems.map((p, i) => (
              <Card key={i} className={`shadow-md ${p.bg} border-0`}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${p.color}`}>
                      <p.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className={`text-3xl font-black bg-gradient-to-br ${p.color} bg-clip-text text-transparent opacity-20`}>{p.num}</span>
                  </div>
                  <h4 className="font-bold text-xl mb-2">{p.title}</h4>
                  <p className="text-base text-muted-foreground">{p.desc}</p>
                  <div className={`mt-3 h-1.5 rounded-full bg-gradient-to-r ${p.color} opacity-60`} />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Arrow */}
          <div className="flex justify-center items-center gap-3 text-muted-foreground">
            <div className="h-px w-16 bg-red-300" />
            <ArrowDown className="h-5 w-5 text-red-400" />
            <span className="text-base font-medium text-red-500">Results in</span>
            <ArrowDown className="h-5 w-5 text-red-400" />
            <div className="h-px w-16 bg-red-300" />
          </div>

          {/* Impact */}
          <Card className="shadow-md">
            <CardContent className="p-4">
              <div className="grid grid-cols-3 gap-6">
                {impacts.map((cat, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`p-2 rounded-lg ${cat.color}`}>
                        <cat.icon className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="font-bold text-lg">{cat.label} Impact</h4>
                    </div>
                    <div className="space-y-1.5">
                      {cat.items.map((item, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-muted-foreground" />
                          <span className="text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SlideWrapper>
  )
}
