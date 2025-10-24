<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Job 03 - Jour 04</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <h1>Filtre de Pokémon</h1>
    
    <form id="filterForm">
        <div class="form-group">
            <label for="id">ID :</label>
            <input type="text" id="id" placeholder="Ex: 1, 25, 150">
        </div>
        
        <div class="form-group">
            <label for="nom">Nom :</label>
            <input type="text" id="nom" placeholder="Ex: Pikachu, Charizard">
        </div>
        
        <div class="form-group">
            <label for="type">Type :</label>
            <select id="type">
                <option value="">-- Tous les types --</option>
                <option value="fire">Feu</option>
                <option value="water">Eau</option>
                <option value="grass">Plante</option>
                <option value="electric">Électrique</option>
                <option value="psychic">Psy</option>
                <option value="ice">Glace</option>
                <option value="dragon">Dragon</option>
                <option value="dark">Ténèbres</option>
                <option value="steel">Acier</option>
                <option value="fairy">Fée</option>
                <option value="flying">Vol</option>
                <option value="poison">Poison</option>
                <option value="ground">Sol</option>
                <option value="rock">Roche</option>
                <option value="bug">Insecte</option>
                <option value="ghost">Spectre</option>
                <option value="fighting">Combat</option>
                <option value="normal">Normal</option>
            </select>
        </div>
        
        <button type="button" id="filterButton">Filtrer</button>
    </form>
    
    <div id="results" class="results-container"></div>
</body>
</html>