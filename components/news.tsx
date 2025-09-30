import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface NewsItem {
  title: string
  description: string
  image: string
  date: string
  featured: boolean
}

async function getNews(): Promise<NewsItem[]> {
  try {
    const csvUrl = process.env.NEWS_SHEET_CSV_URL
    if (!csvUrl) {
      throw new Error("Missing NEWS_SHEET_CSV_URL in environment variables.")
    }
    const response = await fetch(csvUrl, { next: { revalidate: 20 } })
    if (!response.ok) {
      throw new Error("Failed to fetch news from CSV.")
    }

    const csvText = await response.text()
    const rows = csvText.trim().split("\n")
    
    const headers = rows[0]
      .split(",")
      .map((h) => h.trim().toLowerCase().replace(/\s+/g, ""))

    const newsItems: NewsItem[] = rows.slice(1).map((row) => {
      const values = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)

      const rawDataObject = headers.reduce(
        (obj, header, index) => {
          const rawValue = values[index] || ""
          let cleanValue = rawValue.trim()
          if (cleanValue.startsWith('"') && cleanValue.endsWith('"')) {
            cleanValue = cleanValue.substring(1, cleanValue.length - 1)
          }
          cleanValue = cleanValue.replace(/""/g, '"')

          obj[header as keyof NewsItem] = cleanValue
          return obj
        },
        {} as any,
      )

      return {
        title: rawDataObject.title || "",
        description: rawDataObject.description || "",
        image: rawDataObject.image ? `/images/${rawDataObject.image}` : "",
        date: rawDataObject.date || "",
        featured: rawDataObject.featured === "TRUE",
      }
    })

    return newsItems
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function News() {
  const newsItems = await getNews()
  console.log('newsItems', newsItems)
  const featuredNew = newsItems.find((item) => item.featured)
  const commonNews = newsItems.filter((item) => !item.featured)
  return (
    <section id="news" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold tracking-wider mb-8 text-primary">NOVEDADES</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Featured New */}
          {featuredNew && (
            <div>
              <Card className="bg-card border-border overflow-hidden">
                <img src={featuredNew.image} alt="Quantum band members" className="w-full h-96 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{featuredNew.title}</h3>
                  <p className="text-muted-foreground text-pretty">
                    {featuredNew.description}
                  </p>
                </div>
              </Card>
            </div>
          )}
          {/* Common News */}
          <div>
            <div className="space-y-8">
              {commonNews.map((item, index) => (
                <Card key={index} className="bg-card border-border overflow-hidden">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="text-primary text-sm font-medium mb-2">{item.date}</div>
                    <h3 className="text-xl font-bold mb-3 text-balance">{item.title}</h3>
                    <p className="text-muted-foreground mb-4 text-pretty">{item.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover: bg-transparent cursor-pointer"
                    >
                      Read More
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
