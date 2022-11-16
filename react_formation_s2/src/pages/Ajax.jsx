import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../assets/styles/pages/Ajax.css'

const Ajax = () => {
    const [urlImg, setUrlImg] = useState()

    useEffect(() => {
        request()
    }, [])

    const request = () => {
        fetch(
                'https://random.dog/woof.json',
                {
                    method: 'GET'
                }
        )
        .then((res) => res.json())
        .then((data) => {
            setUrlImg(data.url)
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='ajax'>
        <h1>Ajax</h1>
        <button onClick={request}>Woof</button><br /> <br />
        {
            urlImg && 
                <img src={urlImg} style={{maxWidth:'300px', maxHeight:'300px'}} alt="" ></img>
        }
    </div>
  )
}

export default Ajax