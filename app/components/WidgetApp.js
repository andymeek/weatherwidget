import React from 'react';
import ListWidgetsContainer from './containers/ListWidgetsContainer';

const WidgetApp = () => (
  <div className="weather-container weather-container--widget">
    <h1 className="weather-container__title weather-container__title--h1">{"Today's weather..."}</h1>
    <ListWidgetsContainer displayWeather={true} />
  </div>
);

export default WidgetApp;
