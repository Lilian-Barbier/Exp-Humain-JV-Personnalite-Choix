

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
    { id: 0, name: "Collectible 0", count: 4, image: "collectible0.png" },
    { id: 1, name: "Collectible 1", count: 4, image: "collectible1.png" },
    { id: 2, name: "Collectible 2", count: 4, image: "collectible2.png" },
    { id: 3, name: "Collectible 3", count: 3, image: "collectible3.png" },
    { id: 4, name: "Collectible 4", count: 3, image: "collectible4.png" },
    { id: 5, name: "Collectible 6", count: 3, image: "collectible6.png" },
    { id: 6, name: "Collectible 7", count: 0, image: "collectible7.png" },
    { id: 7, name: "Collectible 8", count: 0, image: "collectible8.png" },
    { id: 8, name: "Collectible 9", count: 0, image: "collectible9.png" },
    { id: 9, name: "Collectible 10", count: 0, image: "collectible10.png" },
]

questions = [
    {id: 1, question: "Question 1 ?", type: "text"},
    {id: 2, question: "Question 2 ?", type: "value"},
    {id: 3, question: "Question 3 ?", type: "value"},
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
        gainCollectible: 6,
        name: 'Un imprévu financier oblige à trancher : vous pouvez assumer les pertes pour préserver la coopérative, ou demander à la coopérative de les assumer pour vous préserver.',
        C: { text: 'Vous perdez 700€, mais votre coopérative reçoit 1400€', personalScore: 300, teamScore: 0 },
        D: { text: 'Vous recevez 1400€, mais votre coopérative perd 700€', personalScore: 600, teamScore: -300 },
    }, 
    {
        round: 4,
        name: 'Le comptable de la coopérative vous fait confiance et vous a dit de vous servir directement dans le coffre de la coopérative pour votre remboursement de frais. Vous pouvez accepter, ou le laisser comme don à la coopérative, ou encore prendre un peu plus, personne ne le saura.',
        A: { text: 'Vous recevez 450€', personalScore: 450, teamScore: 0 },
        C: { text: 'Vous perdez 450€, mais votre coopérative reçoit 900€', personalScore: -450, teamScore: 900 },
        D: { text: 'Vous recevez 900€, mais votre coopérative perd -450€', personalScore: 900, teamScore: -450 },
     },
     {
        round: 5,
        name: 'Un investissement vous est lucratif. Vous pouvez encaisser les gains tel quel, ou les doubler en demandant une participation à la coopérative.',
        A: { text: 'Vous recevez 700€', personalScore: 700, teamScore: 0 },
        D: { text: 'Vous recevez 1400€, mais votre coopérative perd -700€', personalScore: 1400, teamScore: -700 },
    }, 
    {
        round: 6,
        name: 'Vous touchez une commission sur une vente et avez le choix de la garder, ou de l\'investir dans un projet de la coopérative en ajoutant un complément financier personnel.',
        A: { text: 'Vous recevez 300€', personalScore: 300, teamScore: 0 },
        C: { text: 'Vous perdez 300€, mais votre coopérative reçoit 600€', personalScore: -300, teamScore: 600 },
    }, 
    {
        round: 7,
        gainCollectible: 7,
        name: 'Une subvention a été versée : vous pouvez la laisser à la coopérative, ou en détourner une partie pour votre propre compte.',
        B: { text: 'Votre coopérative reçoit 450€', personalScore: 0, teamScore: 450 },
        D: { text: 'Vous recevez 900€, mais votre coopérative perd 450€', personalScore: 900, teamScore: -450 },
    }, 
    {
       round: 16,
       name: 'Un imprévu financier oblige à trancher : vous pouvez assumer les pertes pour préserver la coopérative, ou demander à la coopérative de les assumer pour vous préserver.',
       A: { text: 'Vous recevez 700€', personalScore: 700, teamScore: 0 },
       B: { text: 'Votre coopérative reçoit 700€', personalScore: 0, teamScore: 700 },
       D: { text: 'Vous recevez 1400€, mais votre coopérative perd 700€', personalScore: 1400, teamScore: -700 },
    },
]