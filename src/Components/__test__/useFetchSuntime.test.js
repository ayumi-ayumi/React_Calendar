import {render, screen, renderHook, act, waitFor} from "@testing-library/react";
import { useFetchSuntime } from "Hooks/useFetchSuntime";
import '@testing-library/jest-dom'

describe("useFetchSuntime", () => {
  const fakeTime = {
    sunrise: "2022-11-14T06:24:28+00:00",
    sunset: "2022-11-14T15:17:04+00:00"
  };
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeTime)
      })
    );
  })
  afterEach(() => {
    jest.restoreAllMocks();
  })

  test("if it hooks sunsetSunriseTime", async ()=>{
    const { result } = renderHook(() => useFetchSuntime())
    



    await waitFor(() => {console.log(result)})
    
    // await act(async () => {
    //    await console.log(result)
    //   // result.current.increment()
    // })

    // expect(result.current.count).toBe(1)
  })
}
)