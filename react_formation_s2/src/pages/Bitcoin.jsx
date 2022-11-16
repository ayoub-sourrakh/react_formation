import React from 'react'
import { useState, useEffect } from 'react'

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
    <div>
        <h1>Bitcoin</h1>

        <form onSubmit={request}>
            <input type="number" onChange={(e) => setBitcoin(e.target.value)} value={bitcoin} name="bitcoins" /> ₿ <br /> <br />
            <button type='submit'>Convert</button> <br /> <br />
            {euros} € 
            <br />
            <br />
            {dollars} $
            <br />
            <br />
            {pounds} £
        </form>
    </div>
  )
}

export default Bitcoin