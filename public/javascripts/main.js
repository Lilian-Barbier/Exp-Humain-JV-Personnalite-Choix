

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


let roundTitle;


//Différent conteneurs => correspondants au différentes pages
let gameContainer;
let informationContainer;
let startQuestionContainer;
let endGameQuestionContainer;
let revelationContainer;
let finalContainer;

let pseudoInput;

let submitChoiceButton;
let startGameButton;


//information du joueur
const choices = [];
let realPlayerName = 'Le vrai joueur';
let cooperativeName = '';

let sendCollectible = false;
let dontSendCollectible = false;

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

    submitChoiceButton.addEventListener('click', FinishRound);
    submitChoiceButton.disabled = true;

    document.getElementById('participate').addEventListener('click', ShowInformationQuestion);
    
    startGameButton = document.getElementById('start-game');
    startGameButton.addEventListener('click', StartGame);

    document.getElementById('accept').addEventListener('click', ShowFinal);
    document.getElementById('end-game').addEventListener('click', ShowRevelation);

    gameContainer = document.getElementById('game-container');
    informationContainer = document.getElementById('information-container');
    startQuestionContainer = document.getElementById('start-question-container');
    endGameQuestionContainer = document.getElementById('end-game-question-container');
    revelationContainer = document.getElementById('revelation-container');
    finalContainer = document.getElementById('final-container');

    InitLeaderboard();

    startQuestionContainer.style.display = 'none';
    endGameQuestionContainer.style.display = 'none';
    gameContainer.style.display = 'none';
    revelationContainer.style.display = 'none';
    finalContainer.style.display = 'none';

    if(localStorage.getItem('gameFinished') === 'true'){
        informationContainer.style.display = 'none';
        finalContainer.style.display = 'flex';
    }

    round.innerHTML = `Manche ${roundIndex}`;

    pseudoInput = document.getElementById('pseudo');
    realPlayerName = pseudoInput.value;
    startGameButton.disabled = pseudoInput.value.length === 0;

    pseudoInput.addEventListener('input', () => {
        startGameButton.disabled = pseudoInput.value.length === 0;
        realPlayerName = pseudoInput.value;
    });

    const coopContainer = document.getElementById('coop-radio');
    teamName.forEach((team, index) => {
          const radioDiv = document.createElement('div');
          const radioInput = document.createElement('input');
          radioInput.type = 'radio';
          radioInput.id = `coop${index + 1}`;
          radioInput.name = 'cooperative';
          radioInput.value = `${index + 1}`;
          radioInput.classList.add('coop-radio-input');
          
          if (index === 0) {
                radioInput.checked = true;
          }
          
          const radioLabel = document.createElement('label');
          radioLabel.htmlFor = `coop${index + 1}`;
          radioLabel.innerText = team;
          
          radioDiv.appendChild(radioInput);
          radioDiv.appendChild(radioLabel);
          coopContainer.appendChild(radioDiv);
     });

    UpdateCollectibles();
    InitQuestions();
    UpdateChoice();

    choiceA.addEventListener('click', () => ButtonChoice('A'));
    choiceB.addEventListener('click', () => ButtonChoice('B'));
    choiceC.addEventListener('click', () => ButtonChoice('C'));
    choiceD.addEventListener('click', () => ButtonChoice('D'));

    document.getElementById('send').addEventListener('click', () => {
        SelectButton('send');
        UnselectButton('dont-send');

        sendCollectible = true;
        dontSendCollectible = false
    });

    
    document.getElementById('dont-send').addEventListener('click', () => {
        UnselectButton('send');
        SelectButton('dont-send');

        sendCollectible = false;
        dontSendCollectible = true;
    });

}

function ShowInformationQuestion() {
    informationContainer.style.display = 'none';
    startQuestionContainer.style.display = 'flex';
    gameContainer.style.display = 'none';
}

function ShowEndGameQuestion(){
    informationContainer.style.display = 'none';
    startQuestionContainer.style.display = 'none';
    gameContainer.style.display = 'none';
    endGameQuestionContainer.style.display = 'flex';
}

function ShowRevelation(){
    endGameQuestionContainer.style.display = 'none';
    revelationContainer.style.display = 'flex';
}

function ShowFinal(){

    //send data to server
    const userResponses = collectUserResponses();
    console.log("Réponses de l'utilisateur:", userResponses);
    console.log(choices);

    fetch('/response', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userResponses, choices, cooperativeName })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data successfully sent to the server:', data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
    
    //on enregistre dans le local storage qu'il à finis le jeu
    localStorage.setItem('gameFinished', true);

    revelationContainer.style.display = 'none';
    finalContainer.style.display = 'flex';
}


