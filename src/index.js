import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"

import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoute = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/',
    element: <Home/>
  },
  {
    path: 'about-us',
    element: <About/>
  },
  {
    path: 'contact',
    element: <Contact/>
  },
  {
    path: 'blog',
    element: <Blog/>
  },
  {
    path: 'blog/:id',
    element: <BlogDetails/>
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoute} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
