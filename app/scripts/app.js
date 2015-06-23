var React = window.React = require('react');

var TodoApp = React.createClass({
  render: function() {
    return (
      <div />
    );
  }
});

React.render(
  <TodoApp />, 
  document.getElementById("app")
);
