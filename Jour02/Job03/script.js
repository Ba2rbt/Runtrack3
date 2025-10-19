function addone() {
    const compteur = document.getElementById("compteur");
    let valeur = parseInt(compteur.textContent);
    valeur = valeur + 1;
    compteur.textContent = valeur;
}

const bouton = document.getElementById("button");
bouton.addEventListener("click", addone);
