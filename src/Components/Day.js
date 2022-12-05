import React from 'react'
import '../Sass/styles.scss'
import { Link } from 'react-router-dom'
import done from '../images/icons8-ok-48.png'
import notDone from '../images/icons8-cancel-48.png'

export default function Day (props) {
  function createDayArr () {
    const dayArr = []

    //creating an array for days of the month
    for(let i=1; i <= props.howManyDays; i++) {
      const listArr = JSON.parse(localStorage.getItem(`${i}-${props.monthNumber}-${props.yearNumber}`)) 
      const todolength  = listArr ? listArr.length : 0
      const numberOfChecked = listArr ? listArr.filter(todo => todo.checked).length : 0
      const ratioOfDone = (numberOfChecked/todolength) ?  (numberOfChecked/todolength) : 0

      dayArr.push({
        type:"day", 
        day: i, 
        month: props.monthNumber, 
        year:props.yearNumber, 
        todolength:todolength, 
        numberOfChecked:numberOfChecked, 
        ratioOfDone:ratioOfDone})
      } 
    
    //filling up with blanks before the first day 
    if(props.dayOfFirstDay===0){ //which means the first day is on Sunday(0)
      for(let j=0; j < 6; j++) {
        dayArr.unshift({type:"padding",})
      } 

    } else {
      for(let p=0; p < props.dayOfFirstDay-1; p++) {
        dayArr.unshift({type:"padding",})
      } 
    }
    
    // filling up with blanks after the last day 
    if(props.dayOfLastDay!==0){
      for(let l=0; l < 7-props.dayOfLastDay; l++) {
        dayArr.push({type:"padding",})
      } 
    } 
    return dayArr;
  }

  // const isCurrentMonth = props.monthNumber -1 === new Date().getMonth();
  const showDays=
  createDayArr().map((day, index)=>{
    const condition = day.ratioOfDone >= 0.8 ? 'eighty' : 
    day.ratioOfDone >= 0.6 ? 'sixty' : 
    day.ratioOfDone >= 0.4 ? 'fourty' : 
    day.ratioOfDone >= 0.2 ? 'twenty' : 
    "zero";   
    const todolength = day.todolength
    const checked = day.numberOfChecked

    if (day.type === "day") {
      return (
        <Link 
          to={`/todo/${day.day}/${props.monthNumber}/${props.yearNumber}`} className={`${"aDay"} 
          ${(
            day.day === props.currentDay && 
            day.month === props.currentMonth &&
            day.year === props.currentYear) 
            && "currentDay"}
          ${condition}`} 
          key={index}>
            <div className='date'>{day.day}</div>
            {todolength !== 0 && 
            <div className='done'>
              <img src={done} />
              <span>{checked}</span>
            </div>}
            {todolength !== 0 && 
            <div className='notDone'>
              <img src={notDone}/>
              <span>{todolength-checked}</span>
            </div>}
        </Link>
      )
    } else if (day.type === "padding") {
      return (
      <div className="blank"></div>
      )
    }                    
  })

  return (
    <>
    <div className='days'>
      {showDays}
    </div>
    <div className='colorChart'>
      <div>less</div>
      <div className='colorChartBox zero'></div>
      <div className='colorChartBox twenty'></div>
      <div className='colorChartBox fourty'></div>
      <div className='colorChartBox sixty'></div>
      <div className='colorChartBox eighty'></div>
      <div>more</div>
    </div>
    </>
  )
}





