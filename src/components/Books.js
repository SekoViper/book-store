import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookssss } from '../redux/books/books';
import AddBook from './AddBook';
import BooksList from './BooksList';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookssss());
  }, [dispatch]);

  return (
    <>
      <BooksList books={books} />
      <AddBook />
    </>
  );
};

export default Books;
