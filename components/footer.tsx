import { FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaSpotify } from "react-icons/fa"
import { CodeXml } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/20 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Social Media */}
        <div className="flex justify-center space-x-8 mb-12">
          <a href="https://www.instagram.com/quantum.metal.oficial/" className="text-muted-foreground hover:text-primary transition-colors">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="https://www.youtube.com/@quantum.metal.oficial" className="text-muted-foreground hover:text-primary transition-colors">
            <FaYoutube className="h-6 w-6" />
          </a>
          <a href="https://www.facebook.com/quantum.metal.oficial/" className="text-muted-foreground hover:text-primary transition-colors">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="https://www.tiktok.com/@quantum.metal.oficial" className="text-muted-foreground hover:text-primary transition-colors">
            <FaTiktok className="h-6 w-6" />
          </a>
          <a href="https://open.spotify.com/artist/64ZiT7o45vuQaa6BjxfQJf?si=xIqgCftVQb6-dH6oZ7KqGw" className="text-muted-foreground hover:text-primary transition-colors">
            <FaSpotify className="h-6 w-6" />
          </a>
        </div>

        {/* Partner Logos */}
        <div className="flex justify-center items-center space-x-12 mb-12 opacity-60">
          <a href="https://www.estudiopentagono.com.ar/" className="text-sm font-bold tracking-wider">ESTUDIO PENTAGONO</a>
          <a href="https://www.instagram.com/javierbarrozooficial/" className="text-sm font-bold tracking-wider">JAVIER BARROZO</a>
        </div>

        {/* Copyright */}
        <div className="text-center text-muted-foreground text-sm">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-primary transition-colors">
              IMPRINT
            </a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">
              PRIVACY
            </a>
          </div>
          <div className="flex justify-between">
            <p>&copy; 2025 QUANTUM. ALL RIGHTS RESERVED.</p>
            <p>
              <CodeXml className="inline-block mr-2" /> 
              Developed by <a href="https://github.com/JuanAlcoba" className="hover:text-primary transition-colors">Juan Alcoba</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
