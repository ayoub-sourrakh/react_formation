import React, { useState } from 'react'
import ProduitsList from '../components/produits/ProduitsList'
import { ProduitsContext } from '../contexts/ProduitsContext'
import './Produits.css'

const Produits = () => {

  const [produits, setProduits] = useState(['Jeans','Sneaker','Nike','Adidas', 'Levis', 'GAP'])
  
  return (
    <ProduitsContext.Provider value={{setProduits}}>

      <div className='produits'>
        <h1 className='title'>Produits</h1>
        
        <ProduitsList produits={produits} />
      </div>

    </ProduitsContext.Provider>
  )
}

export default Produits