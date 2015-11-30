/**
 * Created by Rushabh on 29-Nov-15.
 */

var myApp = angular.module('myApp',[]);

myApp.controller('RegistrationController',['$scope',function($scope){

    $scope.register = function () {
        $scope.message = 'Welcome ' + $scope.user.firstname;
    };

}]);