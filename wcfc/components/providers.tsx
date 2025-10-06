"use client"

import type React from "react"

import { ThemeProvider } from "@/contexts/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { SessionProvider } from "next-auth/react"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SessionProvider>{children}</SessionProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}
