const QUESTIONS = [
  {
    "answers": [
      "Monarchie"
    ],
    "question": "een staat met een koning of koningin als staatshoofd.",
    "explanation": "Een monarchie is een staatsvorm waarbij een koning of koningin het staatshoofd is.\nIn Nederland is de koning het staatshoofd en heeft hij vooral een ceremoniële en constitutionele rol.\nDe koning wordt niet door de bevolking gekozen.\nNederland is een constitutionele monarchie: de macht van de koning is beperkt door de Grondwet.\nDe ministers zijn politiek verantwoordelijk voor het beleid van de regering."
  },
  {
    "answers": [
      "Republiek"
    ],
    "question": "een staat zonder vorst, vaak met een gekozen staatshoofd.",
    "explanation": "Een republiek is een staatsvorm zonder koning of koningin als staatshoofd.\nHet staatshoofd is meestal een president.\nEen president kan rechtstreeks door de bevolking of door een parlement worden gekozen.\nIn een republiek kan het staatshoofd verschillende bevoegdheden hebben.\nNederland is geen republiek, maar een constitutionele monarchie."
  },
  {
    "answers": [
      "Democratie"
    ],
    "question": "Systeem waarbij door verkiezingen het bestuur wordt gekozen",
    "explanation": "Een democratie is een staatsvorm waarin burgers invloed hebben op het bestuur.\nBurgers kiezen bij verkiezingen vertegenwoordigers die namens hen beslissingen nemen.\nIn Nederland kiezen burgers onder andere de Tweede Kamer en gemeenteraden.\nEen democratie beschermt ook grondrechten en politieke vrijheid.\nDe meerderheid beslist, maar de rechten van minderheden moeten worden gerespecteerd."
  },
  {
    "answers": [
      "Dictatuur"
    ],
    "question": "Systeem waarbij slechts één iemand of een kjleine groep de macht heeft",
    "explanation": "Een dictatuur is een staatsvorm waarin de macht bij één persoon of een kleine groep ligt.\nBurgers hebben weinig of geen invloed op het bestuur.\nVrije verkiezingen ontbreken meestal of zijn niet eerlijk.\nOok vrijheid van meningsuiting en persvrijheid kunnen sterk worden beperkt.\nTegenstanders van de machthebbers kunnen worden vervolgd of opgesloten."
  },
  {
    "answers": [
      "Grondwet"
    ],
    "question": "Ook wel constitutie genoemd, bevat de rechten en plichten van burgers en overheid",
    "explanation": "De Grondwet is de belangrijkste wet van Nederland.\nHierin staan de belangrijkste regels voor de inrichting van de Nederlandse staat.\nOok staan er belangrijke grondrechten van burgers in.\nDe Grondwet bepaalt onder andere de positie van de koning, ministers en het parlement."
  },
  {
    "answers": [
      "Constitutie"
    ],
    "question": "Ander woord voor grondwet",
    "explanation": "Constitutie is een ander woord voor de Grondwet en de regels over de inrichting van een staat.\nIn Nederland wordt met constitutie meestal de Grondwet bedoeld.\nDaarin staan regels over de regering, het parlement en andere staatsorganen.\nOok bevat de Grondwet belangrijke grondrechten.\nDe constitutie bepaalt daarmee belangrijke grenzen aan de macht van de overheid."
  },
  {
    "answers": [
      "Trias Politica"
    ],
    "question": "Scheiding van de drie machten",
    "explanation": "De Trias Politica is het idee van de scheiding van de staatsmacht in drie machten.\nDe wetgevende macht maakt wetten.\nDe uitvoerende macht voert wetten en beleid uit.\nDe rechterlijke macht spreekt recht en controleert of wetten worden nageleefd.\nDoor de machten te verdelen wordt voorkomen dat alle macht bij één persoon of groep terechtkomt."
  },
  {
    "answers": [
      "Uitvoerende",
      "Uitvoerende macht"
    ],
    "question": "Andere macht dan wetgevend en rechterlijk in de Trias Politica: in Nederland ligt deze macht bij de ministers",
    "explanation": "De uitvoerende macht zorgt ervoor dat wetten en besluiten worden uitgevoerd.\nIn Nederland ligt deze taak vooral bij de regering en de ministers.\nMinisters maken beleid en geven leiding aan hun ministerie.\nAmbtenaren voeren veel van dat beleid in de praktijk uit.\nHet parlement controleert de ministers op hun beleid en handelen."
  },
  {
    "answers": [
      "Rechters"
    ],
    "question": "Zijn in een rechtsstaat onafhankelijk",
    "explanation": "Rechters behoren tot de rechterlijke macht.\nZij beoordelen rechtszaken en beslissen of iemand volgens de wet heeft gehandeld.\nEen rechter moet onafhankelijk kunnen oordelen.\nDat betekent dat politici of andere personen niet mogen bepalen hoe een rechter een zaak beslist.\nOnafhankelijke rechtspraak is een belangrijk onderdeel van de rechtsstaat."
  },
  {
    "answers": [
      "Wetgevende",
      "Wetgevende macht"
    ],
    "question": "Macht die in Nederland in handen is van het volk middels een gekozen parlement",
    "explanation": "De wetgevende macht houdt zich bezig met het maken en vaststellen van wetten.\nIn Nederland spelen de regering en het parlement samen een belangrijke rol bij wetgeving.\nHet parlement bestaat uit de Eerste en Tweede Kamer.\nDe Tweede Kamer kan ook zelf een wetsvoorstel indienen.\nDe wetgevende macht wordt in een democratie indirect door de kiezers beïnvloed."
  },
  {
    "answers": [
      "Controlerende"
    ],
    "question": "Macht, buiten de Trias Politica die ons parlement ook heeft",
    "explanation": "Het parlement heeft naast het maken van wetten ook een controlerende taak.\nKamerleden controleren of ministers hun werk goed uitvoeren.\nZij kunnen bijvoorbeeld vragen stellen, een debat aanvragen of een onderzoek instellen.\nDe Tweede Kamer heeft hiervoor verschillende rechten, zoals het recht van enquête.\nZo wordt voorkomen dat ministers onbeperkt hun gang kunnen gaan."
  },
  {
    "answers": [
      "Initiatief",
      "Recht van initiatief"
    ],
    "question": "Recht van Tweede Kamer om met een wetsvoorstel te komen",
    "explanation": "Het recht van initiatief geeft de Tweede Kamer de mogelijkheid zelf een wetsvoorstel in te dienen.\nNormaal gesproken kunnen wetsvoorstellen ook vanuit de regering komen.\nEen initiatiefwetsvoorstel wordt door één of meer Tweede Kamerleden opgesteld.\nDe Tweede Kamer bespreekt en stemt over het voorstel.\nDaarna moet ook de Eerste Kamer het voorstel goedkeuren voordat het wet wordt."
  },
  {
    "answers": [
      "Amendement",
      "Recht van amendement"
    ],
    "question": "Recht van Tweede Kamer om een wetsvoorstel te wijzigen",
    "explanation": "Het recht van amendement geeft de Tweede Kamer het recht om een wetsvoorstel te veranderen.\nKamerleden kunnen bijvoorbeeld een artikel aanpassen, toevoegen of schrappen.\nDe Tweede Kamer stemt vervolgens over het gewijzigde voorstel.\nDe Eerste Kamer heeft geen recht van amendement.\nDe Eerste Kamer kan het wetsvoorstel alleen aannemen of verwerpen."
  },
  {
    "answers": [
      "Interpellatie",
      "Recht van interpellatie"
    ],
    "question": "Recht om vragen te stellen van beide Kamers aan ministers",
    "explanation": "Het recht van interpellatie geeft Kamerleden de mogelijkheid een minister naar de Kamer te roepen.\nDe minister moet dan uitleg geven over een bepaald onderwerp of beleid.\nHet recht kan worden gebruikt als Kamerleden snel politieke verantwoording willen.\nZowel de Eerste als de Tweede Kamer kan een interpellatie houden.\nHet is een belangrijk middel om de regering te controleren."
  },
  {
    "answers": [
      "Budget",
      "Recht van budget",
      "budgetrecht"
    ],
    "question": "Recht om uitgaven in inkomsten van de staat te controleren, beide kamers",
    "explanation": "Het budgetrecht betekent dat het parlement controle heeft over de inkomsten en uitgaven van de overheid.\nDe regering mag niet zomaar al het overheidsgeld uitgeven.\nDe begrotingen van ministeries worden door het parlement besproken en goedgekeurd.\nHiermee kunnen Kamerleden invloed uitoefenen op het beleid.\nHet budgetrecht is daarom een belangrijk onderdeel van de parlementaire controle."
  },
  {
    "answers": [
      "Recht van enquête",
      "Enquête"
    ],
    "question": "Recht om een onderzoek in te stellen, beide kamers",
    "explanation": "Het recht van enquête geeft een Kamer de mogelijkheid een uitgebreid parlementair onderzoek te houden.\nZo'n onderzoek kan worden ingesteld wanneer er grote vragen zijn over het handelen van de overheid.\nGetuigen en betrokkenen kunnen onder ede worden gehoord.\nDe enquête kan duidelijk maken wat er is gebeurd en wie verantwoordelijk was.\nHet is een zwaar middel waarmee het parlement de regering kan controleren."
  },
  {
    "answers": [
      "Regering"
    ],
    "question": "Zo worden de koning en de ministers samen genoemd",
    "explanation": "De regering bestaat uit de koning en alle ministers.\nStaatssecretarissen maken geen deel uit van de regering.\nDe regering houdt zich bezig met het bestuur van het land.\nMinisters zijn verantwoordelijk voor het beleid en leggen daarover verantwoording af aan het parlement.\nDe koning is volgens de Grondwet onschendbaar en ministers zijn politiek verantwoordelijk."
  },
  {
    "answers": [
      "Willem II"
    ],
    "question": "Door deze koning werd in 1848 aangedrongen op een grondwetsherziening",
    "explanation": "Willem II was koning van Nederland van 1840 tot 1849.\nIn 1848 vonden in Europa veel revoluties plaats, waardoor ook in Nederland onrust ontstond.\nWillem II vreesde dat een revolutie ook Nederland zou bereiken.\nDaarom stemde hij in met een grote verandering van de Grondwet.\nThorbecke kreeg de opdracht deze grondwetsherziening uit te werken."
  },
  {
    "answers": [
      "Willem III"
    ],
    "question": "Deze koning kwam in conflict met het parlement over Luxemburg",
    "explanation": "Willem III was koning van Nederland van 1849 tot 1890.\nHij had regelmatig moeite met de groeiende macht van het parlement.\nEen belangrijk conflict ging over Luxemburg.\nWillem III wilde Luxemburg verkopen, maar daarvoor was steun van  de Tweede Kamer nodig. De kwestie liet zien dat de koning steeds minder zelfstandig kon regeren."
  },
  {
    "answers": [
      "Wilhelmina"
    ],
    "question": "Eerste Nederlandse koningin, sprak onder andere in oorlogstijd vanuit London via de radio",
    "explanation": "Wilhelmina was koningin van Nederland van 1890 tot 1948.\nTijdens de Tweede Wereldoorlog verbleef zij in Londen nadat Nederland was bezet.\nVanuit Londen sprak zij via Radio Oranje het Nederlandse volk toe.\nDaarmee werd zij een belangrijk symbool van het Nederlandse verzet.\nEnkele jaren na de oorlog werd zij opgevolgd door haar dochter Juliana."
  },
  {
    "answers": [
      "Juliana"
    ],
    "question": "Tweede koningin van Nederland, oma van Willem-Alexander",
    "explanation": "Juliana was koningin van Nederland van 1948 tot 1980.\nZij was de dochter van koningin Wilhelmina.\nJuliana stond bekend om haar toegankelijke en betrokken manier van optreden.\nIn 1980 deed zij afstand van de troon.\nHaar dochter Beatrix volgde haar als koningin op."
  },
  {
    "answers": [
      "Beatrix"
    ],
    "question": "Werd in 1980 koningin van Nederland totdat haar oudste zoon haar opvolgden 2013",
    "explanation": "Beatrix was koningin van Nederland van 1980 tot 2013.\nZij was de dochter van koningin Juliana en prins Bernhard.\nTijdens haar regering vervulde zij vooral een representatieve en constitutionele rol.\nIn 2013 deed zij afstand van de troon.\nHaar zoon Willem-Alexander werd daarna koning."
  },
  {
    "answers": [
      "Willem-Alexander",
      "Willem Alexander"
    ],
    "question": "Eerste mannelijke staatshoofd sinds Willem III",
    "explanation": "Willem-Alexander werd op 30 april 2013 koning van Nederland.\nHij is de zoon van koningin Beatrix en prins Claus.\nHij is het eerste mannelijke Nederlandse staatshoofd sinds koning Willem III.\nAls koning ondertekent hij samen met ministers wetten en besluiten.\nDe ministers zijn verantwoordelijk voor het politieke handelen van de regering."
  },
  {
    "answers": [
      "Coalitie",
      "Coalitiepartijen"
    ],
    "question": "Partijen die in de Tweede Kamer samenwerken en de ministers leveren",
    "explanation": "Een coalitie is een samenwerking van politieke partijen die samen een regering vormen.\nNa verkiezingen zoeken partijen naar een meerderheid in de Tweede Kamer.\nDe partijen die deelnemen aan de regering leveren meestal ministers en staatssecretarissen.\nZij maken afspraken over het beleid in een regeerakkoord.\nPartijen die niet deelnemen aan de regering vormen de oppositie."
  },
  {
    "answers": [
      "Oppositie",
      "Oppostitiepartijen"
    ],
    "question": "Partijen die geen ministers leveren voor de regering",
    "explanation": "Oppositiepartijen zijn politieke partijen die niet deelnemen aan de regering.\nZij leveren dus geen ministers aan het kabinet.\nOppositiepartijen kunnen voorstellen van de regering steunen of juist bekritiseren.\nZe controleren de ministers namens de kiezers.\nOppositie voeren is daarom een belangrijk onderdeel van een democratie."
  },
  {
    "answers": [
      "Verantwoordelijkheid",
      "Minsteriële verantwoordelijkheid"
    ],
    "question": "Na 1848 kregen de ministers dit, waarna ze hun beleid aan het parlement moesten uitleggen",
    "explanation": "Ministeriële verantwoordelijkheid betekent dat ministers politiek verantwoordelijk zijn voor het beleid van de regering.\nSinds de grondwetsherziening van 1848 is de koning niet politiek verantwoordelijk.\nMinisters moeten uitleg geven aan het parlement over hun beleid en besluiten.\nHet parlement kan een minister ter verantwoording roepen.\nDit versterkte de macht van het parlement en de democratische controle."
  },
  {
    "answers": [
      "Vrijheid van godsdienst",
      "Vrijheid van meningsuiting"
    ],
    "question": "Klassiek grondrecht van voor 1848",
    "explanation": "Vrijheid van godsdienst betekent dat mensen zelf hun geloof mogen kiezen of geen geloof mogen hebben.\nVrijheid van meningsuiting betekent dat mensen hun mening mogen uiten.\nDeze vrijheden zijn belangrijke grondrechten.\nZe beschermen burgers tegen te veel bemoeienis van de overheid.\nDe vrijheid is niet onbeperkt: de wet stelt grenzen, bijvoorbeeld bij discriminatie en bedreiging."
  },
  {
    "answers": [
      "Vrijheid van drukpers",
      "persvrijheid"
    ],
    "question": "Klassiek grondrecht uit 1848 die uitgeven en inhoud van o.a. kranten en boeken niet beperkt.",
    "explanation": "Persvrijheid betekent dat journalisten en media in principe vrij zijn om nieuws en meningen te publiceren.\nDe overheid mag vooraf niet zomaar bepalen wat er in een krant of boek mag staan.\nDit grondrecht is belangrijk om de overheid kritisch te kunnen volgen.\nEen vrije pers helpt burgers om verschillende meningen en informatie te krijgen.\nOok persvrijheid kent wettelijke grenzen."
  },
  {
    "answers": [
      "Vrijheid van vereniging en vergadering"
    ],
    "question": "Klassiek grondrecht uit 1848 waardoor groepen politieke partijen konden oprichten",
    "explanation": "Dit grondrecht geeft burgers het recht om samen te komen en organisaties op te richten.\nMensen kunnen hierdoor bijvoorbeeld politieke partijen, vakbonden of verenigingen vormen.\nHet recht is belangrijk voor politieke en maatschappelijke deelname.\nBurgers kunnen zich samen organiseren om hun belangen te verdedigen.\nDe overheid mag dit recht alleen onder wettelijke voorwaarden beperken."
  },
  {
    "answers": [
      "Vrijheid van onderwijs"
    ],
    "question": "Klassiek grondrecht uit 1848 die groepen toestond om eigen scholen te stichten.",
    "explanation": "De vrijheid van onderwijs geeft mensen en organisaties het recht om scholen op te richten.\nNaast openbare scholen bestaan daarom bijzondere scholen, bijvoorbeeld christelijke scholen.\nOuders kunnen daardoor kiezen voor onderwijs dat past bij hun overtuiging.\nDe overheid stelt wel eisen aan de kwaliteit van het onderwijs.\nDe vrijheid van onderwijs speelde een belangrijke rol in de schoolstrijd."
  },
  {
    "answers": [
      "Onschendbaar",
      "Onschendbaarheid"
    ],
    "question": "Als een koning niet meer zelf verantwoordelijk is",
    "explanation": "De onschendbaarheid van de koning betekent dat de koning niet politiek verantwoordelijk is voor zijn handelen.\nMinisters zijn daarvoor verantwoordelijk en moeten verantwoording afleggen aan het parlement.\nDe koning kan daardoor niet politiek ter verantwoording worden geroepen.\nDe ministeriële verantwoordelijkheid vormt de andere kant van deze regel.\nDeze afspraken werden belangrijk bij de grondwetsherziening van 1848."
  },
  {
    "answers": [
      "Ministers"
    ],
    "question": "Moesten na 1848 verantwoording afleggen aan het parlement",
    "explanation": "Ministers zijn verantwoordelijk voor een bepaald beleidsterrein, zoals onderwijs, financiën of defensie.\nSamen met de koning vormen zij de regering.\nMinisters leggen verantwoording af aan het parlement.\nDe Tweede Kamer kan ministers controleren en politieke steun intrekken.\nEen minister kan daarom uiteindelijk moeten aftreden als het vertrouwen ontbreekt."
  },
  {
    "answers": [
      "Censuskiesrecht"
    ],
    "question": "Als mensen alleen mogen stemmen als zij een bepaald bedrag aan belasting betalen",
    "explanation": "Bij censuskiesrecht mogen alleen mensen stemmen die aan een bepaalde inkomenseis voldoen.\nIn Nederland moesten kiezers vroeger een bepaald bedrag aan belasting betalen.\nDaardoor konden vooral rijkere mannen stemmen.\nHet grootste deel van de bevolking had dus geen stemrecht.\nHet censuskiesrecht werd later vervangen door steeds algemener kiesrecht."
  },
  {
    "answers": [
      "Liberalen"
    ],
    "question": "Kregen door het censuskiesrecht de meeste stemmen bij verkiezingen",
    "explanation": "Liberalen zijn voorstanders van individuele vrijheid en politieke en economische vrijheid.\nIn de negentiende eeuw wilden liberalen weinig overheidsbemoeienis met de economie.\nVooral rijke burgers steunden het liberalisme en hadden onder het censuskiesrecht veel politieke invloed.\nLiberalen speelden een belangrijke rol bij de grondwetsherziening van 1848.\nThorbecke was een bekende Nederlandse liberaal."
  },
  {
    "answers": [
      "Eerste Kamer"
    ],
    "question": "Deel van parlement wat door provinciale staten werd gekozen vanaf 1848",
    "explanation": "De Eerste Kamer is samen met de Tweede Kamer onderdeel van het Nederlandse parlement.\nDe leden worden niet rechtstreeks door burgers gekozen.\nZe worden gekozen door de leden van de Provinciale Staten en sinds 2019 ook indirect via kiescolleges voor bepaalde groepen.\nDe Eerste Kamer controleert wetsvoorstellen die door de Tweede Kamer zijn aangenomen.\nDe Eerste Kamer kan een wetsvoorstel alleen aannemen of verwerpen."
  },
  {
    "answers": [
      "Indirect",
      "Indirecte"
    ],
    "question": "Verkiezingen die via de gekozen provinciale staten lopen noem je zo.",
    "explanation": "Bij indirecte verkiezingen kiezen burgers eerst vertegenwoordigers die daarna andere bestuurders kiezen.\nDe verkiezing van de Eerste Kamer is hiervan een voorbeeld.\nBurgers kiezen de Provinciale Staten.\nDe leden van de Provinciale Staten kiezen vervolgens de leden van de Eerste Kamer.\nDe burger heeft daardoor indirect invloed op de samenstelling van de Eerste Kamer."
  },
  {
    "answers": [
      "Luxemburg"
    ],
    "question": "Omdat de koning dit gebied wou verkopen ontstond er een kwestie met het parlement",
    "explanation": "Luxemburg was in de negentiende eeuw verbonden met de Nederlandse koning Willem III.\nWillem III wilde het gebied verkopen aan Frankrijk.\nDaarvoor had hij de steun van andere landen en politieke goedkeuring nodig.\nHet plan leidde tot een conflict met het parlement.\nDe Luxemburgse kwestie liet zien dat de koning na 1848 niet meer onbeperkt zelf kon beslissen."
  },
  {
    "answers": [
      "Parlement",
      "Tweede Kamer",
      "Kamer",
      "het volk"
    ],
    "question": "Willem III werd na de Luxemburgse kwestie duidelijk dat zij nu de macht hadden",
    "explanation": "Het parlement bestaat in Nederland uit de Eerste en Tweede Kamer.\nDe Tweede Kamer wordt rechtstreeks door de bevolking gekozen.\nDe Tweede Kamer heeft belangrijke rechten om wetten te maken en ministers te controleren.\nHet parlement vertegenwoordigt de bevolking in het bestuur van het land.\nDe Tweede Kamer heeft meer bevoegdheden dan de Eerste Kamer, bijvoorbeeld het recht van amendement en initiatief."
  },
  {
    "answers": [
      "Industrialisatie"
    ],
    "question": "Door deze sociaal-economische verandering in de negentiende eeuw groeiden steden",
    "explanation": "Industrialisatie is de ontwikkeling waarbij productie steeds meer met machines in fabrieken plaatsvindt.\nIn Nederland kwam deze ontwikkeling vooral in de negentiende eeuw op gang.\nVeel mensen verhuisden naar plaatsen waar fabrieken en werk waren.\nDaardoor groeiden steden snel en veranderde het dagelijks leven van arbeiders.\nIndustrialisatie droeg ook bij aan het ontstaan van de sociale kwestie."
  },
  {
    "answers": [
      "Urbanisatie",
      "verstedelijking"
    ],
    "question": "Als steeds meer mensen in steden gaan wonen",
    "explanation": "Urbanisatie betekent dat steeds meer mensen in steden gaan wonen.\nDoor de industrialisatie kwamen in steden veel nieuwe banen in fabrieken.\nMensen trokken daarom van het platteland naar de stad.\nSteden groeiden snel en woningen waren vaak klein en ongezond.\nDe snelle groei van steden droeg bij aan problemen zoals armoede en slechte woonomstandigheden."
  },
  {
    "answers": [
      "Sociale kwestie"
    ],
    "question": "Benaming voor het maatschappelijk probleem dat er in de 19de eeuw veel armoede was door slecht omstandigheden",
    "explanation": "De sociale kwestie was het grote maatschappelijke probleem van armoede en slechte leef- en werkomstandigheden.\nVeel arbeiders werkten lange dagen voor lage lonen.\nFabrieken konden gevaarlijk zijn en woningen waren vaak klein en ongezond.\nKinderarbeid kwam ook veel voor.\nPolitici gingen daarom nadenken over sociale wetten en betere bescherming van arbeiders."
  },
  {
    "answers": [
      "Armenfonds"
    ],
    "question": "Enige mogelijkheid naast liefdadigheid om geholpen te worden bij armoede voor komst van sociale wetten",
    "explanation": "Een armenfonds was bedoeld om mensen te helpen die in armoede leefden.\nIn de negentiende eeuw bestonden nog weinig sociale voorzieningen van de overheid.\nArme mensen waren daarom vaak afhankelijk van liefdadigheid of hulp van kerkelijke organisaties.\nEen armenfonds kon financiële of andere ondersteuning geven.\nLater nam de overheid steeds meer verantwoordelijkheid over via sociale wetten."
  },
  {
    "answers": [
      "Van Houten",
      "Samuel van Houten"
    ],
    "question": "Bedacht eerste wet die werk door jonge kinderen in fabrieken verbood",
    "explanation": "Samuel van Houten was een Nederlandse liberale politicus.\nHij hield zich bezig met de slechte omstandigheden van arbeiders en kinderen.\nIn 1874 zorgde hij voor de Kinderwet, ook wel het Kinderwetje van Van Houten genoemd.\nDeze wet verbood fabrieksarbeid voor kinderen jonger dan twaalf jaar.\nDe wet was een eerste belangrijke stap tegen kinderarbeid."
  },
  {
    "answers": [
      "Kinderwet",
      "Kinderwetje"
    ],
    "question": "Wet bedacht door van Houten die arbeid door kinderen onder 12 in fabrieken verbood",
    "explanation": "Het Kinderwetje van Van Houten werd in 1874 ingevoerd.\nDe wet verbood arbeid in fabrieken voor kinderen jonger dan twaalf jaar.\nDaarmee wilde de overheid jonge kinderen beschermen tegen zwaar en gevaarlijk werk.\nDe wet maakte nog geen einde aan alle kinderarbeid.\nToch was het een belangrijke eerste sociale wet in Nederland."
  },
  {
    "answers": [
      "Woningwet"
    ],
    "question": "Wet die de kwaliteit van huizen moest verbeteren",
    "explanation": "De Woningwet van 1901 was bedoeld om de slechte woonomstandigheden te verbeteren.\nGemeenten kregen meer mogelijkheden om eisen te stellen aan woningen.\nOngezonde en slechte woningen konden worden aangepakt.\nDe wet stimuleerde de bouw van betere en hygiënischere huizen.\nDe overheid kreeg hierdoor een grotere rol bij het oplossen van de sociale kwestie."
  },
  {
    "answers": [
      "Ongevallenwet"
    ],
    "question": "Wet die een uitkering regelde voor mensen die een ongeluk op hun werk kregen",
    "explanation": "De Ongevallenwet beschermde arbeiders die door een bedrijfsongeval niet meer konden werken.\nDe wet maakte het mogelijk om een uitkering te krijgen na een arbeidsongeval.\nDaarmee nam de overheid meer verantwoordelijkheid voor de gevolgen van slechte arbeidsomstandigheden.\nDe wet was een belangrijke stap in de ontwikkeling van de sociale zekerheid.\nDe sociale wetgeving werd in de twintigste eeuw verder uitgebreid."
  },
  {
    "answers": [
      "Liberalisme"
    ],
    "question": "Politiek stroming die voor vrijheid en zo min mogelijk overheidsbemoeienis is",
    "explanation": "Liberalisme is een politieke stroming die veel waarde hecht aan individuele vrijheid.\nLiberalen vinden dat burgers zoveel mogelijk zelf keuzes moeten kunnen maken.\nTraditioneel willen liberalen weinig overheidsbemoeienis met de economie.\nIn de negentiende eeuw waren liberalen vaak voorstander van vrijhandel en politieke vrijheid.\nDe liberale stroming speelde een grote rol bij de Nederlandse grondwetsherziening van 1848."
  },
  {
    "answers": [
      "Liberale Unie"
    ],
    "question": "Eerste politieke partij van de liberalen",
    "explanation": "De Liberale Unie was een Nederlandse politieke organisatie van liberalen.\nDe organisatie werd opgericht in 1885.\nZij probeerde verschillende liberale groepen politiek te laten samenwerken.\nDe Liberale Unie was een voorloper van latere liberale politieke partijen.\nDe organisatie stond onder andere voor individuele vrijheid en parlementaire democratie."
  },
  {
    "answers": [
      "Rijken",
      "Rijke burgers",
      "Rijke mensen"
    ],
    "question": "Stemden vooral op liberalen",
    "explanation": "Rijke burgers hadden in de negentiende eeuw relatief veel politieke invloed.\nOnder het censuskiesrecht mochten vooral mannen met voldoende inkomen of belastingbetaling stemmen.\nVeel van deze kiezers steunden de liberalen.\nZij hadden vaak bezit, bedrijven of een hoge maatschappelijke positie.\nDoor de uitbreiding van het kiesrecht nam hun politieke voorsprong later af."
  },
  {
    "answers": [
      "Socialisme"
    ],
    "question": "Politieke stroming die voor gelijkheid is en vindt dat de overheid met wetgeving moet komen",
    "explanation": "Socialisme is een politieke stroming die streeft naar meer gelijkheid in de samenleving.\nSocialisten vonden dat de verschillen tussen rijk en arm kleiner moesten worden.\nZij wilden meer bescherming voor arbeiders en betere arbeidsomstandigheden.\nDe overheid moest volgens veel socialisten wetten maken om deze problemen aan te pakken.\nDe arbeidersbeweging en socialistische partijen groeiden vooral tijdens de industrialisatie."
  },
  {
    "answers": [
      "Arbeiders"
    ],
    "question": "Zij stemmen vooral op socialisten",
    "explanation": "Arbeiders waren mensen die voor een loon werkten, vaak in fabrieken en werkplaatsen.\nTijdens de industrialisatie werkten veel arbeiders onder zware omstandigheden.\nWerkdagen waren lang en lonen waren vaak laag.\nVeel arbeiders woonden in kleine en ongezonde woningen.\nEen groot deel van de arbeiders ging uiteindelijk stemmen op socialistische partijen."
  },
  {
    "answers": [
      "SDAP",
      "Sociaal-Democratische Arbeiderspartij"
    ],
    "question": "Politieke partij van de sociaal-democraten",
    "explanation": "De SDAP was een Nederlandse socialistische politieke partij.\nDe partij werd opgericht in 1894.\nDe SDAP kwam op voor de belangen van arbeiders en streefde naar meer sociale gelijkheid.\nDe partij wilde onder andere algemeen kiesrecht en betere sociale wetgeving.\nPieter Jelles Troelstra was een van de bekendste leiders van de SDAP."
  },
  {
    "answers": [
      "Troelstra",
      "Piter Jelles Troelstra",
      "Pieter Jelles Troelstra"
    ],
    "question": "Leider van de SDAP",
    "explanation": "Pieter Jelles Troelstra was een Nederlandse socialistische politicus en leider van de SDAP.\nIn 1918 dacht hij dat een revolutie in Nederland mogelijk was.\nHij riep arbeiders op om de macht over te nemen.\nDe bevolking en het leger steunden zijn poging echter niet voldoende.\nDe mislukte poging werd bekend als de Vergissing van Troelstra."
  },
  {
    "answers": [
      "Revolutie"
    ],
    "question": "In 1918 riep Troelstra dit uit",
    "explanation": "Een revolutie is een snelle en ingrijpende verandering van de politieke of maatschappelijke orde.\nVaak proberen groepen tijdens een revolutie de bestaande machthebbers af te zetten.\nIn 1918 dacht Troelstra dat in Nederland een socialistische revolutie mogelijk was.\nHij riep op tot een verandering van de macht.\nDe poging mislukte omdat er onvoldoende steun was."
  },
  {
    "answers": [
      "Vergissing"
    ],
    "question": "Zo werd de revolutiepoging van Troelstra genoemd",
    "explanation": "De Vergissing is de naam die later werd gegeven aan Troelstra's mislukte revolutiepoging van 1918.\nTroelstra dacht dat Nederland klaar was voor een socialistische revolutie.\nHij verwachtte dat arbeiders hem zouden steunen.\nDat gebeurde niet op grote schaal en de regering bleef aan de macht.\nDaarom werd zijn poging spottend de 'Vergissing van Troelstra' genoemd."
  },
  {
    "answers": [
      "Kleine Luyden"
    ],
    "question": "Benaming van de aanhangers van Kuyper en de protestanten",
    "explanation": "De Kleine Luyden waren vooral gewone protestantse burgers en kleine zelfstandigen.\nDe term werd bekend door Abraham Kuyper.\nZij voelden zich vaak niet vertegenwoordigd door de liberale elite.\nKuyper organiseerde deze groep politiek en maatschappelijk.\nDe Kleine Luyden vormden een belangrijke achterban van de ARP."
  },
  {
    "answers": [
      "Protestanten"
    ],
    "question": "Christelijke groep die in Nederland in de meerderheid is",
    "explanation": "Protestanten zijn christenen die voortkomen uit de Reformatie.\nIn Nederland bestonden verschillende protestantse stromingen.\nVeel protestanten vonden dat het christelijk geloof een belangrijke rol moest spelen in de samenleving en politiek.\nAbraham Kuyper werd een belangrijke leider van orthodoxe protestanten.\nProtestanten vormden een van de belangrijkste groepen binnen de verzuiling."
  },
  {
    "answers": [
      "Kuyper",
      "Kuijper",
      "Abraham Kuyper",
      "Abraham Kuijper"
    ],
    "question": "Leider van de ARP",
    "explanation": "Abraham Kuyper was een Nederlandse protestantse politicus, journalist en predikant.\nHij richtte in 1879 de Anti-Revolutionaire Partij op.\nKuyper kwam op voor de belangen van orthodoxe protestanten en de Kleine Luyden.\nHij speelde een belangrijke rol in de schoolstrijd en de verzuiling.\nKuyper werd later ook minister-president van Nederland."
  },
  {
    "answers": [
      "ARP",
      "Antirevolutionaire Partij"
    ],
    "question": "Politieke partij van de protestanten",
    "explanation": "De Anti-Revolutionaire Partij was een Nederlandse protestantse politieke partij.\nDe partij werd in 1879 opgericht door Abraham Kuyper.\nDe ARP wilde dat christelijke waarden een belangrijke rol in politiek en samenleving kregen.\nDe partij kwam op voor de belangen van protestanten en de Kleine Luyden.\nDe ARP was een belangrijke voorloper van het latere CDA."
  },
  {
    "answers": [
      "RKSP",
      "Rooms-Katholieke Staatspartij"
    ],
    "question": "Politieke partij va de katholieken",
    "explanation": "De Rooms-Katholieke Staatspartij was een belangrijke katholieke politieke partij in Nederland.\nDe partij ontstond in 1926 als opvolger van eerdere katholieke organisaties.\nDe RKSP kwam op voor de belangen van Nederlandse katholieken.\nDe partij speelde een belangrijke rol in de verzuilde politiek.\nDe RKSP ging later op in de Katholieke Volkspartij en uiteindelijk in het CDA."
  },
  {
    "answers": [
      "Schaepman",
      "Herman Schaepman"
    ],
    "question": "Leider van de RKSP",
    "explanation": "Herman Schaepman was een Nederlandse priester en katholieke politicus.\nHij was een belangrijke leider van de katholieke politieke beweging in Nederland.\nSchaepman speelde een grote rol bij de emancipatie van katholieken.\nHij hielp katholieke kiezers politiek te organiseren.\nHij was daarmee een belangrijke voorloper van de katholieke partijvorming."
  },
  {
    "answers": [
      "Katholieken"
    ],
    "question": "Christelijke groep die in streed voor emancipatie ten opzichte van protestanten",
    "explanation": "Katholieken zijn christenen die behoren tot de Rooms-Katholieke Kerk.\nIn de negentiende eeuw waren katholieken in Nederland een belangrijke bevolkingsgroep.\nZij streden voor gelijke rechten en een sterkere positie in de maatschappij.\nDeze emancipatie leidde tot eigen katholieke scholen, verenigingen en politieke organisaties.\nKatholieken vormden daardoor een belangrijke zuil binnen de verzuilde samenleving."
  },
  {
    "answers": [
      "Confessionelen"
    ],
    "question": "Andere benaming voor Christen-Democraten",
    "explanation": "Confessionelen zijn politici en partijen die hun politieke ideeën baseren op een christelijke geloofsovertuiging.\nIn Nederland waren vooral protestanten en katholieken confessioneel.\nZij vonden dat het geloof invloed mocht hebben op politiek en samenleving.\nDe ARP en katholieke partijen waren belangrijke confessionele partijen.\nLater kwamen veel confessionelen samen in het CDA."
  },
  {
    "answers": [
      "Verzuiling"
    ],
    "question": "Maatschappelijk verschijnsel die ontstond door de vrijheid van vergadering en vereniging",
    "explanation": "Verzuiling was de verdeling van de Nederlandse samenleving in verschillende groepen met eigen organisaties.\nDe belangrijkste zuilen waren de protestantse, katholieke, socialistische en liberale zuil.\nMensen hadden binnen hun zuil vaak een eigen school, krant, vakbond en vereniging.\nDe groepen leefden gedeeltelijk langs elkaar heen.\nToch werkten de leiders van de zuilen politiek met elkaar samen."
  },
  {
    "answers": [
      "Vakbond",
      "Vakbonden"
    ],
    "question": "Verenigingen van arbeiders",
    "explanation": "Een vakbond is een organisatie die opkomt voor de belangen van werknemers.\nVakbonden onderhandelen bijvoorbeeld over lonen, werktijden en arbeidsvoorwaarden.\nIn de tijd van de industrialisatie hielpen vakbonden arbeiders om samen sterker te staan.\nDoor collectief te onderhandelen konden arbeiders meer druk uitoefenen op werkgevers.\nVakbonden speelden daardoor een belangrijke rol in de sociale geschiedenis."
  },
  {
    "answers": [
      "Bijbel",
      "Geloof"
    ],
    "question": "Dit moest volgens confessionelen een belangrijke rol spelen in de politiek",
    "explanation": "Voor confessionelen was het christelijke geloof een belangrijke basis voor politieke keuzes.\nDe Bijbel werd gezien als een belangrijke bron voor normen en waarden.\nPolitici zoals Abraham Kuyper vonden dat het geloof invloed mocht hebben op het bestuur.\nOok katholieke politici baseerden hun politiek op hun geloofsovertuiging.\nDit was een belangrijke oorzaak van de verzuiling."
  },
  {
    "answers": [
      "Schoolstrijd"
    ],
    "question": "Gevecht, streven, van confessionelen om hun scholen betaald te krijgen",
    "explanation": "De schoolstrijd was de langdurige politieke strijd over de financiering en positie van bijzondere scholen.\nConfessionelen wilden dat christelijke scholen financieel gelijk werden behandeld als openbare scholen.\nDe strijd ging vooral over vrijheid van onderwijs en overheidsgeld.\nIn 1917 werd een belangrijke oplossing bereikt.\nDaarbij kwam financiële gelijkstelling van openbaar en bijzonder onderwijs."
  },
  {
    "answers": [
      "Bijzonder",
      "Bijzonder onderwijs"
    ],
    "question": "Benaming van Christelijk Onderwijs",
    "explanation": "Bijzonder onderwijs is onderwijs dat wordt georganiseerd vanuit een bepaalde godsdienst of levensbeschouwing.\nVoorbeelden zijn christelijke en katholieke scholen.\nDe vrijheid van onderwijs maakte het mogelijk zulke scholen op te richten.\nBij de pacificatie van 1917 werd bijzonder onderwijs financieel gelijkgesteld aan openbaar onderwijs.\nDaarmee kwam een belangrijk einde aan de schoolstrijd."
  },
  {
    "answers": [
      "Rooms"
    ],
    "question": "Waar staat de R voor in de afkorting RK.",
    "explanation": "Rooms verwijst naar de Rooms-Katholieke Kerk.\nKatholieken worden daarom ook wel rooms-katholieken genoemd.\nDe 'R' in de afkorting RK betekent Rooms.\nDe katholieke zuil had eigen scholen, verenigingen, kranten en politieke organisaties.\nDe katholieke gemeenschap speelde een belangrijke rol in de Nederlandse verzuiling."
  },
  {
    "answers": [
      "Feministen"
    ],
    "question": "Mensen die streven naar emancipatie van vrouwen",
    "explanation": "Feministen zijn mensen die streven naar gelijke rechten en kansen voor vrouwen.\nIn de negentiende en vroege twintigste eeuw voerden zij actie voor vrouwenemancipatie.\nBelangrijke onderwerpen waren onderwijs, werk, zelfstandig inkomen en kiesrecht.\nFeministen organiseerden zich in verenigingen en voerden campagne voor verandering.\nAletta Jacobs en Wilhelmina Drucker waren bekende Nederlandse feministen."
  },
  {
    "answers": [
      "Onderwijs",
      "Hoger onderwijs",
      "Universiteiten"
    ],
    "question": "Aletta Jacobs wou dat vrouwen toegang kregen tot:",
    "explanation": "Aletta Jacobs wilde dat vrouwen toegang kregen tot hoger onderwijs en universiteiten.\nIn haar tijd waren universiteiten vooral toegankelijk voor mannen.\nJacobs wilde dat vrouwen dezelfde mogelijkheden kregen om te studeren en een beroep uit te oefenen.\nZij werd zelf de eerste Nederlandse vrouw die een universitaire studie afrondde.\nHaar strijd maakte haar tot een belangrijke voorvechtster van vrouwenemancipatie."
  },
  {
    "answers": [
      "VVVK",
      "VVV"
    ],
    "question": "Organisatie die streed voor vrouwenemancipatie (afkorting)",
    "explanation": "De VVVK was een organisatie die zich inzette voor vrouwenemancipatie en vrouwenrechten.\nWilhelmina Drucker was een belangrijke figuur binnen de Nederlandse vrouwenbeweging.\nOrganisaties van feministen voerden actie voor onderwijs en politieke rechten.\nEen belangrijk doel was het verkrijgen van kiesrecht voor vrouwen.\nDe vrouwenbeweging droeg bij aan de uitbreiding van de rechten van vrouwen."
  },
  {
    "answers": [
      "Drucker",
      "Wilhelmina Drucker"
    ],
    "question": "Medestrijder van Jacobs voor vrouwenrechten",
    "explanation": "Wilhelmina Drucker was een Nederlandse feministe en schrijfster.\nZij streed voor gelijke rechten en kansen voor vrouwen.\nDrucker zette zich onder andere in voor vrouwenkiesrecht en economische zelfstandigheid.\nZe was actief in de vroege Nederlandse vrouwenbeweging.\nSamen met andere feministen hielp zij vrouwenemancipatie op de politieke agenda te zetten."
  },
  {
    "answers": [
      "Aletta Jacobs"
    ],
    "question": "Vrouwelijke arts en voorvechtster voor vrouwenrechten",
    "explanation": "Aletta Jacobs was de eerste Nederlandse vrouw die een universitaire studie afrondde.\nZij werd arts en was daarnaast een belangrijke voorvechtster van vrouwenrechten.\nJacobs streed onder andere voor vrouwenkiesrecht en toegang tot onderwijs.\nZe was actief in de internationale en Nederlandse vrouwenbeweging.\nZe werd daardoor een symbool van de eerste feministische golf."
  },
  {
    "answers": [
      "Actief kiesrecht",
      "Actief"
    ],
    "question": "Als mensen het recht hebben om te mogen stemmen",
    "explanation": "Actief kiesrecht is het recht om te stemmen bij verkiezingen.\nWie actief kiesrecht heeft, mag een stem uitbrengen op een kandidaat of politieke partij.\nHet gaat dus om de vraag of je zelf mag stemmen.\nDit is anders dan passief kiesrecht, waarbij je jezelf verkiesbaar kunt stellen.\nIn Nederland werd het kiesrecht stap voor stap uitgebreid naar steeds meer burgers."
  },
  {
    "answers": [
      "Passief kiesrecht",
      "Passief"
    ],
    "question": "Als mensen zich verkiesbaar kunnen stellen",
    "explanation": "Passief kiesrecht is het recht om jezelf verkiesbaar te stellen.\nWie passief kiesrecht heeft, kan dus kandidaat worden bij verkiezingen.\nHet betekent niet automatisch dat iemand ook wordt gekozen.\nActief kiesrecht is het recht om te stemmen.\nVoor veel verkiezingen gelden wettelijke voorwaarden, zoals een minimumleeftijd."
  },
  {
    "answers": [
      "Passief kiesrecht",
      "Passief"
    ],
    "question": "Dit kregen vrouwen bij de pacificatie van 1917",
    "explanation": "Bij de pacificatie van 1917 kregen vrouwen in Nederland passief kiesrecht.\nDat betekende dat vrouwen zich verkiesbaar mochten stellen voor politieke functies.\nVrouwen mochten toen nog niet zelf stemmen bij landelijke verkiezingen.\nHet actief kiesrecht voor vrouwen kwam in 1919 tot stand.\nDaarmee werd een belangrijke stap gezet in de politieke emancipatie van vrouwen."
  },
  {
    "answers": [
      "Financiële gelijkstelling"
    ],
    "question": "Dit gebeurde met het bijzonder onderwijs bij de pacificatie van 1917",
    "explanation": "Financiële gelijkstelling betekende dat openbaar en bijzonder onderwijs recht kregen op gelijke financiële behandeling.\nVooral confessionelen hadden hier lang voor gestreden tijdens de schoolstrijd.\nDe afspraak werd onderdeel van de pacificatie van 1917.\nHierdoor konden bijzondere scholen overheidsgeld krijgen onder dezelfde voorwaarden als openbare scholen.\nDit hielp een einde te maken aan de politieke schoolstrijd."
  },
  {
    "answers": [
      "Algemeen Kiesrecht"
    ],
    "question": "Dit kregen mannen bij de pacificatie van 1917",
    "explanation": "Algemeen kiesrecht betekent dat vrijwel alle volwassen burgers het recht hebben om te stemmen.\nIn Nederland kregen mannen algemeen kiesrecht in 1917.\nVrouwen kregen in 1917 passief kiesrecht en in 1919 actief kiesrecht.\nDaarmee werd de Nederlandse democratie veel breder.\nHet kiesrecht was daarvoor beperkt door onder andere het censuskiesrecht."
  },
  {
    "answers": [
      "Caoutchouc",
      "Caoutchoucartikel"
    ],
    "question": "Grondwetaanpassing in 1887 die ervoor zorgde dat \"geschikte mannen\" mochten stemmen",
    "explanation": "Het Caoutchoucartikel was een grondwetswijziging uit 1887.\nDe wijziging maakte het mogelijk dat meer mannen mochten stemmen.\nDe Grondwet sprak voortaan over 'geschiktheid en maatschappelijke welstand' als voorwaarden.\nDaardoor kon het aantal kiezers sterk worden uitgebreid.\nHet was een belangrijke stap op weg naar algemeen kiesrecht."
  },
  {
    "answers": [
      "Districtenstelsel"
    ],
    "question": "Als er gestemd mag worden per gebied op één lokale kamerlid",
    "explanation": "Bij een districtenstelsel wordt een land verdeeld in kiesdistricten.\nKiezers stemmen in hun eigen district op kandidaten.\nDe kandidaat met de meeste stemmen in een district kan de zetel winnen.\nDaardoor kunnen grote partijen relatief veel zetels krijgen.\nNederland gebruikte tot 1917 een districtenstelsel voor de Tweede Kamer."
  },
  {
    "answers": [
      "Evenredige vertegenwoordiging"
    ],
    "question": "Systeem waarbij het aantal zetels in de kamer wordt bepaald door aantal stemmen te delen door het totaal",
    "explanation": "Bij evenredige vertegenwoordiging worden zetels verdeeld naar verhouding van het aantal stemmen.\nEen partij die ongeveer tien procent van de stemmen krijgt, krijgt ongeveer tien procent van de zetels.\nDaardoor kunnen ook kleinere partijen in het parlement komen.\nNederland gebruikt dit systeem sinds 1917 bij de Tweede Kamerverkiezingen.\nHet systeem zorgt voor een parlement dat de stemverhoudingen beter weerspiegelt."
  },
  {
    "answers": [
      "Overheid",
      "de overheid",
      "staat",
      "de staat"
    ],
    "question": "Tegen diens macht beschermen klassieke grondrechten jou",
    "explanation": "Klassieke grondrechten beschermen burgers tegen te veel macht van de overheid.\nVoorbeelden zijn vrijheid van meningsuiting, godsdienst en vereniging.\nDe overheid mag deze vrijheden niet zomaar afnemen.\nBurgers kunnen zich op deze grondrechten beroepen.\nZo beschermen grondrechten de vrijheid van mensen tegenover de staat."
  },
  {
    "answers": [
      "Koning"
    ],
    "question": "Moet naast de ministers nieuwe wetten ondertekenen",
    "explanation": "De koning is het Nederlandse staatshoofd.\nNederland is daardoor een monarchie.\nDe koning ondertekent samen met een minister nieuwe wetten en belangrijke besluiten.\nDe koning is volgens de Grondwet onschendbaar en de ministers zijn verantwoordelijk.\nZijn taken zijn vooral constitutioneel, representatief en ceremonieel."
  },
  {
    "answers": [
      "Populisme"
    ],
    "question": "Politieke stroming die in de 21ste eeuw in Nederland opkwam",
    "explanation": "Populisme is een politieke stijl of stroming die beweert op te komen voor 'het gewone volk'.\nPopulistische politici stellen zich vaak tegenover een politieke of bestuurlijke elite.\nZij benadrukken regelmatig dat gewone burgers onvoldoende worden gehoord.\nPopulisme kan voorkomen bij zowel rechtse als linkse politieke bewegingen.\nIn Nederland kreeg het vanaf het einde van de twintigste eeuw veel aandacht."
  },
  {
    "answers": [
      "Fortuyn",
      "Pim Fortuyn"
    ],
    "question": "Populistische politicus die in 2002 werd vermoord",
    "explanation": "Pim Fortuyn was een Nederlandse politicus en een bekende vertegenwoordiger van het populisme.\nHij werd vooral bekend door zijn scherpe kritiek op de gevestigde politiek en het immigratiebeleid.\nIn 2002 behaalde zijn partij grote verkiezingswinst.\nFortuyn werd op 6 mei 2002 vermoord in Hilversum.\nZijn dood had grote invloed op de Nederlandse politiek."
  },
  {
    "answers": [
      "Sociale grondrechten",
      "Sociale"
    ],
    "question": "Dit type grondrechten bieden bescherming dóór de overheid sinds 1983",
    "explanation": "Sociale grondrechten geven burgers recht op inspanningen van de overheid op sociaal gebied.\nVoorbeelden zijn het recht op onderwijs, bestaanszekerheid en gezondheidszorg.\nDe overheid moet zich inspannen om deze rechten mogelijk te maken.\nZe verschillen van klassieke grondrechten, die burgers vooral beschermen tegen de overheid.\nSociale grondrechten werden in Nederland vooral bij de grondwetsherziening van 1983 uitgebreid."
  }
];
