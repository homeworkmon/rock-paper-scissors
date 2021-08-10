const divas = document.querySelectorAll('.choice');
const rounds = document.querySelector('.round');
const computerIcon = document.querySelector('.computer-icon');
const playAgain = document.querySelector('.play-again');
const message = document.querySelector('.message');

let playerLives = 0;
let computerLives = 0;
let round = 0;

function countRounds() {
    round += 1;
    rounds.innerText = `Round: ${round}`;
}

function computerPlay(){
    const options = ['britney', 'christina', 'jlo'];
    let computerSelection = (options[Math.floor(Math.random()*options.length)]);

    if (computerSelection === 'britney') {
        computerIcon.src="data:image/jpeg;base64,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";
    } else if (computerSelection === 'christina') {
        computerIcon.src='data:image/jpeg;base64,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';
    } else if (computerSelection === 'jlo') {
        computerIcon.src='data:image/jpeg;base64,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REQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/2Q=='
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) { message.innerText= (`Ur both ${playerSelection} fans so its a draw, duh!`); }
    else if(playerSelection==="britney"){
            if (computerSelection===("christina")) {
                message.innerText = ("U won! Britney's dancing skills beat Christina");
                playerLives += 1;
            }
            else if (computerSelection==="jlo") {
                message.innerText = ("U lost! Jlo is the ultimate dancer");
                computerLives += 1;
            }
        }
    else if (playerSelection==="christina") {
            if (computerSelection==="britney") {
                message.innerText = ("U lost! Britney's dancing skills beat Christina");
                computerLives += 1;
            }
            else if (computerSelection==="jlo") {
                message.innerText = ("U won! Christina's runs beat Jlo");
                playerLives += 1;
            }
        }   
    else if (playerSelection==="jlo") {
            if (computerSelection==="britney") {
                message.innerText = ("U won! Jlo is the ultimate dancer");
                playerLives += 1;
            }
            else if (computerSelection==="christina") {
                message.innerText = ("U lost! Christina's runs beat Jlo");
                computerLives += 1;
            }
        }
        const results = document.querySelector('.results');
        results.innerText = `Ur frappucinos: ${playerLives} | Computer's frappucinos: ${computerLives}`;
        return [playerLives, computerLives];
    }

function endGame(playerLives, computerLives) {
    if (round >= 5) {
        divas.forEach((diva) => {
            diva.disabled = true;
            diva.classList.toggle('choice');
            diva.style.opacity = '0.5';
        });

        computerIcon.style.opacity = '0.5';

        const endMessage = document.querySelector('.end-message');
        const gameEnd = document.querySelector('.game-end');
        const congrats = document.createElement('p');
        const gameResults = document.querySelector('.game-results');
        congrats.classList.add('congrats');
        if (playerLives > computerLives) {
            congrats.textContent = 'u have sweet taste!!';
            endMessage.innerText = 'u totally won';
        }
        else if (computerLives > playerLives) {
            congrats.textContent = 'TTYL';
            endMessage.innerText = 'u totally lost';
        }
        else if (computerLives === playerLives) {
            congrats.textContent = 'Peace out';
            endMessage.innerText = 'Take a chill pill, its a draw';
        }
        gameResults.appendChild(congrats);
        gameEnd.style.display = 'block';
    }  
}

function resetGame() {
    playAgain.addEventListener('click', () => {
        window.location.reload();
    });
}

function playGame() {
    let playerSelection;
    let pickHighlight;
    divas.forEach((diva) => {
        diva.addEventListener('click', e => {
            if(round>0) { 
                pickHighlight.classList.remove('playerSelection');
            }
            pickHighlight = e.target;
            e.target.classList.add('playerSelection');
            if (diva.classList.contains('britney')) {
                playerSelection = 'britney';
            }
            else if (diva.classList.contains('christina')) {
                playerSelection = 'christina';
            }
            else { 
                playerSelection ='jlo'; }
            countRounds();
            playRound(playerSelection, computerPlay());
            endGame(playerLives, computerLives);
            resetGame();
            });
    });
}   

playGame();