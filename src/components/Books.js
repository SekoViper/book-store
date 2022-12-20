import { React, useState } from 'react';
import AddBook from './AddBook';
import BooksList from './BooksList';

const Books = () => {
  const [books] = useState([
    { id: 1, title: 'Name the Tree', author: 'Seko' },
    { id: 2, title: 'How We became Menhhhhhh', author: 'SekoViper' },
    { id: 3, title: 'In the Wonders', author: 'Yonas' },
  ]);

  return (
    <>
      <BooksList books={books} />
      <AddBook />
    </>
  );
};

export default Books;
