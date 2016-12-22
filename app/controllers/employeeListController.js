var app = angular.module('MobileAngularUiExamples');

app.controller('EmployeeListController', ['$scope','Employees','SharedEmployee','$window',function ($scope,Employees,SharedEmployee,$window) {
	$scope.employees = [];

	$scope.$watch('filter.value', function (value) {
		if(value != undefined && value.length){
			Employees.getByName(value).then(
    			function(data){
    				$scope.employees = data.data;
    			}
    		);
		} else {
			Employees.getAll().then(
				function(data){
					$scope.employees = data.data;
				}
			);
		}
    });

    $scope.setPerson = function(employee) {
    	SharedEmployee.employee = employee;
    	var url = "http://" + $window.location.host + "/#/edit";
    	$window.location.href = url;
    };

}]);