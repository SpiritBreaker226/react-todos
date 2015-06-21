'use strict';

var ReactTodosAppDispatcher = require('../dispatcher/ReactTodosAppDispatcher.js');
var ReactTodosConstants = require('../ReactTodosConstants.js');

var ActionTypes = ReactTodosConstants.ActionTypes;

var RouteActionCreators = {
	redirect: function(route) {
    ReactTodosAppDispatcher.handleViewAction({
      type: ActionTypes.REDIRECT,
      route: route
    });
  }
};

module.exports = RouteActionCreators; 
