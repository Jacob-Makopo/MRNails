"use client"

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
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-4">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative h-32 w-32 md:h-40 md:w-40">
            <img src="/images/logo.png" alt="M.R. Nails & Beauty" className="h-full w-full object-contain" />
          </div>
        </div>

        {/* Coming Soon Text */}
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="gold-gradient">COMING SOON</span>
        </h1>
      </div>
    </div>
  )
}
