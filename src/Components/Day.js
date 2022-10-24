import React from 'react'
import '../Sass/Day.scss'

export default function Day (props) {

  function createDayArr () {
    const dayArr = []

    //creating an array for days of the month
    for(let i=1; i <= props.howManyDays; i++) {
      dayArr.push({value:"day", date: i,}) 
      } 
    
    //filling up with blanks before the first day 
    if(props.dayOfFirstDay===0){ //which means the first day is on Sunday(0)
      for(let j=0; j < 6; j++) {
        dayArr.unshift({value:"padding",})
      } 

    } else {
      for(let p=0; p < props.dayOfFirstDay-1; p++) {
        dayArr.unshift({value:"padding",})
      } 
    }
    
    // filling up with blanks after the last day 
    if(props.dayOfLastDay!==0){
      for(let l=0; l < 7-props.dayOfLastDay; l++) {
        dayArr.push({value:"padding",})
      } 
    } 
    return dayArr;
  }
  
  const isCurrentMonth = props.monthNumber === new Date().getMonth();

  const showDays=
  createDayArr().map((day, index)=>{
    return (
      <div className={`${day.date ? "aDay" : "blank"} 
      ${(day.date === props.currentDay && isCurrentMonth) && "currentDay" }`} 
      key={index}>
      {day.date}
      </div>
    )
  })

  return (
    <div className='days'>
    {showDays}
    </div>
  )
}


