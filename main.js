

let roundIndex = 1;

// Éléments du DOM
let round;
let leaderboardBody;
let globalLeaderboardBody;
let roundChoice;

let choiceA;
let choiceB;
let choiceC;
let choiceD;

let submitChoiceButton;

let spinnerBackground;

let roundTitle;

let realPlayerName = 'Le vrai joueur';

let currentChoiceCode;


const choices = [];

window.onload = () => {
    round = document.getElementById('round');
    leaderboardBody = document.getElementById('leaderboard-body');
    globalLeaderboardBody = document.getElementById('global-leaderboard-body');

    roundChoice = document.getElementById('round-choice');
    choiceA = document.getElementById('choice-A');
    choiceB = document.getElementById('choice-B');
    choiceC = document.getElementById('choice-C');
    choiceD = document.getElementById('choice-D');
    roundTitle = document.getElementById('round-title');

    submitChoiceButton = document.getElementById('submit-choice');

    spinnerBackground = document.getElementById('spinner-background');
    spinnerBackground.style.display = 'none';

    submitChoiceButton.addEventListener('click', FinishRound);

    round.innerHTML = `Manche ${roundIndex}`;

    UpdateLeaderboard();
    UpdateChoice();

    choiceA.addEventListener('click', () => ButtonChoice('A'));
    choiceB.addEventListener('click', () => ButtonChoice('B'));
    choiceC.addEventListener('click', () => ButtonChoice('C'));
    choiceD.addEventListener('click', () => ButtonChoice('D'));

}

function SelectChoice(choice) {
    document.querySelector(`#choice-${choice} .btn`).style.borderColor = "#84d8ff";
    document.querySelector(`#choice-${choice} .btn`).style.backgroundColor = "#ddf4ff";
}

function UnselectChoice(choice) {
    document.querySelector(`#choice-${choice} .btn`).style.borderColor = "#e5e5e5";
    document.querySelector(`#choice-${choice} .btn`).style.backgroundColor = "#ffffff";
}

function ButtonChoice(choiceCode) {

    currentChoiceCode = choiceCode;
    submitChoiceButton.disabled = false;

    ['A', 'B', 'C', 'D'].forEach(code => {
        if (code === choiceCode) {
            SelectChoice(code);
        } else {
            UnselectChoice(code);
        }
    });

}

function FinishRound() {
 
    currentPlayer = leaderboards.leaderboard.find(player => player.currentPlayer === true);
    currentTeam = leaderboards.globalLeaderboard.find(team => team.currentCoop === true);

    switch (currentChoiceCode) {
        case 'A':
            currentPlayer.score += roundsInfos[roundIndex - 1].A.personalScore;
            currentTeam.score += roundsInfos[roundIndex - 1].A.teamScore;
            break;
        case 'B':
            currentPlayer.score += roundsInfos[roundIndex - 1].B.personalScore;
            currentTeam.score += roundsInfos[roundIndex - 1].B.teamScore;
            break;
        case 'C':
            currentPlayer.score += roundsInfos[roundIndex - 1].C.personalScore;
            currentTeam.score += roundsInfos[roundIndex - 1].C.teamScore;
        break;
        case 'D':
            currentPlayer.score += roundsInfos[roundIndex - 1].D.personalScore;
            currentTeam.score += roundsInfos[roundIndex - 1].D.teamScore;
            break;
    }

    spinnerBackground.style.display = 'flex';

    UpdateLeaderboard();

    setTimeout(() => {
        roundIndex++;
        round.innerHTML = `Manche ${roundIndex}`;
    
        UpdateChoice();

        ButtonChoice();

        spinnerBackground.style.display = 'none';
    }, "1000");
}

// Call the function to move the row

