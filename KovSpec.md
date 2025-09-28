# 1. Áttekintés
A kis projekt ötlete egy Visual Studio Code alapú webalkalmazás tervezése és fejlesztése, amely a WCFC futballcsapattal foglalkozik. Az alkalmazás lehetővé teszi a szurkolók számára, hogy hozzáférjenek a legfrissebb hírekhez, játékos-információkhoz, valamint részt vehessenek szurkolói interakciókban, például szavazásokon vagy hozzászólásokban. A játékosok és mérkőzések értékelés alapján lesznek rendszerezve, a szurkolók csak bizonyos kategóriákon belül tudnak szavazatokat leadni vagy hozzászólni.
Az egész webalkalmazás React-Node.js és MySQL segítségével lesz létrehozva.

# 2. Jelenlegi helyzet
Az elmúlt időszakban számos rajongói oldal jelent meg, amelyek a WCFC-hez hasonló tartalmakat kínálnak. Ezek az oldalak azonban gyakran pontatlan, nem megbízható információkat osztanak meg. Emiatt kiemelten fontos számunkra, hogy olyan webalkalmazást hozzunk létre, amelyben a szurkolók teljes mértékben megbízhatnak. Ez azt jelenti, hogy minden lépésben az átláthatóság, a hitelesség és a közösségépítés az elsődleges szempont lesz.

# 3. Vágyálom rendszer
Az ideális rendszerben a felhasználók gyorsan és egyszerűen megtekinthetik a csapatot, majd azonnal belemerülhetnek az alkalmazás élményébe. A kezelőfelület intenzív, azonban nem zavaróan zsúfolt, így a szurkolók könnyedén megtalálják a számukra lényeges funkciókat.

## Véletlenszerű skin kiosztás: 
Amikor egy szurkoló újonnan csatlakozik, automatikusan kap egy „véletlenszerű tartalmat” – például egy idézetet egy játékostól, vagy egy mérkőzéshez kötődő érdekességet. Ez egy kellemes meglepetés a felhasználó számára, és azonnal bevonja a közösségbe.

# 4. Funkcionális követelmény
- Felhasználó kezelés
    - Véletlenszerű tartalom kiosztás,ha a felhasználó rákattint az egyik játékosra.    

# 5. Fogalomtár
## WCFC
- Futballcsapat, amelyet a szurkolók és a közösség összefogása jellemez. A klub rendszeresen részt vesz bajnokságokon és barátságos mérkőzéseken.
## Szurkolói tartalom:
- Minden olyan digitális anyag (hír, kép, videó, szavazás), amely a csapat életéhez kapcsolódik, és a közösség számára elérhetővé tesszük.
## Szurkolói értékelés:
- Az egyes tartalmak értékét a szurkolói aktivitás (pl. lájkok, hozzászólások, megosztások) alapján mérjük. Egyes bejegyzések nagyobb figyelmet kapnak, így kiemelt helyre kerülnek.

# 6. Rendszerre vonatkozó törvények, szabványok, ajánlások
## Törvények
- AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2016/679 RENDELETE

- Az információs önrendelkezési jogról és az információszabadságról szóló 2011. évi CXII. törvény 4.§ (1) és (2) bekezdései.

## Rendszerszabványok, ajánlások
- Discord
- Github
- Visual studio code

# 7. Riportok

## Riportok
**Q:** Milyen weboldalt képzelt el?

**A:** A WCFC futballcsapattal foglalkozó hivatalos rajongói oldalt. Az oldal funkciói a következők lehetnek: hírek, játékosadatok, szavazások és szurkolói interakciók.

**Q:** Az interneten már számos hasonló létezik. Miért szeretne még egy ilyen oldalt létrehozni? 

**A:** Mert sok oldal megbízhatatlan vagy nem frissül rendszeresen. Mi egy olyan közösségi platformot szeretnénk létrehozni, amely mindig hiteles információt nyújt, és ahol a szurkolók biztonságosan tudnak interakcióba lépni.

**Q:** Tervez az oldalnak asztali vagy telefonos alkalmazást?

**A:** Nem, hiszen az oldal reszponzív, tehát telefonon és számítógépen is egyszerűen kezelhető.