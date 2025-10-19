function jourtravaille(date) {
    const jour = date.getDate();
    const mois = date.getMonth() + 1;
    const annee = date.getFullYear();

    const moisStr = mois < 10 ? '0' + mois : mois.toString();
    const jourStr = jour < 10 ? '0' + jour : jour.toString();
    const dateStr = `${jourStr}/${moisStr}/${annee}`;

    const joursFeries2020 = [
        "01/01",
        "13/04",
        "01/05",
        "08/05",
        "21/05",
        "01/06",
        "14/07",
        "15/08",
        "01/11",
        "11/11",
        "25/12"
    ];

    if (annee === 2020 && joursFeries2020.includes(`${jourStr}/${moisStr}`)) {
        console.log(`Le ${dateStr} est un jour férié`);
        return;
    }

    const jourDeLaSemaine = date.getDay();
    if (jourDeLaSemaine === 0 || jourDeLaSemaine === 6) {
        console.log(`Non, ${dateStr} est un week-end`);
        return;
    }

    console.log(`Oui, ${dateStr} est un jour travaillé`);
}

jourtravaille(new Date(2020, 4, 1));
jourtravaille(new Date(2020, 9, 10));
jourtravaille(new Date(2020, 1, 11));
jourtravaille(new Date(2021, 0, 1));