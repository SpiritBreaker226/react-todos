'use strict';

var React = require('react');
var TodoListItem = require('../components/TodoListItem');

var TodoList = React.createClass({
	render: function() {
		return (
			<div className="todoList">
				 <TodoListItem />
      </div>
		);
	}
});

module.exports = TodoList;
