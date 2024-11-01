import { useEffect, useState } from "react";

import Book from "../Book/Book";

const Books = () => {

    const [books,setBooks]= useState([])
    useEffect(()=>{
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data =>setBooks(data))
    },[])

    return (
        <div className="mt-10 ">
            <h2 className=" text-center text-3xl md:text-4xl mb-5">Books</h2>
            {/* books load */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                {
                    books.map(book =><Book book={book} key={book.bookId}></Book>  )
                }
            </div>
        </div>
    );
};

export default Books;