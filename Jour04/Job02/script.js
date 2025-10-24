function jsonValueKey(jsonString, key) {
    try {
        const jsonObject = JSON.parse(jsonString);
        return jsonObject[key];
    } catch (error) {
        console.error("Erreur : JSON invalide", error);
        return null;
    }
}

const json = '{"city": "Marseille", "name": "La Plateforme_"}';
console.log(jsonValueKey(json, "city"));  
console.log(jsonValueKey(json, "name"));  