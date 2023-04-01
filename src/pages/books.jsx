import React, { useState } from 'react';
import HookBook from '../hooks/book';

export default function Books() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const { books, addBook, removeBook } = HookBook();

  const handleForm = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="container books">
      { (books.length === 0) && <h2>No Books Added</h2> }
      <ul>
        {books.map((element, index) => (
          <li key={`book-$${element.title}`}>
            <h4>
              Author:
              { element.author }
            </h4>
            <h2>{ element.title }</h2>
            <div className="buttons">
              <button type="button" onClick={() => removeBook(index)}>Remove</button>
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
