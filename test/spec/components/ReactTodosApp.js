'use strict';

describe('ReactTodosApp', function () {
  var React = require('react/addons');
  var ReactTodosApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactTodosApp = require('components/ReactTodosApp.js');
    component = React.createElement(ReactTodosApp);
  });

  it('should create a new instance of ReactTodosApp', function () {
    expect(component).toBeDefined();
  });
});
