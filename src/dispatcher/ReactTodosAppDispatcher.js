var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var Constants = require('../constants.js');

var PayloadSources = Constants.PayloadSources;

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
