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
            {books.length > 0 ? (
                books.map((e, index) => (
                    <div key={index} className="col-md-4 p-1">
                        <div className="card border-4">
                            <img className="card-img-top" src={`${e.image}`} alt={`${e.title}`} />
                            <div className="card-body text-center">
                                <h4 className="card-title">{e.title}</h4>
                                <p className="card-text text-primary">{e.author}</p>
                                <p className="card-text">{e.year}</p>
                                <p className="card-text">{e.genre}</p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (<h3>Sem Livros na galeria</h3>)
            }

        </>
    )
}

export default Book;