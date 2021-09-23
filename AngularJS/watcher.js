var app = angular.module('app', []);

app.controller('emp', function($scope){
    $scope.a = 1
    $scope.b = 2
    $scope.c = 3

    $scope.updateC = function(){
        $scope.c = $scope.a * 4
    }

    $scope.$watch("c", function(newValue, oldValue){
        if(newValue != oldValue){
            console.log("Updated C to "+ newValue)
        }
    })
});

