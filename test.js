var assert = require('assert');
var mock = require("./index");

describe('telegraphjs-context-mock', function() {

    it('can create and call next', function(done) {

        var context = mock.createContext({}, done);
        context.next();

    });

    it('can create and call directly', function(done) {

        var context = mock.createContext({}, done);
        context();

    });


    it('can create and call fail', function(done) {

        var context = mock.createContext({}, function complete(err) {
        	assert.ok(err);
        	done();
        });

        context.fail("This is an error.");

    });


});