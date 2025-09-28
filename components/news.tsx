import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const newsItems = [
  {
    title: "GIRA CUYANA JUNTO A LORIHEN",
    description:
      "Get ready for the most intense tour yet. Tickets on sale now for all dates across Argentina and Brazil.",
    image: "/images/gira2.png",
    date: "Noviembre, 2025",
  },
  {
    title: 'LA LLAVE EN VIVO, RIO CUARTO!',
    description:
      'Video en vivo de nuestro primer corte de difusión "La llave" , grabado  en nuestro show debut en nuestra ciudad de Rio Cuarto, Cordoba. Elvis Bar',
    image: "/images/quantum2.jpg",
    date: "Diciembre, 2024",
  },
]

export function News() {
  return (
    <section id="news" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Latest News */}
          <div>
            <h2 className="text-3xl font-bold tracking-wider mb-8 text-primary">NOVEDADES</h2>
            <div className="space-y-8">
              {newsItems.map((item, index) => (
                <Card key={index} className="bg-card border-border overflow-hidden">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="text-primary text-sm font-medium mb-2">{item.date}</div>
                    <h3 className="text-xl font-bold mb-3 text-balance">{item.title}</h3>
                    <p className="text-muted-foreground mb-4 text-pretty">{item.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      Read More
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Band Photo */}
          <div>
            <h2 className="text-3xl font-bold tracking-wider mb-8 text-primary">THE BAND</h2>
            <Card className="bg-card border-border overflow-hidden">
              <img src="/images/quantum1.jpg" alt="Quantum band members" className="w-full h-96 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">FORGED IN ARGENTINA</h3>
                <p className="text-muted-foreground text-pretty">
                Banda de Metal Argentina, integrada por el gran Javier Barrozo (Ex Lorihen Magnos, Temple, etc.) 
                Andrés Bianucci en guitarras, Luis María Ayail en bajo, Juan Cruz Alcoba en batería.
                Con energías y mensajes positivos. Riffs pegadizos y contundentes, con un sonido de metal moderno 
                y melódico se escribe esta nueva historia que invitamos a descubrir la sensibilidad conceptual, el 
                mensaje y poder de sus canciones; desde Rio Cuarto y Bs As - Argentina.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
