import React from "react";
import leftArrow from "../images/left_arrow.png"; 
import rightArrow from "../images/right_arrow.png";
import '../Sass/styles.scss'
// import '../Sass/header.scss'
import { useFetchSuntime } from '../Hooks/useFetchSuntime.js'

export default function Header(props) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Fetch advice slip
    // const [adviceSlip, setAdviceSlip] = React.useState()
    // React.useEffect(() => {
    //     fetch("https://api.adviceslip.com/advice")
    //     .then(res=>res.json())
    //     .then(data => setAdviceSlip(data.slip.advice))
    // }, [])

    const {sunriseTime, sunsetTime} = useFetchSuntime()
    console.log(sunriseTime)
    console.log(sunsetTime)
    // const time = useFetchSuntime()
    // const sunriseTime = time?.sunriseTime
    // const sunsetTime = time.sunsetTime
    console.log(123)

    return (
        <div>
           {/* <h2>{adviceSlip}</h2> */}
           <div>Sunrise {sunriseTime}</div>
           <div>Sunset {sunsetTime}</div>
            <div  className="button--month">
                <button onClick={props.onClickPrevMonth}><img src={leftArrow} alt="left_arrow"/></button>
                <div className="month">
                    {months[props.monthNumber]}
                </div>
                <div  className="year">
                    {props.yearNumber}
                </div>
                <button onClick={props.onClickNextMonth}><img src={rightArrow} alt="left_arrow"/></button>
            </div>
        </div>
    )
}