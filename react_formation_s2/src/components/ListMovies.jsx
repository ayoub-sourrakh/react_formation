import React from 'react'
import Movie from './Movie'

const ListMovies = ({movies, setMovies}) => {
  return (
    <div>
        {
            movies.map((movie, index) => (
                <Movie 
                key={index} 
                movie={movie}
                setMovies={setMovies}
                index={index} 
                nbMovies={movies.length}
                />
            ))
        }
    </div>
  )
}

export default ListMovies