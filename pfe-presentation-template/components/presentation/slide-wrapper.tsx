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
        "min-h-[calc(100vh-8rem)] w-full flex flex-col items-center justify-center p-6 md:p-12 lg:p-16 overflow-y-auto",
        className,
      )}
    >
      <div className="container max-w-5xl w-full">{children}</div>
    </section>
  )
}
