import React, {useState, useContext} from 'react'
import { MoviesContext } from '../../context/MoviesContext'

const FormMovies = () => {

  const {setMovies} = useContext(MoviesContext)

  const [inputName, setInputName] = useState('')
  const [inputYear, setInputYear] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    setMovies(oldState => [
      ...oldState,
      {
        name: inputName,
        year: parseFloat(inputYear),
      },
    ])
  }

  return (
    <div>
      <h2>Add a movie</h2>
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setInputName(e.target.value)} placeholder='Name' type="text" name='Name' value={inputName} />
            <input onChange={(e) => setInputYear(e.target.value)} placeholder='Year' type="text" name='Year' value={inputYear} />
            <button type='submit'>Add movie</button>
        </form>
    </div>
  )
}

export default FormMovies