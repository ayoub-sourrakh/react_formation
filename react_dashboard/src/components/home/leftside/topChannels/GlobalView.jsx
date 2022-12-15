import React from 'react'
import './GlobalView.css'
import StatsReseaux from './StatsReseaux'

const GlobalView = () => {
  return (
    <div className='global_view'>
        <div className='nb_views'>120K</div>
        <div className='bar_view'>
            <div className='fb_bar'></div>
            <div className='inst_bar'></div>
            <div className='linked_bar'></div>
            <div className='ytb_bar'></div>
        </div>
    </div>
  )
}

export default GlobalView