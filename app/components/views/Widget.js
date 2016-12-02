import React, { Component, PropTypes } from 'react';

class Widget extends Component {

  constructor() {
    super();
    this.showCodeHandler = this.showCodeHandler.bind(this);
    this.generateEmbedCode = this.generateEmbedCode.bind(this);
    this.state = {
      isSelected: false,
    };
  }

  generateEmbedCode() {
    return `<iframe src="http://localhost:3000/widget?widgetId=${this.props.id}&unit=${this.props.unit}&wind=${this.props.wind}" width="500" height="500" frameborder="0" style="border:0" allowfullscreen></iframe>`;
  }

  showCodeHandler() {
    this.setState({
      isSelected: !this.state.isSelected,
    });
  }

  render() {
    const isSelected = this.state.isSelected;
    const style = {
      display: isSelected ? 'block' : 'none',
    };
    const embedLabel = isSelected ? 'Hide embed code' : 'Show embed code';
    const code = this.generateEmbedCode(this.props.id);
    return (
      <li className="weather-container__list-widgets-item">
        <span>{this.props.title}
        <a 
          className="weather-container__show-embed-code"
          onClick={() => {
            this.showCodeHandler(this.props.id);
          }}
        > [ {embedLabel} ]</a></span>
        <div className="weather-container__embed-code" style={style}>
          <span className="weather-container__embed-copy">Copy the following code onto your website...</span>
          <code>{code}</code>
        </div>
      </li>
    );
  }
}

Widget.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  wind: PropTypes.bool,
  unit: PropTypes.string,
};

export default Widget;

