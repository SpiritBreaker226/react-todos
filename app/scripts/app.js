var React = window.React = require('react');

var TodoApp = React.createClass({
  render: function() {
    return (
    	<div className="todoBox">
        Hello, world! I am a TodoBox.
      </div>
    );
  }
});

React.render(
  <TodoApp />, 
  document.getElementById("app")
);
