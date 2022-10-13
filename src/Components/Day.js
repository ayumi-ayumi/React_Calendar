import React from 'react'

export default function Day (props) {

  function showDay () {
    const dayArr = []
    const blank =[]

    for(let i=1; i <= props.howManyDays; i++) {
      dayArr.push(<div className='aDay' key={i}>{i}</div>)
      } 

    if(props.dayOfFirstDay===0){
      for(let j=0; j < 6; j++) {
        blank.push(<div></div>)
      } 
      dayArr.unshift(blank)

    } else {
      for(let j=0; j < props.dayOfFirstDay-1; j++) {
        blank.push(<div></div>)
      } 
      dayArr.unshift(blank)
      
    }
    
    // if(props.dayOfFirstDay!==1){
    //   for(let j=0; j < props.dayOfFirstDay-1; j++) {
    //     blank.push(<div></div>)
    //   } 
    //   dayArr.unshift(blank)
    // } 
    return <div  className='days'>{dayArr}</div>

  }

    return (
      <div>
      {showDay()}
      </div>
  )
}
