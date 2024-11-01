
const Banner = () => {
    return (
        <div className="hero bg-base-200 py-8 mt-10 ">
            <div className="hero-content md:gap-8 flex-col lg:flex-row-reverse">
                <img
                src="/public/books.jpg"
                className=" md:w-2/5 w-4/5 shadow-xl" />
                <div className="flex flex-col gap-8">
                <h1 className="md:text-5xl text-3xl text-center md:text-start font-bold">
                    Books to freshen <br />
                    up your bookshelf</h1>
                <button className="btn btn-success">
                    View The List
                </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;