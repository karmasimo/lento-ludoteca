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
    tags: ["Playtest", "Carte", "Tutti contro tutti", "Competitivo", "Made in Rimini", "Folle"],
    description: "Il nuovo e folle gioco di carte in sviluppo da DELIRIMEDIA. Provalo in anteprima alle Lento Game Nights, partecipa al playtesting pubblico e lascia il tuo feedback!",
    image: "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?auto=format&fit=crop&q=80&w=600"
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

function getGameImage(game) {
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
    card.className = "game-card";
    card.setAttribute("data-id", game.id);
    
    // Create card markup
    card.innerHTML = `
      <div class="card-img-wrapper">
        <img class="game-img" src="${getGameImage(game)}" alt="${game.title}" loading="lazy">
        <span class="game-difficulty-badge ${game.difficulty.toLowerCase()}">${game.difficulty}</span>
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

function openGameModal(game) {
  currentSelectedGame = game;
  
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
  
  // Reset booking form values
  bookingForm.reset();
  
  // Show modal
  gameModal.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent background scroll
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

// Form Booking Submit to WhatsApp
bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  if (!currentSelectedGame) return;
  
  const name = document.getElementById("booking-name").value.trim();
  const people = document.getElementById("booking-people").value;
  const time = document.getElementById("booking-time").value;
  const date = document.getElementById("booking-date").value || "prossimo giovedì";
  
  // Build message template
  const textMessage = `Ciao! Vorrei prenotare un tavolo per la Lento Game Night.
  
📌 Gioco: *${currentSelectedGame.title}*
👤 Nome: *${name}*
👥 Persone: *${people}*
📅 Data: *${date}*
🕒 Orario d'arrivo: *${time}*

Grazie! Ci vediamo lì! 🎲`;
  
  // Encode and open link
  const encodedText = encodeURIComponent(textMessage);
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
  
  // Open in new tab
  window.open(waLink, "_blank");
  closeGameModal();
});

// Init App
document.addEventListener("DOMContentLoaded", () => {
  applyFilters();
  
  // Setup date picker default (next Thursday)
  const dateInput = document.getElementById("booking-date");
  if (dateInput) {
    const today = new Date();
    const nextThursday = new Date(today);
    nextThursday.setDate(today.getDate() + ((4 - today.getDay() + 7) % 7 || 7));
    
    // Format YYYY-MM-DD
    const yyyy = nextThursday.getFullYear();
    const mm = String(nextThursday.getMonth() + 1).padStart(2, "0");
    const dd = String(nextThursday.getDate()).padStart(2, "0");
    
    dateInput.value = `${yyyy}-${mm}-${dd}`;
    dateInput.min = `${yyyy}-${mm}-${dd}`;
  }
});
