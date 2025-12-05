"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, UserCog, Bot, Shield, CheckCircle, AlertCircle, Zap, Lock, Clock, Server } from "lucide-react"

const actors = [
  { icon: UserCog, name: "SRE Engineer", description: "Reviews proposals, approves high-risk actions, monitors system", permissions: ["View", "Approve", "Override"] },
  { icon: Bot, name: "AutoSphere System", description: "Autonomous agent that detects, investigates, and remediates", permissions: ["Detect", "Investigate", "Execute"] },
  { icon: Shield, name: "Policy Engine", description: "Enforces RBAC rules and circuit breaker policies", permissions: ["Validate", "Block", "Audit"] },
]

const functionalRequirements = [
  { id: "RF01", description: "Ingest alerts from Prometheus AlertManager", priority: "High" },
  { id: "RF02", description: "Deduplicate alerts using fingerprint + Redis TTL", priority: "High" },
  { id: "RF03", description: "Route alerts based on confidence level", priority: "High" },
  { id: "RF04", description: "Execute parallel multi-agent investigation", priority: "High" },
  { id: "RF05", description: "Generate remediation proposals via LLM", priority: "High" },
  { id: "RF06", description: "Execute AWX playbooks with validation", priority: "High" },
]

const nonFunctionalRequirements = [
  { icon: Zap, title: "Performance", description: "Process alert in < 2 min (fast path < 30s)" },
  { icon: Shield, title: "Security", description: "RBAC policy engine, audit trail" },
  { icon: Clock, title: "Availability", description: "Circuit breaker prevents cascading failures" },
  { icon: Server, title: "Scalability", description: "Parallel agent execution with Send API" },
]

export default function ActorsRequirementsSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader badge="4 • Specifications" title="Actors & Requirements" subtitle="System actors, functional and non-functional requirements" />
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h3 className="text-base font-semibold flex items-center"><Users className="h-4 w-4 mr-2 text-primary" />System Actors</h3>
            <div className="space-y-2">
              {actors.map((actor, index) => (
                <Card key={index} className="shadow-md">
                  <CardContent className="p-3">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10"><actor.icon className="h-5 w-5 text-primary" /></div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{actor.name}</h4>
                        <p className="text-xs text-muted-foreground">{actor.description}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {actor.permissions.map((perm, idx) => (<Badge key={idx} variant="outline" className="text-xs py-0">{perm}</Badge>))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <h3 className="text-base font-semibold flex items-center mt-4"><Lock className="h-4 w-4 mr-2 text-primary" />Non-Functional Requirements</h3>
            <div className="grid grid-cols-2 gap-2">
              {nonFunctionalRequirements.map((req, index) => (
                <Card key={index} className="shadow-sm">
                  <CardContent className="p-2">
                    <div className="flex items-center space-x-2">
                      <req.icon className="h-4 w-4 text-primary" />
                      <div>
                        <h5 className="font-semibold text-xs">{req.title}</h5>
                        <p className="text-xs text-muted-foreground">{req.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-primary" />Functional Requirements</h3>
            <Card className="shadow-lg">
              <CardContent className="p-3">
                <div className="space-y-2">
                  {functionalRequirements.map((req, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="text-xs">{req.id}</Badge>
                        <span className="text-xs">{req.description}</span>
                      </div>
                      <Badge className={`text-xs ${req.priority === 'High' ? 'bg-red-500' : 'bg-yellow-500'}`}>{req.priority}</Badge>
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
