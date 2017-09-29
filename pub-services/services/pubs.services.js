var jsonFile = require('../mocks/pubs');
var moment = require('moment');
const _ = require('lodash');
var today = {
    day: moment().format('dddd'),
    hour: moment().format('hh')
};


function listAllPubs() {
    //if ((typeof jsonFile !== undefined) || (typeof jsonFile[0] !== undefined)) {
        return jsonFile;
    // }
    // else {
    //     throwErrorJson();
    // };
};

function listOpenPubs(today) {
    var listPubs = jsonFile.filter(function (item) {
        return (item.openDays.includes(today)); //&& (item.openHours.start <= today.hour && item.openHours.end >= today.hour));
    })
    if (! _.isEmpty(listPubs)) {
        console.log(listPubs);
        return listPubs;
    }
    else {
        throwErrorList();
    };
};


function throwErrorList() {
    throw new Error('Erreur : la liste de Pubs est vide');
};

function throwErrorJson() {
    throw new Error('Erreur : le fichier json n\'existe pas');
}


//listOpenPubs();

module.exports = {
    listAllPubs: listAllPubs,
    listOpenPubs: listOpenPubs
};