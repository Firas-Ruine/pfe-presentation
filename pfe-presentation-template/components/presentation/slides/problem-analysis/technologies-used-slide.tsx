"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Database, Cloud, Activity, Brain, Server, Layers, Network, GitBranch, BarChart3, Shield } from "lucide-react"
import Image from "next/image"

const technologies = [
  { 
    category: "Orchestration", 
    icon: Layers, 
    items: [
      { name: "LangGraph", logo: "https://avatars.githubusercontent.com/u/126733545?s=40", description: "Workflow engine" },
      { name: "LangChain", logo: "https://avatars.githubusercontent.com/u/126733545?s=40", description: "LLM tools" },
      { name: "LangSmith", logo: "https://avatars.githubusercontent.com/u/126733545?s=40", description: "Observability" },
    ]
  },
  { 
    category: "AI & ML", 
    icon: Brain, 
    items: [
      { name: "Ollama / Claude", logo: "https://ollama.ai/public/ollama.png", description: "LLM reasoning" },
      { name: "Qdrant", logo: "https://qdrant.tech/img/logo_with_text.png", description: "Vector DB (RAG)" },
      { name: "Random Forest", logo: "https://cdn-icons-png.flaticon.com/512/2103/2103658.png", description: "Anomaly detection" },
      { name: "Time Series", logo: "https://cdn-icons-png.flaticon.com/512/3281/3281289.png", description: "Forecasting" },
    ]
  },
  { 
    category: "MCP Connectors", 
    icon: Network, 
    items: [
      { name: "Grafana MCP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg", description: "Prometheus queries" },
      { name: "AWX MCP", logo: "https://raw.githubusercontent.com/ansible/awx-logos/master/awx/ui/client/assets/logo-login.svg", description: "Ansible automation" },
      { name: "Redmine MCP", logo: "https://www.redmine.org/attachments/download/3458/redmine_logo_v1.png", description: "Ticket management" },
    ]
  },
  { 
    category: "Data Layer", 
    icon: Database, 
    items: [
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", description: "Audit & learning" },
      { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", description: "Dedup cache 5min" },
      { name: "RabbitMQ", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg", description: "Message queue" },
    ]
  },
  { 
    category: "Monitoring & Tracing", 
    icon: Activity, 
    items: [
      { name: "Prometheus", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg", description: "Metrics collection" },
      { name: "Grafana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg", description: "Visualization" },
      { name: "OpenSearch", logo: "https://opensearch.org/assets/brand/SVG/Mark/opensearch_mark_default.svg", description: "Log aggregation" },
      { name: "Jaeger", logo: "https://www.jaegertracing.io/img/jaeger-icon-color.png", description: "Distributed tracing" },
    ]
  },
  { 
    category: "Infrastructure & K8s", 
    icon: Cloud, 
    items: [
      { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", description: "Container orchestration" },
      { name: "Traefik", logo: "https://doc.traefik.io/traefik/assets/img/traefik.logo.png", description: "Ingress controller" },
      { name: "cert-manager", logo: "https://cert-manager.io/images/cert-manager-logo-icon.svg", description: "TLS automation" },
      { name: "Consul", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/consul/consul-original.svg", description: "Service discovery" },
    ]
  },
  { 
    category: "Target Platform", 
    icon: Server, 
    items: [
      { name: "OpenStack", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openstack/openstack-original.svg", description: "Cloud platform" },
      { name: "AWX/Ansible", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg", description: "Automation engine" },
    ]
  },
]

export default function TechnologiesUsedSlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader badge="4 • Specifications" title="Technologies Used" subtitle="Complete technology stack powering AutoSphere" />
        <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-3">
          {technologies.map((category, index) => (
            <Card key={index} className="shadow-md">
              <CardHeader className="pb-1 pt-2 px-3">
                <CardTitle className="text-xs flex items-center">
                  <category.icon className="h-3 w-3 mr-1 text-primary" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1.5 px-3 pb-2">
                {category.items.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 p-1.5 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center bg-white rounded p-0.5">
                      <img 
                        src={item.logo} 
                        alt={item.name}
                        className="w-5 h-5 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-semibold text-xs block truncate">{item.name}</span>
                      <p className="text-xs text-muted-foreground truncate">{item.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="mt-2 shadow-md bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="p-2">
            <div className="flex items-center justify-center space-x-6 flex-wrap gap-2">
              <div className="flex items-center space-x-1">
                <Cloud className="h-4 w-4 text-blue-500" />
                <span className="text-xs font-medium">K8s Production</span>
                <Badge variant="outline" className="text-xs py-0">24+ Pods • 5 Namespaces</Badge>
              </div>
              <div className="flex items-center space-x-1">
                <Activity className="h-4 w-4 text-orange-500" />
                <span className="text-xs font-medium">Full Observability</span>
                <Badge variant="outline" className="text-xs py-0">Metrics + Logs + Traces</Badge>
              </div>
              <div className="flex items-center space-x-1">
                <Network className="h-4 w-4 text-green-500" />
                <span className="text-xs font-medium">3 MCP Servers</span>
                <Badge variant="outline" className="text-xs py-0">Grafana + AWX + Redmine</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SlideWrapper>
  )
}
