const konamiCode = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a"
];

let konamiIndex = 0;

document.addEventListener("keydown", function(event) {
    const key = event.key;
    
    if (key === konamiCode[konamiIndex]) {
        konamiIndex++;
        
        if (konamiIndex === konamiCode.length) {
            activateKonami();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateKonami() {
    document.body.classList.add("konami-activated");
    
    setTimeout(function() {
        document.body.classList.remove("konami-activated");
        konamiIndex = 0;
    }, 5000);
}
