const board = document.querySelector('.board');
//console.log(board);

const blockHeight = 30;
const blockWidth = 30;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

let intervalId = null;


const blocks = [];
const snake = [ {x: 1, y: 3}];
const food = [{
                x: Math.floor(Math.random() * rows),
                y: Math.floor(Math.random() * cols)
            }];


let diraction = 'down';

addEventListener("keydown", (event)=> {
    console.log(event.key);

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
        block.innerText = `${row},${col}`;
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
        alert("Game Over");
        clearInterval(intervalId); 
        
        return;
    }

    // Check if the snake meets the food and Generate new random food 
    if(food[0].x === head.x && food[0].y === head.y) {

        blocks[`${food[0].x},${food[0].y}`].classList.remove("food");

        snake.push(head);
        // Snake ate the food

        food[0] = {
            x: Math.floor(Math.random() * rows),
            y: Math.floor(Math.random() * cols)
        };
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

intervalId =setInterval(() => {
    renderSnake();
}, 500);
