import React, { Component } from 'react';
import { connect } from 'react-redux';
import addWidget from '../../actions/widget-actions';
import AddWidgets from '../views/AddWidgets';

class AddWidgetsContainer extends Component {
  componentDidMount() {
    console.log('Did mount');
  }

  render() {
    return (
      <div>
        <AddWidgets
          {...this.props}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddWidget: (widgetData) => {
    dispatch(addWidget(widgetData));
  },
});

export default connect(null, mapDispatchToProps)(AddWidgetsContainer);
