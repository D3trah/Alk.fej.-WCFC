"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import PlayersSection from "@/components/PlayerSection";
import UpcomingMatches from "@/components/UpcomingMatches";

export default function Home() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      {/* Fő szekció */}
      <section className="relative flex flex-col items-center justify-center px-4 py-20 text-center bg-gradient-to-b from-green-600 to-green-800 text-white">
        <Image src="/wcfc-logo.png" alt="WCFC Logó" width={200} height={200} className="mb-6" priority />
        <h1 className="text-5xl font-bold mb-4 text-balance">
          {t("welcome")} {t("teamName")}
        </h1>
        <p className="text-2xl text-green-100">{t("tagline")}</p>
      </section>

      {/* Rólunk szekció */}
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

      {/* Csapat statisztika */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Csapat statisztikák</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card>
              <CardHeader>
                <p className="text-center text-3xl font-semibold">Győzelmek</p>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-center text-3xl text-green-600">41</CardTitle>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <p className="text-center text-3xl font-semibold">Döntetlenek</p>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-center text-3xl text-yellow-600">6</CardTitle>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <p className="text-center text-3xl font-semibold">Vereségek</p>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-center text-3xl text-red-600">7</CardTitle>
              </CardContent>
            </Card>
          </div>

          <Link href="/matches">
            <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white rounded-2xl shadow-lg">
              Meccseredmények megtekintése
            </Button>
          </Link>
        </div>
      </section>

      <PlayersSection />

    {/* Egyéb szekciók */}
      <UpcomingMatches />
      
    </main>
  )
}
