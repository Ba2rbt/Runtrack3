const textarea = document.getElementById("keylogger");

document.addEventListener("keypress", function(event) {
    const touche = event.key;
    
    if (touche.match(/[a-z]/i)) {
        textarea.value = textarea.value + touche;
        
        if (document.activeElement === textarea) {
            textarea.value = textarea.value + touche;
        }
    }
});
