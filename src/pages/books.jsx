import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';

export default function Books() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, author, category: 'Action' }));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="container books">
      { (books.length === 0) && <h2>No Books Added</h2> }
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            <h4>
              Author:
              { book.author }
            </h4>
            <h2>{ book.title }</h2>
            <div className="buttons">
              <button type="button" onClick={() => dispatch(removeBook(book.item_id))}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <form onSubmit={handleForm}>
        <h2>ADD NEW BOOK</h2>
        <div>
          <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Book Title" />
          <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="Book Author" />
          <button type="submit">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
}
