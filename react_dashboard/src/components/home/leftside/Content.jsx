import React from 'react'
import './Content.css'
import Task from './scheduleContent/Task'
import GlobalView from './topChannels/GlobalView'

const Content = ({title}) => {
  return (
    <div className='content'>
      {
        title === "Schedule Content" &&
        <div className='schedule_content'>

          <Task name='Write 5 microblog articles on Instagram' 
                cat='Office / Marketing' 
                month='Jul' 
                day='18' 
                completed='72%' 
                uncompleted='28%' />

          <div className='line_content'></div>

          <Task name='Publish 20 post on Dribbbles' 
                cat='Office / Marketing' 
                month='Jul' 
                day='24' 
                completed='14%' 
                uncompleted='86%' />

          <div className='line_content'></div>

          <Task name='Drafting Material for Travel Campaign' 
                cat='Drafting' 
                month='Jul' 
                day='18' 
                completed='43%' 
                uncompleted='47%' />

        </div>
      }

      {
        title === "Top Channels" && 
        <div className='top_channels'>

          <GlobalView />
          
        </div>
      }
      
    </div>
  )
}

export default Content