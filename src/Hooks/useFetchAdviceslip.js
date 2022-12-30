import React from "react"

export function useFetchAdviceslip () {
  const [adviceSlip, setAdviceSlip] = React.useState()
    React.useEffect(() => {
        fetch("https://api.adviceslip.com/advice")
        .then(res=>res.json())
        .then(data => setAdviceSlip(data.slip.advice))
    }, [])

  return adviceSlip
}