import React, { useState } from 'react'


import Header from './Header'

export default function Calendar(){
    const date = new Date();
    const [monthNumber, setMonthNumber] = useState(date.getMonth());
    const [yearNumber, setYearNumber] = useState(date.getFullYear());
    // const year = date.getFullYear();

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
            <Header monthNumber={monthNumber} yearNumber={yearNumber} onClickNextMonth={goToNextMonth} onClickPrevMonth={goToPrevMonth}/>
        </div>
    )
}