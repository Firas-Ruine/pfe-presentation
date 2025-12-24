"use client"

import { useState, ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Maximize2, Minimize2 } from "lucide-react"

interface FullscreenFlowWrapperProps {
  children: ReactNode
  title?: string
  subtitle?: string
}

export default function FullscreenFlowWrapper({ 
  children, 
  title = "Architecture Diagram",
  subtitle = "Full view"
}: FullscreenFlowWrapperProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-white">
        <Button
          variant="outline"
          size="sm"
          className="absolute top-4 right-4 z-50 bg-white border-slate-300 hover:bg-slate-100 shadow-lg"
          onClick={() => setIsFullscreen(false)}
        >
          <Minimize2 className="h-4 w-4 mr-2" />
          Exit Fullscreen
        </Button>
        <div className="absolute top-4 left-4 z-50">
          <h2 className="text-xl font-bold text-slate-800">{title}</h2>
          <p className="text-sm text-slate-500">{subtitle}</p>
        </div>
        <div className="w-full h-full pt-16">
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full">
      <Button
        variant="outline"
        size="sm"
        className="absolute top-2 left-2 z-10 bg-white/90 hover:bg-white shadow-md"
        onClick={() => setIsFullscreen(true)}
      >
        <Maximize2 className="h-4 w-4 mr-1" />
        Fullscreen
      </Button>
      {children}
    </div>
  )
}
