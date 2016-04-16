import 'angular';
import 'ng-extensions';
import './templates.js';

import WebsiteDirective from './directives/bf-website-directive.js';
import WebsiteController from './controllers/bf-website-controller.js';
import WebsiteService from './providers/bf-website-service.js';

var app = angular.module('bfWebsite', ['bfWebsiteTemplates', 'betfair.extensions']);

app.directive('bfWebsite', WebsiteDirective);
app.controller('BF.WebsiteController', WebsiteController);
app.service('BF.WebsiteService', WebsiteService);
