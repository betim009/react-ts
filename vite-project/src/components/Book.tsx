// Modelo 1
// function Book(props) {
//     return (
//         <div>
//             <p>{props.title}</p>
//             <p>{props.author}</p>
//         </div>
//     )
// }



// Modelo 2
// function Book({ title, author }) {
//     return (
//         <div>
//             <p>{title}</p>
//             <p>{author}</p>
//         </div>
//     )
// }



// Modelo 3
// type BookProps = {
//     title: string,
//     author: string,
// }

// function Book({ title, author }: BookProps) {
//     return (
//         <div>
//             <p>{title}</p>
//             <p>{author}</p>
//         </div>
//     )
// }




// Modelo 4
// type BookProps = {
//     title: string,
//     author: string,
//     image: string,
// }

// function Book({ title, author, image }: BookProps) {
//     return (
//         <div>
//             <p>{title}</p>
//             <p>{author}</p>
//             <img src={`${image}`} alt={`${title}`} />
//         </div>
//     )
// }

// export default Book


// Modelo 5
type BookProps = {
    book: {
        title: string,
        author: string,
        year: number,
        genre: string,
        image: string,
    }
}

function Book({ book }: BookProps) {
    return (
        <div className="Cards">
            <div className="Card">
                <h2>{book.title}</h2>
                <img src={`${book.image}`} alt={`${book.title}`} />
                <p>{book.author}</p>
                <p>{book.year}</p>
                <p>{book.genre}</p>
            </div>
        </div>
    )
}

export default Book