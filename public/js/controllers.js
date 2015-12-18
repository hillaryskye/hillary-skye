app.controller("PortfolioCtrl", ["$scope", function($scope) {
  console.log('from controller')

  console.log('two')
  $scope.projects = [
    {
      name: 'tuneSet',
      url: 'https://stormy-waters-7608.herokuapp.com/',
      desc: 'TuneSet creates Traditional Irish abc music files, which include the name of the tune, the type of which it is a jig or a reel, the key, and other info about the tune. A page generates, which the abc music notated into musical printed material. Another page shows you dynamically key choices through TheSession.org\'s API and returns a list of tunes and the user can choose a tune, which generates another page that shows all of the tunes in their collection of tunes from a database.',
      image: 'tuneSet.png',
      icon: 'fa fa-music',
      github: 'https://github.com/hillaryskye/tuneSet'
    },
    {
      name: 'reddit-firebase-angular',
      url: 'http://development.reddit-firebase-angular.divshot.io/',
      desc: 'Create, Read, Delete posts of a mock Reddit App with Firebase, Angular. Each post can be upvoted/ downvoted, favorited and you can add comments to each post.',
      image: 'reddit-firebase-angular.png',
      icon: 'fa fa-reddit',
      github: 'https://github.com/hillaryskye/reddit-firebase-angular'
    },
    {
      name: 'mixer',
      url: 'https://fathomless-wave-8517.herokuapp.com/colors',
      desc: 'This app has 2 ways of creating a colors for use in developing a website. Firstly, you can just enter the red, green, blue values and secondly, you can choose a first color, a second color and it mixes a new color. All colors are saved for use in creating more colors.  This is a work in progress. I am still working on making it better and hoping to get some D3 functionality into it.',
      image: 'mixer.png',
      icon: 'fa fa-paint-brush',
      github: 'https://github.com/hillaryskye/mixer'
    }
  ]
  $scope.sayings = ['Creative', 'Intelligent', 'Fun', 'Tenacity']
}])
