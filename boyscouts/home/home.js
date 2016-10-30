'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['Page', function(Page) {
  Page.setTitle('Home');
  Page.setDescription('Washington CH, Ohio Boy Scouts Troop 112');
}]);