import "./App.css"
import MoneyForm from "./MoneyForm"
import TotalDisplay from "./TotalDisplay"
import { useState } from "react"

function App() {
  const [formTotal, setFormTotal] = useState(0.0)
  function formSubmitHandler() {}

  return (
    <div className="App">
      <MoneyForm formTotal={formTotal} />
      <TotalDisplay />
    </div>
  )
}

export default App
