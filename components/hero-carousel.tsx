"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/images/nails1.png",
    title: "Luxury Nail Artistry",
    description: "Experience premium nail care with our expert technicians",
  },
  {
    image: "/images/nails2.png",
    title: "Exquisite Designs",
    description: "Personalized nail art that reflects your unique style",
  },
  {
    image: "/images/nails6.png",
    title: "Professional Service",
    description: "Relax in our elegant salon environment",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="animate-fade-in text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  {slide.title}
                </h1>
                <p className="animate-fade-in mt-4 text-lg text-white/80">{slide.description}</p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" className="animate-fade-in bg-gold-DEFAULT text-black hover:bg-gold-dark">
                    Book Appointment
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="animate-fade-in border-white bg-transparent text-white hover:bg-white/20"
                  >
                    View Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${currentSlide === index ? "bg-white w-6" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}
