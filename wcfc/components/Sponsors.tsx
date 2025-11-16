"use client"

import Image from "next/image"
import Link from "next/link"

type Sponsor = {
  name: string
  logo: string
  url: string
  fallback: string
}

const sponsors: Sponsor[] = [
  {
    name: "Burger King",
    logo: "/sponsors/burgerking.png",
    url: "https://www.burgerking.com",
    fallback: "BK",
  },
  {
    name: "Steam",
    logo: "/sponsors/steam.png",
    url: "https://store.steampowered.com",
    fallback: "S",
  },
  {
    name: "Nike",
    logo: "/sponsors/nike.png",
    url: "https://www.nike.com",
    fallback: "NI",
  },
  {
    name: "Adidas",
    logo: "/sponsors/adidas.png",
    url: "https://www.adidas.com",
    fallback: "AD",
  },
]

export default function Sponsors() {
  return (
    <footer className="mt-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold tracking-tight">Szponzoraink</h3>
          <p className="text-sm text-muted-foreground">Köszönjük támogatásukat!</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
          {sponsors.map((sponsor) => (
            <Link
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-card shadow-md hover:shadow-lg transition-transform duration-200 hover:scale-105">
                <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={64}
                    height={64}
                    className="object-contain h-full w-full"
                    onError={(e) => {
                      const parent = (e.target as HTMLImageElement).parentElement
                      if (parent) parent.innerHTML = `<span class="text-white font-bold">${sponsor.fallback}</span>`
                    }}
                  />
                </div>
                <span className="mt-3 text-sm font-medium text-center">{sponsor.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
