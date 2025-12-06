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
          className="flex-1 flex flex-col gap-6 py-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* TOP SECTION - Current Context */}
          <div className="flex flex-col flex-1" style={{ minHeight: 0 }}>
            {/* Section Header */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-3 mb-4"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold" style={{ color: 'rgb(43, 73, 153)' }}>
                Current Context
              </h3>
            </motion.div>

            {/* Context Cards - Single Row */}
            <div className="grid grid-cols-4 gap-5 flex-1">
              {contextPoints.map((point, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full"
                >
                  <Card className={`shadow-md border-0 overflow-hidden ${point.bgColor} h-full flex flex-col`}>
                    <CardContent className="p-4 flex-1 flex items-center justify-center">
                      <div className="flex flex-col items-center text-center gap-3">
                        {/* Icon */}
                        <motion.div
                          className={`p-4 rounded-lg bg-gradient-to-br ${point.color} shadow-md`}
                          whileHover={{ rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.4 }}
                        >
                          <point.icon className="h-10 w-10 text-white" />
                        </motion.div>

                        {/* Badge */}
                        <Badge 
                          variant="secondary" 
                          className="text-sm font-bold px-3 py-1"
                        >
                          {point.stat}
                        </Badge>

                        {/* Content */}
                        <div className="space-y-2">
                          <h4 className="font-bold text-base text-foreground leading-tight">
                            {point.title}
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
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

          {/* MIDDLE SECTION - Objectives */}
          <motion.div variants={itemVariants} className="flex-1 flex flex-col" style={{ minHeight: 0 }}>
            <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-950/40 dark:to-cyan-950/40 flex-1 flex flex-col">
              <CardContent className="p-5 flex-1 flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Target className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold" style={{ color: 'rgb(43, 73, 153)' }}>
                    AutoSphere Objectives
                  </h3>
                </div>

                {/* Objectives Grid - Single Row */}
                <div className="grid grid-cols-4 gap-5 flex-1">
                  {objectives.map((obj, index) => (
                    <motion.div
                      key={index}
                      className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow-sm h-full"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="flex flex-col items-center text-center gap-3 h-full justify-center">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500">
                          <obj.icon className="h-7 w-7 text-white" />
                        </div>
                        <CheckCircle className="h-6 w-6 text-green-500" />
                        <div className="space-y-2">
                          <p className="text-sm font-bold text-foreground leading-tight">
                            {obj.text}
                          </p>
                          <Badge variant="secondary" className="text-xs">
                            {obj.metric}
                          </Badge>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
