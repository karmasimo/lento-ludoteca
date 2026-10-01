/**
 * Lento Ludoteca - Application Logic
 * Co-Branded: Bar Lento & DELIRIMEDIA
 */

// Games Database
const GAMES_DATABASE = [
  {
    id: "deliricard",
    title: "Deliricard",
    players: { min: 2, max: 8 },
    duration: "30-60 min",
    category: "Playtest / Delirimedia",
    difficulty: "Medio",
    tags: ["Esclusiva Delirimedia", "Playtest", "Carte", "Tutti contro tutti", "Competitivo", "Made in Rimini", "Folle"],
    description: "Il nuovo e folle gioco di carte in sviluppo da DELIRIMEDIA. Provalo in anteprima alle Lento Game Nights, partecipa al playtesting pubblico e lascia il tuo feedback!",
    image: "deliricard-cover.jpg",
    exclusive: true,
    exclusiveLabel: "Esclusiva Delirimedia · Solo su prenotazione"
  },
  {
    id: "5-alive",
    title: "5 Alive",
    players: { min: 2, max: 6 },
    duration: "15-30 min",
    category: "Party / Carte",
    difficulty: "Facile",
    tags: ["Rapido", "Carte", "Tutti contro tutti", "Competitivo", "Adatto a tutti"],
    description: "Un gioco di carte frenetico in cui devi mantenere il punteggio totale sotto il 21. Strategia e colpi di scena continui!",
    image: "https://cf.geekdo-images.com/mtyHAXeTBbIFL8upWfWdtg__opengraph/img/lN5vV09JL49itK1yBlcdT0qUpa4=/0x600:1074x1272/fit-in/1200x630/filters:fill(blur):strip_icc()/pic8875463.jpg"
  },
  {
    id: "squillo-evolution",
    title: "Squillo: Evolution",
    players: { min: 2, max: 6 },
    duration: "30-45 min",
    category: "Party / Carte (Vietato ai minori)",
    difficulty: "Facile",
    tags: ["Carte", "Satirico", "Tutti contro tutti", "Competitivo", "Adulti", "Social"],
    description: "Il celebre e dissacrante gioco di carte satirico ideato da Immanuel Casto. In questa versione Evolution gestisci la sua scuderia di creator e escort nel mondo digitale dei social media, delle visualizzazioni e dei like. Riservato a un pubblico adulto.",
    image: "https://www.studiosupernova.it/cdn/shop/files/cover_4f199b41-aa64-4fd2-9fbc-6024e74d9314.jpg?v=1778492498"
  },
  {
    id: "catan",
    title: "Catan",
    players: { min: 3, max: 4 },
    duration: "60-90 min",
    category: "Strategia / Classico",
    difficulty: "Medio",
    tags: ["Risorse", "Trattative", "Tutti contro tutti", "Competitivo", "Classico"],
    description: "Raccogli risorse, costruisci strade e colonie sull'isola di Catan. Negozia duramente con gli altri giocatori per raggiungere la vittoria.",
    image: "https://cf.geekdo-images.com/0XODRpReiZBFUffEcqT5-Q__opengraph/img/ARkyerUcE8vdJx0U5S0eVM0RTzY=/0x0:1000x525/fit-in/1200x630/filters:strip_icc()/pic9156909.png"
  },
  {
    id: "chameleon",
    title: "The Chameleon",
    players: { min: 3, max: 8 },
    duration: "15 min",
    category: "Party / Bluff",
    difficulty: "Facile",
    tags: ["Bluff", "Rapido", "A squadre", "Ruoli segreti", "Competitivo", "Deduzione"],
    description: "Tutti conoscono la parola segreta tranne il Camaleonte. Trova l'intruso o inganna tutti per mimetizzarti senza farti scoprire.",
    image: "https://cf.geekdo-images.com/-uBkiypUVyRKxNuOI_-ZpQ__opengraph/img/WJY75yualZKr9U1G1sixKKLRpxA=/0x37:851x484/fit-in/1200x630/filters:strip_icc()/pic3552344.png"
  },
  {
    id: "dixit",
    title: "Dixit",
    players: { min: 3, max: 8 },
    duration: "30 min",
    category: "Party / Creativo",
    difficulty: "Facile",
    tags: ["Immaginazione", "Storytelling", "Tutti contro tutti", "Competitivo", "Adatto a tutti"],
    description: "Usa la fantasia per descrivere carte illustrate uniche con frasi, canzoni o espressioni, cercando di essere misterioso al punto giusto.",
    image: "https://cf.geekdo-images.com/J0PlHArkZDJ57H-brXW2Fw__opengraph/img/WDuER7xqK418ih7wBPlaXzS8lhg=/0x0:3271x1717/fit-in/1200x630/filters:strip_icc()/pic6738336.jpg"
  },
  {
    id: "ensemble",
    title: "Ensemble",
    players: { min: 2, max: 10 },
    duration: "15-30 min",
    category: "Cooperativo / Intuito",
    difficulty: "Facile",
    tags: ["Cooperativo", "Intuito", "Immagini"],
    description: "Un gioco cooperativo in cui dovete sintonizzarvi sulla stessa lunghezza d'onda e votare le associazioni visive migliori senza parlare.",
    image: "https://cf.geekdo-images.com/PrG5-okOUPiHsRRDJ-pYhg__opengraph/img/S58DH00V9T83zZ2Wu_R4kIbi-TM=/0x298:413x515/fit-in/1200x630/filters:strip_icc()/pic6099545.png"
  },
  {
    id: "exploding-kittens",
    title: "Exploding Kittens",
    players: { min: 2, max: 5 },
    duration: "15 min",
    category: "Party / Carte",
    difficulty: "Facile",
    tags: ["Rapido", "Bastardo", "Tutti contro tutti", "Competitivo", "Gatti"],
    description: "Una roulette russa felina ad altissima tensione. Pesca le carte, evita i gattini esplosivi e usa i disinneschi per sabotare i tuoi amici.",
    image: "https://cf.geekdo-images.com/N8bL53-pRU7zaXDTrEaYrw__opengraph/img/2GQDDt2HfOV58ip2jT-eJLQ6o-k=/0x0:680x357/fit-in/1200x630/filters:strip_icc()/pic2691976.png"
  },
  {
    id: "flip-7",
    title: "Flip 7",
    players: { min: 2, max: 8 },
    duration: "15-20 min",
    category: "Party / Push-Your-Luck",
    difficulty: "Facile",
    tags: ["Rapido", "Fortuna", "Tutti contro tutti", "Competitivo", "Push Your Luck"],
    description: "Gira le carte una alla volta. Puoi fermarti e accumulare punti, o rischiare di sballare se esce un doppione. Semplice ed estremamente additivo!",
    image: "https://cf.geekdo-images.com/YrQxEB9Ef0kQorRApzG5vQ__opengraph/img/hziHazLor3j2SyWQHnEiPvn6ejQ=/0x747:3000x2339/fit-in/1200x630/filters:fill(blur):strip_icc()/pic8780246.jpg"
  },
  {
    id: "hues-cues",
    title: "Hues and Cues",
    players: { min: 3, max: 10 },
    duration: "30 min",
    category: "Party / Colori",
    difficulty: "Facile",
    tags: ["Colori", "Indovinelli", "Tutti contro tutti", "A squadre", "Competitivo", "Adatto a tutti"],
    description: "Dai indizi composti da una o due parole per far indovinare una sfumatura cromatica esatta su un tabellone con 480 tonalità di colore.",
    image: "https://cf.geekdo-images.com/jdR8WW75HkaoHGMTCIx9lA__opengraph/img/NajbrVlj1oHqoDU5oTFl31buNgs=/0x181:1000x706/fit-in/1200x630/filters:strip_icc()/pic5390676.jpg"
  },
  {
    id: "imagine",
    title: "Imagine",
    players: { min: 3, max: 8 },
    duration: "30 min",
    category: "Party / Creativo",
    difficulty: "Facile",
    tags: ["Creativo", "Trasparenze", "Tutti contro tutti", "Competitivo", "Adatto a tutti"],
    description: "Usa 60 carte trasparenti con icone minimaliste per far indovinare film, luoghi, concetti o personaggi, animandole e sovrapponendole.",
    image: "https://cf.geekdo-images.com/K-Hp2v5Bc_UKMGlBF2oIEQ__opengraph/img/B1X16lBujo7CFeEdmQNdo3eg37c=/0x32:1500x820/fit-in/1200x630/filters:strip_icc()/pic3061260.jpg"
  },
  {
    id: "luz",
    title: "Luz",
    players: { min: 3, max: 4 },
    duration: "30-45 min",
    category: "Card Game / Logica",
    difficulty: "Medio",
    tags: ["Strategia", "Carte", "Tutti contro tutti", "Competitivo", "Logica"],
    description: "Un gioco di prese in cui vedi solo il retro delle tuoi carte ma non il fronte. Devi dedurre la tua mano osservando quella degli altri.",
    image: "https://cf.geekdo-images.com/w_ra75mMg4lvtUKkXnIT8Q__opengraph/img/tg2z2nVLqsEnZL1XFLNYol26BvU=/0x147:548x434/fit-in/1200x630/filters:strip_icc()/pic8781923.jpg"
  },
  {
    id: "monopoly-rick-morty",
    title: "Monopoly Rick and Morty",
    players: { min: 2, max: 6 },
    duration: "60-120 min",
    category: "Classico / Nerd",
    difficulty: "Facile",
    tags: ["Nerd", "Trattative", "Tutti contro tutti", "Competitivo", "Classico"],
    description: "Il grande classico dei giochi immobiliari calato nel multiverso folle di Rick and Morty. Compra Scatole di Meeseeks e Flumble Gland!",
    image: "https://cf.geekdo-images.com/Ov7dR64QkqjT5hJiUib6dg__opengraph/img/e7Dnv4E2J7Wlj4jVEvTxSuhT1bk=/0x54:1500x841/fit-in/1200x630/filters:strip_icc()/pic5091172.jpg"
  },
  {
    id: "munchkin",
    title: "Munchkin & Star Munchkin",
    players: { min: 3, max: 6 },
    duration: "60 min",
    category: "Card Game / Parodia",
    difficulty: "Medio",
    tags: ["Bastardo", "Nerd", "Tutti contro tutti", "Competitivo"],
    description: "Ucellidi i mostri, ruba il tesoro, pugnala i tuoi amici alle spalle! La parodia definitiva dei giochi di ruolo fantasy e sci-fi.",
    image: "https://cf.geekdo-images.com/J-ts3MW0UhDzs621TR6cog__opengraph/img/dUuakmG6d2163XCgoitr7os8mpE=/0x0:444x233/fit-in/1200x630/filters:strip_icc()/pic1871016.jpg"
  },
  {
    id: "obscurio",
    title: "Obscurio",
    players: { min: 2, max: 8 },
    duration: "40 min",
    category: "Cooperativo / Traditore",
    difficulty: "Medio",
    tags: ["Cooperativo", "Traditore", "Ruoli segreti", "Indizi Visivi"],
    description: "Fuggi dalla biblioteca stregata interpretando gli indizi visivi del Grimorio, ma fai attenzione: uno di voi è un traditore infiltrato!",
    image: "https://cf.geekdo-images.com/gSBn3vnTQ6Hh6JmxA38N7g__opengraph/img/s20WQRwRja7eivAV9hdPuTC0uMA=/0x0:3371x1770/fit-in/1200x630/filters:strip_icc()/pic4611791.jpg"
  },
  {
    id: "parola-per-parola",
    title: "Parola per Parola",
    players: { min: 2, max: 6 },
    duration: "15 min",
    category: "Party / Parole",
    difficulty: "Facile",
    tags: ["Rapido", "Parole", "A squadre", "Competitivo", "Riflessi"],
    description: "Un gioco di velocità mentale in cui devi trovare parole coerenti con i temi estratti prima che lo facciano gli avversari.",
    image: "https://cdn.svc.asmodee.net/production-asmodeeit/uploads/image-converter/2022/09/MPM_packshot_3D_IT.webp"
  },
  {
    id: "play-hits",
    title: "Play Hits",
    players: { min: 2, max: 8 },
    duration: "20-30 min",
    category: "Party / Musica",
    difficulty: "Facile",
    tags: ["Musica", "Trivia", "Tutti contro tutti", "Competitivo", "Adatto a tutti"],
    description: "Metti alla prova la tua cultura musicale! Ordina cronologicamente le hit degli ultimi decenni e canticchiale per vincere.",
    image: "https://cf.geekdo-images.com/R4aQbIo0KZ6npxfhUc7ZYw__opengraph/img/KqtyJtbRR4jCTQQZ1Y8dICoIaMI=/0x152:938x645/fit-in/1200x630/filters:strip_icc()/pic6958739.png"
  },
  {
    id: "saboteur",
    title: "Saboteur",
    players: { min: 3, max: 10 },
    duration: "30 min",
    category: "Bluff / Ruoli",
    difficulty: "Facile",
    tags: ["Bluff", "Ruoli Segreti", "A squadre", "Competitivo", "Adatto a tutti"],
    description: "Scava gallerie per trovare l'oro insieme ai tuoi colleghi nani, ma occhio ai sabotatori che faranno di tutto per farti crollare la miniera.",
    image: "https://cf.geekdo-images.com/oeN-MHAJKsC2KCI3avKj9w__opengraph/img/A2DAi98f5tvBoXIRt6nuHU1PXnQ=/0x0:1134x595/fit-in/1200x630/filters:strip_icc()/pic8679622.jpg"
  },
  {
    id: "secret-hitler",
    title: "Secret Hitler",
    players: { min: 5, max: 10 },
    duration: "45 min",
    category: "Social Deduction / Politico",
    difficulty: "Medio",
    tags: ["Bluff", "Ruoli Segreti", "A squadre", "Competitivo", "Intrigante"],
    description: "Un thriller politico ambientato nella Germania degli anni '30. Liberali e Fascisti si scontrano per far approvare le proprie leggi.",
    image: "https://cf.geekdo-images.com/rAQ3hIXoH6xDcj41v9iqCg__opengraph/img/ae8mg6V5TH2WKatln7JHz3BIi8I=/8x0:693x360/fit-in/1200x630/filters:strip_icc()/pic5164305.jpg"
  },
  {
    id: "si-oscuro-signore",
    title: "Sì, Oscuro Signore!",
    players: { min: 4, max: 10 },
    duration: "30-45 min",
    category: "Party / Storytelling",
    difficulty: "Facile",
    tags: ["Creativo", "Improvvisazione", "Tutti contro tutti", "Competitivo", "Divertente"],
    description: "Scarica il barile e inventa scuse assurde per giustificare il fallimento della missione davanti all'ira dell'Oscuro Signore Rigor Mortis.",
    image: "https://cf.geekdo-images.com/rKOHJmJWSjKPMVGZlCr6vQ__opengraph/img/43lf32TETSWkz9DF6B3QCMhfZUo=/0x232:524x752/fit-in/1200x630/filters:fill(blur):strip_icc()/pic5335995.jpg"
  },
  {
    id: "sketch",
    title: "Sketch!",
    players: { min: 3, max: 8 },
    duration: "20 min",
    category: "Party / Disegno",
    difficulty: "Facile",
    tags: ["Disegno", "Rapido", "Tutti contro tutti", "Competitivo", "Divertente"],
    description: "Disegna parole d'indizio velocemente, ma con un vincolo: puoi fare solo pochissimi tratti e gli altri devono capire al volo.",
    image: "http://frogames.it/cdn/shop/files/Sketch_00.webp?v=1774173926"
  },
  {
    id: "taboo",
    title: "Taboo",
    players: { min: 4, max: 12 },
    duration: "30 min",
    category: "Party / Parole",
    difficulty: "Facile",
    tags: ["Classico", "Parole", "A squadre", "Competitivo", "Adatto a tutti"],
    description: "Fai indovinare la parola chiave ai tuoi compagni di squadra senza usare i termini vietati (\"taboo\"). La clessidra corre!",
    image: "https://cf.geekdo-images.com/TdOB9V-wTf0LenXk8QWo-A__opengraph/img/EiOacVnTNV_l8vo-wM_2J84V9WI=/0x336:540x620/fit-in/1200x630/filters:strip_icc()/pic8377520.jpg"
  },
  {
    id: "talisman",
    title: "Talisman",
    players: { min: 2, max: 6 },
    duration: "120-180 min",
    category: "Avventura / Fantasy",
    difficulty: "Medio",
    tags: ["Lungo", "Fantasy", "Tutti contro tutti", "Competitivo", "Avventura"],
    description: "Il leggendario gioco d'avventura magica. Potenzia il tuo eroe, combatti mostri e ottieni il Talismano per raggiungere la Corona del Comando.",
    image: "https://cf.geekdo-images.com/PxQnAcYv74J-dJW_s6CHMA__opengraph/img/Y4C7g9ShLjfKpJICkLWm3r-uuSc=/0x0:1200x630/fit-in/1200x630/filters:strip_icc()/pic332870.jpg"
  },
  {
    id: "trivial-pursuit",
    title: "Trivial Pursuit",
    players: { min: 2, max: 6 },
    duration: "45-90 min",
    category: "Classico / Quiz",
    difficulty: "Facile",
    tags: ["Quiz", "Classico", "Tutti contro tutti", "Competitivo", "Cultura"],
    description: "Rispondi a domande divise in 6 categorie per riempire la tua pedina con i triangolini colorati e vincere il duello della cultura generale.",
    image: "https://cf.geekdo-images.com/CSILODNknzqhsDxeP8jmgw__opengraph/img/7cfqFgr02BQz8rvzjD1xed4DcV8=/0x283:1600x1123/fit-in/1200x630/filters:strip_icc()/pic6912883.jpg"
  },
  {
    id: "wherewolf",
    title: "Wherewolf (Lupi nel Villaggio)",
    players: { min: 7, max: 22 },
    duration: "45-60 min",
    category: "Social Deduction / Ruoli",
    difficulty: "Medio",
    tags: ["Grandi Gruppi", "Bluff", "Ruoli Segreti", "A squadre", "Competitivo", "Lupi"],
    description: "La versione più profonda e strategica del celebre gioco dei Lupi (conosciuto anche come Lupi nel Villaggio o Lupus in Tabula). Ruoli complessi con poteri magici e agende segrete in continua evoluzione.",
    image: "https://cf.geekdo-images.com/GdhIy9XhacYI5czt-1dDHw__opengraph/img/awoeTKclHcaqIkX8ZwDQ-kfYEYE=/0x320:406x533/fit-in/1200x630/filters:strip_icc()/pic590726.jpg"
  },
  {
    id: "play-hit",
    title: "Play Hit",
    players: { min: 2, max: 8 },
    duration: "15-30 min",
    category: "Party / Musica",
    difficulty: "Facile",
    tags: ["Musica", "Trivia", "Tutti contro tutti", "Competitivo", "Adatto a tutti"],
    description: "Un divertentissimo party game musicale in cui devi ascoltare canzoni e sfidare i tuoi amici a indovinare il titolo, l'artista o l'anno di uscita.",
    image: "https://cf.geekdo-images.com/YEtRmPX2TJFSjEQSLUjk1A__opengraph/img/mWyoxstfnEFKSZKvYSEpOHWi5N8=/0x233:767x635/fit-in/1200x630/filters:strip_icc()/pic9335600.jpg"
  },
  {
    id: "whos-the-boomer",
    title: "Who's the Boomer?",
    players: { min: 3, max: 8 },
    duration: "20-30 min",
    category: "Party / Quiz",
    difficulty: "Facile",
    tags: ["Quiz", "Generazioni", "Tutti contro tutti", "Competitivo", "Divertente"],
    description: "Un gioco di carte e domande generazionali: chi sarà le il vero 'boomer' del tavolo? Metti alla prova la tua conoscenza della cultura pop di ieri e di oggi!",
    image: "https://www.giocabenesrl.it/images/articoli/dem/large/80342-1.jpg"
  },
  {
    id: "blood-rage",
    title: "Blood Rage",
    players: { min: 3, max: 4 },
    duration: "60-90 min",
    category: "Strategia / Vichinghi",
    difficulty: "Difficile",
    tags: ["Controllo Territorio", "Combattimento", "Drafting", "Tutti contro tutti", "Competitivo"],
    description: "Il Ragnarök è giunto! Guida il tuo clan vichingo in gloriose battaglie, conquiste e mostruose evocazioni prima che il mondo venga distrutto. Un capolavoro di strategia e miniature.",
    image: "https://cf.geekdo-images.com/HkZSJfQnZ3EpS214xtuplg__opengraph/img/-e_Ivk4UX6zI34BX1b0jTlYtBvM=/0x0:2000x1050/fit-in/1200x630/filters:strip_icc()/pic2439223.jpg"
  },
  {
    id: "the-mind-extreme",
    title: "The Mind: Extreme",
    players: { min: 2, max: 4 },
    duration: "20 min",
    category: "Cooperativo / Carte",
    difficulty: "Medio",
    tags: ["Cooperativo", "Sincronia", "Silenzio"],
    description: "Come l'originale The Mind, ma a un livello estremo! Dovete giocare le carte in ordine crescente su due mazzi diversi (uno crescente e uno decrescente), e alcune carte vanno giocate persino al buio, sempre in totale silenzio.",
    image: "https://cf.geekdo-images.com/C-ptukCdLj9kEkO3lofqNw__opengraph/img/vnKi_Jx6TbyRROxOd9T8SCy8-GU=/0x0:1141x599/fit-in/1200x630/filters:strip_icc()/pic5424402.png"
  },
  {
    id: "nobi-nobi-spada-magia",
    title: "Nobi Nobi RPG: Spada e Magia",
    players: { min: 1, max: 5 },
    duration: "30-60 min",
    category: "GDR / Carte",
    difficulty: "Facile",
    tags: ["Ruolo", "Narrativo", "Cooperativo", "Introduzione"],
    description: "L'introduzione perfetta ai giochi di ruolo! Un gioco di carte rapido e narrativo in cui potrai interpretare guerrieri e maghi, affrontare prove folli e creare una storia unica insieme al tuo tavolo.",
    image: "https://cf.geekdo-images.com/xo92oTvkLilbRkg34JgSUA__opengraph/img/C_nTk1td4c9U4M1IQtMSUHFVIKA=/0x53:536x334/fit-in/1200x630/filters:strip_icc()/pic7336321.jpg"
  },
  {
    id: "saltinemente",
    title: "Saltinemente",
    players: { min: 2, max: 6 },
    duration: "30-45 min",
    category: "Party / Parole",
    difficulty: "Facile",
    tags: ["Parole", "Creativo", "Tutti contro tutti", "Competitivo", "Classico"],
    description: "Il grande classico dei giochi di parole (noto anche come Scattergories). Lancia il dado per scegliere una lettera, gira la clessidra e trova risposte creative per ciascuna categoria prima che finisca il tempo!",
    image: "https://cf.geekdo-images.com/eIL4hvMb7ZPgizc7BZOh-g__opengraph/img/tqk_R1HuGTnXK5MfgFqMaLv9LQI=/0x225:779x634/fit-in/1200x630/filters:strip_icc()/pic4994410.jpg"
  },
  {
    id: "casting-shadows",
    title: "Casting Shadows",
    players: { min: 2, max: 4 },
    duration: "30-60 min",
    category: "Strategia / Carte",
    difficulty: "Medio",
    tags: ["Combattimento", "Magia", "Tutti contro tutti", "Competitivo", "Animali"],
    description: "Scegli il tuo simpatico personaggio animale, esplora la mappa per raccogliere risorse e impara potenti incantesimi. Trasformati nella tua forma d'ombra per eliminare i tuoi avversari in questo magico gioco di combattimento.",
    image: "https://cf.geekdo-images.com/LJPwDepTwwbg-cZZLilNQA__opengraph/img/bU8ZKQC0Iag4QSO5Zc9DL5zRwO8=/0x438:600x753/fit-in/1200x630/filters:strip_icc()/pic7507783.jpg"
  },
  {
    id: "here-to-slay",
    title: "Here to Slay",
    players: { min: 2, max: 6 },
    duration: "30-60 min",
    category: "Strategia / Carte",
    difficulty: "Medio",
    tags: ["Eroi", "Mostri", "Tutti contro tutti", "Competitivo", "Bastardo"],
    description: "Crea una squadra di adorabili e letali eroi, affronta temibili mostri e sabota i tuoi avversari! Dai creatori di Unstable Unicorns, un gioco di carte fantasy competitivo, spietato ed estremamente dinamico.",
    image: "https://cf.geekdo-images.com/ozUv3be9fcf28tJk30bNow__opengraph/img/rPK-gZ7Yd385Ah2pp6RDui3l15g=/0x134:900x606/fit-in/1200x630/filters:strip_icc()/pic5181432.jpg"
  },
  {
    id: "cthulhu-death-may-die",
    title: "Cthulhu: Death May Die",
    players: { min: 1, max: 5 },
    duration: "90-120 min",
    category: "Cooperativo / Avventura",
    difficulty: "Difficile",
    tags: ["Cooperativo", "Follia", "Avventura", "Lovecraft"],
    description: "Un frenetico gioco cooperativo in cui dovrete impersonare investigatori negli anni '20 pronti a tutto pur di evocare e sconfiggere i Grandi Antichi prima che distruggano il mondo.",
    image: "https://cf.geekdo-images.com/e8D09pfFsUsoX1D81EeoZg__itemrep/img/Ki4B-y6Am9t18ErzhjSw_L8tKDY=/fit-in/246x300/filters:strip_icc()/pic4705171.jpg"
  },
  {
    id: "aeons-end",
    title: "Aeon's End",
    players: { min: 1, max: 4 },
    duration: "60 min",
    category: "Cooperativo / Strategia",
    difficulty: "Difficile",
    tags: ["Cooperativo", "Deckbuilding", "Strategia", "Fantasy"],
    description: "Difendi Gravehold, l'ultimo avamposto dell'umanità, dagli Invasori Senza Nome. Un gioco cooperativo di carte in stile deckbuilding senza mescolamento del mazzo.",
    image: "https://cf.geekdo-images.com/d50LceHj6LIafa4S_qIsCg__itemrep/img/Uswnuak6armCO4JWTi5_03kl0eo=/fit-in/246x300/filters:strip_icc()/pic3189350.jpg"
  }
];

