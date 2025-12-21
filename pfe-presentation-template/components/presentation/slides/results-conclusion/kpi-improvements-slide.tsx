"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  TrendingUp, Clock, AlertTriangle, Users, 
  ArrowRight, CheckCircle2
} from "lucide-react"

// Only 3 key metrics - the ones that matter most
const keyMetrics = [
  { 
    label: "MTTR", 
    fullName: "Mean Time To Repair",
    before: "~30 min", 
    after: "~30 sec", 
    improvement: "93%",
    icon: Clock,
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-50 dark:bg-red-950/30"
  },
  { 
    label: "Alert Volume", 
    fullName: "Daily Alerts",
    before: "~1,000/day", 
    after: "~300/day", 
    improvement: "70%",
    icon: AlertTriangle,
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/30"
  },
  { 
    label: "Manual Work", 
    fullName: "Human Intervention",
    before: "100%", 
    after: "15%", 
    improvement: "85%",
    icon: Users,
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/30"
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
}

export default function KpiImprovementsSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader 
          badge="7 • Results" 
          title="Measured Impact" 
          subtitle="Before and after AutoSphere implementation" 
        />
        
        <motion.div 
          className="flex-1 flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Section Header */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <div className="p-4 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg">
              <TrendingUp className="h-10 w-10 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-600 dark:text-green-400">
                Key Performance Indicators
              </h3>
              <p className="text-xl text-muted-foreground">Quantified operational improvements</p>
            </div>
          </motion.div>

          {/* Metrics Grid - 3 Cards */}
          <div className="flex-1 grid grid-cols-3 gap-6">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="h-full"
              >
                <Card className={`shadow-xl border-0 h-full ${metric.bgColor} overflow-hidden`}>
                  <CardContent className="p-6 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${metric.color} shadow-lg`}>
                        <metric.icon className="h-10 w-10 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-2xl text-foreground">{metric.label}</h4>
                        <p className="text-lg text-muted-foreground">{metric.fullName}</p>
                      </div>
                    </div>

                    {/* Before / After Comparison */}
                    <div className="flex-1 flex flex-col justify-center">
                      {/* Before */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xl text-muted-foreground font-medium">Before</span>
                        <span className="text-3xl font-bold text-red-500 line-through decoration-2">
                          {metric.before}
                        </span>
                      </div>

                      {/* Arrow */}
                      <div className="flex justify-center my-3">
                        <motion.div
                          animate={{ y: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="h-10 w-10 text-green-500 rotate-90" />
                        </motion.div>
                      </div>

                      {/* After */}
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xl text-muted-foreground font-medium">After</span>
                        <span className="text-4xl font-bold text-green-600">
                          {metric.after}
                        </span>
                      </div>
                    </div>

                    {/* Improvement Badge */}
                    <motion.div 
                      className="mt-6 pt-4 border-t border-green-200 dark:border-green-800"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle2 className="h-7 w-7 text-green-500" />
                        <Badge className="bg-green-500 hover:bg-green-600 text-white text-2xl px-5 py-2.5 font-bold">
                          ↓ {metric.improvement} Reduction
                        </Badge>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bottom Summary */}
          <motion.div variants={itemVariants}>
            <Card className="shadow-xl border-2 border-green-200 dark:border-green-800 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30">
              <CardContent className="p-5">
                <div className="flex items-center justify-center gap-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-7 w-7 text-green-500" />
                    <span className="text-xl font-semibold text-green-700 dark:text-green-400">
                      Faster Resolution
                    </span>
                  </div>
                  <div className="h-6 w-px bg-green-300 dark:bg-green-700" />
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-7 w-7 text-green-500" />
                    <span className="text-xl font-semibold text-green-700 dark:text-green-400">
                      Fewer Alerts
                    </span>
                  </div>
                  <div className="h-6 w-px bg-green-300 dark:bg-green-700" />
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-7 w-7 text-green-500" />
                    <span className="text-xl font-semibold text-green-700 dark:text-green-400">
                      Less Manual Work
                    </span>
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
