import React from 'react';

const Book = ({book}) => {

    const {image,author,bookName,category} = book;
    
    return (
        <div className=''>
            <div className="card bg-base-100 shadow-sm">
                <figure className='p-16  h-[500px]'>
                    <img
                    src={image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <span className='text-green-400 font-bold'>{category}</span>
                    <h2 className="card-title">{bookName}</h2>
                    <p>by : {author}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Book;