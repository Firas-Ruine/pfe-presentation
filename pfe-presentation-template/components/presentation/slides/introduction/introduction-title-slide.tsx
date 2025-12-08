"use client"
import SlideWrapper from "../../slide-wrapper"
import { motion } from "framer-motion"

export default function IntroductionTitleSlide() {
  return (
    <SlideWrapper>
      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
        <div className="text-center">
          <motion.h1
            className="text-8xl md:text-9xl font-bold text-primary tracking-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Introduction
          </motion.h1>
          <motion.p
            className="text-2xl text-muted-foreground mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Context & Importance of the Project
          </motion.p>
        </div>
      </div>
    </SlideWrapper>
  )
}
