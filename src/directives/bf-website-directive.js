function WebsiteDirective() {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: '/views/bf-website.html',
        controller: 'BF.WebsiteController',
        bindToController: true,
        controllerAs: 'ctrl'
    };
}

WebsiteDirective.$inject = [];

export default WebsiteDirective;
