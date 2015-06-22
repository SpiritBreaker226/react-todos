var keyMirror = require('keymirror');

module.exports = {
  PayloadSources: keyMirror({
    VIEW_ACTION: null
  }),

  ActionTypes: keyMirror({
    // Routes
    REDIRECT: null,

    LOAD_TODOS: null,
    RECEIVE_TODOS: null,
    LOAD_TODO: null,
    RECEIVE_TODO: null,
    CREATE_TODO: null,
    RECEIVE_CREATED_TODO: null
  })
};
