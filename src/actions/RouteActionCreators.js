'use strict';

var ReactTodosAppDispatcher = require('../dispatcher/ReactTodosAppDispatcher.js');
var ReactTodosAppConstants = require('../ReactTodosAppConstants.js');

var ActionTypes = ReactTodosAppConstants.ActionTypes;

var RouteActionCreators = {
	redirect: function(route) {
    ReactTodosAppDispatcher.handleViewAction({
      type: ActionTypes.REDIRECT,
      route: route
    });
  }
};

module.exports = RouteActionCreators; 
