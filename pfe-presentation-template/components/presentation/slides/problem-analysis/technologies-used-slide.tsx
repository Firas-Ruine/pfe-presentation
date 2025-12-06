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
        <div className="flex-1 grid grid-cols-4 gap-3" style={{ minHeight: 0 }}>
          {technologies.map((category, index) => (
            <Card key={index} className="shadow-md flex flex-col">
              <CardHeader className="pb-3 pt-4 px-5">
                <CardTitle className="text-base font-bold flex items-center">
                  <category.icon className="h-6 w-6 mr-3 text-primary" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2.5 px-5 pb-4 flex-1">
                {category.items.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-2.5 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white rounded p-1.5">
                      <img 
                        src={item.logo} 
                        alt={item.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-semibold text-base block">{item.name}</span>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}
