app.controller("PortfolioCtrl", ["$scope", "PortfolioService", function($scope, PortfolioService) {
  console.log('from controller')

  console.log('two')

// jQuery for changing nav color from white to black on scroll
  $(document).ready(function(){
     var scroll_start = 0;
     var startchange = $('#startchange');
     var offset = startchange.offset();
     $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $('#navbar').css('background-color', 'rgba(0,0,0,.8)');
         } else {
            $('#navbar').css('background-color', 'rgba(255,255,255,.7)');
         }
     });
  });

// jQuery for hamburger responsive functionality
  jQuery(document).ready(function() {
    jQuery('#hamburger').click(function(e) {
        jQuery(this).toggleClass('blue');
        jQuery('nav').toggleClass('hide');
        e.preventDefault();
    });
});

// // Show and Slide-Down Effect with jQuery
$(document).ready(function(){
  $('.dropdown').hover(
    function(){
      $(this).children('.sub-menu').slideDown(200,stop());
    },
    function(){
      $(this).children('.sub-menu').slideUp(200,stop());
    })
    function stop(){
      $('.sub-menu').stop(true, true);
    }
  }); // end ready

$scope.projects = PortfolioService.projects
console.log('three')

  $scope.sayings = ['Creative', 'Intelligent', 'Fun', 'Tenacity']
}])


app.controller("DetailsCtrl", ["$scope", function($scope) {
  console.log('from Details Ctrl')
}])

app.controller("DesignCtrl", ["$scope", function($scope) {
  console.log('from Design Ctrl')
}])
app.controller("ContactCtrl", ["$scope", function($scope) {
  console.log('from Contact Ctrl')
}])
app.controller("AboutCtrl", ["$scope", function($scope) {
  console.log('from About Ctrl')
}])
app.controller("SkillsCtrl", ["$scope", function($scope) {
  console.log('from Skills Ctrl')
}])
