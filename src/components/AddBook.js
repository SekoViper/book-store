import { PropTypes } from 'prop-types';
import styles from './AddBook.module.css';

const AddBook = ({ title }) => (
  <div className={styles.form__container}>
    <h2>{title}</h2>
    <form>
      <input type="text" placeholder="Book Title" />
      <select>
        <option>Category</option>
        <option>Fiction</option>
        <option>Science</option>
      </select>
      <button type="submit">Add</button>
    </form>
  </div>
);

AddBook.defaultProps = { title: null };
AddBook.propTypes = { title: PropTypes.string };

export default AddBook;
