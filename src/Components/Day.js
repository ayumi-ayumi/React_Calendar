import React from 'react'

export default function Day (props) {

  function showDay () {
    const dayArr = []
    const blankOfBeginning =[]
    const blankOfEnd =[]
    console.log(props.dayOfLastDay)
    //creating an array for days of the month
    for(let i=1; i <= props.howManyDays; i++) {
      dayArr.push(<div className='aDay' key={i}>{i}</div>)
      } 
    
    //filling up days before the first day 
    if(props.dayOfFirstDay===0){
      for(let j=0; j < 6; j++) {
        blankOfBeginning.push(<div className='blank'></div>)
      } 
      dayArr.unshift(blankOfBeginning)

    } else {
      for(let p=0; p < props.dayOfFirstDay-1; p++) {
        blankOfBeginning.push(<div className='blank' key={p}></div>)
      } 
      dayArr.unshift(blankOfBeginning)
    }
    
    // filling up days after the last day 
    if(props.dayOfLastDay!==0){
      for(let l=0; l < 7-props.dayOfLastDay; l++) {
        blankOfEnd.push(<div className='blank' key={l+50}></div>)
      } 
      dayArr.push(blankOfEnd)

    } 
    return <div  className='days'>{dayArr}</div>
    
  }
  
  return (
    <div>
      {showDay()}
      </div>
  )
}

// else {
//   for(let j=0; j < props.dayOfLastDay-1; j++) {
//     blank.push(<div key={j}></div>)
//   } 
//   dayArr.push(blank)
  
// }


// if(props.dayOfFirstDay!==1){
//   for(let j=0; j < props.dayOfFirstDay-1; j++) {
//     blank.push(<div></div>)
//   } 
//   dayArr.unshift(blank)
// } 