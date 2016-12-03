import React from 'react';
import { connect } from 'react-redux';
import addWidget from '../../actions/widget-actions';
import AddWidgets from '../views/AddWidgets';

const AddWidgetsContainer = props => (
  <div>
    <AddWidgets
      {...props}
    />
  </div>
);

const mapDispatchToProps = dispatch => ({
  onAddWidget: (widgetData) => {
    dispatch(addWidget(widgetData));
  },
});

export default connect(null, mapDispatchToProps)(AddWidgetsContainer);
