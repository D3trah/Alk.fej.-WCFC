export const translations = {
  en: {
    home: "Home",
    login: "Login",
    register: "Register",
    welcome: "Welcome to",
    teamName: "WaterCloset FC",
    tagline: "''The early 5uper catches the lel!''",
    aboutTitle: "About Our Team",
    aboutText:
      "WCFC is more than just a football team — we're a movement. Born of creativity, friendship and a love for the beauty of the game, we play with heart, humor and hustle. From the pitch to the streets our motto stays the same: tough on the field, tougher in spirit. \n\nOur identity — bold, symbolic and proud — represents everything we believe in: teamwork, resilience and a little bit of chaos in the name of fun. Whether it's pulling off a last-minute win or celebrating like legends, WCFC brings passion, energy and good vibes wherever we go. \n\nJoin the family. Join the win. 💛💚\n\n#WCFC #ToiletWin #GoblinGang",
    upcomingMatches: "Upcoming Matches",
    teamStats: "Team Statistics",
    wins: "Wins",
    draws: "Draws",
    losses: "Losses",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    loginButton: "Sign In",
    registerButton: "Create Account",
    loginTitle: "Login to WCFC",
    registerTitle: "Join WCFC",
    noAccount: "Don't have an account?",
    hasAccount: "Already have an account?",
    signUpLink: "Sign up",
    signInLink: "Sign in",
    playersTitle: "Players",

    
    upcomingMatchesList: [
      {
        opponent: "Zsóry FC",
        date: "November 10, 2025",
        location: "Mezőkövesdi Zsóry Stadion",
        description:
          "An exciting clash against one of Mezőkövesd’s finest clubs — WCFC. The team is ready to showcase its strength under the bright lights of Zsóry Stadium.",
      },
      {
        opponent: "Real Madrid",
        date: "November 17, 2025",
        location: "Santiago Bernabéu",
        description:
          "Facing the Spanish giants in Madrid — a true test of passion, discipline, and toilet magic.",
      },
      {
        opponent: "FC Barcelona",
        date: "November 24, 2025",
        location: "Camp Nou",
        description:
          "A historic showdown at Camp Nou. WCFC’s defense will have to shine against Barcelona’s attacking brilliance.",
      },
      {
        opponent: "Bayern München",
        date: "December 1, 2025",
        location: "Allianz Arena",
        description:
          "The German champions await. A night of precision football and raw determination in Munich.",
      },
      {
        opponent: "Juventus",
        date: "December 8, 2025",
        location: "Allianz Stadium",
        description:
          "A thrilling Italian battle. WCFC travels to Turin to face the legendary Juventus in a high-stakes matchup.",
      },
    ],
  },

  hu: {
    home: "Főoldal",
    login: "Bejelentkezés",
    register: "Regisztráció",
    welcome: "Üdvözöl a",
    teamName: "WaterCloset FC",
    tagline: "''Ki korán kel 5uper_lel!''",
    aboutTitle: "Csapatunkról",
    aboutText:
      "A WCFC több mint egy futballcsapat - egy közösség, mely kreativitásunkból, barátságunkból és a játék iránti szeretetünkből született. Minden meccset szívvel, humorral és lendülettel játszunk. Mottónk a pályán kívül is ugyanaz marad: erősek a játékban, de még erősebbek lélekben. \n\nMerész, szimbolikus és büszke öntudatunk mindent képvisel, ami nekünk fontos: csapatmunka, kitartás és egy kis káosz a szórakozás nevében. Legyen szó utolsó perces győzelemről vagy legendás ünneplésről, a WCFC mindenhol szenvedélyt, energiát és jó hangulatot teremt. Csatlakozz a családhoz. \n\nCsatlakozz a győzelemhez. 💛💚\n\n#WCFC #ToiletWin #GoblinGang",
    upcomingMatches: "Közelgő Mérkőzések",
    teamStats: "Csapat Statisztikák",
    wins: "Győzelem",
    draws: "Döntetlen",
    losses: "Vereség",
    email: "E-mail",
    password: "Jelszó",
    confirmPassword: "Jelszó Megerősítése",
    loginButton: "Bejelentkezés",
    registerButton: "Fiók Létrehozása",
    loginTitle: "Bejelentkezés a WCFC-be",
    registerTitle: "Csatlakozz a WCFC-hez",
    noAccount: "Nincs még fiókod?",
    hasAccount: "Van már fiókod?",
    signUpLink: "Regisztrálj",
    signInLink: "Jelentkezz be",
    playersTitle: "Játékosok",

    upcomingMatchesList: [
      {
        opponent: "Zsóry FC",
        date: "2025. november 10.",
        location: "Mezőkövesdi Zsóry Stadion",
        description:
          "Izgalmas összecsapás Mezőkövesd egyik legjobb klubja ellen (a WCFC után). A WCFC készen áll, hogy megmutassa erejét a Zsóry Stadion fényében.",
      },
      {
        opponent: "Real Madrid",
        date: "2025. november 17.",
        location: "Santiago Bernabéu",
        description:
          "A spanyol óriások otthonában – a WCFC számára ez igazi szenvedély- és fegyelempróba.",
      },
      {
        opponent: "FC Barcelona",
        date: "2025. november 24.",
        location: "Camp Nou",
        description:
          "Történelmi mérkőzés a Camp Nou-ban. A WCFC védelmének ki kell állnia a Barcelona támadóerejét.",
      },
      {
        opponent: "Bayern München",
        date: "2025. december 1.",
        location: "Allianz Aréna",
        description:
          "A német bajnok várja a kihívást. Precíz, fegyelmezett játék és küzdőszellem estje Münchenben.",
      },
      {
        opponent: "Juventus",
        date: "2025. december 8.",
        location: "Allianz Stadion",
        description:
          "Izgalmas olasz összecsapás. A WCFC Torinóba utazik, hogy megmérkőzzön a legendás Juventusszal.",
      },
    ],
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
