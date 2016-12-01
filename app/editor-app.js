import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import EditorApp from './components/EditorApp';

ReactDOM.render(
  <Provider store={store}>
    <EditorApp />
  </Provider>,
  document.getElementById('root'),
);
