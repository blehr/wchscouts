'use strict';

angular.module('myApp.bear', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bear', {
    templateUrl: 'bear/bear.html',
    controller: 'BearCtrl'
  });
}])

.controller('BearCtrl', ['Page', function(Page) {
  Page.setTitle('Bear');
  Page.setDescription('Washington CH, Ohio Cub Scouts Pack 112');
}]);