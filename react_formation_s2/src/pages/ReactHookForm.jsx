import React from 'react'
import { useForm } from 'react-hook-form'

const ReactHookForm = () => {
    const {handleSubmit, register} = useForm()

    const onSubmit = data => {
        console.log(data)
        console.log(data.km)
    }
  return (
    <div>
        <h1>React Hook Form</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='Nom de la voiture' type="text" {...register('name')} />
            <input placeholder='Km' type="number" {...register('km')} />
            <button type='submit'>Ajouter</button>
        </form>
    </div>
  )
}

export default ReactHookForm