type BookProps = {
    books: {
        title: string;
        author: string;
        year: number;
        genre: string;
        image: string;
    }[]
}

function Book({ books }: BookProps) {
    return (
        <>
            {books.map((e, index) => (
                <div key={index} className="col-md-4">
                    <h2>{e.title}</h2>
                    <img src={`${e.image}`} alt={`${e.title}`} />
                    <p>{e.author}</p>
                    <p>{e.year}</p>
                    <p>{e.genre}</p>
                </div>
            ))}
        </>
    )
}

export default Book;