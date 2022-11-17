import React, { useState } from 'react'
import PostForm from '../components/Blog/PostForm'
import PostList from '../components/Blog/PostList'
import { PostProvider } from '../context/PostContext'

const Blog = () => {

    const [blog, setBlog] = useState([])

  return (
    <PostProvider initialValue={{setBlog}}>
        <div>
            <h1>Blog</h1>
            <div>
                <PostForm  />

                <PostList 
                    blog={blog} 
                />
            </div>
        </div>
    </PostProvider>
  )
}

export default Blog