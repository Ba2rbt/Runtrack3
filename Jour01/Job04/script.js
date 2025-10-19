function bisextile(année) {
    
    return ((année % 4 === 0 && année % 100 !== 0) || (année % 400 === 0));
}


console.log("L'année 2024 est bissextile :", bisextile(2024)); 
console.log("L'année 2023 est bissextile :", bisextile(2023)); 
console.log("L'année 1900 est bissextile :", bisextile(1900)); 
console.log("L'année 2000 est bissextile :", bisextile(2000)); 