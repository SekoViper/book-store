import React from 'react';
import AddBook from './AddBook';
import BooksList from './BooksList';

const Books = () => (
  <>
    <BooksList title="Name the Tree" author="Seko" />
    <BooksList title="How We became Men" author="SekoViper" />
    <AddBook title="Add New Book" />
  </>
);

export default Books;