// Configuration
const WHATSAPP_NUMBER = "393393729188"; // Official booking number

// Dynamic Placeholder for games in development (Playtest)
const PLAYTEST_PLACEHOLDER = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%"><rect width="400" height="300" fill="%23fcfbf7"/><g stroke="%23e05a47" stroke-width="1.5" fill="none" opacity="0.12"><line x1="0" y1="50" x2="400" y2="50"/><line x1="0" y1="100" x2="400" y2="100"/><line x1="0" y1="150" x2="400" y2="150"/><line x1="0" y1="200" x2="400" y2="200"/><line x1="0" y1="250" x2="400" y2="250"/><line x1="50" y1="0" x2="50" y2="300"/><line x1="100" y1="0" x2="100" y2="300"/><line x1="150" y1="0" x2="150" y2="300"/><line x1="200" y1="0" x2="200" y2="300"/><line x1="250" y1="0" x2="250" y2="300"/><line x1="300" y1="0" x2="300" y2="300"/><line x1="350" y1="0" x2="350" y2="300"/></g><rect x="150" y="60" width="100" height="110" rx="8" fill="none" stroke="%23e05a47" stroke-width="2.5" stroke-dasharray="6 4"/><path d="M200 85 L180 125 L220 125 Z" fill="%23e05a47" opacity="0.85"/><circle cx="200" cy="100" r="14" fill="%23fcfbf7" stroke="%23e05a47" stroke-width="2.5"/><path d="M190 140 H210 M180 150 H220" stroke="%23e05a47" stroke-width="2.5" stroke-linecap="round"/><text x="200" y="220" font-family="'Outfit', sans-serif" font-size="20" font-weight="bold" fill="%231e293b" text-anchor="middle">GIOCO IN SVILUPPO</text><text x="200" y="245" font-family="'Inter', sans-serif" font-size="13" font-weight="500" fill="%2364748b" text-anchor="middle">Playtest %26 Feedback Pubblico</text></svg>`;

