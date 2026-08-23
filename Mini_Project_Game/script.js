const board = document.querySelector('.board');
//console.log(board);
const modal = document.querySelector(".modal");
const startButton = document.querySelector(".btn-start");
const restartButton = document.querySelector(".btn-restart");
const startGameModal = document.querySelector(".start-game");
const gameOverModal = document.querySelector(".game-over");

const highScoreElement = document.querySelector("#high-score");
const scoreElement = document.querySelector("#score");
const timeElement = document.querySelector("#time");


const blockHeight = 30;
const blockWidth = 30;

let highScore = localStorage.getItem("highScore") || 0;
let score = 0;
let time = '00:00';
let diraction = 'down';

highScoreElement.innerText = highScore;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

let intervalId = null;
let timerIntervalId = null;

const blocks = [];
 let snake = [ {x: 1, y: 3}];
 let food = [{
                x: Math.floor(Math.random() * rows),
                y: Math.floor(Math.random() * cols)
            }];


startButton.addEventListener("click", ()=> {
    modal.style.display = "none"

    // highScore = localStorage.getItem(highScore);
    // highScoreElement.innerText = highScore;

    intervalId = setInterval(() => { renderSnake() }, 500)
    timerIntervalId = setInterval(() => { 
        let [minutes, seconds] = time.split(":").map(Number);
        
        if(seconds == 59) {
            minutes += 1;
            seconds = 0;
        } else {
            seconds += 1
        }
        time = `${minutes}:${seconds}`
        timeElement.innerText = time;
    }, 1000);
})

restartButton.addEventListener("click", restartGame);

function restartGame () {

    score = 0;
    time = `00:00`;

    scoreElement.innerText = score;
    timeElement.innerText = time;
    highScoreElement.innerText = highScore; 

    diraction = "down";
    blocks[`${food[0].x},${food[0].y}`].classList.remove("food");

    snake.forEach(segment => {
        blocks[`${segment.x},${segment.y}`].classList.remove("fill");
    })

    modal.style.display = "none";

    snake = [ {x: 1, y: 3}];

    food = [{
                    x: Math.floor(Math.random() * rows),
                    y: Math.floor(Math.random() * cols)
                }];

    intervalId = setInterval(() => {
        renderSnake()
    }, 500)

    timerIntervalId = setInterval(() => { 
        let [minutes, seconds] = time.split(":").map(Number);
        
        if(seconds == 59) {
            minutes += 1;
            seconds = 0;
        } else {
            seconds += 1
        }
        time = `${minutes}:${seconds}`
        timeElement.innerText = time;
    }, 1000);
    
}

addEventListener("keydown", (event)=> {
    // console.log(event.key);

    if(event.key == "ArrowUp") {
        diraction = "up";
    } else if(event.key == "ArrowDown") {
        diraction = "down";
    } else if(event.key == "ArrowLeft") {
        diraction = "left";
    } else if(event.key == "ArrowRight") {
        diraction = "right";
    }
})


for(let row = 0; row < rows; row++) {
    for(let col = 0; col < cols; col++) {
        const block = document.createElement('div');
        block.classList.add('block');
        board.appendChild(block);       
        //block.innerText = `${row},${col}`;
        blocks[`${row},${col}`] = block;
        
    }
}

// console.log(blocks);

function renderSnake() {

    let head = null;

    blocks[`${food[0].x},${food[0].y}`].classList.add("food");

    if(diraction === 'right') {
        head = {x: snake[0].x, y: snake[0].y + 1};
    }else if(diraction === 'left') {
        head = {x: snake[0].x, y: snake[0].y - 1};
    }else if(diraction === 'up') {
        head = {x: snake[0].x - 1, y: snake[0].y};
    }else if(diraction === 'down') {
        head = {x: snake[0].x + 1, y: snake[0].y};
    }

    if(head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
        clearInterval(intervalId); 

        modal.style.display = "flex";
        startGameModal.style.display = "none";
        gameOverModal.style.display = "flex";
        return;
    }

    // Check if the snake meets the food and Generate new random food 
    if(food[0].x === head.x && food[0].y === head.y) {

        blocks[`${food[0].x},${food[0].y}`].classList.remove("food");

        snake.unshift(head);
        // Snake ate the food

        food[0] = {
            x: Math.floor(Math.random() * rows),
            y: Math.floor(Math.random() * cols)
        };

        score += 10;
        scoreElement.innerText = score;

        if(score > highScore) {
            highScore = score;
            localStorage.setItem("highScore", highScore);
            highScoreElement.innerText = highScore;
        }
    }

    snake.forEach(segment => {
        blocks[`${segment.x},${segment.y}`].classList.remove("fill");
    });

    snake.unshift(head);
    snake.pop();

    snake.forEach(segment => {
        blocks[`${segment.x},${segment.y}`].classList.add("fill");
    });
}


