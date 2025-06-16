import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  AlertTriangle,
  ServerCrash,
  Layers,
  ShieldAlert,
  Clock,
  Database,
  Users,
  GitBranch,
  MonitorSpeaker,
  Server,
  Settings,
  ListChecks,
  AlertOctagon
} from "lucide-react"


const painPointsData = [
  {
    title: "Déploiements Lents",
    icon: Clock,
    description: "Processus manuels et chronophages, freinant la réactivité.",
    impact: "2-3 semaines par release",
    severity: "high",
  },
  {
    title: "Scalabilité Limitée",
    icon: ServerCrash,
    description: "Difficulté à gérer les pics de charge, impactant l'expérience utilisateur.",
    impact: "Plafond à 500 utilisateurs",
    severity: "critical",
  },
  {
    title: "Maintenance Complexe",
    icon: Layers,
    description: "Monolithe difficile à maintenir et à faire évoluer.",
    impact: "80% du temps dev en maintenance",
    severity: "high",
  },
  {
    title: "Risques de Sécurité",
    icon: ShieldAlert,
    description: "Failles potentielles centralisées, augmentant la surface d'attaque.",
    impact: "Exposition globale des données",
    severity: "critical",
  },
  {
    title: "Couplage Fort",
    icon: GitBranch,
    description: "Fortes dépendances entre composants, ralentissant les développements.",
    impact: "Équipes de dev bloquées",
    severity: "medium",
  },
  {
    title: "Monitoring Insuffisant",
    icon: MonitorSpeaker,
    description: "Visibilité réduite sur l'état du système et les performances.",
    impact: "Temps de résolution d'incidents élevé",
    severity: "high",
  },
]

const monolithicChallengesData = [
  { icon: Database, text: "Base de données monolithique et centralisée", color: "text-red-300" },
  { icon: Server, text: "Serveur applicatif unique comme point de défaillance", color: "text-red-300" },
  { icon: Users, text: "Dépendances fortes entre équipes de développement", color: "text-red-300" },
  { icon: Settings, text: "Pile technologique unique et rigide imposée à tous", color: "text-red-300" },
]


export default function CurrentArchitectureProblemsSlide() {
  return (
    <SlideWrapper>
      <div className="space-y-8">
        {/* En-tête */}
        <SlideHeader 
          badge="3 • Problématique et Besoin métier"
          title="Problématique"
          subtitle="De l'architecture monolithique vers les microservices"
        />

        {/* Split-screen comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
          {/* Current Monolithic Architecture */}
          <Card className="w-full bg-white border border-slate-200 shadow-xl rounded-xl overflow-hidden">
            <CardHeader className="bg-slate-50 p-6 border-b border-slate-200">
              <div className="flex items-center mb-2">
                <AlertOctagon className="h-8 w-8 text-red-600 mr-3" /> {/* Red icon for emphasis */}
                <CardTitle className="text-2xl md:text-3xl font-bold text-slate-800">
                  Architecture Monolithique Actuelle
                </CardTitle>
              </div>
              <p className="text-slate-600 text-sm md:text-base">
                L'architecture existante présente des limitations majeures qui freinent l'innovation, la scalabilité et
                l'agilité de l'entreprise.
              </p>
            </CardHeader>

            <CardContent className="p-6 md:p-8 space-y-8">
              {/* Section: Défis Structurels du Monolithe */}
              <div>
                <h3 className="text-xl font-semibold text-slate-700 mb-4 flex items-center">
                  <ListChecks className="h-6 w-6 mr-2 text-red-500" /> {/* Red icon */}
                  Défis Structurels du Monolithe
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {monolithicChallengesData.map((challenge, index) => (
                    <div
                      key={index}
                      className="flex items-start p-3 bg-slate-50 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors"
                    >
                      <challenge.icon className={`h-5 w-5 mr-3 mt-1 flex-shrink-0 ${challenge.color}`} />{" "}
                      {/* Red icon from data */}
                      <span className="text-sm font-medium text-slate-700">{challenge.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section: Points de Douleur Détaillés */}
              <div>
                <h3 className="text-xl font-semibold text-slate-700 mb-5 flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-2 text-red-500" /> {/* Red icon */}
                  Points de Douleur Opérationnels et Techniques
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                  {painPointsData.map((point) => (
                    <div
                      key={point.title}
                      className="bg-white border border-slate-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col"
                    >
                      <div className="flex items-start space-x-3 mb-2">
                        <div
                          className={`p-1.5 rounded-md mt-0.5 ${point.severity === "critical" ? "bg-red-100" : point.severity === "high" ? "bg-yellow-100" : "bg-sky-100"}`}
                        >
                          <point.icon
                            className={`h-5 w-5 flex-shrink-0 ${point.severity === "critical" ? "text-red-600" : point.severity === "high" ? "text-yellow-600" : "text-sky-600"}`}
                          />
                        </div>
                        <h4 className="font-semibold text-md text-slate-800">{point.title}</h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed mb-3 flex-grow">{point.description}</p>
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