// Dynamic Placeholder for General Table Booking (without specific game)
const TABLE_BOOKING_PLACEHOLDER = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%"><rect width="400" height="300" fill="%23fcfbf7"/><g stroke="%23e05a47" stroke-width="1.5" fill="none" opacity="0.12"><line x1="0" y1="50" x2="400" y2="50"/><line x1="0" y1="100" x2="400" y2="100"/><line x1="0" y1="150" x2="400" y2="150"/><line x1="0" y1="200" x2="400" y2="200"/><line x1="0" y1="250" x2="400" y2="250"/><line x1="50" y1="0" x2="50" y2="300"/><line x1="100" y1="0" x2="100" y2="300"/><line x1="150" y1="0" x2="150" y2="300"/><line x1="200" y1="0" x2="200" y2="300"/><line x1="250" y1="0" x2="250" y2="300"/><line x1="300" y1="0" x2="300" y2="300"/><line x1="350" y1="0" x2="350" y2="300"/></g><rect x="130" y="55" width="140" height="115" rx="16" fill="%23ffffff" stroke="%23e05a47" stroke-width="2.5"/><text x="200" y="115" font-family="'Outfit', sans-serif" font-size="38" text-anchor="middle">🎲</text><text x="200" y="145" font-family="'Outfit', sans-serif" font-size="14" font-weight="bold" fill="%23e05a47" text-anchor="middle">TAVOLO LIBERO</text><text x="200" y="215" font-family="'Outfit', sans-serif" font-size="20" font-weight="bold" fill="%231e293b" text-anchor="middle">PRENOTAZIONE TAVOLO</text><text x="200" y="240" font-family="'Inter', sans-serif" font-size="13" font-weight="500" fill="%2364748b" text-anchor="middle">Bar Lento · Serate Giochi</text></svg>`;

