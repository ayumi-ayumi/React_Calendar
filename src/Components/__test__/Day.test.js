import Day from "Components/Day"
import {render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

describe("Day", ()=>{
  test("if the background is red", ()=>{
    const props = {currentDay:14, monthNumber:10, howManyDays:30, dayOfFirstDay:2, dayOfLastDay:3 }

    render(<Day {...props}/>, {wrapper: BrowserRouter});
    //query element 
    const currentDay = screen.getByRole('link', {name: '14'});
    screen.debug(currentDay);
    expect(currentDay).toHaveStyle(`background-color: rgba(255, 0, 0, 0.165)`)

  })
})