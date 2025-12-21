"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, UserCog, Bot, Shield, CheckCircle, Zap, Lock, Clock, Server } from "lucide-react"

const actors = [
  { icon: UserCog, name: "SRE Engineer", desc: "Reviews & approves actions", perms: ["View", "Approve", "Override"] },
  { icon: Bot, name: "AutoSphere", desc: "Detects, investigates, remediates", perms: ["Detect", "Investigate", "Execute"] },
  { icon: Shield, name: "Policy Engine", desc: "Enforces RBAC & circuit breaker", perms: ["Validate", "Block", "Audit"] },
]

const functionalReqs = [
  { id: "RF01", desc: "Ingest alerts from Prometheus" },
  { id: "RF02", desc: "Deduplicate via fingerprint + Redis" },
  { id: "RF03", desc: "Route based on confidence level" },
  { id: "RF04", desc: "Parallel multi-agent investigation" },
  { id: "RF05", desc: "Generate remediation via LLM" },
  { id: "RF06", desc: "Execute AWX with validation" },
]

const nonFunctionalReqs = [
  { icon: Zap, title: "Performance", desc: "< 2 min processing" },
  { icon: Shield, title: "Security", desc: "RBAC + audit trail" },
  { icon: Clock, title: "Availability", desc: "Circuit breaker" },
  { icon: Server, title: "Scalability", desc: "Parallel agents" },
]

export default function ActorsRequirementsSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader badge="4 • Specifications" title="Actors & Requirements" subtitle="System actors, functional and non-functional requirements" />
        
        <div className="flex-1 grid grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold flex items-center">
              <Users className="h-6 w-6 mr-2 text-primary" />
              System Actors
            </h3>
            <div className="space-y-2">
              {actors.map((actor, index) => (
                <Card key={index} className="shadow-sm">
                  <CardContent className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <actor.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg">{actor.name}</h4>
                        <p className="text-base text-muted-foreground">{actor.desc}</p>
                        <div className="flex gap-1 mt-1">
                          {actor.perms.map((perm, idx) => (
                            <Badge key={idx} variant="outline" className="text-sm px-2 py-0">{perm}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <h3 className="text-xl font-bold flex items-center mt-2">
              <Lock className="h-6 w-6 mr-2 text-primary" />
              Non-Functional Requirements
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {nonFunctionalReqs.map((req, index) => (
                <Card key={index} className="shadow-sm">
                  <CardContent className="p-3 flex items-center gap-2">
                    <req.icon className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-base">{req.title}</span>
                      <span className="text-sm text-muted-foreground ml-1">{req.desc}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold flex items-center">
              <CheckCircle className="h-6 w-6 mr-2 text-primary" />
              Functional Requirements
            </h3>
            <Card className="shadow-sm flex-1">
              <CardContent className="p-3">
                <div className="space-y-2">
                  {functionalReqs.map((req, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary" className="text-sm px-2 py-0.5 font-mono">{req.id}</Badge>
                        <span className="text-base">{req.desc}</span>
                      </div>
                      <Badge className="bg-red-500 text-sm px-2 py-0.5">High</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