function getGameImage(game) {
  if (game.image && game.image.trim() !== "") {
    return game.image;
  }
  const isPlaytest = game.category.toLowerCase().includes("playtest") || 
                     game.tags.some(tag => tag.toLowerCase() === "playtest" || tag.toLowerCase() === "in sviluppo" || tag.toLowerCase() === "gioco in sviluppo");
  return isPlaytest ? PLAYTEST_PLACEHOLDER : game.image;
}

// App State
let activeFilters = {
  search: "",
  category: "all",
  players: "any",
  duration: "any",
  difficulty: "any",
  sort: "alpha-asc"
};

// Elements
const gamesGrid = document.getElementById("games-grid");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("filter-category");
const playersFilter = document.getElementById("filter-players");
const durationFilter = document.getElementById("filter-duration");
const difficultyFilter = document.getElementById("filter-difficulty");
const sortFilter = document.getElementById("filter-sort");
const gameModal = document.getElementById("game-modal");
const closeModalBtn = document.getElementById("close-modal");
const bookingForm = document.getElementById("booking-form");
const toggleFiltersBtn = document.getElementById("toggle-filters-btn");
const dropdownsRow = document.querySelector(".dropdowns-row");

// Render Games Card Grid
function renderGames(games) {
  gamesGrid.innerHTML = "";
  
  if (games.length === 0) {
    gamesGrid.innerHTML = `
      <div class="no-results">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
        <p>Nessun gioco corrisponde ai filtri selezionati. Prova a modificarli!</p>
      </div>
    `;
    return;
  }
  
  games.forEach(game => {
    const card = document.createElement("article");
    card.className = "game-card" + (game.exclusive ? " is-exclusive" : "");
    card.setAttribute("data-id", game.id);

    // Create card markup
    card.innerHTML = `
      <div class="card-img-wrapper">
        <img class="game-img" src="${getGameImage(game)}" alt="${game.title}" loading="lazy">
        <span class="game-difficulty-badge ${game.difficulty.toLowerCase()}">${game.difficulty}</span>
        ${game.exclusive ? `<span class="exclusive-ribbon">⭐ ${game.exclusiveLabel || "Esclusiva · Solo su prenotazione"}</span>` : ""}
      </div>
      <div class="card-content">
        <span class="game-category">${game.category}</span>
        <h3 class="game-title">${game.title}</h3>
        <p class="game-short-desc">${game.description.substring(0, 85)}...</p>
        
        <div class="game-specs">
          <span class="spec-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            ${game.players.min}-${game.players.max} Giocatori
          </span>
          <span class="spec-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            ${game.duration}
          </span>
        </div>
        
        <div class="card-tags">
          ${game.tags.slice(0, 2).map(tag => `<span class="tag-badge">${tag}</span>`).join("")}
        </div>
      </div>
    `;
    
    card.addEventListener("click", () => openGameModal(game));
    gamesGrid.appendChild(card);
  });
}

