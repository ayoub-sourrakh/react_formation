import React, { useContext } from 'react'
import { TasksContext } from '../../context/TasksContext'

const Menu = ({index}) => {

    const {setTasks} = useContext(TasksContext)

    const taskDelete = () => {
        setTasks((oldState) => {
            const newState = [...oldState]
            newState.splice(index, 1)
            return newState
        })
    }

  return (
    <div>
        <div>
            <button onClick={taskDelete}>Delete task</button>
        </div>
    </div>
  )
}

export default Menu