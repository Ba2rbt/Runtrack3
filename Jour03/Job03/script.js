const gameBoard = document.getElementById("gameBoard");
const tiles = document.querySelectorAll(".tile");
const message = document.getElementById("message");
const restartButton = document.getElementById("restartButton");

let tiles_array = Array.from(Array(9).keys()).map(i => i + 1);
let gameWon = false;

function initGame() {
    tiles_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    shuffleTiles();
    renderTiles();
    message.textContent = "";
    message.className = "";
    restartButton.style.display = "none";
    gameWon = false;
}

function shuffleTiles() {
    let shuffled = [...tiles_array];
    
    for (let i = 0; i < 200; i++) {
        const emptyIndex = shuffled.indexOf(9);
        const adjacentIndices = getAdjacentIndices(emptyIndex);
        const randomIndex = adjacentIndices[Math.floor(Math.random() * adjacentIndices.length)];
        [shuffled[emptyIndex], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[emptyIndex]];
    }
    
    tiles_array = shuffled;
}

function getAdjacentIndices(index) {
    const row = Math.floor(index / 3);
    const col = index % 3;
    const adjacent = [];
    
    if (row > 0) adjacent.push(index - 3);
    if (row < 2) adjacent.push(index + 3);
    if (col > 0) adjacent.push(index - 1);
    if (col < 2) adjacent.push(index + 1);
    
    return adjacent;
}

function renderTiles() {
    tiles.forEach((tile, index) => {
        const number = tiles_array[index];
        
        tile.innerHTML = "";
        
        if (number === 9) {
            tile.classList.add("empty");
        } else {
            tile.classList.remove("empty");
            const img = document.createElement("img");
            img.src = number + ".PNG";
            img.alt = "Pièce " + number;
            tile.appendChild(img);
        }
    });
}

function handleTileClick(event) {
    if (gameWon) return;
    
    const clickedTile = event.target.closest(".tile");
    const clickedIndex = Array.from(tiles).indexOf(clickedTile);
    const emptyIndex = tiles_array.indexOf(9);
    const adjacentIndices = getAdjacentIndices(emptyIndex);
    
    if (adjacentIndices.includes(clickedIndex)) {
        [tiles_array[clickedIndex], tiles_array[emptyIndex]] = [tiles_array[emptyIndex], tiles_array[clickedIndex]];
        renderTiles();
        checkWin();
    }
}

function checkWin() {
    const isWon = tiles_array.every((tile, index) => {
        if (index === 8) return tile === 9;
        return tile === index + 1;
    });
    
    if (isWon) {
        gameWon = true;
        message.textContent = "Vous avez gagné";
        message.className = "success";
        restartButton.style.display = "block";
    }
}

tiles.forEach(tile => {
    tile.addEventListener("click", handleTileClick);
});

restartButton.addEventListener("click", initGame);

initGame();
