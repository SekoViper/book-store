import { React } from 'react';
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import BooksList from './BooksList';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <>
      <BooksList books={books} />
      <AddBook />
    </>
  );
};

export default Books;
