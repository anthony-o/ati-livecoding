'use strict';

// Declare app level module which depends on filters, and services

angular.module('atilive', [
    'ngRoute'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: '/restaurants.html',
      controller: 'restaurantsCtrl'
    }).
    when('/restaurants', {
      templateUrl: '/restaurants.html',
      controller: 'restaurantsCtrl'
    }).
    when('/restaurant/:id', {
        templateUrl: '/restaurant.html',
        controller: 'restaurantCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
});