"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1))

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute("href")
    if (href && href.startsWith("#")) {
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })
        setIsOpen(false)
      }
    }
  }

  const whatsappLink =
    "https://wa.me/27677037760?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20M.R.%20Nails%20%26%20Beauty."

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur" : "bg-white"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="#home" className="flex items-center gap-2" onClick={handleNavClick}>
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image src="/images/logo.png" alt="M.R. Nails & Beauty" fill className="object-cover" />
          </div>
          <div>
            <span className="hidden font-playfair text-xl font-bold sm:inline-block">M.R. Nails & Beauty</span>
            <p className="hidden text-xs text-muted-foreground sm:block">Unveil Your Goddess</p>
          </div>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`nav-link text-sm font-medium transition-colors hover:text-accent ${
                activeSection === link.href.substring(1) ? "active text-accent" : ""
              }`}
              onClick={handleNavClick}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="ml-4 book-now-btn whatsapp-btn text-white">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-4 w-4" /> Book Now
            </a>
          </Button>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="container md:hidden">
          <div className="flex flex-col space-y-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  activeSection === link.href.substring(1) ? "text-accent" : ""
                }`}
                onClick={handleNavClick}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="book-now-btn whatsapp-btn text-white">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" /> Book Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
