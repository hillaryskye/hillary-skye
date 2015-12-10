app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'partials/home.html',
          controller: 'PortfolioCtrl'
        })
        // .otherwise({
        //   templateUrl: 'partials/home.html',
        //   controller: 'PortfolioCtrl'
        // })
        // // use the HTML5 History API
         $locationProvider.html5Mode(true);
}]);
