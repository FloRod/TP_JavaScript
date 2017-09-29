const jsonFile = require('../mocks/pubs');
const moment = require('moment');
const _ = require('lodash');
const Pub = require('../model/Pub');
const Owner = require('../model/Owner');
const OpenHours = require('../model/OpenHours');
const Beer = require('../model/Beer');



function dataRecovery() {
    const data = jsonFile.map(function (element) {
        const owner = new Owner(element.owner.firstName, element.owner.lastName, element.owner.mail);
        const openHours = new OpenHours(element.openHours.start, element.openHours.end);
        const beers = element.beers.map(function (item) {
            return new Beer(item.type, item.name);
        });
        return new Pub(element.name, owner, element.openDays, openHours, beers);
    });
    return data;
}


var today = {
    day: moment().format('dddd'),
    hour: moment().format('hh')
};

function listAllPubs() {
    return dataRecovery();
};

function listOpenPubs(today) {
    const listPubs = listAllPubs().filter(item => item.openDays.includes(today));
    //&& (item.openHours.start <= today.hour && item.openHours.end >= today.hour));
    console.log(listPubs);
    return listPubs;
};

//console.log(listAllPubs());
//listOpenPubs('Tuesday');

module.exports = { listAllPubs, listOpenPubs };