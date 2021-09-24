//DI
function AppCtrl($scope, $http){
    console.log("Hello from the controller")

    var refresh = function(){
        console.log("Inside refresh")
        $http.get('/contactlist').success(function(response){
            $scope.contactlist = response
            $scope.contact = ""
        });
    };
   
    refresh();


    $scope.addContact = function(){
        $http.post('/contactlist', $scope.contact).success(function(response){
            console.log(response)
            refresh();
        })
    
    }
    
}