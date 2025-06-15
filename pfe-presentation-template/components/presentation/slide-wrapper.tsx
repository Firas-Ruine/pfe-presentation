import type React from "react"
import { cn } from "@/lib/utils"

interface SlideWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function SlideWrapper({ children, className, id }: SlideWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "h-full w-full flex flex-col p-4 md:p-6 lg:p-8 overflow-y-auto",
        className,
      )}
    >
      <div className="w-full h-full flex flex-col">{children}</div>
    </section>
  )
}
