function getComputerChoice() {
    var num = Math.floor(Math.random() * 3) + 1;
    if (num == 1) {
        return 'Rock';
    } else if (num == 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

var you = document.querySelector('.you-score');
var com = document.querySelector('.com-score');
var winner = document.querySelector('.winner');
var youscore = 0;
var comscore = 0;

function rockk() {
    console.log('chose rocc');
    var comp = getComputerChoice();
    let result = document.querySelector('.result');
    if (comp == 'Rock') {
        result.textContent = 'Draw!';
        result.style.backgroundColor = 'yellow';
    }
    if (comp == 'Paper') {
        result.textContent = 'Lose!';
        result.style.backgroundColor = 'red';
        comscore += 1;
        com.textContent = comscore;
    }
    if (comp == 'Scissors') {
        result.textContent = 'Win!';
        result.style.backgroundColor = 'green';
        youscore += 1;
        you.textContent = youscore;
    }
    if (comscore == 5) {
        winner.textContent = 'THE COMPUTERS WIN';
        winner.style.color = 'red';
        endgame();
    } else if (youscore == 5) {
        winner.textContent = "YOU WIN!!";
        winner.style.color = 'green';
        endgame();
    }
    }

function paperr() {
    console.log('chose papp');
    var comp = getComputerChoice();
    let result = document.querySelector('.result');
    if (comp == 'Rock') {
        result.textContent = 'Win!';
        result.style.backgroundColor = 'green';
        youscore += 1;
        you.textContent = youscore;
    }
    if (comp == 'Paper') {
        result.textContent = 'Draw!';
        result.style.backgroundColor = 'yellow';
    }
    if (comp == 'Scissors') {
        result.textContent = 'Lose!';
        result.style.backgroundColor = 'red';
        comscore += 1;
        com.textContent = comscore;
    }
    if (comscore == 5) {
        winner.textContent = 'THE COMPUTERS WIN';
        winner.style.color = 'red';
        endgame();
    } else if (youscore == 5) {
        winner.textContent = "YOU WIN!!";
        winner.style.color = 'green';
        endgame();
    }
}

function scissorss() {
    console.log('chose sciss');
    var comp = getComputerChoice();
    let result = document.querySelector('.result');
    console.log(result);
    if (comp == 'Rock') {
        result.textContent = 'Lose!';
        result.style.backgroundColor = 'red';
        comscore += 1;
        com.textContent = comscore;
    }
    if (comp == 'Paper') {
        result.textContent = 'Win!';
        result.style.backgroundColor = 'green';
        youscore += 1;
        you.textContent = youscore;
    }
    if (comp == 'Scissors') {
        result.textContent = 'Draw!';
        result.style.backgroundColor = 'yellow';
    }
    if (comscore == 5) {
        winner.textContent = 'THE COMPUTERS WIN';
        winner.style.color = 'red';
        endgame();
    } else if (youscore == 5) {
        winner.textContent = "YOU WIN!!";
        winner.style.color = 'green';
        endgame();
    }
}



let rock = document.querySelector('.rock');
rock.addEventListener('click', rockk);
console.log(rock);

let paper = document.querySelector('.paper');
paper.addEventListener('click', paperr);
console.log(paper);

let scissors = document.querySelector('.scissors');
scissors.addEventListener('click', scissorss);
console.log(scissors);

function endgame() {
    rock.removeEventListener('click', rockk);
    paper.removeEventListener('click', paperr);
    scissors.removeEventListener('click', scissorss);

    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    resetButton.style.padding = '12px 24px';
    resetButton.style.fontsize = '18px';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    rock.addEventListener('click', rockk);
    paper.addEventListener('click', paperr);
    scissors.addEventListener('click', scissorss); 

    youscore = 0;
    comscore = 0;
    you.textContent = youscore;
    com.textContent = comscore;
}