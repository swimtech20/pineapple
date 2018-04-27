(function() {
  'use strict';

  angular.module('deviceFactory', [])
    .factory('deviceFactory', deviceFactory);

  deviceFactory.$inject = ['$http'];

  function deviceFactory($http) {
    return {
      get: get,
      set: set
    };

    ////////////////////////

    function get() {
      // Get Something
    }

    function set() {
      // Set Something
    }
  };
})();
