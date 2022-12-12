import React from 'react'
import './Produit.css'

const Produit = ({produit}) => (
    <div className='produit'>
      <div className='img'>IMGs</div>
      <h2 className='nomProduit'>Nom</h2>
      <button className='buyBtn'>+</button>
    </div>
  )

export default Produit