import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { addBook, getAllBooks, removeBook } from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';

export default function Books() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const percentage = 72;
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
            <div className="right">
              <div className="progressContiner">
                <div className="circularProgressContainer">
                  <CircularProgressbar
                    strokeWidth={6}
                    value={percentage}
                    styles={buildStyles({ pathColor: 'rgb(55, 142, 255)' })}
                  />
                  ;
                </div>
                <div>
                  <h1>
                    {percentage}
                    %
                  </h1>
                  <h4>Completed</h4>
                </div>
              </div>
              <div className="chapterContainer">
                <h4>CURRENT CHAPTER</h4>
                <h3>Chapter 17</h3>
                <button className="simpleButton" type="button">UPDATE PROGRESS</button>
              </div>
            </div>
            <h4>
              { books[key][0].category }
            </h4>
            <h2>{ books[key][0].title }</h2>
            <h4>
              { books[key][0].author }
            </h4>
            <div className="buttons">
              <button type="button">Comment</button>
              <button type="button" onClick={() => dispatch(removeBook(key))}>Remove</button>
              <button type="button">Edit</button>
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
