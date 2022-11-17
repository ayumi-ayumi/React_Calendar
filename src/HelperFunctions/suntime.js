function sunrise(sunsetSunriseTime) {
  const sunriseTimeToday = new Date(sunsetSunriseTime.sunrise) 
  const sunriseHour = sunriseTimeToday.getHours().toString().padStart(2, '0');
  const sunriseMinute = sunriseTimeToday.getMinutes().toString().padStart(2, '0');
  const sunriseTime = sunriseHour + ":" + sunriseMinute
    console.log(123)

  return sunriseTime
}

 function sunset(sunsetSunriseTime) {
  const sunsetTimeToday = new Date(sunsetSunriseTime.sunset) 
  const sunsetHour = sunsetTimeToday.getHours().toString()
  const sunsetMinute = sunsetTimeToday.getMinutes().toString()
  const sunsetTime = sunsetHour + ":" + sunsetMinute
  
  return sunsetTime
}

export { sunrise, sunset };