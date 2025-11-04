"use client";

import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import Image from "next/image";
import { useState } from "react";

const imageMap: Record<string, string> = {
  "Zsóry FC": "/kovesd.jpg",
  "Real Madrid": "/santiago-bernabeu.jpg",
  "FC Barcelona": "/camp-nou.jpg",
  "Bayern München": "/allianz-arena.jpg",
  "Juventus": "/allianz-stadion.jpg",
};

export default function UpcomingMatchesSection() {
  const { language, t } = useLanguage();
  const matches = translations[language].upcomingMatchesList;
  const [selectedMatch, setSelectedMatch] = useState<(typeof matches)[0] | null>(null);

  return (
    <section className="relative bg-gradient-to-b from-black via-[#0a0a0a] to-[#001a00] text-white py-16 px-8">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-green-400 uppercase">
        {t("upcomingMatches")}
      </h2>

      {/* Kártyák */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {matches.map((match, index) => {
          const img = imageMap[match.opponent] || "/default.jpg";
          return (
            <div
              key={index}
              onClick={() => setSelectedMatch(match as (typeof matches)[0])}
              className="relative group overflow-hidden rounded-2xl bg-[#0f0f0f] border border-green-900/40 shadow-lg hover:shadow-green-600/40 transition-all duration-500 cursor-pointer"
            >
              <Image
                src={img}
                alt={match.opponent}
                width={400}
                height={300}
                className="w-full h-56 object-cover opacity-70 group-hover:opacity-40 transition-all duration-500"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6">
                <h3 className="text-2xl font-bold text-green-400 group-hover:text-green-300 transition-all">
                  WCFC vs {match.opponent}
                </h3>
                <p className="text-sm text-gray-300 mt-2">{match.date}</p>
                <p className="text-sm text-gray-400">{match.location}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Overlay ablak */}
      {selectedMatch && (
        <div
          onClick={() => setSelectedMatch(null)}
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#111] rounded-2xl p-10 max-w-lg w-full text-center border border-green-700/50"
          >
            <Image
              src={imageMap[selectedMatch.opponent] || "/default.jpg"}
              alt={selectedMatch.opponent}
              width={500}
              height={300}
              className="w-full h-56 object-cover rounded-xl mb-6"
            />
            <h3 className="text-3xl font-bold text-green-400 mb-2">
              WCFC vs {selectedMatch.opponent}
            </h3>
            <p className="text-gray-300 mb-1">{selectedMatch.date}</p>
            <p className="text-gray-400 mb-4">{selectedMatch.location}</p>
            <p className="text-gray-200">{selectedMatch.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
