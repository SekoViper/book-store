import { React, useState } from 'react';
import AddBook from './AddBook';
import BooksList from './BooksList';

const Books = () => {
  const [books, useBooks] = useState([
    { id: 1, title: 'Name the Tree', author: 'Seko' },
    { id: 2, title: 'How We became Men', author: 'SekoViper' },
    { id: 3, title: 'In the Wonder', author: 'Yonas' },
  ]);

  return (
    <>
      <BooksList books={books} />
      <AddBook />
    </>
  );
};

export default Books;
