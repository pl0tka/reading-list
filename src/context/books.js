import { createContext, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  };

  // *** CRUD OPERATIONS WITH BOOKS ***
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    setBooks(books.filter((book) => book.id !== id));
  };
  const editBookById = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });

    const updatedBooks = books.map((book) =>
      book.id === id ? { ...book, ...response.data } : book
    );
    setBooks(updatedBooks);
  };
  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };
  // *** END OF CRUD OPERATIONS WITH BOOKS ***

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
