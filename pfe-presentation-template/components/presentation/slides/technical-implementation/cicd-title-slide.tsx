"use client"
import SlideWrapper from "../../slide-wrapper"

export default function CicdTitleSlide() {
  return (
    <SlideWrapper>
      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-green-900">
        <div className="text-center">
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-primary dark:text-green-400 tracking-tight leading-none">
            CI/CD
          </h1>
        </div>
      </div>
    </SlideWrapper>
  )
}
