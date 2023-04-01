import { useState } from 'react';
import Book from '../class/book';

const HookBook = () => {
  const [books, setBooks] = useState([]);

  const addBook = (title, author) => {
    const newBook = new Book(title, author);
    setBooks((prev) => [...prev, newBook]);
  };

  const removeBook = (index) => {
    const temp = books.filter((_, i) => i !== index);
    setBooks(temp);
  };

  return {
    books, addBook, removeBook,
  };
};

export default HookBook;
