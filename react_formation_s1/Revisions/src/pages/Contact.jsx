import React, {useState} from 'react'
import './Contact.css'

const Contact = () => {
  const [count, setCount] = useState(0)
  const [countBg, setCountBg] = useState('black')

  const handleClick = () => {
    setCount(count + 10)
    if (count > 30 && count < 50) {
      setCountBg(!countBg)
    }
  }
  return (
    <div className='contactPage'>
        <h1>Contact</h1>
        <p>
            Le compteur est à {" "} 
            <span className={countBg ? "count" : "countFalse"}
            style= {{
                backgroundColor : countBg ? "black" : "green"
            }}
            >
            {count}
            </span>
        </p>
        <button onClick={handleClick}>+10</button>
    </div> 
  )
}

export default Contact