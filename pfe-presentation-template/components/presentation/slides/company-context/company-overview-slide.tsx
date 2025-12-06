"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Code, Database, Brain, Cloud, Globe, Users, Target,
  Rocket, CheckCircle2, Award, TrendingUp, Shield, Zap
} from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

// Floating dots configuration like MDW website
const floatingDots = [
  { x: '10%', y: '20%', size: 4, color: 'rgb(43 73 153)', delay: 0 },
  { x: '85%', y: '15%', size: 6, color: 'rgb(236 72 153)', delay: 0.5 },
  { x: '75%', y: '70%', size: 3, color: 'rgb(43 73 153)', delay: 1 },
  { x: '20%', y: '80%', size: 5, color: 'rgb(139 92 246)', delay: 1.5 },
  { x: '50%', y: '10%', size: 4, color: 'rgb(236 72 153)', delay: 2 },
  { x: '90%', y: '50%', size: 3, color: 'rgb(139 92 246)', delay: 0.3 },
  { x: '5%', y: '60%', size: 5, color: 'rgb(43 73 153)', delay: 0.8 },
  { x: '60%', y: '85%', size: 4, color: 'rgb(236 72 153)', delay: 1.2 },
  { x: '30%', y: '30%', size: 3, color: 'rgb(139 92 246)', delay: 1.8 },
  { x: '95%', y: '25%', size: 4, color: 'rgb(43 73 153)', delay: 0.6 },
]

const services = [
  { 
    icon: Code, 
    title: "Development", 
    desc: "Custom software, web & mobile applications built with modern technologies",
    color: "from-blue-600 to-cyan-600",
    stats: "50+ Projects",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500"
  },
  { 
    icon: Database, 
    title: "Data & BI", 
    desc: "Advanced analytics, business intelligence & data-driven decision support",
    color: "from-emerald-600 to-teal-600",
    stats: "Analytics",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-500"
  },
  { 
    icon: Brain, 
    title: "AI Solutions", 
    desc: "Machine learning, automation & intelligent systems integration",
    color: "from-purple-600 to-pink-600",
    stats: "Innovation",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500"
  },
  { 
    icon: Cloud, 
    title: "Cloud & DevOps", 
    desc: "Infrastructure automation, security & scalable cloud architectures",
    color: "from-orange-600 to-red-600",
    stats: "24/7 Support",
    iconBg: "bg-gradient-to-br from-orange-500 to-red-500"
  },
]

const expertise = [
  { icon: Target, label: "Strategic Vision", value: "Business-first approach" },
  { icon: Rocket, label: "Fast Delivery", value: "Agile methodologies" },
  { icon: Shield, label: "Security Focus", value: "Enterprise-grade" },
  { icon: Users, label: "Team Excellence", value: "Expert engineers" },
]

