import React from 'react'

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

    // <div>
    //   <div className='daysOfWeek'>
    //       <div>Mon</div>
    //       <div>Tue</div>
    //       <div>Wed</div>
    //       <div>Thu</div>
    //       <div>Fri</div>
    //       <div>Sat</div>
    //       <div>Sun</div>
    //   </div>
    //   <div className='daysOfWeekShort'>
    //       <div>M</div>
    //       <div>T</div>
    //       <div>W</div>
    //       <div>T</div>
    //       <div>F</div>
    //       <div>S</div>
    //       <div>S</div>
    //   </div>
    // </div>