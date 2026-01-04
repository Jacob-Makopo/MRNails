import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display as PlayfairDisplay, Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const playfair = PlayfairDisplay({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "M.R. Nails & Beauty",
  description: "Unveil Your Goddess - Premium nail and beauty services in Hammanskraal",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${montserrat.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
