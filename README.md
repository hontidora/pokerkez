<h2>Feladat leírása:</h2>
Készítsd el a Pókerkéz nevű alkalmazást, amely egy kevert pakli francia kártyából öt lapot választ ki, majd ezekből megállapítja a legmagasabb értékű kombinációt (pókerkéz) a póker szabályainak megfelelően. A program kimenetként mutassa meg a “leosztáskor kapott” öt lapot, valamint az abból előállítható legértékesebb pókerkezet. A pókerkéz megmutatásakor elegendő csak a kombináció nevét megadni (pl. sor vagy póker). A feladat során többféle nehézségi szint közül válaszhatsz.

<h3>Első szint</h3>
A póker szabályaitól némileg eltérve, az ászt minden esetben a legértékesebb lapnak tekintjük.
<h3>Második szint</h3>
A póker tényleges szabályai szerint járunk el, vagyis az ászt is a szabályoknak megfelelően kezeljük. Például a következők közül mindkét sor megfelelő: Ász-2-3-4-5 ill. 10-Bubi-Dáma-Király-Ász
<h3>Harmadik szint</h3>
Az alkalmazás számára paraméterként legyen megadható a játékban résztvevő paklik száma. Ezután az alkalmazás a megadott számú kevert pakliból választja a játékban szereplő öt lapot.
<h3>Negyedik szint</h3>
Kimenetként a pókerkéz értékét is meg kell jeleníteni. Tehát a “pár” ebben az esetben már nem elegendő, szükséges megjeleníteni a pár értékét is (pl. király pár)
<h3>Megjegyzések</h3>
A feladat elkészítése során JavaScriptet használj. Törekedj arra, hogy külső library-t csak indokolt esetben használj (nem hiszem, hogy kelleni fog). A megjelenítés másodlagos: nem kell kártyákat látnunk, elég ha számokat és színeket írtok ki, illetve a legjobb pókerkezet az adott lapokból.

<h2>Program futtatása:</h2>
Az indításkor paraméterként adhatjuk meg a paklik számát, két pakli esetén pl: <code>node index 2</code><br>
Paraméter nélkül, vagy érvénytelen paraméterrel automatikusan egy paklival dolgozik.<br>
A tesztek futtatásához: <code>mocha</code>
