import { v4 as uuidv4 } from 'uuid';
import * as actions from '../actionTypes';

// initial state
const initialState = [
  { id: uuidv4(), title: 'Whoa re you', author: 'Seko' },
  { id: uuidv4(), title: 'Whoa re you', author: 'Seko' },
  { id: uuidv4(), title: 'ghhhhhhhhhhhhghghgh', author: 'yuou' },
];

// reducer
export default function booksReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.ADD_BOOK: return [
      ...state, action.payload.book,
    ];
    case actions.REMOVE_BOOK: return [
      ...state.filter((book) => book.id !== action.payload.id),
    ];
    default: return state;
  }
}

// action creators
export function removeBook(id) {
  return {
    type: actions.REMOVE_BOOK,
    payload: {
      id,
    },
  };
}

export function addBook(book) {
  return {
    type: actions.ADD_BOOK,
    payload: {
      book,
    },
  };
}
