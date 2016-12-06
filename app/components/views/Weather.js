import React, { Component, PropTypes } from 'react';
import WeatherInfo from './WeatherInfo';

class Weather extends Component {

  static getGeolocationData() {
    return new Promise((resolve, reject) => {
      try {
        navigator.geolocation.getCurrentPosition((position) => {
          resolve({
            lat: position.coords.latitude,
            long: position.coords.longitude,
          });
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  constructor(props) {
    super(props);
    const urlParams = new window.URLSearchParams(window.location.search);
    // Get the widgetId from the querystring OR just use the first widget (inital state).
    const currentWidget = props.widgets.filter(widget => widget.id === (urlParams.getAll('widgetId')[0] || props.widgets[0].id));

    if (currentWidget.length === 0) {
      throw new Error('Oops, the widget doesn\'t exist. Try making one first by visiting the Editor: http://localhost:3000/editor');
    }

    this.state = {
      currentWidgetData: {
        widgetId: currentWidget[0].id,
        unit: currentWidget[0].unit,
        wind: currentWidget[0].wind,
      },
      weatherData: null,
    };

    this.getWeatherData = this.getWeatherData.bind(this);
  }

  componentDidMount() {
    this.constructor.getGeolocationData()
      .then(geoData => this.getWeatherData(geoData))
      .then(weatherData => weatherData.json())
      .then(weatherData => this.setState({ weatherData }))
      .catch((error) => {
        throw new Error(error);
      });
  }

  getWeatherData(geoData) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${geoData.lat}&lon=${geoData.long}&appid=${this.props.appId}&units=${this.state.currentWidgetData.unit}`);
  }

  render() {
    if (this.state.weatherData !== null) {
      return (
        <WeatherInfo
          widgetData={this.state.currentWidgetData}
          weatherData={this.state.weatherData}
        />);
    }
    return <div>Loading...</div>;
  }
}

Weather.defaultProps = {
  appId: '0b9bb6e55d1444e0519a94bc17c80f33',
};

Weather.propTypes = {
  widgets: PropTypes.arrayOf(React.PropTypes.shape({
    id: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
    wind: PropTypes.bool.isRequired,
  })).isRequired,
};

export default Weather;
