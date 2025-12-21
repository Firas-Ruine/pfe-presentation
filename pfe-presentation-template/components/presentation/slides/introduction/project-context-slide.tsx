"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  Cloud, Brain, Layers, ArrowRight, Sparkles
} from "lucide-react"

const contextPoints = [
  { 
    icon: Cloud, 
    title: "Cloud Computing Complexity", 
    description: "Modern infrastructures have thousands of interconnected services across OpenStack, Kubernetes, and hybrid environments — creating unprecedented operational complexity", 
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/30"
  },
  { 
    icon: Brain, 
    title: "Agentic AI Emergence", 
    description: "Large Language Models and multi-agent systems now enable intelligent automation that can reason, investigate, and act — transforming what's possible in IT operations", 
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30"
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
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
          subtitle="The convergence of cloud complexity and AI capability" 
        />
        
        <motion.div 
          className="flex-1 flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Context Cards - Two Main Points */}
          <div className="grid grid-cols-2 gap-6 flex-1">
            {contextPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full"
              >
                <Card className={`shadow-xl border-0 overflow-hidden ${point.bgColor} h-full`}>
                  <CardContent className="p-8 h-full flex flex-col justify-center">
                    <div className="flex flex-col items-center text-center gap-5">
                      {/* Icon */}
                      <motion.div
                        className={`p-5 rounded-2xl bg-gradient-to-br ${point.color} shadow-lg`}
                        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <point.icon className="h-12 w-12 text-white" />
                      </motion.div>

                      {/* Content */}
                      <div className="space-y-3">
                        <h4 className="font-bold text-3xl text-foreground leading-tight">
                          {point.title}
                        </h4>
                        <p className="text-2xl text-muted-foreground leading-relaxed max-w-md">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Opportunity Statement */}
          <motion.div variants={itemVariants}>
            <Card className="shadow-xl border-2 border-primary/20 bg-gradient-to-r from-blue-50 via-white to-emerald-50 dark:from-blue-950/30 dark:via-slate-900 dark:to-emerald-950/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-6">
                  <div className="flex items-center gap-3">
                    <Layers className="h-8 w-8 text-blue-600" />
                    <span className="text-2xl font-semibold text-blue-700 dark:text-blue-400">
                      Growing Complexity
                    </span>
                  </div>
                  
                  <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-8 w-8 text-emerald-600" />
                    <span className="text-2xl font-semibold text-emerald-700 dark:text-emerald-400">
                      AI-Powered Solution
                    </span>
                  </div>
                  
                  <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  
                  <Badge className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-4 py-2 text-xl font-bold">
                    AutoSphere
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
