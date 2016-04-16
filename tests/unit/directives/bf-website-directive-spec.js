// Template for directive testing
// https://docs.angularjs.org/guide/unit-testing/#testing-directives
describe('BF.WebsiteDirective', function () {
    'use strict';
    var $compile;
    var $rootScope;
    var element;

    // loads the module
    beforeEach(module('bfWebsite'));

    beforeEach(inject(function ($injector) {
        // retrieves object instances of the services
        $compile = $injector.get('$compile');
        $rootScope = $injector.get('$rootScope');
    }));

    describe('when ...', function () {
        beforeEach(function () {
            // compiles a piece of HTML containing the directive
            element = $compile('<bf-website></bf-website>')($rootScope);
            // fires all the watches, so the angular expressions are evaluated
            $rootScope.$digest();
        });

        it('should ...', function () {
            // checks that the compiled element contains the templated content
            expect(element.html()).toContain('directive');
        });
    });
});
