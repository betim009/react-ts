import { useState, useEffect } from "react";
import Book from "./components/Book";
import BookList from "./components/BookList";
import data from "./data.json";
import {BookListType, BookInfo} from "./types/BookListType";
import './App.css'

type CurrentListType = "wishList" | "readingList" | "readList";

function App() {
  const [currentBook, setCurrentBook] = useState(0);
  const [currentList, setCurrentList] = useState<CurrentListType>("wishList");
  const [wishList, setWishList] = useState<BookListType>([]);
  const [readingList, setReadingList] = useState<BookListType>([]);
  const [readList, setReadList] = useState<BookListType>([]);

  const lists = {
    wishList,
    readingList,
    readList,
  };

  useEffect(() => {
    setWishList([]);
    setReadingList([]);
    setReadList([]);
  }, []);

  const addBookToList = (book: BookInfo, list: CurrentListType) => {
    switch (list) {
      case "wishList":
        setWishList([...wishList, book]);
        break;
      case "readingList":
        setReadingList([...readingList, book]);
        break;
      case "readList":
        setReadList([...readList, book]);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <Book bookInfo={data.books[currentBook]} />

      <div className="selector-buttons">
        <button onClick={() => addBookToList(data.books[currentBook], "wishList")}>
          Adicionar à lista de desejos
        </button>
        <button onClick={() => addBookToList(data.books[currentBook], "readingList")}>
          Adicionar à lista de leitura
        </button>
        <button onClick={() => addBookToList(data.books[currentBook], "readList")}>
          Adicionar à lista de lidos
        </button>
      </div>

      <div>
        <button onClick={() => setCurrentBook((currentBook + 1) % data.books.length)}>
          Próximo livro
        </button>
        <button onClick={() => setCurrentList("wishList")}>
          Exibir lista de desejos
        </button>
        <button onClick={() => setCurrentList("readingList")}>
          Exibir lista de leitura
        </button>
        <button onClick={() => setCurrentList("readList")}>
          Exibir lista de lidos
        </button>
      </div>

      <h1>Lista de {currentList}</h1>
      <BookList books={lists[currentList]} />
    </div>
  );
}

export default App;
