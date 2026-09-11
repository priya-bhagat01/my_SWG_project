"use script"

let scores = JSON.parse(localStorage.getItem('scores')) || {
	wins : 0,
    losses : 0,
	ties : 0,
	};

updateMoves();

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';
if(playerMove === 'snake') {
    if(computerMove === 'snake') {
        result = 'tie'
    }
    if(computerMove === 'water') {
        result = 'win'
    }
    if(computerMove === 'gun') {
        result = 'loss'
    }
} else if(playerMove === 'water') {
    if(computerMove === 'water') {
        result = 'tie'
    }
    if(computerMove === 'gun') {
        result = 'win'
    }
    if(computerMove === 'snake') {
        result = 'loss'
    }
} else if(playerMove === 'gun') {
    if(computerMove === 'gun') {
        result = 'tie'
    }
    if(computerMove === 'snake') {
        result = 'win'
    }
    if(computerMove === 'water') {
        result = 'loss'
    }
}
 if (result === 'You Win') {
    score.wins += 1
 } else if (result === 'You Lose') {
    score.losses += 1
 } else if (result === 'Tie') {
    score.ties += 1
 }

localStorage.setItem('scores',JSON.stringify(scores));
updateMoves(playerMove, computerMove);
updateResult(result);
updateScore();
}

const snakeButton = document.querySelector(".snake");
snakeButton.addEventListener('click', () => {
    playGame('snake')
});
const waterButton = document.querySelector(".water");
waterButton.addEventListener('click', () => {
    playGame('water')
})
const gunButton = document.querySelector(".gun");
gunButton.addEventListener('click', () => {
    playGame('gun')
})

function pickComputerMove() {
    const randomNumber = Math.random()
    let computerMove = '';

    if(randomNumber === 1) {
        computerMove = 'snake';
    } else if(randomNumber === 0) {
        computerMove = 'gun'
    } else if(randomNumber === -1) {
        computerMove = 'water'
    }
    return computerMove;
}

function updateScore() {
	document.querySelector('.score-tracker')
	    .innerHTML = `wins : ${scores.wins}, losses : ${scores.losses}, ties : ${scores.ties}`;	    	
};

function updateResult(result) {
  	document.querySelector('.result')
  	    .innerHTML = `${result}`
};

function updateMoves(playerMove, computerMove) {
    if (!playerMove||!computerMove) {
      document.querySelector('.moves-button')
         .innerHTML = ''; 
      return;
    }
    const imageUrls = {
        snake: 'SWG-project.png/Snake_img.jpg',
        water: 'SWG-project.png/Water_img.jpg',
        gun: 'SWG-project.png/Gun_img.jpg'
    };
  	document.querySelector('.moves-button')
  	    .innerHTML = `You <img src="${imageUrls[playerMove]}" class="move-icon" alt="${playerMove}"> 
        vs
        <img src="${imageUrls[computerMove]}" class="move-icon" alt="${computerMove}">Computer`;
};