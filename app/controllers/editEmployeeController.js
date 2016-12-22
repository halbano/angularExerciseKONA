var app = angular.module('MobileAngularUiExamples');

app.controller('EditEmployeeController', ['$scope','Employees','SharedEmployee','toastr',function ($scope,Employees,SharedEmployee,toastr) {
	// clone employee (will not save changes until confirmation)
	$scope.editEmployee = JSON.parse(JSON.stringify(SharedEmployee.employee));
	
	$scope.save = function() {
		if($scope.editEmployeeForm.$valid) {
			Employees.save($scope.editEmployee).then(
				// success
				function(value){
					toastr.success('Employee saved!');
					SharedEmployee.employee = $scope.editEmployee;
				},
				// error
				function(reason){
					for(var i=0; i<reason.data.length; i++){
						toastr.error(reason.data[i],'Employee could not be saved');
					}
				}
			);
		} else {
			// ask user to validate invalid inputs
			angular.forEach($scope.editEmployeeForm.$error.required, function(field) {
    			if(!field.$valid){
    				toastr.error(field.$name,'Please correct field');
    			}
			});
		}
	}

}]);