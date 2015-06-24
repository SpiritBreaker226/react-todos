'use strict';

var React = require('react');
var TodoListItem = require('../components/TodoListItem');

var TodoList = React.createClass({
	render: function() {
		var todoListNode = this.props.items.map(function(item) {
 			return (
 				<TodoListItem done={item.done} key={item.id}>
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
