import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

interface TourDate {
  date: string
  city: string
  venue: string
  available: boolean
  soldOut: boolean
  ticketLink: string
}

async function getTourDates(): Promise<TourDate[]> {
  try {
    const csvUrl = process.env.GIGS_SHEET_CSV_URL
    if (!csvUrl) {
      throw new Error("Missing GIGS_SHEET_CSV_URL in environment variables.")
    }

    const response = await fetch(csvUrl, { next: { revalidate: 20 } }) // Cache por 1 hora

    if (!response.ok) {
      throw new Error("Failed to fetch tour dates from CSV.")
    }

    const csvText = await response.text()
    const rows = csvText.trim().split("\n")
    
    // Parse headers, convert to lowercase for consistency
    const headers = rows[0]
      .split(",")
      .map((h) => h.trim().toLowerCase().replace(/\s+/g, ""))

    const tourDates: TourDate[] = rows.slice(1).map((row) => {
      // This regex splits by commas, but ignores commas inside double quotes
      const values = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)

      const rawDateObject = headers.reduce(
        (obj, header, index) => {
          const rawValue = values[index] || ""

          // Clean the value: trim whitespace and remove surrounding quotes
          let cleanValue = rawValue.trim()
          if (cleanValue.startsWith('"') && cleanValue.endsWith('"')) {
            cleanValue = cleanValue.substring(1, cleanValue.length - 1)
          }

          // This is a fix for cases where Google Sheets adds extra quotes inside, e.g. ""Hello""
          cleanValue = cleanValue.replace(/""/g, '"')

          obj[header as keyof TourDate] = cleanValue
          return obj
        },
        {} as any,
      )

      return {
        date: rawDateObject.date || "",
        city: rawDateObject.city || "",
        venue: rawDateObject.venue || "",
        available: rawDateObject.available === "TRUE",
        soldOut: rawDateObject.soldout === "TRUE",
        ticketLink: rawDateObject.ticketlink || "",
      }
    })

    return tourDates
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function TourDates() {
  const tourDates = await getTourDates()
  // console.log('tourDates', tourDates)
  return (
    <section id="tour" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wider mb-4 text-balance">
            PROXIMOS SHOWS
          </h2>
          {/* <div className="flex justify-center space-x-8 text-sm text-muted-foreground tracking-wide">
              <span className="border-b border-primary pb-1">PROXIMOS</span>
              <span className="hover:text-primary cursor-pointer transition-colors">PASADOS</span>
           </div> */}
        </div>

        {tourDates.length > 0 ? (
          <div className="space-y-4">
            {tourDates.map((show, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-colors"
              >
                <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-primary text-sm capitalize font-medium mb-2">
                      <Calendar className="h-4 w-4" />
                      {show.date}
                    </div>
                    <div className="flex items-center gap-2 text-foreground font-semibold text-lg mb-1">
                      <MapPin className="h-4 w-4" />
                      {show.city}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {show.venue}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {show.soldOut ? (
                      <Button variant="secondary" disabled className="px-6">
                        SOLD OUT
                      </Button>
                    ) : show.available ? (
                      <a
                        href={show.ticketLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                      >
                        <Button className="px-6 bg-primary hover:bg-primary/90 cursor-pointer">
                          TICKETS
                        </Button>
                      </a>
                    ) : (
                      <Button variant="secondary" disabled className="px-6">
                        PRÓXIMAMENTE
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No tour dates available.</p>
        )}
      </div>
    </section>
  )
}
