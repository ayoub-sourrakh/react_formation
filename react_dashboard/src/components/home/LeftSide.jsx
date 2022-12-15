import React from 'react'
import './LeftSide.css'
import Title from './leftside/Title'
import Widget from './leftside/Widget'

const LeftSide = () => {
  return (
    <div className='leftside'>

        <Title />

        <Widget title='Schedule Content' />

        <Widget title='Top Channels' />
        
    </div>
  )
}

export default LeftSide