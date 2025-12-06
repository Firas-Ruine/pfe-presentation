"use client"
import SlideWrapper from "../../slide-wrapper"

export default function ArchitectureTitleSlide() {
  return (
    <SlideWrapper>
      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-cyan-900">
        <div className="text-center">
          <h1 className="text-7xl md:text-8xl font-bold text-primary tracking-tight">System</h1>
          <p className="text-3xl text-muted-foreground mt-4">Architecture</p>
        </div>
      </div>
    </SlideWrapper>
  )
}
