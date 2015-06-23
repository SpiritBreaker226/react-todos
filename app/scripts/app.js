var React = window.React = require('react');
var TodoList = require('./components/TodoList');
var TodoForm = require('./components/TodoForm');

var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			items: ['Testing']
		};
	},
  render: function() {
    return (
    	<section className="todoBox">
    		<h2>Todos</h2>

        <TodoList />
        <TodoForm />
      </section>
    );
  }
});

React.render(
  <TodoApp />, 
  document.getElementById("app")
);
