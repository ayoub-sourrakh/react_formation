import React from 'react'
import { useState } from 'react'
import '../assets/styles/pages/Bitcoin.css'

const Bitcoin = () => {

    const [bitcoin, setBitcoin] = useState('')

    const [euros, setEuros] = useState('')
    const [dollars, setDollars] = useState('')
    const [pounds, setPounds] = useState('')
    

    const request = e => {

        e.preventDefault()

        fetch(
                'https://api.coindesk.com/v1/bpi/currentprice.json',
                {
                    method: 'GET'
                }
            )
            .then((res) => res.json())
            .then((data) => {
                setEuros(bitcoin * data.bpi.EUR.rate_float)
                setDollars(bitcoin * data.bpi.USD.rate_float)
                setPounds(bitcoin * data.bpi.GBP.rate_float)
            })
            .catch(err => console.log(err))

    }

  return (
    <div className='bitcoin'>
        <h1>Bitcoin converter</h1>

        <form onSubmit={request}>
            <input type="number" onChange={(e) => setBitcoin(e.target.value)} value={bitcoin} name="bitcoins" placeholder='Bitcoins' /> ₿ 
            &nbsp;
            <button type='submit'>Convert</button>
            <br />
            <br />
            <x>{euros}</x>
            <c>€</c>
            <br />
            <x>{dollars}</x>
            <c>$</c>
            <br />
            <x>{pounds}</x>
            <c>£</c>
        </form>
    </div>
  )
}

export default Bitcoin