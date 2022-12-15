import React from 'react';
import { Link } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';
import styles from './Nav.module.css';

const Nav = () => (
  <div className={styles.navbar}>
    <div className={styles.navbar__itemContainer}>
      <div className={styles.navbar__item}>
        <div className={styles.logo}>
          <Link to="/">BookStore</Link>
        </div>
        <ul className={styles.menu}>
          <li><Link to="/">Books</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
      </div>
      <div className={styles.account}>
        <h2><VscAccount /></h2>
      </div>
    </div>
  </div>
);

export default Nav;
