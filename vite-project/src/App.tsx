import './App.css'
import { useState } from 'react'
import Book from './components/book'
import data from './data'

function App() {
  const [books, setBooks] = useState(data);
  const [bookTitle, setBookTitle] = useState("");
  const [bookPages, setBookPages] = useState(0);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBookTitle(event.target.value)
  };

  const handlePagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBookPages(event.target.valueAsNumber)
  };

  const handleAddClick = () => {
    const newBook = {
      title: bookTitle,
      pages: bookPages,
      isRead: false,
      isFavorite: false,
    };

    setBooks([...books, newBook]);
  };

  return (
    <div className='container p-1'>
      <h1 className='display-5 text-center'>List Group Books</h1>
      <div className='d-flex justify-content-center'>
        <div>
          {books.map((book) =>
            <ul className='list-group '>
              <Book
                key={book.title}
                book={book}
              />
            </ul>
          )}
        </div>
      </div>

      <div className='d-flex justify-content-center p-5'>
        <div className='p-1'>
          <input
            type="text"
            placeholder='Título'
            value={bookTitle}
            onChange={handleNameChange}
            className='form-control'
          />
        </div>

        <div className='p-1'>
          <input
            type="number"
            placeholder='Quantidade de Paǵinas'
            value={bookPages}
            onChange={handlePagesChange}
            className='form-control'
          />
        </div>
      </div>

      <div className='text-center'>
        <button
          onClick={handleAddClick}
          className='btn btn-secondary'
        >
          Adicionar
        </button>
      </div>
    </div>
  )
}

export default App
