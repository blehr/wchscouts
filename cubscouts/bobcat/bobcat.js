'use strict';

angular.module('myApp.bobcat', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bobcat', {
    templateUrl: 'bobcat/bobcat.html',
    controller: 'BobcatCtrl'
  });
}])

.controller('BobcatCtrl', ['Page', function(Page) {
  Page.setTitle('Bobcat');
  Page.setDescription('Washington CH, Ohio Cub Scouts Pack 112');
}]);