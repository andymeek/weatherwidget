import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import WidgetApp from './components/WidgetApp';

ReactDOM.render(
  <Provider store={store}>
    <WidgetApp />
  </Provider>,
  document.getElementById('root'),
);
