import React from "react"
import ReactDOM from "react-dom"
import DateRangePicker from "./App"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<DateRangePicker />, div)
  ReactDOM.unmountComponentAtNode(div)
})
