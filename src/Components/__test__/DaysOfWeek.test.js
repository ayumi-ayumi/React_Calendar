import DaysOfWeek from "../DaysOfWeek"
import {render, screen} from "@testing-library/react"
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

describe("DaysOfWeek", ()=>{
  test("if the background is red", ()=>{

    render(<DaysOfWeek />);
    
    screen.debug();

  })
})