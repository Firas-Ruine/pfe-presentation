import { Badge } from "@/components/ui/badge"

interface SlideHeaderProps {
  badge: string
  title: string
  subtitle?: string
  className?: string
}

export default function SlideHeader({ badge, title, subtitle, className = "" }: SlideHeaderProps) {
  return (
    <div className={`text-center mb-8 ${className}`}>
      <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
        {badge}
      </Badge>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
        {title}
      </h1>
      {subtitle && (
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
