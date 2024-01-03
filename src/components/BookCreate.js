import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookCreate() {
  const { createBook } = useBooksContext();
  const [bookTitle, setBookTitle] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createBook(bookTitle);
    // emptying the input
    setBookTitle('');
  };

  const handleChange = (event) => {
    setBookTitle(event.target.value);
  };

  return (
    <div className="book-create">
      <h3>Add a Book You Want To Read</h3>
      <form onSubmit={handleFormSubmit}>
        <label>Type Book Title</label>
        <input className="input" value={bookTitle} onChange={handleChange} />
        <button className="button">Add Book</button>
      </form>
    </div>
  );
}

export default BookCreate;