function StartGame() {

    const selectedCoop = document.querySelector('input[name="cooperative"]:checked');
    const selectedCoopLabel = document.querySelector(`label[for="${selectedCoop.id}"]`).innerText;
    cooperativeName = selectedCoopLabel; 
    

    //traitement du leaderboards global pour ajouter le nom de la coopérative du joueur
    leaderboards.globalLeaderboard.forEach(team => {
        if (team.currentCoop) {
            team.name = cooperativeName;
        }
        else{
            let name = teamName.shift();
          
            if(name == cooperativeName)
                name = teamName.shift();

            team.name = name;
        }
    });

    UpdateLeaderboard();

    informationContainer.style.display = 'none';
    startQuestionContainer.style.display = 'none';
    gameContainer.style.display = 'flex';
}

function SelectChoice(choice) {
    document.querySelector(`#choice-${choice}`).style.backgroundColor = "#927A43";
    document.querySelector(`#choice-${choice}`).style.color = "#ffffff";
}

function UnselectChoice(choice) {
    document.querySelector(`#choice-${choice}`).style.backgroundColor = "#ffffff";
    document.querySelector(`#choice-${choice}`).style.color = "#B29B5F";
}

function SelectButton(selector) {
    document.querySelector(`#${selector}`).style.backgroundColor = "#927A43";
    document.querySelector(`#${selector}`).style.color = "#ffffff";
}

function UnselectButton(selector) {
    document.querySelector(`#${selector}`).style.backgroundColor = "#ffffff";
    document.querySelector(`#${selector}`).style.color = "#B29B5F";
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

    if(sendCollectible)
    {
        let collectible = collectibles.filter(collectible => collectible.count > 1);
        if(collectible !== undefined)
        {
            let randomIndex = Math.floor(Math.random() * collectible.length);
            collectible[randomIndex].count--;
        }
    }

    choices.push({
        round: roundIndex,
        choice: currentChoiceCode,
        personalScore: currentPlayer.score,
        teamScore: currentTeam.score,
        sendCollectible: sendCollectible,
        dontSendCollectible : dontSendCollectible
    });

    sendCollectible = false;
    dontSendCollectible = false;

    OpenCloseLeaderboard()
    UpdateLeaderboard();

    setTimeout(() => {
        roundIndex++;
        round.innerHTML = `Manche ${roundIndex}`;
    
        UnselectButton('send');
        UnselectButton('dont-send');

        UpdateChoice();
        UpdateCollectibles();
        ButtonChoice();

        if(roundsInfos[roundIndex-1].gainCollectible !== undefined) 
        {
            collectibles.find(collectible => collectible.id === roundsInfos[roundIndex -1].gainCollectible).count++;
            UpdateCollectibles();
            showNotification(`Vous avez reçu un nouveau collectible : 
                <img src='images/${collectibles[roundsInfos[roundIndex -1].gainCollectible].image}'/>`);
        } 

        submitChoiceButton.disabled = true;

    }, "1000");
}

// Call the function to move the row

function UpdateChoice() {
    choiceA.style.display = 'none';
    choiceB.style.display = 'none';
    choiceC.style.display = 'none';
    choiceD.style.display = 'none';

    if (roundIndex > roundsInfos.length) {

        document.getElementById('round-choice').style.display = 'none';
        document.getElementById('round').style.display = 'none';
        let finish = document.getElementById('finish-game');
        finish.style.display = 'block';
        finish.addEventListener('click', () => {
            ShowEndGameQuestion();        
        });

        return;
    }
    else {
        let currentRound = roundsInfos[roundIndex - 1];

        roundTitle.innerHTML = currentRound.name;

        if (currentRound.A) {
            choiceA.style.display = 'flex';
            document.querySelector("#choice-A .btn-text").innerHTML = currentRound.A.text;
        }
        if (currentRound.B) {
            choiceB.style.display = 'flex';
            document.querySelector("#choice-B .btn-text").innerHTML = currentRound.B.text;
        }
        if (currentRound.C) {
            choiceC.style.display = 'flex';
            document.querySelector("#choice-C .btn-text").innerHTML = currentRound.C.text;
        }
        if (currentRound.D) {
            choiceD.style.display = 'flex';
            document.querySelector("#choice-D .btn-text").innerHTML = currentRound.D.text;
        }
    }
}

