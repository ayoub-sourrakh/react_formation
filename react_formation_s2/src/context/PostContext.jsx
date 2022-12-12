import React, { useContext } from 'react'
import { useState } from 'react'

export const PostContext = React.createContext()

export const PostProvider = ({children, initialValue}) => {

    const [posts, setPosts] = useState([])

    return (
        <PostContext.Provider 
            value={{
                ...initialValue,
                    posts,
                    setPosts,
                }}
        >
            {children}
        </PostContext.Provider>
    )
}

export const useBlog = () => {
    const context = useContext(PostContext)
    return context
}