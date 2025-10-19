function estPremier(nombre) {
    if (nombre <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }

    return true;
}

function sommenombrespremiers(a, b) {
    if (estPremier(a) && estPremier(b)) {
        return a + b;
    } else {
        return false;
    }
}

console.log("Test avec 3 et 5 (deux nombres premiers) :");
console.log(sommenombrespremiers(3, 5));

console.log("Test avec 7 et 4 (un seul est premier) :");
console.log(sommenombrespremiers(7, 4));

console.log("Test avec 9 et 15 (aucun n'est premier) :");
console.log(sommenombrespremiers(9, 15));
