"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent } from "@/components/ui/card"
import {
  Briefcase, BarChart3, Package, ArrowRight, Award
} from "lucide-react"

const MDW_BLUE = 'rgb(43, 73, 153)'

const caseStudies = [
  {
    icon: Briefcase,
    title: "ARVEA BUSINESS",
    subtitle: "Case study #1",
    description: "ARVEA Business – The app that anticipates for you",
    fullDesc: "Proactive business tool for an international network",
  },
  {
    icon: Briefcase,
    title: "ARVEA MLM",
    subtitle: "Case study #2",
    description: "ARVEA Business Application – A strategic tool for an international network",
    fullDesc: "Strategic application for network operations",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    subtitle: "Case study #3",
    description: "Data Analytics – Maisonduweb expertise at the service of decision-making",
    fullDesc: "MDW expertise used to support decision-making",
  },
  {
    icon: Package,
    title: "Order Picking",
    subtitle: "Case study #4",
    description: "Order Picking Application – Optimized warehouse operations",
    fullDesc: "Reduced errors and optimized resource usage",
  },
]

export default function MDWProjectsSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader
          badge="1 • Introduction"
          title="Selected MDW Projects"
          subtitle="Case studies — Real projects, real impact"
        />

        <div className="flex-1 flex flex-col gap-4">
          {/* Case Studies Grid - 4 columns like MDW website */}
          <div className="grid grid-cols-4 gap-3 flex-1">
            {caseStudies.map((study, i) => (
              <Card
                key={i}
                className="shadow-lg border-0 overflow-hidden group hover:shadow-xl transition-all flex flex-col"
              >
                <CardContent className="p-0 flex-1 flex flex-col">
                  {/* Header with gradient background like MDW */}
                  <div
                    className="p-4 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${MDW_BLUE} 0%, #1a3a8f 50%, #0f2460 100%)`
                    }}
                  >
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="80" cy="20" r="40" fill="currentColor" className="text-blue-300" />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 opacity-20">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="20" cy="80" r="30" fill="currentColor" className="text-blue-400" />
                      </svg>
                    </div>

                    <h3 className="text-white font-bold text-sm leading-tight relative z-10">
                      {study.title}
                    </h3>
                    <study.icon className="h-8 w-8 text-white/60 mt-2 relative z-10" />
                  </div>

                  {/* Content */}
                  <div className="p-3 flex-1 flex flex-col bg-white dark:bg-slate-900">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-3 w-3 text-muted-foreground" />
                      <span className="text-[10px] font-semibold text-muted-foreground">{study.subtitle}</span>
                    </div>

                    <p className="text-[10px] text-foreground leading-relaxed flex-1">
                      {study.description}
                    </p>

                    {/* View details button like MDW */}
                    <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                      <div
                        className="inline-flex items-center gap-1 text-[9px] font-medium px-2 py-1 rounded-full text-white"
                        style={{ backgroundColor: MDW_BLUE }}
                      >
                        View details
                        <ArrowRight className="h-2.5 w-2.5" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Section - MDW Philosophy Banner */}
          <Card
            className="shadow-xl border-0 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                {/* Left side - Quote */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">
                    <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      From nothing, To something, To everything
                    </span>
                  </h3>
                  <p className="text-white/70 text-xs max-w-md">
                    At Maisonduweb, we believe real value comes from learning, sharing, and working together.
                  </p>
                  <div
                    className="inline-flex items-center gap-1.5 mt-3 text-[10px] font-medium px-3 py-1.5 rounded-full text-white"
                    style={{ backgroundColor: MDW_BLUE }}
                  >
                    Join us and let's grow together
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>

                {/* Right side - Stats */}
                <div className="flex items-center gap-4">
                  <div
                    className="px-5 py-3 rounded-xl text-center"
                    style={{ backgroundColor: MDW_BLUE }}
                  >
                    <div className="text-2xl font-bold text-white">+13</div>
                    <div className="text-[9px] text-white/80 uppercase tracking-wide">Années</div>
                    <div className="text-[9px] text-white/80 uppercase tracking-wide">d'expérience</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Award className="h-8 w-8 text-amber-400" />
                    <div>
                      <div className="text-white text-xs font-bold">MDW</div>
                      <div className="text-white/60 text-[9px]">Engineering</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SlideWrapper>
  )
}
