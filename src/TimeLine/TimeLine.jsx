import React from 'react'
import "./TimeLine.css"
import Suggestions from './Suggestions'

function TimeLine() {
  return (
    <div className='timeline'>
        <div className="timeline__left">TimeLine</div>
        <div className="timeline__right">
            <Suggestions />
        </div>
    </div>
  )
}

export default TimeLine