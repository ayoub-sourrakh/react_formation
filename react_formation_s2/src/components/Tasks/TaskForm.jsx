import React, { useContext, useState } from 'react'
import { TasksContext } from '../../context/TasksContext'

const TaskForm = () => {

    const {setTasks} = useContext(TasksContext)

    const [inputTask, setInputTask] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        setTasks(oldState => [
            ...oldState,
            {
                task: inputTask
            }
        ])
    }

  return (
    
    <div>
        <div>
            <h2>Add a task</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setInputTask(e.target.value)} placeholder='Task' name='Task' value={inputTask} type="text" />
                <br />
                <br />
                <button type='submit'>Add task</button>
            </form>
        </div>
    </div>
  )
}

export default TaskForm