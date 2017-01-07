var app = angular.module("railway",[]);
app.controller("homeController", function($scope){

    $scope.showSuccess = function() {
        $scope.isLoginSuccess = true;
    };
});