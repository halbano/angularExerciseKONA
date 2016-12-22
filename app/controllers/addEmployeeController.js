var app = angular.module('MobileAngularUiExamples');

app.controller('AddEmployeeController', ['$scope','Employees','toastr',function ($scope,Employees,toastr) {
	$scope.newEmployee = {};

	$scope.create = function() {
		if($scope.addEmployee.$valid) {
  			// complete default values
			$scope.newEmployee.medium = "https://mebeljazz.com.ua/catalog/view/theme/default/image/PersonalPhoto.jpg";
			$scope.newEmployee.large = "https://mebeljazz.com.ua/catalog/view/theme/default/image/PersonalPhoto.jpg";
			if($scope.newEmployee.gender == "male"){
				$scope.newEmployee.title = "mr";
			} else if($scope.newEmployee.gender == "female") {
				$scope.newEmployee.title = "ms";
			}

			Employees.save($scope.newEmployee).then(
				// success
				function(value){
					toastr.success('Employee created!');
				},
				// error
				function(reason){
					for(var i=0; i<reason.data.length; i++){
						toastr.error(reason.data[i],'Employee not created');
					}
				}
			);
		
		} else {
			// ask user to validate invalid inputs
			angular.forEach($scope.addEmployee.$error.required, function(field) {
    			if(!field.$valid){
    				toastr.error(field.$name,'Please correct field');
    			}
			});
		}
	}

}]);