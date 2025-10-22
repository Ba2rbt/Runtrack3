<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Job 02 - Jour 03</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <h1>Puzzle Arc-en-ciel</h1>
    <button id="shuffleButton">Mélanger les images</button>
    
    <div class="container">
        <h2>Images mélangées</h2>
        <div id="shuffledContainer" class="images-container"></div>
    </div>
    
    <div class="container">
        <h2>Zone de dépôt (ordre correct)</h2>
        <div id="dropZone" class="drop-zone">
            <div class="slot" data-order="1"></div>
            <div class="slot" data-order="2"></div>
            <div class="slot" data-order="3"></div>
            <div class="slot" data-order="4"></div>
            <div class="slot" data-order="5"></div>
            <div class="slot" data-order="6"></div>
        </div>
    </div>
    
    <div id="message"></div>
</body>
</html>
