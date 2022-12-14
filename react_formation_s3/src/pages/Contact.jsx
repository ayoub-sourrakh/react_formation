import React from 'react'

const Contact = () => {
  const {handleSubmit, register, formState: {erros}} = useForm()

  const onSubmit = data => {

  }

  return (
    <div>
      <h1>Contact</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register()} />
      </form>
    </div>
  )
}

export default Contact