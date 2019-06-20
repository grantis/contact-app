import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"

document.addEventListener("DOMContentLoaded", () => {
  render()
})

function render() {
  ReactDOM.render(<App />, document.getElementById("root"))
}
