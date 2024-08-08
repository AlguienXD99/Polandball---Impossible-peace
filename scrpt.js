import { drawMap } from './map.js';
import { Countryball } from './countryball.js';

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
canvas.width = 800;
canvas.height = 600;

let score = 0;
let countryballs = [];

function updateScore(points) {
    score += points;
    scoreElement.textContent = score;
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    drawMap(ctx);
    
    countryballs.forEach(ball => ball.draw(ctx));
    
    // Game logic goes here

    requestAnimationFrame(gameLoop);
}

function initializeGame() {
    // Initialize countryballs
    countryballs.push(new Countryball(100, 100, 'blue'));
    countryballs.push(new Countryball(200, 200, 'red'));

    gameLoop();
}

initializeGame();
