app.controller("indexController", function($scope, $http, $location,  $routeParams){
  $scope.opinions = [];

  $scope.params = $routeParams.id


   $http.get($routeParams.id).then(function (response) {
        console.log(response.data._id, 'ididididd')
      $scope.story = response.data

})

   $http.get('/opinions').then(function (response) {
        console.log(response)
        console.log(response.data[0].story_id, "opinions______________")
      $scope.opinion = response.data

        for(var e=0; e< $scope.opinion.length; e++){
          if($scope.opinion[e].story_id === $scope.story._id){
             $scope.opinions.push($scope.opinion[e])
          }
        }
     
     console.log($scope.opinions, "<<<<<<<<<<<<tacos>>>>>>>>>>>>>>>>>>")

    // for(var i=0; i<$scope.opinions.length;i++){
   
    //  var splitString = $scope.opinions[i].text.split(' ');
    //   var result = {};
    //    splitString.forEach(function(char){
    //    result.hasOwnProperty(char) ? result[char]++ : result[char] = 1; });
    //     return result; }
      
       
})
      
 })