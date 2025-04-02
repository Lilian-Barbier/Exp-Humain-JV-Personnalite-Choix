

let leaderboards = {
    leaderboard: [
        { name: 'Maxou75', score: 23000 },
        { name: 'CamCam92', score: 21000 },
        { name: 'LiliBzh', score: 19000 },
        { name: 'NinaFromParis', score: 17500 },
        { name: 'Momo69', score: 15900 },
        { name: 'AlexRugbyman', score: 14000 },
        { name: 'SosoLaBelle', score: 12500 },
        { name: 'JB_Gaming', score: 11500 },
        { name: 'FloMontagne', score: 10750 },
        { name: 'J10', score: 10000, currentPlayer: true },
        { name: 'Zaza_Croissant', score: 9500 },
        { name: 'ThéoDuSud', score: 9200 },
        { name: 'RomainChill', score: 8900 }
    ],
    globalLeaderboard: [
        {
            name: '',
            score: 55650
        },
        {
            name: '',
            score: 53450
        },
        {
            name: '',
            score: 49250,
            currentCoop: true
        },
        {
            name: '',
            score: 47950
        },
        {
            name: '',
            score: 45350
        }
    ]
}

// il faut avoir le même nombre de coopérative que dans le classement globalLeaderboard
teamName = [
    "Agriculture",
    "Restauration",
    "Artisanat",
    "Transport",
    "Commerce"
]

//info sur les collectibles 
collectibles = [
    { id: 0, name: "Collectible 0", count: 4, image: "collectible0.webp" },
    { id: 1, name: "Collectible 1", count: 4, image: "collectible1.webp" },
    { id: 2, name: "Collectible 2", count: 4, image: "collectible2.webp" },
    { id: 3, name: "Collectible 3", count: 3, image: "collectible3.webp" },
    { id: 4, name: "Collectible 4", count: 3, image: "collectible4.webp" },
    { id: 5, name: "Collectible 6", count: 3, image: "collectible5.webp" },
    { id: 6, name: "Collectible 7", count: 0, image: "collectible6.webp" },
    { id: 7, name: "Collectible 8", count: 0, image: "collectible7.webp" },
    { id: 8, name: "Collectible 9", count: 0, image: "collectible8.webp" },
    { id: 9, name: "Collectible 10", count: 0, image: "collectible9.webp" },
]

