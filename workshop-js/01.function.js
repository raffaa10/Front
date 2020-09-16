console.log("01 - Fonctions");

var nombre1 = 10;
var nombre2 = 20;

function additionner(nb1, nb2) {
    return nb1+nb2;
};
console.log(additionner(15, 25));


var resultat1 = additionner(nombre1, nombre2);
console.log("resultat1 = " + resultat1);

/////////////////////// Reference

var somme = additionner;
resultat2 = somme(nombre1, nombre2); 
console.log("resultat2 = " + resultat2);


//////////////////////////////
function  multiplication(nb1, nb2){
    return nb1*nb2;
};

var resultat3 = multiplication(nombre1, nombre2);
console.log("resultat3 = " + resultat3);


/////////////
function afficherOperation(nomOperation, operation, param1, param2){
console.log(nomOperation + "(" + param1 + "," + param2 + ")" + "=" + operation(param1, param2));
};

afficherOperation("Addition", additionner, 7, 17)

afficherOperation("Multiplication", multiplication, 10, 20);

afficherOperation("Soustraction", function (nb1, nb2) {return nb1 - nb2}, 15, 5);
