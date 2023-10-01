interface BookProps {
    bookInfo: {
        id: number;
        title: string;
        image: string;
    };
}

function Book({ bookInfo }: BookProps) {
    return (
        <div className="book">
            <h3>{bookInfo.title}</h3>
            <img src={bookInfo.image} alt={bookInfo.title} />
        </div>
    );
}

export default Book;
