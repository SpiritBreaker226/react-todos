'use strict';

var React = require('react');

var TodoListItem = React.createClass({
	render: function() {
		var checked = (this.props.done === false) ? '' : 'checked';
		return (
			<li>
				<input type="checkbox" ref="done" checked={checked} />
				{this.props.children}
			</li>
		);
	}
});

module.exports = TodoListItem;
