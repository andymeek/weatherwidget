import React, { PropTypes } from 'react';
import Widget from './Widget';

const ListWidgets = ({ widgets }) => (
  <div className="weather-container__list-widgets">
    <h2 className="weather-container__title weather-container__title--h2">Your Widgets...</h2>
    <ul>
      {widgets.map((widget) => {
        const id = widget.id;
        return (
          <Widget
            {...widget}
            key={id}
          />
        );
      })}
    </ul>
  </div>
);

ListWidgets.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
    wind: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
};

export default ListWidgets;
