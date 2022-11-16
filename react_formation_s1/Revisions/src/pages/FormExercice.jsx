import React, {useState} from 'react'

const FormExercice = () => {
    const [inputTache, setInputTache] = useState('')
    const [taches, setTaches] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
        setTaches([...taches, inputTache])
        setTache("")
    }

    const handleClickDelete = (index) => {
        const oldState = [...taches]
        oldState.splice(index, 1)
        setTaches(oldState)
    }

  return (
    <div>
        <h1>Form Exercice</h1>
        <form onSubmit={handleSubmit}>
            <input placeholder="Tâche" onChange={e => setInputTache(e.target.value)} value={inputTache} type="text"/>
            <button type="submit">✓</button>
        </form>
    </div>
  )
}

export default FormExercice