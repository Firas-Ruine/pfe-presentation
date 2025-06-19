"use client"
import SlideWrapper from "../../slide-wrapper"

export default function PerformanceTestTitleSlide() {
  return (
    <SlideWrapper>
     <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
        <div className="text-center">
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-primary dark:text-blue-400 tracking-tight leading-none">
            Test de Performance
          </h1>
        </div>
      </div>
    </SlideWrapper>
  )
}
