"use client"

import { useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroSection } from "@/components/hero-section"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { ScrollToTop } from "@/components/scroll-to-top"
import { PromoBanner } from "@/components/promo-banner"
import { Phone, Clock, MapPin, ChevronRight, Sparkles, Award, Heart, Scissors } from "lucide-react"

function calculatePrice(original: number) {
  const discounted = Math.round(original * 0.2) // 80% off = 20% of original
  return { original, discounted }
}

function PriceItem({ service, originalPrice }: { service: string; originalPrice: number }) {
  const price = calculatePrice(originalPrice)

  return (
    <li className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
      <span className="text-sm font-medium text-foreground">{service}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground line-through">R{price.original}</span>
        <span className="text-lg font-bold text-red-600">R{price.discounted}</span>
      </div>
    </li>
  )
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("manicure")

  const whatsappLink =
    "https://wa.me/27677037760?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20M.R.%20Nails%20%26%20Beauty."

  return (
    <div className="flex min-h-screen flex-col">
      <PromoBanner />

      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <h2 className="section-title text-3xl font-bold tracking-tight sm:text-4xl">
                  Welcome to <span className="gold-gradient">M.R. Nails & Beauty</span>
                </h2>
                <p className="mt-8 text-muted-foreground">
                  At M.R. Nails & Beauty, we believe in providing exceptional nail care services in an elegant and
                  relaxing environment. Our skilled technicians are dedicated to delivering flawless results that
                  enhance your natural beauty.
                </p>
                <p className="mt-4 text-muted-foreground">
                  We use only premium products and maintain the highest standards of hygiene and safety. Whether you're
                  looking for a classic manicure or elaborate nail art, we have the expertise to exceed your
                  expectations.
                </p>
                <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-600 font-bold text-center">
                    🎉 New Year Special: Get 80% OFF all services! Limited time only! 🎉
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button asChild className="bg-accent text-black hover:bg-accent/80">
                    <a href="#services">Our Services</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent/10 bg-transparent"
                  >
                    <a href="#contact">Contact Us</a>
                  </Button>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-lg elegant-shadow">
                  <Image src="/images/nails5.png" alt="Elegant nail design" fill className="object-cover" />
                  <div className="absolute inset-0 border-8 border-white/20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="section-title mx-auto text-3xl font-bold tracking-tight sm:text-4xl">
                Our <span className="gold-gradient">Signature</span> Services
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-muted-foreground">
                Discover our most sought-after nail treatments and beauty services
              </p>
              <div className="mt-4 inline-block bg-red-600 text-white px-6 py-2 rounded-full font-bold">
                All services now 80% OFF for New Year!
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Classic French Manicure"
                description="Timeless elegance with our perfectly executed French tips"
                price="R200"
                image="/images/nails6.png"
              />
              <ServiceCard
                title="Ombre Nails"
                description="Stunning gradient effects that transition beautifully"
                price="R220"
                image="/images/nails2.png"
              />
              <ServiceCard
                title="Nail Art & Designs"
                description="Express yourself with our creative custom nail art"
                price="R25"
                image="/images/nails4.png"
              />
            </div>

            <div className="mt-12 text-center">
              <Button
                asChild
                variant="outline"
                className="group border-accent text-accent hover:bg-accent/10 bg-transparent"
              >
                <a href="#services">
                  View All Services
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-black py-16 text-white md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="section-title mx-auto text-3xl font-bold tracking-tight sm:text-4xl">
                Why <span className="gold-gradient">Choose</span> Us
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-gray-400">
                Experience the difference with our premium nail and beauty services
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                  <Sparkles className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Premium Products</h3>
                <p className="mt-2 text-sm text-gray-400">
                  We use only the highest quality products for lasting results
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Expert Technicians</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Our skilled nail artists deliver flawless results every time
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Personalized Service</h3>
                <p className="mt-2 text-sm text-gray-400">Customized treatments tailored to your unique style</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                  <Scissors className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Hygienic Environment</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Clean and sanitized tools for your safety and peace of mind
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section id="gallery" className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="section-title mx-auto text-3xl font-bold tracking-tight sm:text-4xl">
                Our <span className="gold-gradient">Portfolio</span>
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-muted-foreground">
                Explore our gallery of beautiful nail designs and transformations
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="gallery-item group relative col-span-2 row-span-2 overflow-hidden rounded-lg elegant-shadow">
                <Image
                  src="/images/nails1.png"
                  alt="Red stiletto nails"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-lg font-bold">Red Stiletto Nails</h3>
                  <p className="text-sm">Bold and glamorous design</p>
                </div>
              </div>

              <div className="gallery-item group relative overflow-hidden rounded-lg elegant-shadow">
                <Image
                  src="/images/nails2.png"
                  alt="Pink and blue decorated nails"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-lg font-bold">Floral Design</h3>
                </div>
              </div>

              <div className="gallery-item group relative overflow-hidden rounded-lg elegant-shadow">
                <Image
                  src="/images/nails3.png"
                  alt="Orange gradient French tip nails"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-lg font-bold">Orange Ombre</h3>
                </div>
              </div>

              <div className="gallery-item group relative overflow-hidden rounded-lg elegant-shadow">
                <Image
                  src="/images/nails4.png"
                  alt="Pink and green French tip nails"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-lg font-bold">Green French Tips</h3>
                </div>
              </div>

              <div className="gallery-item group relative overflow-hidden rounded-lg elegant-shadow">
                <Image
                  src="/images/nails5.png"
                  alt="French tip nails with gold accents"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-lg font-bold">Gold Accents</h3>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button
                asChild
                variant="outline"
                className="group border-accent text-accent hover:bg-accent/10 bg-transparent"
              >
                <a href="#gallery">
                  View Full Gallery
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-gray-50 py-16 md:py-24">
          <div className="container relative">
            <div className="mb-12 text-center">
              <h2 className="section-title mx-auto text-3xl font-bold tracking-tight sm:text-4xl">
                Our <span className="gold-gradient">Services</span> & Pricing
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-muted-foreground">
                Quality nail care services at competitive prices
              </p>
              <div className="mt-4 inline-block bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg">
                🎉 NEW YEAR SPECIAL: 80% OFF ALL SERVICES 🎉
              </div>
            </div>

            <div className="mt-10">
              <Tabs
                defaultValue="manicure"
                value={activeTab}
                onValueChange={setActiveTab}
                className="mx-auto max-w-3xl"
              >
                <TabsList className="grid w-full grid-cols-3 md:grid-cols-5">
                  <TabsTrigger value="manicure">Manicure</TabsTrigger>
                  <TabsTrigger value="ombre">Ombre</TabsTrigger>
                  <TabsTrigger value="combo">Combo</TabsTrigger>
                  <TabsTrigger value="gel-acrylic">Gel & Acrylic</TabsTrigger>
                  <TabsTrigger value="add-ons">Add Ons</TabsTrigger>
                </TabsList>

                <TabsContent value="manicure" className="mt-6">
                  <Card className="elegant-card overflow-hidden">
                    <div className="relative h-40 w-full overflow-hidden">
                      <div className="absolute top-2 left-2 z-10 bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                        80% OFF
                      </div>
                      <Image src="/images/nails6.png" alt="Manicure services" fill className="object-cover" />
                      <div className="service-image-overlay"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-xl font-bold text-white">Manicure Services</h3>
                        <p className="text-sm text-white/80">Perfect nails for every occasion</p>
                      </div>
                    </div>
                    <CardContent className="pt-6">
                      <ul className="space-y-4">
                        <PriceItem service="Basic Plain Mani" originalPrice={180} />
                        <PriceItem service="Classic French (Short)" originalPrice={200} />
                        <PriceItem service="French Medium" originalPrice={240} />
                        <PriceItem service="French Long" originalPrice={280} />
                        <PriceItem service="With 2 Nail Art/Decor" originalPrice={280} />
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="ombre" className="mt-6">
                  <Card className="elegant-card overflow-hidden">
                    <div className="relative h-40 w-full overflow-hidden">
                      <div className="absolute top-2 left-2 z-10 bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                        80% OFF
                      </div>
                      <Image src="/images/nails3.png" alt="Ombre services" fill className="object-cover" />
                      <div className="service-image-overlay"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-xl font-bold text-white">Ombre Services</h3>
                        <p className="text-sm text-white/80">Beautiful gradient effects</p>
                      </div>
                    </div>
                    <CardContent className="pt-6">
                      <ul className="space-y-4">
                        <PriceItem service="Ombre (Short-Medium)" originalPrice={220} />
                        <PriceItem service="Ombre Long" originalPrice={250} />
                        <PriceItem service="Ombre with Designs" originalPrice={280} />
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="combo" className="mt-6">
                  <Card className="elegant-card overflow-hidden">
                    <div className="relative h-40 w-full overflow-hidden">
                      <div className="absolute top-2 left-2 z-10 bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                        80% OFF
                      </div>
                      <Image src="/images/pedicure.png" alt="Combo services" fill className="object-cover" />
                      <div className="service-image-overlay"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-xl font-bold text-white">Combo Services</h3>
                        <p className="text-sm text-white/80">Complete hand and foot care</p>
                      </div>
                    </div>
                    <CardContent className="pt-6">
                      <ul className="space-y-4">
                        <PriceItem service="Mani + Pedi" originalPrice={350} />
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="gel-acrylic" className="mt-6">
                  <Card className="elegant-card overflow-hidden">
                    <div className="relative h-40 w-full overflow-hidden">
                      <div className="absolute top-2 left-2 z-10 bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                        80% OFF
                      </div>
                      <Image src="/images/nails5.png" alt="Gel & Acrylic services" fill className="object-cover" />
                      <div className="service-image-overlay"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-xl font-bold text-white">Gel & Acrylic Services</h3>
                        <p className="text-sm text-white/80">Long-lasting nail enhancements</p>
                      </div>
                    </div>
                    <CardContent className="pt-6">
                      <ul className="space-y-4">
                        <PriceItem service="GEL Mani (Rubber)" originalPrice={180} />
                        <PriceItem service="GEL Pedicure" originalPrice={100} />
                        <PriceItem service="Acrylic Pedicure" originalPrice={150} />
                        <PriceItem service="Acrylic Mani + Pedi" originalPrice={280} />
                        <PriceItem service="GEL Mani (Rubber base gel) + GEL Pedi" originalPrice={250} />
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="add-ons" className="mt-6">
                  <Card className="elegant-card overflow-hidden">
                    <div className="relative h-40 w-full overflow-hidden">
                      <div className="absolute top-2 left-2 z-10 bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                        80% OFF
                      </div>
                      <Image src="/images/nails2.png" alt="Add-on services" fill className="object-cover" />
                      <div className="service-image-overlay"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-xl font-bold text-white">Add-On Services</h3>
                        <p className="text-sm text-white/80">Customize your nail experience</p>
                      </div>
                    </div>
                    <CardContent className="pt-6">
                      <ul className="space-y-4">
                        <li className="flex items-center justify-between border-b pb-3">
                          <span className="text-sm font-medium text-foreground">Nail Art/Decor per Nail</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground line-through">R5-R20</span>
                            <span className="text-lg font-bold text-red-600">R1-R4</span>
                          </div>
                        </li>
                        <PriceItem service="Soak Off" originalPrice={150} />
                        <PriceItem service="Basic Pedicure" originalPrice={180} />
                        <PriceItem service="Refills" originalPrice={150} />
                        <PriceItem service="Repairs (per nail)" originalPrice={35} />
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="mt-12 text-center">
                <Button asChild size="lg" className="book-now-btn whatsapp-btn text-white">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" /> Book Your Appointment Now
                  </a>
                </Button>
                <p className="mt-4 text-sm text-red-600 font-bold">Don't miss out on this amazing New Year Special!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="section-title mx-auto text-3xl font-bold tracking-tight sm:text-4xl">
                What Our <span className="gold-gradient">Clients Say</span>
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-muted-foreground">
                Read testimonials from our satisfied clients
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <TestimonialCard
                name="Sarah M."
                rating={5}
                text="Absolutely love my nails! The attention to detail is incredible. Will definitely be back!"
              />
              <TestimonialCard
                name="Lisa K."
                rating={5}
                text="Best nail salon in town! Professional, clean, and the designs are always on point."
              />
              <TestimonialCard
                name="Jennifer R."
                rating={5}
                text="The staff is so friendly and talented. My nails have never looked better. Highly recommend!"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-black py-16 text-white md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="section-title mx-auto text-3xl font-bold tracking-tight sm:text-4xl">
                Get In <span className="gold-gradient">Touch</span>
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-gray-400">
                Book your appointment today and experience luxury nail care
              </p>
            </div>

            <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                  <Phone className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mt-4 text-lg font-bold">Phone</h3>
                <p className="mt-2 text-sm text-gray-400">+27 67 703 7760</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mt-4 text-lg font-bold">Hours</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Mon-Sat: 8:00 AM - 6:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                  <MapPin className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mt-4 text-lg font-bold">Location</h3>
                <p className="mt-2 text-sm text-gray-400">Mamelodi West, Pretoria</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" className="book-now-btn whatsapp-btn text-white">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" /> Book via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
