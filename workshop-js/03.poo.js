// Fonction constructeur

function Personne(nom, prenom, pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function() {
        return this.nom + " " + this.prenom + " " + this.pseudo;
    }
};

var jules = new Personne();

jules.nom = "Jules";
jules.prenom = "LEMAIRE";
jules.pseudo = "jules77";

var paul = new Personne("Paul", "LEMAIRE", "paul44");

console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());

var afficherPersonne = function(personne) {
    console.log(personne.nom);
    console.log(personne.prenom);
    console.log(personne.pseudo);
    console.log(personne.getNomComplet());
};

afficherPersonne(paul);
//console.log(paul.getNomComplet());


// ** Modifier un objet
jules.pseudo = 'jules44';
console.log(jules.getNomComplet());

// Ajouter une propriété à Personne

console.log(jules.age);

Personne.prototype.age = 'NON RENSEIGNE';
console.log(jules.age);

jules.age = 30;
console.log(jules.age);

// Ajouter une méthode à Personne


Personne.prototype.getInitiales = function() {
    return this.nom.charAt(0) + '.' + this.prenom.charAt(0) + '.'
}

console.log(jules.getInitiales());

// Objet sans fonction constructeur

var robert = {
    prenom : 'Robert',
    nom : 'LEPREFET',
    pseudo : 'robert77',
    getNomComplet : function(){
        return this.nom + ' ' + this.prenom + ' ' + this.pseudo;
    }
};

afficherPersonne(robert);

// Héritage via une fonction constructeur

function Client(nom, prenom, pseudo, numeroCLient) {
    Personne.call(this, nom, prenom, pseudo),
    this.numeroCLient = numeroCLient;
    this.getInfos = function() {
        return this.nom + ' ' + this.prenom + ' - ' + this.numeroCLient;
    }
    
}

var steve = new Client('Steve', 'LUCAS', 'steve44', 'A01');

afficherPersonne(steve);
console.log(steve.numeroCLient);

console.log(steve.getInfos());