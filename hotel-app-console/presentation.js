// récupération du module `readline`
var readline = require('readline');
var service = require('./service.js');

// création d'un objet `rep` permettant de récupérer la saisie utilisateur
var readL = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function start() {

    console.log('Menu')
    console.log("1. Lister les clients");
    console.log("2. Ajouter un client");
    console.log("3. Recherche un client par nom");
    console.log("4. Vérifier la disponibilité d'une chambre");
    console.log("99. Sortir");

    
    console.log("--> A");

// récupération de la saisie utilisateur
readL.question('Faites votre choix', function(saisie) {
    
    console.log("--> B")

    switch( saisie ) {
        case '1' :
            service.listerClients(
                function (listerClients){
                    console.log(listerClients
                        .map(function (client){
                            return client.nom + ' ' + client.prenoms
                        }).join('\n')
                    );
                start();
                }, 
                function (err){
                    console.log('Oops, il y a une erreur');
                    start();
                }
            );
            break;
        
        case '2':
            break;

        case '99' :
            console.log( " Aurevoir " );
            readL.close();
            this.process.exit(); // Met fin au programme
            break ;

        default :
            console.log( "Saisissez un chifre du menu" );
    }
  
});
}

exports.demarrer = start;