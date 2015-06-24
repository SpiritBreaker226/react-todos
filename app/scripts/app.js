'use strict';

var React = window.React = require('react');
var TodoList = require('./components/TodoList');
var TodoForm = require('./components/TodoForm');

var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			items: [
				{
					id: 1,
					text: 'The Frist',
					done: false
				},
				{
					id: 2,
					text: 'Secand',
					done: false
				}, 
				{
					id: 3,
					text: 'The End',
					done: true
				}
			]
		};
	},
	addToItems: function(newItem) {
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
        <TodoForm onTodoSubmit={this.addToItems} />
      </section>
    );
  }
});

React.render(
  <TodoApp />, 
  document.getElementById("app")
);
