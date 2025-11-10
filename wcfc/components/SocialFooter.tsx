"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube, FaSpotify, FaDiscord, FaTwitter } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function SocialFooter() {
  const links = [
    { href: "https://facebook.com/", icon: <FaFacebookF />, label: "Facebook", hoverClass: "hover-facebook" },
    { href: "https://x.com/", icon: <FaTwitter />, label: "X", hoverClass: "hover-x" },
    { href: "https://youtube.com/", icon: <FaYoutube />, label: "YouTube", hoverClass: "hover-youtube" },
    { href: "https://instagram.com/", icon: <FaInstagram />, label: "Instagram", hoverClass: "hover-instagram" },
    { href: "https://spotify.com/", icon: <FaSpotify />, label: "Spotify", hoverClass: "hover-spotify" },
    { href: "https://discord.com/", icon: <FaDiscord />, label: "Discord", hoverClass: "hover-discord" },
    { href: "https://tiktok.com/", icon: <SiTiktok />, label: "TikTok", hoverClass: "hover-tiktok" },
  ];

  return (
    <footer className="w-full flex flex-col items-center border-t border-neutral-400/20 py-6 transition-colors duration-300">
      <div className="flex gap-5 text-2xl mb-3">
        {links.map(({ href, icon, label, hoverClass }, i) => (
          <motion.a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ scale: 1.12, y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`text-neutral-500 dark:text-neutral-300 transition-colors duration-200 ${hoverClass}`}
          >
            {icon}
          </motion.a>
        ))}
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">© 2025 WCFC | All Rights Reserved</p>
    </footer>
  );
}
