import React from 'react';
import AddWidgetsContainer from './containers/AddWidgetsContainer';
import ListWidgetsContainer from './containers/ListWidgetsContainer';

const EditorApp = () => (
  <div className="weather-container">
    <h1 className="weather-container__title weather-container__title--h1">Widget editor</h1>
    <AddWidgetsContainer />
    <ListWidgetsContainer />
  </div>
);

export default EditorApp;
