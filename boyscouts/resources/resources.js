'use strict';

angular.module('myApp.resources', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/resources', {
    templateUrl: 'resources/resources.html',
    controller: 'ResourcesCtrl'
  });
}])

.controller('ResourcesCtrl', ['Page', function(Page) {
  Page.setTitle('Resources');
  Page.setDescription('Washington CH, Ohio Boy Scouts Troop 112');
}]);