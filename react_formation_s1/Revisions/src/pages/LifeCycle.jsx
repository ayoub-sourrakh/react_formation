import React, { useState } from 'react'
import Animal from '../components/LifeCycle/Animal'

const LifeCycle = () => {
    const [toggle, setToggle] = useState(false)
    const [fontColor, setFontColor] = useState('black')

  return (
    <div>
        <h1>Cycle de vie</h1>

        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        <button onClick={() => setFontColor('blue')}>Text Color</button>

        {
        toggle && 
        <>
            <Animal name="Girafe" width={200} fontColor={fontColor} />
            <Animal name="Lion" width={100} fontColor={fontColor} />
        </>
        }
    </div>
  )
}

export default LifeCycle