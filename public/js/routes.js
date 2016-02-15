app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'partials/home.html',
          controller: 'PortfolioCtrl'
        })
        .when('/details', {
          templateUrl: 'partials/details.html',
          controller: 'DetailsCtrl'
        })
        .when('/design', {
          templateUrl: 'partials/designs.html',
          controller: 'DesignCtrl'
        })
        .when('/contact', {
          templateUrl: 'partials/contact.html',
          controller: 'ContactCtrl'
        })
        .when('/about', {
          templateUrl: 'partials/about.html',
          controller: 'AboutCtrl'
        })
        .when('/skills', {
          templateUrl: 'partials/skills.html',
          controller: 'SkillsCtrl'
        })
        .otherwise({ redirectTo: '/' })
        // // use the HTML5 History API
          // $locationProvider.html5Mode(true);
}]);
