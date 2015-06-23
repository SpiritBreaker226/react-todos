var React = window.React = require('react');
var TodoList = require('./components/TodoList');

var TodoApp = React.createClass({
  render: function() {
    return (
    	<div className="todoBox">
        <TodoList />
      </div>
    );
  }
});

React.render(
  <TodoApp />, 
  document.getElementById("app")
);
