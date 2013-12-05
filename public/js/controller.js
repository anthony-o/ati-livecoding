'use strict';

/* Controllers */
angular.module('atilive').
controller('appCtrl', function ($scope, $http) {
    $http({
      method: 'GET',
      url: '/api/v1/restaurants'
    }).
    success(function (data, status, headers, config) {
      $scope.restaurants = data;
    }).
    error(function (data, status, headers, config) {
      $scope.error = 'Error!';
    });
}).
controller('restaurantsCtrl', function ($scope, $http) {
    $http({
      method: 'GET',
      url: '/api/v1/restaurants'
    }).
    success(function (data, status, headers, config) {
      $scope.restaurants = data;
    }).
    error(function (data, status, headers, config) {
      $scope.error = 'Error!';
    });
}).
controller('restaurantCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
    $http({
      method: 'GET',
      url: '/api/v1/restaurant/'+$routeParams.id
    }).
    success(function (data, status, headers, config) {
      $scope.restaurant = data;
    }).
    error(function (data, status, headers, config) {
      $scope.error = 'Error!';
    });
}]);