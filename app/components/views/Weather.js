import React, { Component, PropTypes } from 'react';
import WeatherInfo from './WeatherInfo';

class Weather extends Component {

  static propTypes: {
    widgets: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
    };
  }

  componentDidMount() {
    const unit = this.props.widgets[0].unit;
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        const cords = {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        };
        (async () => {
          try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${cords.lat}&lon=${cords.long}&appid=0b9bb6e55d1444e0519a94bc17c80f33&units=${unit}`);
            const weatherData = await response.json();
            this.setState({ weatherData });
          } catch (error) {
            console.log(error);
          }
        })();
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (this.state.weatherData !== null) {
      return <WeatherInfo widgets={this.props.widgets} weatherData={this.state.weatherData} />;
    }
    return <div>Loading...</div>;
  }
}

export default Weather;
