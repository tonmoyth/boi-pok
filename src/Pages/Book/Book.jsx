import React from 'react';
import { Link } from 'react-router';

const Book = ({book}) => {
    
    const {bookId,image,author,bookName,category} = book;
    
    return (
        <div>
           <Link to={`/bookDetails/${bookId}`}>
           <div className="card bg-base-100 shadow-sm">
                <figure className='p-16 bg-[#F3F3F3]'>
                    <img className='h-[300px] w-[250px]'
                    src={image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <span className='text-green-400 font-bold'>{category}</span>
                    <h2 className="card-title">{bookName}</h2>
                    <p>by : {author}</p>
                    
                </div>
                </div>
           </Link>
        </div>
    );
};

export default Book;