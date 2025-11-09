"use client";

import Image from "next/image";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export default function MatchesPage() {
  const { t, language } = useLanguage();
  const [selectedMatch, setSelectedMatch] = useState<null | (typeof matches)[0]>(null);

  const matches = [
    {
      date: "2025.10.12",
      opponent: "Barcelona",
      score: "3 - 2",
      scorers: ["akna", "Apokrif", "sisini."],
      opponentLogo: "/barcelona.png",
      stats: {
        possession: "52%",
        shots: 14,
        shotsOnTarget: 7,
        fouls: 9,
        yellowCards: 2,
        redCards: 0,
        corners: 5,
      },
    },
    {
      date: "2025.09.30",
      opponent: "Real Madrid",
      score: "1 - 1",
      scorers: ["D3trah"],
      opponentLogo: "/realmadrid.jpg",
      stats: {
        possession: "46%",
        shots: 8,
        shotsOnTarget: 3,
        fouls: 12,
        yellowCards: 3,
        redCards: 1,
        corners: 4,
      },
    },
    {
      date: "2025.09.15",
      opponent: "Budapest Honvéd FC",
      score: "2 - 0",
      scorers: ["akna", "killer2004"],
      opponentLogo: "/honved.jpg",
      stats: {
        possession: "60%",
        shots: 16,
        shotsOnTarget: 9,
        fouls: 7,
        yellowCards: 1,
        redCards: 0,
        corners: 6,
      },
    },
    {
      date: "2025.08.27",
      opponent: "Mezőkövesd Zsóry FC",
      score: "2 - 1",
      scorers: ["Apokrif", "sisini"],
      opponentLogo: "/mezokovesd.png",
      stats: {
        possession: "67%",
        shots: 41,
        shotsOnTarget: 6,
        fouls: 7,
        yellowCards: 4,
        redCards: 1,
        corners: 67,
      },
    },
  ];

  return (
    <main className="min-h-screen py-16 px-4 container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">
        {t("matchResultsTitle")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {matches.map((match, index) => (
          <Card
            key={index}
            onClick={() => setSelectedMatch(match)}
            className="relative overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer"
          >
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold">
                {t("matchDate")}: {match.date}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-3">
              <div className="relative flex justify-between items-center w-full px-8">
                <Image
                  src="/wcfc-logo.png"
                  alt="WCFC Logo"
                  width={100}
                  height={100}
                  className="rounded-full shadow-md"
                />

                <div className="text-4xl font-bold text-center">{match.score}</div>

                <Image
                  src={match.opponentLogo}
                  alt={`${match.opponent} logo`}
                  width={100}
                  height={100}
                  className="rounded-full shadow-md"
                />
              </div>

              <p className="text-center text-lg font-medium">
                {t("matchOpponent")}: {match.opponent}
              </p>

              <p className="text-center text-muted-foreground">
                {match.scorers.length > 0 ? (
                  <>
                    {t("matchScorers")}: {match.scorers.join(", ")}
                  </>
                ) : (
                  translations[language].noGoals
                )}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Felugró ablak */}
      {selectedMatch && (
        <div
          onClick={() => setSelectedMatch(null)}
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 rounded-2xl p-10 w-[500px] sm:w-[600px] md:w-[700px] shadow-2xl text-center"
          >
            <h3 className="text-3xl font-bold mb-4">
              {selectedMatch.opponent} — {selectedMatch.date}
            </h3>
            <p className="text-xl font-semibold mb-6">
              {t("matchScore")}: {selectedMatch.score}
            </p>

            <div className="grid grid-cols-2 gap-3 text-left text-lg">
              <p>
                <strong>{translations[language].matchStats.possession}:</strong>{" "}
                {selectedMatch.stats.possession}
              </p>
              <p>
                <strong>{translations[language].matchStats.shots}:</strong>{" "}
                {selectedMatch.stats.shots}
              </p>
              <p>
                <strong>{translations[language].matchStats.shotsOnTarget}:</strong>{" "}
                {selectedMatch.stats.shotsOnTarget}
              </p>
              <p>
                <strong>{translations[language].matchStats.fouls}:</strong>{" "}
                {selectedMatch.stats.fouls}
              </p>
              <p>
                <strong>{translations[language].matchStats.yellowCards}:</strong>{" "}
                {selectedMatch.stats.yellowCards}
              </p>
              <p>
                <strong>{translations[language].matchStats.redCards}:</strong>{" "}
                {selectedMatch.stats.redCards}
              </p>
              <p>
                <strong>{translations[language].matchStats.corners}:</strong>{" "}
                {selectedMatch.stats.corners}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
