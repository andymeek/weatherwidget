import React, { PropTypes } from 'react';

const WeatherInfo = (props) => {
  const { weatherData, widgets } = props;
  return (
    <ul>
      <li>Place name: {weatherData.name}</li>
    </ul>
  );
};

WeatherInfo.propTypes = {
  weatherData: PropTypes.object,
};

export default WeatherInfo;
