function WebsiteService() {
    this.myFunction = function () {
        return 'some value';
    };

    return this;
};

WebsiteService.$inject = [];

export default WebsiteService;
