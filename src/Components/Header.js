import React from "react";
import leftArrow from "../images/left_arrow.png"; 
import rightArrow from "../images/right_arrow.png";
import '../Sass/styles.scss'
import { useFetchSuntime } from '../Hooks/useFetchSuntime.js'
import { useFetchAdviceslip } from '../Hooks/useFetchAdviceslip.js'
import { useCountContext} from '/Users/Ayumi/Desktop/Frauenloop/React/react_calendar/src/context.js'

export default function Header(props) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const adviceSlip = useFetchAdviceslip()
    const {sunriseTime, sunsetTime} = useFetchSuntime()
    const { todoListArr, setTodoListArr } = useCountContext();


    return (
        <div>
           <h2>{adviceSlip}</h2>
           <div>{todoListArr}</div>

           <div>Sunrise {sunriseTime}</div>
           <div>Sunset {sunsetTime}</div>
            <div  className="button--month">
                <button onClick={props.goToPrevMonth}><img src={leftArrow} alt="left_arrow"/></button>
                <div className="month">
                    {months[props.monthNumber]}
                </div>
                <div  className="year">
                    {props.yearNumber}
                </div>
                <button onClick={props.goToNextMonth}><img src={rightArrow} alt="left_arrow"/></button>
            </div>
        </div>
    )
}