const button = document.getElementById("button");
const expression = document.getElementById("expression");

button.addEventListener("click", function() {
    fetch("expression.txt")
        .then(response => response.text())
        .then(data => {
            expression.textContent = data;
            expression.classList.add("visible");
        })
        .catch(error => {
            console.error("Erreur lors du chargement du fichier :", error);
            expression.textContent = "Erreur : impossible de charger l'expression.";
            expression.classList.add("visible");
        });
});