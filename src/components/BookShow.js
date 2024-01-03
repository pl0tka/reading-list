import { useState } from 'react';
import BookEdit from './BookEdit';
import useBooksContext from '../hooks/use-books-context';

function BookShow({ book }) {
  const { deleteBookById } = useBooksContext();
  const [showEdit, setShowEdit] = useState(false);

  // ** BUTTONS - EVENT HANDLERS **
  const handleDeleteBtn = () => {
    deleteBookById(book.id);
  };
  const handleEditBtn = () => {
    setShowEdit(!showEdit);
  };
  // ** SUBMIT THE FORM **
  const handleSubmit = () => {
    setShowEdit(false);
  };
  // ** TOGGLE EDITING MODE **
  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img alt="book" src={`http://picsum.photos/seed/${book.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditBtn}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteBtn}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
