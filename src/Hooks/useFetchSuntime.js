  // Fetch sunrise and sunset time
  import React from "react"
  import { sunrise, sunset } from "HelperFunctions/suntime"

  export function useFetchSuntime () {
    const [sunsetSunriseTime, setSunsetSunriseTime] = React.useState("")
    // const [sunriseTime, setSunriseTime] = React.useState("")
    React.useEffect(() => {
      fetch('https://api.sunrise-sunset.org/json?lat=52.52437&lng=13.41053&date=today&formatted=0')
      .then(res => res.json())
      .then(data => setSunsetSunriseTime(data.results))
    },[])

    
    const sunriseTime = sunrise(sunsetSunriseTime)
    const sunsetTime = sunset(sunsetSunriseTime)

    return {sunriseTime, sunsetTime}
  }

