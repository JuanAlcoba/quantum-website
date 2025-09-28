import Image from "next/image"

export function LogoBanner() {
  return (
    <div className="w-full bg-black">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center">
          <Image 
            src="/images/quantum-logo-flat.png" 
            alt="Quantum Logo" 
            width={700} 
            height={150}
            className="max-w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  )
}
