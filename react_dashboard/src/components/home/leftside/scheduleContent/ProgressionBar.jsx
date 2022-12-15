import React from 'react'
import './ProgressionBar.css'

const ProgressionBar = ({completed, uncompleted}) => {
  return (
    <div className='progression_bar'>
        <div className="bar">
            <div className='bar_completed' style={{width: completed}}></div>
            <div className='bar_uncompleted' style={{width: uncompleted}}></div>
        </div>
        <div className="pourcentage_complet">{completed} Complete</div>
    </div>
  )
}

export default ProgressionBar