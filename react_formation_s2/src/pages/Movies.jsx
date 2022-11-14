import React, {useState} from 'react'
import ListMovies from '../components/ListMovies'
import FormMovies from '../components/FormMovies'

const Movies = () => {
  const [movies, setMovies] = useState([])

  return (
    <div>
      <h1>Movies</h1>
      <div>
        <FormMovies setMovies={setMovies} />
        <ListMovies setMovies={setMovies} movies={movies} />
      </div>
    </div>
  )
}

export default Movies