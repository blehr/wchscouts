'use strict';

angular.module('myApp.pack112', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pack112', {
    templateUrl: 'pack112/pack112.html',
    controller: 'PackCtrl'
  });
}])

.controller('PackCtrl', ['Page', function(Page) {
  Page.setTitle('Welcome');
  Page.setDescription('Washington CH, Ohio Cub Scouts Pack 112');
}]);