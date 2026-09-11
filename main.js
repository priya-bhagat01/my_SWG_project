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
        result = 'Tie'
    }
    if(computerMove === 'water') {
        result = 'You Win'
    }
    if(computerMove === 'gun') {
        result = 'You Lose'
    }
} else if(playerMove === 'water') {
    if(computerMove === 'water') {
        result = 'Tie'
    }
    if(computerMove === 'gun') {
        result = 'You Win'
    }
    if(computerMove === 'snake') {
        result = 'You Lose'
    }
} else if(playerMove === 'gun') {
    if(computerMove === 'gun') {
        result = 'Tie'
    }
    if(computerMove === 'snake') {
        result = 'You Win'
    }
    if(computerMove === 'water') {
        result = 'You Lose'
    }
}
 if (result === 'You Win') {
    scores.wins += 1
 } else if (result === 'You Lose') {
    scores.losses += 1
 } else if (result === 'Tie') {
    scores.ties += 1
 }

localStorage.setItem('scores',JSON.stringify(scores));
updateMoves(playerMove, computerMove);
updateResult(result);
updateScore();
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
        water: 'SWG-project.png/Water-img.jpg',
        gun: 'SWG-project.png/Gun-img.jpg'
    };
  	document.querySelector('.moves-button')
  	    .innerHTML = `You <img src="${imageUrls[playerMove]}" class="move-icon" alt="${playerMove}"> 
        vs
        <img src="${imageUrls[computerMove]}" class="move-icon" alt="${computerMove}">Computer`;
};

function pickComputerMove() {
    const randomNumber = Math.random()
    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'snake';
    } else if(randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'gun'
    } else if(randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'water'
    }
    return computerMove;
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
