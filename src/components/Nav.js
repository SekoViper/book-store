import React from 'react';
import { Link } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';
import './Nav.css';

const Nav = () => (
  <div className="">
    <div className="main__heading__section">
      <div className="box__headings">
        <Link className="logo" to="/">BookStore</Link>
        <ul className="menu">
          <li className="link-items"><Link to="/">Books</Link></li>
          <li className="link-items"><Link to="/categories">Categories</Link></li>
        </ul>
      </div>
      <div className="account">
        <h2><VscAccount /></h2>
      </div>
    </div>
  </div>
);

export default Nav;