// Filter Logic
function applyFilters() {
  let filtered = GAMES_DATABASE.filter(game => {
    // Search filter
    const matchesSearch = game.title.toLowerCase().includes(activeFilters.search.toLowerCase()) || 
                          game.description.toLowerCase().includes(activeFilters.search.toLowerCase()) ||
                          game.tags.some(tag => tag.toLowerCase().includes(activeFilters.search.toLowerCase()));
    
    // Category filter
    const matchesCategory = activeFilters.category === "all" || 
                            game.category.toLowerCase().includes(activeFilters.category.toLowerCase()) ||
                            game.tags.some(tag => tag.toLowerCase().includes(activeFilters.category.toLowerCase()));
    
    // Players filter
    let matchesPlayers = true;
    if (activeFilters.players !== "any") {
      const count = parseInt(activeFilters.players);
      matchesPlayers = count >= game.players.min && count <= game.players.max;
    }
    
    // Duration filter
    let matchesDuration = true;
    if (activeFilters.duration !== "any") {
      const isShort = game.duration.includes("15") || game.duration.includes("20") || game.duration.includes("30");
      if (activeFilters.duration === "short") {
        matchesDuration = isShort && !game.duration.includes("60") && !game.duration.includes("90");
      } else if (activeFilters.duration === "medium") {
        matchesDuration = game.duration.includes("30") || game.duration.includes("45") || game.duration.includes("60");
      } else if (activeFilters.duration === "long") {
        matchesDuration = game.duration.includes("60") || game.duration.includes("90") || game.duration.includes("120") || game.duration.includes("180");
      }
    }
    
    // Difficulty filter
    let matchesDifficulty = true;
    if (activeFilters.difficulty !== "any") {
      matchesDifficulty = game.difficulty.toLowerCase() === activeFilters.difficulty.toLowerCase();
    }
    
    return matchesSearch && matchesCategory && matchesPlayers && matchesDuration && matchesDifficulty;
  });
  
  // Apply Custom Sorting (Default: Alphabetical A-Z)
  filtered.sort((a, b) => {
    let result = 0;
    if (activeFilters.sort === "alpha-asc") {
      result = a.title.localeCompare(b.title);
    } else if (activeFilters.sort === "alpha-desc") {
      result = b.title.localeCompare(a.title);
    } else if (activeFilters.sort === "difficulty-asc") {
      const difficultyWeights = { "facile": 1, "medio": 2, "difficile": 3 };
      result = difficultyWeights[a.difficulty.toLowerCase()] - difficultyWeights[b.difficulty.toLowerCase()];
    } else if (activeFilters.sort === "difficulty-desc") {
      const difficultyWeights = { "facile": 1, "medio": 2, "difficile": 3 };
      result = difficultyWeights[b.difficulty.toLowerCase()] - difficultyWeights[a.difficulty.toLowerCase()];
    } else if (activeFilters.sort === "players-desc") {
      result = b.players.max - a.players.max;
    } else if (activeFilters.sort === "duration-asc") {
      const getMinMinutes = (dur) => {
        const match = dur.match(/(\d+)/);
        return match ? parseInt(match[1]) : 0;
      };
      result = getMinMinutes(a.duration) - getMinMinutes(b.duration);
    }
    
    // Secondary sorting by Title (A - Z) if values are equal
    if (result === 0) {
      return a.title.localeCompare(b.title);
    }
    return result;
  });
  
  renderGames(filtered);
}

// Modal handling
let currentSelectedGame = null;

function populateGameChoices() {
  const gameSelect = document.getElementById("booking-game-choice");
  if (!gameSelect) return;
  
  const curVal = gameSelect.value;
  gameSelect.innerHTML = `<option value="">Nessuna preferenza (Tavolo libero / Sceglieremo al bar)</option>`;
  
  const sortedGames = [...GAMES_CATALOG].sort((a, b) => a.title.localeCompare(b.title));
  sortedGames.forEach(game => {
    const opt = document.createElement("option");
    opt.value = game.title;
    opt.textContent = `${game.title} (${game.players.min}-${game.players.max} gioc.)`;
    gameSelect.appendChild(opt);
  });
  
  if (curVal) gameSelect.value = curVal;
}

