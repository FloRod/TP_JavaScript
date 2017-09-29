var services = require('../../pub-services/services/pubs.services')

function getListPub(){
    services.listAllPubs();
    services.listOpenPubs('Thursday');
}

module.exports = {
    getListPub: getListPub
};