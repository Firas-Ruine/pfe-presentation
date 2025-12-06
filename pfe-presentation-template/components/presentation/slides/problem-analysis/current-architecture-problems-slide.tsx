"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  AlertTriangle, XCircle, Clock, Users, Database, Eye, Brain, 
  TrendingDown, Zap, AlertOctagon, Timer, Activity, BarChart3, Cloud, Server,
  ArrowRight, Layers, FileWarning
} from "lucide-react"

const problems = [
  { 
    icon: Database, 
    title: "Siloed Monitoring", 
    description: "Prometheus, OpenSearch, Grafana monitoring OpenStack in isolation", 
    impact: "No unified view",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/30"
  },
  { 
    icon: Clock, 
    title: "Slow Remediation", 
    description: "Manual AWX playbook execution for OpenStack services", 
    impact: "MTTR ~30 min",
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-50 dark:bg-red-950/30"
  },
  { 
    icon: Eye, 
    title: "Reactive Approach", 
    description: "Detection only after OpenStack service failures occur", 
    impact: "No prevention",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/30"
  },
]

const criticalIssues = [
  { 
    icon: Users, 
    title: "Manual Triage", 
    description: "Every OpenStack alert requires human investigation", 
    stat: "40% false positives"
  },
  { 
    icon: AlertTriangle, 
    title: "Alert Storms", 
    description: "Massive volume from Nova, Neutron, Cinder without deduplication", 
    stat: "1000+ alerts/day"
  },
  { 
    icon: Brain, 
    title: "No Learning", 
    description: "No capitalization on past OpenStack incidents", 
    stat: "Repeated errors"
  },
]

const monitoringStack = [
  { name: "Prometheus", desc: "Metrics", icon: Activity, color: "text-orange-600" },
  { name: "Grafana", desc: "Dashboards", icon: BarChart3, color: "text-orange-500" },
  { name: "OpenSearch", desc: "Logs", icon: Database, color: "text-blue-600" },
  { name: "AWX", desc: "Automation", icon: Server, color: "text-purple-600" },
]

const incidentExample = {
  trigger: "RabbitMQ memory spike",
  current: [
    "1. Alert fires → 5 min delay",
    "2. SRE investigates → 10 min",
    "3. Find playbook → 5 min",
    "4. Execute AWX → 10 min",
    "5. Verify fix → 5 min"
  ],
  total: "~35 min downtime"
}

const metrics = [
  { label: "MTTD", value: "~5 min", description: "Mean Time To Detect", icon: Timer, color: "text-red-600" },
  { label: "MTTA", value: "~10 min", description: "Mean Time To Acknowledge", icon: Activity, color: "text-orange-600" },
  { label: "MTTR", value: "~30 min", description: "Mean Time To Repair", icon: Clock, color: "text-rose-600" },
  { label: "Volume", value: "1000+/day", description: "Daily alerts", icon: BarChart3, color: "text-red-700" },
]

const businessImpact = [
  "SRE team fatigue (burnout)",
  "SLA impact on cloud tenants",
  "High operational cost",
  "Undetected OpenStack outage risk"
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.08, delayChildren: 0.2 } 
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
  }
}

export default function CurrentArchitectureProblemsSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader 
          badge="2 • General Context" 
          title="Critique of Existing System" 
          subtitle="Identified limitations and problems in current infrastructure" 
        />
        
        <motion.div 
          className="flex-1 grid grid-cols-12 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT COLUMN - Main Problems */}
          <div className="col-span-7 space-y-4">
            {/* Infrastructure Context Banner - LARGER */}
            <motion.div variants={itemVariants}>
              <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-600 to-cyan-600">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4 text-white">
                    <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                      <Cloud className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-base font-bold mb-1">OpenStack Cloud Infrastructure</div>
                      <div className="text-sm text-white/90">
                        Kolla-deployed production cloud with Nova, Neutron, Cinder, RabbitMQ
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-white/20 text-white border-white/30 text-sm px-4 py-1.5">
                      <Server className="h-4 w-4 mr-2" />
                      Production
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Section Header - LARGER */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 shadow-lg">
                <XCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-600 dark:text-red-400">
                Identified Problems
              </h3>
            </motion.div>

            {/* Main Problems - LARGER Cards */}
            <div className="space-y-3">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className={`shadow-xl border-0 overflow-hidden ${problem.bgColor}`}>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        {/* Icon - LARGER */}
                        <motion.div
                          className={`p-4 rounded-2xl bg-gradient-to-br ${problem.color} shadow-lg flex-shrink-0`}
                          whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                          transition={{ duration: 0.4 }}
                        >
                          <problem.icon className="h-8 w-8 text-white" />
                        </motion.div>

                        {/* Content - LARGER */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h4 className="font-bold text-xl text-foreground">
                              {problem.title}
                            </h4>
                            <Badge 
                              variant="destructive" 
                              className="text-sm px-3 py-1 flex-shrink-0"
                            >
                              {problem.impact}
                            </Badge>
                          </div>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            {problem.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Critical Issues Grid - LARGER */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3">
              {criticalIssues.map((issue, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="shadow-lg border-l-4 border-l-red-500 bg-white dark:bg-slate-900 h-full">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
                          <issue.icon className="h-5 w-5 text-red-600" />
                        </div>
                        <h5 className="font-bold text-sm flex-1 leading-tight">{issue.title}</h5>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                        {issue.description}
                      </p>
                      <Badge variant="outline" className="text-xs px-2 py-1 text-red-600 border-red-300">
                        {issue.stat}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Monitoring Stack & Incident Example - LARGER */}
            <div className="grid grid-cols-2 gap-3">
              {/* Monitoring Stack - LARGER */}
              <motion.div variants={itemVariants}>
                <Card className="shadow-lg border-0 bg-slate-50 dark:bg-slate-900 h-full">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Layers className="h-5 w-5 text-muted-foreground" />
                      <h4 className="text-sm font-bold text-foreground uppercase tracking-wide">
                        Monitoring Stack
                      </h4>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {monitoringStack.map((tool, index) => (
                        <motion.div
                          key={index}
                          className="bg-white dark:bg-slate-800 rounded-lg p-3 text-center shadow-md"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + index * 0.05 }}
                          whileHover={{ y: -3, scale: 1.05 }}
                        >
                          <tool.icon className={`h-7 w-7 mx-auto mb-2 ${tool.color}`} />
                          <div className="text-xs font-bold text-foreground">{tool.name}</div>
                          <div className="text-xs text-muted-foreground">{tool.desc}</div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Incident Example - LARGER */}
              <motion.div variants={itemVariants}>
                <Card className="shadow-lg border-0 bg-red-50 dark:bg-red-950/30 h-full">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <FileWarning className="h-5 w-5 text-red-600" />
                      <h4 className="text-sm font-bold text-red-700 dark:text-red-400 uppercase tracking-wide">
                        Typical Incident
                      </h4>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-foreground mb-3">
                        "{incidentExample.trigger}"
                      </div>
                      {incidentExample.current.map((step, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{step}</span>
                        </div>
                      ))}
                      <div className="mt-3 pt-3 border-t border-red-200 dark:border-red-900">
                        <Badge variant="destructive" className="text-xs px-3 py-1">
                          Total: {incidentExample.total}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN - Metrics & Impact */}
          <div className="col-span-5 flex flex-col gap-4">
            {/* Current Metrics Dashboard - LARGER */}
            <motion.div variants={itemVariants} className="flex-1">
              <Card className="shadow-2xl border-0 h-full bg-gradient-to-br from-red-50 via-orange-50 to-red-50 dark:from-red-950/40 dark:to-orange-950/40">
                <CardContent className="p-5 h-full flex flex-col">
                  {/* Header - LARGER */}
                  <div className="flex items-center gap-3 mb-5">
                    <motion.div
                      className="p-3 rounded-xl bg-gradient-to-br from-red-600 to-orange-600 shadow-lg"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <TrendingDown className="h-7 w-7 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-red-700 dark:text-red-400">
                      Current Metrics
                    </h3>
                  </div>

                  {/* Metrics Grid - LARGER */}
                  <div className="space-y-4 flex-1">
                    {metrics.map((metric, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.03 }}
                      >
                        <div className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-lg border border-red-100 dark:border-red-900/50">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <metric.icon className={`h-6 w-6 ${metric.color}`} />
                              <span className="font-bold text-lg">{metric.label}</span>
                            </div>
                            <Badge variant="destructive" className="text-base px-4 py-1.5 font-bold">
                              {metric.value}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {metric.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Business Impact - LARGER */}
            <motion.div variants={itemVariants}>
              <Card className="shadow-2xl border-2 border-red-500 dark:border-red-600 bg-gradient-to-br from-red-600 to-rose-700">
                <CardContent className="p-5">
                  {/* Header - LARGER */}
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <AlertOctagon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h4 className="font-bold text-white text-xl">
                      Business Impact
                    </h4>
                  </div>

                  {/* Impact List - LARGER */}
                  <div className="space-y-3">
                    {businessImpact.map((impact, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <XCircle className="h-5 w-5 text-red-200 flex-shrink-0" />
                        <span className="text-sm text-white font-medium">
                          {impact}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
