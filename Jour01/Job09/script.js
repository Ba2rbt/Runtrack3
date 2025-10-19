function tri(numbers, order) {
    if (order === "asc") {
        numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        numbers.sort((a, b) => b - a);
    } else {
        console.error("Le paramètre 'order' doit être 'asc' ou 'desc'.");
    }

    return numbers;
}

const monTableau = [3, 14, 1, 7, 99, 45, 2];

console.log("Tableau original :", [...monTableau]);

console.log("--- Tri Ascendant ---");
const tableauAsc = tri([...monTableau], "asc");
console.log(tableauAsc);

console.log("--- Tri Descendant ---");
const tableauDesc = tri([...monTableau], "desc");
console.log(tableauDesc);

console.log("--- Test d'erreur ---");
tri([...monTableau], "autre");
