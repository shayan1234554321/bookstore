import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, getAllBooks, removeBook } from '../redux/books/booksSlice';

export default function Books() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const { books, loading, loadingName } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, author, category: 'Action' }));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="container books">
      { Object.keys(books).length === 0 && <h2>No Books Added</h2> }
      <ul>
        {books && Object.keys(books).map((key) => (
          <li key={books[key]}>
            <h4>
              Author:
              { books[key][0].author }
            </h4>
            <h2>{ books[key][0].title }</h2>
            <div className="buttons">
              <button type="button" onClick={() => dispatch(removeBook(key))}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <form onSubmit={handleForm}>
        <h2>ADD NEW BOOK</h2>
        <div>
          <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Book Title" />
          <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="Book Author" />
          <button type="submit" disabled={loading}>{loading ? loadingName : 'ADD BOOK'}</button>
        </div>
      </form>
    </div>
  );
}