export default function CompanyOverviewSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader
          badge="1 • Introduction"
          title="Maisonduweb Engineering"
          subtitle="Your Strategic Partner in Digital Transformation"
        />

        <motion.div
          className="flex-1 flex flex-col gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Section with MDW Blue Background */}
          <motion.div variants={itemVariants}>
            <Card 
              className="shadow-2xl border-0 overflow-hidden relative"
              style={{
                '--tw-bg-opacity': '1',
                backgroundColor: 'rgb(43 73 153 / var(--tw-bg-opacity, 1))'
              } as React.CSSProperties}
            >
              {/* Animated background elements */}
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                  background: [
                    'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)'
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              <CardContent className="p-6 relative z-10">
                <div className="grid grid-cols-12 gap-6 items-center">
                  {/* Left: Logo & Mission */}
                  <div className="col-span-7 flex items-center gap-6">
                    <motion.div
                      className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 ring-4 ring-white/20"
                      style={{
                        '--tw-bg-opacity': '1',
                        backgroundColor: 'rgb(43 73 153 / var(--tw-bg-opacity, 1))'
                      } as React.CSSProperties}
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src="/mdw-the-best.png"
                        alt="MDW Engineering"
                        fill
                        className="object-contain p-3"
                      />
                    </motion.div>
                    
                    <div className="flex-1">
                      <motion.h2 
                        className="text-3xl font-bold text-white mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                      >
                        MDW Engineering
                      </motion.h2>
                      <motion.p 
                        className="text-white/90 text-sm leading-relaxed max-w-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                      >
                        Helping organizations seize opportunities by developing products that place{" "}
                        <span className="font-semibold text-cyan-200">humans at the center</span> of design.
                        We transform challenges into innovative solutions through technology and expertise.
                      </motion.p>
                      
                      <motion.div 
                        className="flex items-center gap-3 mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                      >
                        <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                          <Globe className="h-3 w-3 mr-1.5" />
                          Founded 2012
                        </Badge>
                        <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                          <Target className="h-3 w-3 mr-1.5" />
                          Nabeul, Tunisia
                        </Badge>
                      </motion.div>
                    </div>
                  </div>

                  {/* Right: Stats Grid */}
                  <div className="col-span-5 grid grid-cols-2 gap-3">
                    {[
                      { value: "13+", label: "Years Experience", icon: Award },
                      { value: "50+", label: "Projects Delivered", icon: CheckCircle2 },
                      { value: "4", label: "Core Services", icon: Zap },
                      { value: "100%", label: "Client Success", icon: TrendingUp }
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          delay: 0.5 + i * 0.1, 
                          type: "spring",
                          stiffness: 200,
                          damping: 15
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <stat.icon className="h-4 w-4 text-cyan-300" />
                          <div className="text-xs text-white/70">{stat.label}</div>
                        </div>
                        <div className="text-3xl font-bold text-white">{stat.value}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Services Grid with Floating Dots */}
          <div className="relative flex-1">
            {/* Floating Dots Animation like MDW website */}
            {floatingDots.map((dot, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full pointer-events-none z-0"
                style={{
                  left: dot.x,
                  top: dot.y,
                  width: dot.size,
                  height: dot.size,
                  backgroundColor: dot.color,
                }}
                animate={{
                  y: [0, -15, 0, 15, 0],
                  x: [0, 8, 0, -8, 0],
                  opacity: [0.4, 0.8, 0.4, 0.8, 0.4],
                  scale: [1, 1.2, 1, 1.2, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: dot.delay,
                  ease: "easeInOut",
                }}
              />
            ))}

            <div className="grid grid-cols-4 gap-4 h-full relative z-10">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="h-full"
                >
                  <motion.div
                    className="h-full"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Card
                      className="shadow-lg border border-slate-200/60 dark:border-slate-700/60 overflow-hidden h-full group hover:shadow-2xl hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 cursor-pointer bg-white dark:bg-slate-900 rounded-2xl"
                    >
                      <CardContent className="p-5 h-full flex flex-col relative overflow-hidden">
                        {/* Hover gradient overlay */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
                        />

                        {/* Icon with clean style like MDW */}
                        <motion.div
                          className={`p-3 rounded-xl ${service.iconBg} shadow-lg w-fit mb-4 relative z-10`}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            delay: 0.4 + i * 0.1,
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                          }}
                          whileHover={{
                            scale: 1.1,
                            rotate: [0, -5, 5, 0],
                          }}
                        >
                          <service.icon className="h-6 w-6 text-white" />
                        </motion.div>

                        {/* Title */}
                        <motion.h4
                          className="font-bold text-lg mb-2 relative z-10"
                          style={{
                            color: 'rgb(43 73 153)'
                          }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                        >
                          {service.title}
                        </motion.h4>

                        {/* Description */}
                        <motion.p
                          className="text-sm text-muted-foreground leading-relaxed flex-1 relative z-10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                        >
                          {service.desc}
                        </motion.p>

                        {/* Stats Badge at bottom */}
                        <motion.div
                          className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 relative z-10"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                        >
                          <Badge
                            variant="outline"
                            className="text-xs group-hover:bg-blue-50 dark:group-hover:bg-blue-950/30 transition-colors"
                            style={{
                              borderColor: 'rgb(43 73 153)',
                              color: 'rgb(43 73 153)'
                            }}
                          >
                            <CheckCircle2 className="h-3 w-3 mr-1.5" />
                            {service.stats}
                          </Badge>
                        </motion.div>

                        {/* Decorative corner gradient on hover */}
                        <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`} />
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Banner - MDW Philosophy - BIGGER */}
          <motion.div variants={itemVariants} className="mt-2">
            <Card
              className="shadow-2xl border-0 overflow-hidden relative rounded-2xl"
              style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                  background: [
                    'radial-gradient(circle at 0% 50%, rgba(67, 56, 202, 0.6) 0%, transparent 50%)',
                    'radial-gradient(circle at 100% 50%, rgba(67, 56, 202, 0.6) 0%, transparent 50%)',
                    'radial-gradient(circle at 0% 50%, rgba(67, 56, 202, 0.6) 0%, transparent 50%)'
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Decorative floating elements */}
              <div className="absolute top-4 left-8 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-xl" />
              <div className="absolute bottom-4 right-1/4 w-16 h-16 bg-gradient-to-br from-cyan-500/15 to-transparent rounded-full blur-xl" />

              <CardContent className="py-8 px-8 relative z-10">
                <div className="grid grid-cols-12 gap-8 items-center">
                  {/* Left: Philosophy - BIGGER TEXT */}
                  <div className="col-span-5">
                    <motion.h3
                      className="text-2xl font-bold mb-3 leading-tight"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1, duration: 0.6 }}
                    >
                      <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        From nothing, To something, To everything
                      </span>
                    </motion.h3>
                    <motion.p
                      className="text-white/70 text-sm leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.6 }}
                    >
                      Real value comes from learning, sharing, and working together as strategic partners.
                    </motion.p>
                  </div>

                  {/* Right: Expertise Grid - BIGGER CARDS */}
                  <div className="col-span-7 grid grid-cols-4 gap-3">
                    {expertise.map((item, i) => (
                      <motion.div
                        key={i}
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                        whileHover={{
                          scale: 1.05,
                          y: -4,
                          borderColor: 'rgba(255,255,255,0.3)'
                        }}
                      >
                        <motion.div
                          className="mb-2"
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.4 }}
                        >
                          <item.icon className="h-7 w-7 text-cyan-400" />
                        </motion.div>
                        <div className="text-sm font-semibold text-white mb-0.5">{item.label}</div>
                        <div className="text-xs text-white/60">{item.value}</div>
                      </motion.div>
                    ))}
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
