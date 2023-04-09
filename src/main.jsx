import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home'
import Main from './components/Main/Main';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
     {
      path : "/",
      element : <Home></Home>,
      loader : () => fetch('products.json')
     }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
