import React from 'react'

export default function Day (props) {

  function showDay () {
    const dayArr = []
    const blankForBeginning =[]
    const blankForEnd =[]

    //creating an array for days of the month
    for(let i=1; i <= props.howManyDays; i++) {
      dayArr.push(<div className='aDay' key={i}>{i}</div>)
      } 
    
    //filling up with blanks before the first day 
    if(props.dayOfFirstDay===0){ //which means the first day is on Sunday(0)
      for(let j=0; j < 6; j++) {
        blankForBeginning.push(<div className='blank'></div>)
      } 
      dayArr.unshift(blankForBeginning)

    } else {
      for(let p=0; p < props.dayOfFirstDay-1; p++) {
        blankForBeginning.push(<div className='blank' key={p}></div>)
      } 
      dayArr.unshift(blankForBeginning)
    }
    
    // filling up with blanks after the last day 
    if(props.dayOfLastDay!==0){
      for(let l=0; l < 7-props.dayOfLastDay; l++) {
        blankForEnd.push(<div className='blank' key={l+50}></div>)
      } 
      dayArr.push(blankForEnd)

    } 
    return <div  className='days'>{dayArr}</div>
    
  }
  
  return (
    <div>
      {showDay()}
    </div>
  )
}
