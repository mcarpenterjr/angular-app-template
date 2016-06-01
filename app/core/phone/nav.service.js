'use strict';

angular.
  module('core.phone').
  factory('Nav', ['$resource',
    function($resource) {
      return $resource('resumes/something.json', {}, {
        query: {
          method: 'GET',
          params: {resumeId: 'resume'},
          isArray: true
        }
      });
    }
  ]);
