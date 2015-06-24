'use strict';

var React = require('react');

var TodoListItem = React.createClass({
	_onChange: function(e) {
		var oppositeOfThisItemsDone = !this.props.done;

		this.props.onTodoItemUpdate({
			key: this.props.reactKey,
			done: oppositeOfThisItemsDone
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
