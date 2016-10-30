'use strict';

angular.module('myApp.webelos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/webelos', {
    templateUrl: 'webelos/webelos.html',
    controller: 'WebelosCtrl'
  });
}])

.controller('WebelosCtrl', ['Page', function(Page) {
  Page.setTitle('Webelos');
  Page.setDescription('Washington CH, Ohio Cub Scouts Pack 112');
}]);