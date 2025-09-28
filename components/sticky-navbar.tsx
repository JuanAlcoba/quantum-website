"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function StickyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "NEWS", href: "#news" },
    { name: "BAND", href: "#band" },
    { name: "TOUR", href: "#tour" },
    { name: "MUSIC", href: "#music" },
    { name: "MERCH", href: "#merch" },
    { name: "CONTACT", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const logoBanner = document.getElementById("logo-banner")
      if (logoBanner) {
        const logoBannerBottom = logoBanner.offsetTop + logoBanner.offsetHeight
        setIsSticky(window.scrollY >= logoBannerBottom)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${
        isSticky
          ? "fixed top-0 bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800 shadow-lg"
          : "relative bg-zinc-800"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center w-full space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-zinc-300 hover:text-orange-500 transition-colors tracking-wider uppercase"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden ml-auto text-zinc-300 hover:text-orange-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-700">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-zinc-300 hover:text-orange-500 transition-colors tracking-wider uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
