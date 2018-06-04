var app = angular.module("railway",[]);
app.controller("homeController", function($scope){

    $scope.showSuccess = function() {
		// making login success variable true
        $scope.isLoginSuccess = true;
    };
});