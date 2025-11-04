"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations"; // módosítsd az elérési utat, ha máshol van

type PlayerKey = keyof typeof translations["en"]["players"];

const players: { name: PlayerKey; image: string }[] = [
  { name: "Apokrif", image: "/Apokrif.png" },
  { name: "killer2004", image: "/killer2004.png" },
  { name: "Lel", image: "/Lel.png" },
  { name: "ballclef", image: "/ballclef.png" },
  { name: "sisini", image: "/sisini.png" },
  { name: "akna", image: "/akna.png" },
  { name: "D3trah", image: "/D3trah.png" },
  { name: "Lamine Yamal", image: "/LY.png" },
];

export default function PlayersSection() {
  const { t, language } = useLanguage();
  const [selectedPlayer, setSelectedPlayer] = useState<null | (typeof players)[0]>(null);

  return (
    <section className="mt-10 relative">
      <h2 className="text-3xl font-bold text-center mb-6">{t("playersTitle")}</h2>

      {/* Játékos kártyák */}
      <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide">
        {players.map((p, i) => (
          <div
            key={i}
            onClick={() => setSelectedPlayer(p)}
            className="flex-shrink-0 w-60 rounded-2xl bg-white dark:bg-gray-800 shadow-lg transform hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            <div className="relative w-full h-72 rounded-t-2xl overflow-hidden">
              <Image src={p.image} alt={p.name} fill className="object-cover" />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg">
                {translations[language].players[p.name].displayName}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Overlay ablak */}
      {selectedPlayer && (
        <div
          onClick={() => setSelectedPlayer(null)}
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 rounded-2xl p-10 w-[500px] sm:w-[600px] md:w-[700px] shadow-2xl text-center"
          >
            <div className="relative w-60 h-60 mx-auto mb-6">
              <Image
                src={selectedPlayer.image}
                alt={selectedPlayer.name}
                fill
                className="object-cover rounded-full border-4 border-green-600"
              />
            </div>

            <h3 className="text-3xl font-semibold mb-4">
              {translations[language].players[selectedPlayer.name].displayName}
            </h3>

            <div className="text-left space-y-3 mx-auto max-w-md">
              <p className="text-lg">
                <span className="font-semibold text-green-700 dark:text-green-400">
                  {t("position")}:
                </span>{" "}
                {translations[language].players[selectedPlayer.name].position}
              </p>
              <p className="text-lg leading-relaxed">
                <span className="font-semibold text-green-700 dark:text-green-400">
                </span>{" "}
                {translations[language].players[selectedPlayer.name].info}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
