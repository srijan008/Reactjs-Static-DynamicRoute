import React from 'react';
import Navbarr from './Navbarr';
import './blog.css';
import { user } from '../Data/data';
import { useLocation } from 'react-router-dom';

const BlogDetails = () => {
  const location = useLocation(); 
  const currentId = location.pathname.split('/')[2]; 

  const currentData = user.filter((v) => v.id == currentId)[0];
  console.log(currentData)  

  return (
    <>
      <Navbarr />
      <div className='itembox'>
        <h1>This is BlogDetails Page</h1>
        
      </div>
      <h1>{currentData.title}</h1>
    </>
  );
};

export default BlogDetails;
