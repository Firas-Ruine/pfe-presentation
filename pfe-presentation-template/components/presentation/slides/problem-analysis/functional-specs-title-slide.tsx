"use client"
import SlideWrapper from "../../slide-wrapper"

export default function FunctionalSpecsTitleSlide() {
  return (
    <SlideWrapper>
      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-green-900">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl lg:text-[9rem] font-bold text-primary dark:text-green-400 tracking-tight leading-none">
            Functional
          </h1>
          <h1 className="text-6xl md:text-7xl lg:text-[9rem] font-bold text-secondary dark:text-emerald-400 tracking-tight leading-none">
            Specifications
          </h1>
          <p className="mt-8 text-2xl text-muted-foreground">
            Actors, Requirements, and Technologies
          </p>
        </div>
      </div>
    </SlideWrapper>
  )
}