questions = [
    { question: "Pour la suite de l'expérience, veuillez répondre aux affirmations selon votre degrès d'accord ou de désaccord.", type: "info" },
    { question: "Dans un premier temps, pour chaque affirmation, cochez selon si vous êtes plutôt \n « 1 - Très fortement en désaccord » ou « 9 - Très fortement en accord ». Les cases intermédiaires servent à nuancer votre réponse.", type: "info" },
    {id: 1, question: "C’est formidable qu’aujourd’hui de nombreux jeunes soient prêts à défier l'autorité.", type: "value3"},
    {id: 2, question: "Ce dont notre pays a le plus besoin, c'est de discipline et que tout le monde suive nos dirigeants dans l'unité.?", type: "value3"},
    {id: 3, question: "L’avortement, la pornographie et le mariage doivent être à nouveau strictement réglementés avant qu’il ne soit trop tard.", type: "value3"},
    {id: 4, question: "Il n'y a rien de mal à avoir une relation d'un soir (relation sexuelle sans lendemain).", type: "value3"},
    {id: 5, question: "Il n'y a rien de mal à avoir eu de nombreux partenaires sexuels.", type: "value3"},
    {id: 6, question: "Il n'y a rien de mal aux mariages libres (mariages où les partenaires sont d'accord pour avoir des relations avec d'autres personnes).", type: "value3"},
    {id: 7, question: "Notre société n'a PAS besoin d'un gouvernement plus sévère et de lois plus strictes.", type: "value3"},
    {id: 8, question: "Les faits relatifs à la criminalité et aux récents troubles publics montrent que nous devons sévir plus durement contre les fauteurs de troubles si nous voulons préserver la loi et l'ordre.", type: "value3"},

    { question: "Dans un second temps, pour chaque affirmation, cochez selon si vous êtes plutôt « 1 - Totalement en désaccord » ou « 7 - Totalement en accord ». Les cases intermédiaires servent à nuancer votre réponse.", type: "info" },
    {id: 9, question: "Certains groupes de personnes sont tout simplement inférieurs aux autres groupes.", type: "value2"},
    {id: 10, question: "L’égalité des groupes devrait être notre idéal.", type: "value2"},
    {id: 11, question: "Parfois, il faut maintenir les autres groupes à leur place.", type: "value2"},
    {id: 12, question: "Dans la mesure du possible, nous devons agir pour que les conditions des différents groupes soient égales.", type: "value2"},
    {id: 13, question: "Pour aller de l’avant dans la vie, il est parfois nécessaire d’écraser d’autres groupes.", type: "value2"},
    {id: 14, question: "Améliorons l’égalité sociale.", type: "value2"},
    {id: 15, question: "C’est probablement une bonne chose qu’il y ait certains groupes au sommet et d’autres au plus bas niveau.", type: "value2"},
    {id: 16, question: "Il y aurait moins de problèmes si l’on traitait les gens de façon plus égalitaire.", type: "value2"},
    {id: 17, question: "Les groupes inférieurs devraient rester à leur place.", type: "value2"},
    {id: 18, question: "Ce serait bien si les groupes pouvaient être égaux.", type: "value2"},

    {id: 19, question: "Je peux devenir complètement absorbé par mes pensées à propos de mes affaires personnelles, ma santé, mes soucis ou mes relations avec les autres.", type: "value2"},
    {id: 20, question: "Je suis facilement blessé par les moqueries et les remarques désobligeantes des autres.", type: "value2"},
    {id: 21, question: "Lorsque j’entre dans une pièce, je deviens souvent un peu mal à l’aise et je sens que tout le monde me regarde.", type: "value2"},
    {id: 22, question: "Je n’aime pas partager avec les autres le mérite d’un accomplissement.", type: "value2"},
    {id: 23, question: "Je n’aime pas être en groupe à moins que je sache que je suis apprécié par au moins une des personnes présentes.", type: "value2"},
    {id: 24, question: "Je sens que j’ai un tempérament différent de la plupart des gens.", type: "value2"},
    {id: 25, question: "J’interprète souvent les remarques des autres de façon personnelle.", type: "value2"},
    {id: 26, question: "Je deviens facilement absorbé par mes propres intérêts et j’oublie l’existence des autres.", type: "value2"},
    {id: 27, question: "Je considère en avoir déjà suffisamment sur les épaules sans avoir à me préoccuper des problèmes des autres.", type: "value2"},
    {id: 28, question: "Sans le laisser paraître, je suis contrarié quand des personnes viennent me parler de leurs problèmes et me demandent du temps et d’être sympathique à ce qu’il leur arrive.", type: "value2"},

    { question: "Pour les prochaines affirmations, veuillez penser à un groupe auquel vous appartenez et qui est particulièrement important pour vous (par exemple : votre pays, votre profession, votre milieu social...).", type: "info" },
    {id: 29, question: "Je souhaite que les autres groupes reconnaissent plus rapidement l’autorité de mon groupe.", type: "value2"},
    {id: 30, question: "Mon groupe mérite un traitement spécial.", type: "value2"},
    {id: 31, question: "Je ne serai jamais satisfait(e) tant que mon groupe n'aura pas obtenu la reconnaissance qu'il mérite.", type: "value2"},
    {id: 32, question: "J'insiste pour que mon groupe reçoive le respect qui lui est dû.", type: "value2"},
    {id: 33, question: "Ça me met vraiment en colère quand d’autres personnes critiquent mon groupe.", type: "value2"},
    {id: 34, question: "Si mon groupe avait son mot à dire dans le monde, celui-ci serait un bien meilleur endroit.", type: "value2"},
    {id: 35, question: "Cela ne m'énerve pas lorsque les gens ne remarquent pas les accomplissements de mon groupe.", type: "value2"},
    {id: 36, question: "Peu de gens semblent pleinement comprendre l’importance de mon groupe.", type: "value2"},
    {id: 37, question: "La vraie valeur de mon groupe est souvent incomprise.", type: "value2"},

    { question: "Dans un dernier temps, pour chaque affirmation, cochez selon si vous êtes plutôt « 1 - Pas du tout d'accord » ou « 5 - Tout à fait d'accord ». Les cases intermédiaires servent à nuancer votre réponse.", type: "info" },
    {id: 38, question: "Les gens me voient comme un leader né.", type: "value1"},
    {id: 39, question: "Je déteste être au centre de l’attention.", type: "value1"}, // Item inversé (5=1 ; 4=2 ...)
    {id: 40, question: "Beaucoup d’activités de groupe ont tendance à être ennuyeuses sans moi.", type: "value1"},
    {id: 41, question: "Je sais que je suis quelqu’un de spécial car tout le monde ne cesse de me le dire.", type: "value1"},
    {id: 42, question: "J’aime faire connaissance avec des gens importants.", type: "value1"},
    {id: 43, question: "Je suis embarrassé(e) lorsqu’on me complimente.", type: "value1"}, // Item inversé (5=1 ; 4=2 ...)
    {id: 44, question: "J’ai été comparé(e) à des personnes célèbres.", type: "value1"},
    {id: 45, question: "Je suis un individu moyen.", type: "value1"}, // Item inversé (5=1 ; 4=2 ...)
    {id: 46, question: "J’exige obtenir le respect que je mérite.", type: "value1"},

    { question: "Pour finir cette expérience, voici quelques questions socio-démographique :", type: "info" },
    {id: 47, question: "Quel est votre genre ?", type: "genre"}, // 3 choix : Féminin / Masculin / Autre
    {id: 48, question: "Quel est votre âge ?", type: "age"}, // Chiffre de 2 caractères max
    {id: 49, question: "Êtes-vous en cours de formation (ex : études supérieurs) ?", type: "yn"}, // 2 choix : Oui / Non
    {id: 50, question: "Quel est votre orientation politique ? (1 = Extrême droite et 7 = Extrême gauche ; les réponses intermédiaires servent à nuancer votre positionnement)", type: "value2"},
    {id: 51, question: "Comment situez-vous votre niveau de vie ? Au niveau 1 se trouvent les personnes les plus mal loties, qui ont le moins d'argent, le moins d'éducation et la pire situation professionnelle. Au niveau 5 se trouvent les personnes les mieux loties, qui ont le plus d'argent, le plus d'éducation et la meilleure situation professionnelle. Les niveaux intermétiaires vous permettent de modérer votre réponse. ", type: "value1"},
    {id: 52, question: "Avez-vous des remarques sur cette recherche (incompréhensions, questionnement sur les objectifs de recherche...) ?", type: "text"},
]

