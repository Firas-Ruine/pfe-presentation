"use client"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function GrafanaDashboardsSlide() {
  return (
    <SlideWrapper>
      <div className="space-y-8">
        {/* En-tête */}
        <SlideHeader
          badge="7 • Monitoring"
          title="Dashboards Grafana - Surveillance en Temps Réel"
          subtitle="Visualisation des métriques et alertes système"
        />

        <div className="flex-1 flex items-center justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto w-full">
            {/* Dashboard 1 */}
            <Card className="bg-white/95 backdrop-blur border-0 shadow-2xl rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/mysql-dashboard-general.png"
                  alt="Grafana Dashboard - System Metrics"
                  width={850}
                  height={600}
                  className="block max-w-full h-auto rounded-2xl"
                  priority
                />
              </CardContent>
            </Card>

            {/* Dashboard 2 */}
            <Card className="bg-white/95 backdrop-blur border-0 shadow-2xl rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/redis-dashboard.png"
                  alt="Grafana Dashboard - Application Performance"
                  width={850}
                  height={600}
                  className="block max-w-full h-auto rounded-2xl"
                  priority
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
