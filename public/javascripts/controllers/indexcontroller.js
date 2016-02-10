app.controller("indexController", function($scope, $http, $location,  $routeParams){
  $scope.opinions = [];

  $scope.params = $routeParams.id


   $http.get($routeParams.id).then(function (response) {
        console.log(response.data._id, 'ididididd')
      $scope.story = response.data

})

   $http.get('/opinions').then(function (response) {
       
      $scope.opinion = response.data

        for(var e=0; e< $scope.opinion.length; e++){
          if($scope.opinion[e].story_id === $scope.story._id){
             $scope.opinions.push($scope.opinion[e])
          }
        }
     
    
    var input=[];
   for(var i =0; i<$scope.opinions.length; i++){
    input.push($scope.opinions[i].opinion)
    var string = input.join(' ').split(' ')
  
   }
    var temp = [];
    var output = {}
    for(var i=0;i<string.length;i++){
        console.log(string[i])
        if(string[i].toLowerCase() == 'it'){
          temp.push(string[i])
        }
        else if(string[i].toLowerCase() == 'is'){
          temp.push(string[i]);
        }
        else if(string[i].toLowerCase() == 'a'){
          temp.push(string[i]);
        }
        else if(string[i].toLowerCase() == 'the'){
          temp.push(string[i]);
        }
        else if(string[i].toLowerCase() == 'hercules'){
          temp.push(string[i]);
        }

        else if(output[string[i]]){
            output[string[i]]++
        }else{
            output[string[i]] = 1;
        }
     
    
    
}
    $scope.words = output
   
})
      
 })