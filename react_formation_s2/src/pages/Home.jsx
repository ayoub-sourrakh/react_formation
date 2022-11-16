import React, { useContext, useState } from 'react'
import TaskForm from '../components/Tasks/TaskForm'
import TaskList from '../components/Tasks/TaskList'
import { TasksContext } from '../context/TasksContext'

const Home = () => {

    const[tasks, setTasks] = useState([])

  return (
    <TasksContext.Provider
    value={{
        setTasks,
    }}>
    
    <div className='home'>
        <h1>Tasks</h1>
        <div>
            <TaskForm
                setTasks={setTasks}
             />

             <TaskList 
                tasks={tasks}
             />
        </div>
    </div>

    </TasksContext.Provider>
  )
}

export default Home