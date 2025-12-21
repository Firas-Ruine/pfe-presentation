"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Code, Database, Brain, Cloud, Globe, Target, CheckCircle2, Award, TrendingUp, Zap, Rocket, Shield, Users } from "lucide-react"

const services = [
  { icon: Code, title: "Development", desc: "Custom software, web & mobile apps", stats: "50+ Projects", color: "bg-gradient-to-br from-blue-500 to-cyan-500" },
  { icon: Database, title: "Data & BI", desc: "Analytics & business intelligence", stats: "Analytics", color: "bg-gradient-to-br from-emerald-500 to-teal-500" },
  { icon: Brain, title: "AI Solutions", desc: "ML, automation & intelligent systems", stats: "Innovation", color: "bg-gradient-to-br from-purple-500 to-pink-500" },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Infrastructure & cloud architectures", stats: "24/7 Support", color: "bg-gradient-to-br from-orange-500 to-red-500" },
]

const stats = [
  { value: "13+", label: "Years", icon: Award },
  { value: "50+", label: "Projects", icon: CheckCircle2 },
  { value: "4", label: "Services", icon: Zap },
  { value: "100%", label: "Success", icon: TrendingUp },
]

const expertise = [
  { icon: Target, label: "Strategic Vision" },
  { icon: Rocket, label: "Fast Delivery" },
  { icon: Shield, label: "Security Focus" },
  { icon: Users, label: "Team Excellence" },
]

export default function CompanyOverviewSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader badge="1 • Introduction" title="Maisonduweb Engineering" subtitle="Your Strategic Partner in Digital Transformation" />

        <div className="flex-1 flex flex-col gap-4">
          {/* Hero Section */}
          <Card className="shadow-lg border-0" style={{ backgroundColor: 'rgb(43 73 153)' }}>
            <CardContent className="p-5">
              <div className="flex items-center gap-6">
                {/* Logo & Mission */}
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/10 ring-2 ring-white/20 flex-shrink-0">
                    <Image src="/mdw-the-best.png" alt="MDW" width={64} height={64} className="object-contain p-2" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">MDW Engineering</h2>
                    <p className="text-white/80 text-base max-w-md">
                      Developing products that place <span className="text-cyan-200 font-semibold">humans at the center</span> of design.
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Badge className="bg-white/20 text-white border-white/30 text-sm px-2 py-0.5">
                        <Globe className="h-3 w-3 mr-1" />Founded 2012
                      </Badge>
                      <Badge className="bg-white/20 text-white border-white/30 text-sm px-2 py-0.5">
                        <Target className="h-3 w-3 mr-1" />Nabeul, Tunisia
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-2">
                  {stats.map((s, i) => (
                    <div key={i} className="bg-white/10 rounded-lg p-2 text-center border border-white/20">
                      <div className="text-2xl font-bold text-white">{s.value}</div>
                      <div className="text-xs text-white/70">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services Grid */}
          <div className="grid grid-cols-4 gap-3 flex-1">
            {services.map((service, i) => (
              <Card key={i} className="shadow-md">
                <CardContent className="p-4 h-full flex flex-col">
                  <div className={`p-2 rounded-lg ${service.color} w-fit mb-2`}>
                    <service.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-1" style={{ color: 'rgb(43 73 153)' }}>{service.title}</h4>
                  <p className="text-sm text-muted-foreground flex-1">{service.desc}</p>
                  <Badge variant="outline" className="text-sm mt-2 w-fit" style={{ borderColor: 'rgb(43 73 153)', color: 'rgb(43 73 153)' }}>
                    <CheckCircle2 className="h-3 w-3 mr-1" />{service.stats}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Banner */}
          <Card className="shadow-lg border-0" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    From nothing, To something, To everything
                  </h3>
                  <p className="text-white/60 text-sm">Real value comes from learning, sharing, and working together.</p>
                </div>
                <div className="flex gap-3">
                  {expertise.map((item, i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-2 border border-white/10 text-center">
                      <item.icon className="h-5 w-5 text-cyan-400 mx-auto mb-1" />
                      <div className="text-xs text-white/80">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SlideWrapper>
  )
}
