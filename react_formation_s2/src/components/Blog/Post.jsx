import React from 'react'
import { useBlog } from '../../context/PostContext'

const Post = ({post, index}) => {

    const {setBlog, date} = useBlog()
    

    const postDelete = () => {
        setBlog((oldState) => {
            const newState = [...oldState]
            newState.splice(index, 1)
            return newState
        })
    }

  return (
    <div>
        <h2>{post.title}</h2>
        <p>{post.text}</p>
        <h3>{post.cat}</h3>
        <h5>{date}</h5>
        <button onClick={postDelete}>Supprimer le post</button>
        {/* <button onClick={postEdit}>Editer le post</button> */}
    </div>
  )
}

export default Post