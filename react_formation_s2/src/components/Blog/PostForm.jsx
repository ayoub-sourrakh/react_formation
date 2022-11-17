import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { PostContext } from '../../context/PostContext'

const PostForm = () => {

  const {setBlog} = useContext(PostContext)

  const [inputTitle, setInputTitle] = useState('')
  const [inputText, setInputText] = useState('')
  const [inputCat, setInputCat] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    setBlog(oldState => [
      ...oldState,
      {
        title: inputTitle,
        text: inputText,
        cat: inputCat,
      },
    ])
  }

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setInputTitle(e.target.value)} type="text" placeholder='Titre' name='title' value={inputTitle}/> <br /> <br />
        <textarea onChange={(e) => setInputText(e.target.value)} name="text" value={inputText} cols="30" rows="10"></textarea> <br />
        <select onChange={(e) => setInputCat(e.target.value)} name="categorie" value={inputCat}>
          <option value="">-- Choisissez une catégorie -- </option>
          <option value="sport">Sport</option>
          <option value="music">Musique</option>
          <option value="others">Autres</option>
        </select> <br /> <br /> 
        <button type='submit'>Add post</button>
      </form>

    </div>
  )
}

export default PostForm