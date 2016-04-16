// Template for service testing
// https://docs.angularjs.org/guide/services/#unit-testing
describe('BF.WebsiteService', function () {
    'use strict';
    var service;

    // loads the module
    beforeEach(module('bfWebsite'));

    beforeEach(inject(function ($injector) {
        // retrieves object instances of the service
        service = $injector.get('BF.WebsiteService');
    }));

    describe('when ...', function (){
        it('should ...', function () {
            // checks if the returned value is the expected
            expect(service.myFunction()).toEqual('some value');
        });
    });
});
