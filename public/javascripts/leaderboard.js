
let leaderboardButton;
let leaderboardContainer;
let isLeaderboardVisible = false;

let leaderboardBackground;


function InitLeaderboard(){

    leaderboardButton = document.getElementById('leaderboard-button');
    leaderboardContainer = document.getElementById('leaderboards-hidden');
    leaderboardBackground = document.getElementById('leaderboards-background-hidden');
    leaderboardBackground.style.display = 'none';

    leaderboardButton.addEventListener('click', () => {
        OpenCloseLeaderboard();
    });
}

function OpenCloseLeaderboard(){

    if(isLeaderboardVisible){
        leaderboardContainer.setAttribute('id', 'leaderboards-hidden'); 
        leaderboardBackground.style.display = 'none';
    }
    else{
        leaderboardContainer.setAttribute('id', 'leaderboards');         
        leaderboardBackground.style.display = 'block';

    }

    isLeaderboardVisible = !isLeaderboardVisible;
}
