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

function draw(userChoice, computerChoice){
    result_div.innerHTML = `${convertToWord(userChoice)} = ${convertToWord(computerChoice)}. It's a DRAW 😛!!!`;
    var mensaje3 = new SpeechSynthesisUtterance("It's a DRAW !!!!!");
    window.speechSynthesis.speak(mensaje3);
    document.getElementById('user-label').classList.add('pulse');
    document.getElementById('pc-label').classList.add('pulse');
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    //const movidaUser = opcion;
 
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

function reset() {
    newGame_div.addEventListener("click", () => {userScore=0, pcScore=0, userScore_span.innerHTML = 0, pcScore_span.innerHTML = 0 } )
}

main();
reset();
















