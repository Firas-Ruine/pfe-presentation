"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent} from "@/components/ui/card"
import {
    Settings,
    Users,
    Rocket,
    RefreshCw,
    Book,
    Target,
    Calendar,
    CheckCircle,
    RotateCcw,
    Clock,
    TrendingUp,
    LucideIcon,
    Plus,
    Equal
} from "lucide-react"

const scrumDefinition = {
  description:
    "Un framework agile pour la gestion et la planification de projets de développement de produits. Scrum met l'accent sur la livraison itérative et incrémentale, l'amélioration continue, et la collaboration étroite entre les équipes pluridisciplinaires.",
}

interface ScrumPrinciple {
  title: string
  description: string
  icon: LucideIcon
  iconColor: string
  iconBg: string
  borderColor: string
}

const scrumPrinciples: ScrumPrinciple[] = [
  {
    title: "Transparence",
    description: "Visibilité complète sur le processus et le travail.",
    icon: Target,
    iconColor: "text-sky-600",
    iconBg: "bg-sky-100",
    borderColor: "group-hover:border-sky-200",
  },
  {
    title: "Inspection",
    description: "Révision régulière des artefacts et du progrès.",
    icon: CheckCircle,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
    borderColor: "group-hover:border-emerald-200",
  },
  {
    title: "Adaptation",
    description: "Ajustement basé sur les apprentissages.",
    icon: RefreshCw,
    iconColor: "text-violet-600",
    iconBg: "bg-violet-100",
    borderColor: "group-hover:border-violet-200",
  },
  {
    title: "Collaboration",
    description: "Travail d'équipe et communication continue.",
    icon: Users,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-100",
    borderColor: "group-hover:border-amber-200",
  },
]

const EquationItem = ({
  icon: Icon,
  label,
  iconColor = "text-sky-600",
}: {
  icon: LucideIcon
  label: string
  iconColor?: string
}) => (
  <div className="flex flex-col items-center gap-2 text-center">
    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-md">
      <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${iconColor}`} />
    </div>
    <span className="font-medium text-slate-500 text-sm sm:text-base">{label}</span>
  </div>
)

export default function ScrumMethodologySlide() {
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col">
        <SlideHeader
          badge="4 • Méthodologie"
          title="Méthodologie Scrum"
          subtitle="Un framework agile pour la gestion de projet complexe et l'amélioration continue."
        />

        <div className="flex-1 grid md:grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 px-2 sm:px-4">
          {/* Partie gauche (LG: 2/5) - Définition Scrum */}
          <div className="lg:col-span-2 flex flex-col justify-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-semibold text-slate-800 text-center flex items-center justify-center gap-3 mb-6">
              <Book className="h-7 w-7 text-sky-500" />
              Qu'est-ce que Scrum ?
            </h2>
            <Card className="bg-white border border-slate-200 shadow-lg rounded-xl">
              <CardContent className="p-6 sm:p-8 text-center space-y-6">
                <div className="flex items-center justify-around p-4 rounded-lg bg-slate-100 border border-slate-200">
                  <EquationItem icon={Target} label="Sprint" iconColor="text-sky-500" />
                  <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400" />
                  <EquationItem icon={Users} label="Équipe" iconColor="text-emerald-500" />
                  <Equal className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400" />
                  <EquationItem icon={Rocket} label="Livraison" iconColor="text-amber-500" />
                </div>
                <p className="text-base sm:text-lg leading-relaxed text-slate-600">{scrumDefinition.description}</p>
              </CardContent>
            </Card>
          </div>

          {/* Partie droite (LG: 3/5) - Principes fondamentaux */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <h2
              className="text-2xl font-semibold text-slate-800 text-center flex items-center justify-center gap-3 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: "150ms" }}
            >
              <Settings className="h-7 w-7 text-sky-500" />
              Principes Fondamentaux
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {scrumPrinciples.map((principle, index) => (
                <Card
                  key={principle.title}
                  className={`bg-white border border-slate-200 shadow-lg rounded-xl group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 ${principle.borderColor}`}
                  style={{ animationDelay: `${250 + index * 100}ms`, animationFillMode: "backwards" }}
                >
                  <CardContent className="p-5 sm:p-6 text-center space-y-3 sm:space-y-4">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${principle.iconBg}`}
                    >
                      <principle.icon className={`h-7 w-7 sm:h-8 sm:h-8 ${principle.iconColor}`} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-semibold text-slate-800">{principle.title}</h3>
                      <p className="text-sm text-slate-500 leading-normal">{principle.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
