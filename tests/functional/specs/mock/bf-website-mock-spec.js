// Template for functional testing
// https://angular.github.io/protractor/#/tutorial
describe('BF.Website', function () {
    'use strict';

    // The beforeAll function is called only once before all
    // the specs in describe are run
    beforeAll(function () {
        browser.get('');
    });

    it('should ...', function () {
        expect(true).toEqual(true);
    });
});
