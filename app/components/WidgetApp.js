import React from 'react';
import ListWidgetsContainer from './containers/ListWidgetsContainer';

const WidgetApp = () => (
  <div className="container">
    <h1 className="heading1__title">Widgets</h1>
    <ListWidgetsContainer displayWeather={true} />
  </div>
);

export default WidgetApp;
