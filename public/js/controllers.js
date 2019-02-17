app.controller("PortfolioCtrl", ["$scope", "PortfolioService", function($scope, PortfolioService) {

  $scope.projects = PortfolioService.projects;

  $scope.sayings = ['Creative', 'Intelligent', 'Fun', 'Tenacity']
}]);

app.controller("DetailsCtrl", ["$scope", "PortfolioService", function($scope, PortfolioService) {
 
}])

app.controller("DesignsCtrl", ["$scope", "PortfolioService", function($scope, PortfolioService) {
  $scope.designs = PortfolioService.designs;
}]);
app.controller("ContactCtrl", ["$scope", function($scope) {
  
}])
app.controller("AboutCtrl", ["$scope", function($scope) {
  
}])
app.controller("SkillsCtrl", ["$scope", function($scope) {
  
}])
