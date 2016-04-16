// Template for controller testing
// https://docs.angularjs.org/guide/unit-testing/#testing-a-controller
describe('BF.WebsiteController', function () {
    'use strict';
    var $controller;
    var controller;

    // loads the module
    beforeEach(module('bfWebsite'));

    beforeEach(inject(function ($injector) {
        // retrieves object instances of the $controller
        $controller = $injector.get('$controller');
    }));

    describe('when ...', function (){
        beforeEach(function (){
            // instantiates the controller
            controller = $controller('BF.WebsiteController');
        });

        it('should ...', function () {
            // checks if the returned value is the expected
            expect(controller.myFunction()).toEqual('some value');
        });
    });
});
