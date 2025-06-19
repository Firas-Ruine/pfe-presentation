"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent } from "@/components/ui/card"

export default function VideoExampleSlide() {
  return (
    <SlideWrapper>
      <div className="space-y-8">
        {/* En-tête */}
        <SlideHeader
          badge="11 • Réalisation"
          title="Démonstration"
          //subtitle="Présentation en action de l'implémentation DevOps"
        />

        <div className="flex-1 flex items-center justify-center w-full">
          <Card className="bg-white/95 backdrop-blur border-0 shadow-2xl rounded-2xl overflow-hidden max-w-4xl w-full">
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/UUO3oosbh34"
                  title="DevOps Implementation Demo"
                  className="w-full h-full rounded-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SlideWrapper>
  )
}
