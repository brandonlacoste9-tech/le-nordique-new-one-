import heroQuebec from "@/assets/hero-quebec.jpg";
import politique from "@/assets/politique.jpg";
import environnement from "@/assets/environnement.jpg";
import culture from "@/assets/culture.jpg";
import economie from "@/assets/economie.jpg";
import energie from "@/assets/energie.jpg";
import sports from "@/assets/sports.jpg";

export type Category = "politique" | "culture" | "economie" | "environnement";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; cite?: string };

export type Locale = {
  kicker: string;
  title: string;
  dek: string;
  body: Block[];
};

export type Article = {
  slug: string;
  category: Category;
  image: string;
  imageCaption?: { fr: string; en: string };
  author: string;
  readMin: number;
  date: string;
  fr: Locale;
  en: Locale;
};

export const categoryMeta: Record<Category, { fr: string; en: string; path: string; image: string }> = {
  politique: { fr: "Politique", en: "Politics", path: "/politique", image: politique },
  culture: { fr: "Culture", en: "Culture", path: "/culture", image: culture },
  economie: { fr: "Économie", en: "Economy", path: "/economie", image: economie },
  environnement: { fr: "Environnement", en: "Environment", path: "/environnement", image: environnement },
};

export const articles: Article[] = [
  {
    slug: "loi-quebec-langue",
    category: "politique",
    image: heroQuebec,
    imageCaption: {
      fr: "Le parlement de Québec au crépuscule. Photo : Le Nordique.",
      en: "Quebec's parliament at dusk. Photo: The Nordique.",
    },
    author: "Marie Tremblay",
    readMin: 9,
    date: "2026-05-08",
    fr: {
      kicker: "Analyse",
      title: "Comment la nouvelle loi linguistique redessine le Québec",
      dek: "Trois ans après son adoption, la loi 96 transforme silencieusement le travail, l'école et la justice. Bilan d'une réforme qui divise encore.",
      body: [
        { type: "p", text: "Quand le projet de loi 96 a été adopté à l'Assemblée nationale en 2022, ses partisans promettaient un tournant. Trois ans plus tard, l'effet réel est plus complexe que prévu — et il varie radicalement selon votre code postal." },
        { type: "p", text: "À Montréal, les commerces affichent désormais leurs marques en français de façon prédominante. Dans les régions, l'effet est presque invisible : la loi codifie une réalité déjà existante. Mais derrière cette image rassurante se cachent des transformations plus profondes." },
        { type: "h2", text: "Le terrain réel : les tribunaux" },
        { type: "p", text: "C'est dans les palais de justice que les conséquences sont les plus marquées. Les avocats anglophones rapportent des délais accrus, et plusieurs causes ont été reportées faute de personnel bilingue. Le Barreau du Québec, prudent en public, multiplie les notes internes." },
        { type: "quote", text: "On ne mesure pas encore l'ampleur du virage. Mais dans cinq ans, la profession ne ressemblera plus à ce qu'elle est aujourd'hui.", cite: "Une avocate de Montréal" },
        { type: "h2", text: "L'école, l'autre champ de bataille" },
        { type: "p", text: "Le plafonnement des inscriptions au cégep anglophone a redirigé près de 8 000 étudiants vers le réseau francophone depuis 2024. Les directions saluent le mouvement ; les étudiants concernés, eux, parlent surtout d'un parcours plus long." },
        { type: "p", text: "Reste une question que personne n'ose poser à voix haute : la loi 96 atteint-elle ses propres objectifs démographiques ? Les premières données de l'OQLF, attendues à l'automne, donneront un début de réponse." },
      ],
    },
    en: {
      kicker: "Analysis",
      title: "How Quebec's new language law is quietly redrawing the province",
      dek: "Three years after its passage, Bill 96 is reshaping work, schools and the courts. A status report on a reform that still divides.",
      body: [
        { type: "p", text: "When Bill 96 passed the National Assembly in 2022, its supporters promised a turning point. Three years later, the real effect is more complex than expected — and it varies sharply by postal code." },
        { type: "p", text: "In Montreal, shops now display their brands predominantly in French. In the regions, the effect is nearly invisible: the law codifies a reality that was already there. But behind that reassuring picture lie deeper transformations." },
        { type: "h2", text: "The real ground: the courts" },
        { type: "p", text: "It's in the courthouses that the consequences are most visible. Anglophone lawyers report longer delays, and several cases have been postponed for lack of bilingual staff. The Barreau du Québec, cautious in public, is multiplying internal memos." },
        { type: "quote", text: "We don't yet grasp the scale of the shift. But in five years, the profession will no longer look the way it does today.", cite: "A Montreal lawyer" },
        { type: "h2", text: "Schools, the other battleground" },
        { type: "p", text: "Capping enrolments at English-language CEGEPs has redirected nearly 8,000 students into the francophone network since 2024. Administrators welcome the move; the students themselves mostly describe a longer path." },
        { type: "p", text: "One question no one dares ask aloud: is Bill 96 actually meeting its own demographic targets? The first OQLF data, expected this fall, will start to answer." },
      ],
    },
  },
  {
    slug: "hydro-quebec-pari",
    category: "economie",
    image: energie,
    imageCaption: {
      fr: "Vue aérienne du complexe La Grande, Baie-James.",
      en: "Aerial view of the La Grande complex, James Bay.",
    },
    author: "Étienne Gagnon",
    readMin: 12,
    date: "2026-05-07",
    fr: {
      kicker: "Enquête",
      title: "Le pari à 185 milliards d'Hydro-Québec",
      dek: "La société d'État veut doubler sa production d'ici 2050. Reportage sur un plan industriel sans précédent — et sur ses critiques.",
      body: [
        { type: "p", text: "C'est le plus grand projet industriel de l'histoire du Québec. Et presque personne n'en comprend les détails." },
        { type: "p", text: "Hydro-Québec promet d'ajouter 60 TWh de capacité d'ici 2050 pour répondre à la demande des batteries, de l'aluminium vert et de l'IA. Le plan, déposé sans grand débat public, suppose la construction de barrages, de parcs éoliens et de lignes à haute tension dans des régions où l'acceptabilité sociale n'est pas acquise." },
        { type: "h2", text: "Une note salée" },
        { type: "p", text: "Le coût total : 185 milliards de dollars d'ici 2035. C'est l'équivalent de quatre fois le budget annuel du ministère de la Santé. La société d'État affirme pouvoir financer le tout sans hausse tarifaire majeure. Plusieurs économistes en doutent." },
        { type: "quote", text: "On vend l'idée d'une transition sans douleur. Or, toutes les transitions énergétiques de l'histoire ont été douloureuses.", cite: "Pierre-Olivier Pineau, HEC Montréal" },
        { type: "h2", text: "L'angle mort autochtone" },
        { type: "p", text: "Plusieurs nations cries et innues réclament un droit de regard formel sur les nouveaux projets. Québec promet des « ententes de partenariat » mais refuse pour l'instant tout droit de veto. Le bras de fer ne fait que commencer." },
      ],
    },
    en: {
      kicker: "Investigation",
      title: "Hydro-Québec's $185-billion bet",
      dek: "The state utility wants to double its output by 2050. A look at an unprecedented industrial plan — and its critics.",
      body: [
        { type: "p", text: "It's the largest industrial project in Quebec history. And almost no one understands the details." },
        { type: "p", text: "Hydro-Québec promises to add 60 TWh of capacity by 2050 to meet demand from batteries, green aluminum, and AI. The plan, filed with little public debate, assumes the construction of dams, wind farms, and high-voltage lines in regions where social acceptance is not guaranteed." },
        { type: "h2", text: "A steep bill" },
        { type: "p", text: "Total cost: $185 billion by 2035. That's roughly four times the annual budget of the health ministry. The utility says it can finance the whole thing without major rate hikes. Several economists are skeptical." },
        { type: "quote", text: "They're selling the idea of a painless transition. But every energy transition in history has been painful.", cite: "Pierre-Olivier Pineau, HEC Montréal" },
        { type: "h2", text: "The Indigenous blind spot" },
        { type: "p", text: "Several Cree and Innu nations are demanding a formal say over new projects. Quebec promises 'partnership agreements' but, for now, refuses any veto right. The standoff is only beginning." },
      ],
    },
  },
  {
    slug: "foret-boreale",
    category: "environnement",
    image: environnement,
    author: "Sophie Lavoie",
    readMin: 7,
    date: "2026-05-06",
    fr: {
      kicker: "Climat",
      title: "La forêt boréale brûle plus vite qu'elle ne repousse",
      dek: "Une étude majeure démontre que le seuil critique est franchi pour le tiers nord du Québec.",
      body: [
        { type: "p", text: "Pour la première fois, des chercheurs de l'UQAT chiffrent ce que les Cris savaient déjà : les feux gagnent du terrain." },
        { type: "p", text: "Entre 2015 et 2025, le Québec a perdu en moyenne 1,3 million d'hectares de forêt par année à cause des incendies. La régénération naturelle, elle, ne dépasse plus 900 000 hectares. Le déficit est désormais structurel." },
        { type: "h2", text: "Une bascule discrète" },
        { type: "p", text: "Cette bascule signifie que la forêt boréale, longtemps puits de carbone net, devient lentement une source. Les modèles climatiques utilisés par Ottawa devront être révisés." },
        { type: "quote", text: "On parle d'un changement d'état du territoire. Pas d'une mauvaise saison.", cite: "Yves Bergeron, UQAT" },
      ],
    },
    en: {
      kicker: "Climate",
      title: "The boreal forest is burning faster than it grows back",
      dek: "A major study shows that the critical threshold has been crossed for the northern third of Quebec.",
      body: [
        { type: "p", text: "For the first time, UQAT researchers have quantified what the Cree already knew: the fires are winning." },
        { type: "p", text: "Between 2015 and 2025, Quebec lost an average of 1.3 million hectares of forest per year to fire. Natural regeneration now caps out at 900,000 hectares. The deficit is now structural." },
        { type: "h2", text: "A quiet tipping point" },
        { type: "p", text: "This shift means that the boreal forest, long a net carbon sink, is slowly becoming a source. The climate models Ottawa relies on will have to be revised." },
        { type: "quote", text: "We're talking about a change in the state of the land. Not a bad season.", cite: "Yves Bergeron, UQAT" },
      ],
    },
  },
  {
    slug: "renouveau-cinema-quebecois",
    category: "culture",
    image: culture,
    author: "Camille Dubois",
    readMin: 6,
    date: "2026-05-05",
    fr: {
      kicker: "Cinéma",
      title: "Le renouveau silencieux du cinéma québécois",
      dek: "Une nouvelle génération de cinéastes — souvent issues de l'immigration — redéfinit ce que veut dire « film québécois ».",
      body: [
        { type: "p", text: "À Cannes cette année, trois films québécois étaient en sélection. Aucun n'aurait pu être fait il y a dix ans." },
        { type: "p", text: "Tournés en français, en arabe, en créole haïtien, ils racontent un Québec pluriel que l'industrie a longtemps tenu à distance. Le succès international force aujourd'hui Téléfilm Canada à revoir ses critères de financement." },
        { type: "h2", text: "Un tournant générationnel" },
        { type: "p", text: "Les écoles de cinéma de Montréal — l'INIS, Concordia, l'UQAM — voient passer des cohortes plus diverses que jamais. Les budgets, eux, n'ont pas suivi. Plusieurs de ces films sont tournés pour moins d'un million." },
        { type: "quote", text: "On ne demande pas une faveur. On fait un cinéma qui ressemble enfin à la rue.", cite: "Une cinéaste, 32 ans" },
      ],
    },
    en: {
      kicker: "Cinema",
      title: "The quiet revival of Quebec cinema",
      dek: "A new generation of filmmakers — often immigrants — is redefining what \"Quebec film\" even means.",
      body: [
        { type: "p", text: "At Cannes this year, three Quebec films were in selection. None could have been made ten years ago." },
        { type: "p", text: "Shot in French, Arabic, and Haitian Creole, they tell the story of a plural Quebec the industry long kept at arm's length. International success is now forcing Telefilm Canada to revisit its funding criteria." },
        { type: "h2", text: "A generational shift" },
        { type: "p", text: "Montreal's film schools — INIS, Concordia, UQAM — are graduating more diverse cohorts than ever. Budgets have not followed. Many of these films are shot for less than a million dollars." },
        { type: "quote", text: "We're not asking for a favour. We're making a cinema that finally looks like the street.", cite: "A filmmaker, 32" },
      ],
    },
  },
  {
    slug: "montreal-startups",
    category: "economie",
    image: economie,
    author: "Jean-Philippe Roy",
    readMin: 8,
    date: "2026-05-04",
    fr: {
      kicker: "Économie",
      title: "Montréal, capitale discrète de l'IA appliquée",
      dek: "Pourquoi les géants américains ouvrent des laboratoires ici — et pourquoi cela ne suffit pas.",
      body: [
        { type: "p", text: "MILA, Element AI, Borealis : la liste est longue. Mais combien d'entre elles restent québécoises ?" },
        { type: "p", text: "Depuis 2017, Montréal accueille plus d'une vingtaine de laboratoires d'IA appartenant à des multinationales. Le talent local, formé à grands frais publics, est aspiré par des salaires américains. Le retour sur investissement, lui, est encore difficile à mesurer." },
        { type: "h2", text: "Le piège du transfert" },
        { type: "p", text: "Les chercheurs partent rarement. Mais leurs brevets, eux, sont déposés à San Francisco. C'est tout le débat sur la propriété intellectuelle qui revient sur la table." },
        { type: "quote", text: "Nous formons les meilleurs au monde. Nous capturons une fraction de la valeur qu'ils créent.", cite: "Un dirigeant d'incubateur" },
      ],
    },
    en: {
      kicker: "Economy",
      title: "Montreal, the quiet capital of applied AI",
      dek: "Why American giants are opening labs here — and why that's not enough.",
      body: [
        { type: "p", text: "MILA, Element AI, Borealis: the list is long. But how many remain Quebec-owned?" },
        { type: "p", text: "Since 2017, Montreal has welcomed more than twenty AI labs belonging to multinationals. Local talent, trained at significant public cost, is being pulled in by American salaries. The return on investment is still hard to measure." },
        { type: "h2", text: "The transfer trap" },
        { type: "p", text: "Researchers rarely leave. But their patents are filed in San Francisco. The whole debate over intellectual property is back on the table." },
        { type: "quote", text: "We train the best in the world. We capture a fraction of the value they create.", cite: "An incubator director" },
      ],
    },
  },
  {
    slug: "canadiens-saison",
    category: "culture",
    image: sports,
    author: "Luc Bélanger",
    readMin: 5,
    date: "2026-05-03",
    fr: {
      kicker: "Sports",
      title: "Le Canadien et le poids d'une nation",
      dek: "Pourquoi une équipe de hockey reste, malgré tout, le miroir d'un peuple.",
      body: [
        { type: "p", text: "Cent quinze ans après sa fondation, le club n'est plus seulement une équipe. C'est une institution culturelle." },
        { type: "p", text: "Les défaites du Canadien font la une bien au-delà des pages sport. Sa direction est scrutée comme un cabinet ministériel. Et chaque embauche d'un entraîneur unilingue anglophone déclenche un débat national." },
        { type: "h2", text: "Une fidélité qui s'effrite ?" },
        { type: "p", text: "Chez les jeunes, l'attachement au CH faiblit. Le hockey reste roi, mais il partage désormais le trône avec le soccer et le basketball — les sports d'un Québec plus diversifié." },
      ],
    },
    en: {
      kicker: "Sports",
      title: "The Canadiens and the weight of a nation",
      dek: "Why a hockey team is still, somehow, the mirror of a people.",
      body: [
        { type: "p", text: "A hundred and fifteen years after its founding, the club is no longer just a team. It's a cultural institution." },
        { type: "p", text: "Habs losses make front pages well beyond the sports section. Its management is scrutinized like a cabinet. And every hiring of a unilingual anglophone coach triggers a national debate." },
        { type: "h2", text: "A loyalty that's fraying?" },
        { type: "p", text: "Among young people, attachment to the CH is weakening. Hockey is still king, but it now shares the throne with soccer and basketball — the sports of a more diverse Quebec." },
      ],
    },
  },
  {
    slug: "logement-quebec",
    category: "politique",
    image: politique,
    author: "Anne-Marie Côté",
    readMin: 10,
    date: "2026-05-02",
    fr: {
      kicker: "Politique",
      title: "Crise du logement : ce que Québec refuse de faire",
      dek: "Les outils existent. La volonté politique, beaucoup moins. Décryptage.",
      body: [
        { type: "p", text: "Vienne le fait. Helsinki le fait. Pourquoi pas Québec ?" },
        { type: "p", text: "Plus de 60 % des logements à Vienne sont publics ou subventionnés. À Montréal, ce chiffre tombe sous les 11 %. Pourtant, la province possède la SHQ, les outils fiscaux, et même les terrains. Ce qui manque, c'est l'engagement budgétaire." },
        { type: "h2", text: "Le mirage du marché" },
        { type: "p", text: "Pendant vingt ans, on a parié sur le privé pour livrer du logement abordable. Le résultat : des loyers qui ont doublé à Montréal en dix ans, et un parc locatif qui se vide vers Airbnb." },
        { type: "quote", text: "Le marché n'a jamais réglé une crise du logement. Il l'a toujours créée.", cite: "Une chercheuse de l'INRS" },
      ],
    },
    en: {
      kicker: "Politics",
      title: "Housing crisis: what Quebec refuses to do",
      dek: "The tools exist. The political will, much less so. A breakdown.",
      body: [
        { type: "p", text: "Vienna does it. Helsinki does it. Why not Quebec?" },
        { type: "p", text: "More than 60% of housing in Vienna is public or subsidized. In Montreal, the figure falls below 11%. Yet the province has the SHQ, the fiscal tools, even the land. What's missing is the budgetary commitment." },
        { type: "h2", text: "The market mirage" },
        { type: "p", text: "For twenty years, we bet on the private sector to deliver affordable housing. The result: rents that doubled in Montreal in ten years, and a rental stock draining into Airbnb." },
        { type: "quote", text: "The market has never solved a housing crisis. It has always created one.", cite: "An INRS researcher" },
      ],
    },
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(cat: Category) {
  return articles.filter((a) => a.category === cat);
}
