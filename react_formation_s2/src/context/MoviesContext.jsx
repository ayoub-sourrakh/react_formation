import React, { useState, useContext } from 'react'

export const MoviesContext = React.createContext()

export const MoviesProvider = ({children, initialValue}) => {
    const [darkMode, setDarkMode] = useState(true)

    return (
        <MoviesContext.Provider value={{...initialValue, darkMode, setDarkMode}}>
            {children}
        </MoviesContext.Provider>
    )
}

export const useMovies = () => {
    const context = useContext(MoviesContext)
    return context
}