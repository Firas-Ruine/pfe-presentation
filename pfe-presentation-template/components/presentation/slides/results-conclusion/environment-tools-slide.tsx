"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const tools = [
  {
    name: "Laravel",
    category: "Backend Framework",
    description: "Framework PHP pour le développement d'applications web",
    logo: "/logo_laravel.jpg",
  },
  {
    name: "PostgreSQL",
    category: "Base de Données",
    description: "Système de gestion de base de données relationnelle",
    logo: "/logo_postgres.png",
  },
  {
    name: "Redis",
    category: "Cache & Session",
    description: "Base de données en mémoire pour le cache et les sessions",
    logo: "/logo_redis.png", 
  },
  {
    name: "RabbitMQ",
    category: "Message Broker",
    description: "Système de messagerie pour communication asynchrone",
    logo: "/logo_rabbitmq.png",
  },
  {
    name: "Trivy",
    category: "Sécurité",
    description: "Scanner de vulnérabilités pour conteneurs et code",
    logo: "/logo_trivy.png",
  },
  {
    name: "SonarQube",
    category: "Qualité Code",
    description: "Analyse statique de la qualité du code",
    logo: "/logo_sonarqube.png",
  },
  {
    name: "Captain Hook",
    category: "Git Hooks",
    description: "Gestionnaire de hooks Git pour validation de code",
    logo: "/logo_captainhook.png",
  },
  {
    name: "Sentry",
    category: "Error Monitoring",
    description: "Surveillance et gestion des erreurs en temps réel",
    logo: "/logo_sentry.png",
  },
  {
    name: "n8n",
    category: "Automation",
    description: "Plateforme d'automatisation des workflows",
    logo: "/logo_n8n.png",
  },
  {
    name: "Grafana K6",
    category: "Tests Performance",
    description: "Outil de tests de charge et de performance",
    logo: "/logo_k6.png",
  },
  {
    name: "Docker",
    category: "Conteneurisation",
    description: "Plateforme de conteneurisation d'applications",
    logo: "/logo_docker.png",
  },
  {
    name: "Kubernetes",
    category: "Orchestration",
    description: "Orchestration et gestion des conteneurs",
    logo: "/logo_kubernetes.png",
  },
  {
    name: "Bitbucket Pipelines",
    category: "CI/CD",
    description: "Intégration et déploiement continus",
    logo: "/logo_bitbucket.jpg",
  },
  {
    name: "Grafana",
    category: "Visualisation",
    description: "Plateforme de visualisation et dashboards",
    logo: "/logo_grafana.png",
  },
  {
    name: "Prometheus",
    category: "Monitoring",
    description: "Système de monitoring et d'alerting",
    logo: "/logo_prometheus.png",
  },
  {
    name: "Loki",
    category: "Logs Management",
    description: "Système d'agrégation et indexation des logs",
    logo: "/logo_loki.png",
  },
  {
    name: "Portainer",
    category: "Management UI",
    description: "Interface de gestion pour Docker et Kubernetes",
    logo: "/logo_portainer.png",
  },
]

const categories = [
  { name: "Backend & Database", tools: ["Laravel", "PostgreSQL", "Redis"] },
  { name: "Message & Communication", tools: ["RabbitMQ"] },
  { name: "Sécurité & Qualité", tools: ["Trivy", "SonarQube", "Captain Hook"] },
  { name: "Monitoring & Errors", tools: ["Sentry"] },
  { name: "Automation & Testing", tools: ["n8n", "Grafana K6"] },
  { name: "Conteneurisation", tools: ["Docker", "Kubernetes"] },
  { name: "CI/CD", tools: ["Bitbucket Pipelines"] },
  { name: "Monitoring & Observabilité", tools: ["Grafana", "Prometheus", "Loki", "Portainer"] },
]

export default function EnvironmentToolsSlide() {
  return (
    <SlideWrapper className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <div className="h-full flex flex-col p-4 md:p-8 space-y-6">
        <SlideHeader
          badge="10 • Réalisation"
          title="Environnement et Outils Utilisés"
          subtitle="Stack technologique complète pour l'implémentation DevOps"
        />

        <div className="flex-1 space-y-6">
  

          {/* Tools Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Logo */}
                <div className="flex justify-center mb-3">
                  <div className="w-40 h-20 relative">
                    <Image
                      src={tool.logo}
                      alt={`${tool.name} logo`}
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                </div>

                {/* Tool Name */}
                <h3 className="text-sm font-bold text-center mb-2 leading-tight text-slate-800 dark:text-slate-100">
                  {tool.name}
                </h3>

                {/* Category Badge */}
                <div className="flex justify-center mb-2">
                  <Badge variant="outline" className="text-xs px-2 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {tool.category}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-xs text-center leading-relaxed text-slate-600 dark:text-slate-400">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>



          {/* Success Message */}
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-900/30 rounded-xl p-4 border border-emerald-200 dark:border-emerald-800/30 text-center">
            <p className="text-emerald-800 dark:text-emerald-200 font-medium">
              🚀 <strong>17 outils</strong> intégrés dans une architecture cohérente et moderne
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
