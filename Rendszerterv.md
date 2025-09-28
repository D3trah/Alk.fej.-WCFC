# 1. A rendszer célja
A rendszer célja, hogy létrehozzon egy informatív, vizuálisan megnyerő és könnyen kezelhető weboldalt a WCFC amatőr focicsapat számára. Az oldal segíti a csapat online jelenlétét, lehetőséget biztosít hírek, események, eredmények, és játékosprofilok közzétételére, valamint erősíti a kapcsolatot a szurkolókkal.

# Álom rendszer
Az ideális rendszerben a látogatók gyorsan és intuitívan tájékozódhatnak a csapatról. Az oldal mobil- és reszponzív dizájnnal rendelkezik, a játékosok és meccsek bemutatása látványos, mégis könnyen áttekinthető. A szurkolók böngészhetnek galériát, és akár kapcsolatba is léphetnek a csapattal.

# 2. Projectterv
Developer team: Juhász Balázs, Dongó Petra, Lukács Levente

| Funkció                   | Feladat                                         |
| ------------------------- | ----------------------------------------------- |
| Követelmény specifikáció  | A weboldal céljainak és funkcióinak leírása     |
| Funkcionális terv         | A weboldal funkcióinak részletes specifikációja |
| Rendszerterv              | Technikai és architekturális dokumentáció       |
| Adattárolás               | Játékosok, események, szavazatok tárolása       |
| Játékosprofilok           | Frontend + backend megvalósítása                |
| Meccsnaptár és eredmények | Eseménykezelés, admin funkciók                  |
| Hírek és blog             | Tartalomkezelő funkciók                         |
| Design                    | CSS, reszponzív dizájn                          |

# 3. Követelmények
## Funkcionális követelmények:

- Játékosprofilok: A látogatók megtekinthetik az egyes csapattagokat, posztjukat, statisztikáikat.
- Meccsnaptár: Közelgő mérkőzések listázása, helyszínnel, időponttal.
- Eredmények és statisztikák: Korábbi meccsek eredményei, góllövők.
- Galéria: Fotók és videók megjelenítése.
- Hírek/blog: Hírek közzététele a csapattal kapcsolatban.
- Szurkolói interakciók: Instagram vagy Facebook üzeneteken keresztül.
- Admin felület: Játékosok, események és bejegyzések kezelése.

# 5. Funkcionális terv
## Rendszerszereplők:
- **Látogató (szurkoló)**
- **Admin**

## Rendszerhasználati esetek:
**Látogató**:

- Böngészi a játékosprofilokat, regisztráció esetén több információt kap
- Megnézi az eseményeket, eredményeket
- Megtekinti a galériát, olvassa a híreket

**Admin**:

- Játékosok adatainak szerkesztése
- Meccsek, események rögzítése
- Hírek, statisztikák frissítése
- Galéria kezelése

## Menü-hierarchia:
- **FŐOLDAL**

Rövid bemutatkozás
Mottó
WCFC logó

- **CSAPAT**

Összes játékos profil

- **MECCSEK**

Közelgő események
Korábbi eredmények

- **GALÉRIA**

Képek és videók

- **BLOG/HÍREK**

Cikkek, interjúk

- **KAPCSOLAT**

Elérhetőség (Facebook, Instagram, Twitch etc.)

## Menükhöz tartozó specifikációk:
| Modul | ID | Név | v. | Kifejtés |
|---|---|---|---|---|
| Főmenü | K1 | Főmenü | 1.0 | Itt található a bemutatkozás és a mottó |
| Csapat | K2 | Csapat | 1.0 | A csapat tagok bemutatása |
| Meccsek | K3 | Meccsek | 1.0 | Közelgő és korábbi eredmények megtekintése |
| Galéria | K4 | Galéria | 1.0 | Képek és videók |
| Blog/Hírek | K5 | Blog/Hírek | 1.0 | Cikkek, interjúk | 
| Kapcsolat | K6 | Kapcsolat | 1.0 | A csapat elérhetőségei |

# 6. Fizikai Környezet

A teszt webes környezetben és minden böngészőben reszponzívnak készül el.
Nincsenek megvásárolt komponenseink.

# 7. Fejlesztői eszközök:

- Visual Studio Code
- XAMPP

# 8. Architekturális terv
A rendszer háromrétegű architektúrát követ:

- **Kliensréteg (Frontend):**
    - React alapú, a felhasználói interakciókért felelős.
- **Üzleti logika réteg (Backend):**
    - Visual Studio Code segítségével készül, és kezeli a logikai műveleteket.
- **Adatrétég:** 
    - MYSQL adatbázis, ahol az adatok tárolódnak.

# 9. Használt technológiák

- Discord - verbális kommunikáció
- Git, GitHub - Alkalmazás verzióinak követése
- Kódszerkesztők (Visual Studio Code)