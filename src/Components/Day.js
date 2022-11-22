import React from 'react'
import '../Sass/styles.scss'
import { Link } from 'react-router-dom'

export default function Day (props) {
  const [todoListArr, setTodoListArr] = React.useState([1,2,3])

  function createDayArr () {
    const dayArr = []

    //creating an array for days of the month
    for(let i=1; i <= props.howManyDays; i++) {
      const listArr = JSON.parse(localStorage.getItem(`${i}-${props.monthNumber}-${props.yearNumber}`)) 
      const todolength  = listArr ? listArr.length : 0
      const numberOfChecked = listArr ? listArr.filter(todo => todo.checked).length : 0
      const ratioOfDone = (numberOfChecked/todolength) ?  (numberOfChecked/todolength) : 0

      dayArr.push({value:"day", date: i, todolength:todolength, numberOfChecked:numberOfChecked, ratioOfDone:ratioOfDone})
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

  const isCurrentMonth = props.monthNumber -1 === new Date().getMonth();

  const showDays=
  createDayArr().map((day, index)=>{
    // console.log(day)  
    const condition = day.ratioOfDone >= 0.8 ? 'eighty' : 
                      day.ratioOfDone >= 0.6 ? 'sixty' : 
                      day.ratioOfDone >= 0.4 ? 'fourty' : 
                      day.ratioOfDone >= 0.2 ? 'twenty' : 
                      "zero";   
    return (
      <Link 
      to={`/todo/${day.date}/${props.monthNumber}/${props.yearNumber}`} className={`${day.date ? "aDay" : "blank"} 
      ${(day.date === props.currentDay && isCurrentMonth) && "currentDay"}
      ${condition}`} 
      key={index}>
        <p>{day.date}</p>
      </Link>
    )
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





