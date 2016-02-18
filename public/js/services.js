app.factory('PortfolioService', function () {
  console.log('Im first from service')
  var ProjectList = {}
  // ProjectList.projects = []
  console.log('4 in service')

  ProjectList.projects = [
    {
      name: 'shopping-angular',
      type: 'Galvanize Project',
      url: 'https://shoppingangular.firebaseapp.com/',
      desc: 'This app is a shopping cart for tea, which was developed using Angular and Firebase',
      image: 'shopping-angular.png',
      icon: 'fa fa-coffee',
      github: 'https://github.com/hillaryskye/shopping-angular'
    },
    {
      name: 'reddit-firebase-angular',
      type: 'Galvanize Project',
      url: 'https://redditfirebase.firebaseapp.com/',
      desc: 'Create, Read, Delete posts of a mock Reddit App with Firebase, Angular. Each post can be upvoted/ downvoted, favorited and you can add comments to each post.',
      image: 'reddit-firebase-angular.png',
      icon: 'fa fa-reddit',
      github: 'https://github.com/hillaryskye/reddit-firebase-angular'
    },
    {
      name: 'tuneSet',
      type: 'Personal Project',
      url: 'https://stormy-waters-7608.herokuapp.com/',
      desc: 'TuneSet creates Traditional Irish abc music files, which include the name of the tune, the type of which it is a jig or a reel, the key, and other info about the tune. A page generates, which the abc music notated into musical printed material. Another page shows you dynamically key choices through TheSession.org\'s API and returns a list of tunes and the user can choose a tune, which generates another page that shows all of the tunes in their collection of tunes from a database.',
      image: 'tuneSet.png',
      icon: 'fa fa-music',
      github: 'https://github.com/hillaryskye/tuneSet'
    },
    {
      name: 'mixer',
      type: 'Hackathon inspired Project',
      url: 'https://fathomless-wave-8517.herokuapp.com/colors',
      desc: 'This app has 2 ways of creating a colors. Firstly, you can just enter the red, green, blue values and secondly, you can choose two colors and it mixes a new color and all colors are saved in a mongo database.',
      image: 'mixer.png',
      icon: 'fa fa-paint-brush',
      github: 'https://github.com/hillaryskye/mixer'
    }
  ]
  console.log('1.5 from services')

  return ProjectList;
})
