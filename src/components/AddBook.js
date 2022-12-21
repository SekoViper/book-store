import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddBook.module.css';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const newBook = {
    id: uuidv4(),
    title: '',
    author: '',
    category: 'Science',
  };

  const [details, setDetails] = useState(newBook);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(details));
    setDetails(newBook);
  };

  const handleChange = (e) => {
    const input = e.target.name;
    if (input === 'title') {
      setDetails({ ...details, title: e.target.value });
    } else {
      setDetails({ ...details, author: e.target.value });
    }
  };

  return (
    <div className={styles.form__container}>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={details.title} name="title" placeholder="Book Title" onChange={handleChange} />
        <input type="text" value={details.author} name="author" placeholder="Author" onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddBook;
