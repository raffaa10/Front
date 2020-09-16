var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes.forEach(function (ville, i) {
    console.log('ville ' + (i + 1) + ' : ' + ville);
});

//////

console.log("Lettre A dans toutes les villes : " + villes.every(function (ville) {
    return ville.includes("a");
}));


//////

console.log("un tiret dans au moins une ville : " + villes.some(function (ville) {
    return ville.includes("-");
}));



//////////
var villesSansTiretSansEspace = villes.filter(function (ville) {
    return !ville.includes("-");
}).filter(function (ville) {
    return !ville.includes(" ");
});

console.log("villes Sans Tiret Sans Espace : " + villesSansTiretSansEspace);

/////
console.table(
    villes
        .filter(function (ville) {
            return ville.endsWith('s');
        })
        .map(function (ville) {
            return ville.toUpperCase();
        }));