function openGameModal(game) {
  currentSelectedGame = game;
  populateGameChoices();
  
  document.getElementById("modal-game-title").textContent = game.title;
  document.getElementById("modal-game-category").textContent = game.category;
  document.getElementById("modal-game-desc").textContent = game.description;
  document.getElementById("modal-game-players").textContent = `${game.players.min}-${game.players.max} Giocatori`;
  document.getElementById("modal-game-duration").textContent = game.duration;
  document.getElementById("modal-game-difficulty").textContent = game.difficulty;
  
  // Tags
  const tagsContainer = document.getElementById("modal-game-tags");
  tagsContainer.innerHTML = game.tags.map(tag => `<span class="tag-badge">${tag}</span>`).join("");
  
  // Set difficulty class
  const diffBadge = document.getElementById("modal-game-difficulty");
  diffBadge.className = `modal-badge difficulty-badge ${game.difficulty.toLowerCase()}`;
  
  // Image
  const modalImgUrl = getGameImage(game);
  document.getElementById("modal-game-img").src = modalImgUrl;
  document.getElementById("modal-game-img").alt = game.title;
  
  // Set dynamic background image for premium blur effect
  const modalVisual = document.querySelector(".modal-visual");
  if (modalVisual) {
    modalVisual.style.setProperty("--bg-image", `url('${modalImgUrl}')`);
  }
  
  // Titles & text
  const titleEl = document.getElementById("booking-section-title");
  if (titleEl) titleEl.textContent = `Prenota un tavolo per ${game.title}`;
  const subEl = document.getElementById("booking-section-subtitle");
  if (subEl) subEl.textContent = `Ti riserveremo un tavolo e terremo da parte "${game.title}" fino al tuo arrivo. La prenotazione arriva direttamente a Simone su WhatsApp per conferma immediata.`;
  const submitText = document.getElementById("booking-submit-text");
  if (submitText) submitText.textContent = `Prenota Tavolo & ${game.title}`;
  
  // Reset booking form values & set initial people count
  bookingForm.reset();
  const inputPeople = document.getElementById("booking-people");
  if (inputPeople) {
    inputPeople.value = Math.min(Math.max(game.players.min, 4), game.players.max);
  }
  
  const gameChoice = document.getElementById("booking-game-choice");
  if (gameChoice) {
    gameChoice.value = game.title;
  }
  
  // Show modal
  gameModal.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

function openTableBookingModal() {
  currentSelectedGame = null;
  populateGameChoices();
  
  document.getElementById("modal-game-title").textContent = "Prenota un Tavolo al Bar Lento";
  document.getElementById("modal-game-category").textContent = "Lento Game Night · Rimini";
  document.getElementById("modal-game-desc").textContent = "Riserva un tavolo per il tuo gruppo per la serata giochi al Bar Lento. Puoi scegliere liberamente i titoli al tuo arrivo dalla nostra ludoteca, provare i prototipi degli autori o portare liberamente i tuoi giochi da casa!";
  document.getElementById("modal-game-players").textContent = "1-25+ Persone";
  document.getElementById("modal-game-duration").textContent = "Dalle 20:30";
  document.getElementById("modal-game-difficulty").textContent = "Tavoli Liberi";
  
  const diffBadge = document.getElementById("modal-game-difficulty");
  diffBadge.className = "modal-badge difficulty-badge facile";
  
  const tagsContainer = document.getElementById("modal-game-tags");
  tagsContainer.innerHTML = [
    "Tavolo Libero",
    "Ludoteca a Disposizione",
    "Porta i Tuoi Giochi",
    "Cocktail & Piadine",
    "Ingresso Gratuito"
  ].map(tag => `<span class="tag-badge">${tag}</span>`).join("");
  
  document.getElementById("modal-game-img").src = TABLE_BOOKING_PLACEHOLDER;
  document.getElementById("modal-game-img").alt = "Prenotazione Tavolo Bar Lento";
  
  const modalVisual = document.querySelector(".modal-visual");
  if (modalVisual) {
    modalVisual.style.setProperty("--bg-image", `url('${TABLE_BOOKING_PLACEHOLDER}')`);
  }
  
  const titleEl = document.getElementById("booking-section-title");
  if (titleEl) titleEl.textContent = "Prenota il tuo Tavolo";
  const subEl = document.getElementById("booking-section-subtitle");
  if (subEl) subEl.textContent = "Ti riserveremo un tavolo fino al tuo arrivo. La prenotazione arriva direttamente a Simone su WhatsApp per conferma immediata.";
  const submitText = document.getElementById("booking-submit-text");
  if (submitText) submitText.textContent = "Invia Prenotazione Tavolo su WhatsApp";
  
  bookingForm.reset();
  const inputPeople = document.getElementById("booking-people");
  if (inputPeople) {
    inputPeople.value = "4";
  }
  
  const gameChoice = document.getElementById("booking-game-choice");
  if (gameChoice) {
    gameChoice.value = "";
  }
  
  gameModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeGameModal() {
  gameModal.classList.remove("active");
  document.body.style.overflow = "";
  currentSelectedGame = null;
}

// Event Listeners for Filters
if (toggleFiltersBtn && dropdownsRow) {
  toggleFiltersBtn.addEventListener("click", () => {
    const isShowing = dropdownsRow.classList.toggle("show-filters");
    toggleFiltersBtn.classList.toggle("active", isShowing);
  });
}

searchInput.addEventListener("input", (e) => {
  activeFilters.search = e.target.value;
  applyFilters();
});

categoryFilter.addEventListener("change", (e) => {
  activeFilters.category = e.target.value;
  applyFilters();
});

playersFilter.addEventListener("change", (e) => {
  activeFilters.players = e.target.value;
  applyFilters();
});

durationFilter.addEventListener("change", (e) => {
  activeFilters.duration = e.target.value;
  applyFilters();
});

difficultyFilter.addEventListener("change", (e) => {
  activeFilters.difficulty = e.target.value;
  applyFilters();
});

sortFilter.addEventListener("change", (e) => {
  activeFilters.sort = e.target.value;
  applyFilters();
});

// Modal close triggers
closeModalBtn.addEventListener("click", closeGameModal);
gameModal.addEventListener("click", (e) => {
  if (e.target === gameModal) closeGameModal();
});

// ==========================================================================
// GDR One-Shots Handling
// ==========================================================================
const GDR_DATABASE = {
  "hekto-cyberpunk": {
    id: "hekto-cyberpunk",
    title: "Ombre su Hekto: Omicidio nel Sottolivello",
    genre: "CYBERPUNK NOIR · INVESTIGATIVO",
    master: "Stefano",
    playersMax: "Max 3 Giocatori",
    playersLimit: 2,
    status: "open",
    badges: [
      "👤 Master: Stefano",
      "👥 Max 3 Giocatori",
      "🎲 Sistema d100 Veloce",
      "🏙️ Mondo: Hekto (Arcologia)"
    ],
    storyTitle: "L'Indagine nel Sottolivello 600 (Cyberpunk Noir)",
    lore: `
      <p><strong>L'Ambientazione:</strong> Il pianeta <em>Hekto</em> (della Grande Ecclesia Conciliare) è una mostruosa <strong>ecumenopoli</strong>: un mondo-città infinito dove gigantesche arcologie spiralizzano per decine di chilometri verso il cielo e sprofondano per altrettante profondità nella crosta planetaria. Tra fumo industriale, pioggia acida e pubblicità olografiche al neon in stile <em>Blade Runner</em>, i reietti dei sottolivelli non vedono mai la luce della superficie.</p>
      <br>
      <p><strong>Il Caso:</strong> Nei meandri del <strong>Sottolivello 600+</strong>, dove nessuno dall'alto scende mai, viene rinvenuto il cadavere impossibile di un individuo appartenente all'alta società. Il corpo è stato mutilato secondo il rituale delle <strong>Lame della Corona</strong>, una gang di fanatici religiosi spietati e fuori controllo.</p>
      <br>
      <p><strong>La Missione:</strong> Una nobildonna bellissima, facoltosa e misteriosa, nota solo come <strong>"SS"</strong>, assolda l'investigatore privato <strong>Staffan Mahad</strong> offrendo una cifra astronomica (100.000 corone, una fortuna incalcolabile per chi vive laggiù). Mahad scende nella feccia a reclutare tre specialisti disposti a tutto pur di incassare la loro fetta prima che il caso venga insabbiato.</p>
    `,
    systemTitle: "Come si Gioca: Sistema d100 a Percentuale",
    systemDetails: `
      <p>Il sistema è studiato per essere <strong>immediato, veloce e accessibile a tutti</strong>, anche a chi non ha mai aperto un manuale di GDR.</p>
      <div class="system-mechanics-grid">
        <div class="mechanic-item">
          <strong>🎲 Tiro Base d100 (Percentuale)</strong>
          Per ogni azione tiri 2 dadi da 10 (d100): se il risultato è pari o inferiore alla tua percentuale di abilità, l'azione ha successo!
        </div>
        <div class="mechanic-item">
          <strong>📊 150 Punti Statistica</strong>
          Distribuisci 150 punti tra le statistiche chiave: <em>Attacco</em>, <em>Parare / Schivare</em>, <em>Medicina</em>, <em>Intuizione & Sensi</em>, <em>Carisma</em>, <em>Concentrazione</em>.
        </div>
        <div class="mechanic-item">
          <strong>🔍 Intuizione & Percezione</strong>
          Un valore unico che combina vista, udito, fiuto e sesto senso per notare indizi nascosti, trappole e dettagli sulla scena del crimine.
        </div>
        <div class="mechanic-item">
          <strong>💥 Danni & Cure con Dadi Dedicati</strong>
          Le armi e gli strumenti usano dadi classici: d12 per fucili d'assalto, d20+bonus per armi pesanti, d12/d20 per kit medici e cure.
        </div>
      </div>
    `
  },

  "tavolo-2": {
    id: "tavolo-2",
    title: "Green Oaks GDR — One-Shot",
    genre: "GREEN OAKS GDR · COMMEDIA SURREALE",
    master: "Alessandro",
    playersMax: "Max 4 Giocatori",
    playersLimit: 4,
    duration: "~2 Ore",
    system: "Green Oaks GDR",
    status: "open",
    badges: [
      "👤 Master: Alessandro",
      "👥 Max 4 Giocatori",
      "🃏 Mazzo da Briscola",
      "🌴 Vacanza sulla Riviera"
    ],
    storyTitle: "Vacanza da sogno sulla Riviera",
    lore: `
      <p><strong>Benvenuti nella vacanza riminese più esclusiva per Anziani:</strong> la casa di riposo Green Oaks porta i suoi ospiti in una colonia completamente ristrutturata, modernissima e pronta a offrire ogni comfort.</p>
      <br>
      <p>Ci sono <strong>campi da bocce olografici</strong>, croupier pronti per le partite a briscola e un <strong>Open Bar 24/7</strong>. Sembra la vacanza perfetta sulla Riviera.</p>
      <br>
      <p>Ma con il calare della notte alcuni Anziani iniziano a sparire inspiegabilmente. Starà ai nostri eroi capire cosa sta succedendo e quale minaccia incombe sulla loro lussuosissima vacanza.</p>
    `,
    systemTitle: "Come funziona Green Oaks",
    systemDetails: `
      <p><strong>Green Oaks</strong> è un GDR leggero e surreale: si gioca nei panni di Anziani con un passato straordinario, usando un comune <strong>mazzo da briscola</strong> al posto dei dadi. Il caos e le idee dei giocatori costruiscono gran parte della storia al tavolo.</p>
      <div class="system-mechanics-grid">
        <div class="mechanic-item">
          <strong>👴 Crea il tuo Anziano</strong>
          Ogni personaggio è definito da tre Descrittori: chi era, cosa fa da pensionato e qual è il suo hobby. Il passato può essere molto più incredibile di quanto sembri.
        </div>
        <div class="mechanic-item">
          <strong>🃏 Prove con le carte</strong>
          Quando l'esito è incerto, peschi una carta dal mazzo da briscola: valore e seme raccontano cosa accade, senza calcoli complessi.
        </div>
        <div class="mechanic-item">
          <strong>😤 Fastidio e Spocchia</strong>
          I contatori di Fastidio e Spocchia trasformano le lamentele, l'esperienza e le scenate degli Anziani in parte delle regole.
        </div>
        <div class="mechanic-item">
          <strong>🏗️ Avventura pronta al tavolo</strong>
          Il C.A.N.T.I.E.R.E. aiuta il Narratore a far partire una storia anche con poca preparazione; poi le scelte e i racconti degli Anziani la rendono unica.
        </div>
      </div>
    `
  },

  "tavolo-3": {
    id: "tavolo-3",
    title: "Tavolo 3: Avventura Sci-Fi & Spazio (In Arrivo)",
    genre: "SCI-FI & MISTERO · ONE-SHOT",
    master: "In definizione (Staff Delirimedia)",
    playersMax: "3-4 Giocatori",
    playersLimit: 4,
    duration: "~2.5 Ore",
    system: "Regole Narrative Immediate",
    status: "pending",
    badges: [
      "📅 27 Agosto · Ore 20:30",
      "👤 Master: In definizione",
      "👥 Posti da definire",
      "🎲 Regolamento Snello",
      "🚀 Esplorazione & Tensione"
    ],
    storyTitle: "Anteprima Narrativa (In Fase di Scrittura)",
    lore: `
      <p><strong>Lo Stato del Tavolo:</strong> Il terzo tavolo della serata mensile è in cantiere. Un'esperienza immersiva studiata per farti vivere un'avventura cinematografica di 2-3 ore.</p>
      <br>
      <p>Il format One-Shot garantisce che la storia inizi e si concluda nella stessa serata, lasciando spazio a improvvisazione, tensione ed emozioni forti.</p>
      <br>
      <p>Rimani sintonizzato su questa pagina e sui canali social per scoprire la rivelazione del tavolo!</p>
    `,
    systemTitle: "Filosofia di Gioco al Bar Lento",
    systemDetails: `
      <p>Regolamento snello basato su tiri chiave e interpretazione condivisa, senza rallentamenti o calcoli complessi.</p>
      <div class="system-mechanics-grid">
        <div class="mechanic-item">
          <strong>🤝 Cooperazione al Tavolo</strong>
          Il party lavora unito per superare ostacoli, raccogliere indizi e sopravvivere agli imprevisti.
        </div>
        <div class="mechanic-item">
          <strong>👥 Adatto a Neofiti ed Esperti</strong>
          Il Master guiderà le regole passo dopo passo, lasciando ai giocatori la libertà di decidere cosa fare.
        </div>
      </div>
    `
  }
};

let currentSelectedGdr = null;
const gdrModal = document.getElementById("gdr-modal");
const closeGdrModalBtn = document.getElementById("close-gdr-modal");
const gdrBookingForm = document.getElementById("gdr-booking-form");

function openGdrModal(gdrId) {
  const gdr = GDR_DATABASE[gdrId];
  if (!gdr) return;
  
  currentSelectedGdr = gdr;
  
  // Populate modal header data
  document.getElementById("gdr-modal-genre").textContent = gdr.genre;
  document.getElementById("gdr-modal-title").textContent = gdr.title;
  
  // Badges
  const badgesContainer = document.querySelector(".gdr-modal-badges");
  if (badgesContainer && gdr.badges) {
    badgesContainer.innerHTML = gdr.badges.map(b => `<span class="gdr-pill-badge">${b}</span>`).join("");
  }
  
  // Story & Lore
  const storyTitleEl = document.getElementById("gdr-modal-story-title");
  if (storyTitleEl && gdr.storyTitle) storyTitleEl.textContent = gdr.storyTitle;
  document.getElementById("gdr-modal-lore").innerHTML = gdr.lore;
  
  // System Details
  const systemTitleEl = document.getElementById("gdr-modal-system-title");
  if (systemTitleEl && gdr.systemTitle) systemTitleEl.textContent = gdr.systemTitle;
  const systemDescEl = document.getElementById("gdr-modal-system-desc");
  if (systemDescEl && gdr.systemDetails) systemDescEl.innerHTML = gdr.systemDetails;
  
  // Update Booking Form Title & Subtitle based on status
  const bookingTitleEl = document.getElementById("gdr-booking-title");
  const bookingSubEl = document.getElementById("gdr-booking-subtitle");
  const submitBtnEl = document.getElementById("gdr-submit-btn-text");
  
  if (gdr.status === "open") {
    if (bookingTitleEl) bookingTitleEl.textContent = "Prenota un posto per questa One-Shot";
    if (bookingSubEl) bookingSubEl.innerHTML = "Ti riserveremo il posto al tavolo per la serata di <strong>Giovedì 27 Agosto (ore 20:30)</strong>. La prenotazione è gestita direttamente tramite WhatsApp.";
    if (submitBtnEl) submitBtnEl.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="btn-icon"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      Invia Prenotazione su WhatsApp
    `;
  } else {
    if (bookingTitleEl) bookingTitleEl.textContent = "Iscriviti in Lista d'Attesa / Prelazione";
    if (bookingSubEl) bookingSubEl.innerHTML = "Questo tavolo è in fase di completamento per la serata del <strong>27 Agosto</strong>. Inviaci un messaggio per essere avvisato in anteprima non appena apriranno le prenotazioni.";
    if (submitBtnEl) submitBtnEl.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="btn-icon"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      Iscriviti in Lista d'Attesa su WhatsApp
    `;
  }
  
  if (gdrBookingForm) {
    gdrBookingForm.reset();

    const peopleSelect = document.getElementById("gdr-booking-people");
    const playersLimit = gdr.playersLimit || 3;
    if (peopleSelect) {
      peopleSelect.innerHTML = "";
      for (let seats = 1; seats <= playersLimit; seats += 1) {
        const option = document.createElement("option");
        option.value = String(seats);
        option.textContent = seats === playersLimit
          ? `${seats} ${seats === 1 ? "persona" : "persone"} (Tavolo completo)`
          : `${seats} ${seats === 1 ? "persona" : "persone"} (${seats} ${seats === 1 ? "posto" : "posti"})`;
        peopleSelect.appendChild(option);
      }
    }
    
    // Set confirmed event date
    const dateInput = document.getElementById("gdr-booking-date");
    if (dateInput) {
      dateInput.value = "Giovedì 27 Agosto 2026";
    }
  }
  
  gdrModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeGdrModal() {
  if (gdrModal) {
    gdrModal.classList.remove("active");
  }
  document.body.style.overflow = "";
  currentSelectedGdr = null;
}

// Bind GDR triggers (both card click and button click)
document.querySelectorAll(".gdr-card").forEach(card => {
  card.addEventListener("click", (e) => {
    const gdrId = card.getAttribute("data-gdr-id");
    if (gdrId) openGdrModal(gdrId);
  });
  
  // Keyboard access
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const gdrId = card.getAttribute("data-gdr-id");
      if (gdrId) openGdrModal(gdrId);
    }
  });
});

