"use client"
import SlideWrapper from "../../slide-wrapper"

export default function ImplementationTitleSlide() {
  return (
    <SlideWrapper>
      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-cyan-900">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl lg:text-[10rem] font-bold text-primary dark:text-cyan-400 tracking-tight leading-none">
            Implementation
          </h1>
          <p className="mt-8 text-2xl text-muted-foreground">
            Realization Phase and Technical Deep-Dive
          </p>
        </div>
      </div>
    </SlideWrapper>
  )
}
