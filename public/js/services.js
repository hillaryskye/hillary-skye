app.factory('PortfolioService', function () {
  var ProjectList = {}
  // ProjectList.projects = []

  ProjectList.projects = [
    {
      name: 'shopping-angular',
      type: 'Galvanize Project',
      url: 'https://shoppingangular.firebaseapp.com/',
      desc: 'This app is a shopping cart for tea, which was developed using Angular and Firebase',
      image: 'shopping-angular_opt_sm.jpg',
      icon: 'fa fa-coffee',
      github: 'https://github.com/hillaryskye/shopping-angular'
    },
    {
      name: 'reddit-firebase-angular',
      type: 'Galvanize Project',
      url: 'https://redditfirebase.firebaseapp.com/',
      desc: 'Create, Read, Delete posts of a mock Reddit App with Firebase, Angular. Each post can be upvoted/ downvoted, favorited and you can add comments to each post.',
      image: 'reddit-firebase-angular_opt_sm.jpg',
      icon: 'fa fa-reddit',
      github: 'https://github.com/hillaryskye/reddit-firebase-angular'
    },
    // {
    //   name: 'tuneSet',
    //   type: 'Personal Project',
    //   url: 'https://stormy-waters-7608.herokuapp.com/',
    //   desc: 'TuneSet creates Traditional Irish abc music files, which include the name of the tune, the type of which it is a jig or a reel, the key, and other info about the tune. A page generates, which the abc music notated into musical printed material. Another page shows you dynamically key choices through TheSession.org\'s API and returns a list of tunes and the user can choose a tune, which generates another page that shows all of the tunes in their collection of tunes from a database.',
    //   image: 'tuneset_opt.jpg',
    //   icon: 'fa fa-music',
    //   github: 'https://github.com/hillaryskye/tuneSet'
    // },
    {
      name: 'mixer',
      type: 'Hackathon inspired Project',
      url: 'https://fathomless-wave-8517.herokuapp.com/colors',
      desc: 'This app has 2 ways of creating a colors. Firstly, you can just enter the red, green, blue values and secondly, you can choose two colors and it mixes a new color and all colors are saved in a mongo database.',
      image: 'mixer_opt.jpg',
      icon: 'fa fa-paint-brush',
      github: 'https://github.com/hillaryskye/mixer'
    }
  ]

  ProjectList.designs = [
    {
      name: 'Logo First Design',
      type: 'Portfolio: Logo Design #1',
      codepen: 'https://codepen.io/hillaryskye/pen/zeWKWX',
      desc: 'This design was my first attempt at using text on a path using SVG with SMIL',
      image: 'portfolioLogo12_opt_sm',
      icon: 'fa fa-paint-brush',
      details: '/#/designDetails/portfolioLogo1'
    },
    {
      name: 'Logo Second Design',
      type: 'Portfolio: Logo Design #2',
      codepen: 'https://codepen.io/hillaryskye/pen/BMrxyz',
      desc: 'This design was my second attempt at using text on a path using SVG with SMIL and I added @keyframes with CSS for the affect with the name scrolling affect',
      image: 'portfolioLogo22_opt_sm',
      icon: 'fa fa-paint-brush',
      details: '/#/designDetails/portfolioLogo2'
  },
  {
    name: 'Work Wireframe #1',
    type: 'Wireframe #1 from a client',
    desc: 'Redesign of all widgets as head of the design team',
    image: 'wireframe21_opt_sm',
    icon: 'fa fa-paint-brush',
    details: '/#/designDetails/wireframe2'
},
{
  name: 'Work Wireframe #2',
  type: 'Wireframe #2 from a client',
  desc: 'Example of Axure Wireframing',
  image: 'wireframe31_opt',
  icon: 'fa fa-paint-brush',
  details: '/#/designDetails/wireframe3'
}]

  return ProjectList;
})
