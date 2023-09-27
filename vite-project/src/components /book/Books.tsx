import './book.css'
import Book from './Book';
import { useState } from 'react';
import { BookType } from '../../types/book.type';

function Books() {
    const [data, setData] = useState<BookType[]>([]);
    const [bookTitle, SetBookTitle] = useState("");
    const [bookPages, SetBookPages] = useState(0);

    const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        SetBookTitle(event.target.value)
    };

    const handlePages = (event: React.ChangeEvent<HTMLInputElement>) => {
        SetBookPages(parseInt(event.target.value))
    };

    const handleClick = () => {
        if (bookTitle && bookPages) {
            const book = {
                title: bookTitle,
                pages: bookPages,
            };

            setData([...data, book])
            SetBookTitle("");
            SetBookPages(0);
        }
    }

    return (
        <>
            {data.length > 0 ? (
                data.map((book) => (
                    <ul key={book.title}>
                        <Book
                            book={book}
                        />
                    </ul>
                ))
            ) : (<span>Sem livros cadastrados</span>)}

            <h4>Livro:</h4>
            <input type="text"
                value={bookTitle}
                onChange={(event) => handleTitle(event)}
            />

            <h4>Páginas:</h4>
            <input type="number"
                value={bookPages}
                onChange={(event) => handlePages(event)}
            />

            <button
                onClick={handleClick}
            >
                Cadastrar
            </button>
        </>
    )
}

export default Books;
