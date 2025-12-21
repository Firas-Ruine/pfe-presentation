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
      <Badge variant="outline" className="mb-4 text-2xl px-6 py-3">
        {badge}
      </Badge>
      <h1 className="text-6xl md:text-8xl font-bold mb-4 text-primary">
        {title}
      </h1>
      {subtitle && (
        <p className="text-3xl text-muted-foreground max-w-4xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
