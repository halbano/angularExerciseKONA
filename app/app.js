'use strict';

var app = angular.module('MobileAngularUiExamples', [
    "ngRoute",
    "ngTouch",
    "mobile-angular-ui",
    "toastr"
]);

/*
 -- Route provider
 */

app.config(function ($routeProvider) {
    $routeProvider.when('/', { 
            templateUrl: "templates/listemployee.html",
            controller: "EmployeeListController"
    });

    $routeProvider.when('/about', {templateUrl: "templates/about.html"});

    $routeProvider.when('/addnew', {
        templateUrl: "templates/addemployee.html",
        controller: "AddEmployeeController"
    });

    $routeProvider.when('/edit', {
        templateUrl: "templates/editemployee.html",
        controller: "EditEmployeeController"
    });
});
