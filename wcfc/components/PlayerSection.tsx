"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

type PlayerKey = keyof typeof translations["en"]["players"];

interface Player {
  name: PlayerKey | null;
  image: string;
}

const players: Player[] = [
  { name: "Apokrif", image: "/Apokrif.png" },
  { name: "killer2004", image: "/killer2004.png" },
  { name: "Lel", image: "/Lel.png" },
  { name: "ballclef", image: "/ballclef.png" },
  { name: "sisini", image: "/sisini.png" },
  { name: "akna", image: "/akna.png" },
  { name: "D3trah", image: "/D3trah.png" },
  { name: "Lamine Yamal", image: "/LY.png" },
];

const EMPTY_PLAYER: Player = { name: null, image: "" };

export default function PlayersSection() {
  const { t, language } = useLanguage();
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide
  const slides: Player[][] = [];
  for (let i = 0; i < players.length; i += 4) {
    const slice = players.slice(i, i + 4);
    while (slice.length < 4) slice.push(EMPTY_PLAYER);
    slides.push(slice);
  }

  // Carousel
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section className="mt-10 relative w-full flex flex-col items-center bg-white dark:bg-black text-black dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-6 transition-colors duration-500">
        {t("playersTitle")}
      </h2>

      {/* Carousel */}
      <div className="w-full overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="flex w-full justify-center gap-4 px-2">
              {slide.map((p, j) =>
                p.name ? (
                  <div
                    key={j}
                    onClick={() => setSelectedPlayer(p)}
                    className="w-1/4 rounded-2xl bg-white dark:bg-gray-900 shadow-lg transform hover:scale-105 transition-transform transition-colors duration-500 cursor-pointer"
                  >
                    <div className="relative w-full h-48 sm:h-56 md:h-64 rounded-t-2xl overflow-hidden">
                      <Image src={p.image} alt={p.name} fill className="object-cover" />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-lg transition-colors duration-500">
                        {translations[language].players[p.name].displayName}
                      </h3>
                    </div>
                  </div>
                ) : (
                  <div key={j} className="w-1/4"></div>
                )
              )}
            </div>
          ))}
        </div>

        {/*balra/jobbra gombok */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          ›
        </button>
      </div>

      {/* Dots*/}
      <div className="flex gap-3 mt-4 justify-center">
        <button className="w-3 h-3 rounded-full bg-green-500 transition-transform duration-300 hover:scale-110" />
      </div>

      {/* Overlay ablak */}
      {selectedPlayer?.name && (
        <div
          onClick={() => setSelectedPlayer(null)}
          className="fixed inset-0 bg-black/70 dark:bg-black/60 flex justify-center items-center z-50 transition-colors duration-500"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="rounded-2xl p-10 w-[500px] sm:w-[600px] md:w-[700px] shadow-2xl text-center bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500"
          >
            <div className="relative w-60 h-60 mx-auto mb-6">
              <Image
                src={selectedPlayer.image}
                alt={selectedPlayer.name}
                fill
                className="object-cover rounded-full border-4 border-green-600 transition-colors duration-500"
              />
            </div>

            <h3 className="text-3xl font-semibold mb-4 transition-colors duration-500">
              {translations[language].players[selectedPlayer.name].displayName}
            </h3>

            <div className="text-left space-y-3 mx-auto max-w-md transition-colors duration-500">
              <p className="text-lg">
                <span className="font-semibold text-green-700 dark:text-green-400">{t("position")}:</span>{" "}
                {translations[language].players[selectedPlayer.name].position}
              </p>
              <p className="text-lg leading-relaxed">
                {translations[language].players[selectedPlayer.name].info}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
