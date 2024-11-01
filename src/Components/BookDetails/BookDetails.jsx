import { useLoaderData, useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import React from 'react';
import { addToStoredReadList, addToStoredWishList } from '../../utility/addToDb';

const BookDetails = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id);

    const { image, category, rating, author, bookName, review, tags, totalPages, publisher, yearOfPublishing } = book;

    const handleMarkAsRead = (id) =>{
        addToStoredReadList(id);
    }

    const handleAddToWishList = (id) =>{
        addToStoredWishList(id);
    }

    return (
        <div className=" my-10 bg-base-200 md:flex-row flex-col flex gap-8 py-4 px-10 items-center ">
            <div className="md:w-1/4 bg-base-300">
                <img src={image} className="" />
            </div>
            <div className="md:w-3/4 flex-col space-y-2 mb-4">
                
                <h2 className="text-2xl md:text-3xl font-bold">{bookName}</h2>
                <h3 className="text-xl md:text-2xl ">By: {author}</h3>
                <div className="flex gap-8 items-center">
                    <p className="badge border-none badge-secondary bg-primary">{category}</p>
                    <p className="flex items-center gap-1"><CiStar className="text-xl" /><strong>{rating}</strong></p>
                </div>
                <p>{review}</p>
                {tags && tags.map((tag, index) => (
                    <p key={index} className=" badge border-primary badge-outline">{ tag }  </p>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                    <p>Pages: <strong>{totalPages}</strong></p>
                    <p>Publisher: <strong>{publisher}</strong> </p>
                    <p>Year: <strong>{yearOfPublishing}</strong></p>
                </div>
                <div className="flex gap-4 items-center">
                    <button onClick={()=> handleMarkAsRead(bookId)} className="btn btn-outline">Marl As Read</button>
                    <button onClick={()=> handleAddToWishList(bookId)} className="btn btn-primary">Add To Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
