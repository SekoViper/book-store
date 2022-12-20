import * as actions from '../actionTypes';

// initial state
const initialState = [];

// reducer
export default function booksReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.REMOVE_BOOK: return [
      ...state.filter((book) => book.id === action.payload.id),
    ];
    case actions.ADD_BOOK: return [
      ...state.push(action.payload),
    ];
    default: return state;
  }
}

// action creators
export function removeBook() {
  return {
    type: actions.REMOVE_BOOK,
    payload: {
      id: 1,
    },
  };
}

export function addBook() {
  return {
    type: actions.ADD_BOOK,
    payload: {
      id: 1,
      title: '',
      author: '',
    },
  };
}
