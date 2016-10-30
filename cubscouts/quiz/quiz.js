'use strict';

angular.module('myApp.quiz', ['ngRoute', 'ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/quiz', {
    templateUrl: 'quiz/quiz.html',
    controller: 'QuizCtrl'
  });
}])

.controller('QuizCtrl', ['Page', function(Page) {
    Page.setTitle('Bobcat Quiz');
    Page.setDescription('Washington CH, Ohio Cub Scouts Pack 112');
  }])
  .directive('quiz', function() {
    return {
      restrict: 'E',
      templateUrl: 'quiz/quizDirective.html',
      controller: ['$scope', '$http', function($scope, $http) {

        $scope.count = 0;
        $scope.score = 0;
        $scope.questNum = 1;
        $scope.userChoicesArray = [];
        $scope.answer = '';

        $scope.getData = function() {
          $http({
            method: 'get',
            url: 'js/quiz.json'
          }).success(function(data) {
            $scope.data = data;
          });
        };
      }],
      link: function($scope, iElement, iAttrs) {
        $scope.getData();


        $scope.hideQuiz = true;
        $scope.showStart = true;
        $scope.final = false;

        $scope.showQuiz = function() {
          $scope.hideQuiz = false;
          $scope.showStart = false;
        };

        //Next button
        $scope.nextQuestion = function() {
          if ($scope.answer == '') {
            alert("Please select an answer!");
            return;
          }

          $scope.userChoicesArray[$scope.count] = $scope.answer;

          if ($scope.answer == $scope.data[$scope.count].correctAns) {
            updateScore(1);
          }

          if ($scope.count >= $scope.data.length - 1) {
            showFinal();
            return;
          }
          else {
            $scope.count += 1;
            if ($scope.userChoicesArray[$scope.count] !== undefined) {
              $scope.answer = $scope.userChoicesArray[$scope.count];
            }
            else {
              $scope.answer = '';
            }
          }
          $scope.questionNum();
        };

        //Back Button
        $scope.backQuestion = function() {
          if ($scope.count === 0) {
            return;
          }
          else {
            $scope.count -= 1;
            if ($scope.userChoicesArray[$scope.count] !== undefined) {
              $scope.answer = $scope.userChoicesArray[$scope.count];
            }
            if ($scope.answer == $scope.data[$scope.count].correctAns) {
              updateScore(-1);
            }
          }
          $scope.questionNum();
        };

        //update question number
        $scope.questionNum = function() {
          $scope.questNum = $scope.count + 1;
        };

        //update score
        function updateScore(change) {
          $scope.score += change;
        }

        //show final score
        function showFinal() {
          $scope.hideQuiz = true;
          $scope.final = true;
        }

        //reset
        $scope.reset = function() {
          $scope.count = 0;
          $scope.score = 0;
          $scope.questionNum();
          $scope.userChoicesArray.length = 0;
          $scope.answer = '';
          $scope.hideQuiz = false;
          $scope.final = false;
        };
      }
    };
  });