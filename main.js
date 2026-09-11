"use script"

let score = JSON.parse(localStorage.getItem('score')) || {
	wins : 0,
    losses : 0,
	ties : 0,
	};

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
 if (result === 'You win') {
    score.wins += 1;
 } else if (result === 'You lose') {
    score.losses += 1;
 } else if (result === 'You win') {
    score.ties += 1;
 }

 updateMoves(playerMove, computerMove)
updateScore();
}

function updateScore() {
	document.querySelector('.score-tracker')
	    .innerHTML = `wins : ${score.wins}, losses : ${score.losses}, ties : ${score.ties}`;	    	
};

function updateMoves(playerMove, computerMove) {
    if (!playerMove||!computerMove) {
      document.querySelector('.moves-button')
         .innerHTML = ''; 
      return;
    }
    const imageUrls = {
        snake: 'SWG-project.png/Snake-image.jpg',
        water: 'SWG-project.png/Water-image.jpg',
        gun: 'SWG-project.png/Gun-image.jpg'
    };
  	document.querySelector('.moves-button')
  	    .innerHTML = `You <img src="${imageUrls[playerMove]}" class="move-icon" alt="${playerMove}"> 
        vs
        <img src="${imageUrls[computerMove]}" class="move-icon" alt="${computerMove}">Computer`;
};