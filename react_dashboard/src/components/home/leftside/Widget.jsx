import React from 'react'
import Content from './Content'
import './Widget.css'

const Widget = ({title, ...rest}) => {
  return (
    <div className='widget' {...rest}>
        <div className='widget_title'>
          {title}
          <div className='see_details'>
            See details
            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.70715 10.2072L6.41381 5.49984L1.70715 0.792511L0.29248 2.20718L3.58581 5.49984L0.29248 8.79251L1.70715 10.2072Z" fill="#017EFA"/>
            </svg>
          </div>
        </div>

        <div className='line'></div>
        
        <Content title={title} />
    </div>
  )
}

export default Widget