document.querySelectorAll(".open-gdr-modal-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // Avoid double trigger from card
    const gdrId = btn.getAttribute("data-gdr-id");
    if (gdrId) openGdrModal(gdrId);
  });
});

if (closeGdrModalBtn) {
  closeGdrModalBtn.addEventListener("click", closeGdrModal);
}

if (gdrModal) {
  gdrModal.addEventListener("click", (e) => {
    if (e.target === gdrModal) closeGdrModal();
  });
}

// Global escape key listener to close modals
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeGameModal();
    closeGdrModal();
  }
});

// Form GDR Booking Submit to WhatsApp
if (gdrBookingForm) {
  gdrBookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (!currentSelectedGdr) return;
    
    const name = document.getElementById("gdr-booking-name").value.trim();
    const peopleSelect = document.getElementById("gdr-booking-people");
    const people = peopleSelect ? peopleSelect.value : "1";
    const peopleText = peopleSelect ? peopleSelect.options[peopleSelect.selectedIndex].text : `${people} persone`;
    const exp = document.getElementById("gdr-booking-exp").value;
    const time = document.getElementById("gdr-booking-time").value;
    const date = "Giovedì 27 Agosto 2026";
    const notes = document.getElementById("gdr-booking-notes") ? document.getElementById("gdr-booking-notes").value.trim() : "";
    
    const isWaitlist = currentSelectedGdr.status !== "open";
    
    // Build WhatsApp message formatted consistently with game booking
    const textMessage = isWaitlist 
      ? `Ciao! Vorrei iscrivermi alla lista d'attesa per il GDR al Bar Lento! 🐉

📌 Tavolo: *${currentSelectedGdr.title}*
👤 Nome: *${name}*
👥 Posti richiesti: *${peopleText}*
⭐ Esperienza GDR: *${exp}*
📅 Data evento: *${date}*
🕒 Orario: *${time}*${notes ? `\n📝 Note: ${notes}` : ""}

Avvisatemi quando apriranno le iscrizioni! Grazie! ✨`
      : `Ciao! Vorrei prenotare per la serata One-Shot GDR al Bar Lento! 🐉

📌 One-Shot: *${currentSelectedGdr.title}*
👤 Nome: *${name}*
👥 Posti: *${peopleText}*
⭐ Esperienza GDR: *${exp}*
📅 Data: *${date}*
🕒 Orario d'arrivo: *${time}*${notes ? `\n📝 Note: ${notes}` : ""}

Grazie! Ci vediamo giovedì 27 agosto al Lento! 🍻🎲`;

    const encodedText = encodeURIComponent(textMessage);
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    
    // Fallback opening for popup blockers and mobile browsers
    try {
      const waWin = window.open(waLink, "_blank");
      if (!waWin || waWin.closed || typeof waWin.closed === "undefined") {
        window.location.href = waLink;
      }
    } catch (err) {
      window.location.href = waLink;
    }
    closeGdrModal();
  });
}

