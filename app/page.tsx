import { LogoBanner } from "@/components/logo-banner"
import { StickyNavbar } from "@/components/sticky-navbar"
import { Hero } from "@/components/hero"
import { TourDates } from "@/components/tour-dates"
import { MusicVideo } from "@/components/music-video"
import { News } from "@/components/news"
import { Footer } from "@/components/footer"
import { About } from "@/components/about"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div id="logo-banner">
        <LogoBanner />
      </div>
      <StickyNavbar />
      <Hero />
      <TourDates />
      <MusicVideo />
      <About />
      <News />
      <Footer />
    </main>
  )
}
