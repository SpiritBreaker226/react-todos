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
	addToItems: function(newItem) {
		var allItems = this.state.items.concat([newItem]);
	
		this.setState({
			items: allItems
		});
	},
	_updateItem: function(updatedItem) {
		var allItems = this.state.items.map(function(item, index) {
			if(updatedItem.key === index) {
				item.done = updatedItem.done;
			}

			return item;
		});

		this.setState({
			items: allItems
		});
	},
  render: function() {
    return (
    	<section className="todoBox">
    		<h2>Todos</h2>

        <TodoList 
        	items={this.state.items} 
        	onTodoItemUpdate={this._updateItem} />
        <TodoForm onTodoSubmit={this.addToItems} />
      </section>
    );
  }
});

React.render(
  <TodoApp />, 
  document.getElementById("app")
);
