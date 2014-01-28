//basic iron-router
Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  this.route('home', {
    path: '/',
  });

  this.route('peopleList', {
    path: '/people',
  });

  this.route('productList', {
    path: '/products',
  });
});
