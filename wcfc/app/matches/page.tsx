"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export default function MatchesPage() {
  const { t } = useLanguage()

  const matches = [
    {
      date: "2025.10.12",
      opponent: "Barcelona",
      score: "3 - 2",
      scorers: ["akna", "Apokrif", "sisini."],
      opponentLogo: "/barcelona.png",
    },
    {
      date: "2025.09.30",
      opponent: "Real Madrid",
      score: "1 - 1",
      scorers: ["D3trah"],
      opponentLogo: "/realmadrid.jpg",
    },
    {
      date: "2025.09.15",
      opponent: "Budapest Honvéd FC",
      score: "2 - 0",
      scorers: ["akna", "killer2004"],
      opponentLogo: "/honved.jpg",
    },
    {
      date: "2025.08.27",
      opponent: "Mezőkövesd Zsóry FC",
      score: "2 - 1",
      scorers: ["Apokrif", "sisini."],
      opponentLogo: "/mezokovesd.png",
    },
  ]

  return (
    <main className="min-h-screen py-16 px-4 container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">
        {t("matchResultsTitle")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {matches.map((match, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold">
                {t("matchDate")}: {match.date}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-3">
              {/* Logók és eredmény */}
              <div className="relative flex justify-between items-center w-full px-8">
                <div className="flex items-center justify-center">
                  <Image
                    src="/wcfc-logo.png"
                    alt="WCFC Logo"
                    width={100}
                    height={100}
                    className="rounded-full shadow-md"
                  />
                </div>

                <div className="text-4xl font-bold text-center">
                  {match.score}
                </div>

                <div className="flex items-center justify-center">
                  <Image
                    src={match.opponentLogo}
                    alt={`${match.opponent} logo`}
                    width={100}
                    height={100}
                    className="rounded-full shadow-md"
                  />
                </div>
              </div>

              {/* Ellenfél */}
              <p className="text-center text-lg font-medium">
                {t("matchOpponent")}: {match.opponent}
              </p>

              {/* Gólszerzők */}
              <p className="text-center text-muted-foreground">
                {match.scorers.length > 0 ? (
                  <>
                    {t("matchScorers")}: {match.scorers.join(", ")}
                  </>
                ) : (
                  t("noGoals") || (t("matchScorers") + ": –")
                )}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
