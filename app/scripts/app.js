'use strict';

var React = window.React = require('react');
var TodoList = require('./components/TodoList');
var TodoForm = require('./components/TodoForm');

var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			items: [
				{
					text: 'The Frist',
					done: false
				},
				{
					text: 'Secand',
					done: false
				}, 
				{
					text: 'The End',
					done: true
				}
			]
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
        <TodoForm onTodoSubmit={this.updateItems} />
      </section>
    );
  }
});

React.render(
  <TodoApp />, 
  document.getElementById("app")
);
