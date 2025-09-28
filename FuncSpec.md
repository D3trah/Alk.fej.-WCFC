## 1. Bevezetés

# 1.1. Cél

A dokumentum célja, hogy ismertesse a WCFC oldal készítéséhez szükséges funkcionális követelményeket. 
A specifikáció alapján a fejlesztőcsapat egyértelműen értelmezheti és megvalósíthatja a rendszer funkcióit.

# 1.2. Hatály

A dokumentum a WCFC oldal fejlesztési projektjére vonatkozik.

## 2. Rendszerleírás

# 2.1. Rendszer célja

Lehetőséget nyújt a felhasználóknak, hogy betekintést nyerhessenek a WCFC csapatba.

# 2.2. Felhasználói esetek

Felhasználó regisztrálása/bejelentkezése.

## 3. Követelmények

# 3.1. Funkcionális követelmények

Regisztráció/Bejelentkezés: A felhasználók létrehozhatnak egy fiókot, és bejelentkezhetnek a rendszerbe.

# 3.2. Nem-funkcionális követelmények

Biztonság: Az adatok biztonságosan vannak tárolva.
Reszponzivitás: A webalkalmazás minden eszközön (desktop, tablet, mobil) jól használható.

## 4. Rendszer működése

# 4.1. Regisztráció/Bejelentkezés

Felhasználó regisztráció gombra kattint átirányítjuk egy regisztrációs ablakba.
Regisztrálni adatai kitöltésével lehetséges az alábbi sorrendben; felhasználónév, email, jelszó
A regisztráció után a bejelentkezés fülre kattintva átirányításra kerül a bejelentkezés ablakba.
Bejelentkezéshez a regisztrációkor megadott felhasználónév, és jelszó páros megadása szükséges.
Bejelentkezés után újra a főodalon találja magát a felhasználó.
Sikertelen bejelentkezés esetén a rendszer hibaüzenetet jelenít meg.

# 4.2 Oldalon található gombok

A főoldalon Játékosprofilok, Meccsnaptár, Eredmények és statisztikák, Galéria, Hírek/blog, Szurkolói interakciók és Admin felület gombok találhatók.
A Játékosprofilok gombbal a látogatók megtekinthetik az egyes csapattagokat, posztjukat, statisztikáikat.
A Meccsnaptár gombbal a látogatók megtekinthetik a közelgő mérkőzések listázása, helyszínnel, időponttal.
Az Eredmények és statisztikák gombbal a látogatók megtekinthetik a korábbi meccsek eredményei, góllövők.
A Galéria gombbal a látogatók megtekinthetik a fotókat és videókat.
A Hírek/blog gombbal a látogatók megtekinthetik a csapattal kapcsolatban közzétett híreket.
A Szurkolói interakciók gomb a csapat Instagram vagy Facebook oldalára irányít.
Az Admin felület gomb a játékosok, események és bejegyzések kezelését teszik lehetővé az admin számára.

## 5. Adatmodell

# 5.1. Felhasználók

userId: INT (Egyedi azonosító)
username: VARCHAR(255) (Felhasználónév)
passwd: VARCHAR(255) (Jelszó)
email: VARCHAR(255) (E-mail cím)

## 6. Megvalósítás

A weboldal HTML és CSS használtaával fog létrejönni.

# 7. Fogalomtár

## WCFC: 
- Water Closet Football Club.

## "Ki korán kel 5uper_lel":
- A népszerű mondás amit meccs közben szoktak a szurkolók üvölteni. A WCFC tagjainak annyira megtetszett, hogy szlogenjükké vált.