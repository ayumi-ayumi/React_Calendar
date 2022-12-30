import React, { useState } from 'react'
import Header from './Header'
import DaysOfWeek from './DaysOfWeek'
import Day from './Day';
import { useLocation } from "react-router-dom"

export default function Calendar() {
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const [monthNumber, setMonthNumber] = useState(currentMonth);
    const [yearNumber, setYearNumber] = useState(currentYear);
    const howManyDays = new Date(yearNumber, monthNumber + 1, 0).getDate(); //showing the last day in a month
    const dayOfFirstDay = new Date(yearNumber, monthNumber, 1).getDay();
    const dayOfLastDay = new Date(yearNumber, monthNumber + 1, 0).getDay();

    function goToNextMonth() {
        if (monthNumber + 1 > 11) {
            setYearNumber(yearNumber + 1)
            setMonthNumber((monthNumber) => monthNumber = 0)
        } else {
            setMonthNumber((monthNumber) => monthNumber + 1)
        }
    }

    function goToPrevMonth() {
        if (monthNumber - 1 < 0) {
            setYearNumber(yearNumber - 1)
            setMonthNumber((monthNumber) => monthNumber = 11)
        } else {
            setMonthNumber((monthNumber) => monthNumber - 1)
        }
    }

    function goToToday() {
        setMonthNumber(currentMonth)
        setYearNumber(currentYear)
    }

    // Fetch the state values from Todo.js
    let { state } = useLocation()
    React.useEffect(() => {
        if (state) {
            // debugger;
            setMonthNumber(state.month)
            setYearNumber(state.year)
        }
    }, [])

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