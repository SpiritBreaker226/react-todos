'use strict';

var React = require('react');

var TodoForm = React.createClass({
	_onSubmit: Function(e) {
		e.preventDefault();

		var text = React.findDOMNode(this.refs.text).value.trim();

		if(!text) {
			return;
		}

		this.props.onTodoSubmit(text);

		React.findDOMNode(this.refs.text).value = '';

		return;
	},
	render: function() {
		return (
			<form className='todoForm' onSubmit={this._onSubmit}>
				<input type='text' ref='text' />
				<input type='submit' value='Add' />
			</form>
		);
	}
});

module.exports = TodoForm;
