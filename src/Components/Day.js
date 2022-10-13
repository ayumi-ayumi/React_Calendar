import React from 'react'

export default function Day (props) {

  function showDay () {
    const dayArr = []
    for (let i=1; i <= props.howManyDays; i++) {
        console.log(props.howManyDays)
        dayArr.push(<div className='aDay'>{i}</div>)
    }
    return <div  className='days'>{dayArr}</div>
  }

  return (
    <div>
      {showDay()}
    </div>
  )
}