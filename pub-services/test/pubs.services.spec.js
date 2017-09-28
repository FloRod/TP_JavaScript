var assert = require('chai').assert;
var services = require('../services/pubs.services');

describe('pubs.services', function () {
    describe('#listAllPubs()', function () {
        it('should list throw error', function () {
            assert.throws(function(){services.listAllPubs}, Error, "");
        });

    });
    describe('#listOpenPubs()', function () {
        it('should list throw error', function () {
            assert.throws(function(){services.listOpenPubs}, Error, "");
        });

    });
});