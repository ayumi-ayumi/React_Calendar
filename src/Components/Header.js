import React from "react"

export default function Header(props) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    return (
        <div className="header">
            <button onClick={props.onClickPrevMonth}>Prev Month</button>
            <div className="month">
                {months[props.monthNumber]}
            </div>
            <div  className="year">
                {props.yearNumber}
            </div>
            <button onClick={props.onClickNextMonth}>Next Month</button>
        </div>
    )
}