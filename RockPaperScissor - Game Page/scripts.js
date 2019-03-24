var userScore = 0;
var compScore = 0;
var userScore_span = document.getElementById("user-score");
var compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
var snd = new Audio("sound.mp3");
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissor";
}

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function updateScores() {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
}
function win(userChoice, compChoice) {
    userScore++;
    updateScores();
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord}`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout ( function() {
        document.getElementById(userChoice).classList.remove('green-glow');
    }, 1000);
}


function lose(userChoice, compChoice) {
    compScore++;
    updateScores();
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(compChoice)}${smallCompWord}`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout ( function() {
        document.getElementById(userChoice).classList.remove('red-glow');
    }, 1000);
}

function draw(userChoice, compChoice) {
    updateScores();
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} draws against ${convertToWord(compChoice)}${smallCompWord}`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout ( function() {
        document.getElementById(userChoice).classList.remove('gray-glow');
    }, 1000);
}

function game(userChoice) {
    const compChoice = getComputerChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        snd.play();
        game("r");
        snd.currentTime = 0;
    })
    paper_div.addEventListener('click', function () {
        snd.play();
        game("p");
        snd.currentTime = 0;
    })
    scissor_div.addEventListener('click', function () {
        snd.play();
        game("s");
        snd.currentTime = 0;
    })
}

main();

