var React = window.React = require('react');
var TodoList = require('./components/TodoList');
var TodoForm = require('./components/TodoForm');

var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			items: []
		};
	},
	updateItems: function(newItem) {
		var allItems = this.state.items.concat([newItem]);
		this.setState({
			items: allItems
		});
	},
  render: function() {
    return (
    	<section className="todoBox">
    		<h2>Todos</h2>

        <TodoList items={this.state.items} />
        <TodoForm />
      </section>
    );
  }
});

React.render(
  <TodoApp />, 
  document.getElementById("app")
);
