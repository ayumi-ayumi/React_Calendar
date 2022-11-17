import React from 'react'
import '../Sass/styles.scss'
// import '../Sass/daysOfWeek.scss'

export default function DaysOfWeek () {

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const htmlDays = days.map((day)=>{
    return (
      <div>{day}</div>
    )
  })
  
  const daysShort = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const htmldaysShort = daysShort.map((day)=>{
    return (
      <div>{day}</div>
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