// Pour info les codes : 
// A : Choix asocial
// B : Choix pro-social léger
// C : Choix pro-social lourd
// D : Choix anti-social
let roundsInfos = [
    {
        round: 0,
        name: 'Ceci est une manche test pour vous familiariser avec le jeu. Ci-dessous, vous pouvez voir les choix possibles et leurs conséquences. Imaginons, ici, que vous recevez 100€, vous pouvez vous garder cette argent ou le verser à la coopérative (ce choix n\'aura pas de conséquences sur les scores). Ensuite, plus bas, vous avez des outils à collecter (sans conséquences sur les scores) dont vous pouvez distribuer vos doubles ou non aux autres joueurs. Enfin, vous pouvez avoir accès au classement tout en bas de l\'écran.',
        A: { text: 'Vous recevez 100€', personalScore: 0, teamScore: 0 },
        B: { text: 'Votre coopérative reçoit 100€', personalScore: 0, teamScore: 0 },
    },
    {
        round: 1,
        name: 'C\'est maintenant que le jeu commance, votre coopérative est actuellement en 3ème position. Elle procède à un appel au don : Vous pouvez choisir de partager vos derniers revenus, ou de les garder pour vous.',
        A: { text: 'Vous recevez 550€', personalScore: 550, teamScore: 0 },
        B: { text: 'Votre coopérative reçoit 550€', personalScore: 0, teamScore: 550 },
    },    
    {
        round: 2,
        name: 'Une affaire se présente mais vous n\'avez pas les ressources requises : vous pouvez soit les acheter vous même, soit utiliser celles de la coopérative.',
        A: { text: 'Vous recevez 300€', personalScore: 300, teamScore: 0 },
        D: { text: 'Vous recevez 600€, mais votre coopérative perd 300€', personalScore: 600, teamScore: -300 },
    }, 
    {
        round: 3,
        gainCollectible: 6, // Est-ce qu'il y a un message pour que le joueur sache qu'il a gagné un collectible ?
        name: 'Un imprévu financier oblige à trancher : vous pouvez assumer les pertes pour préserver la coopérative, ou demander à la coopérative de les assumer pour vous préserver.',
        C: { text: 'Vous perdez 700€, mais votre coopérative reçoit 1400€', personalScore: 300, teamScore: 0 },
        D: { text: 'Vous recevez 1400€, mais votre coopérative perd 700€', personalScore: 600, teamScore: -300 },
    }, 
    {
        round: 4,
        name: 'Le comptable de la coopérative vous fait confiance et vous a dit de vous servir directement dans le coffre de la coopérative pour votre remboursement de frais. Vous pouvez accepter, ou le laisser comme don à la coopérative, ou encore prendre un peu plus, personne ne le saura.',
        A: { text: 'Vous recevez 450€', personalScore: 450, teamScore: 0 },
        C: { text: 'Vous perdez 450€, mais votre coopérative reçoit 900€', personalScore: -450, teamScore: 900 },
        D: { text: 'Vous recevez 900€, mais votre coopérative perd 450€', personalScore: 900, teamScore: -450 },
     },
    {
        round: 5,
        name: 'Vous touchez une commission sur une vente et avez le choix de la garder, ou de l\'investir dans un projet de la coopérative en ajoutant un complément financier personnel.',
        A: { text: 'Vous recevez 300€', personalScore: 300, teamScore: 0 },
        C: { text: 'Vous perdez 300€, mais votre coopérative reçoit 600€', personalScore: -300, teamScore: 600 },
    }, 
    {
        round: 6,
        name: 'Un investissement vous est lucratif. Vous pouvez encaisser les gains tel quel, ou les doubler en demandant une participation à la coopérative.',
        A: { text: 'Vous recevez 700€', personalScore: 700, teamScore: 0 },
        D: { text: 'Vous recevez 1400€, mais votre coopérative perd 700€', personalScore: 1400, teamScore: -700 },
    }, 
    {
        round: 7,
        gainCollectible: 7,
        name: 'Une subvention a été versée : vous pouvez la laisser à la coopérative, ou en détourner une partie pour votre propre compte.',
        B: { text: 'Votre coopérative reçoit 450€', personalScore: 0, teamScore: 450 },
        D: { text: 'Vous recevez 900€, mais votre coopérative perd 450€', personalScore: 900, teamScore: -450 },
    }, 
    {
        round: 8,
        name: 'En vérifiant vos comptes, vous remarquez un trop-perçu par la coopérative. Vous pouvez soit rendre la somme en excès, soit la verser entièrement à la coopérative, soit la garder en totalité. ',
        A: { text: 'Vous recevez 550€', personalScore: 550, teamScore: 0 },
        B: { text: 'Votre coopérative reçoit 550€', personalScore: 0, teamScore: 550 },
        D: { text: 'Vous recevez 1100€, mais votre coopérative perd 550€', personalScore: 1100, teamScore: -550 },
     },
     {
        round: 9,
        name: 'Un client satisfait laisse un bonus, libre à vous de le prendre pour vous, ou de le verser intégralement à la coopérative.',
        A: { text: 'Vous recevez 700€', personalScore: 700, teamScore: 0 },
        B: { text: 'Votre coopérative reçoit 700€', personalScore: 0, teamScore: 700 },
    },    
    {
        round: 10,
        name: 'Un investissement vous est lucratif. Vous pouvez encaisser les gains tel quel, ou les doubler en demandant une participation à la coopérative.',
        A: { text: 'Vous recevez 450€', personalScore: 450, teamScore: 0 },
        D: { text: 'Vous recevez 900€, mais votre coopérative perd 450€', personalScore: 900, teamScore: -450 },
    }, 
    {
        round: 11,
        gainCollectible: 8,
        name: 'Un projet rentable se présente : soit vous investissez un peu maintenant pour faire prospérer la coopérative, soit vous demander à la coopérative d\'investir dans votre entreprise.',
        C: { text: 'Vous perdez 550€, mais votre coopérative reçoit 1100€', personalScore: 550, teamScore: 1100 },
        D: { text: 'Vous recevez 1100€, mais votre coopérative perd 550€', personalScore: 1100, teamScore: -550 },
    }, 
    {
        round: 12,
        name: 'Un investissement risqué pourrait rapporter gros. Vous préférez jouer la sécurité et récupérer un petit gain, ou vous investissez pour faire grandir la coopérative, ou vous investissez l\'argent de la coopérative pour bénéficier d\'un gain important. ',
        A: { text: 'Vous recevez 300€', personalScore: 300, teamScore: 0 },
        C: { text: 'Vous perdez 300€, mais votre coopérative reçoit 600€', personalScore: -300, teamScore: 600 },
        D: { text: 'Vous recevez 600€, mais votre coopérative perd 300€', personalScore: 600, teamScore: -300 },
     },
     {
        round: 13,
        name: 'Vous recevez un trop perçu des impôts de l\'année passée : soit vous gardez cette somme, soit vous en profitez pour renouveler une partie du parc informatique de la coopérative.',
        A: { text: 'Vous recevez 450€', personalScore: 450, teamScore: 0 },
        C: { text: 'Vous perdez 450€, mais votre coopérative reçoit 900€', personalScore: -450, teamScore: 900 },
    }, 
    {
        round: 14,
        name: 'Une opportunité se présente : Un client, que la coopérative vous envoie, vous sollicite. Vous pouvez accepter la rémunération en soustrayant la part coopérative, ou prendre cette part pour doubler vos revenus.',
        A: { text: 'Vous recevez 550€', personalScore: 550, teamScore: 0 },
        D: { text: 'Vous recevez 1100€, mais votre coopérative perd 550€', personalScore: 1100, teamScore: -550 },
    }, 
    {
        round: 15,
        gainCollectible: 9,
        name: 'Un fournisseur vous propose une affaire exceptionnelle : un lot de matériaux à prix cassé, mais il y a un problème. La coopérative a déjà négocié un contrat avec un autre fournisseur. Soit vous utilisez le fournisseur de la coopérative, soit vous passez par cette offre parallèle en mettant en difficulté l’accord collectif.',
        B: { text: 'Votre coopérative reçoit 300€', personalScore: 0, teamScore: 300 },
        D: { text: 'Vous recevez 600€, mais votre coopérative perd 300€', personalScore: 600, teamScore: -300 },
    }, 
    {
       round: 16,
       name: 'Un imprévu financier oblige à trancher : vous pouvez assumer les pertes pour préserver la coopérative, ou demander à la coopérative de les assumer pour vous préserver.',
       A: { text: 'Vous recevez 700€', personalScore: 700, teamScore: 0 },
       B: { text: 'Votre coopérative reçoit 700€', personalScore: 0, teamScore: 700 },
       D: { text: 'Vous recevez 1400€, mais votre coopérative perd 700€', personalScore: 1400, teamScore: -700 },
    },
]