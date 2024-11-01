import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Components/Root/Root';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
// import Dashboard from './Components/Dashboard/Dashboard';
import BookDetails from './Components/BookDetails/BookDetails';
import ListedBooks from './Components/ListedBooks/ListedBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children : [
      {
          path: '/',
          element: <Home/>
      },
      {
          path: 'books/:bookId',
          element: <BookDetails/>,
          loader: ()=> fetch('/booksData.json')
      },
      {
          path: 'listedbooks',
          element: <ListedBooks/>,
          loader: ()=> fetch('/booksData.json')
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
