'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.css');

var imageURL = require('../images/yeoman.png');

var ReactTodosApp = React.createClass({
	render: function() {
		return (
			<main role="main" className="container">
				<div className="row">
					<div className="col-md-8">
						<h1>Todo List</h1>
					</div>
					<div className="col-md-4">
						<button type="button" className="btn btn-primary pull-right spacing-top">
							New Task
						</button>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6">
						<h2 className="spacing-bottom">Incomplete</h2>
					</div>
					<div className="col-md-6">
						<h2 className="spacing-bottom">Complete</h2>
					</div>
				</div>
			</main>
		);
	}
});

React.render(<ReactTodosApp />, document.getElementById('content')); // jshint ignore:line

module.exports = ReactTodosApp;
