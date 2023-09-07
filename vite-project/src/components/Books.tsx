import Book from "./Book";
import data from "./data"

function Books() {
    return (
        <div className="row">
            <Book
                books={data}
            />
        </div>
    )
}

export default Books;