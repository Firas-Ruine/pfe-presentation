"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import {
  Boxes, Activity, Server, Shield, Network, Brain,
  Cloud, ArrowRight, CheckCircle2, Layers
} from "lucide-react"

const namespaces = [
  {
    name: "monitoring",
    color: "blue",
    icon: Activity,
    description: "Observability Stack",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
    borderColor: "border-blue-300 dark:border-blue-700",
    pods: [
      { name: "Prometheus", port: "9090", role: "Metrics" },
      { name: "Grafana", port: "3000", role: "Dashboards" },
      { name: "AlertManager", port: "9093", role: "Alerts" },
      { name: "Jaeger", port: "16686", role: "Tracing" },
      { name: "Consul", port: "8500", role: "Discovery" },
      { name: "OpenSearch", port: "9200", role: "Logs" },
    ]
  },
  {
    name: "awx",
    color: "red",
    icon: Server,
    description: "Automation Engine",
    gradient: "from-red-500 to-orange-500",
    bgGradient: "from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30",
    borderColor: "border-red-300 dark:border-red-700",
    pods: [
      { name: "AWX Operator", port: "-", role: "Controller" },
      { name: "AWX Web", port: "8052", role: "UI/API" },
      { name: "AWX Task", port: "-", role: "Executor" },
      { name: "PostgreSQL", port: "5432", role: "AWX DB" },
    ]
  },
  {
    name: "kube-system",
    color: "purple",
    icon: Layers,
    description: "Core Platform",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30",
    borderColor: "border-purple-300 dark:border-purple-700",
    pods: [
      { name: "Traefik", port: "80/443", role: "Ingress" },
      { name: "CoreDNS", port: "53", role: "DNS" },
      { name: "metrics-server", port: "443", role: "Metrics API" },
    ]
  },
  {
    name: "cert-manager",
    color: "green",
    icon: Shield,
    description: "TLS Automation",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30",
    borderColor: "border-green-300 dark:border-green-700",
    pods: [
      { name: "cert-manager", port: "9402", role: "Controller" },
      { name: "cainjector", port: "-", role: "CA Injector" },
      { name: "webhook", port: "10250", role: "Webhook" },
    ]
  },
  {
    name: "default",
    color: "indigo",
    icon: Brain,
    description: "AutoSphere Core",
    gradient: "from-indigo-500 to-violet-500",
    bgGradient: "from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30",
    borderColor: "border-indigo-300 dark:border-indigo-700",
    pods: [
      { name: "LangGraph", port: "8000", role: "AI Engine" },
      { name: "Qdrant", port: "6333", role: "Vector DB" },
      { name: "Redis", port: "6379", role: "Cache" },
      { name: "PostgreSQL", port: "5432", role: "Audit DB" },
    ]
  },
]

