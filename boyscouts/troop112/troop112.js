'use strict';

angular.module('myApp.troop112', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/troop112', {
    templateUrl: 'troop112/troop112.html',
    controller: 'PackCtrl'
  });
}])

.controller('PackCtrl', ['Page', function(Page) {
  Page.setTitle('Welcome');
  Page.setDescription('Washington CH, Ohio Boy Scouts Troop 112');
}]);