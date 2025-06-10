import SlideWrapper from "../slide-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp, 
  Zap, 
  ServerCrash, 
  Layers, 
  ShieldAlert, 
  Clock,
  Database,
  Users,
  GitBranch,
  MonitorSpeaker,
  ArrowRight,
  TrendingDown,
  Server,
  Network,
  Container,
  Settings,
  Target,
  BarChart3
} from "lucide-react"

const painPoints = [
  { 
    title: "Déploiements Lents", 
    icon: Clock, 
    description: "Processus manuels et chronophages",
    impact: "2-3 semaines par release",
    severity: "high"
  },
  { 
    title: "Scalabilité Limitée", 
    icon: ServerCrash, 
    description: "Difficulté à gérer les pics de charge",
    impact: "500 utilisateurs max",
    severity: "critical"
  },
  { 
    title: "Maintenance Complexe", 
    icon: Layers, 
    description: "Monolithe difficile à maintenir",
    impact: "80% du temps dev",
    severity: "high"
  },
  {
    title: "Risques de Sécurité",
    icon: ShieldAlert,
    description: "Failles potentielles centralisées",
    impact: "Exposition globale",
    severity: "critical"
  },
  {
    title: "Couplage Fort",
    icon: GitBranch,
    description: "Dépendances entre composants",
    impact: "Développement bloqué",
    severity: "medium"
  },
  {
    title: "Monitoring Limité",
    icon: MonitorSpeaker,
    description: "Visibilité réduite sur l'état",
    impact: "Temps de résolution élevé",
    severity: "high"
  }
]

const monolithicChallenges = [
  { icon: Database, text: "Base de données centralisée", color: "text-red-600" },
  { icon: Server, text: "Serveur unique point de défaillance", color: "text-red-600" },
  { icon: Users, text: "Équipes bloquées mutuellement", color: "text-red-600" },
  { icon: Settings, text: "Technologie unique imposée", color: "text-red-600" }
]

const microservicesBenefits = [
  { icon: Container, text: "Services isolés et indépendants", color: "text-green-600" },
  { icon: Network, text: "Résilience et haute disponibilité", color: "text-green-600" },
  { icon: Users, text: "Équipes autonomes par service", color: "text-green-600" },
  { icon: Settings, text: "Flexibilité technologique", color: "text-green-600" }
]

const impactMetrics = [
  {
    category: "Performance",
    icon: TrendingUp,
    metrics: [
      { label: "Utilisateurs concurrents", before: "500", after: "3000+", improvement: "+500%" },
      { label: "Temps de réponse", before: "2.5s", after: "380ms", improvement: "-85%" },
      { label: "Disponibilité", before: "95%", after: "99.98%", improvement: "+5%" }
    ]
  },
  {
    category: "Déploiement",
    icon: Zap,
    metrics: [
      { label: "Fréquence de release", before: "1/mois", after: "10/jour", improvement: "+3000%" },
      { label: "Temps de déploiement", before: "4h", after: "15min", improvement: "-90%" },
      { label: "Rollback", before: "2h", after: "30s", improvement: "-95%" }
    ]
  },
  {
    category: "Développement",
    icon: Target,
    metrics: [
      { label: "Time to market", before: "6 mois", after: "2 semaines", improvement: "-92%" },
      { label: "Couverture de tests", before: "45%", after: "96.7%", improvement: "+115%" },
      { label: "Détection de bugs", before: "Production", after: "CI/CD", improvement: "Préventif" }
    ]
  }
]

export default function ProblemStatementSlide() {
  return (
    <SlideWrapper>
      <div className="space-y-8">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Problématique et Transformation
          </h2>
          <p className="text-lg text-muted-foreground">
            De l'architecture monolithique vers les microservices
          </p>
        </div>

        {/* Split-screen comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Current Monolithic Architecture */}
          <Card className="border-red-500/60 shadow-xl bg-gradient-to-br from-red-50/80 to-red-100/40 dark:from-red-950/20 dark:to-red-900/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full -translate-y-16 translate-x-16"></div>
            <CardHeader className="relative">
              <CardTitle className="flex items-center text-xl text-red-700 dark:text-red-400">
                <AlertTriangle className="mr-3 h-7 w-7" />
                Architecture Monolithique Actuelle
              </CardTitle>
              <Badge variant="destructive" className="w-fit">État Actuel</Badge>
            </CardHeader>
            <CardContent className="space-y-4 relative">
              <p className="text-muted-foreground text-sm leading-relaxed">
                L'architecture existante présente des limitations majeures qui freinent 
                l'innovation et la croissance de l'entreprise.
              </p>
              
              <div className="space-y-3">
                {monolithicChallenges.map((challenge, index) => (
                  <div key={index} className="flex items-center p-3 bg-red-50/50 dark:bg-red-950/10 rounded-lg border border-red-200/50">
                    <challenge.icon className={`h-5 w-5 mr-3 ${challenge.color}`} />
                    <span className="text-sm font-medium">{challenge.text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-red-200/50">
                <div className="flex items-center text-red-600 dark:text-red-400">
                  <TrendingDown className="h-4 w-4 mr-2" />
                  <span className="text-sm font-semibold">Impact Négatif</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Limitation à 500 utilisateurs, déploiements de 4h, maintenance 80% du temps
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Proposed Microservices Architecture */}
          <Card className="border-green-500/60 shadow-xl bg-gradient-to-br from-green-50/80 to-green-100/40 dark:from-green-950/20 dark:to-green-900/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -translate-y-16 translate-x-16"></div>
            <CardHeader className="relative">
              <CardTitle className="flex items-center text-xl text-green-700 dark:text-green-400">
                <CheckCircle className="mr-3 h-7 w-7" />
                Architecture Microservices Proposée
              </CardTitle>
              <Badge variant="secondary" className="w-fit bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                Solution Cible
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4 relative">
              <p className="text-muted-foreground text-sm leading-relaxed">
                La nouvelle architecture modulaire offre flexibilité, résilience 
                et capacité d'évolution pour répondre aux enjeux futurs.
              </p>
              
              <div className="space-y-3">
                {microservicesBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center p-3 bg-green-50/50 dark:bg-green-950/10 rounded-lg border border-green-200/50">
                    <benefit.icon className={`h-5 w-5 mr-3 ${benefit.color}`} />
                    <span className="text-sm font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-green-200/50">
                <div className="flex items-center text-green-600 dark:text-green-400">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  <span className="text-sm font-semibold">Bénéfices Attendus</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  3000+ utilisateurs, déploiements 15min, développement parallèle
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pain Points Grid */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
            Points de Douleur Identifiés
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {painPoints.map((point, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3 mb-3">
                    <point.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">{point.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge 
                      variant={point.severity === 'critical' ? 'destructive' : point.severity === 'high' ? 'default' : 'secondary'} 
                      className="text-xs"
                    >
                      {point.severity === 'critical' ? 'Critique' : point.severity === 'high' ? 'Élevé' : 'Moyen'}
                    </Badge>
                    <span className="text-xs font-medium text-muted-foreground">{point.impact}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
