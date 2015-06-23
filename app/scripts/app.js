var React = window.React = require('react');
var TodoList = require('./components/TodoList');
var TodoForm = require('./components/TodoForm');

var TodoApp = React.createClass({
  render: function() {
    return (
    	<div className="todoBox">
        <TodoList />
        <TodoForm />
      </div>
    );
  }
});

React.render(
  <TodoApp />, 
  document.getElementById("app")
);
