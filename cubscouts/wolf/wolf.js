'use strict';

angular.module('myApp.wolf', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/wolf', {
    templateUrl: 'wolf/wolf.html',
    controller: 'WolfCtrl'
  });
}])

.controller('WolfCtrl', ['Page', function(Page) {
  Page.setTitle('Wolf');
  Page.setDescription('Washington CH, Ohio Cub Scouts Pack 112');
}]);