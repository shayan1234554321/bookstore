import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiUser } from 'react-icons/hi';
import colors from '../theme';

export default function Navbar() {
  const [books, setBooks] = useState(true);
  const [categories, setCategories] = useState(false);

  const handleNavbar = (name) => {
    if (name === 'book') {
      setBooks(true);
      setCategories(false);
    } else {
      setBooks(false);
      setCategories(true);
    }
  };

  return (
    <nav>
      <div className="left">
        <h1>Bookstore CMS</h1>
        <ul>
          <li>
            <Link onClick={() => handleNavbar('book')} className={books && 'selected'} to="/">
              BOOKS
            </Link>
          </li>
          <li>
            <Link onClick={() => handleNavbar('categories')} className={categories && 'selected'} to="/categories">
              CATEGORIES
            </Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <div className="user">
          <HiUser color={colors.blue} size={23} />
        </div>
      </div>
    </nav>
  );
}
