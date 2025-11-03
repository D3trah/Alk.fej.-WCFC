"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

export default function PlayersSection() {
  const { t } = useLanguage();

  const players = [
    { name: ("Apokrif"), image: "/Apokrif.png" },
    { name: ("killer2004"), image: "/killer2004.png" },
    { name: ("Lel"), image: "/Lel.png" },
    { name: ("ballclef"), image: "/ballclef.png" },
    { name: ("sisini."), image: "/sisini.png" },
    { name: ("akna"), image: "/akna.png" },
    { name: ("D3trah"), image: "/D3trah.png" },
    { name: ("Lamine Yamal"), image: "/LY.png" },
  ];

  return (
    <section className="mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">{t("playersTitle")}</h2>

     <div className="flex gap-6 overflow-x-auto pb-6 px-4 scrollbar-hide">
        {players.map((p, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-60 rounded-2xl bg-white dark:bg-gray-800 shadow-lg transform hover:scale-105 transition-transform duration-200"
          >
            <div className="relative w-full h-70 rounded-t-2xl overflow-hidden">
              <Image src={p.image} alt={p.name} fill className="object-cover" />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg">{p.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
