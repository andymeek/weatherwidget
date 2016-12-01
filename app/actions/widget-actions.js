import * as types from '../actions/action-types';

const addWidget = widgets => ({
  type: types.ADD_WIDGETS,
  widgets,
});

export default addWidget;
