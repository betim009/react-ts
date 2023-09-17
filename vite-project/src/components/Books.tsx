import Book from "./Book";
import data from "./data"
import Title from "./Title";

function Books() {
    return (
        <div className="row">
            <Title />
            <Book
                books={data}
            />
        </div>
    )
}

export default Books;