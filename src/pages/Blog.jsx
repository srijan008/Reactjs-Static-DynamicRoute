import React from 'react'
import Navbarr from './Navbarr'
import './blog.css'
import {user} from '../Data/data'
import { Link } from 'react-router-dom'
const Blog = () => {
    let allBlogs = user.map((v,i) => {
        return (
            <div className='blogItem' key={i}>
                <h3>{v.title}</h3>
                <p> {v.body}</p>
                <button><Link to={`/blog/${v.id}`}>Read More</Link></button>
            </div>
    
        
    )      
    })
  return (
    <>
    
     <Navbarr/>
     <div className='itembox'>
      <h1>This is Blog Page</h1>
        
      <br />   
      
    </div>
    <div className="container">
             {allBlogs}
    </div>
    </>
    
  )
}

export default Blog
