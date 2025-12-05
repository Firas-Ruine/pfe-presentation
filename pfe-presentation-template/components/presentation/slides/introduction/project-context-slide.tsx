"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  Cloud, Brain, AlertTriangle, Clock, Target, CheckCircle, Zap, 
  ArrowRight, Server, Activity, Database, TrendingUp, Cpu, 
  Network, BarChart3, Shield, Layers
} from "lucide-react"

const contextPoints = [
  { 
    icon: Cloud, 
    title: "Cloud Computing Explosion", 
    description: "Complex infrastructures with thousands of interconnected services (OpenStack, Kubernetes)", 
    stat: "94%",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/30"
  },
  { 
    icon: AlertTriangle, 
    title: "Alert Overload", 
    description: "SRE teams overwhelmed by massive alert storms without intelligent deduplication", 
    stat: "1000+",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/30"
  },
  { 
    icon: Clock, 
    title: "Slow Resolution", 
    description: "Manual diagnosis and AWX playbook execution impact system availability critically", 
    stat: "30 min",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/30"
  },
  { 
    icon: Brain, 
    title: "Agentic AI Emergence", 
    description: "LLMs and multi-agent systems revolutionize intelligent automation capabilities", 
    stat: "2024",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30"
  },
]

const monitoringTools = [
  { icon: Activity, name: "Prometheus", desc: "Metrics collection", color: "text-orange-600" },
  { icon: BarChart3, name: "Grafana", desc: "Visualization", color: "text-orange-500" },
  { icon: Database, name: "OpenSearch", desc: "Log analysis", color: "text-blue-600" },
  { icon: Cpu, name: "OpenStack", desc: "Cloud platform", color: "text-red-600" },
  { icon: Server, name: "AWX", desc: "Automation", color: "text-purple-600" },
  { icon: Network, name: "RabbitMQ", desc: "Messaging", color: "text-green-600" },
]

