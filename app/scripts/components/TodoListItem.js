'use strict';

var React = require('react');

var TodoListItem = React.createClass({
	_onChange: function(e) {
		this.props.onTodoItemUpdate({
			// TODO Set Changes
		});
	},
	render: function() {
		var checked = (this.props.done === false) ? '' : 'checked';
		return (
			<li>
				<input 
				type="checkbox" 
				ref="done" 
				checked={checked} 
				onChange={this._onChange} />
				{this.props.children}
			</li>
		);
	}
});

module.exports = TodoListItem;
