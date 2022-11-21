import React, { useState } from 'react'
import Header from './Header'
import DaysOfWeek from './DaysOfWeek'
import Day from './Day';
import { Link } from 'react-router-dom'
import { CountProvider } from '/Users/Ayumi/Desktop/Frauenloop/React/react_calendar/src/context.js'

export default function Calendar(props) {
    const date = new Date();
    const [monthNumber, setMonthNumber] = useState(date.getMonth());
    const [yearNumber, setYearNumber] = useState(date.getFullYear());
    const howManyDays = new Date(yearNumber, monthNumber+1, 0).getDate(); //showing the last day in a month
    const dayOfFirstDay = new Date(yearNumber,monthNumber,1).getDay();
    const dayOfLastDay = new Date(yearNumber,monthNumber+1,0).getDay();
    const currentDay = new Date().getDate();

    function goToNextMonth() {
        setMonthNumber(()=>{
            if(monthNumber + 1 > 11){
                setYearNumber(yearNumber+1)
                return setMonthNumber(monthNumber=>monthNumber=0) 
            }
            return monthNumber + 1
        })
    }
    
    function goToPrevMonth() {
        setMonthNumber(()=>{
            if(monthNumber - 1 < 0){
                setYearNumber(yearNumber-1)
                return setMonthNumber(monthNumber=>monthNumber=11) 
            }
            return monthNumber - 1
        })
    }

    return (
        <div>
            {/* <h2>{count}</h2> */}

            {/* <Link to="/todo">Todo list</Link> */}
            <CountProvider><Header monthNumber={monthNumber} yearNumber={yearNumber} goToNextMonth={goToNextMonth} goToPrevMonth={goToPrevMonth} /></CountProvider>
            <DaysOfWeek />
            <CountProvider><Day howManyDays={howManyDays} dayOfFirstDay={dayOfFirstDay} dayOfLastDay={dayOfLastDay} currentDay={currentDay} monthNumber={monthNumber} /></CountProvider>
        </div>
    )
}