'use strict';

var React = require('react');
var TodoListItem = require('../components/TodoListItem');

var TodoList = React.createClass({
	render: function() {
		return (
			<div className="todoList">
				 <ul>
				 {
				 		this.props.items.map(function(item) {
				 			return (
				 				<TodoListItem>{item}</TodoListItem>
				 			);
				 		})
				 }
				 </ul>
      </div>
		);
	}
});

module.exports = TodoList;
