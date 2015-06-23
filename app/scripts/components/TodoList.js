'use strict';

var React = require('react');
var TodoItem = require('../components/TodoItem');

var TodoList = React.createClass({
	render: function() {
		return (
			<div className="todoList">
        <TodoItem />
      </div>
		);
	}
});

module.exports = TodoList;
