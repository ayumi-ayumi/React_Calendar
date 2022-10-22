import React from "react";
import leftArrow from "../images/left_arrow.png"; 
import rightArrow from "../images/right_arrow.png";

export default function Header(props) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    return (
        <div className="header">
            <button onClick={props.onClickPrevMonth}><img src={leftArrow} alt="left_arrow"/></button>
            <div className="month">
                {months[props.monthNumber]}
            </div>
            <div  className="year">
                {props.yearNumber}
            </div>
            <button onClick={props.onClickNextMonth}><img src={rightArrow} alt="left_arrow"/></button>
        </div>
    )
}