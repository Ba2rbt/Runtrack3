const showButton = document.getElementById("showButton");
const hideButton = document.getElementById("hideButton");
const textContainer = document.getElementById("textContainer");

const texte = "Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.";

showButton.addEventListener("click", function() {
    textContainer.textContent = texte;
    textContainer.classList.add("visible");
});

hideButton.addEventListener("click", function() {
    textContainer.classList.remove("visible");
    textContainer.textContent = "";
});
