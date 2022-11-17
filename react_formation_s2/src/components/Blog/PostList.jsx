import React from 'react'
import Post from './Post'

const PostList = ({blog, setBlog}) => {
  return (
    <div>
        {
            blog.map((post, index) => (
                <Post 
                    key={index}
                    index={index}
                    post={post}
                    setBlog={setBlog}
                />
            ))
        }
    </div>
  )
}

export default PostList