function UpdateCollectibles() {
    let collectiblesDom = document.getElementById('collectible-container');
    collectiblesDom.innerHTML = '';
    collectibles.forEach((collectible, index) => {
        const collectibleDiv = document.createElement('div');
        collectibleDiv.className = 'collectible-item';
        collectibleDiv.dataset.id = index;

        const img = document.createElement('img');
        img.src = `images/${collectible.image}`;
        collectibleDiv.appendChild(img);

        const span = document.createElement('span');
        span.innerText = `x${collectible.count}`;
        collectibleDiv.appendChild(span);

        if(collectible.count == 0)
            collectibleDiv.classList.add('collectible-disabled');

        collectiblesDom.appendChild(collectibleDiv);
    });
}

function UpdateLeaderboard() {

    //sort leaderboards
    leaderboards.leaderboard = leaderboards.leaderboard.sort((a, b) => b.score - a.score);
    leaderboards.globalLeaderboard = leaderboards.globalLeaderboard.sort((a, b) => b.score - a.score);

    leaderboardBody.innerHTML = '';
    globalLeaderboardBody.innerHTML = '';

    let index = 1;

    leaderboards.leaderboard.forEach(player => {

        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${player.currentPlayer ? realPlayerName : player.name}</td>
            <td>${player.score}</td>
        `;
        
        if (player.currentPlayer === true) {
            row.setAttribute('id', 'current-player');
        }

        setTimeout((row) => {
           row.style.opacity = 1;
        }, 100 * index, row);

        leaderboardBody.appendChild(row);
        
        index++;
    });


    index = 1;
    leaderboards.globalLeaderboard.forEach(team => {

        const row = document.createElement('tr');

         row.innerHTML = `
            <td>${index}</td> 
            <td>${team.name}</td> 
            <td>${team.score}</td>
        `;
        
        if (team.currentCoop === true) {
            row.setAttribute('id', 'current-coop');
        }

        setTimeout((row) => {
           row.style.opacity = 1;
        }, 100 * index, row);

        globalLeaderboardBody.appendChild(row);

        index++;
    });
}

function InitQuestions(){

    let endGameQuestion = document.getElementById('end-game-question');

    questions.forEach(question => {
    
        const questionId = `question-${question.id}`;
        
        if(question.type === "text"){
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            questionDiv.dataset.id = questionId;

            questionDiv.innerHTML = `
                <p>${question.question}</p>
                <div>
                    <input type="text" name="${questionId}" placeholder="Votre réponse">
                </div>
            `;

            endGameQuestion.appendChild(questionDiv);
        }
        else if(question.type === "info"){
            const questionDiv = document.createElement('div');

            questionDiv.innerHTML = `
                <p>${question.question}</p>
            `;

            endGameQuestion.appendChild(questionDiv);
        }
        else if(question.type === "value1"){
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            questionDiv.dataset.id = questionId;

            questionDiv.innerHTML = `
                <p>${question.question}</p>
                <div>
                    <label><input type="radio" name="${questionId}" value="1"> 1</label>
                    <label><input type="radio" name="${questionId}" value="2"> 2</label>
                    <label><input type="radio" name="${questionId}" value="3"> 3</label>
                    <label><input type="radio" name="${questionId}" value="4"> 4</label>
                    <label><input type="radio" name="${questionId}" value="5"> 5</label>
                </div>
            `;

            endGameQuestion.appendChild(questionDiv);
        }
        else if(question.type === "value2"){
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            questionDiv.dataset.id = questionId;

            questionDiv.innerHTML = `
                <p>${question.question}</p>
                <div>
                    <label><input type="radio" name="${questionId}" value="1"> 1</label>
                    <label><input type="radio" name="${questionId}" value="2"> 2</label>
                    <label><input type="radio" name="${questionId}" value="3"> 3</label>
                    <label><input type="radio" name="${questionId}" value="4"> 4</label>
                    <label><input type="radio" name="${questionId}" value="5"> 5</label>
                    <label><input type="radio" name="${questionId}" value="6"> 6</label>
                    <label><input type="radio" name="${questionId}" value="7"> 7</label>
                </div>
            `;

            endGameQuestion.appendChild(questionDiv);
        }
        else if(question.type === "value3"){
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            questionDiv.dataset.id = questionId;

            questionDiv.innerHTML = `
                <p>${question.question}</p>
                <div>
                    <label><input type="radio" name="${questionId}" value="1"> 1</label>
                    <label><input type="radio" name="${questionId}" value="2"> 2</label>
                    <label><input type="radio" name="${questionId}" value="3"> 3</label>
                    <label><input type="radio" name="${questionId}" value="4"> 4</label>
                    <label><input type="radio" name="${questionId}" value="5"> 5</label>
                    <label><input type="radio" name="${questionId}" value="6"> 6</label>
                    <label><input type="radio" name="${questionId}" value="7"> 7</label>
                    <label><input type="radio" name="${questionId}" value="8"> 8</label>
                    <label><input type="radio" name="${questionId}" value="9"> 9</label>
                </div>
            `;

            endGameQuestion.appendChild(questionDiv);
        }
        else if(question.type === "genre"){
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            questionDiv.dataset.id = questionId;

            questionDiv.innerHTML = `
                <p>${question.question}</p>
                <div>
                    <label><input type="radio" name="${questionId}" value="1"> Masculin</label>
                    <label><input type="radio" name="${questionId}" value="2"> Féminin</label>
                    <label><input type="radio" name="${questionId}" value="3"> Autre</label>
                </div>
            `;

            endGameQuestion.appendChild(questionDiv);
        }
        else if(question.type === "age"){
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            questionDiv.dataset.id = questionId;

            questionDiv.innerHTML = `
                <p>${question.question}</p>
                <div>
                    <input type="number" name="${questionId}" placeholder="Votre âge" min="0" max="120" onkeypress="return event.charCode >= 48 && event.charCode <= 57">
                </div>
            `;

            endGameQuestion.appendChild(questionDiv);
        }
        else if(question.type === "yn"){
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            questionDiv.dataset.id = questionId;

            questionDiv.innerHTML = `
                <p>${question.question}</p>
                <div>
                    <label><input type="radio" name="${questionId}" value="1"> Oui</label>
                    <label><input type="radio" name="${questionId}" value="2"> Non</label>
                </div>
            `;

            endGameQuestion.appendChild(questionDiv);
        }
    
    });

    // Pour les questions à choix multiples (radio buttons)
    const radioInputs = document.querySelectorAll('#end-game-question input[type="radio"]');
    radioInputs.forEach(radio => {
        radio.addEventListener('change', updateEndGameButtonState);
    });
    
    // Pour les questions textuelles
    const textInputs = document.querySelectorAll('#end-game-question input[type="text"]');
    textInputs.forEach(input => {
        input.addEventListener('input', updateEndGameButtonState);
    });

    // Pour les questions d'âge
    const ageInputs = document.querySelectorAll('#end-game-question input[type="number"]');
    ageInputs.forEach(input => {
        input.addEventListener('input', updateEndGameButtonState);
    });

    updateEndGameButtonState();
}

// Fonction pour mettre à jour l'état du bouton end-game
function updateEndGameButtonState() {
    const endGameButton = document.getElementById('end-game');
    endGameButton.disabled = !areAllQuestionsAnswered();
}

// Fonction pour vérifier si toutes les questions ont été répondues
function areAllQuestionsAnswered() {
    let allAnswered = true;
    
    questions.forEach((question) => {
        const questionId = `question-${question.id}`;
        
        if (question.type === "age") {
            const textInput = document.querySelector(`input[name="${questionId}"]`);
            if (!textInput || textInput.value.trim() === "") {
                allAnswered = false;
            }
        }
        else if (question.type === "value1" ||question.type === "value2" || question.type === "value3" || question.type === "genre" || question.type === "yn") {
            const selectedRadio = document.querySelector(`input[name="${questionId}"]:checked`);
            if (!selectedRadio) {
                allAnswered = false;
            }
        }
    });
    
    return allAnswered;
}

function collectUserResponses() {
    const responses = [];
    
    questions.forEach((question) => {
        const questionId = `question-${question.id}`;
        let userResponse;
        
        if(question.type != "info"){
            
            if (question.type === "text" || question.type === "age") {
                const textInput = document.querySelector(`input[name="${questionId}"]`);
                userResponse = textInput ? textInput.value : "";
            } 
            else {
                const selectedRadio = document.querySelector(`input[name="${questionId}"]:checked`);
                userResponse = selectedRadio ? parseInt(selectedRadio.value) : null;
            }
            
            responses.push({
                question: question.question,
                type: question.type,
                response: userResponse,
                id: question.id
            });
        }

    });
    
    return responses;
}
