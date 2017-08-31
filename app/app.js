'use strict';

var app = angular.module('IBECFinal', [
    "ngRoute",
    "ngTouch",
    "mobile-angular-ui"
]);

/*
 -- Route provider
 */

app.config(function ($routeProvider) {
    $routeProvider.when('/', { 
            templateUrl: "templates/listemployee.html",
            controller: "MainController"
    });

    $routeProvider.when('/users/new', { 
            templateUrl: "templates/usersFormView.html",
            controller: "MainController"
    });

    $routeProvider.when('/users/:id/edit', { 
            templateUrl: "templates/usersFormView.html",
            controller: "MainController"
    });

    $routeProvider.when('/about', {templateUrl: "templates/about.html"});
});
