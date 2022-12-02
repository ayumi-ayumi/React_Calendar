import React, { useState } from 'react'
import Header from './Header'
import DaysOfWeek from './DaysOfWeek'
import Day from './Day';
import { useLocation, useNavigate } from "react-router-dom"

export default function Calendar(props) {
    // const date = new Date();
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const [monthNumber, setMonthNumber] = useState(currentMonth);
    const [yearNumber, setYearNumber] = useState(currentYear);
    // const [monthNumber, setMonthNumber] = useState(date.getMonth());
    // const [yearNumber, setYearNumber] = useState(date.getFullYear());
    const howManyDays = new Date(yearNumber, monthNumber + 1, 0).getDate(); //showing the last day in a month
    const dayOfFirstDay = new Date(yearNumber, monthNumber, 1).getDay();
    const dayOfLastDay = new Date(yearNumber, monthNumber + 1, 0).getDay();

    console.log(monthNumber)

    function goToNextMonth() {
        if(monthNumber + 1 > 11){
            setYearNumber(yearNumber+1)
            setMonthNumber((monthNumber)=>monthNumber=0) 
        } else {
            setMonthNumber((monthNumber) => monthNumber + 1)
        }
    }

    function goToPrevMonth() {
        if(monthNumber - 1 < 0){
            setYearNumber(yearNumber-1)
            setMonthNumber((monthNumber)=>monthNumber=11)
        } else {
            setMonthNumber((monthNumber)=>monthNumber - 1)
        }
    }

    function goToToday() {
        setMonthNumber(currentMonth)
        setYearNumber(currentYear)
    }

    let { state } = useLocation()
    // if ((data==="reload") && (state.month !== currentMonth)) {
    //     // eslint-disable-next-line 
    //     history.pushState({month:currentMonth, year: currentYear}, '')
    //     // state.month = date.getMonth()
    //     // state.year = date.getFullYear()
    // }
    // let { state } = useNavigate()
    React.useEffect(() => {
        if (state) {
            // debugger;
                setMonthNumber(prev=>state.month)
                setYearNumber(prev=>state.year)
        }
    }, [])
    // React.useEffect(() => {
    //     if (state) {
    //         // debugger;
    //         if(state.month===currentMonth && state.year===currentYear) {
    //             setMonthNumber(currentMonth)
    //             setYearNumber(currentYear)
    //         } else {
    //             setMonthNumber(prev=>state.month)
    //             setYearNumber(prev=>state.year)
    //         }
    //     }
    // }, [])

    // if(state) {
    //     setMonthNumber(prev=>state.month)
    //     setYearNumber(prev=>state.year)
    // }
    //     React.useEffect(()=>{
    //         state.month = date.getMonth()
    //         state.year = date.getFullYear()
    //         console.log("state:", state)
    //     // state.month =null
    //     // state.year =null
    // }, [])
    // React.useEffect(() => {
    //     if(state.month !== currentMonth || state.year !== currentYear)
    //         // setMonthNumber(currentMonth)
    //         // setYearNumber(currentYear)
    //         state.month = currentMonth
    //         state.year = currentYear
    //         console.log("second useEffect")
    // }, [])

    // console.log(monthNumber,yearNumber)

    return (
        <div>
            <Header
                monthNumber={monthNumber}
                yearNumber={yearNumber}
                goToNextMonth={goToNextMonth}
                goToPrevMonth={goToPrevMonth}
                goToToday={goToToday}
            />
            <DaysOfWeek />
            <Day
                howManyDays={howManyDays}
                dayOfFirstDay={dayOfFirstDay}
                dayOfLastDay={dayOfLastDay}
                currentDay={currentDay}
                currentMonth={currentMonth + 1}
                currentYear={currentYear}
                monthNumber={monthNumber + 1}
                yearNumber={yearNumber} />
        </div>
    )
}