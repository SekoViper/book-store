import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './BookList.css';
// generate a book
const BooksList = ({ books }) => {
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="bar__cards">
      {books.length > 0 ? books.map((book) => (
        <div className="bar__container" key={book.item_id}>
          <div className="left__content">
            <p className="book-category">Fiction</p>
            <p className="book--title">{book.title}</p>
            <p className="book-author">{book.author}</p>
            <button className="btn__primary btn__none2" type="button">Comment</button>
            <button className="btn__primary" type="button" onClick={() => onDelete(book.item_id)}>Remove</button>
            <button className="btn__primary btn__none" type="button">Edit</button>
          </div>

          <div className="main__bar__right__content">
            <div className="main__bar">
              <div className="bar">
                <div className="bar__in" />
                <div className="bar__in2" />
              </div>
              <div>
                <p className="percent">64%</p>
                <p className="score">Completed</p>
              </div>
            </div>
            <div className="right__content">
              <p className="current-chapter">CURRENT CHAPTER</p>
              <h3 className="right__content__heading current-chapter">Chapter 17</h3>
              <button type="button" className="btn__secondary current-chapter">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
      )) : 'No Books Found'}
    </div>
  );
};

// props validation
BooksList.defaultProps = { books: null };
BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    item_id: PropTypes.string,
    category: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
  })),
};

export default BooksList;
