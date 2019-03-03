app.directive('scrollPosition', function($window) {
    return {
      scope: {
        scroll: '=scrollPosition'
      },
      link: function(scope, element, attrs) {

         //detect scroll
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            scope.scroll = scroll;
        if(scroll>500 || scroll==undefined){
            scope.showUpArrow = false;
        }else{
            scope.showUpArrow = true;
        }
        scope.$apply();
        });
      }
    };
  });