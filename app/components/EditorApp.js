import React from 'react';
import AddWidgetsContainer from './containers/AddWidgetsContainer';
import ListWidgetsContainer from './containers/ListWidgetsContainer';

const EditorApp = () => (
  <div className="container">
    <h1 className="heading1__title">Widget editor</h1>
    <AddWidgetsContainer />
    <ListWidgetsContainer />
  </div>
);

export default EditorApp;
