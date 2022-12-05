import React from 'react'
import '../Sass/styles.scss'

export default function DaysOfWeek () {

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const id = Math.floor(Math.random() * 1000000)
  const htmlDays = days.map((day, index)=>{

    return (
      <div key={day+index}>{day}</div>
    )
  })
  
  const daysShort = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const htmldaysShort = daysShort.map((day, index)=>{
    return (
      <div key={day+index}>{day}</div>
    )
  })

  return (
    <div>
      <div className='daysOfWeek'>
        {htmlDays}
      </div>
      <div className='daysOfWeekShort'>
        {htmldaysShort}
      </div>
    </div>

  )
}