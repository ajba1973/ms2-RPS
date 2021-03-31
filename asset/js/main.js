let userScore = 0;
let pcScore = 0;
// Cache DOM
const userScore_span = document.getElementById('user-score');
const pcScore_span = document.getElementById('pc-score');
const scoreBoard_div = document.querySelector('scoreboard');
const result_div = document.querySelector('.result p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const user_div = document.getElementById('player'); 
const img_div = document.getElementById('img');
const newGame_div = document.getElementById("newGame");

// getData 
function getData(){
    const names = document.getElementById("name").value;
    const genders = document.getElementById("gender").value;  
    const colores = document.getElementById("color").value;  
    document.getElementById('principal').classList.toggle('ocultar');
    if(names == ''){user_div.innerHTML = 'Player';}
    else{user_div.innerHTML = names;}
    if(genders == 'girl'){img_div.innerHTML = '<img src="asset/images/girl.png" alt="Girl">';}
    else{img_div.innerHTML = '<img src="asset/images/boy.png" alt="Boy">';}
    if(colores == 'red'){document.getElementById('body').classList.add('red');}
    else if(colores == 'black'){document.getElementById('body').classList.add('black');}
    else if(colores == 'purple'){document.getElementById('body').classList.add('purple');}
    else {document.getElementById('body').classList.add('blue');}
}

function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    var mensaje1 = new SpeechSynthesisUtterance("You WIN !!!!!");
    window.speechSynthesis.speak(mensaje1);
    result_div.innerHTML = `${convertToWord(userChoice)} > ${convertToWord(computerChoice)}. You WIN 😄!!!`;
    document.getElementById('user-label').classList.add('pulse');
    document.getElementById('pc-label').classList.remove('pulse');
}

function lose(userChoice, computerChoice){
    pcScore++;
    pcScore_span.innerHTML = pcScore;
    var mensaje2 = new SpeechSynthesisUtterance("You LOST !!!!!");
    window.speechSynthesis.speak(mensaje2);
    result_div.innerHTML = `${convertToWord(userChoice)} < ${convertToWord(computerChoice)}. You LOST 😓!!!`;
    document.getElementById('user-label').classList.remove('pulse');
    document.getElementById('pc-label').classList.add('pulse');
}

