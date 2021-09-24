//DI
function AppCtrl($scope, $http){
    console.log("Hello from the controller")

    $http.get('/contactlist').success(function(response){
        $scope.contactlist = response
    })

    
    
}