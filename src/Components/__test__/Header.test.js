import {render, screen} from "@testing-library/react"
import Header from "Components/Header"
import { useFetchSuntime } from "Hooks/useFetchSuntime";
import '@testing-library/jest-dom'


jest.mock('Hooks/useFetchSuntime', () => ({
  useFetchSuntime: () => ({sunriseTime: '07:00', sunsetTime: '19:00'})
}));

describe("Header", ()=>{
  test("if the sunsrise/sunset displays", ()=>{
    
    render(<Header monthNumber={12} yearNumber={2022} onClickNextMonth={jest.fn()} onClickPrevMonth={jest.fn()}/>);
    //query element 
    screen.debug()

    const sunriseTime = screen.getByText("Sunrise 07:00")
    const sunsetTime = screen.getByText("Sunset 19:00")
    expect(sunriseTime).toBeInTheDocument()
    expect(sunsetTime).toBeInTheDocument()
  })
})