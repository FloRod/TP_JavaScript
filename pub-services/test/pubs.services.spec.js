const expect = require('chai').expect;
const assert = require('chai').assert;
const services = require('../services/pubs.services');

describe('pubs.services', function () {
    describe('#listAllPubs()', function () {
        it('should be an array', function () {
            expect(services.listAllPubs()).to.be.an('array');
        });

    });
    describe('#listOpenPubs()', function () {
        it('listOpenPubs contains elements', function () {
            expect(services.listOpenPubs("Thursday")).that.not.is.empty;
        });
        it('should be an array', function () {
            expect(services.listOpenPubs("Thursday")).to.be.an('array');
        });
        it('listOpenPubs contains elements', function () {
            assert(services.listOpenPubs("Sunday").length = 1);
        });

    });
});