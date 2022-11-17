  // Fetch sunrise and sunset time
  import React from "react"
  import { sunrise, sunset } from "HelperFunctions/suntime"

  export function useFetchSuntime () {
    const [sunsetSunriseTime, setSunsetSunriseTime] = React.useState(null)
    // const [sunriseTime, setSunriseTime] = React.useState("")

    console.log(123)
    // React.useEffect(() => {
    //   async function fetchData(){
    //     const res = await fetch('https://api.sunrise-sunset.org/json?lat=52.52437&lng=13.41053&date=today&formatted=0')
    //     const data = await res.json()
    //     setSunsetSunriseTime(data.results)
    // }
    // fetchData()},
    // [])
    let sunriseTime;
    let sunsetTime;

    React.useEffect(() => {
      fetch('https://api.sunrise-sunset.org/json?lat=52.52437&lng=13.41053&date=today&formatted=0')
        .then(res => res.json())
        .then(data => setSunsetSunriseTime(data.results))
    },[])

    console.log(sunsetSunriseTime)
    if(sunsetSunriseTime) {
      sunriseTime = sunrise(sunsetSunriseTime)
      sunsetTime = sunset(sunsetSunriseTime)
    }

    console.log(sunriseTime)
    console.log(sunsetTime)
   
    return {sunriseTime, sunsetTime}
  }

