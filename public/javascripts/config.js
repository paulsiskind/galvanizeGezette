 app.config(function( $routeProvider, $locationProvider, $httpProvider) {
   

    $routeProvider
    .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'FinalController'
      
      })
    .when('/stories/:id',{
        templateUrl: 'partials/show.html',
        controller: "indexController"
        
      })
    .otherwise( {redirectTo: '/'
      })
      $locationProvider.html5Mode(true)

       
      })