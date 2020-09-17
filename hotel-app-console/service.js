var request = require('request');

var backendUrl = 'https://cqlv2-hotel-web-api.herokuapp.com';

function listerClients(callbackOK, callbackKO) {

    request(backendUrl + '/clients?start=0&size=3', {json: true}, 
        function (err, res, listeDeClients) {
            //3
            if (err) {
                callbackKO(err);
            } else {
                callbackOK(listeDeClients)
            }
        });

    }

exports.listerClients = listerClients;