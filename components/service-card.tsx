import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  price: string
  image: string
}

export function ServiceCard({ title, description, price, image }: ServiceCardProps) {
  const whatsappLink = `https://wa.me/27677037760?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20for%20${encodeURIComponent(title)}%20at%20M.R.%20Nails%20%26%20Beauty.`

  const calculateDiscountedPrice = (originalPrice: string) => {
    const priceMatch = originalPrice.match(/R(\d+)/)
    if (priceMatch) {
      const original = Number.parseInt(priceMatch[1])
      const discounted = Math.round(original * 0.2) // 80% off means 20% of original
      return { original: `R${original}`, discounted: `R${discounted}` }
    }
    return { original: originalPrice, discounted: originalPrice }
  }

  const prices = calculateDiscountedPrice(price)

  return (
    <Card className="service-card elegant-card overflow-hidden">
      <div className="absolute top-2 left-2 z-10 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
        80% OFF
      </div>
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute bottom-0 right-0 m-2 flex flex-col items-end">
          <span className="text-xs text-white line-through bg-black/50 px-2 py-1 rounded">{prices.original}</span>
          <span className="price-tag mt-1 bg-red-600">{prices.discounted}</span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="border-t p-6 pt-4">
        <Button asChild className="w-full book-now-btn whatsapp-btn text-white">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Phone className="mr-2 h-4 w-4" /> Book Now
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
