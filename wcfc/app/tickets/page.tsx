"use client"

import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import SocialFooter from "@/components/SocialFooter";
import Sponsors from "@/components/Sponsors"
export default function Tickets() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center px-4 py-20 text-center bg-gradient-to-b from-green-700 to-green-900 text-white">
        <Image src="/wcfc-logo.png" alt="WCFC Logo" width={150} height={150} className="mb-5" priority />
        <h1 className="text-5xl font-bold mb-4">{t("ticketsTitle") ?? "Match Tickets"}</h1>
        <p className="text-xl text-green-100 max-w-2xl">
          {t("ticketsSubtitle") ?? "Secure your seat and support the team live in the stadium!"}
        </p>
      </section>

      {/* INFORMATION CARDS */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">{t("upcomingMatches") ?? "Upcoming Matches"}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              {t("ticketsUpcomingDesc") ?? "Choose your preferred match and buy tickets easily online."}
              <br /><br />
              <Link href="/#upcoming">
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white rounded-xl">
                  {t("viewMatches") ?? "View Matches"}
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">{t("pricing") ?? "Pricing"}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              {t("ticketsPriceDesc") ?? "Prices start from €10 depending on seat category."}
              <ul className="mt-4 text-left space-y-1">
                <li>• {t("ticketsCat1") ?? "Standard: €10"}</li>
                <li>• {t("ticketsCat2") ?? "Premium: €18"}</li>
                <li>• {t("ticketsCat3") ?? "VIP: €30"}</li>
              </ul>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">{t("seasonPass") ?? "Season Pass"}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              {t("seasonPassDesc") ?? "Save money by purchasing a full-season stadium pass."}
              <br /><br />
              <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white rounded-xl">
                {t("moreInfo") ?? "More Info"}
              </Button>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-green-800 text-white py-16 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">{t("ctaTickets") ?? "Ready to get your ticket?"}</h2>
        <p className="text-lg mb-6 text-green-100">
          {t("ctaTicketsSub") ?? "Join us at the stadium and cheer for WCFC!"}
        </p>
        <Button size="lg" className="bg-white text-green-700 hover:bg-green-100 font-semibold rounded-xl">
          {t("buyNow") ?? "Buy Tickets Now"}
        </Button>
      </section>

      <Sponsors>
              
      </Sponsors>
      
      <SocialFooter>
      
      </SocialFooter>

    </main>
  )
}
