'use strict';

describe('RouteStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/RouteStore.js');
  });

  it('should be defined', function() {
    expect(store).toBeDefined();
  });
});
