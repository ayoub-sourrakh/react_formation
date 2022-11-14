import React, { useContext } from 'react'
import { MoviesContext } from '../context/MoviesContext'

const Movie = ({movie, index, nbMovies}) => {

    const {setMovies} = useContext(MoviesContext)

    const movieDelete = () => {
        setMovies((oldState) => {
            const newState = [...oldState]
            newState.splice(index, 1)
            return newState
        })
    }

    const movieMove = (direction) => {
        setMovies(oldState => {
            const newState = [...oldState]
            let otherMoviesIndex = direction ? index - 1 : index + 1
            newState[otherMoviesIndex]= movie
            newState[index] = oldState[otherMoviesIndex]
            return newState
        })
    }

  return (
    <div>
        <h3>{movie.name} - {movie.year}</h3>
        <div>
            <button onClick={movieDelete}>Delete movie</button>
            <br />
            {
                index !== 0 && 
                <button onClick={() => movieMove(true)}>Up</button>
            }
            {
                nbMovies - 1 !== index &&
                <button onClick={() => movieMove(false)}>Down</button>
            }
        </div>
    </div>
  )
}

export default Movie