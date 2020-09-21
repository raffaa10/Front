// récupération du module `readline`
var readline = require('readline');
var service = require('./service.js');

const monService = new service.Service();

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

// récupération de la saisie utilisateur
readL.question('Faites votre choix : ', function(saisie) {

    switch( saisie ) {
        case '1' :
            console.log("\n>>> Liste des clients\n")

            monService.listerClients().then(listClient => console.log(listerClients
                .map(client => `${client.nom} ${client.prenoms}`)
                .join())).catch(err => console.log(err))
                .finally(() => {
                    console.log("\r");
                    this.start();
                });
            break;
        
        case '2':
            console.log("\n >>> Ajouter un client ");
            readL.question("Saisissez le nom de client : ", saisieNom => {
                readL.question("Saisissez le prenom de client :", saisiePrenom => {
                    monService.ajouterClient(saisieNom, saisiePrenom).then(console.log(`${saisieNom} ${saisiePrenom} ajouté`))
                    .catch(err => console.log(err))
                    .finally(() => {
                        console.log("\r");
                        this.start();
                    });

                })
            });
            break;
        case '3':
            console.log("\n >>> Recherche un client par nom ");
            readL.question("Saisissez un nom : ", saisieNom => {
                monService.findByName(saisieNom).then(client => console.log(client))
                .catch(err => console.log(err))
                .finally(() => {
                    console.log("\r");
                    this.start();
                });
            });
        case '4' :
            console.log("\n >>> Vérifier la disponibilité d'une chambre");
            break;

        case '99' :
            console.log( "\n Aurevoir " );
            readL.close();
            this.process.exit(); // Met fin au programme
            break ;

        default :
            console.log( "\n Saisissez un chifre du menu" );
            this.start();
    }
  
});
}

exports.demarrer = start;