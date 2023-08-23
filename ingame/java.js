// Get references to the car element and the container
const car = document.querySelector('.car');
const container = document.querySelector('.max-area');

// Set initial car position
let carHorizontalPosition = 50; // 50% - centered
let carVerticalPosition = 0; // Start lower on the screen

// Calculate the maximum and minimum positions for the car
const maxHorizontalCarPosition = 96 - (car.offsetWidth / container.offsetWidth) * 100;
const minCarPosition = 0;
const maxVerticalCarPosition = 96 - (car.offsetHeight / container.offsetHeight) * 100;
const minVerticalCarPosition = 0;

// Track the state of arrow keys
let leftKey = false;
let rightKey = false;
let upKey = false;
let downKey = false;

// Set the car's position
function setCarPosition() {
    car.style.left = carHorizontalPosition + '%';
    car.style.bottom = carVerticalPosition + '%';
}

// Handle keydown and keyup events for arrow keys
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        leftKey = true;
    } else if (event.key === 'ArrowRight') {
        rightKey = true;
    } else if (event.key === 'ArrowUp') {
        upKey = true;
    } else if (event.key === 'ArrowDown') {
        downKey = true;
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowLeft') {
        leftKey = false;
    } else if (event.key === 'ArrowRight') {
        rightKey = false;
    } else if (event.key === 'ArrowUp') {
        upKey = false;
    } else if (event.key === 'ArrowDown') {
        downKey = false;
    }
});

// Update car position based on arrow key state
function updateCarPosition() {
    if (leftKey) {
        carHorizontalPosition -= 1;
        if (carHorizontalPosition < minCarPosition) {
            carHorizontalPosition = minCarPosition;
        }
    }
    if (rightKey) {
        carHorizontalPosition += 1;
        if (carHorizontalPosition > maxHorizontalCarPosition) {
            carHorizontalPosition = maxHorizontalCarPosition;
        }
    }
    if (upKey) {
        carVerticalPosition += 1;
        if (carVerticalPosition > maxVerticalCarPosition) {
            carVerticalPosition = maxVerticalCarPosition;
        }
    }
    if (downKey) {
        carVerticalPosition -= 1;
        if (carVerticalPosition < minVerticalCarPosition) {
            carVerticalPosition = minVerticalCarPosition;
        }
    }
    setCarPosition();
}

// Update car position on each frame
function animate() {
    updateCarPosition();
    requestAnimationFrame(animate);
}

// Initial car position setup
setCarPosition();
animate();

const leftLine = document.querySelector('.leftline');
const lLine = document.querySelector('.l-line');
const leLine = document.querySelector('.leline');
const lineOne = document.querySelector('.lineone');
const lineTwo = document.querySelector('.linetwo');
const lineThree = document.querySelector('.linethree');
const rightLine = document.querySelector('.rightline');

// Initial positions of the lines

function startGame() {
    window.location.href = '../ingame/game.html';    
    requestAnimationFrame(gameLoop);
}

function resetGame() {
    window.location.href = '../ingame/game.html';
}

