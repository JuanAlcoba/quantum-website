import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"

export function MusicVideo() {
  return (
    <section id="music" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wider mb-4 text-balance">
            MIRA "TRANSMUTAR" EN YOUTUBE
          </h2>
        </div>

        <Card className="bg-card border-border overflow-hidden">
          <div className="relative aspect-video bg-muted">
            <iframe 
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/hzc5myxDz9o?si=Kzq24k2P5xZkRcGi"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
              <button className="bg-primary hover:bg-primary/90 rounded-full p-6 transition-colors">
                <Play className="h-12 w-12 text-primary-foreground ml-1" />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/80 rounded p-3">
                <h3 className="text-white font-semibold text-lg">QUANTUM - Transmutar (OFFICIAL MUSIC VIDEO)</h3>
                <p className="text-gray-300 text-sm">Mira en YouTube</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
