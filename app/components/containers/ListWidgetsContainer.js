import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Weather from '../views/Weather';
import ListWidgets from '../views/ListWidgets';

const ListWidgetsContainer = props => (
  <div>
    {(props.displayWeather !== undefined && props.displayWeather === true)
      ? <Weather
        {...props}
      />
      : null
    }
    <ListWidgets
      {...props}
    />
  </div>
);

const mapStateToProps = store => ({
  widgets: store.widgetsState.widgets,
});

ListWidgetsContainer.propTypes = {
  displayWeather: PropTypes.bool,
};

export default connect(mapStateToProps)(ListWidgetsContainer);
