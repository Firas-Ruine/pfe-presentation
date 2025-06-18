"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function ClassDiagramNotificationsSlide() {
  return (
    <SlideWrapper>
      <div className="space-y-8">
        {/* En-tête */}
        <SlideHeader
          badge="5 • Conception"
          title="Diagramme de classe Notifications"
          //subtitle=""
        />

        <div className="flex-1 flex items-center justify-center w-full">
          <Card className="bg-white/95 backdrop-blur border-0 shadow-2xl rounded-2xl overflow-hidden max-w-full">
            <CardContent className="p-0">
              <Image
                src="/class-diagram-notifications.png"
                alt="Class Diagram Notifications"
                width={645}
                height={300}
                className="block max-w-full h-auto rounded-2xl"
                priority
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </SlideWrapper>
  )
}
