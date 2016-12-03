import React, { Component, PropTypes } from 'react';
import WeatherInfo from './WeatherInfo';

class Weather extends Component {

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
  }

  componentDidMount() {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        const cords = {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        };
        (async () => {
          try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${cords.lat}&lon=${cords.long}&appid=0b9bb6e55d1444e0519a94bc17c80f33&units=${this.state.currentWidgetData.unit}`);
            const weatherData = await response.json();
            this.setState({ weatherData });
          } catch (error) {
            throw new Error('Error fetching the data from Open Weather Map API');
          }
        })();
      });
    } catch (error) {
      throw new Error('Error getting your geolocation, please allow.');
    }
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

Weather.propTypes = {
  widgets: PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    unit: React.PropTypes.string.isRequired,
    wind: React.PropTypes.bool.isRequired,
  })).isRequired,
};

export default Weather;
