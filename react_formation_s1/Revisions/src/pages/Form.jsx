import React, {useState} from 'react'

const Form = () => {
    const [inputName, setInputName] = useState()
    const [inputAge, setInputAge] = useState()

    const handleSubmit = e => {
        e.preventDefault()
        setInputName("Nom")
        setInputAge("Age")
    }

    const handleChangeName = e => {
        setInputName(e.target.value)
    }

    const handleChangeAge = e => {
        setInputAge(e.target.value)
    }
    
    return (
    <div>
        <h1>Form</h1>
        <h2>{inputName}</h2>

        <form onSubmit={handleSubmit}>
            <input placeholder="Nom" onChange={e => setInputName(e.target.value)} value={inputName} type="text"/>
            <input placeholder="Age" onChange={e => setInputAge(e.target.value)} value={inputAge} type="number"/>
            <button type="submit">Go!</button>
        </form>
    </div>
  )
}

export default Form