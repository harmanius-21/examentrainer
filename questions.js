const QUESTIONS = [
[
  {
    "answers": [
      "Monarchie"
    ],
    "question": "een staat met een koning of koningin als staatshoofd."
  },
  {
    "answers": [
      "Republiek"
    ],
    "question": "een staat zonder vorst, vaak met een gekozen staatshoofd."
  },
  {
    "answers": [
      "Democratie"
    ],
    "question": "Systeem waarbij door verkiezingen het bestuur wordt gekozen"
  },
  {
    "answers": [
      "Dictatuur"
    ],
    "question": "Systeem waarbij slechts één iemand of een kjleine groep de macht heeft"
  },
  {
    "answers": [
      "Grondwet"
    ],
    "question": "Ook wel constitutie genoemd, bevat de rechten en plichten van burgers en overheid"
  },
  {
    "answers": [
      "Constitutie"
    ],
    "question": "Ander woord voor grondwet"
  },
  {
    "answers": [
      "Trias Politica"
    ],
    "question": "Scheiding van de drie machten"
  },
  {
    "answers": [
      "Uitvoerende",
      "Uitvoerende macht"
    ],
    "question": "Andere macht dan wetgevend en rechterlijk in de Trias Politica: in Nederland ligt deze macht bij de ministers"
  },
  {
    "answers": [
      "Rechters"
    ],
    "question": "Zijn in een rechtsstaat onafhankelijk"
  },
  {
    "answers": [
      "Wetgevende",
      "Wetgevende macht"
    ],
    "question": "Macht die in Nederland in handen is van het volk middels een gekozen parlement"
  },
  {
    "answers": [
      "Controlerende"
    ],
    "question": "Macht, buiten de Tiras Politica die ons parlement ook heeft"
  },
  {
    "answers": [
      "Initiatief",
      "Recht van initiatief"
    ],
    "question": "Recht van Tweede Kamer om met een wetsvoorstel te komen"
  },
  {
    "answers": [
      "Amendement",
      "Recht van amendement"
    ],
    "question": "Recht van Tweede Kamer om een wetsvoorstel te wijzigen"
  },
  {
    "answers": [
      "Interpellatie",
      "Recht van interpellatie"
    ],
    "question": "Recht om vragen te stellen van beide Kamers aan ministers"
  },
  {
    "answers": [
      "Budget",
      "Recht van budget",
      "budgetrecht"
    ],
    "question": "Recht om uitgaven in inkomsten van de staat te controleren, beide kamers"
  },
  {
    "answers": [
      "Recht van enquête",
      "Enquête"
    ],
    "question": "Recht om een onderzoek in te stellen, beide kamers"
  },
  {
    "answers": [
      "Regering"
    ],
    "question": "Zo worden de koning en de ministers samen genoemd"
  },
  {
    "answers": [
      "Willem II"
    ],
    "question": "Door deze koning werd in 1848 aangedrongen op een grondwetsherziening"
  },
  {
    "answers": [
      "Willem III"
    ],
    "question": "Deze koning kwam in conflict met het parlement over Luxemburg"
  },
  {
    "answers": [
      "Wilhelmina"
    ],
    "question": "Eerste Nederlandse koningin, sprak onder andere in oorlogstijd vanuit London via de radio"
  },
  {
    "answers": [
      "Juliana"
    ],
    "question": "Tweede koninging van Nederland, oma van Willem-Alexander"
  },
  {
    "answers": [
      "Beatrix"
    ],
    "question": "Werd in 1980 koningin van Nederland totdat haar zoon haar opvolgde"
  },
  {
    "answers": [
      "Willem-Alexander"
    ],
    "question": "Eerste mannelijke staatshoofd sinds Willem III"
  },
  {
    "answers": [
      "Coalitie",
      "Coalitiepartijen"
    ],
    "question": "Partijen die in de Tweede Kamer samenwerken en de ministers leveren"
  },
  {
    "answers": [
      "Oppositie",
      "Oppostitiepartijen"
    ],
    "question": "Partijen die geen ministers leveren voor de regering"
  },
  {
    "answers": [
      "Verantwoordelijkheid",
      "Minsteriële verantwoordelijkheid"
    ],
    "question": "Na 1848 kregen de ministers dit, waarna ze hun beleid aan het parlement moesten uitleggen"
  },
  {
    "answers": [
      "Vrijheid van godsdienst",
      "Vrijheid van meningsuiting"
    ],
    "question": "Klassiek grondrecht van voor 1848"
  },
  {
    "answers": [
      "Vrijheid van drukpers",
      "persvrijheid"
    ],
    "question": "Klassiek grondrecht uit 1848 die uitgeven en inhoud van o.a. kranten en boeken niet beperkt."
  },
  {
    "answers": [
      "Vrijheid van vereniging en vergadering"
    ],
    "question": "Klassiek grondrecht uit 1848 waardoor groepen politieke partijen konden oprichten"
  },
  {
    "answers": [
      "Vrijheid van onderwijs"
    ],
    "question": "Klassiek grondrecht uit 1848 die groepen toestond om eigen scholen te stichten."
  },
  {
    "answers": [
      "Onschendbaar",
      "Onschendbaarheid"
    ],
    "question": "Als een koning niet meer zelf verantwoordelijk is"
  },
  {
    "answers": [
      "Ministers"
    ],
    "question": "Moesten na 1848 verantwoording afleggen aan het parlement"
  },
  {
    "answers": [
      "Censuskiesrecht"
    ],
    "question": "Als mensen alleen mogen stemmen als zij een bepaald bedrag aan belasting betalen"
  },
  {
    "answers": [
      "Liberalen"
    ],
    "question": "Kregen door het censuskiesrecht de meeste stemmen bij verkiezingen"
  },
  {
    "answers": [
      "Eerste Kamer"
    ],
    "question": "Deel van parlement wat door provinciale staten werd gekozen vanaf 1848"
  },
  {
    "answers": [
      "Indirect",
      "Indirecte"
    ],
    "question": "Verkiezingen die via de gekozen provinciale staten lopen noem je zo."
  },
  {
    "answers": [
      "Luxemburg"
    ],
    "question": "Omdat de koning dit gebied wou verkopen ontstond er een kwestie met het parlement"
  },
  {
    "answers": [
      "Parlement",
      "Tweede Kamer",
      "Kamer",
      "het volk"
    ],
    "question": "Willem III werd na de Luxemburgse kwestie duidelijk dat zij nu de macht hadden"
  },
  {
    "answers": [
      "Industrialisatie"
    ],
    "question": "Door deze sociaal-economische verandering in de negentiende eeuw groeiden steden"
  },
  {
    "answers": [
      "Urbanisatie",
      "verstedelijking"
    ],
    "question": "Als steeds meer mensen in steden gaan wonen"
  },
  {
    "answers": [
      "Sociale kwestie"
    ],
    "question": "Benaming voor het maatschappelijk probleem dat er in de 19de eeuw veel armoede was door slecht omstandigheden"
  },
  {
    "answers": [
      "Armenfonds"
    ],
    "question": "Enige mogelijkheid naast liefdadigheid om geholpen te worden bij armoede voor komst van sociale wetten"
  },
  {
    "answers": [
      "Van Houten",
      "Samuel van Houten"
    ],
    "question": "Bedacht eerste wet die werk door jonge kinderen in fabrieken verbood"
  },
  {
    "answers": [
      "Kinderwet",
      "Kinderwetje"
    ],
    "question": "Wet bedacht door van Houten die arbeid door kinderen onder 12 in fabrieken verbood"
  },
  {
    "answers": [
      "Woningwet"
    ],
    "question": "Wet die de kwaliteit van huizen moest verbeteren"
  },
  {
    "answers": [
      "Ongevallenwet"
    ],
    "question": "Wet die een uitkering regelde voor mensen die een ongeluk op hun werk kregen"
  },
  {
    "answers": [
      "Liberalisme"
    ],
    "question": "Politiek stroming die voor vrijheid en zo min mogelijk overheidsbemoeienis is"
  },
  {
    "answers": [
      "Liberale Unie"
    ],
    "question": "Eerste politieke partij van de liberalen"
  },
  {
    "answers": [
      "Rijken",
      "Rijke burgers",
      "Rijke mensen"
    ],
    "question": "Stemden vooral op liberalen"
  },
  {
    "answers": [
      "Socialisme"
    ],
    "question": "Politieke stroming die voor gelijkheid is en vindt dat de overheid met wetgeving moet komen"
  },
  {
    "answers": [
      "Arbeiders"
    ],
    "question": "Zij stemmen vooral op socialisten"
  },
  {
    "answers": [
      "SDAP",
      "Sociaal-Democratische Arbeiderspartij"
    ],
    "question": "Politieke partij van de sociaal-democraten"
  },
  {
    "answers": [
      "Troelstra",
      "Piter Jelles Troelstra",
      "Pieter Jelles Troelstra"
    ],
    "question": "Leider van de SDAP"
  },
  {
    "answers": [
      "Revolutie"
    ],
    "question": "In 1918 riep Troelstra dit uit"
  },
  {
    "answers": [
      "Vergissing"
    ],
    "question": "Zo werd de revolutiepoging van Troelstra genoemd"
  },
  {
    "answers": [
      "Kleine Luyden"
    ],
    "question": "Benaming van de aanhangers van Kuyper en de protestanten"
  },
  {
    "answers": [
      "Protestanten"
    ],
    "question": "Christelijke groep die in Nederland in de meerderheid is"
  },
  {
    "answers": [
      "Kuypers",
      "Kuijpers",
      "Abraham Kuypers",
      "Abraham Kuijpers"
    ],
    "question": "Leider van de ARP"
  },
  {
    "answers": [
      "ARP",
      "Antirevolutionaire Partij"
    ],
    "question": "Politieke partij van de protestanten"
  },
  {
    "answers": [
      "RKSP",
      "Rooms-Katholieke Staatspartij"
    ],
    "question": "Politieke partij va de katholieken"
  },
  {
    "answers": [
      "Schaepman",
      "Herman Schaepman"
    ],
    "question": "Leider van de RKSP"
  },
  {
    "answers": [
      "Katholieken"
    ],
    "question": "Christelijke groep die in streed voor emancipatie ten opzichte van protestanten"
  },
  {
    "answers": [
      "Confessionelen"
    ],
    "question": "Andere benaming voor Christen-Democraten"
  },
  {
    "answers": [
      "Verzuiling"
    ],
    "question": "Maatschappelijk verschijnsel die ontstond door de vrijheid van vergadering en vereniging"
  },
  {
    "answers": [
      "Vakbond",
      "Vakbonden"
    ],
    "question": "Verenigingen van arbeiders"
  },
  {
    "answers": [
      "Bijbel",
      "Geloof"
    ],
    "question": "Dit moest volgens confessionelen een belangrijke rol spelen in de politiek"
  },
  {
    "answers": [
      "Schoolstrijd"
    ],
    "question": "Gevecht, streven, van confessionelen om hun scholen betaald te krijgen"
  },
  {
    "answers": [
      "Bijzonder",
      "Bijzonder onderwijs"
    ],
    "question": "Benaming van Christelijk Onderwijs"
  },
  {
    "answers": [
      "Rooms"
    ],
    "question": "Waar staat de R voor in de afkorting RK."
  },
  {
    "answers": [
      "Feministen"
    ],
    "question": "Mensen die streven naar emancipatie van vrouwen"
  },
  {
    "answers": [
      "Onderwijs",
      "Hoger onderwijs",
      "Universiteiten"
    ],
    "question": "Aletta Jacobs wou dat vrouwen toegang kregen tot:"
  },
  {
    "answers": [
      "VVVK",
      "VVV"
    ],
    "question": "Organisatie die streed voor vrouwenemancipatie (afkorting)"
  },
  {
    "answers": [
      "Drucker",
      "Wilhelmina Drucker"
    ],
    "question": "Medestrijder van Jacobs voor vrouwenrechten"
  },
  {
    "answers": [
      "Aletta Jacobs"
    ],
    "question": "Vrouwelijke arts en voorvechtster voor vrouwenrechten"
  },
  {
    "answers": [
      "Actief kiesrecht",
      "Actief"
    ],
    "question": "Als mensen het recht hebben om te mogen stemmen"
  },
  {
    "answers": [
      "Passief kiesrecht",
      "Passief"
    ],
    "question": "Als mensen zich verkiesbaar kunnen stellen"
  },
  {
    "answers": [
      "Passief kiesrecht",
      "Passief"
    ],
    "question": "Dit kregen vrouwen bij de pacificatie van 1917"
  },
  {
    "answers": [
      "Financiële gelijkstelling"
    ],
    "question": "Dit gebeurde met het bijzonder onderwijs bij de pacificatie van 1917"
  },
  {
    "answers": [
      "Algemeen Kiesrecht"
    ],
    "question": "Dit kregen mannen bij de pacificatie van 1917"
  },
  {
    "answers": [
      "Caoutchouc",
      "Caoutchoucartikel"
    ],
    "question": "Grondwetaanpassing in 1887 die ervoor zorgde dat \"geschikte mannen\" mochten stemmen"
  },
  {
    "answers": [
      "Districtenstelsel"
    ],
    "question": "Als er gestemd mag worden per gebied op één lokale kamerlid"
  },
  {
    "answers": [
      "Evenredige vertegenwoordiging"
    ],
    "question": "Systeem waarbij het aantal zetels in de kamer wordt bepaald door het totaal aantal stemmen"
  },
  {
    "answers": [
      "Overheid",
      "de overheid",
      "staat",
      "de staat"
    ],
    "question": "Tegen diens macht beschermen klassieke grondrechten jou"
  },
  {
    "answers": [
      "Koning"
    ],
    "question": "Moet naast de ministers nieuwe wetten ondertekenen"
  },
  {
    "answers": [
      "Populisme"
    ],
    "question": "Politieke stroming die in de 21ste eeuw in Nederland opkwam"
  },
  {
    "answers": [
      "Fortuyn",
      "Pim Fortuyn"
    ],
    "question": "Populistische politicus die in 2002 werd vermoord"
  },
  {
    "answers": [
      "Sociale grondrechten",
      "Sociale"
    ],
    "question": "Dit type grondrechten bieden bescherming dóór de overheid sinds 1983"
  }
]
];
