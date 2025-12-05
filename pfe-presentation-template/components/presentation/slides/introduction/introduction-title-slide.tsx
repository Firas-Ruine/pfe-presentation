"use client"
import SlideWrapper from "../../slide-wrapper"

export default function IntroductionTitleSlide() {
  return (
    <SlideWrapper>
      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
        <div className="text-center">
          <h1 className="text-8xl md:text-9xl font-bold text-primary tracking-tight">Introduction</h1>
          <p className="text-2xl text-muted-foreground mt-4">Context & Importance of the Project</p>
        </div>
      </div>
    </SlideWrapper>
  )
}
