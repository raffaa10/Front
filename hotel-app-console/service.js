class Service{

    constructor(){
        this.request = require('request-promise-native');
        //npm install --save request-promise-native
    }

    listerClients() {
        return new Promise((resolve, reject) => {
            this.request.get('https://cqlv2-hotel-web-api.herokuapp.com/clients'), {json: true}, 
            function (err, res, body) {
                if (err) {
                    reject(err);
                } else {
                    resolve(body);
                }
            };
    
        });
    }


    findByName(nomClient) {
        return new Promise((resolve, reject) => {
            this.request.get('https://cqlv2-hotel-web-api.herokuapp.com/clients/nom=${nomClientr}', { json: true }, 
            function (err, res, body) {
                if (err) {
                    reject(err);
                } else {
                    resolve(body);
                }
            });
        })

    }

    ajouterClient(saisieNom, saisiePrenom) {
        return new Promise((resolve, reject) => {
            this.request.post({
                url: 'https://cqlv2-hotel-web-api.herokuapp.com/clients',
                method: 'POST',
                json: {
                    nom: saisieNom,
                    prenoms: saisiePrenom
                }
            }, function (err, res, body) {
                if (err) {
                    reject(err);
                } else {
                    return resolve(body);
                }
            });
        })

    }
}

exports.Service = Service;