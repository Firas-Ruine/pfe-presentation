"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function GlobalCicdArchitectureSlide() {
  return (
    <SlideWrapper>
      <div className="space-y-8">
        {/* En-tête */}
        <SlideHeader
          badge="6 • CI/CD"
          title="Architecture Globale CI/CD"
          subtitle="Pipeline DevOps complet de développement à déploiement"
        />

        <div className="flex-1 flex items-center justify-center w-full">
          <Card className="bg-white/95 backdrop-blur border-0 shadow-2xl rounded-2xl overflow-hidden max-w-full">
            <CardContent className="p-0">
              <Image
                src="/global-ci-cd-architecture.png"
                alt="Architecture Globale CI/CD"
                width={1900}
                height={800}
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
