import React from "react";
import leftArrow from "../images/left_arrow.png"; 
import rightArrow from "../images/right_arrow.png";
import '../Sass/Header.scss'

export default function Header(props) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const [apiData, setApiData] = React.useState()
    React.useEffect(() => {
        fetch("https://api.adviceslip.com/advice")
        .then(res=>res.json())
        .then(data => setApiData(data.slip.advice))
    }, [])

    const [sunsetSunriseTime, setSunsetSunriseTime] = React.useState("")
    // const [sunriseTime, setSunriseTime] = React.useState("")
    React.useEffect(() => {
      fetch('https://api.sunrise-sunset.org/json?lat=52.52437&lng=13.41053&date=today')
      .then(res => res.json())
      .then(data => setSunsetSunriseTime(data.results))
    },[])
  
    function sunrise() {
      const sunriseTime = sunsetSunriseTime.sunrise
      const hours = parseInt(sunriseTime.substring(0,1)) + 1
      const minutes = sunriseTime.substring(2,4)
      const time = hours + ":" + minutes
      return <div>Sunrise {time}</div>
  }
  
    function sunset() {
        const sunsetTime = sunsetSunriseTime.sunset
        const hours = parseInt(sunsetTime.substring(0,1)) + 13
        const minutes = sunsetTime.substring(2,4)
        const time = hours + ":" + minutes
        return <div>Sunset {time}</div>
    }

    return (
        <div>
            <h2>{apiData}</h2>
            {sunrise()}
            {sunset()}
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