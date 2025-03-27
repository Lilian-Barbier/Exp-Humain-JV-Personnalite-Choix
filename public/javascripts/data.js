

let leaderboards = {
    leaderboard: [
        { name: 'J1', score: 23000 },
        { name: 'J2', score: 21000 },
        { name: 'J3', score: 19000 },
        { name: 'J4', score: 17500 },
        { name: 'J5', score: 15900 },
        { name: 'J6', score: 14000 },
        { name: 'J7', score: 12500 },
        { name: 'J8', score: 11500 },
        { name: 'J9', score: 10750 },
        { name: 'J10', score: 10000, currentPlayer: true },
        { name: 'J11', score: 9500 },
        { name: 'J12', score: 9200 },
        { name: 'J13', score: 8900 }
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
    "Coopérative 1",
    "Coopérative 2",
    "Coopérative 3",
    "Coopérative 4",
    "Coopérative 5"
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
// A : Choix individuel neutre
// B : Choix pro-social léger
// C : Choix pro-social lourd
// D : Choix individuel anti-social
let roundsInfos = [
    {
        round: 1,
        name: 'Appel au don annuel de la coopérative',
        A: { text: 'Vous recevez 550€', personalScore: 550, teamScore: 0 },
        B: { text: 'Votre coopérative reçoit 550€', personalScore: 0, teamScore: 550 },
    },
    // {
    //     round: 2,
    //     name: 'Vous pouvez vous rémunérer normalement, ou demander une subvention supplémentaire à votre coopérative',
    //     A: { text: 'Vous recevez 300€', personalScore: 300, teamScore: 0 },
    //     D: { text: 'Vous recevez 300€ et votre coopérative vous reverse 300€ supplémentaire de ses fonds', personalScore: 300, teamScore: -300 },
    // },    
    // {
    //     round: 3,
    //     gainCollectible: 6,
    //     name: 'L\'état propose une aide financiere, mais en contrepartie la coopérative ou vous devez payer une charge supplémentaire de 700€',
    //     C: { text: 'Vous donnez 700€ mais la coopérative en gagne 1400€', personalScore: -700, teamScore: 1400 },
    //     D: { text: 'Vous recevez 1400€, mais la coopérative en perdras 700€', personalScore: 1400, teamScore: -700 },
    // }, 
    // {
    //     round: 4,
    //     name: 'L\'état propose une aide financiere, mais en contrepartie la coopérative ou vous devez payer une charge supplémentaire de 700€',
    //     A: { text: 'Vous recevez 450€', personalScore: 450, teamScore: 0 },
    //     C: { text: 'Vous donnez 450€ mais la coopérative en gagne 900€', personalScore: -450, teamScore: 900 },
    //     D: { text: 'Vous recevez 900€, mais la coopérative doit en donner 450€', personalScore: 900, teamScore: -450 },
    // },
]