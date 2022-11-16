import React from 'react'
import { useForm } from 'react-hook-form'
import '../assets/styles/pages/ReactHookForm.css'

const ReactHookForm = () => {
    const {handleSubmit, register, formState: {errors}} = useForm()

    console.log(errors)

    const onSubmit = data => {
        console.log(data)
        console.log(data.km)
    }
  return (
    <div className='reactHookForm'>
        <h1>React Hook Form</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                placeholder='Nom de la voiture' 
                type="text" 
                {...register('name', {required: true, minLength: 3})} 
            /> 
            <br />
            <br />

            {errors.name && <p style={{color:"red", fontSize:"20px"}}>
                {errors.names?.type === "required"
                ? "Le champs est requis"
                : errors.name?.type === "minLength"
                ? "3 caractère minimum"
                : "Erreur inconnu"}
                </p>}

            <input placeholder='Km' type="number" {...register('km', {min: 0, max: 2000000})} /> 
            {
                errors.km?.type === "max" && <p style={{color: "red", fontSize: "20px"}}>2000000 max</p>
            }
            <br />
            <br />
            <button type='submit'>Ajouter</button>
        </form>
    </div>
  )
}

export default ReactHookForm