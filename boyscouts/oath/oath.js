'use strict';

angular.module('myApp.oath', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/oath', {
    templateUrl: 'oath/oath.html',
    controller: 'OathCtrl'
  });
}])

.controller('OathCtrl', ['Page', function(Page) {
  Page.setTitle('Oath and Law');
  Page.setDescription('Washington CH, Ohio Boy Scouts Troop 112');
}]);