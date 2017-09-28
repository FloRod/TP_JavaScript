var jsonFile = require('../mocks/pubs');
var moment = require('moment');
console.log(jsonFile.length);
console.log(jsonFile[0].name);

function listAllPubs() {
    return jsonFile;
}

function listOpenPubs() {
    today = {
        day: moment().format('dddd'),
        hour: moment().format('hh')
    };

    var listPubs = jsonFile.filter(function (item) {
        return (item.openDays.includes(today.day) && (item.openHours.start <= today.hour && item.openHours.end >= today.hour));
    })
   return listPubs;
}

module.exports = {
    listAllPubs: listAllPubs,
    listOpenPubs: listOpenPubs
};