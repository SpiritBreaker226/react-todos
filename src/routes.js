'use strict';

var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = 			require('./components/App.react.jsx');
var TodosPage = require('./components/todos/TodosPage.react.jsx');
var TodoPage = 	require('./components/todos/TodoPage.react.jsx');
var TodosNew = 	require('./components/todos/TodosNew.react.jsx');

module.exports = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={TodosPage} />
    <Route name="todos" path="/todos" handler={TodosPage}/>
    <Route name="Todo" path="/todos/:todoid" handler={TodoPage} />
    <Route name="new-todo" path="/todo/new" handler={TodoNew}/>
  </Route>
);
