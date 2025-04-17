import Book from "../Book/Book";


const Cards = ({data}) => {
    
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">BOOKS: {data?.length}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto my-8">
                {
                    data?.map(book => <Book key={book.bookId}
                    book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Cards;