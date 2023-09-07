
import Book from './components/Book';
import './App.css'

const book1 = {
  title: "O Senhor dos Anéis",
  author: "J.R.R. Tolkien",
  year: 1954,
  genre: "Fantasia",
  image: "https://a-static.mlcdn.com.br/1500x1500/livro-a-sociedade-do-anel-capa-os-aneis-de-poder/magazineluiza/235381700/435e208634bd6a1344a4065ba0da771c.jpg"
};

const book2 = {
  title: "Harry Potter e a Pedra Filosofal",
  author: "J.K. Rowling",
  year: 1997,
  genre: "Fantasia",
  image: "https://jamboeditora.com.br/wp-content/uploads/2020/09/jamboeditora-pedrafilosofal-560x560.png"
};

function App() {
  return (
    <div className="Cards">
      {/* <Book
        title={book1.title}
        author={book1.author}
        image={book1.image}
      />

      <Book
        title={book2.title}
        author={book2.author}
        image={book2.image}
      /> */}

      <Book
        book={book1}
      />

      <Book
        book={book2}
      />
    </div>
  )
}

export default App
