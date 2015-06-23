'use strict';

var React = require('react');

var TodoForm = React.createClass({
	render: function() {
		return (
			<form className='todoForm'>
				<input type='text' ref='item' />
				<input type='submit' value='Add' />
			</form>
		);
	}
});

module.exports = TodoForm;
