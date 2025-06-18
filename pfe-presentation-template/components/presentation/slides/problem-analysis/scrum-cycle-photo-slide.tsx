import Image from "next/image"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, RefreshCw } from "lucide-react"

const ScrumCyclePhotoSlide = () => {
    return (
        <SlideWrapper>
            <div className="h-full flex flex-col">
                <SlideHeader
                    badge="4 • Méthodologie"
                    title="Cycle Scrum"
                    //subtitle="Le processus itératif et les événements Scrum"
                    //className="mb-6"
                />
                <div className="flex-1 flex items-center justify-center w-full">
                    <Card className="bg-white/95 backdrop-blur border-0 shadow-2xl rounded-2xl overflow-hidden max-w-full">
                        <CardContent className="p-0">
                            <Image
                                src="/scrum-cycle.png"
                                alt="Scrum Cycle"
                                width={1400}
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

export default ScrumCyclePhotoSlide
