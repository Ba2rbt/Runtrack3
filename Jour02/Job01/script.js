function citation() {
    const element = document.getElementById("citation");
    const contenu = element.textContent;
    console.log(contenu);
}

const bouton = document.getElementById("button");
bouton.addEventListener("click", citation);
