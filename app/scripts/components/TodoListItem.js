'use strict';

var React = require('react');

var TodoListItem = React.createClass({
	render: function() {
		return (
			<div className="todoItem">
				Hello World, todoItem
			</div>
		);
	}
});

module.exports = TodoListItem;
