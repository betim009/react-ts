import './book.css'
import { BookType } from '../../types/book.type';

type BookProps = {
    book: BookType,
};

function Book({ book }: BookProps) {
    return (
        <li>
            <p>{book.title}</p>
            <p>{book.pages}</p>
        </li>
    )
}

export default Book;