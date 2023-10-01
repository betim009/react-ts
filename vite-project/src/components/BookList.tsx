import Book from "./Book";

interface BookListProps {
    books: {
        id: number;
        title: string;
        image: string;
    }[];
}

function BookList({ books }: BookListProps){
    return (
        <div className="book-list">
            {books.map((book) => (
                <Book key={book.id} bookInfo={book} />
            ))}
        </div>
    );
}

export default BookList;
