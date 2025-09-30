import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const bandMembers = [
  {
    name: "Javier Barrozo",
    description:
      "Cantante de la banda, desde los 10 años que aprendió a tocar, vio el rock y el metal, y nunca le dejo de gustar.",
    image: "/images/vocalist.jpg",
    position: "Vocalista",
    objectPosition: "object-top",
  },
  {
    name: "Luis María Ayail",
    description:
      "Bajo, con una presencia y un sonido único. Todo lo nuevo lo puede hacer mejor.",
    image: "/images/bassPlayer.jpg",
    position: "Bajista",
    objectPosition: "object-center",
  },
  {
    name: "Andrés Bianucci",
    description:
      "Guitarra, con una presencia y un sonido único. Todo lo nuevo lo puede hacer mejor.",
    image: "/images/guitarPlayer.jpg",
    position: "Guitarrista",
    objectPosition: "object-center",
  },
  {
    name: "Juan Cruz Alcoba",
    description:
      "Baterista, con una presencia y un sonido único. Todo lo nuevo lo puede hacer mejor.",
    image: "/images/drummer.jpg",
    position: "Baterista",
    objectPosition: "object-center",
  },
]

export function About() {
  return (
    <section id="news" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold tracking-wider mb-8 text-primary">LA BANDA</h2>
        <div className="grid xl:grid-cols-2 gap-6 items-start">
          {/* Highlight New */}
          <div>
            {/* <h2 className="text-3xl font-bold tracking-wider mb-8 text-primary">THE BAND</h2> */}
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, animi exercitationem et velit 
                eveniet reprehenderit nisi quam provident, quasi ea autem recusandae. Perferendis corporis tenetur 
                illo veniam quis deleniti dolore.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, animi exercitationem et velit 
                eveniet reprehenderit nisi quam provident, quasi ea autem recusandae. Perferendis corporis tenetur 
                illo veniam quis deleniti dolore.
                </p>
              </div>
            </Card>
          </div>
          {/* Band Members */}
          <div>
            <div className="grid md:grid-cols-2 gap-3">
              {bandMembers.map((member, index) => (
                <Card key={index} className="bg-card border-border overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className={`w-full h-80 object-cover ${member.objectPosition}`}
                  />
                  <div className="p-4">
                    <div className="text-primary text-sm font-medium mb-2">{member.position}</div>
                    <h3 className="text-xl font-bold mb-3 text-balance">{member.name}</h3>
                    <p className="text-muted-foreground text-pretty">{member.description}</p>
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
