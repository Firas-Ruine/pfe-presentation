"use client"
import SlideWrapper from "../../slide-wrapper"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, MessageCircle, Github, Linkedin, Mail } from "lucide-react"

export default function ThankYouSlide() {
  return (
    <SlideWrapper className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 dark:from-primary/20 dark:via-slate-900 dark:to-secondary/20">
      <div className="h-full flex flex-col justify-center items-center text-center space-y-8">
        <Brain className="h-20 w-20 text-primary animate-pulse" />

        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Thank You
        </h1>

        <h2 className="text-2xl md:text-3xl text-muted-foreground">
          Questions & Discussion
        </h2>

        <Card className="shadow-lg max-w-2xl">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg text-primary mb-4 flex items-center justify-center">
              <MessageCircle className="h-5 w-5 mr-2" />
              Project Summary
            </h3>
            <p className="text-muted-foreground">
              <span className="font-bold text-primary">AutoSphere</span> is an AI-driven self-healing automation system
              that reduces manual SRE work by <span className="text-green-500 font-bold">85%</span>,
              MTTR by <span className="text-green-500 font-bold">93%</span>,
              and alert volume by <span className="text-green-500 font-bold">70%</span> through
              intelligent multi-agent investigation and automated remediation.
            </p>
          </CardContent>
        </Card>

        <div className="flex flex-wrap justify-center gap-3">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            LangGraph
          </Badge>
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Multi-Agent AI
          </Badge>
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Self-Healing
          </Badge>
          <Badge variant="secondary" className="text-sm px-4 py-2">
            OpenStack
          </Badge>
          <Badge variant="secondary" className="text-sm px-4 py-2">
            SRE Automation
          </Badge>
        </div>

        <div className="text-sm text-muted-foreground mt-8">
          <p className="font-semibold">Benkhalifa Mohamed Naceur</p>
          <p>Maison du Web - Cloud & DevOps Division</p>
          <p className="mt-2">Academic Year 2024-2025</p>
        </div>
      </div>
    </SlideWrapper>
  )
}
