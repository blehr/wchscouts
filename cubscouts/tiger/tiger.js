'use strict';

angular.module('myApp.tiger', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tiger', {
    templateUrl: 'tiger/tiger.html',
    controller: 'TigerCtrl'
  });
}])

.controller('TigerCtrl', ['Page', function(Page) {
  Page.setTitle('Tiger');
  Page.setDescription('Washington CH, Ohio Cub Scouts Pack 112');
}]);