app.directive('scrollPosition', function($window) {
    return {
      scope: {
        scroll: '=scrollPosition'
      },
      link: function(scope, element, attrs) {
        // var windowEl = angular.element($window);
        // var handler = function() {
        //   scope.scroll = windowEl.scrollTop();
        //   console.log('scroll', scope.scroll)
        // }
        // windowEl.on('scroll', scope.$apply.bind(scope, handler));
        // handler();
        // console.log('scope', scope)
        // console.log('handler', handler)

         //detect scroll
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            scope.scroll = scroll;
        console.log('scroll', scroll);
        console.log('scope', scope)
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