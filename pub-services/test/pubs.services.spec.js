var expect = require('chai').expect;
var services = require('../services/pubs.services');

describe('pubs.services', function () {
    describe('#listAllPubs()', function () {
        it('should json throw error', function () {
            //assert.throws(function(){services.listAllPubs()}, Error, 'Erreur : le fichier json n\'existe pas');
        });

    });
    describe('#listOpenPubs()', function () {
        it('listOpenPubs contains elements', function () {
            expect(services.listOpenPubs("Thursday")).that.not.is.empty;
        });
        it('listOpenPubs contains elements', function () {
            expect(function () {services.listOpenPubs("Tursday")}).to.throw();
        });
        // it('element listOpenPubs is object', function () {
        //     expect(services.listOpenPubs()).that.include( ! typeof "object");
        // });
        // it('listOpenPubs contains elements', function () {
        //     expect(services.listOpenPubs()).that.not.is.empty;
        // });

    });
});