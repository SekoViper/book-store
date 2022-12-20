import styles from './AddBook.module.css';

const AddBook = () => (

  <div className={styles.form__container}>
    <h2>Add New Book</h2>
    <form>
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Author" />
      <button type="submit">Add</button>
    </form>
  </div>
);

export default AddBook;
