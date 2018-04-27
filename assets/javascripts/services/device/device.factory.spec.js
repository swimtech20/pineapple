describe('Factory: undefinedFactory', function() {
  'use strict';

  module.sharedInjector();

  var subject = {
    module: 'mobi.undefinedFactory',
    factory: 'undefinedFactory'
  };

  var reference;

  beforeAll(function() { // jshint ignore:line
    // The module we're testing
    module(subject.module);

    ////////////////////////

    inject(function($injector) {
      reference = $injector.get(subject.factory);
    });
  });

  // ================================
  // Specs
  // ================================
  describe('', function() {
    it('', function() {

    });
  });
});