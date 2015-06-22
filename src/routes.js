'use strict';

var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var ReactTodosApp = require('./components/ReactTodosApp.js');

module.exports = (
  <Route name="app" path="/" handler={ReactTodosApp}>
  </Route>
);
