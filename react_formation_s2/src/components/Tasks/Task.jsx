import React from 'react'
import Menu from './Menu'

const Task = ({task}) => (
    <div>
        <h3>{task.task}</h3>
        <Menu />
    </div>
)

export default Task