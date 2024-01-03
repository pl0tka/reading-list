import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookEdit({ book, onSubmit }) {
  const { editBookById } = useBooksContext();
  const [title, setTitle] = useState(book.title);

  const handleFromSubmit = (event) => {
    event.preventDefault();

    onSubmit();
    editBookById(book.id, title);
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form className="book-edit" onSubmit={handleFromSubmit}>
      <label>Type New Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-info">Save</button>
    </form>
  );
}

export default BookEdit;
