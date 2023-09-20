import './book.css'

type BookProps = {
    book: {
        title: string;
        pages: number;
        isRead: boolean;
        isFavorite: boolean;
    };
};

function Book({ book }: BookProps) {
    return (
        <li className='list-group-item list-group-item-dark text-center m-1'>
            <span>{book.isRead ? ' ✅ ' : ' 🕐 '}</span>
            <span>{`${book.title} (${book.pages})`}</span>
            {book.isFavorite && <span>💚</span>}
        </li>
    )
}

export default Book;