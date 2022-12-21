import * as actions from '../actionTypes';

// initial state
const initialState = [];

// reducer
export default function categoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.CHECK_STATUS: {
      return 'Under Construction';
    }
    default:
      return state;
  }
}

// action creator
export function checkStatus(status) {
  return {
    type: actions.CHECK_STATUS,
    payload: {
      status,
    },
  };
}
