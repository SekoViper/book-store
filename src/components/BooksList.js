import { PropTypes } from 'prop-types';
import styles from './BookList.module.css';

const BooksList = ({ title, author }) => (
  <div className={styles.books}>
    <div className={styles.book__container}>
      <div className="book__details">
        <p className="book__category">Book Category</p>
        <p className="book__title">{title}</p>
        <p className="book__author">{author}</p>
        <p className={styles.book__response}>
          <span>Comment</span>
          <span>Remove</span>
          <span>Edit</span>
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
  </div>
);

BooksList.defaultProps = { title: null, author: null };
BooksList.propTypes = { title: PropTypes.string, author: PropTypes.string };

export default BooksList;