const objectives = [
  { text: "Reduce MTTR by 93%", icon: TrendingUp, metric: "30 min → 30 sec" },
  { text: "Automate 85% of manual interventions", icon: Zap, metric: "100% → 15%" },
  { text: "Detect issues 20 minutes before occurrence", icon: Clock, metric: "Predictive ML" },
  { text: "Reduce alert volume by 70%", icon: Shield, metric: "Smart correlation" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.12, delayChildren: 0.2 } 
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

export default function ProjectContextSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader 
          badge="1 • Introduction" 
          title="Context and Importance" 
          subtitle="Evolution towards autonomous and intelligent IT operations" 
        />
        
        <motion.div 
          className="flex-1 flex flex-col gap-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* TOP SECTION - Context & Objectives */}
          <div className="grid grid-cols-12 gap-4">
            {/* LEFT - Current Context */}
            <div className="col-span-7 space-y-3">
              {/* Section Header */}
              <motion.div 
                variants={itemVariants}
                className="flex items-center gap-2"
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                  <Activity className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold" style={{ color: 'rgb(43, 73, 153)' }}>
                  Current Context
                </h3>
              </motion.div>

              {/* Context Cards */}
              <div className="grid grid-cols-2 gap-2">
                {contextPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className={`shadow-md border-0 overflow-hidden ${point.bgColor} h-full`}>
                      <CardContent className="p-3">
                        <div className="flex items-start gap-2">
                          {/* Icon */}
                          <motion.div
                            className={`p-2 rounded-lg bg-gradient-to-br ${point.color} shadow-md flex-shrink-0`}
                            whileHover={{ rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 0.4 }}
                          >
                            <point.icon className="h-4 w-4 text-white" />
                          </motion.div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-1 mb-1">
                              <h4 className="font-bold text-xs text-foreground leading-tight">
                                {point.title}
                              </h4>
                              <Badge 
                                variant="secondary" 
                                className="text-[9px] flex-shrink-0"
                              >
                                {point.stat}
                              </Badge>
                            </div>
                            <p className="text-[10px] text-muted-foreground leading-relaxed">
                              {point.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT - AutoSphere Objectives */}
            <div className="col-span-5">
              <motion.div variants={itemVariants} className="h-full">
                <Card className="shadow-xl border-0 h-full bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-950/40 dark:to-cyan-950/40">
                  <CardContent className="p-4 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-3">
                      <motion.div
                        className="p-2 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <Target className="h-5 w-5 text-white" />
                      </motion.div>
                      <h3 className="text-base font-bold" style={{ color: 'rgb(43, 73, 153)' }}>
                        AutoSphere Objectives
                      </h3>
                    </div>

                    {/* Objectives List */}
                    <div className="space-y-2 flex-1">
                      {objectives.map((obj, index) => (
                        <motion.div
                          key={index}
                          className="bg-white dark:bg-slate-900 rounded-lg p-2.5 shadow-sm"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          whileHover={{ scale: 1.02, x: 2 }}
                        >
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <p className="text-xs font-medium text-foreground">
                                {obj.text}
                              </p>
                              <div className="flex items-center gap-1 mt-1">
                                <obj.icon className="h-3 w-3 text-muted-foreground" />
                                <span className="text-[10px] text-muted-foreground">
                                  {obj.metric}
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* MIDDLE - Monitoring Stack */}
          <motion.div variants={itemVariants}>
            <Card className="shadow-md border-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
              <CardContent className="p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="h-4 w-4 text-muted-foreground" />
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Existing Monitoring & Automation Stack
                  </h4>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {monitoringTools.map((tool, index) => (
                    <motion.div
                      key={index}
                      className="bg-white dark:bg-slate-900 rounded-lg p-2 shadow-sm text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      whileHover={{ y: -2, scale: 1.05 }}
                    >
                      <tool.icon className={`h-5 w-5 mx-auto mb-1 ${tool.color}`} />
                      <div className="text-[9px] font-semibold text-foreground">{tool.name}</div>
                      <div className="text-[8px] text-muted-foreground">{tool.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* BOTTOM - Vision: SRE Co-Pilot (Full Width Banner) */}
          <motion.div 
            variants={itemVariants}
            className="flex-1"
          >
            <Card className="shadow-2xl border-0 h-full overflow-hidden relative bg-gradient-to-br from-indigo-600 via-blue-700 to-cyan-600">
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  background: [
                    'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)'
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              <CardContent className="p-5 relative z-10 h-full flex items-center">
                <div className="flex items-center justify-between w-full gap-8">
                  {/* Left - Vision Title & Description */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                      >
                        <Zap className="h-8 w-8 text-yellow-300" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white">
                        Vision: SRE Co-Pilot
                      </h3>
                    </div>
                    <p className="text-sm text-white/90 max-w-md">
                      Transform IT operations from reactive and manual to{" "}
                      <span className="font-bold text-yellow-200">
                        proactive AI-driven automation
                      </span>
                      .
                    </p>
                  </div>

                  {/* Center - Workflow Visualization */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                      <div className="flex items-center gap-8">
                        <motion.div 
                          className="text-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 mb-2">
                            <Server className="h-10 w-10 mx-auto text-white" />
                          </div>
                          <span className="text-xs font-medium text-white">Alert</span>
                        </motion.div>
                        
                        <motion.div
                          animate={{ x: [0, 8, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="h-6 w-6 text-yellow-300" />
                        </motion.div>
                        
                        <motion.div 
                          className="text-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 mb-2">
                            <Brain className="h-10 w-10 mx-auto text-cyan-300" />
                          </div>
                          <span className="text-xs font-medium text-white">AI Analysis</span>
                        </motion.div>
                        
                        <motion.div
                          animate={{ x: [0, 8, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                        >
                          <ArrowRight className="h-6 w-6 text-yellow-300" />
                        </motion.div>
                        
                        <motion.div 
                          className="text-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 mb-2">
                            <Zap className="h-10 w-10 mx-auto text-green-400" />
                          </div>
                          <span className="text-xs font-medium text-white">Auto-Fix</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Right - Badge */}
                  <div className="flex-shrink-0">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      <Badge 
                        variant="outline" 
                        className="text-sm px-4 py-2 bg-white/10 backdrop-blur-sm border-white/30 text-white"
                      >
                        <Brain className="h-4 w-4 mr-2" />
                        Multi-Agent LLM System
                      </Badge>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
