import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import styles from './BookList.module.css';

// generate a book
const BooksList = ({ books }) => {
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className={styles.books}>
      {books.map((book) => (
        <div className={styles.book__container} key={book.id}>
          <div className="book__details">
            <p className="book__category">Book Category</p>
            <p className="book__title">{book.title}</p>
            <p className="book__author">{book.author}</p>
            <p className={styles.book__response}>
              <span><button type="button">Comment</button></span>
              <span><button type="button" onClick={() => onDelete(book.id)}>Remove</button></span>
              <span><button type="button">Edit</button></span>
            </p>
          </div>

          <div className="book__level">
            <p>Level</p>
          </div>

          <div className="book__chapter">
            <p>Current Chapter</p>
            <p>Chapter 15</p>
            <button type="button">Update Progress</button>
          </div>
        </div>
      ))}
    </div>
  );
};

// props validation
BooksList.defaultProps = { books: null };
BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  })),
};

export default BooksList;
