import * as types from '../actions/action-types';
import { v4 } from 'node-uuid';

const uuid = v4(); // generate unique ID from library
const initialState = {
  widgets: [
    {
      id: uuid,
      title: 'Imperial with Wind Data',
      unit: 'imperial',
      wind: true,
    },
  ],
};

const widgetsReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.ADD_WIDGETS:
    return {
      widgets: [
        ...state.widgets,
        action.widgets,
      ],
    };
  default:
    return state;
  }
};

export default widgetsReducer;
