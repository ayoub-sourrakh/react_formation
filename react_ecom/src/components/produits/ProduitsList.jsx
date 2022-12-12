import React from 'react'
import Produit from './Produit'
import './ProduitsList.css'

const ProduitsList = ({produits}) => {
  return (
    <div className='produitslist'>
      <div className="container">
        <div className="div1"><Produit key={0} /></div>
        <div className="div2"><Produit key={1} /></div>
        <div className="div3"><Produit key={2} /></div>
        <div className="div4"><Produit key={3} /></div>
        <div className="div5"><Produit key={4} /></div>
        <div className="div6"><Produit key={5} /></div>
      </div>
      <button className='panier'>Panier</button>
    </div>
    
  )
}

export default ProduitsList