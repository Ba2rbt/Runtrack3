const images = [
    { id: 1, src: "arc1.png" },
    { id: 2, src: "arc2.png" },
    { id: 3, src: "arc3.png" },
    { id: 4, src: "arc4.png" },
    { id: 5, src: "arc5.png" },
    { id: 6, src: "arc6.png" }
];

const shuffleButton = document.getElementById("shuffleButton");
const shuffledContainer = document.getElementById("shuffledContainer");
const dropZone = document.getElementById("dropZone");
const message = document.getElementById("message");

let shuffledImages = [];
let draggedElement = null;

shuffleButton.addEventListener("click", function() {
    shuffledImages = [...images].sort(() => Math.random() - 0.5);
    displayShuffledImages();
    clearDropZone();
    message.textContent = "";
    message.className = "";
});

function displayShuffledImages() {
    shuffledContainer.innerHTML = "";
    shuffledImages.forEach(function(img) {
        const imgElement = document.createElement("img");
        imgElement.src = img.src;
        imgElement.alt = "Arc-en-ciel " + img.id;
        imgElement.className = "image-item";
        imgElement.draggable = true;
        imgElement.dataset.id = img.id;
        
        imgElement.addEventListener("dragstart", handleDragStart);
        imgElement.addEventListener("dragend", handleDragEnd);
        
        shuffledContainer.appendChild(imgElement);
    });
}

function handleDragStart(event) {
    draggedElement = this;
    this.style.opacity = "0.5";
    event.dataTransfer.effectAllowed = "move";
}

function handleDragEnd(event) {
    this.style.opacity = "1";
    draggedElement = null;
}

const slots = dropZone.querySelectorAll(".slot");

slots.forEach(function(slot) {
    slot.addEventListener("dragover", function(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
        this.style.backgroundColor = "#e3f2fd";
    });
    
    slot.addEventListener("dragleave", function(event) {
        this.style.backgroundColor = "#fafafa";
    });
    
    slot.addEventListener("drop", function(event) {
        event.preventDefault();
        this.style.backgroundColor = "#fafafa";
        
        if (draggedElement) {
            if (this.querySelector("img")) {
                this.innerHTML = "";
            }
            
            const clonedImg = draggedElement.cloneNode(true);
            clonedImg.style.opacity = "1";
            clonedImg.draggable = true;
            clonedImg.addEventListener("dragstart", handleDragStart);
            clonedImg.addEventListener("dragend", handleDragEnd);
            
            this.innerHTML = "";
            this.appendChild(clonedImg);
            this.classList.add("filled");
            
            checkWin();
        }
    });
});

function clearDropZone() {
    slots.forEach(function(slot) {
        slot.innerHTML = "";
        slot.classList.remove("filled");
    });
}

function checkWin() {
    let allFilled = true;
    let correctOrder = true;
    
    slots.forEach(function(slot, index) {
        if (!slot.querySelector("img")) {
            allFilled = false;
        } else {
            const imageId = parseInt(slot.querySelector("img").dataset.id);
            const expectedId = index + 1;
            if (imageId !== expectedId) {
                correctOrder = false;
            }
        }
    });
    
    if (allFilled) {
        if (correctOrder) {
            message.textContent = "Vous avez gagné";
            message.className = "success";
        } else {
            message.textContent = "Vous avez perdu";
            message.className = "failure";
        }
    }
}
