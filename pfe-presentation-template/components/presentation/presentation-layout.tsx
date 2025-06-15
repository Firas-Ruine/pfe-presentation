"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Home, Menu, Maximize, Minimize } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useEffect, useState } from "react" // Import useEffect and useState

interface PresentationLayoutProps {
  slides: React.ReactNode[]
  currentSlide: number
  setCurrentSlide: (slide: number) => void
  totalSlides: number
  slideTitles: string[]
}

export default function PresentationLayout({
  slides,
  currentSlide,
  setCurrentSlide,
  totalSlides,
  slideTitles,
}: PresentationLayoutProps) {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const progressValue = ((currentSlide + 1) / totalSlides) * 100

  const goToNextSlide = () => {
    setCurrentSlide(Math.min(currentSlide + 1, totalSlides - 1))
  }

  const goToPrevSlide = () => {
    setCurrentSlide(Math.max(currentSlide - 1, 0))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Full-screen toggle function
  const toggleFullScreen = async () => {
    if (!document.fullscreenElement) {
      try {
        await document.documentElement.requestFullscreen()
        setIsFullScreen(true)
      } catch (err) {
        console.error(`Error attempting to enable full-screen mode: ${(err as Error).message} (${(err as Error).name})`)
      }
    } else {
      if (document.exitFullscreen) {
        try {
          await document.exitFullscreen()
          setIsFullScreen(false)
        } catch (err) {
          console.error(`Error attempting to exit full-screen mode: ${(err as Error).message} (${(err as Error).name})`)
        }
      }
    }
  }

  // Effect for keyboard navigation and full-screen change listener
  useEffect(() => {
    // Set mounted to true on client side
    setIsMounted(true)
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        goToNextSlide()
      } else if (event.key === "ArrowLeft") {
        goToPrevSlide()
      }
    }

    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement)
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("fullscreenchange", handleFullScreenChange)

    // Cleanup
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("fullscreenchange", handleFullScreenChange)
    }
  }, [currentSlide, totalSlides]) // Add dependencies

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-background via-blue-50 to-secondary/10 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/30">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex-shrink-0">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-1 md:gap-2">
            {isMounted && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open navigation</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-4 p-4">
                    <h3 className="font-semibold text-lg">Slides</h3>
                    {slideTitles.map((title, index) => (
                      <Button
                        key={index}
                        variant={currentSlide === index ? "secondary" : "ghost"}
                        onClick={() => {
                          goToSlide(index)
                          // Consider closing the sheet after navigation on mobile
                          // This requires passing the sheet's open/setOpen state down or using a ref
                        }}
                        className="justify-start"
                      >
                        {index + 1}. {title}
                      </Button>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            )}
            {isMounted && (
              <Button variant="ghost" size="icon" onClick={() => goToSlide(0)} title="Go to Hero Slide">
                <Home className="h-5 w-5" />
              </Button>
            )}
            {isMounted && (
              <span className="text-sm font-medium text-muted-foreground hidden md:block">
                Diapo {currentSlide + 1} sur {totalSlides}
              </span>
            )}
          </div>

          <div className="flex-1 max-w-md mx-2 md:mx-4 hidden md:block">
            {isMounted && <Progress value={progressValue} className="w-full h-2" />}
          </div>

          <div className="flex items-center gap-1 md:gap-2">
            {isMounted && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToPrevSlide}
                  disabled={currentSlide === 0}
                  title="Previous Slide (Left Arrow)"
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span className="sr-only">Previous slide</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToNextSlide}
                  disabled={currentSlide === totalSlides - 1}
                  title="Next Slide (Right Arrow)"
                >
                  <ChevronRight className="h-5 w-5" />
                  <span className="sr-only">Next slide</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleFullScreen}
                  title={isFullScreen ? "Exit Full Screen" : "Enter Full Screen"}
                >
                  {isFullScreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
                  <span className="sr-only">{isFullScreen ? "Exit full screen" : "Enter full screen"}</span>
                </Button>
              </>
            )}
          </div>
        </div>
        <div className="md:hidden p-2 border-t border-border/40">
          <div className="flex items-center justify-between">
            {isMounted && (
              <>
                <span className="text-xs font-medium text-muted-foreground">
                  Slide {currentSlide + 1}/{totalSlides}
                </span>
                <Progress value={progressValue} className="w-1/2 h-1.5" />
              </>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 min-h-0">{isMounted ? slides[currentSlide] : <div className="p-8 h-full flex items-center justify-center">Loading...</div>}</main>

      <footer className="py-2 text-center text-xs text-muted-foreground border-t border-border/40 bg-background/95 flex-shrink-0">
        PFE Presentation Template | Firas Ruine | 2024-2025
      </footer>
    </div>
  )
}
