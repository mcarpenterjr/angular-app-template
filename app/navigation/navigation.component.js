'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('navigation').
  component('navigation', {
    templateUrl: 'navigation/navigation.template.html',
    controller: ['$routeParams', 'navigation',
      function NavigationController($routeParams, Navigation) {
        var self = this;
        self.nav = Navigation.get({
          // Start Here!
          phoneId: $routeParams.phoneId}, function(phone) {
          self.setImage(phone.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
