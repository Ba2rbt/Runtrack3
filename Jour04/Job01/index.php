<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Job 01 - Jour 04</title>
    <script src="script.js" defer></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        button {
            padding: 10px 20px;
            background-color: #0055cc;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background-color: #003d99;
        }
        #expression {
            margin-top: 20px;
            padding: 15px;
            background-color: #f0f0f0;
            border-left: 4px solid #0055cc;
            font-size: 18px;
            display: none;
        }
        #expression.visible {
            display: block;
        }
    </style>
</head>
<body>
    <button id="button">charger l'expression</button>
    <p id="expression"></p>
</body>
</html>