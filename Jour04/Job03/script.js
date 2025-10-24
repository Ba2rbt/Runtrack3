const filterButton = document.getElementById("filterButton");
const resultsContainer = document.getElementById("results");
const idInput = document.getElementById("id");
const nomInput = document.getElementById("nom");
const typeSelect = document.getElementById("type");

function displayResults(pokemons) {
    resultsContainer.innerHTML = "";
    
    if (pokemons.length === 0) {
        resultsContainer.innerHTML = '<div class="no-results">Aucun Pokémon ne correspond aux critères.</div>';
        return;
    }
    
    pokemons.forEach(pokemon => {
        const card = document.createElement("div");
        card.className = "pokemon-card";
        const nomFrancais = pokemon.name.french || pokemon.name.english;
        card.innerHTML = `
            <h3>${nomFrancais}</h3>
            <div class="pokemon-info">
                <p><strong>ID :</strong> ${pokemon.id}</p>
                <p><strong>Type :</strong> ${pokemon.type.join(", ")}</p>
            </div>
        `;
        resultsContainer.appendChild(card);
    });
}

function filterPokemons() {
    const idValue = idInput.value.trim().toLowerCase();
    const nomValue = nomInput.value.trim().toLowerCase();
    const typeValue = typeSelect.value.toLowerCase();
    
    fetch("pokemon.json")
        .then(response => response.json())
        .then(data => {
            let filteredPokemons = data;
            
            if (idValue) {
                filteredPokemons = filteredPokemons.filter(pokemon => 
                    pokemon.id.toString() === idValue
                );
            }
            
            if (nomValue) {
                filteredPokemons = filteredPokemons.filter(pokemon => {
                    const nomFrancais = (pokemon.name.french || pokemon.name.english).toLowerCase();
                    const nomEnglish = pokemon.name.english.toLowerCase();
                    return nomFrancais.includes(nomValue) || nomEnglish.includes(nomValue);
                });
            }
            
            if (typeValue) {
                filteredPokemons = filteredPokemons.filter(pokemon => 
                    pokemon.type.some(t => t.toLowerCase() === typeValue)
                );
            }
            
            displayResults(filteredPokemons);
        })
        .catch(error => {
            console.error("Erreur lors du chargement du fichier :", error);
            resultsContainer.innerHTML = '<div class="no-results">Erreur : impossible de charger les données.</div>';
        });
}

filterButton.addEventListener("click", filterPokemons);