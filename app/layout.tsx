import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Quantum Metal",
  description: "Banda de Metal de Cba - Argentina",
  generator: "Next.js",
  keywords: ["Quantum Metal", "Metal", "Banda de Metal", "Rio Cuarto", "Cordoba", "Argentina", 
    "Power Metal", "Heavy Metal", "Melodic Metal", "Javier Barrozo", "Rock"
  ],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Quantum Metal",
    description: "Banda de Metal de Cba - Argentina",
    url: "https://quantumoficial.com.ar",
    siteName: "Quantum Metal",
    images: [
      {
        url: "https://quantumoficial.com.ar/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Quantum Metal",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://quantumoficial.com.ar",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  other: {
    "og:image:type": "image/png",
    "og:image:secure_url": "https://quantumoficial.com.ar/og-image.jpg",
    "twitter:card": "summary_large_image",
    "twitter:image": "https://quantumoficial.com.ar/og-image.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark antialiased">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