function UpdateChoice() {
    choiceA.style.display = 'none';
    choiceB.style.display = 'none';
    choiceC.style.display = 'none';
    choiceD.style.display = 'none';

    if (roundIndex > roundsInfos.length) {
        alert('Fin du jeu ' + choices + ' ' + roundIndex);
        return;
    }
    else {
        let currentRound = roundsInfos[roundIndex - 1];

        roundTitle.innerHTML = currentRound.name;

        if (currentRound.A) {
            choiceA.style.display = 'block';
            document.querySelector("#choice-A .btn-text").innerHTML = currentRound.A.text;
        }
        if (currentRound.B) {
            choiceB.style.display = 'block';
            document.querySelector("#choice-B .btn-text").innerHTML = currentRound.B.text;
        }
        if (currentRound.C) {
            choiceC.style.display = 'block';
            document.querySelector("#choice-C .btn-text").innerHTML = currentRound.C.text;
        }
        if (currentRound.D) {
            choiceD.style.display = 'block';
            document.querySelector("#choice-D .btn-text").innerHTML = currentRound.D.text;
        }
    }
}


function UpdateLeaderboard() {

    //sort leaderboards
    leaderboards.leaderboard = leaderboards.leaderboard.sort((a, b) => b.score - a.score);
    leaderboards.globalLeaderboard = leaderboards.globalLeaderboard.sort((a, b) => b.score - a.score);

    leaderboardBody.innerHTML = '';
    globalLeaderboardBody.innerHTML = '';

    let index = 1;

    leaderboards.leaderboard.forEach(player => {

        if (player.currentPlayer === true) {
            leaderboardBody.innerHTML += `
                <tr id="current-player">
                    <td>${index}</td> 
                    <td>${realPlayerName}</td> 
                    <td>${player.score}</td>
                </tr>`;
        }
        else {
            leaderboardBody.innerHTML +=
                `<tr>
                    <td>${index}</td> 
                    <td>${player.name}</td> 
                    <td>${player.score}</td>
                </tr>`;
        }

        index++;
    });


    index = 1;
    leaderboards.globalLeaderboard.forEach(team => {
        if (team.currentCoop === true) 
        {
            globalLeaderboardBody.innerHTML += `
                <tr id="current-coop">
                    <td>${index}</td> 
                    <td>${team.name}</td> 
                    <td>${team.score}</td>
                </tr>`;
        }
        else {
            globalLeaderboardBody.innerHTML += `<tr><td>${index}</td><td>${team.name}</td> <td>${team.score}</td></tr>`;
        }

            index++;
    });
}

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
            name: 'Equipe 1',
            score: 55650
        },
        {
            name: 'Equipe 2',
            score: 53450
        },
        {
            name: 'Equipe 3',
            score: 49250,
            currentCoop: true
        },
        {
            name: 'Equipe 4',
            score: 47950
        },
        {
            name: 'Equipe 4',
            score: 45350
        }
    ]
}


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
    {
        round: 2,
        name: 'Vous pouvez vous rémunérer normalement, ou demander une subvention supplémentaire à votre coopérative',
        A: { text: 'Vous recevez 300€', personalScore: 300, teamScore: 0 },
        D: { text: 'Vous recevez 300€ et votre coopérative vous reverse 300€ supplémentaire de ses fonds', personalScore: 300, teamScore: -300 },
    },    
    {
        round: 3,
        name: 'L\'état propose une aide financiere, mais en contrepartie la coopérative ou vous devez payer une charge supplémentaire de 700€',
        C: { text: 'Vous donnez 700€ mais la coopérative en gagne 1400€', personalScore: -700, teamScore: 1400 },
        D: { text: 'Vous recevez 1400€, mais la coopérative en perdras 700€', personalScore: 1400, teamScore: -700 },
    }, 
    {
        round: 4,
        name: 'L\'état propose une aide financiere, mais en contrepartie la coopérative ou vous devez payer une charge supplémentaire de 700€',
        A: { text: 'Vous recevez 450€', personalScore: 450, teamScore: 0 },
        C: { text: 'Vous donnez 450€ mais la coopérative en gagne 900€', personalScore: -450, teamScore: 900 },
        D: { text: 'Vous recevez 900€, mais la coopérative doit en donner 450€', personalScore: 900, teamScore: -450 },
    },
]