const stats = [
  { label: "Total Pods", value: "24+", icon: Boxes, color: "text-blue-600" },
  { label: "Namespaces", value: "5", icon: Layers, color: "text-purple-600" },
  { label: "Services", value: "18+", icon: Network, color: "text-green-600" },
  { label: "Status", value: "Running", icon: CheckCircle2, color: "text-emerald-600" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export default function KubernetesArchitectureSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader 
          badge="6 • Architecture" 
          title="Kubernetes Deployment Architecture" 
          subtitle="Production namespace structure and pod distribution" 
        />
        
        <motion.div 
          className="flex-1 flex flex-col gap-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Stats Banner */}
          <motion.div variants={itemVariants}>
            <Card className="shadow-lg border-0 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
              <CardContent className="p-3">
                <div className="grid grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-md">
                        <stat.icon className={`h-5 w-5 ${stat.color}`} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Namespaces Grid */}
          <div className="flex-1 grid grid-cols-3 gap-3 overflow-auto">
            {/* First Row - Monitoring & AWX */}
            <motion.div variants={itemVariants} className="col-span-2">
              {(() => {
                const MonitoringIcon = namespaces[0].icon
                return (
                  <Card className={`shadow-xl h-full border-2 ${namespaces[0].borderColor} bg-gradient-to-br ${namespaces[0].bgGradient}`}>
                    <CardHeader className="pb-2 pt-3 px-3">
                      <CardTitle className="text-sm flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${namespaces[0].gradient} shadow-lg`}>
                            <MonitoringIcon className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <div className="font-bold text-base">{namespaces[0].name}</div>
                            <div className="text-xs text-muted-foreground font-normal">{namespaces[0].description}</div>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">{namespaces[0].pods.length} pods</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-3 pb-3">
                      <div className="grid grid-cols-3 gap-2">
                        {namespaces[0].pods.map((pod, idx) => (
                          <motion.div
                            key={idx}
                            className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-blue-100 dark:border-blue-900"
                            whileHover={{ y: -2, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <div className="flex items-center gap-1.5 mb-1">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                              <span className="text-xs font-semibold truncate">{pod.name}</span>
                            </div>
                            <div className="text-[9px] text-muted-foreground truncate">{pod.role}</div>
                            <Badge variant="secondary" className="text-[8px] px-1 py-0 mt-1">:{pod.port}</Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })()}
            </motion.div>

            <motion.div variants={itemVariants}>
              {(() => {
                const AwxIcon = namespaces[1].icon
                return (
                  <Card className={`shadow-xl h-full border-2 ${namespaces[1].borderColor} bg-gradient-to-br ${namespaces[1].bgGradient}`}>
                    <CardHeader className="pb-2 pt-3 px-3">
                      <CardTitle className="text-sm flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${namespaces[1].gradient} shadow-lg`}>
                            <AwxIcon className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <div className="font-bold text-base">{namespaces[1].name}</div>
                            <div className="text-xs text-muted-foreground font-normal">{namespaces[1].description}</div>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">{namespaces[1].pods.length} pods</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-3 pb-3">
                      <div className="space-y-2">
                        {namespaces[1].pods.map((pod, idx) => (
                          <motion.div
                            key={idx}
                            className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-red-100 dark:border-red-900"
                            whileHover={{ x: 2, scale: 1.01 }}
                          >
                            <div className="flex items-center justify-between mb-0.5">
                              <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-xs font-semibold">{pod.name}</span>
                              </div>
                              {pod.port !== "-" && (
                                <Badge variant="secondary" className="text-[8px] px-1 py-0">:{pod.port}</Badge>
                              )}
                            </div>
                            <div className="text-[9px] text-muted-foreground">{pod.role}</div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })()}
            </motion.div>

            {/* Second Row - kube-system & cert-manager & default */}
            {namespaces.slice(2).map((ns, nsIdx) => {
              const NsIcon = ns.icon
              return (
                <motion.div key={nsIdx + 2} variants={itemVariants}>
                  <Card className={`shadow-xl h-full border-2 ${ns.borderColor} bg-gradient-to-br ${ns.bgGradient}`}>
                    <CardHeader className="pb-2 pt-3 px-3">
                      <CardTitle className="text-sm flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${ns.gradient} shadow-lg`}>
                            <NsIcon className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <div className="font-bold text-sm">{ns.name}</div>
                            <div className="text-[10px] text-muted-foreground font-normal">{ns.description}</div>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-[9px]">{ns.pods.length} pods</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-3 pb-3">
                      <div className="space-y-1.5">
                        {ns.pods.map((pod, idx) => (
                          <motion.div
                            key={idx}
                            className={`p-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm border ${
                              ns.name === "kube-system"
                                ? "border-purple-100 dark:border-purple-900"
                                : ns.name === "cert-manager"
                                ? "border-green-100 dark:border-green-900"
                                : "border-indigo-100 dark:border-indigo-900"
                            }`}
                            whileHover={{ x: 2, scale: 1.01 }}
                          >
                            <div className="flex items-center justify-between mb-0.5">
                              <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-xs font-semibold truncate">{pod.name}</span>
                              </div>
                              {pod.port !== "-" && (
                                <Badge variant="secondary" className="text-[8px] px-1 py-0 flex-shrink-0">:{pod.port}</Badge>
                              )}
                            </div>
                            <div className="text-[9px] text-muted-foreground truncate">{pod.role}</div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Data Flow Diagram */}
          <motion.div variants={itemVariants}>
            <Card className="shadow-lg border-0 bg-gradient-to-r from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
              <CardContent className="p-3">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                    <Activity className="h-4 w-4 text-blue-600" />
                    <span className="text-xs font-semibold text-blue-600">monitoring</span>
                  </div>
                  
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5 text-blue-500" />
                  </motion.div>
                  <Badge variant="outline" className="text-xs">Alerts</Badge>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                  >
                    <ArrowRight className="h-5 w-5 text-indigo-500" />
                  </motion.div>
                  
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
                    <Brain className="h-4 w-4 text-indigo-600" />
                    <span className="text-xs font-semibold text-indigo-600">default</span>
                  </div>
                  
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                  >
                    <ArrowRight className="h-5 w-5 text-red-500" />
                  </motion.div>
                  <Badge variant="outline" className="text-xs">Actions</Badge>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }}
                  >
                    <ArrowRight className="h-5 w-5 text-orange-500" />
                  </motion.div>
                  
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-100 dark:bg-red-900/30">
                    <Server className="h-4 w-4 text-red-600" />
                    <span className="text-xs font-semibold text-red-600">awx</span>
                  </div>
                  
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 1.2 }}
                  >
                    <ArrowRight className="h-5 w-5 text-green-500" />
                  </motion.div>
                  <Badge variant="outline" className="text-xs">Remediate</Badge>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }}
                  >
                    <ArrowRight className="h-5 w-5 text-emerald-500" />
                  </motion.div>
                  
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                    <Cloud className="h-4 w-4 text-green-600" />
                    <span className="text-xs font-semibold text-green-600">OpenStack</span>
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
