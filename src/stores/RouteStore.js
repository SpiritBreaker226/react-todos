'use strict';

var Router = require('react-router');
var assign = require('object-assign');

var EventEmitter = require('events').EventEmitter;

var routes = require('../routes.jsx');

var ReactTodosDispatcher = require('../dispatcher/ReactTodosDispatcher.js');
var Constants = require('../Constants.js');

var TodoStore = require('../stores/TodoStore.react.jsx');

var router = Router.create({
  routes: routes,
  location: null
});

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var RouteStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getRouter: function() {
    return router;
  },
  redirectHome: function() {
    router.transitionTo('app');
  }
});

RouteStore.dispatchToken = ReactTodosDispatcher.register(function(payload) {
  ReactTodosDispatcher.waitFor([
    TodoStore.dispatchToken
  ]);

  var action = payload.action;
  
  switch(action.type) {
    case ActionTypes.REDIRECT:
      router.transitionTo(action.route);
    break;
    case ActionTypes.RECEIVE_CREATED_TODO:
      router.transitionTo('app');
    break;
  }
  
  return true;
});

module.exports = RouteStore;
