## 1. Bevezetés
# 1.1. Cél

A dokumentum célja, hogy ismertesse a WCFC oldal készítéséhez szükséges funkcionális követelményeket.
A specifikáció alapján a fejlesztőcsapat egyértelműen értelmezheti és megvalósíthatja a rendszer funkcióit.

# 1.2. Hatály

A dokumentum a WCFC oldal fejlesztési projektjére vonatkozik.

## 2. Rendszerleírás

A WCFC (Water Closet Football Club) egy feltörekvő futballcsapat, amelynek jelenleg nincs hivatalos online felülete, ahol a rajongók követhetik a csapat életét.
Ez a weboldal ezt a hiányt hivatott pótolni — célja, hogy a szurkolók hozzáférjenek a legfrissebb hírekhez, játékosadatokhoz, meccseredményekhez, és részt vehessenek közösségi interakciókban.
Fontos szempont az átláthatóság, a hitelesség és a közösségépítés.

## 3. Rendszerleírás
# 3.1. Rendszer célja

A rendszer lehetőséget nyújt a felhasználóknak, hogy betekintést nyerhessenek a WCFC csapatba.

## 3.2. Vágyálom rendszer

Az ideális rendszerben a felhasználók egyszerűen regisztrálhatnak, bejelentkezhetnek, és azonnal hozzáférhetnek minden fontos tartalomhoz: meccsek, eredmények, hírek és galéria.
A felület letisztult, reszponzív, és modern megjelenésű (Next.js alapokra építve).
A cél, hogy a szurkolók egy élvezetes, biztonságos, interaktív közösségi élményt kapjanak.

## 4. Felhasználói esetek

Felhasználó regisztrálása és bejelentkezése

Meccsadatok, játékosprofilok és hírek megtekintése

Szurkolói interakciók (kommentek, szavazások, közösségi oldalak)

## 5. Követelmények
# 5.1. Funkcionális követelmények

- Regisztráció / Bejelentkezés: A felhasználók létrehozhatnak fiókot, és beléphetnek a rendszerbe.
- Tartalom megtekintése: Meccsek, eredmények, játékosok, galéria, hírek.
- Admin felület: Az adminisztrátor kezelheti a játékosokat, eseményeket, bejegyzéseket.

Kiegészítő funkciók:
- Dark / Light mód
- Nyelvválasztás (Magyar / Angol)
- Merch és jegyvásárlás lehetősége
- Jövőbeli meccsek megtekintése
- Információ játékosokról
- Szponzorok
- A csapat közösségi médiája

# 5.2. Nem-funkcionális követelmények

- Biztonság: Az adatok biztonságosan vannak tárolva.
- Reszponzivitás: A webalkalmazás minden eszközön (desktop, tablet, mobil) jól használható.
- Megbízhatóság: A rendszer folyamatosan elérhető és karbantartható.

## 6. Rendszer működése
# 6.1. Regisztráció / Bejelentkezés

A felhasználó a „Regisztráció” gombra kattintva megadja a felhasználónevét, email címét, jelszavát.

Sikeres regisztráció után a „Bejelentkezés” fülön keresztül léphet be.

Sikertelen bejelentkezés esetén a rendszer hibaüzenetet jelenít meg.

Bejelentkezés után a főoldalra kerül vissza a felhasználó.

# 6.2. Oldalon található gombok

- Játékosprofilok: Csapattagok adatainak megtekintése.

- Meccsnaptár: Közelgő mérkőzések listája (helyszín, időpont).

- Eredmények és statisztikák: Korábbi meccsek eredményei, góllövők.

- Galéria: Fotók és videók a csapatról.

- Hírek / Blog: A csapattal kapcsolatos friss hírek.

- Szurkolói interakciók: Linkek a csapat közösségi oldalaira.

- Admin felület: Kezelés játékosok, események és bejegyzések felett.

## 7. Adatmodell
# 7.1. Felhasználók
| Mező | Típus | Leírás |
|---|---|---|
| userId | INT | Egyedi azonosító |
| username | VARCHAR(255) | Felhasználónév |
| passwd | VARCHAR(255) | Jelszó |
| email | VARCHAR(255) | E-mail cím |
## 8. Rendszerre szabványok, ajánlások

# 8.1. Rendszerszabványok, ajánlások
- Discord
- Github
- Trello
- Next.js
- Visual Studio Code
- XAMPP