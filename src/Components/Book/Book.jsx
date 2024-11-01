import {Link} from "react-router-dom"
import { CiStar } from "react-icons/ci";
const Book = ({book}) => {

    const {bookId,image,category,rating,author,bookName, tags} = book;


    return (
        <div >
            <div className="card border-2 shadow-xl rounded-xl p-4 h-[500px]">
                <Link to={`/books/${bookId}`} className="h-4/5 bg-base-200 py-4 rounded-t-xl">
                    <figure>
                        <img src={image} className="w-[40%]" />
                    </figure>
                </Link>
                <hr />
                <div className="card-body bg-base-200 rounded-b-xl">
                    <div className="flex justify-between">
                        <div className="badge border-none badge-secondary bg-primary">{category}</div>
                        <div>
                            <p className="flex items-center gap-1"><CiStar className="text-xl" />{rating}</p>
                        </div>
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>
                    <div className="card-actions justify-start">
                        <div className="badge border-primary badge-outline">{tags[0]}</div>
                        <div className="badge badge-outline border-primary">{tags[1]}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;
