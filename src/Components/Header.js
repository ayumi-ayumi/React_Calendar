import React from "react";
import leftArrow from "../images/left_arrow.png";
import rightArrow from "../images/right_arrow.png";
import sunrise from "../images/icons8-sunrise-30.png"
import sunset from "../images/icons8-sunset-30.png"
import '../Sass/styles.scss'
import { useFetchSuntime } from '../Hooks/useFetchSuntime.js'
import { useFetchAdviceslip } from '../Hooks/useFetchAdviceslip.js'

export default function Header(props) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const adviceSlip = useFetchAdviceslip()
    const { sunriseTime, sunsetTime } = useFetchSuntime()

    return (
        <div>
            <h2>{adviceSlip}</h2>
            <div className="suntime">
                <img src={sunrise} alt="sunrise"/>
                <p>Sunrise {sunriseTime}</p>
            </div>
            <div className="suntime">
                <img src={sunset} alt="sunset"/>
                <p>Sunset {sunsetTime}</p>
            </div>
            <div className="button--month">
                <button onClick={props.goToPrevMonth}><img src={leftArrow} alt="left_arrow" /></button>
                <div className="month">
                    {months[props.monthNumber]}
                </div>
                <div className="year">
                    {props.yearNumber}
                </div>
                <button onClick={props.goToNextMonth}><img src={rightArrow} alt="left_arrow" /></button>
            </div>
            <div>
                <button onClick={props.goToToday} className="button--today">Today</button>
            </div>
        </div>
    )
}