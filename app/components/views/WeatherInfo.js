import React from 'react';

const displayCelsiusOrFahrenheit = (value) => {
  const isMetric = value === 'metric';
  return isMetric ? '°C' : '°F';
};

const WeatherInfo = (props) => {
  const { weatherData, widgetData } = props;
  const iconCelsiusOrFahrenheit = displayCelsiusOrFahrenheit(widgetData.unit);
  const imageSrc = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  return (
    <div className="">
      <h2 className="weather-container__title weather-container__title--h2">{weatherData.name}</h2>
      <img className="weather-container__icon" src={imageSrc} alt="Weather icon" /><p><strong>{weatherData.main.temp}{iconCelsiusOrFahrenheit}</strong> | temperature from: {weatherData.main.temp_min}{iconCelsiusOrFahrenheit}, to: {weatherData.main.temp_max}{iconCelsiusOrFahrenheit}</p>
      {
        widgetData.wind ? <div><hr className="weather-container__hr" /><p>Wind {weatherData.wind.speed} m/s</p></div> : null
      }
    </div>
  );
};

export default WeatherInfo;
