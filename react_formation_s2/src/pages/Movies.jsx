import React, {useState} from 'react'
import ListMovies from '../components/Movies/ListMovies'
import FormMovies from '../components/Movies/FormMovies'
import { MoviesProvider } from '../context/MoviesContext'

const Movies = () => {
  const [movies, setMovies] = useState([])

  return (
    <MoviesProvider initialValue={{setMovies}}>
      <div>
        <h1>Movies</h1>
        <div>

          <FormMovies />

          <ListMovies
            movies={movies} 
          />

        </div>
      </div>
    </MoviesProvider>
  )
}

export default Movies