// ==========================================================================
// Header Navigation Tabs Controller (GDR One-Shot vs Giochi da Tavolo)
// ==========================================================================
const tabBtnGdr = document.getElementById("tab-btn-gdr");
const tabBtnGames = document.getElementById("tab-btn-games");
const gdrSection = document.getElementById("gdr-section");
const boardGamesFilters = document.getElementById("board-games-catalog");
const gamesSection = document.querySelector(".games-section");

function switchTab(tab) {
  if (tab === "gdr") {
    if (tabBtnGdr) tabBtnGdr.classList.add("active");
    if (tabBtnGames) tabBtnGames.classList.remove("active");
    if (gdrSection) gdrSection.style.display = "block";
    if (boardGamesFilters) boardGamesFilters.style.display = "none";
    if (gamesSection) gamesSection.style.display = "none";
  } else {
    if (tabBtnGames) tabBtnGames.classList.add("active");
    if (tabBtnGdr) tabBtnGdr.classList.remove("active");
    if (gdrSection) gdrSection.style.display = "none";
    if (boardGamesFilters) boardGamesFilters.style.display = "block";
    if (gamesSection) gamesSection.style.display = "block";
  }
}

if (tabBtnGdr) {
  tabBtnGdr.addEventListener("click", () => switchTab("gdr"));
}

if (tabBtnGames) {
  tabBtnGames.addEventListener("click", () => switchTab("games"));
}

// Stepper Controller for Board Game Booking (People Count)
const btnPeopleMinus = document.getElementById("btn-people-minus");
const btnPeoplePlus = document.getElementById("btn-people-plus");
const inputPeopleEl = document.getElementById("booking-people");

if (btnPeopleMinus && inputPeopleEl) {
  btnPeopleMinus.addEventListener("click", () => {
    let val = parseInt(inputPeopleEl.value, 10) || 4;
    if (val > 1) {
      inputPeopleEl.value = val - 1;
    }
  });
}

if (btnPeoplePlus && inputPeopleEl) {
  btnPeoplePlus.addEventListener("click", () => {
    let val = parseInt(inputPeopleEl.value, 10) || 4;
    if (val < 30) {
      inputPeopleEl.value = val + 1;
    }
  });
}

// Direct Table Booking Buttons Triggers
const btnHeaderBookTable = document.getElementById("btn-header-book-table");
const btnNoticeBookTable = document.getElementById("btn-notice-book-table");

if (btnHeaderBookTable) {
  btnHeaderBookTable.addEventListener("click", openTableBookingModal);
}
if (btnNoticeBookTable) {
  btnNoticeBookTable.addEventListener("click", openTableBookingModal);
}

// Form Booking Submit to WhatsApp for Board Games & Tables
bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const name = document.getElementById("booking-name").value.trim();
  const peopleNum = parseInt(document.getElementById("booking-people").value, 10) || 4;
  const peopleText = peopleNum === 1 ? "1 persona" : `${peopleNum} persone`;
  const time = document.getElementById("booking-time").value;
  
  const dateSelect = document.getElementById("booking-date");
  const selectedDateText = (dateSelect && dateSelect.selectedIndex >= 0) 
    ? dateSelect.options[dateSelect.selectedIndex].text 
    : "prossima serata";
    
  const gameSelect = document.getElementById("booking-game-choice");
  const chosenGame = gameSelect && gameSelect.value ? gameSelect.value.trim() : (currentSelectedGame ? currentSelectedGame.title : "");
  
  const notesInput = document.getElementById("booking-notes");
  const notes = notesInput ? notesInput.value.trim() : "";
  
  let textMessage;
  if (chosenGame && chosenGame !== "") {
    textMessage = `Ciao Simone! Vorrei prenotare un tavolo per la Lento Game Night.

📌 Gioco desiderato: *${chosenGame}*
👤 Nome prenotazione: *${name}*
👥 Partecipanti: *${peopleText}*
📅 Data: *${selectedDateText}*
🕒 Orario d'arrivo: *${time}*${notes ? `\n💬 Note: *${notes}*` : ""}

Grazie! Ci vediamo al Bar Lento! 🎲🍻`;
  } else {
    textMessage = `Ciao Simone! Vorrei prenotare un tavolo per la Lento Game Night.

🪑 Prenotazione: *Tavolo Libero (sceglieremo sul posto)*
👤 Nome prenotazione: *${name}*
👥 Partecipanti: *${peopleText}*
📅 Data: *${selectedDateText}*
🕒 Orario d'arrivo: *${time}*${notes ? `\n💬 Note: *${notes}*` : ""}

Grazie! Ci vediamo al Bar Lento! 🎲🍻`;
  }
  
  // Encode and open link directly to Simone's WhatsApp
  const encodedText = encodeURIComponent(textMessage);
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
  
  // Fallback opening for popup blockers and mobile browsers
  try {
    const waWin = window.open(waLink, "_blank");
    if (!waWin || waWin.closed || typeof waWin.closed === "undefined") {
      window.location.href = waLink;
    }
  } catch (err) {
    window.location.href = waLink;
  }
  closeGameModal();
});

// Init App
document.addEventListener("DOMContentLoaded", () => {
  applyFilters();
  populateGameChoices();
  
  // Sezione GDR nascosta per ora (nessuna data attiva): default alla ludoteca giochi da tavolo.
  // Per riattivare in futuro, invertire questa condizione per tornare al default "gdr".
  if (window.location.hash === "#gdr-section" || window.location.hash === "#gdr") {
    switchTab("gdr");
  } else {
    switchTab("games");
  }
});
