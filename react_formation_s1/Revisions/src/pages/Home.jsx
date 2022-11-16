import React, {useState} from 'react'
import './Home.css'

const Home = () => {
    const [count, setCount] = useState(0)
    const [countBg, setCountBg] = useState()

    const handleClick = () => {
        setCount(count + 1)
        setCountBg(!countBg)
    }
    
  return (
    <div className='homePage'>
        <h1>Home</h1>
        <p>
            Mon compteur est à {" "} 
            <span className={countBg ? "count" : "countFalse"}
            style= {{
                backgroundColor : countBg ? "black" : "orange"
            }}
            >
            {count}
            </span>
        </p>
        <button onClick={handleClick}>+1</button>
    </div> 
  )
}

export default Home