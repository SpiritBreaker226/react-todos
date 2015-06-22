'use strict';

var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var ReactTodosAppConstants = require('../ReactTodosAppConstants.js');

var PayloadSources = ReactTodosAppConstants.PayloadSources;

var Dispatcher = assign(new Dispatcher(), {
	handleViewAction: function(action) {
    var payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }
});

module.exports = Dispatcher;
