"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle2, 
  TrendingUp, 
  Award,
  Users,
  Lightbulb,
  MessageCircle,
  Mail,
  Github,
  Linkedin,
  Globe,
  Download,
  Heart,
  Sparkles,
  Target
} from "lucide-react"

const keyTakeaways = [
  {
    title: "Transformation Réussie",
    description: "Migration complète vers une architecture cloud-native moderne",
    icon: CheckCircle2,
    color: "text-green-600"
  },
  {
    title: "Performance Améliorée",
    description: "Réduction significative des temps de réponse et augmentation de la scalabilité",
    icon: TrendingUp,
    color: "text-blue-600"
  },
  {
    title: "Excellence Technique",
    description: "Implémentation des meilleures pratiques DevOps et cloud-native",
    icon: Award,
    color: "text-purple-600"
  },
  {
    title: "Impact Business",
    description: "Amélioration mesurable de l'efficacité opérationnelle",
    icon: Target,
    color: "text-orange-600"
  }
]

const projectNumbers = [
  { label: "Microservices Déployés", value: "12", icon: "🏗️" },
  { label: "Pipelines CI/CD", value: "8", icon: "🚀" },
  { label: "Environnements Cloud", value: "4", icon: "☁️" },
  { label: "Outils Intégrés", value: "25+", icon: "🛠️" },
  { label: "Tests Automatisés", value: "150+", icon: "✅" },
  { label: "Semaines de Développement", value: "12", icon: "📅" }
]

const skills = [
  "DevOps & CI/CD", "Kubernetes & Containerisation", "Microservices Architecture",
  "Cloud Computing", "Monitoring & Observabilité", "Infrastructure as Code",
  "Security & Compliance", "Performance Optimization", "Team Leadership"
]

const contactInfo = {
  name: "Firas Ruine",
  email: "firas.ruine@example.com",
  github: "github.com/firasruine",
  linkedin: "linkedin.com/in/firasruine",
  portfolio: "firasruine.dev"
}

export default function ConclusionSlide() {
  return (
    <SlideWrapper className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-slate-900 dark:to-violet-900/20">
      <div className="h-full flex flex-col space-y-6">
        {/* En-tête */}
        <SlideHeader 
          badge="Chapitre 10 • Conclusion"
          title="Conclusion & Perspectives"
          subtitle="Bilan du projet et ouvertures futures"
        />

        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Key Takeaways */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Lightbulb className="mr-3 h-6 w-6 text-primary" />
                  Points Clés
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {keyTakeaways.map((takeaway, index) => {
                  const IconComponent = takeaway.icon
                  return (
                    <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-3">
                        <IconComponent className={`h-6 w-6 ${takeaway.color} mt-1`} />
                        <div>
                          <h3 className="font-semibold text-sm mb-2">{takeaway.title}</h3>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {takeaway.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Award className="mr-3 h-5 w-5 text-primary" />
                  Compétences Acquises
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Project Numbers */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <TrendingUp className="mr-3 h-6 w-6 text-primary" />
                  Le Projet en Chiffres
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {projectNumbers.map((number, index) => (
                    <div key={index} className="text-center p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
                      <div className="text-2xl mb-2">{number.icon}</div>
                      <div className="text-2xl font-bold text-primary">{number.value}</div>
                      <div className="text-xs text-muted-foreground leading-tight">{number.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Heart className="mr-3 h-5 w-5 text-primary" />
                  Remerciements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">Encadrants</h4>
                  <p className="text-xs text-muted-foreground">
                    M. Firas Khlil (ITBS) et M. Riadh Rezig (Maison du Web) 
                    pour leur guidance et expertise
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">Équipe Technique</h4>
                  <p className="text-xs text-muted-foreground">
                    Collègues et développeurs qui ont contribué au succès du projet
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">Institutions</h4>
                  <p className="text-xs text-muted-foreground">
                    ITBS et Maison du Web pour l'opportunité et les ressources
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact & Next Steps */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <MessageCircle className="mr-3 h-6 w-6 text-primary" />
                  Questions & Discussion
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                  <MessageCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold text-lg mb-2">Merci pour votre attention!</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Je suis maintenant prêt à répondre à vos questions
                  </p>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Poser une Question
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Users className="mr-3 h-5 w-5 text-primary" />
                  Contact & Ressources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-2 bg-secondary/20 rounded">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-secondary/20 rounded">
                    <Github className="h-4 w-4 text-primary" />
                    <span className="text-sm">{contactInfo.github}</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-secondary/20 rounded">
                    <Linkedin className="h-4 w-4 text-primary" />
                    <span className="text-sm">{contactInfo.linkedin}</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-secondary/20 rounded">
                    <Globe className="h-4 w-4 text-primary" />
                    <span className="text-sm">{contactInfo.portfolio}</span>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <Button size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Télécharger la Présentation
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    <Github className="mr-2 h-4 w-4" />
                    Voir le Code Source
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
          <p className="text-sm text-muted-foreground">
            🎯 <strong>Objectif atteint:</strong> Transformation DevOps réussie avec impact mesurable
            • 🚀 <strong>Prochaines étapes:</strong> Évolution vers l'IA et multi-cloud
          </p>
        </div>
      </div>
    </SlideWrapper>
  )
}
