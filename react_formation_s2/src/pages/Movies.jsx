import React, {useState} from 'react'
import ListMovies from '../components/ListMovies'
import FormMovies from '../components/FormMovies'
import { MoviesContext } from '../context/MoviesContext'

const Movies = () => {
  const [movies, setMovies] = useState([])

  return (
    <MoviesContext.Provider
    // share infos 
      value={{
        setMovies,  // == setMovies  : setMovies
      }}
    >
      <div>
        <h1>Movies</h1>
        <div>

          <FormMovies 
            setMovies={setMovies} 
          />

          <ListMovies
            movies={movies} 
          />

        </div>
      </div>
    </MoviesContext.Provider>
  )
}

export default Movies