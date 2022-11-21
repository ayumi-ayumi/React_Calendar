import React from 'react'
import '../Sass/styles.scss'
// import '../Sass/day.scss'
import { Link } from 'react-router-dom'
import { createDayArr } from 'HelperFunctions/createDayArray';
// import { useCountContext} from '/Users/Ayumi/Desktop/Frauenloop/React/react_calendar/src/context.js'

export default function Day (props) {
  // const { todoListArr, setTodoListArr } = useCountContext();
  // const { count, setCount } = useCountContext();
  const [todoListArr, setTodoListArr] = React.useState([1,2,3])

  function createDayArr () {
    const dayArr = []

    //creating an array for days of the month
    for(let i=1; i <= props.howManyDays; i++) {
      const listArr = JSON.parse(localStorage.getItem(`${i}-${props.monthNumber}-${props.yearNumber}`)) 
      console.log(listArr)
      const todolength  = listArr ? listArr.length : 0
      const numberOfChecked = listArr ? listArr.filter(todo => todo.checked).length : 0
      console.log('numberOfChecked', numberOfChecked)
      // const numberOfChecked = listArr.filter(todo => todo.checked)
      // console.log(numberOfChecked)

      dayArr.push({value:"day", date: i, todolength:todolength, numberOfChecked:numberOfChecked})
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
  // console.log(props.listLength)
  const isCurrentMonth = props.monthNumber === new Date().getMonth();

  const showDays=
  createDayArr().map((day, index)=>{
    console.log(day.todolength)
    return (
      <Link to={`/todo/${day.date}/${props.monthNumber +1}/${props.yearNumber}`} className={`${day.date ? "aDay" : "blank"} 
      ${(day.date === props.currentDay && isCurrentMonth) && "currentDay" }`} 
      key={index}>
        <p>{day.date}</p>
        <p>{day?.todolength}</p>
        <p>{day?.numberOfChecked}</p>
      </Link>
    )
  })

  return (
    <div className='days'>
      {/* <h5>{todoListArr}</h5> */}
      {showDays}
    </div>
  )
}





