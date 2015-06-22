'use strict';

var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var ReactTodosApp = require('./components/ReactTodosApp.js');
var Todos = require('./components/todos/Todos.js');

module.exports = (
  <Route name="app" path="/" handler={ReactTodosApp}>
		<DefaultRoute handler={Todos} />
		<Route name="Todos" path="/todos" handler={Todos}/>
  </Route>
);
