import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {bookId} = useParams();
    const singleBookId = parseInt(bookId);
    const data = useLoaderData();
    
    const bookDetail = data.find(book => book.bookId === singleBookId);
    const {image,bookName,author,category,review,tags,totalPages,publisher,yearOfPublishing} = bookDetail;

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-sm w-9/12 mx-auto my-8">
                <figure className='w-1/3 p-16 bg-gray-100'>
                    <img
                    className='w-full'
                    src={image}
                    alt="Album" />
                </figure>
                <div className="card-body w-2/3">
                    <h2 className="card-title text-3xl">{bookName}!</h2>
                    <span>By : {author}</span>

                    <div class="divider my-0"></div>
                    <p>{category}</p>
                    <div class="divider my-0"></div>
                    <p>{review}</p>
                    <div className='flex gap-2 w-1/4 items-center'>
                    <p className='font-bold'>Tag</p>
                    {
                        tags.map(tag =>  
                                <p className='text-green-500 p-2 bg-gray-100'>{tag}</p>
                        )
                    }
                    </div>
                    <div class="divider my-0"></div>
                    <table className='w-1/3'>
                        <tbody>
                            <tr>
                            <td>Number Of Page : </td>
                            <td>{totalPages}</td>
                            </tr>
                            <tr>
                            <td>publisher : </td>
                            <td>{publisher}</td>
                            </tr>
                            <tr>
                            <td>yearOfPublishing : </td>
                            <td>{yearOfPublishing}</td>
                            </tr>
                            </tbody>
                    </table>
                    <div className="card-actions flex gap-4  mt-8">
                    <button className="btn btn-primary">Read</button>
                    <button className="btn btn-primary bg-[#50B1C9] border-none">Wishlist</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default BookDetails;