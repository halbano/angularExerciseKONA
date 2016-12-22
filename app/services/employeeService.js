var app = angular.module('MobileAngularUiExamples');
// var apiUrl = 'http://app.konacloud.io/api/team/testgular';
var apiUrl = 'http://localhost:3000/api';

app.factory('Employees', function($http) {
	    return {
	        getAll : function() {
	            return $http.get(apiUrl + '/employees');
	        },
	        save : function(employee) {
	            return $http.post(apiUrl + '/employees', employee);
	        },
	        getByName : function(name) {
	        	return $http.get(apiUrl + '/employees/find?name=' + name);
	        }
		}
	}
);