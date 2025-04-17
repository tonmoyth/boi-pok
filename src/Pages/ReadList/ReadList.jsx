import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getLocal } from '../../Utility/Utility';
import Book from '../Book/Book';
import { getWishList } from '../../Utility/WishList';

const ReadList = () => {
    const [readList,setReadList] = useState([]);
    const [wishList,setWishList] = useState([]);
    const [sort,setSort] = useState('');

    const data = useLoaderData();
    useEffect(()=>{
        const getLocalData = getLocal();
        const readListData = data.filter(book => getLocalData.includes(book.bookId));
        setReadList(readListData)
    },[data]);

    useEffect(() => {
        const getWishIdFromLoacal = getWishList();
        const wishListData = data.filter(book => getWishIdFromLoacal.includes(book.bookId));
        setWishList(wishListData);
    },[data]);


   
    const anchorHandle = (type) => {
        setSort(type);
        if(type === "pages"){
            const sortPages = [...readList].sort((a,b)=> a.totalPages - b.totalPages);
            setReadList(sortPages);
        }else if(type === "rating"){
            const sortPages = [...readList].sort((a,b)=> a.rating - b.rating);
            setReadList(sortPages);
        }
    }
    return (
        <div>
            
   
           <div className='flex flex-col justify-center mt-8'>
           <div className='flex justify-center'>
           <button className="btn " popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
            sort by {sort === 'pages' ? 'pages' : 'rating'}
            </button>
           </div>

            <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
            popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
            <li><a onClick={()=>anchorHandle('pages')}>pages</a></li>
            <li><a onClick={()=>anchorHandle('rating')}>rating</a></li>
            </ul>
           </div>
        



              <Tabs className='w-11/12 mx-auto my-8'>
                    <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            readList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <h2>Wishlist Books</h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            wishList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                    </TabPanel>
                </Tabs>
        </div>
    );
};

export default ReadList;