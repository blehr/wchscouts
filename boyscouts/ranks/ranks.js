'use strict';

angular.module('myApp.ranks', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ranks', {
    templateUrl: 'ranks/ranks.html',
    controller: 'RanksCtrl'
  });
}])

.controller('RanksCtrl', ['Page', function(Page) {
  Page.setTitle('Ranks');
  Page.setDescription('Washington CH, Ohio Boy Scouts Troop 112');
}]);