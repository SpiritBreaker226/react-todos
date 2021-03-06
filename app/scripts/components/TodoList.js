'use strict';

var React = require('react');
var TodoListItem = require('../components/TodoListItem');

var TodoList = React.createClass({
	render: function() {
		var self = this;
		var todoListNode = this.props.items.map(function(item, index) {
 			return (
 				<TodoListItem 
 					done={item.done} 
 					key={index} 
 					reactKey={index} 
 					onTodoItemUpdate={self.props.onTodoItemUpdate}
 				>
 					{item.text}
 				</TodoListItem>
 			);
 		});
		return (
			<div className="todoList">
				<ul>{todoListNode}</ul>
      </div>
		);
	}
});

module.exports = TodoList;
