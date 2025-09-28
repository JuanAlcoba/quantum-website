import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

const tourDates = [
  {
    date: "MAR. 15, 2025",
    city: "BUENOS AIRES, ARGENTINA",
    venue: "LUNA PARK",
    status: "TICKETS",
  },
  {
    date: "MAR. 22, 2025",
    city: "CÓRDOBA, ARGENTINA",
    venue: "QUALITY ESPACIO",
    status: "TICKETS",
  },
  {
    date: "APR. 5, 2025",
    city: "ROSARIO, ARGENTINA",
    venue: "METROPOLITANO",
    status: "TICKETS",
  },
  {
    date: "APR. 12, 2025",
    city: "MENDOZA, ARGENTINA",
    venue: "ARENA MAIPÚ",
    status: "TICKETS",
  },
  {
    date: "MAY. 20, 2025",
    city: "SÃO PAULO, BRAZIL",
    venue: "ROCK IN RIO",
    status: "SOLD OUT",
  },
]

export function TourDates() {
  return (
    <section id="tour" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wider mb-4 text-balance">PROXIMOS SHOWS</h2>
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground tracking-wide">
            <span className="border-b border-primary pb-1">PROXIMOS</span>
            <span className="hover:text-primary cursor-pointer transition-colors">PASADOS</span>
          </div>
        </div>

        <div className="space-y-4">
          {tourDates.map((show, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
              <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                    <Calendar className="h-4 w-4" />
                    {show.date}
                  </div>
                  <div className="flex items-center gap-2 text-foreground font-semibold text-lg mb-1">
                    <MapPin className="h-4 w-4" />
                    {show.city}
                  </div>
                  <div className="text-muted-foreground text-sm">{show.venue}</div>
                </div>
                <div className="flex gap-3">
                  {show.status === "SOLD OUT" ? (
                    <Button variant="secondary" disabled className="px-6">
                      SOLD OUT
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="outline"
                        className="px-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                      >
                        VIP
                      </Button>
                      <Button className="px-6 bg-primary hover:bg-primary/90">{show.status}</Button>
                    </>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
