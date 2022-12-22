import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as actions from '../actionTypes';

// initial state
const initialState = [];
const APIUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/NXqxKIJZ6HJNfUKJMR6J/books/';

// reducer
export default function booksReducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${actions.ADD_BOOK}/fulfilled`: return [
      ...state, action.payload,
    ];
    case `${actions.REMOVE_BOOK}/fulfilled`: return [
      ...state.filter((book) => book.item_id !== action.payload),
    ];
    case `${actions.GET_BOOKS}/fulfilled`: return [
      ...state, ...action.payload,
    ];
    default: return state;
  }
}

// action creators
export const removeBook = createAsyncThunk(actions.REMOVE_BOOK, async (id) => {
  await axios.delete(APIUrl + id);
  return id;
});

export const addBook = createAsyncThunk(actions.ADD_BOOK, async (data) => {
  const res = await axios.post(APIUrl, data);
  if (res.data === 'Created') {
    return data;
  }
  return null;
});

export const getBooks = createAsyncThunk(actions.GET_BOOKS, async () => {
  const res = await axios
    .get(APIUrl)
    .then((data) => {
      const books = Object.entries(data.data).map(([id, obj]) => ({
        item_id: id,
        ...obj[0],
      }));
      return books;
    })
    .catch((err) => {
      console.log('Error', err);
    });
  return res;
});
