angular.module('angularStarterApp.controllers', [])
.controller('UsersController', function ($scope, $http, UserService, LoadingService) {
    $scope.animationsEnabled = true;
    $scope.users = [];
    
    $scope.getUsersList = function(){
        LoadingService.showLoading();
        var promise = UserService.getUsers();
        promise.then(
            function(response){
                LoadingService.hideLoading();
                $scope.users = response.data;
            },
            function(error) {
                LoadingService.hideLoading();
            }
        );
    };
});