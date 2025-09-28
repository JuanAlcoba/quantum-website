import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero1.jpg" alt="Quantum band" className="w-full object-cover" width={1000} height={1000} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      {/* <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <p className="text-lg md:text-xl text-primary font-semibold tracking-wider uppercase mb-4">From Argentina</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-6 text-balance text-white">
            FORGING THE FUTURE
            <br />
            <span className="text-primary">OF METAL</span>
          </h2>
        </div>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
          Experience the raw power and precision of Argentina's most intense metal sound
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-black px-8 py-4 text-lg font-semibold">
            <Play className="mr-2 h-5 w-5" />
            Listen Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-black bg-transparent"
          >
            Tour Dates
          </Button>
        </div>
      </div> */}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
