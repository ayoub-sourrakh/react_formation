import React, { useContext } from 'react'
import { useState } from 'react'

export const PostContext = React.createContext()

export const PostProvider = ({children, initialValue}) => {

    const [date, setDate] = useState(Date)


    return (
        <PostContext.Provider value={{...initialValue, date, setDate}}>
            {children}
        </PostContext.Provider>
    )
}

export const useBlog = () => {
    const context = useContext(PostContext)
    return context
}