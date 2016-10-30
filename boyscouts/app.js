'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'myApp.troop112',
  'myApp.oath',
  'myApp.ranks',
  'myApp.quiz',
  'myApp.resources',
  'myApp.home'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])
.controller('AppCtrl', function(Page){
  var self = this;
  self.Page = Page;

  self.menuToggle = function() {
    $('#mobile-nav').toggleClass("show-m-nav");
  };
})
.factory('Page', function(){
  var title = 'default';
  var description = 'default';
  return {
    title: function() { return title; },
    setTitle: function(newTitle) { title = newTitle; },
    description: function() { return description; },
    setDescription: function(newDescription) { description = newDescription; }
  };
});