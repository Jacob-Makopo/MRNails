"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Sparkles } from "lucide-react"

export function HeroSection() {
  const whatsappLink =
    "https://wa.me/27677037760?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20M.R.%20Nails%20%26%20Beauty."

  return (
    <section id="home" className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <Image src="/images/nails1.png" alt="M.R. Nails & Beauty" fill className="object-cover" priority />
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full mb-4 animate-bounce">
              <Sparkles className="h-5 w-5" />
              <span className="font-bold text-sm md:text-base">NEW YEAR SPECIAL - 80% OFF</span>
              <Sparkles className="h-5 w-5" />
            </div>
            <h1 className="animate-fade-in text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Premium Nail Care
            </h1>
            <p className="animate-fade-in mt-4 text-lg text-white/80">
              Experience exceptional nail artistry and personalized service at M.R. Nails & Beauty
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="animate-fade-in book-now-btn whatsapp-btn text-white">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-4 w-4" /> Book Appointment
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="animate-fade-in border-white bg-transparent text-white hover:bg-white/20"
              >
                <a href="#services">View Services</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
