
export function sunrise(sunsetSunriseTime) {
  const sunriseTimeToday = new Date(sunsetSunriseTime.sunrise) //5:55:55
  const sunriseHour = sunriseTimeToday.getHours()
  const sunriseMinute = sunriseTimeToday.getMinutes()
  const sunriseTime = sunriseHour + ":" + sunriseMinute
  return sunriseTime
}

export function sunset(sunsetSunriseTime) {
  const sunsetTimeToday = new Date(sunsetSunriseTime.sunset) //5:55:55
  const sunsetHour = sunsetTimeToday.getHours().toString()
  console.log(typeof(sunsetHour))
  const sunsetMinute = sunsetTimeToday.getMinutes().toString()
  const sunsetTime = sunsetHour + ":" + sunsetMinute
  console.log(typeof(sunsetTime))

  return sunsetTime
}

