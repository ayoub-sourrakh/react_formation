import React from 'react'
import LeftSide from '../components/home/LeftSide'
import RightSide from '../components/home/RightSide'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <LeftSide />
      <RightSide />
    </div>
  )
}

export default Home