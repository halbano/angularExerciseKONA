'use strict';

var app = angular.module('MobileAngularUiExamples', [
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
    $routeProvider.when('/about', {templateUrl: "templates/about.html"});
});
