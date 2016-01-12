 app.controller("FinalController", function($scope, $http, $location){

      $http.get('/stories').then(function (response) {
        console.log(response)
      $scope.stories = response.data

    })

})