// (function () {
//     'use strict';

//     angular
//         .module('header')
//         .directive('menuDropdown', PortfolioDirective);

//     function PortfolioDirective() {
//         return {
//             restrict: 'E',
//             scope: {
//                 label: '@'
//             },
//             transclude: true,
//             templateUrl: 'index.html',
//             link: linkFunction
//         };
//     }

//     function linkFunction (scope, element) {
        
//         scope.isVisible = false;
//         console.log(scope)
//         console.log('invisible,', scope.invisible)

//         scope.toggle = function() {
//             scope.isVisible = !scope.isVisible;
//         };

//         var everywhere = angular.element(window.document);

//         everywhere.bind('click', function(event){
//             var isButtonClick = event.target === element.find('button')[0];
        
//             if(!isButtonClick){
//                 scope.isVisible = false;
//             }
        
//             scope.$apply();
//         });
//     }
// })();

app.directive('portfolioDirective', function () {
    return {
        link: function ($scope, element, attrs) {
            element.bind('click', function () {
                element.html('You clicked me!');
            });
            element.bind('mouseenter', function () {
                element.css('background-color', 'yellow');
            });
            element.bind('mouseleave', function () {
                element.css('background-color', 'white');
            });
        }
    };
});