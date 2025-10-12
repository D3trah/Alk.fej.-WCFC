"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import PlayersSection from "@/components/PlayerSection";

export default function Home() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-20 text-center bg-gradient-to-b from-green-600 to-green-800 text-white">
        <Image src="/wcfc-logo.png" alt="WCFC Logo" width={200} height={200} className="mb-6" priority />
        <h1 className="text-5xl font-bold mb-4 text-balance">
          {t("welcome")} {t("teamName")}
        </h1>
        <p className="text-2xl text-green-100">{t("tagline")}</p>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">{t("aboutTitle")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("aboutText").split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">{t("teamStats")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <p className="text-center text-3xl font-semibold">{t("wins")}</p>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-center text-3xl text-green-600">37</CardTitle>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <p className="text-center text-3xl font-semibold">{t("draws")}</p>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-center text-3xl text-yellow-600">6</CardTitle>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <p className="text-center text-3xl font-semibold">{t("losses")}</p>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-center text-3xl text-red-600">7</CardTitle>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Player Section */}
      <PlayersSection />
    </main>
  )
}
