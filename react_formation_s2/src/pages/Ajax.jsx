import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

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
    <div>
        <h1>Ajax</h1>
        <button onClick={request}>Woof</button><br />
        {
            urlImg && 
                <img src={urlImg} style={{maxWidth:'300px', maxHeight:'300px'}} alt="" ></img>
        }
    </div>
  )
}

export default Ajax