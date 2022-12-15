import React from 'react'
import ProgressionBar from './ProgressionBar'
import './Task.css'

const Task = ({name, cat, month, day, completed, uncompleted}) => {
  return (
    <div className='task'>
        <div className='task_infos'>
            <div className='date'>
                <div className='month'>{month}</div>
                <div className='day'>{day}</div>
            </div>
            <div className='task_name_cat'>
                <div className='task_name'>{name}</div>
                <div className='task_cat'>{cat}</div>
            </div>
        </div>

        <ProgressionBar completed={completed} uncompleted={uncompleted} />
    </div>
  )
}

export default Task