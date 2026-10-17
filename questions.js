// questions.js — sdílená databáze otázek a výběrová logika.
// Používá index.html (hra) i otazky.html (přehled pro organizátora).
// Prostý skript (ne modul) — deklarace tu jsou dostupné i v dalších <script>
// tazích na stejné stránce.
'use strict';

  const BANK = {
    leh: [
      {q:'Kolik krajů má Česká republika?', a:'14', fact:'Dnešní krajské uspořádání platí od roku 2000, kdy nahradilo starší systém okresů.'},
      {q:'Jak se jmenuje měna používaná ve Velké Británii?', a:'Libra šterlinků', fact:'Je to nejstarší měna světa, která je stále v oběhu — používá se už přes 1200 let.'},
      {q:'Jak se jmenuje hlavní město Austrálie? (není to Sydney!)', a:'Canberra', fact:'Vzniklo uměle jako kompromisní hlavní město mezi rivaly Sydney a Melbourne.'},
      {q:'Který orgán lidského těla je svou plochou největší?', a:'Kůže', fact:'U dospělého člověka má plochu přibližně 2 metry čtvereční.'},
      {q:'Kolik planet má naše sluneční soustava?', a:'8', fact:'Pluto bylo v roce 2006 překlasifikováno na trpasličí planetu.'},
      {q:'Jak se jmenuje nejvyšší hora světa?', a:'Mount Everest', fact:'Měří 8 849 m a díky pohybu tektonických desek stále mírně roste.'},
      {q:'Kolik států sousedí s Českou republikou?', a:'4 — Německo, Polsko, Slovensko, Rakousko', fact:'Česko nemá přímý přístup k moři, je jedním z mála vnitrozemských států Evropy.'},
      {q:'V jakém roce skončila druhá světová válka?', a:'1945', fact:'V Evropě 8. května, v Asii po kapitulaci Japonska v září téhož roku.'},
      {q:'Kdo byl prvním československým prezidentem?', a:'Tomáš Garrigue Masaryk', fact:'Ve funkci byl od vzniku státu v roce 1918 až do roku 1935.'},
      {q:'Jak se jmenovala první žena ve vesmíru?', a:'Valentina Těreškovová', fact:'Letěla v roce 1963 na sovětské lodi Vostok 6.'},
      {q:'Které zvíře je podle hmotnosti největší na světě?', a:'Plejtvák obrovský (modrá velryba)', fact:'Může vážit přes 150 tun, tedy víc než 30 dospělých slonů dohromady.'},
      {q:'Jak se jmenuje strom, který je aktuálně nejvyšším žijícím stromem na světě?', a:'Hyperion (sekvoj vždyzelená)', fact:'Měří přes 115 metrů a roste v Kalifornii — jeho přesná poloha se kvůli ochraně tají.', src:'https://now.humboldt.edu/news/hsu-prof-confirms-worlds-tallest-tree', srcName:'Cal Poly Humboldt'},
      {q:'Která rostlina je považována za suchozemsky nejrychleji rostoucí na světě?', a:'Bambus', fact:'Některé druhy dorostou až 91 centimetrů za jediný den.', src:'https://www.guinnessworldrecords.com/world-records/fastest-growing-plant', srcName:'Guinness World Records'},
      {q:'Která budova je aktuálně nejvyšší v České republice?', a:'AZ Tower v Brně', fact:'Měří 111 metrů a je o dva metry vyšší než pražský City Tower na Pankráci.', src:'https://ct24.ceskatelevize.cz/clanek/regiony/brnenska-vez-prevzala-zezlo-nejvyssi-budovy-v-cr-301961', srcName:'ČT24'},
      {q:'Kolik srdcí má chobotnice?', a:'3', fact:'Dvě srdce pumpují krev přes žábry, jedno pak zásobuje zbytek těla.'},
      {q:'Který savec vydrží nejdéle bez jídla a pití?', a:'Velbloud', fact:'Díky tukovým zásobám v hrbu vydrží i víc než týden bez vody.'},
      {q:'Kolik zubů má dospělý člověk včetně moudráků?', a:'32', fact:'Bez moudráků je to 28 — ty bývají poslední, které prorazí, často až po dvacítce.'},
      {q:'Jak se jmenuje největší oceán na světě?', a:'Tichý oceán', fact:'Pokrývá víc než třetinu celého povrchu planety.'},
      {q:'Který kov je za pokojové teploty tekutý?', a:'Rtuť', fact:'Dříve se běžně používala v teploměrech, dnes kvůli toxicitě méně.'},
      {q:'Jaký je nejrychlejší pozemský savec?', a:'Gepard', fact:'Dokáže zrychlit na víc než 100 km/h za pouhé tři sekundy.'},
      {q:'Kolik kostí má dospělý člověk?', a:'206', fact:'Novorozenec jich má přes 270 — řada kostí v průběhu růstu srůstá dohromady.'},
      {q:'Který je nejmenší stát světa?', a:'Vatikán', fact:'Jeho rozloha je necelých 0,5 kilometru čtverečního.'},
      {q:'Jak se jmenuje nejhlubší jezero na světě, které leží v Rusku?', a:'Bajkal', fact:'Obsahuje přibližně 20 % veškeré sladké vody na povrchu Země.'},
      {q:'Který plyn tvoří největší část zemské atmosféry?', a:'Dusík (asi 78 %)', fact:'Kyslíku je v atmosféře necelých 21 %, zbytek tvoří další plyny.'},
      {q:'Jak se jmenuje vesmírná loď, která jako první přistála s lidmi na Měsíci?', a:'Apollo 11', fact:'K přistání došlo 20. července 1969, posádku tvořili Armstrong, Aldrin a Collins.'},
      {q:'Jak se jmenuje nejdelší řeka světa?', a:'Nil (podle většiny zdrojů)', fact:'Měří přes 6 650 km, i když některé novější studie dávají přednost Amazonce.'},
      {q:'Jaký je oficiální jazyk Brazílie?', a:'Portugalština', fact:'Brazílie je jediná portugalsky mluvící země celé Jižní Ameriky.'},
      {q:'Kolik písmen má česká abeceda?', a:'42', fact:'Počítáme-li i písmena s háčky a čárkami jako samostatná písmena.'},
      {q:'Ve kterém roce vznikla samostatná Česká republika rozdělením Československa?', a:'1993', fact:'Rozpad proběhl pokojně, přezdívá se mu "sametový rozvod".'},
      {q:'Který kontinent je co do rozlohy na Zemi největší?', a:'Asie', fact:'Pokrývá téměř třetinu veškeré souše planety.'},
      {q:'Jaká je úřední měna Japonska?', a:'Jen', fact:'Japonský jen patří mezi tři nejobchodovanější měny světa.'},
      {q:'Který je největší ostrov na světě? (Austrálie se počítá jako kontinent)', a:'Grónsko', fact:'Patří pod Dánsko, i když geograficky leží v Severní Americe.'},
      {q:'Který stát Evropské unie má nejvíc obyvatel?', a:'Německo', fact:'Žije v něm přes 83 milionů lidí.'},
      {q:'Na kterém souostroví pozoroval Charles Darwin pěnkavy, jež ho inspirovaly k evoluční teorii?', a:'Galapágy', fact:'Leží v Tichém oceánu a patří Ekvádoru.'},
      {q:'Který je největší žijící plaz na světě?', a:'Krokodýl mořský (hřebenatý)', fact:'Může měřit přes 6 metrů a vážit přes tunu.'},
      {q:'Jak se jmenuje proces, při kterém se housenka promění v motýla?', a:'Metamorfóza', fact:'Probíhá uvnitř kukly, kde se tělo housenky doslova rozpustí a znovu poskládá.'},
      {q:'Který orgán v lidském těle produkuje inzulín?', a:'Slinivka břišní (pankreas)', fact:'Při jejím selhání vzniká cukrovka prvního typu.'},
      {q:'Jak se jmenuje nejvyšší vrchol Afriky?', a:'Kilimandžáro', fact:'Měří 5 895 metrů a leží v Tanzanii, přestože je blízko rovníku, na vrcholu bývá sníh.'},
      {q:'Který je nejmenší kontinent na světě?', a:'Austrálie', fact:'Je zároveň jediný kontinent tvořený jedinou zemí.'},
      {q:'Kolik komor má žaludek krávy?', a:'4', fact:'Umožňují jí trávit těžko stravitelnou celulózu z trávy.'},
      {q:'Který panovnický rod vládl Rakousku-Uhersku až do roku 1918?', a:'Habsburkové', fact:'Posledním vládnoucím císařem byl Karel I.'},
      {q:'Jak se jmenuje nejdelší kost v lidském těle?', a:'Stehenní kost (femur)', fact:'Dokáže unést mnohonásobně vyšší zátěž, než je hmotnost celého těla.'},
      {q:'V jaké zemi leží starobylý chrámový komplex Angkor Wat?', a:'Kambodža', fact:'Je to největší náboženský komplex na světě.'},
      {q:'Který smysl je u psů mnohonásobně citlivější než u člověka?', a:'Čich', fact:'Odhaduje se, že psí čich je 10 000 až 100 000krát citlivější než lidský.'},
      {q:'Jak se jmenuje hlavní město Jižní Koreje?', a:'Soul', fact:'V jeho metropolitní oblasti žije přes 25 milionů lidí.'},
      {q:'Který chemický prvek je nejlehčí ze všech?', a:'Vodík', fact:'Má atomové číslo 1 a tvoří většinu hmoty celého vesmíru.'},
      {q:'Který savec snáší vejce místo toho, aby rodil živá mláďata?', a:'Ptakopysk', fact:'Žije v Austrálii a patří mezi jediné dva vejcorodé savce spolu s ježurou.'},
      {q:'Který je nejstudenější kontinent na Zemi?', a:'Antarktida', fact:'Byla tam naměřena teplota až -89 °C, nejnižší kdy zaznamenaná na Zemi.'},
      {q:'Jak se jmenuje proces čištění krve používaný u pacientů se selháním ledvin?', a:'Dialýza', fact:'Nahrazuje funkci ledvin uměle, buď mimo tělo, nebo přímo v břišní dutině.'},
      {q:'Který pták je nejrychlejší na světě v řízeném střemhlavém letu?', a:'Sokol stěhovavý', fact:'Při útoku na kořist dosahuje rychlosti přes 300 km/h.'},
      {q:'Který jazyk má na světě nejvíc rodilých mluvčích?', a:'Mandarínská čínština', fact:'Mluví jí rodilě přes 900 milionů lidí, hlavně v Číně.'},
      {q:'Jak se jmenuje nejvyšší aktivní sopka v Evropě?', a:'Etna na Sicílii', fact:'Je zároveň jednou z nejaktivnějších sopek na světě.'},
      {q:'Jaký je nejčastější krevní typ u lidí v Evropě?', a:'0 (nula), nejčastěji Rh pozitivní', fact:'Lidé s touto krevní skupinou se označují za "univerzální dárce".'},
      {q:'Kolik barev má švýcarská vlajka a jaké?', a:'2 — červená a bílá', fact:'Švýcarsko má jednu ze dvou čtvercových státních vlajek na světě, druhou je Vatikán.'},
      {q:'Jak se jmenuje hlavní město Egypta?', a:'Káhira', fact:'Je největší město v arabském světě i na celém africkém kontinentu.'},
      {q:'Jak se jmenuje hlavní město Norska?', a:'Oslo', fact:'Dnešní jméno nese od roku 1925, dřív se jmenovalo Kristiania.'},
      {q:'Který suchozemský savec má ze všech nejdelší těhotenství?', a:'Slon africký', fact:'Těhotenství trvá skoro 22 měsíců.'},
      {q:'Jak se jmenuje hlavní město Finska?', a:'Helsinky', fact:'Leží na pobřeží Finského zálivu Baltského moře.'},
      {q:'Která planeta sluneční soustavy je nejmenší?', a:'Merkur', fact:'Je zároveň nejblíž Slunci a nemá žádný měsíc.'},
      {q:'Jak se jmenuje hlavní město Argentiny?', a:'Buenos Aires', fact:'Jméno v překladu znamená doslova "dobré větry".'},
      {q:'Který živočich se dožívá ze všech zvířat na Zemi prokazatelně nejdéle?', a:'Žralok grónský', fact:'Některé exempláře se podle odhadů dožívají přes 400 let.'},
      {q:'Který kov je ze všech nejlepším vodičem elektřiny?', a:'Stříbro', fact:'Je vodivější než měď, kvůli vysoké ceně se ale tolik nepoužívá.'},
      {q:'Jak se jmenuje hlavní město Polska?', a:'Varšava', fact:'Za druhé světové války byla z velké části zničena a poté pečlivě obnovena do původní podoby.'},
      {q:'Který pták je nejmenší na světě?', a:'Kolibřík zavalitý', fact:'Váží jen přibližně 2 gramy.'},
      {q:'Jak se jmenuje hlavní město Švédska?', a:'Stockholm', fact:'Město je postavené na 14 ostrovech propojených mosty.'},
      {q:'Který orgán v lidském těle vyrábí žluč?', a:'Játra', fact:'Žluč se pak uchovává ve žlučníku, odkud se uvolňuje při trávení tuků.'},
      {q:'Jak se jmenuje hlavní město Thajska?', a:'Bangkok', fact:'Oficiální ceremoniální název města patří mezi nejdelší na světě.'},
      {q:'Jak se jmenuje nejvyšší hora Jižní Ameriky?', a:'Aconcagua', fact:'Leží v Argentině a měří přes 6960 metrů.'},
      {q:'Jak se jmenuje hlavní město Mexika?', a:'Mexico City', fact:'Patří mezi nejlidnatější města na světě.'},
      {q:'Který obojživelník dokáže regenerovat nejen končetiny, ale i části srdce a mozku?', a:'Axolotl', fact:'Je to vodní mlok, kterého proto hodně zkoumají vědci v medicíně.'},
      {q:'Jak se jmenuje hlavní město Rakouska?', a:'Vídeň', fact:'Dlouhá staletí byla hlavním sídlem Habsburské monarchie.'},
      {q:'Která obydlená vesnice na Sibiři patří mezi nejstudenější místa na Zemi?', a:'Ojmjakon', fact:'Teploty tam v zimě klesají až k -60 °C.'},
      {q:'Jak se jmenuje hlavní město Irska?', a:'Dublin', fact:'Leží na řece Liffey, která protéká přímo centrem města.'},
      {q:'Jak se jmenuje hlavní město Dánska?', a:'Kodaň', fact:'Je s švédským Malmö spojená mostem a tunelem přes úžinu Öresund.'},
      {q:'Který hmyz patří mezi nejrychlejší letce na světě?', a:'Vážka', fact:'Některé druhy dokážou letět rychlostí přes 50 km/h.'},
      {q:'Jak se jmenuje hlavní město Belgie?', a:'Brusel', fact:'Sídlí tam hlavní instituce Evropské unie.'},
      {q:'Který had je nejdelší na světě (podle délky, ne váhy)?', a:'Krajta mřížkovaná', fact:'Běžně měří přes 6 metrů, nejdelší zaznamenaný exemplář přes 10 metrů.'},
      {q:'Který savec spí ze všech nejméně hodin denně?', a:'Žirafa', fact:'Vystačí si jen s asi 2 hodinami spánku za den, často jen v krátkých úsecích.'},
      {q:'Který had je nejtlustší na světě podle obvodu těla?', a:'Anakonda velká', fact:'Žije v Jižní Americe a patří i mezi nejtěžší hady vůbec.'},
      {q:'Který plaz je nejmenší na světě?', a:'Chameleon druhu Brookesia nana', fact:'Pochází z Madagaskaru a vejde se na nehet palce.'},
      {q:'Jak se jmenuje hlavní město Nového Zélandu? (není to Auckland!)', a:'Wellington', fact:'Auckland je sice největší a nejznámější město země, hlavním městem je ale Wellington.'},
      {q:'Jak se jmenuje hlavní město Kolumbie?', a:'Bogotá', fact:'Leží ve vysoké nadmořské výšce přes 2600 metrů.'},
      {q:'Jak se jmenuje hlavní město Peru?', a:'Lima', fact:'Založil ji v 16. století španělský dobyvatel Francisco Pizarro.'},
      {q:'Který je nejmenší oceán na světě?', a:'Severní ledový oceán (Arktický)', fact:'Většinu roku je z velké části pokrytý mořským ledem.'},
      {q:'Kolik strun má klasické housle?', a:'4', fact:'Ladí se obvykle na tóny G-D-A-E.'},
      {q:'Která poušť je považována za nejsušší místo na světě (mimo póly)?', a:'Atacama v Chile', fact:'Na některých místech tam roky vůbec nezaprší.'},
      {q:'Který pták je národním symbolem USA?', a:'Orel bělohlavý', fact:'Jako symbol byl přijat v roce 1782, přestože se Benjamin Franklin přimlouval za krocana.'},
      {q:'Kolik kostí tvoří dohromady lidskou lebku (včetně obličejových)?', a:'22', fact:'8 kostí tvoří lebeční schránku a 14 obličejovou část.'},
      {q:'Jaká je úřední měna Číny?', a:'Jüan (renminbi)', fact:'Název "žen-min-pi" znamená doslova "lidové peníze".'},
      {q:'Jak se jmenuje hlavní město Portugalska?', a:'Lisabon', fact:'Je jedno z nejstarších měst západní Evropy, starší než Londýn nebo Paříž.'},
      {q:'Kolik měsíců trvá v průměru lidské těhotenství?', a:'9 měsíců (asi 40 týdnů)', fact:'Počítá se od prvního dne poslední menstruace, ne od početí.'},
      {q:'Který živočich je symbolem Číny a patří mezi ohrožené druhy?', a:'Panda velká', fact:'Živí se téměř výhradně bambusem, i když patří mezi šelmy.'},
      {q:'Kolik planet sluneční soustavy má kolem sebe prstence?', a:'4 — Jupiter, Saturn, Uran, Neptun', fact:'Saturnovy prstence jsou nejnápadnější a dobře viditelné i malým dalekohledem.'},
      {q:'Jak se jmenuje hlavní město Řecka?', a:'Athény', fact:'Patří mezi nejstarší nepřetržitě obydlená města světa — přes 3000 let.'},
      {q:'Jak se jmenuje nejrychlejší komerčně provozovaný vlak na světě (typ maglev) v Šanghaji?', a:'Šanghajský Transrapid', fact:'Dosahuje rychlosti přes 400 km/h a jede na magnetickém polštáři bez kontaktu s kolejnicemi.'},
      {q:'Kolik zlatých olympijských medailí celkem vyhrál americký plavec Michael Phelps, nejúspěšnější olympionik historie?', a:'23', fact:'Dohromady má 28 olympijských medailí — i to je rekord.', src:'https://en.wikipedia.org/wiki/Michael_Phelps', srcName:'Wikipedia'},
      {q:'Která země je podle rozlohy největší na světě?', a:'Rusko', fact:'Má rozlohu přes 17 milionů km², což je asi 11 % veškeré souše planety.', src:'https://www.worldatlas.com/articles/the-largest-countries-in-the-world-the-biggest-nations-as-determined-by-total-land-area.html', srcName:'WorldAtlas'},
      {q:'Jak se jmenovala první umělá družice vypuštěná do vesmíru?', a:'Sputnik 1', fact:'Vypustil ji Sovětský svaz 4. října 1957 a vysílala signál ještě tři týdny, než jí došly baterie.', src:'https://en.wikipedia.org/wiki/Sputnik_1', srcName:'Wikipedia'},
      {q:'Který hlodavec je největší na světě?', a:'Kapybara', fact:'Může vážit přes 60 kg, výjimečně i přes 100 kg.', src:'https://www.guinnessworldrecords.com/world-records/70407-largest-rodent', srcName:'Guinness World Records'},
      {q:'Který z těchto skladatelů byl Čech?', type:'choice', options:['Wolfgang Amadeus Mozart','Antonín Dvořák','Ludwig van Beethoven','Johann Sebastian Bach'], correctIndex:1, a:'B) Antonín Dvořák', fact:'Dvořák je jeden z nejhranějších českých skladatelů na světě, proslavila ho hlavně Symfonie č. 9 Z nového světa.'},
    ],
    str: [
      {q:'Kolik časových pásem má Rusko?', a:'11', fact:'Je to nejvíc časových pásem ze všech zemí světa.'},
      {q:'Jaké je hlavní město Kanady? (není to Toronto!)', a:'Ottawa', fact:'Toronto i Montreal jsou lidnatější, hlavním městem je ale Ottawa.'},
      {q:'Jak se jmenuje úžina mezi Evropou a Afrikou?', a:'Gibraltarský průliv', fact:'V nejužším místě měří jen asi 13 kilometrů.'},
      {q:'V jakém roce byla podepsána Magna Carta?', a:'1215', fact:'Omezila moc anglického krále a položila základ pozdějšímu ústavnímu právu.'},
      {q:'Kolik let trvala tzv. stoletá válka mezi Anglií a Francií?', a:'116 let (1337–1453)', fact:'Navzdory názvu tedy netrvala přesně sto let.'},
      {q:'Který český král nechal postavit Karlův most?', a:'Karel IV.', fact:'Byl zároveň zvolen i římským císařem Svaté říše římské.'},
      {q:'V jakém roce vypukla první světová válka?', a:'1914', fact:'Spustil ji atentát na následníka trůnu Františka Ferdinanda d\'Este v Sarajevu.'},
      {q:'Kdo složil operu Prodaná nevěsta?', a:'Bedřich Smetana', fact:'Patří mezi nejhranější české opery vůbec, i mimo Českou republiku.'},
      {q:'Ve kterém roce vznikl slavný film Casablanca?', a:'1942', fact:'Film získal Oscara za nejlepší snímek roku.'},
      {q:'Jak dlouho trvá zimní spánek ježka?', a:'Přibližně 5–6 měsíců', fact:'Během spánku se mu tep srdce zpomalí z několika set na jen pár úderů za minutu.'},
      {q:'Kolik komor má srdce žáby?', a:'3', fact:'Na rozdíl od člověka, jehož srdce má komory 4.'},
      {q:'Jak se jmenuje nejhlubší bod oceánu?', a:'Mariánský příkop (Challenger Deep)', fact:'Dosahuje hloubky přes 10 900 metrů — hlouběji, než je Everest vysoký.'},
      {q:'Který prvek má v periodické tabulce značku Fe?', a:'Železo', fact:'Značka pochází z latinského slova "ferrum".'},
      {q:'Kdo napsal tragédii Romeo a Julie?', a:'William Shakespeare', fact:'Hra vznikla přibližně kolem roku 1595.'},
      {q:'Jaké je hlavní město Švýcarska?', a:'Bern', fact:'Není to Curych ani Ženeva, i když jsou obě města známější a lidnatější.'},
      {q:'Kolik komor má lidské srdce?', a:'4', fact:'Dvě síně a dvě komory, oddělené chlopněmi.'},
      {q:'V jakém roce padla Berlínská zeď?', a:'1989', fact:'Rozdělovala město přes 28 let, od roku 1961.'},
      {q:'Jak se jmenuje proces, kterým rostliny vyrábí energii ze slunečního světla?', a:'Fotosyntéza', fact:'Při ní jako vedlejší produkt vzniká kyslík, který dýcháme.'},
      {q:'Který anglický panovník sjednotil zemi proti Vikingům v 9. století?', a:'Alfréd Veliký', fact:'Je jediným anglickým panovníkem, kterému zůstal přídomek "Veliký".'},
      {q:'Jak se jmenuje nejmenší kost v lidském těle?', a:'Třmínek (ve středním uchu)', fact:'Měří jen asi 3 milimetry.'},
      {q:'V kterém století žil Leonardo da Vinci?', a:'15.–16. století (1452–1519)', fact:'Byl zároveň malířem, vynálezcem i přírodovědcem.'},
      {q:'Jak se jmenuje největší horká poušť na světě?', a:'Sahara', fact:'Pokrývá plochu srovnatelnou s rozlohou celých USA.'},
      {q:'Kolik strun má klasická kytara?', a:'6', fact:'Standardní ladění zní E-A-D-G-H-E.'},
      {q:'Který americký prezident byl zastřelen v divadle?', a:'Abraham Lincoln', fact:'Stalo se tak v roce 1865 v divadle Ford\'s Theatre ve Washingtonu.'},
      {q:'Jak se jmenuje Darwinova teorie o vývoji druhů?', a:'Evoluční teorie (přirozený výběr)', fact:'Publikoval ji v roce 1859 v knize O původu druhů.'},
      {q:'Kolik kruhů má olympijská vlajka?', a:'5', fact:'Symbolizují pět obydlených kontinentů světa.'},
      {q:'Jaký je chemický symbol zlata?', a:'Au', fact:'Pochází z latinského slova "aurum".'},
      {q:'Kdo namaloval obraz Výkřik?', a:'Edvard Munch', fact:'Vytvořil ho v roce 1893, existují celkem čtyři verze díla.'},
      {q:'V jaké zemi leží starobylé město Petra, vytesané do skály?', a:'Jordánsko', fact:'Bylo hlavním městem starověkých Nabatejců.'},
      {q:'Jak se jmenuje nejdelší pohoří na světě?', a:'Andy', fact:'Táhnou se přes 7 000 kilometrů podél západního pobřeží Jižní Ameriky.'},
      {q:'Který vynálezce je nejčastěji spojován se žárovkou?', a:'Thomas Edison', fact:'Princip žárovky vymysleli už dřív jiní, Edison ho ale zdokonalil a rozšířil do praxe.'},
      {q:'V kterém roce se potopil Titanic?', a:'1912', fact:'Srazil se s ledovcem během své úplně první plavby.'},
      {q:'Jak se jmenuje proces přeměny kapaliny na plyn?', a:'Odpařování (vypařování)', fact:'Opačný proces, přeměna plynu na kapalinu, se nazývá kondenzace.'},
      {q:'Který řecký filozof byl učitelem Alexandra Velikého?', a:'Aristoteles', fact:'Sám byl žákem Platóna, jenž byl žákem Sokrata.'},
      {q:'Jak se jmenuje hlavní město Turecka? (není to Istanbul!)', a:'Ankara', fact:'Istanbul je sice mnohem větší a známější, hlavním městem je ale Ankara.'},
      {q:'Kolik měsíců obíhá planeta Mars?', a:'2 (Phobos a Deimos)', fact:'Jde o malá, nepravidelně tvarovaná tělesa, pravděpodobně zachycené asteroidy.'},
      {q:'Který anglický král měl šest manželek?', a:'Jindřich VIII.', fact:'Dvě ze svých manželek nechal popravit.'},
      {q:'Jak se jmenuje teplý mořský proud ovlivňující klima západní Evropy?', a:'Golfský proud', fact:'Přivádí teplou vodu z Mexického zálivu až k evropským břehům.'},
      {q:'Kolik stupňů má pravý úhel?', a:'90', fact:'Celý kruh má dohromady 360 stupňů.'},
      {q:'Kdo zkomponoval hudbu k baletu Labutí jezero?', a:'Petr Iljič Čajkovskij', fact:'Premiéru měl balet v roce 1877 v Moskvě.'},
      {q:'Jak se jmenuje vrstva atmosféry, kde probíhá počasí?', a:'Troposféra', fact:'Sahá do výšky asi 10–12 kilometrů nad zemským povrchem.'},
      {q:'Ve kterém roce vznikla Evropská unie pod tímto názvem?', a:'1993', fact:'Vznikla na základě Maastrichtské smlouvy, navazuje na starší Evropská společenství.'},
      {q:'Jak se jmenuje nejstarší univerzita ve střední Evropě?', a:'Univerzita Karlova', fact:'Založil ji roku 1348 Karel IV. v Praze.'},
      {q:'Který hudební nástroj má klávesy, struny i pedály zároveň?', a:'Klavír', fact:'Struny jsou ukryté uvnitř a rozeznívají se úhozem kladívek po stisknutí klávesy.'},
      {q:'V jaké zemi se narodil Albert Einstein?', a:'Německo', fact:'Později získal i švýcarské a americké občanství.'},
      {q:'Jak se jmenuje jev, kdy se Měsíc dostane mezi Zemi a Slunce?', a:'Zatmění Slunce', fact:'Může být úplné, částečné nebo prstencové, podle vzájemné polohy těles.'},
      {q:'Který je momentálně nejlidnatější stát světa?', a:'Indie', fact:'V roce 2023 počtem obyvatel předstihla Čínu.'},
      {q:'Jak se jmenuje proces, kterým se sůl rozpouští ve vodě?', a:'Rozpouštění (disociace)', fact:'Molekuly vody obklopí ionty soli a oddělí je od sebe.'},
      {q:'Který italský stát leží celý uvnitř hranic Říma?', a:'Vatikán', fact:'Je to nejmenší stát světa, sídlo papeže a římskokatolické církve.'},
      {q:'Jak se jmenuje mořský průliv oddělující Asii od Severní Ameriky?', a:'Beringův průliv', fact:'V nejužším místě měří jen asi 82 km a v zimě občas částečně zamrzá.'},
      {q:'Kdo složil operu Kouzelná flétna?', a:'Wolfgang Amadeus Mozart', fact:'Premiéru měla jen pár měsíců před Mozartovou smrtí v roce 1791.'},
      {q:'Která země jako první na světě umožnila ženám volit ve všeobecných parlamentních volbách?', a:'Nový Zéland', fact:'Stalo se tak v roce 1893 — zákon podepsal guvernér lord Glasgow 19. září.', src:'https://nzhistory.govt.nz/keyword/suffrage', srcName:'NZHistory.govt.nz'},
      {q:'Které je největší jezero na světě podle rozlohy?', a:'Kaspické moře', fact:'Má rozlohu kolem 386 000 km² — i když je slané, geograficky jde o jezero, ne moře.', src:'https://www.guinnessworldrecords.com/world-records/66669-largest-lake', srcName:'Guinness World Records'},
      {q:'Jak se jmenuje pohoří táhnoucí se přes severní Afriku od Maroka po Tunisko?', a:'Atlas', fact:'Podle něj dostal jméno i Atlantský oceán.'},
      {q:'Jak se jmenuje filozofická škola, kterou v Athénách založil Platón?', a:'Akademie', fact:'Odtud pochází dnešní slovo "akademie" používané pro vzdělávací instituce.'},
      {q:'Který římský císař nechal zahájit stavbu Kolosea?', a:'Vespasianus', fact:'Stavbu dokončil až jeho syn Titus v roce 80 n. l.'},
      {q:'Jak se jmenuje proces, kterým se kopíruje DNA před dělením buňky?', a:'Replikace DNA', fact:'Díky němu má každá nová buňka kompletní kopii genetické informace.'},
      {q:'Který anglický král vedl armádu k vítězství v bitvě u Azincourtu v roce 1415?', a:'Jindřich V.', fact:'Bitvu později zpracoval i William Shakespeare ve své historické hře.'},
      {q:'Jak se jmenuje teorie o pohybu litosférických desek, nástupce teorie kontinentálního driftu?', a:'Teorie deskové tektoniky', fact:'Vysvětluje i vznik zemětřesení a sopečné činnosti na hranicích desek.'},
      {q:'Který řecký ostrov je rozlohou největší?', a:'Kréta', fact:'Je domovem starověké minojské civilizace a bájného labyrintu krále Minóa.'},
      {q:'Jak se jmenuje nejdelší řeka Jižní Ameriky?', a:'Amazonka', fact:'Podle objemu protékající vody je to jednoznačně největší řeka světa.'},
      {q:'Který anglický mořeplavec a korzár byl druhým člověkem v historii, co obeplul celý svět?', a:'Francis Drake', fact:'Cestu dokončil v roce 1580, později ho za to královna Alžběta I. pasovala na rytíře.'},
      {q:'Jak se jmenuje nejvyšší vrchol Severní Ameriky?', a:'Denali (dříve Mount McKinley) na Aljašce', fact:'Měří přes 6190 metrů.'},
      {q:'Jak se nazývá geologické období, ve kterém žili dinosauři?', a:'Druhohory (mezozoikum)', fact:'Trvaly přibližně od 252 do 66 milionů let před současností.'},
      {q:'Který anglický spisovatel napsal romány Oliver Twist a David Copperfield?', a:'Charles Dickens', fact:'Ve svých dílech často kritizoval sociální poměry viktoriánské Anglie.'},
      {q:'Jak se jmenuje bitva, při které Řekové v roce 490 př. n. l. porazili mnohem početnější perskou armádu?', a:'Bitva u Marathónu', fact:'Odtud pochází název běžecké disciplíny maraton.'},
      {q:'Jak se jmenuje největší poloostrov na světě?', a:'Arabský poloostrov', fact:'Je z velké části pokrytý pouští.'},
      {q:'Který ruský car je znám jako zakladatel Petrohradu a velký modernizátor Ruska?', a:'Petr Veliký (Petr I.)', fact:'Nové hlavní město nechal postavit doslova na bažinách na počátku 18. století.'},
      {q:'Který anglický vynálezce zkonstruoval parní lokomotivu Rocket, která proslula v roce 1829?', a:'George Stephenson', fact:'Je považován za jednoho ze zakladatelů moderní železnice.'},
      {q:'Jak se jmenuje chemický proces, při kterém látka reaguje s kyslíkem a hoří?', a:'Oxidace', fact:'Rezivění železa je pomalá forma stejného typu reakce.'},
      {q:'Jak se jmenuje nejsevernější hlavní město na světě?', a:'Reykjavík (Island)', fact:'Leží jen kousek pod polárním kruhem.'},
      {q:'Jak se jmenuje první kniha ságy o Harrym Potterovi?', a:'Harry Potter a Kámen mudrců', fact:'Vyšla poprvé v roce 1997 a odstartovala jednu z nejúspěšnějších knižních sérií historie.'},
      {q:'Jak se jmenuje nejhlubší propast v České republice, ležící v Moravském krasu?', a:'Macocha', fact:'Je hluboká přes 138 metrů.'},
      {q:'Která anglická královna vládla před Alžbětou II. ze všech nejdéle?', a:'Královna Viktorie', fact:'Vládla přes 63 let, celé období se po ní nazývá viktoriánská éra.'},
      {q:'Jak se jmenuje druhý nejvyšší vrchol Afriky, hned po Kilimandžáru?', a:'Mount Kenya', fact:'Leží v Keni, podle které dostala země i jméno.'},
      {q:'Jak se jmenuje socha v newyorském přístavu, kterou v roce 1886 darovala Francie USA?', a:'Socha Svobody', fact:'Dar byl u příležitosti 100. výročí americké nezávislosti.'},
      {q:'Který císař Svaté říše římské svolal Kostnický koncil, na kterém byl upálen Jan Hus?', a:'Zikmund Lucemburský', fact:'Husovi předtím vystavil ochranný glejt, který ale nedodržel.'},
      {q:'Která planeta sluneční soustavy má ze všech nejvíc objevených měsíců?', a:'Saturn', fact:'Aktuálně jich má přes 140 — číslo se postupně mění s novými objevy.'},
      {q:'Kdo složil hudbu k české státní hymně Kde domov můj?', a:'František Škroup', fact:'Text napsal Josef Kajetán Tyl pro divadelní hru z roku 1834.'},
      {q:'Jak se jmenuje nejstarší dochovaná stavba v areálu Pražského hradu?', a:'Bazilika svatého Jiří', fact:'Založena byla už na počátku 10. století.'},
      {q:'Jak se jmenuje přeměna atomového jádra provázená vyzařováním záření?', a:'Radioaktivní rozpad', fact:'Využívá se třeba při datování stáří hornin a archeologických nálezů.'},
      {q:'Jak se jmenuje nejnižší bod na evropské pevnině (bez moří)?', a:'Kaspická proláklina u Kaspického moře', fact:'Leží přibližně 28 metrů pod úrovní světového oceánu.'},
      {q:'V jakém roce byl založen stát Izrael?', a:'1948', fact:'Vyhlášení nezávislosti vedlo bezprostředně k první arabsko-izraelské válce.'},
      {q:'Který vynálezce je nejčastěji spojován s vynálezem telefonu?', a:'Alexander Graham Bell', fact:'Patent získal v roce 1876, ačkoliv se o prvenství dodnes vedou historické spory.'},
      {q:'Jak se jmenuje buněčné dělení, při kterém vznikají pohlavní buňky s poloviční sadou chromozomů?', a:'Meióza', fact:'Na rozdíl od mitózy tak zajišťuje, že po oplodnění má nový jedinec normální počet chromozomů.'},
      {q:'Kde se nachází nejnižší místo na souši na Zemi?', a:'Břehy Mrtvého moře', fact:'Leží přes 430 metrů pod úrovní hladiny moře.'},
      {q:'Kdo namaloval obraz Hvězdná noc?', a:'Vincent van Gogh', fact:'Namaloval ho v roce 1889, přibližně rok před svou smrtí.'},
      {q:'Který obraz je považován za nejdráže prodané umělecké dílo v historii?', a:'Salvator Mundi od Leonarda da Vinci', fact:'Vydražen byl v roce 2017 v aukční síni Christie\'s za 450,3 milionu dolarů.', src:'https://insights.masterworks.com/art/history/the-10-most-expensive-paintings-ever-sold/', srcName:'Masterworks'},
      {q:'Kdo byla první žena, která přeletěla Atlantik sólo a bez mezipřistání?', a:'Amelia Earhartová', fact:'Stalo se tak v květnu 1932, letěla z Newfoundlandu a přistála v Severním Irsku.', src:'https://www.guinnessworldrecords.com/world-records/first-flight-across-the-atlantic-solo-(female)', srcName:'Guinness World Records'},
      {q:'Který umělec má na kontě nejvíc cen Grammy v celé historii ocenění?', a:'Beyoncé', fact:'Má jich 35 — překonala rekord dirigenta Georga Soltiho, který jich měl 31.', src:'https://www.guinnessworldrecords.com/world-records/70115-most-grammy-awards-won-in-a-single-year-by-an-individual', srcName:'Guinness World Records'},
      {q:'Který je druhý nejvyšší vrchol světa?', a:'K2', fact:'Mezi horolezci je považován za technicky nejnáročnější a nejnebezpečnější z osmitisícovek.'},
      {q:'V jakém roce skončila válka ve Vietnamu?', a:'1975', fact:'Skončila pádem Saigonu a sjednocením Vietnamu pod komunistickou vládou.'},
      {q:'Který je nejstarší dosud žijící jednotlivý strom na světě?', a:'Borovice dlouhověká zvaná Methuselah', fact:'Odhaduje se, že je starší než 4800 let.'},
      {q:'Kdo byla první žena, která získala Nobelovu cenu?', a:'Marie Curie-Skłodowská', fact:'Získala ji dokonce dvakrát — za fyziku i za chemii.'},
      {q:'Jak se jmenuje nejdelší zmapovaný jeskynní systém na světě?', a:'Mamutí jeskyně v USA', fact:'Zmapováno je v ní přes 650 kilometrů chodeb.'},
      {q:'Kolik úředních jazyků má Švýcarsko?', a:'4 — němčina, francouzština, italština a rétorománština', fact:'Němčinou mluví jako mateřským jazykem nejvíc obyvatel země.'},
      {q:'Jak se jmenuje proces, při kterém kvasinky mění cukr na alkohol a oxid uhličitý?', a:'Fermentace (kvašení)', fact:'Používá se při výrobě piva, vína i pečiva.'},
      {q:'Kdo složil symfonii "Z nového světa", inspirovanou pobytem v USA?', type:'choice', options:['Bedřich Smetana','Antonín Dvořák','Leoš Janáček','Gustav Mahler'], correctIndex:1, a:'B) Antonín Dvořák', fact:'Napsal ji v roce 1893 během svého působení jako ředitel newyorské konzervatoře.'},
      {q:'Kolik strun má standardně koncertní (orchestrální) harfa?', type:'choice', options:['32','47','60','75'], correctIndex:1, a:'B) 47', fact:'Harfa má navíc 7 pedálů, kterými se mění tónina během hry.'},
      {q:'Který z těchto měst NENÍ hlavním městem své země?', type:'choice', options:['Ankara','Ottawa','Sydney','Bern'], correctIndex:2, a:'C) Sydney', fact:'Hlavním městem Austrálie je Canberra — Sydney je jen největší a nejznámější město země.'},
    ],
    tez: [
      {q:'V jakém roce byla podepsána Vestfálská mírová smlouva, ukončující třicetiletou válku?', a:'1648', fact:'Položila základ modernímu pojetí státní suverenity v mezinárodních vztazích.'},
      {q:'Kdo byl posledním byzantským císařem?', a:'Konstantin XI. Palaiologos', fact:'Padl při dobytí Konstantinopole Osmany v roce 1453.'},
      {q:'Který kov má ze všech nejvyšší teplotu tání?', a:'Wolfram', fact:'Taje až při 3422 °C, proto se používal na vlákna v žárovkách.'},
      {q:'V kterém roce proběhla bitva u Slavkova?', a:'1805', fact:'Napoleon v ní porazil spojená vojska Ruska a Rakouska — přezdívá se jí "bitva tří císařů".'},
      {q:'Jak se jmenuje věta popisující vztah stran pravoúhlého trojúhelníku?', a:'Pythagorova věta', fact:'Zní: a² + b² = c², kde c je přepona.'},
      {q:'Který spisovatel napsal román Sto roků samoty?', a:'Gabriel García Márquez', fact:'Za svou tvorbu dostal v roce 1982 Nobelovu cenu za literaturu.'},
      {q:'V jakém roce byl objeven hrob egyptského faraona Tutanchamona?', a:'1922', fact:'Objevil ho archeolog Howard Carter v Údolí králů téměř nedotčený.'},
      {q:'Jak se jmenuje nejbližší hvězda ke Slunci?', a:'Proxima Centauri', fact:'Je vzdálená přibližně 4,2 světelného roku.'},
      {q:'Který panovník je znám jako "Sluneční král"?', a:'Ludvík XIV.', fact:'Vládl Francii přes 72 let — nejdéle ze všech evropských monarchů v dějinách.'},
      {q:'V kterém roce vznikla Organizace spojených národů?', a:'1945', fact:'Nahradila předválečnou Společnost národů, která selhala v zabránění druhé světové válce.'},
      {q:'Jak se nazývá jaderná reakce, při které se těžké jádro štěpí na lehčí?', a:'Jaderné štěpení (fise)', fact:'Využívá se jak v jaderných elektrárnách, tak v jaderných zbraních.'},
      {q:'Kdo namaloval strop Sixtinské kaple?', a:'Michelangelo Buonarroti', fact:'Práce mu trvala přibližně čtyři roky, od 1508 do 1512.'},
      {q:'Který ostrovní stát byl dříve znám jako Cejlon?', a:'Srí Lanka', fact:'Svůj název změnila v roce 1972.'},
      {q:'Jak se jmenuje nejstarší dochovaný psaný zákoník na světě?', a:'Chammurapiho zákoník', fact:'Pochází z Babylonu, přibližně z 18. století před naším letopočtem.'},
      {q:'V kterém roce získaly ženy ve Velké Británii volební právo ve stejném rozsahu jako muži?', a:'1928', fact:'Od roku 1918 mohly volit jen ženy starší 30 let s určitým majetkem.'},
      {q:'Který fyzik formuloval obecnou teorii relativity?', a:'Albert Einstein', fact:'Publikoval ji v roce 1915, deset let po speciální teorii relativity.'},
      {q:'Při jakém válečném tažení přešel Hannibal se slony přes Alpy?', a:'Druhá punská válka (218 př. n. l.)', fact:'Útok na Řím od severu Itálii zcela zaskočil.'},
      {q:'Který anglický vědec formuloval zákony pohybu a gravitace?', a:'Isaac Newton', fact:'Jeho dílo Principia Mathematica vyšlo v roce 1687.'},
      {q:'V jaké zemi se nachází starobylé město Machu Picchu?', a:'Peru', fact:'Postavili ho Inkové v 15. století vysoko v pohoří Andy.'},
      {q:'Který astronom jako první tvrdil, že Země obíhá kolem Slunce, a ne naopak?', a:'Mikuláš Koperník', fact:'Svou heliocentrickou teorii publikoval v roce 1543, krátce před svou smrtí.'},
      {q:'V kterém roce proběhla Kubánská raketová krize?', a:'1962', fact:'Svět byl tehdy nejblíže jaderné válce za celou dobu studené války.'},
      {q:'Jak se jmenuje nejvyšší vodopád světa?', a:'Salto Ángel ve Venezuele', fact:'Jeho volný pád měří přes 800 metrů.'},
      {q:'Který filozof napsal dílo Tak pravil Zarathustra?', a:'Friedrich Nietzsche', fact:'Vydával ho postupně v letech 1883 až 1885.'},
      {q:'V jakém roce se rozpadl Sovětský svaz?', a:'1991', fact:'Rozdělil se na 15 samostatných států.'},
      {q:'Který egyptský panovník nechal postavit Velkou pyramidu v Gíze?', a:'Chufu (Cheops)', fact:'Stavba je stará přes 4500 let a byla nejvyšší stavbou světa téměř 4000 let.'},
      {q:'V kterém roce byl podepsán Versailleský mír, ukončující první světovou válku?', a:'1919', fact:'Jeho tvrdé podmínky vůči Německu přispěly k napětí před druhou světovou válkou.'},
      {q:'Jak se jmenuje proces, kterým hvězdy fúzí vodíku na helium vyrábí energii?', a:'Jaderná fúze', fact:'Stejný proces probíhá i v jádru našeho Slunce.'},
      {q:'Který skladatel zkomponoval Devátou symfonii, přestože byl v té době úplně hluchý?', a:'Ludwig van Beethoven', fact:'Premiéru v roce 1824 prý ani neslyšel a musel se otočit, aby viděl potlesk publika.'},
      {q:'Ve které bitvě byl Napoleon Bonaparte definitivně poražen?', a:'Bitva u Waterloo (1815)', fact:'Proti němu stála koalice vedená Brity a Prusy.'},
      {q:'Jak se jmenuje teorie popisující rozpínání vesmíru z jednoho výchozího bodu?', a:'Teorie velkého třesku', fact:'K rozpínání podle ní došlo před přibližně 13,8 miliardami let.'},
      {q:'Který portugalský mořeplavec vedl první výpravu, jež obeplula celou zeměkouli?', a:'Fernão de Magalhães (Magellan)', fact:'Sám cestu nepřežil, dokončila ji až jeho posádka v roce 1522.'},
      {q:'V kterém století žil český reformátor Jan Hus?', a:'14.–15. století (1370–1415)', fact:'Upálen byl v Kostnici za kacířství.'},
      {q:'Jak se jmenuje nejstarší dosud fungující parlament na světě?', a:'Alþingi na Islandu', fact:'Byl založen už v roce 930.'},
      {q:'Který americký prezident vedl zemi během velké hospodářské krize a zavedl politiku "New Deal"?', a:'Franklin D. Roosevelt', fact:'Byl jediným americkým prezidentem zvoleným čtyřikrát za sebou.'},
      {q:'Jak se nazývá nejstarší známá literární epika na světě?', a:'Epos o Gilgamešovi', fact:'Pochází ze starověké Mezopotámie a je stará přes 4000 let.'},
      {q:'Který chemický prvek má nejvyšší atomové číslo mezi běžně se v přírodě vyskytujícími prvky?', a:'Uran (92)', fact:'Těžší prvky se v přírodě prakticky nevyskytují, vznikají až uměle.'},
      {q:'V jakém roce vstoupila v platnost první ústava Československa?', a:'1920', fact:'Nahradila provizorní uspořádání platné od vzniku státu v roce 1918.'},
      {q:'Který řecký bůh byl patronem obchodu, zlodějů i poslů?', a:'Hermés', fact:'Byl také průvodcem duší zemřelých do podsvětí.'},
      {q:'Ve které bitvě roku 1620 byla poražena česká stavovská armáda?', a:'Bitva na Bílé hoře', fact:'Následovala dlouhá rekatolizace a poněmčování českých zemí.'},
      {q:'Jak se jmenuje proces přeměny pevné látky přímo na plyn, bez kapalné fáze?', a:'Sublimace', fact:'Typickým příkladem je suchý led, tedy zmrzlý oxid uhličitý.'},
      {q:'Který anglický král podepsal Magnu Chartu?', a:'Jan Bezzemek', fact:'Stalo se tak v roce 1215 pod tlakem vzbouřených šlechticů.'},
      {q:'V kterém roce byla objevena struktura DNA?', a:'1953', fact:'Zasloužili se o to James Watson a Francis Crick, klíčová byla i práce Rosalind Franklinové.'},
      {q:'Jak se jmenuje nejstarší dochovaná divadelní hra, která se dodnes hraje?', a:'Peršané od Aischyla', fact:'Vznikla v roce 472 před naším letopočtem.'},
      {q:'Který portugalský král financoval objevné plavby, díky kterým ho nazývají "Mořeplavec"?', a:'Jindřich Mořeplavec', fact:'Sám na moře nikdy nevyplul, ale organizoval výpravy podél afrického pobřeží.'},
      {q:'V jakém roce proběhla bitva u Hastingsu, která změnila anglické dějiny?', a:'1066', fact:'Vilém Dobyvatel v ní porazil Harolda II. a stal se anglickým králem.'},
      {q:'Jak se jmenuje nejjedovatější žába na světě?', a:'Pralesnička hrozná (zlatá)', fact:'Jed jediné žáby by teoreticky dokázal zabít až 10 dospělých lidí.'},
      {q:'Který starověký astronom jako první pozoruhodně přesně spočítal obvod Země?', a:'Eratosthenés', fact:'Použil k tomu stíny ve dvou egyptských městech, přibližně kolem roku 240 př. n. l.'},
      {q:'Jak se jmenuje nejstarší řecký filozofický směr zabývající se hledáním základní látky vesmíru?', a:'Milétská škola', fact:'Jejím zakladatelem byl Thalés z Milétu, žijící v 6. století př. n. l.'},
      {q:'Který středověký český král byl i polským králem?', a:'Václav II.', fact:'Polským králem byl korunován v roce 1300.'},
      {q:'V jakém roce byla uzavřena Lublinská unie, která spojila Polsko a Litvu v jeden stát?', a:'1569', fact:'Vznikla tak Polsko-litevská unie, jeden z největších států tehdejší Evropy.'},
      {q:'Jak se jmenuje bitva z roku 1241, při které mongolská vojska poprvé napadla střední Evropu?', a:'Bitva u Lehnice', fact:'Mongolové zpustošili velkou část Polska a Slezska, než se nečekaně stáhli zpět na východ.'},
      {q:'Který astronom objevil planetu Neptun na základě matematických výpočtů, ne přímým pozorováním?', a:'Johann Galle (podle výpočtů Le Verriera)', fact:'Planeta byla objevena v roce 1846, prakticky přesně tam, kde ji výpočty předpověděly.'},
      {q:'Jak se jmenuje nejstarší dochovaný text o vojenské strategii, pocházející ze starověké Číny?', a:'Umění války od Sun Tzu', fact:'Vznikl pravděpodobně v 5. století př. n. l. a dodnes se cituje i mimo vojenství, třeba v byznysu.'},
      {q:'Jak se nazývá středověká epidemie moru, která ve 14. století zabila odhadem třetinu evropské populace?', a:'Černá smrt (dýmějový mor)', fact:'Do Evropy se dostala přes obchodní lodě z Asie kolem roku 1347.'},
      {q:'Jak se jmenovala poslední vládnoucí královna starověkého Egypta?', a:'Kleopatra VII.', fact:'Po její smrti v roce 30 př. n. l. se Egypt stal římskou provincií.'},
      {q:'Jak se jmenuje teorie, podle které byly kontinenty kdysi spojené v jeden superkontinent, než se postupně rozestoupily?', a:'Teorie kontinentálního driftu (Pangea)', fact:'Formuloval ji německý vědec Alfred Wegener v roce 1912.'},
      {q:'Jak se jmenuje nejstarší dosud fungující evropská univerzita?', a:'Univerzita v Bologni', fact:'Založena byla už v roce 1088, o více než 250 let dřív než pražská Karlova univerzita.'},
      {q:'Kdo podle legendy rozťal mečem gordický uzel a naplnil tak věštbu o ovládnutí Asie?', a:'Alexandr Veliký', fact:'Uzel byl tak zamotaný, že se ho nikomu nepodařilo rozvázat — Alexandr ho prostě přesekl.'},
      {q:'V jakém roce vypukla francouzská revoluce dobytím pevnosti Bastila?', a:'1789', fact:'Bastila sloužila hlavně jako vězení, v den dobytí v ní bylo jen pár vězňů.'},
      {q:'Který panovník nechal založit pražské Nové Město a Karlovu univerzitu ve stejném roce?', a:'Karel IV.', fact:'Obojí se událo v roce 1348, během jediného z nejvýznamnějších let českých dějin.'},
      {q:'Jak se jmenuje námořní bitva z roku 1805, ve které admirál Nelson porazil francouzsko-španělskou flotilu?', a:'Bitva u Trafalgaru', fact:'Nelson v bitvě padl, ale vítězství zajistilo Británii nadvládu na moři na celé další století.'},
      {q:'Jak se jmenuje nejstarší dochovaný řecký epos, připisovaný Homérovi a líčící trojskou válku?', a:'Ílias', fact:'Vznikla pravděpodobně v 8. století př. n. l. a patří mezi základy celé evropské literatury.'},
      {q:'Který mořeplavec ve službách Španělska připlul v roce 1492 k americkým břehům, aniž tušil, že jde o nový kontinent?', a:'Kryštof Kolumbus', fact:'Hledal západní cestu do Indie — proto se domorodým obyvatelům Ameriky dlouho říkalo "Indiáni".'},
      {q:'Jak se nazývá základní fyzikální zákon, podle kterého energie ani hmota nemohou vznikat ani zanikat, jen se přeměňovat?', a:'Zákon zachování energie', fact:'Patří mezi nejzákladnější a nejlépe ověřené zákony celé fyziky.'},
      {q:'Který hudební skladatel složil cyklus houslových koncertů Čtvero ročních období?', type:'choice', options:['Johann Sebastian Bach','Antonio Vivaldi','Georg Friedrich Händel','Joseph Haydn'], correctIndex:1, a:'B) Antonio Vivaldi', fact:'Vznikl kolem roku 1725 a patří mezi nejhranější barokní skladby vůbec.'},
      {q:'Kolik krčních obratlů má žirafa — stejně jako člověk?', type:'choice', options:['4','7','12','19'], correctIndex:1, a:'B) 7', fact:'Žirafí obratle jsou jen mnohem delší, počet je u většiny savců stejný.'},
      {q:'Jak rychle jel nejrychlejší pozemní vůz v dějinách, britské auto Thrust SSC, při rekordní jízdě v roce 1997?', a:'1227,985 km/h', fact:'Je to jediné auto v historii, které na souši prolomilo rychlost zvuku — řídil ho Andy Green, bývalý stíhací pilot RAF.', src:'https://www.guinnessworldrecords.com/world-records/land-speed-(fastest-car)', srcName:'Guinness World Records'},
      {q:'Který had je nejdelší jedovatý had světa?', a:'Král kobra (kobra královská)', fact:'Běžně měří 3 až 4 metry, rekordní zaznamenaný exemplář dosáhl 5,85 metru.', src:'https://en.wikipedia.org/wiki/King_cobra', srcName:'Wikipedia'},
      {q:'Jak se jmenuje nejvyšší most na světě, stojící ve Francii nad údolím řeky Tarn?', a:'Viadukt Millau', fact:'Jeho nejvyšší pilíř měří 343 metrů — o 23 metrů víc, než je vysoká Eiffelova věž.', src:'https://www.amusingplanet.com/2012/03/millau-viaduct-france-tallest-bridge-in.html', srcName:'Amusing Planet'},
    ],
    exp: [
      {q:'Jak se jmenoval poslední jugoslávský král před nastolením komunismu?', a:'Petr II. Karađorđević', fact:'Po válce odešel do exilu a monarchie v Jugoslávii nebyla nikdy obnovena.'},
      {q:'Který prvek má v periodické tabulce nejvyšší elektronegativitu?', a:'Fluor', fact:'Podle Paulingovy stupnice dosahuje hodnoty 3,98, nejvyšší ze všech prvků.'},
      {q:'V jakém roce byla podepsána Vídeňská smlouva, přerozdělující Evropu po napoleonských válkách?', a:'1815', fact:'Vzešla z Vídeňského kongresu, který trval přes rok.'},
      {q:'Jak se jmenuje nejmenší savec na světě podle hmotnosti?', a:'Rejsek etruský', fact:'Váží jen kolem 1,8 gramu — méně než mince.'},
      {q:'Jak se jmenuje efekt, kdy se zdá, že rotující objekt mění směr otáčení kvůli snímkové frekvenci kamery?', a:'Stroboskopický efekt (wagon-wheel effect)', fact:'Běžně ho vidíme třeba u natočených kol vozidel na videu.'},
      {q:'Který anglický matematik je považován za "otce" moderního počítače díky konceptu univerzálního stroje?', a:'Alan Turing', fact:'Jeho práce za druhé světové války pomohla prolomit německou šifru Enigma.'},
      {q:'V jakém roce vypukla husitská revoluce po pražské defenestraci?', a:'1419', fact:'Šlo o druhou pražskou defenestraci — vyhození královských úředníků z okna radnice.'},
      {q:'Jak se jmenuje nejstarší známý hudební nástroj objevený archeology?', a:'Kostěná flétna z jeskyně Hohle Fels', fact:'Je stará přibližně 40 000 let.'},
      {q:'Který císař Svaté říše římské vydal Zlatou bulu sicilskou, uznávající dědičný český královský titul?', a:'Fridrich II.', fact:'Vydal ji v roce 1212 pro Přemysla Otakara I.'},
      {q:'Jak se jmenuje jev, kdy světlo mění směr při přechodu mezi prostředími různé hustoty?', a:'Lom světla (refrakce)', fact:'Díky němu vypadá brčko ponořené ve sklenici vody jako "zalomené".'},
      {q:'Který starověký řecký stát se proslavil obranou u Thermopyl proti perské invazi?', a:'Sparta (vedená králem Leonidasem)', fact:'Bitvy roku 480 př. n. l. se podle legendy zúčastnilo 300 Sparťanů.'},
      {q:'Jak se jmenuje nejvzdálenější objekt vyrobený lidmi, který opustil sluneční soustavu?', a:'Voyager 1', fact:'Byla vypuštěna v roce 1977 a dodnes je v kontaktu se Zemí.'},
      {q:'Jak se jmenuje teorém v teorii čísel, který zůstal nedokázaný přes 350 let?', a:'Velká Fermatova věta', fact:'Vyřešil ji až Andrew Wiles, jeho důkaz zveřejnili v roce 1994.'},
      {q:'Který mořeplavec jako první doplul z Evropy do Indie po moři kolem Afriky?', a:'Vasco da Gama', fact:'Podařilo se mu to v letech 1497 až 1498.'},
      {q:'Jak se jmenuje jednotka pro měření vzdáleností ve vesmíru, založená na paralaxe hvězdy?', a:'Parsek', fact:'Jeden parsek odpovídá přibližně 3,26 světelného roku.'},
      {q:'Který byzantský císař nechal postavit chrám Hagia Sofia v Konstantinopoli?', a:'Justinián I.', fact:'Dokončen byl v roce 537 našeho letopočtu.'},
      {q:'Jak se jmenuje efekt, kdy horký vzduch nad povrchem ohýbá světlo a vytváří iluzi vodní hladiny?', a:'Fata morgana (přízemní miráž)', fact:'Vzniká kvůli rozdílné hustotě sousedních vrstev teplého vzduchu.'},
      {q:'Který mnich je považován za zakladatele moderní genetiky díky pokusům s hrachem?', a:'Gregor Mendel', fact:'Své objevy prováděl v klášterní zahradě v Brně v 19. století.'},
      {q:'Který italský renesanční sochař vytvořil sochu Davida?', a:'Michelangelo Buonarroti', fact:'Dokončil ji v roce 1504, měří přes 5 metrů na výšku.'},
      {q:'Který anglický král prohrál bitvu u Bannockburnu proti Skotům v roce 1314?', a:'Eduard II.', fact:'Vítězem bitvy byl skotský král Robert Bruce.'},
      {q:'Jak se jmenuje částice objevená v roce 2012, která uděluje hmotnost ostatním částicím?', a:'Higgsův boson', fact:'Objevena byla v urychlovači LHC v Evropské organizaci pro jaderný výzkum (CERN).'},
      {q:'Který portugalský výzkumník jako první doplul k mysu Dobré naděje na jihu Afriky?', a:'Bartolomeu Dias', fact:'Podařilo se mu to v roce 1488.'},
      {q:'Jak se jmenuje nejstarší dochovaná kompletní tištěná kniha na světě?', a:'Diamantová sútra', fact:'Pochází z Číny, konkrétně z roku 868 našeho letopočtu.'},
      {q:'Který francouzský král byl popraven gilotinou během Velké francouzské revoluce?', a:'Ludvík XVI.', fact:'Popraven byl v lednu 1793 na pařížském náměstí.'},
      {q:'Jak se jmenuje síla, kvůli které se otáčející tělesa na severní a jižní polokouli odchylují díky rotaci Země?', a:'Coriolisova síla', fact:'Ovlivňuje třeba směr otáčení hurikánů na jednotlivých polokoulích.'},
      {q:'Který řecký matematik jako první dokázal, že prvočísel je nekonečně mnoho?', a:'Eukleides', fact:'Důkaz pochází z jeho díla Základy, přibližně z roku 300 př. n. l.'},
      {q:'Jak se jmenoval poslední ruský car, popravený s rodinou v roce 1918?', a:'Mikuláš II.', fact:'Byl zastřelen bolševiky v Jekatěrinburgu i s celou svou rodinou.'},
      {q:'Který astronom pomocí dalekohledu objevil čtyři největší měsíce Jupiteru?', a:'Galileo Galilei', fact:'Objevil je v roce 1610, dnes se jim říká Galileovy měsíce.'},
      {q:'Jak se jmenuje nejstarší dosud stojící dřevěná stavba na světě?', a:'Chrám Hórjúdži v Japonsku', fact:'Část komplexu je stará přes 1300 let.'},
      {q:'Který anglický přírodovědec strávil pět let na lodi HMS Beagle, než formuloval evoluční teorii?', a:'Charles Darwin', fact:'Plavba se konala v letech 1831 až 1836.'},
      {q:'Jak se jmenuje jev, kdy dvě blízké hvězdy obíhají společné těžiště?', a:'Dvojhvězda', fact:'Odhaduje se, že víc než polovina hvězd v naší galaxii jsou dvojhvězdy nebo vícenásobné systémy.'},
      {q:'Který český král je pohřben v bazilice sv. Jiří mimo svatovítskou katedrálu?', a:'Vratislav II.', fact:'Byl prvním českým králem vůbec, korunovaným v roce 1085.'},
      {q:'Jak se jmenuje hranice kolem černé díry, odkud už nic neuteče, ani světlo?', a:'Horizont událostí', fact:'Jeho velikost přímo závisí na hmotnosti dané černé díry.'},
      {q:'Který mongolský vládce vytvořil největší souvislou pozemní říši v dějinách?', a:'Čingischán', fact:'Jeho říše na vrcholu sahala od Tichého oceánu až po východní Evropu.'},
      {q:'Který italský vynálezce je spojován s vynálezem bezdrátového telegrafu?', a:'Guglielmo Marconi', fact:'Za svůj objev dostal v roce 1909 Nobelovu cenu za fyziku.'},
      {q:'Jak se nazývá výbušný zánik masivní hvězdy na konci jejího života?', a:'Supernova', fact:'Může krátkodobě zářit jasněji než celá galaxie, ve které se nachází.'},
      {q:'Který anglický filozof formuloval myšlenku "tabula rasa" — že se člověk rodí jako nepopsaný list?', a:'John Locke', fact:'Své myšlenky publikoval koncem 17. století.'},
      {q:'Jak se jmenuje nejstarší olympijská disciplína, běhaná už na starověkých hrách?', a:'Stadion (běh na jednu délku stadionu)', fact:'Odpovídala přibližně 192 metrům.'},
      {q:'Který španělský conquistador dobyl říši Aztéků?', a:'Hernán Cortés', fact:'Stalo se tak v letech 1519 až 1521.'},
      {q:'Jak se jmenuje logaritmická škála pro měření intenzity zemětřesení?', a:'Richterova škála', fact:'Každý stupeň na stupnici znamená desetinásobně větší amplitudu otřesů.'},
      {q:'Který habsburský panovník zrušil na českém území nevolnictví?', a:'Josef II.', fact:'Učinil tak patentem vydaným v roce 1781.'},
      {q:'Který francouzský chemik a mikrobiolog vyvinul proces pasterizace a vakcínu proti vzteklině?', a:'Louis Pasteur', fact:'Jeho objevy položily základ moderní mikrobiologii.'},
      {q:'Jak se jmenuje jedna z nejstarších dochovaných map světa, vyrytá do hliněné tabulky v Mezopotámii?', a:'Babylonská mapa světa (Imago Mundi)', fact:'Je stará přibližně 2600 let.'},
      {q:'Který německý astronom formuloval tři zákony pohybu planet kolem Slunce?', a:'Johannes Kepler', fact:'Jeho zákony jako první popsaly eliptické, nikoliv kruhové dráhy planet.'},
      {q:'Jak se jmenuje teorém, podle kterého nelze uvnitř formálního systému dokázat všechny pravdivé věty?', a:'Gödelovy věty o neúplnosti', fact:'Publikoval je rakouský logik Kurt Gödel v roce 1931.'},
      {q:'Který starověký vládce nechal vybudovat Visuté zahrady, jeden ze sedmi divů světa?', a:'Nabukadnesar II. (podle tradice)', fact:'Jejich skutečná existence a přesná poloha je dodnes mezi historiky sporná.'},
      {q:'Jak se jmenuje proces, při kterém se dva atomová jádra spojí a uvolní obrovské množství energie v hvězdách?', a:'Jaderná fúze', fact:'V jádru Slunce se tak každou sekundu přemění přes 600 milionů tun vodíku na helium.'},
      {q:'Který anglický král byl zabit v bitvě u Bosworthu, čímž skončila válka růží?', a:'Richard III.', fact:'Jeho ostatky byly znovu nalezeny až v roce 2012 pod parkovištěm v Leicesteru.'},
      {q:'Jak se jmenuje nejstarší známý systém psaní na světě?', a:'Sumerské klínové písmo', fact:'Vzniklo v Mezopotámii přibližně před 5000 lety.'},
      {q:'Který řecký lékař je považován za "otce medicíny" a je po něm pojmenována lékařská přísaha?', a:'Hippokrates', fact:'Žil v 5. až 4. století př. n. l. na ostrově Kós.'},
      {q:'Která byzantská princezna a historička napsala kroniku Alexias o vládě svého otce?', a:'Anna Komnena', fact:'Je považována za jednu z prvních známých historiček na světě.'},
      {q:'Jak se jmenuje nejstarší dochovaný matematický text s přibližným odhadem čísla pí?', a:'Rhindův papyrus', fact:'Pochází ze starověkého Egypta, přibližně z roku 1650 př. n. l., a odhad pí se mýlil jen asi o 0,6 %.'},
      {q:'Který nizozemský filozof byl vyloučen ze židovské obce a napsal filozofické dílo Etika?', a:'Baruch Spinoza', fact:'Vyobcován byl v roce 1656, jeho myšlenky výrazně ovlivnily pozdější osvícenství.'},
      {q:'Jak se jmenuje jev, při kterém gravitace masivního tělesa ohýbá procházející světlo?', a:'Gravitační čočkování', fact:'Poprvé bylo potvrzeno při zatmění Slunce v roce 1919, čímž se ověřila Einsteinova teorie relativity.'},
      {q:'Který arabský učenec z 9. století je považován za zakladatele algebry a dal jméno pojmu "algoritmus"?', a:'Al-Chwárizmí', fact:'Působil v Bagdádu, centru tehdejší vědy islámského světa.'},
      {q:'Jak se jmenovala poslední havajská královna, svržená v roce 1893?', a:'Liliuokalani', fact:'Po svržení monarchie se Havaj později stala územím a nakonec i státem USA.'},
      {q:'Který chemický prvek byl objeven nejdřív ve slunečním spektru a až později nalezen na Zemi?', a:'Helium', fact:'Objeven byl při zatmění Slunce v roce 1868, jméno dostal podle řeckého boha Hélia.'},
      {q:'Jak se jmenuje bitva z roku 1071, ve které Seldžučtí Turci drtivě porazili byzantskou armádu?', a:'Bitva u Mantzikertu', fact:'Porážka vážně oslabila Byzanc a později vedla k výzvám o pomoc, které odstartovaly křížové výpravy.'},
      {q:'Jak se jmenuje nejstarší dochovaný kompletní soubor římského práva, sepsaný z příkazu byzantského císaře?', a:'Corpus Iuris Civilis (Justiniánův kodex)', fact:'Vznikl na počátku 6. století a stal se základem většiny moderních kontinentálních právních systémů.'},
      {q:'Jak se jmenuje smlouva z roku 1494, která rozdělila nově objevený svět mezi Portugalsko a Španělsko?', a:'Tordesillaská smlouva', fact:'Díky ní se dnes v Brazílii mluví portugalsky, zatímco zbytek Jižní Ameriky mluví španělsky.'},
      {q:'Jak se jmenuje starověký analogový mechanismus nalezený v moři u Řecka, který dokázal předpovídat polohy planet?', a:'Antikythérský mechanismus', fact:'Je starý víc než 2000 let a svou složitostí předběhl dobu o více než tisíc let.'},
      {q:'Který mladý francouzský matematik zemřel v souboji ve věku 20 let, ačkoliv stihl položit základy teorie grup?', a:'Évariste Galois', fact:'Noc před soubojem prý v chvatu sepsal své matematické myšlenky do dopisu příteli.'},
      {q:'Který starověký řecký vynálezce zkonstruoval první známé zařízení poháněné párou?', a:'Hérón Alexandrijský', fact:'Jeho zařízení zvané aeolipile roztáčelo páru kouli, k praktickému využití páry ale došlo až o skoro dva tisíce let později.'},
      {q:'Který hudební skladatel je autorem operního cyklu Prsten Nibelungův, trvajícího přes 15 hodin?', type:'choice', options:['Giuseppe Verdi','Richard Wagner','Giacomo Puccini','Johannes Brahms'], correctIndex:1, a:'B) Richard Wagner', fact:'Na premiéru celého cyklu v Bayreuthu v roce 1876 přijel i německý císař Vilém I.'},
      {q:'Kolik strun má tradiční japonský strunný nástroj koto?', type:'choice', options:['6','13','21','25'], correctIndex:1, a:'B) 13', fact:'Koto je drnkací nástroj podobný citeře, hraje se na něj položený vodorovně na zemi.'},
      {q:'Který organismus pokrývá největší souvislou plochu ze všech jednotlivých živých organismů na světě?', a:'Václavka (Armillaria) v Oregonu, USA', fact:'Zabírá plochu skoro 9,6 km² a odhaduje se, že je stará až 8650 let.', src:'https://www.discoverwildlife.com/plant-facts/biggest-organisms', srcName:'Discover Wildlife'},
      {q:'Jak se jmenuje nejširší vodopád na světě, ležící na řece Mekong v Laosu?', a:'Khone Phapheng (Khone Falls)', fact:'Je široký přes 10 kilometrů, i když ve výšce měří jen 15 až 21 metrů.', src:'https://en.wikipedia.org/wiki/Khone_Phapheng_Falls', srcName:'Wikipedia'},
      {q:'Kterou univerzitu uvádí Guinnessova kniha rekordů jako nejstarší nepřetržitě fungující vzdělávací instituci na světě?', a:'Univerzita Al-Karaouine ve Fezu (Maroko)', fact:'Založila ji v roce 859 žena jménem Fátima al-Fihrí jako mešitu se školou.', src:'https://en.wikipedia.org/wiki/List_of_oldest_universities_in_continuous_operation', srcName:'Wikipedia'},
      {q:'Jak se jmenuje hora, která je po započtení své podmořské části ve skutečnosti vyšší než Mount Everest?', a:'Mauna Kea na Havaji', fact:'Nad hladinou moře měří jen 4205 m, ale od podmořské paty k vrcholu je to přes 10 000 metrů.', src:'https://en.wikipedia.org/wiki/Mauna_Kea', srcName:'Wikipedia'},
      {q:'Které umělecké muzeum je podle celkové rozlohy budovy největší na světě?', a:'Louvre v Paříži', fact:'Celková plocha budovy činí 360 000 m² — je zároveň nejnavštěvovanějším muzeem světa.', src:'https://www.guinnessworldrecords.com/world-records/656406-largest-art-museum', srcName:'Guinness World Records'},
      {q:'Jak se jmenuje nejdelší most na světě, postavený v Číně pro vysokorychlostní železnici?', a:'Viadukt Tan-jang–Kchun-šan (Danyang–Kunshan Grand Bridge)', fact:'Měří 164 kilometrů a spojuje Šanghaj s Nankingem.', src:'https://www.guinnessworldrecords.com/world-records/1/longest-bridge', srcName:'Guinness World Records'},
      {q:'Který pavouk je podle hmotnosti největší na světě?', a:'Pavouk ptakožravý Goliáš (Goliath birdeater)', fact:'Může vážit přes 175 gramů — jméno "požírač ptáků" je ale trochu zavádějící, živí se hlavně hmyzem.', src:'https://www.nationalgeographic.com/animals/article/goliath-birdeater-tarantula-worlds-biggest-spider-science', srcName:'National Geographic'},
    ],
  };

  const TIER_LABELS = {leh:'Lehké', str:'Střední', tez:'Těžké', exp:'Expert'};
  const TIER_ORDER = ['leh','str','tez','exp'];
  BANK.str.push({q:'Kterou zemi reprezentuje tahle vlajka?', a:'Belgie', fact:'Belgická vlajka má svislé pruhy na rozdíl od podobné německé, která má vodorovné.', visual:{type:'flag', colors:['#2d2926','#fcd116','#ef3340']}});
  BANK.leh.push({q:'Jaké zvíře skrývá tahle emoji nápověda a jak dlouho je zimní spánek?', a:'Ježek — cca 5–6 měsíců', fact:'Během spánku mu klesne tělesná teplota skoro na teplotu okolí.', visual:{type:'emoji', value:'🦔'}});
  BANK.leh.push({q:'Kterého hrdinu skrývají tahle emoji?', a:'Spider-Man / Pavouk', fact:'Postavu vytvořili Stan Lee a Steve Ditko v roce 1962.', visual:{type:'emoji', value:'🕷️🕸️🧑'}});
  BANK.leh.push({q:'Kterou zemi reprezentuje tahle vlajka?', a:'Francie', fact:'Francouzská trikolóra vznikla během revoluce v 18. století — spojuje barvy Paříže (modrá, červená) a královskou bílou.', visual:{type:'flag', colors:['#0055a4','#ffffff','#ef4135']}});
  BANK.leh.push({q:'Který film skrývají tahle emoji?', a:'Pán prstenů', fact:'Filmová trilogie podle knih J. R. R. Tolkiena vznikla na Novém Zélandu a vyhrála dohromady 17 Oscarů.', visual:{type:'emoji', value:'🧙‍♂️💍🌋'}});
  BANK.str.push({q:'Kterou zemi reprezentuje tahle vlajka?', a:'Německo', fact:'Barvy černá-červená-zlatá pocházejí z uniforem dobrovolníků bojujících proti Napoleonovi.', visual:{type:'flag', vertical:false, colors:['#000000','#dd0000','#ffce00']}});
  BANK.str.push({q:'Kterého hrdinu skrývají tahle emoji?', a:'Batman', fact:'Postava poprvé vyšla v komiksu v roce 1939 a dodnes patří mezi nejpopulárnější superhrdiny vůbec.', visual:{type:'emoji', value:'🦇🃏🌃'}});
  BANK.str.push({q:'Jakou stavbu představuje tahle silueta — dominantu Pražského hradu?', a:'Katedrála svatého Víta', fact:'Stavba katedrály trvala s přestávkami skoro 600 let, dokončena byla až ve 20. století.', visual:{type:'svg', markup:'<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><rect x="20" y="120" width="260" height="18" rx="2"/><rect x="34" y="90" width="16" height="48"/><polygon points="34,90 50,90 42,68"/><rect x="118" y="38" width="20" height="100"/><polygon points="118,38 138,38 128,6"/><rect x="152" y="38" width="20" height="100"/><polygon points="152,38 172,38 162,6"/><rect x="250" y="95" width="16" height="43"/><polygon points="250,95 266,95 258,73"/></svg>'}});
  BANK.tez.push({q:'Kterou zemi reprezentuje tahle vlajka?', a:'Nizozemsko', fact:'Je to jedna z nejstarších trikolór na světě, používaná už od 16. století.', visual:{type:'flag', vertical:false, colors:['#ae1c28','#ffffff','#21468b']}});
  BANK.tez.push({q:'Který film skrývají tahle emoji?', a:'Ledové království (Frozen)', fact:'Film inspirovala pohádka H. C. Andersena Sněhová královna, i když příběh je nakonec úplně jiný.', visual:{type:'emoji', value:'👸❄️⛄'}});
  BANK.exp.push({q:'Kterou zemi reprezentuje tahle vlajka? (pozor, je barevně skoro stejná jako sousední Čad)', a:'Rumunsko', fact:'Rumunská a čadská vlajka mají téměř identické barvy i poměr stran — liší se jen nepatrným odstínem modré.', visual:{type:'flag', colors:['#002b7f','#fcd116','#ce1126']}});

  // ── Matematika a fyzika ──────────────────────────────────────────────────
  BANK.leh.push({q:'Kolik stupňů dává součet vnitřních úhlů v libovolném trojúhelníku v rovině?', a:'180°', fact:'Platí to pro jakýkoli trojúhelník — malý, velký, pravoúhlý i tupoúhlý.', src:'https://cs.wikipedia.org/wiki/Trojúhelník', srcName:'Wikipedia'});
  BANK.leh.push({q:'Po kterém vědci je pojmenovaná jednotka síly newton?', a:'Isaac Newton', fact:'Newton v knize Principia (1687) popsal tři základní zákony pohybu, na kterých stojí klasická mechanika.', src:'https://cs.wikipedia.org/wiki/Isaac_Newton', srcName:'Wikipedia'});
  BANK.leh.push({q:'Jak se česky tradičně říká matematické konstantě π (pí), poměru obvodu kruhu k jeho průměru?', a:'Ludolfovo číslo', fact:'Název vznikl po holandském matematikovi Ludolphu van Ceulenovi, který počátkem 17. století spočítal desítky jejích desetinných míst.', src:'https://cs.wikipedia.org/wiki/Pí', srcName:'Wikipedia'});
  BANK.leh.push({q:'Který italský vědec dal jméno jednotce elektrického napětí volt?', a:'Alessandro Volta', fact:'Volta v roce 1800 sestrojil první funkční baterii, tzv. voltův článek.', src:'https://cs.wikipedia.org/wiki/Alessandro_Volta', srcName:'Wikipedia'});
  BANK.leh.push({q:'Jak se nazývá nejmenší planeta sluneční soustavy?', a:'Merkur', fact:'Merkur je zároveň planeta nejblíže Slunci — jeden rok na ní trvá jen 88 pozemských dní.', src:'https://cs.wikipedia.org/wiki/Merkur_(planeta)', srcName:'Wikipedia'});
  BANK.str.push({type:'choice', q:'Starověcí Babyloňané a Indové znali vztah mezi stranami pravoúhlého trojúhelníku už staletí před ním — po kom je tedy věta i tak pojmenovaná?', options:['Pythagoras', 'Archimédés', 'Eukleidés', 'Thalés'], correctIndex:0, a:'Pythagoras', fact:'Řecký filozof a jeho škola vztah kolem 6. století př. n. l. jako první systematicky dokázali — proto nese jeho jméno.', src:'https://cs.wikipedia.org/wiki/Pythagorova_věta', srcName:'Wikipedia'});
  BANK.str.push({q:'Kdo publikoval obecnou teorii relativity, podle které gravitace je zakřivení časoprostoru?', a:'Albert Einstein', fact:'Teorii zveřejnil v roce 1915 — Nobelovu cenu ale paradoxně dostal za jiný objev (fotoelektrický jev).', src:'https://cs.wikipedia.org/wiki/Obecná_teorie_relativity', srcName:'Wikipedia'});
  BANK.str.push({type:'choice', q:'Za jaký objev dostal Albert Einstein Nobelovu cenu za fyziku z roku 1921 — nikoliv za teorii relativity, jak se často myslí?', options:['Fotoelektrický jev', 'Teorii relativity', 'Brownův pohyb', 'Objev elektronu'], correctIndex:0, a:'Fotoelektrický jev', fact:'Jeho vysvětlení fotoelektrického jevu z roku 1905 pomohlo položit základy kvantové mechaniky.', src:'https://cs.wikipedia.org/wiki/Albert_Einstein', srcName:'Wikipedia'});
  BANK.str.push({q:'Kolik stupňů Celsia odpovídá absolutní nule, nejnižší teoretické teplotě?', a:'−273,15 °C', fact:'Na této teplotě by se zcela zastavil tepelný pohyb částic — v praxi se jí lze jen nekonečně blížit, nikdy ji nedosáhnout.', src:'https://cs.wikipedia.org/wiki/Absolutní_nula', srcName:'Wikipedia'});
  BANK.str.push({q:'Jak se jmenuje starořecký učenec, který jako první poměrně přesně vypočítal obvod Země pomocí stínů a úhlů slunce?', a:'Eratosthenés', fact:'Žil ve 3. století př. n. l. v egyptské Alexandrii a jeho odhad se od skutečnosti lišil jen o několik procent.', src:'https://cs.wikipedia.org/wiki/Eratosthenés', srcName:'Wikipedia'});
  BANK.tez.push({q:'Který britský matematik dokázal v polovině 90. let 20. století Velkou Fermatovu větu, přes 350 let od jejího zapsání?', a:'Andrew Wiles', fact:'Fermat si v 17. století poznamenal, že má důkaz, ale nikdy ho nezveřejnil — matematiky to pak zaměstnávalo přes tři staletí.', src:'https://cs.wikipedia.org/wiki/Velká_Fermatova_věta', srcName:'Wikipedia'});
  BANK.tez.push({q:'Jak se nazývá princip kvantové mechaniky, podle kterého nelze současně libovolně přesně znát polohu i hybnost částice?', a:'Heisenbergův princip neurčitosti', fact:'Werner Heisenberg ho formuloval v roce 1927 — nejde o nedostatek přístrojů, ale o základní vlastnost přírody.', src:'https://cs.wikipedia.org/wiki/Heisenbergův_princip_neurčitosti', srcName:'Wikipedia'});
  BANK.tez.push({type:'choice', q:'Který z těchto sedmi tzv. Miléniových problémů matematiky byl jako jediný k dnešnímu dni vyřešen?', options:['Poincarého hypotéza', 'Riemannova hypotéza', 'P versus NP', 'Hodgeova domněnka'], correctIndex:0, a:'Poincarého hypotéza', fact:'Vyřešil ji ruský matematik Grigori Perelman roku 2003 — odměnu milion dolarů ale odmítl přijmout.', src:'https://cs.wikipedia.org/wiki/Miléniové_problémy', srcName:'Wikipedia'});
  BANK.exp.push({q:'Jak se jmenuje rakouský fyzik, autor myšlenkového experimentu se zavřenou krabicí a kočkou, který ilustruje paradoxy kvantové superpozice?', a:'Erwin Schrödinger', fact:'Pokus zformuloval v roce 1935 právě proto, aby ukázal, jak absurdně znějí důsledky kvantové mechaniky v makrosvětě.', src:'https://cs.wikipedia.org/wiki/Schrödingerova_kočka', srcName:'Wikipedia'});

  // Bonusové kolo "Hádej číslo" — týmy tipují číslo, vyhrává nejbližší odhad.
  // Jen ověřená, stabilní čísla (rekordy, rozměry) — žádné čerstvé roční statistiky,
  // u kterých by hrozilo, že bychom si vymysleli nepřesné číslo.
  const GUESS_BANK = [
    {q:'Kdy (přesné datum) vjela vojska Varšavské smlouvy do Československa?', inputType:'date', a:Date.UTC(1968,7,21), display:'21. srpna 1968', fact:'Invaze zastavila reformní proces Pražského jara vedený Alexandrem Dubčekem.'},
    {q:'Kdy (přesné datum) byl zavražděn český král Václav III., poslední Přemyslovec na trůně?', inputType:'date', a:Date.UTC(1306,7,4), display:'4. srpna 1306 (v Olomouci)', fact:'Jeho smrtí vymřel po meči rod Přemyslovců a uvolnil se český trůn.'},
    {q:'Kdy (přesné datum) padla Berlínská zeď?', inputType:'date', a:Date.UTC(1989,10,9), display:'9. listopadu 1989', fact:'Rozdělovala Berlín přes 28 let, od roku 1961.'},
    {q:'Kdy (přesné datum) vypukla v Československu sametová revoluce?', inputType:'date', a:Date.UTC(1989,10,17), display:'17. listopadu 1989', fact:'Spustila ji studentská demonstrace na Národní třídě v Praze, rozehnaná policií.'},
    {q:'Kolik obcí (měst, městysů a vesnic dohromady) má Česká republika?', a:6254, unit:'obcí', fact:'Česko má na svou rozlohu jedno z nejhustších sídelních uspořádání v Evropě — hodně obcí má jen pár desítek obyvatel.'},
    {q:'Kolik schodů vede od základny až na vrchol Eiffelovy věže?', a:1665, unit:'schodů', fact:'Výtahem to většina turistů ani nepozná — po schodech se běžně smí jen do druhého patra.'},
    {q:'Jak dlouhá je čínská Velká zeď i se všemi odbočkami, v kilometrech?', a:21196, unit:'km', fact:'Číslo zahrnuje i boční zdi a přírodní překážky, podle oficiálního čínského průzkumu z roku 2012.'},
    {q:'Kolik schodů vede na vrchol Petřínské rozhledny v Praze?', a:299, unit:'schodů', fact:'Rozhledna je zmenšenou kopií Eiffelovky, vysoká zhruba pětinu originálu.'},
    {q:'Kolik má aktuálně Praha obyvatel, zaokrouhleno na statisíce?', a:1300000, unit:'obyvatel', fact:'Praha patří mezi deset nejlidnatějších měst celé Evropské unie.'},
    {q:'Jak vysoká je v metrech nejvyšší hora České republiky, Sněžka?', a:1603, unit:'m n. m.', fact:'Vrchol leží přesně na česko-polské hranici a sdílí si ho obě země.'},
    {q:'Kolik miliard lidí žije aktuálně na celé planetě Zemi, zaokrouhleno?', a:8, unit:'miliard', fact:'Hranici 8 miliard lidstvo překročilo v listopadu 2022.'},
    {q:'Kolik kilometrů měří přibližně rovníkový obvod Země?', a:40075, unit:'km', fact:'Metr se původně definoval jako jedna desetimiliontina vzdálenosti od pólu k rovníku — proto to vyšlo tak kulaté.'},
    {q:'Kolik metrů měří na výšku nejvyšší budova světa, dubajský Burdž Chalífa?', a:828, unit:'m', fact:'Dokončena byla v roce 2010 a dodnes drží rekord nejvyšší stavby na světě.'},
    {q:'Kolik kilogramů váží přibližně srdce dospělé modré velryby?', a:180, unit:'kg', fact:'Je to největší srdce na světě — jeho tlukot je prý slyšet i dva kilometry daleko pod vodou.'},
    {q:'Kolik tisíc kilometrů měří dohromady všechny cévy v těle dospělého člověka?', a:100, unit:'tisíc km', fact:'To je víc než dvakrát obvod celé Země.'},
    {q:'Kolik schodů vede od základny po korunu newyorské Sochy svobody?', a:354, unit:'schodů', fact:'Odpovídá to zhruba 22 patrům běžné výškové budovy.'},
    {q:'Kolik let se odhaduje, že trvala stavba Velké pyramidy v Gíze?', a:20, unit:'let', fact:'Na stavbě pracovaly desetitisíce placených dělníků, ne otroci, jak se dřív tradovalo.'},
    {q:'Kolik kilometrů měří řeka Vltava od pramene po soutok s Labem?', a:430, unit:'km', fact:'Je to nejdelší řeka, která teče celá po území České republiky.'},
    {q:'Kolik metrů měří na výšku Petřínská rozhledna v Praze?', a:63.5, unit:'m', fact:'Je to zmenšená kopie Eiffelovy věže, postavená po vzoru pařížské výstavy roku 1889.'},
    {q:'Kolik kilogramů váží v průměru dospělý samec gorily nížinné?', a:170, unit:'kg', fact:'Navzdory své síle jsou gorily převážně mírumilovní býložravci.'},
    {q:'Kolik pozemských let trvá jeden oběh planety Neptun kolem Slunce?', a:165, unit:'let', fact:'Od objevu Neptunu v roce 1846 oběhl Slunce teprve necelé dva celé okruhy.'},
    {q:'Kolik metrů na délku měřil podle odhadů největší známý dinosaurus, Argentinosaurus?', a:35, unit:'m', fact:'Patřil mezi obří sauropody a podle odhadů mohl vážit i přes 70 tun.'},
    {q:'Kdy (přesné datum) byla podepsána americká Deklarace nezávislosti?', inputType:'date', a:Date.UTC(1776,6,4), display:'4. července 1776', fact:'Tento den se v USA dodnes slaví jako hlavní státní svátek.'},
    {q:'Kdy (přesné datum) došlo k výbuchu reaktoru v jaderné elektrárně Černobyl?', inputType:'date', a:Date.UTC(1986,3,26), display:'26. dubna 1986', fact:'Je to dosud nejhorší jaderná havárie v dějinách lidstva.'},
    {q:'Kolik kilometrů za sekundu urazí světlo ve vakuu, zaokrouhleně?', a:300000, unit:'km/s', fact:'Přesná hodnota je 299 792 458 m/s — a je to fyzikální konstanta, ne jen naměřená veličina, definuje se přes ni dnes i metr.', src:'https://cs.wikipedia.org/wiki/Rychlost_světla', srcName:'Wikipedia'},
    {q:'Na kolik desetinných míst znal Ludolph van Ceulen číslo π, když mu zasvětil většinu života (16.–17. století)?', a:35, unit:'desetinných míst', fact:'Výsledek si dal po smrti vytesat na svůj náhrobek v Leidenu.', src:'https://cs.wikipedia.org/wiki/Pí', srcName:'Wikipedia'},
    {q:'Kolik se vás dnes tady sešlo? Napište číslo.', a:null, unit:'lidí', fact:'Tuhle otázku vyhodnotí organizátor podle skutečného počtu hlav v místnosti — není to otázka z databáze faktů.', live:true},
  ];

  // Obyčejné míchání (nová hra pokaždé jinak) i seedované (pro odkaz s konkrétní sadou — stejný seed = stejné otázky pokaždé).
  function shuffle(arr){
    const a = arr.slice();
    for(let i = a.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Každá otázka má stabilní ID "tier_index" (index v BANK[tier] / GUESS_BANK) —
  // díky tomu jde přesný seznam otázek (i po ručních výměnách v náhledu) uložit
  // do odkazu jako prostý seznam ID, místo spoléhání na náhodné "seed".
  // Krátký kód pro otázku (písmeno obtížnosti + index v base36) — ať je
  // výsledné ID celého kvízu co nejkratší na zkopírování/sdílení.
  const TIER_CODE = {leh:'l', str:'s', tez:'t', exp:'e', guess:'g'};
  const CODE_TIER = {l:'leh', s:'str', t:'tez', e:'exp', g:'guess'};

  function makeId(tier, idx){ return TIER_CODE[tier] + idx.toString(36); }

  function resolveId(code){
    const tier = CODE_TIER[code[0]];
    const idx = parseInt(code.slice(1), 36);
    if(!tier || isNaN(idx)) return null;
    if(tier === 'guess'){
      const q = GUESS_BANK[idx];
      return q ? Object.assign({cat: 'Hádej číslo', tier: 'guess', type: 'guess', _id: code}, q) : null;
    }
    const q = BANK[tier] && BANK[tier][idx];
    return q ? Object.assign({cat: TIER_LABELS[tier], tier, _id: code}, q) : null;
  }

  // opts: {tiers:['leh','str',...], guessCount:number}
  function pickQuestions(n, opts){
    opts = opts || {};
    const activeTiers = (opts.tiers && opts.tiers.length) ? opts.tiers : TIER_ORDER;
    const totalAvail = activeTiers.reduce((s, t) => s + BANK[t].length, 0);
    n = Math.max(activeTiers.length, Math.min(n, totalAvail));
    const per = Math.floor(n / activeTiers.length);
    const counts = {};
    activeTiers.forEach(t => counts[t] = per);
    let remainder = n - per * activeTiers.length;
    for(const t of activeTiers){
      if(remainder <= 0) break;
      counts[t]++; remainder--;
    }
    let out = [];
    TIER_ORDER.filter(t => activeTiers.includes(t)).forEach(t => {
      const order = shuffle(BANK[t].map((_, idx) => idx)).slice(0, Math.min(counts[t], BANK[t].length));
      order.forEach(idx => out.push(Object.assign({cat: TIER_LABELS[t], tier: t, _id: makeId(t, idx)}, BANK[t][idx])));
    });
    const guessCount = Math.min(opts.guessCount != null ? opts.guessCount : 6, GUESS_BANK.length);
    if(guessCount > 0){
      const order = shuffle(GUESS_BANK.map((_, idx) => idx)).slice(0, guessCount);
      order.forEach(idx => out.push(Object.assign({cat: 'Hádej číslo', tier: 'guess', type: 'guess', _id: makeId('guess', idx)}, GUESS_BANK[idx])));
    }
    return out;
  }

  function swapQuestion(list, rowIndex){
    const q = list[rowIndex];
    const pool = q.tier === 'guess' ? GUESS_BANK : BANK[q.tier];
    const usedIds = new Set(list.map(x => x._id));
    const candidates = pool.map((_, idx) => idx).filter(idx => !usedIds.has(makeId(q.tier, idx)));
    if(!candidates.length) return list; // nic jiného k výměně není
    const idx = candidates[Math.floor(Math.random() * candidates.length)];
    const fresh = q.tier === 'guess'
      ? Object.assign({cat: 'Hádej číslo', tier: 'guess', type: 'guess', _id: makeId('guess', idx)}, GUESS_BANK[idx])
      : Object.assign({cat: TIER_LABELS[q.tier], tier: q.tier, _id: makeId(q.tier, idx)}, BANK[q.tier][idx]);
    const next = list.slice();
    next[rowIndex] = fresh;
    return next;
  }
