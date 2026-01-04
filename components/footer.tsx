import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Phone, MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const whatsappLink =
    "https://wa.me/27677037760?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20M.R.%20Nails%20%26%20Beauty."

  return (
    <footer className="border-t bg-black text-white">
      <div className="container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="flex flex-col items-center md:items-start">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-accent">
              <Image src="/images/logo.png" alt="M.R. Nails & Beauty" fill className="object-cover" />
            </div>
            <h3 className="mt-4 text-xl font-bold">M.R. Nails & Beauty</h3>
            <p className="mt-2 text-sm text-gray-400">Unveil Your Goddess</p>
            <div className="mt-4 flex items-center gap-4">
              <Link
                href="https://facebook.com/MosaA.Radebe"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 p-2 text-white transition-colors hover:border-accent hover:text-accent"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="rounded-full border border-white/20 p-2 text-white transition-colors hover:border-accent hover:text-accent"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 p-2 text-white transition-colors hover:border-accent hover:text-accent"
              >
                <Phone className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <div className="mt-4 flex flex-col space-y-2">
              <Link
                href="#home"
                className="flex items-center text-sm text-gray-400 transition-colors hover:text-accent"
              >
                <ArrowRight className="mr-2 h-4 w-4" /> Home
              </Link>
              <Link
                href="#about"
                className="flex items-center text-sm text-gray-400 transition-colors hover:text-accent"
              >
                <ArrowRight className="mr-2 h-4 w-4" /> About
              </Link>
              <Link
                href="#services"
                className="flex items-center text-sm text-gray-400 transition-colors hover:text-accent"
              >
                <ArrowRight className="mr-2 h-4 w-4" /> Services
              </Link>
              <Link
                href="#gallery"
                className="flex items-center text-sm text-gray-400 transition-colors hover:text-accent"
              >
                <ArrowRight className="mr-2 h-4 w-4" /> Gallery
              </Link>
              <Link
                href="#testimonials"
                className="flex items-center text-sm text-gray-400 transition-colors hover:text-accent"
              >
                <ArrowRight className="mr-2 h-4 w-4" /> Testimonials
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-sm text-gray-400 transition-colors hover:text-accent"
              >
                <ArrowRight className="mr-2 h-4 w-4" /> Contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div className="mt-4 flex flex-col space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+27677037760" className="text-sm text-gray-400 hover:text-accent">
                  067 703 7760
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-1" />
                <span className="text-sm text-gray-400">9425 Portion 9 Block C, Hammanskraal, near Lebyaeng</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                <span className="text-sm text-gray-400">Mon-Sat: 9AM - 6PM</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold">Book an Appointment</h3>
            <p className="mt-2 text-sm text-gray-400">Ready to pamper yourself? Book your appointment today.</p>
            <div className="mt-4 w-full">
              <Button asChild className="w-full book-now-btn whatsapp-btn text-white">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-4 w-4" /> Book via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-8 text-center">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} M.R. Nails & Beauty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
