//Initialize scores & user choice
let onGame = true;
let IAScore = 0;
let PlayerScore = 0;
const maxJugadas = 3;
// Cache DOM
const user_div = document.getElementById('user'); 
const img_div = document.getElementById('img');
const newGame_div = document.getElementById("newGame");
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const scoreIA = document.getElementById('pc-score');
const scorePlayer = document.getElementById('user-score');
const infoText = document.getElementById('infoText');
const btnRetry = document.getElementById('btnRetryDiv');
const btnInfo = document.getElementById('btnInfo');
const divInfo = document.getElementById('infoIcons');
    

// getData 
function getData(){
    const names = document.getElementById("name").value;
    const genders = document.getElementById("gender").value;  
    const colors = document.getElementById("color").value;  
    document.getElementById('principal').classList.toggle('ocultar');
    if(names == ''){user_div.innerHTML = 'user';}
    else{user_div.innerHTML = names;}
    if(genders == 'girl'){img_div.innerHTML = '<img src="asset/images/girl.png" alt="girl">';}
    else{img_div.innerHTML = '<img src="asset/images/boy.png" alt="boy">';}
    if(colors == 'red'){document.getElementById('body').classList.add('red');}
    else if(colors == 'black'){document.getElementById('body').classList.add('black');}
    else if(colors == 'purple'){document.getElementById('body').classList.add('purple');}
    else {document.getElementById('body').classList.add('blue');}
}

//Computers effects
const imagenes = {
    0: "asset/images/1.png",
    1: "asset/images/2.png",
    2: "asset/images/3.png",
};

Object.size = function (obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

let imagenesLength = Object.size(imagenes);
let intervalAnimation = setInterval(enemyAnimation, 100);

function enemyAnimation() {
    cont = Math.floor(Math.random() * 3);
    IAimg.src = imagenes[cont];
}

// Player move
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function checkResult(playerElection) {

    let state = "";

    clearInterval(intervalAnimation);

    let choices = {
        'rock': 0,
        'paper': 1,
        'scissors': 2
    };

    if (onGame) {
        if (choices[playerElection] > cont) {
            if (choices[playerElection] === 2 && cont === 0) {
                console.log('rock Gana - IA');
                state = '¡Rock Wins! 😥';
                IAScore++;
            } else {
                if (choices[playerElection] === 1) {
                    state = '¡Paper wins! 😄';
                    PlayerScore++;
                } else {
                    state = '¡Scissors wins! 😄';
                    PlayerScore++;
                }
            }
        } else if (choices[playerElection] < cont) {
            if (choices[playerElection] === 0 && cont === 2) {
                console.log('rock Gana - Jugador');
                state = '¡Rock Wins! 😄';
                PlayerScore++;
            } else {
                if (choices[playerElection] === 1) {
                    state = '¡Scissors wins! 😥';
                    IAScore++;
                } else {
                    state = '¡Paper wins! 😥';
                    IAScore++;
                }
            }
        } else {
            console.log('Empate');
            state = 'DRAW!!! 😛';
        }
        scoreIA.innerHTML = IAScore + "";
        scorePlayer.innerHTML = PlayerScore + "";

        async function retryNow() {
            infoText.classList.remove('infoText');
            infoText.classList.add('infoTextSel');
            await sleep(500);
            infoText.innerHTML = state;
            infoText.classList.remove('infoTextSel');
            infoText.classList.add('infoText');
            await sleep(2500);
            infoText.classList.remove('infoText');
            infoText.classList.add('infoTextSel');
            await sleep(500);
            retry();
            infoText.classList.remove('infoTextSel');
            infoText.classList.add('infoText');
        }

        retryNow();

        onGame = false;
    }
}


















