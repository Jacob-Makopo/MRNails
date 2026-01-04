import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  image?: string
  rating: number
  testimonial: string
  date: string
}

export function TestimonialCard({ name, image, rating, testimonial, date }: TestimonialCardProps) {
  return (
    <Card className="testimonial-card elegant-card overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-100">
            {image ? (
              <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-accent/10 text-lg font-bold text-accent">
                {name.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <h4 className="font-bold">{name}</h4>
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < rating ? "fill-accent text-accent" : "fill-gray-200 text-gray-200"}`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{testimonial}</p>
        <p className="mt-2 text-xs text-muted-foreground">{date}</p>
      </CardContent>
    </Card>
  )
}
